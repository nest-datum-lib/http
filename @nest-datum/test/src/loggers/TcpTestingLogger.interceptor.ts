import { 
  Injectable, 
  NestInterceptor, 
  ExecutionContext, 
  CallHandler 
} from "@nestjs/common";
import { Observable } from "rxjs";
import { TcpContext } from "@nestjs/microservices";
import { Global } from "@nestjs/common";

@Global()
@Injectable()
export default class TcpTestingLogger implements NestInterceptor {
  public intercept(
    context: ExecutionContext, 
    next: CallHandler<any>
  ): Observable<any> | Promise<Observable<any>> {
    const context_type = context.getType();
    if (context_type !== 'rpc')
      return next.handle();

    const rpc_context = context.switchToRpc();

    const request = rpc_context
      .getContext<TcpContext>()
      .getPattern();
    const data = rpc_context
      .getData();

    console.log(
      '>'.repeat(20) + 'TCP REQUEST' + '<'.repeat(20) +
      `\n\n>>> REQUEST: ${JSON.stringify(request, null, '\t')}` +
      `\n>>> PAYLOAD: ${JSON.stringify(data, null, '\t')}` +
      '\n\n',
    );

    return next.handle();
  }
}
