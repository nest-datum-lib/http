import { Injectable, Global, NestInterceptor, CallHandler, ExecutionContext } from "@nestjs/common";
import { Request, Response, NextFunction } from 'express';
import { Observable } from "rxjs";

/**
 * Logs all requests and responses for every endpoint of http controllers.
 */
@Global()
@Injectable()
export default class HttpTestingLogger implements NestInterceptor {
  public intercept(
    context: ExecutionContext, 
    next: CallHandler<any>
  ): Observable<any> | Promise<Observable<any>> {
    const context_type = context.getType();
    if (context_type !== 'http')
      return next.handle();

    const http_context = context.switchToHttp();
    const request = http_context.getRequest() as Request;
    const response = http_context.getResponse() as Response;

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
        '>'.repeat(20) + 'HTTP REQUEST' + '<'.repeat(20) +
        `\n\n/${method} ${url} (expected ${statusCode})` +
        `\n>>> REQUEST QUERY - ${JSON.stringify(reqQuery, null, "\t")}` +
        `\n>>> REQUEST BODY - ${JSON.stringify(reqBody, null, "\t")}` +
        `\n>>> RESPONSE BODY - ${JSON.stringify(resBody, null, "\t")}`,
        '\n\n'
        );
    });

    return next.handle();
  }
}