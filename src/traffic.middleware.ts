import { 
	Injectable, 
	NestMiddleware, 
} from '@nestjs/common';
import { 
	Request, 
	Response, 
	NextFunction, 
} from 'express';
import { BalancerService } from 'nest-datum/balancer/src';
import { TrafficException } from 'nest-datum/exceptions/src';

@Injectable()
export class TrafficMiddleware implements NestMiddleware {
	constructor(
		private readonly balancerService: BalancerService,
	) {
	}

	use(req: Request, res: Response, next: NextFunction) {
		try {
			const accessToken = req['headers']['access-token']
				|| req['body']['accessToken']
				|| req['query']['accessToken'];
			const host = req.get('Host');
			const referrer = (req['headers'] || {})['referrer'] 
				|| (req['headers'] || {})
				|| req.get('Referrer');
			const ip = req.headers['x-forwarded-for'] 
				|| req.socket.remoteAddress;
			const originalUrl = (req['originalUrl'] || '')
				.split('?')
				.shift();
			const method = req['method'];
			const headers = req['headers'];
			const body = req['body'];
			const queries = req['query'];
			const param = req['params'];
			const referrerStr = (referrer
				&& typeof referrer === 'object'
				&& referrer['host'])
				? referrer['host']
				: referrer;

			const exception = new TrafficException(`TrafficMiddleware - ${referrerStr}`, {}, {
				host,
				referrer: referrerStr,
				ip,
				originalUrl,
				method,
				headers,
				body,
				queries,
				param,
			});

			console.log('aaaaAAAaaaaaaaaaa', exception);

			this.balancerService.log(exception);
		}
		catch (err) {
			console.error(`Log emit creation.`);
		}
		next();
	}
}
