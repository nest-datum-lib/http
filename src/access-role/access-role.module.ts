import { 
	Module,
	NestModule,
	MiddlewareConsumer,
} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NestjsFormDataModule } from 'nestjs-form-data';
import { AccessRoleService } from './access-role.service';
import { AccessRoleController } from './access-role.controller';
import { AccessRole } from './access-role.entity';

@Module({
	controllers: [ AccessRoleController ],
	imports: [
		TypeOrmModule.forFeature([
			AccessRole,
		]),
		NestjsFormDataModule,
	],
	providers: [ 
		AccessRoleService,
	],
})
export class AccessRoleModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
	}
}
