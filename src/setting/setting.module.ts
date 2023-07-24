import { 
	Module,
	NestModule,
	MiddlewareConsumer,
} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SqlSettingModule } from '@nest-datum/sql-setting';
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
export class SettingModule extends SqlSettingModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
	}
}
