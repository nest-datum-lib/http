import { 
  Injectable, 
  NestInterceptor, 
  ExecutionContext, 
  CallHandler 
} from "@nestjs/common";
import { Observable } from "rxjs";

@Injectable()
export default class TcpTestingLogger implements NestInterceptor {
  public intercept(
    context: ExecutionContext, 
    next: CallHandler<any>
  ): Observable<any> | Promise<Observable<any>> {
    console.log('request:', context);
    return next.handle();
  }
}
