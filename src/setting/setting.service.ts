import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { 
	Repository,
	Connection, 
} from 'typeorm';
import { SqlSettingService } from '@nest-datum/sql-setting';
import { CacheService } from '@nest-datum/cache';
import { Setting } from './setting.entity';

@Injectable()
export class SettingService extends SqlSettingService {
	constructor(
		@InjectRepository(Setting) protected readonly repository: Repository<Setting>,
		protected readonly connectionService: Connection,
		protected readonly cacheService: CacheService,
	) {
		super();
	}
}
