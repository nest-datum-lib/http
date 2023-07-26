import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { 
	Repository,
	Connection, 
} from 'typeorm';
import { SettingSqlService } from '@nest-datum/setting';
import { Setting } from './setting.entity';

@Injectable()
export class SettingService extends SettingSqlService {
	constructor(
		@InjectRepository(Setting) protected readonly repository: Repository<Setting>,
		protected readonly connectionService: Connection,
	) {
		super();
	}
}
