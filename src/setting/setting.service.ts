import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { 
	Repository,
	Connection, 
} from 'typeorm';
import { SettingSqlService } from '@nest-datum/setting-sql';
import { Setting } from './setting.entity';

@Injectable()
export class SettingService extends SettingSqlService {
	constructor(
		@InjectRepository(Setting) public readonly repository: Repository<Setting>,
		public readonly connectionService: Connection,
	) {
		super();
	}
}
