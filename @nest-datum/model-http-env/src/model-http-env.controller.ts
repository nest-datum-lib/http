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
		@Get('env/:envValue')
		async getOneWithEnv(@Param('envValue') envValue: string, @Query() properties: object): Promise<object> {
			return await super.getOneWithEnv(envValue, properties);
		}
	}

	return AbstractBase;
}
