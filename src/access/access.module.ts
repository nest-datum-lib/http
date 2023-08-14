import { 
	Module,
	NestModule,
	MiddlewareConsumer,
} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NestjsFormDataModule } from 'nestjs-form-data';
import { AccessService } from './access.service';
import { AccessController } from './access.controller';
import { Access } from './access.entity';

@Module({
	controllers: [ AccessController ],
	imports: [
		TypeOrmModule.forFeature([
			Access,
		]),
		NestjsFormDataModule,
	],
	providers: [ 
		AccessService,
	],
})
export class AccessModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
	}
}
