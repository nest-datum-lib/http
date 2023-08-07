import { NestMiddleware, Injectable } from "@nestjs/common";
import { Request, Response, NextFunction } from 'express';

/**
 * Logs every request & response for every endpoint.
 */
@Injectable()
export default class TestingLogger implements NestMiddleware {
  public use(
    request: Request, 
    response: Response, 
    next: NextFunction,
  ): void {
    const { method, path: url, body: reqBody, query: reqQuery } = request;

    let resBody;
    const { statusCode } = response;
    const originalSend = response.send;

    response.send = function (body) {
      resBody = body;
      return originalSend.apply(response, arguments);
    }

    response.on('close', () => {
      try {
        resBody = JSON.parse(resBody);
      } catch(err) {}
      
      console.log(
        `/${method} ${url} (expected ${statusCode})`+
        `\n>>> REQUEST QUERY - ${JSON.stringify(reqQuery, null, "\t")}` +
        `\n>>> REQUEST BODY - ${JSON.stringify(reqBody, null, "\t")}`+
        `\n>>> RESPONSE BODY - ${JSON.stringify(resBody, null, "\t")}`
        );
    });

    next();
  }
}