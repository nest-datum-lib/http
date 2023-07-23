import { Module } from '@nestjs/common';
import { EntityModule } from '@nest-datum/entity';
import { SqlService } from './sql.service';

@Module({
	imports: [],
	controllers: [],
	providers: [ 
		SqlService, 
	],
})
export class SqlModule extends EntityModule {
}
