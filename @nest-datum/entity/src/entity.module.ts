import { Module } from '@nestjs/common';
import { EntityService } from './entity.service';

@Module({
	imports: [],
	controllers: [],
	providers: [ 
		EntityService, 
	],
})
export class EntityModule {
}
