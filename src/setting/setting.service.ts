import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { 
	Repository,
	Connection, 
} from 'typeorm';
import { SettingSqlService } from '@nest-datum/setting-sql';
import { AccessRole } from '../access-role/access-role.entity';
import { Setting } from './setting.entity';

@Injectable()
export class SettingService extends SettingSqlService {
	constructor(
		@InjectRepository(Setting) public readonly repository: Repository<Setting>,
		@InjectRepository(AccessRole) public readonly accessRoleRepository: Repository<AccessRole>,
		public readonly connectionService: Connection,
	) {
		super();
	}
}
