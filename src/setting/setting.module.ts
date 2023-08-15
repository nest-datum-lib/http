import { 
	Module,
	NestModule,
	MiddlewareConsumer,
} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NestjsFormDataModule } from 'nestjs-form-data';
import { AccessRole } from '../access-role/access-role.entity';
import { SettingService } from './setting.service';
import { SettingController } from './setting.controller';
import { Setting } from './setting.entity';

@Module({
	controllers: [ SettingController ],
	imports: [
		TypeOrmModule.forFeature([
			Setting,
			AccessRole,
		]),
		NestjsFormDataModule,
	],
	providers: [ 
		SettingService,
	],
})
export class SettingModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
	}
}
