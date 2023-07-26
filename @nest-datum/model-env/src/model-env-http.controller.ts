import { 
	Get, 
	Query,
	Param,
} from '@nestjs/common';
import { ModelEnvController } from './model-env.controller';

export class ModelEnvHttpController extends ModelEnvController {
	@Get('env/:envValue')
	async getOneWithEnv(@Param('envValue') envValue: string, @Query() properties: object): Promise<object> {
		return await super.getOneWithEnv(envValue, properties);
	}
}
