import { 
	Get, 
	Query,
	Param,
} from '@nestjs/common';
import { ModelEnvController } from '@nest-datum/model-env';

class Sample {
}

export function ModelHttpEnvController(Base: any = Sample) {
	class AbstractBase extends ModelEnvController(Base) {
		@Get('env/:envKey')
		async getOneWithEnv(@Param('envKey') envKey: string, @Query() properties: object): Promise<object> {
			return await super.getOneWithEnv(envKey, properties);
		}
	}

	return AbstractBase;
}
