import { 
	Get, 
	Query,
} from '@nestjs/common';
import { EntityService } from '@nest-datum/entity';
import { TransportController } from '@nest-datum/transport';

export class TransportHttpController extends TransportController {
	protected readonly service: EntityService;

	@Get()
	async many(@Query() properties: object): Promise<Array<Array<any> | number>> {
		return await this.errorHandler(() => {
			console.log('1111111111111111');

			return [];
		});
	}
}
