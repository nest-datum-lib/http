import { 
	Module,
	NestModule,
	MiddlewareConsumer,
} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SettingModule as BaseSettingModule } from '@nest-datum/setting';
import { SettingService } from './setting.service';
import { SettingController } from './setting.controller';
import { Setting } from './setting.entity';

@Module({
	controllers: [ SettingController ],
	imports: [
		TypeOrmModule.forFeature([
			Setting,
		]),
	],
	providers: [ 
		SettingService,
	],
})
export class SettingModule extends BaseSettingModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
	}
}
