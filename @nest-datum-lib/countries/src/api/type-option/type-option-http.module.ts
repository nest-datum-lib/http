import { 
	Module,
	NestModule,
	MiddlewareConsumer,
} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { 
	CacheModule,
	CacheService, 
} from '@nest-datum/cache';
import { TypeOptionService } from './type-option.service';
import { TypeOptionHttpController } from './type-option-http.controller';
import { TypeTypeTypeOption } from '../type-type-type-option/type-type-type-option.entity';
import { TypeTypeOption } from '../type-type-option/type-type-option.entity';
import { Type } from '../type/type.entity';
import { RegionContent } from '../region-content/region-content.entity';
import { TypeOption } from './type-option.entity';

@Module({
	controllers: [ TypeOptionHttpController ],
	imports: [
		TypeOrmModule.forFeature([ 
			RegionContent,
			TypeOption,
			TypeTypeOption,
			Type,
			TypeTypeTypeOption, 
		]),
		CacheModule,
	],
	providers: [ 
		CacheService,
		TypeOptionService,
	],
})
export class TypeOptionHttpModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
	}
}
