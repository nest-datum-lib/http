import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { 
	Repository,
	Connection, 
} from 'typeorm';
import { CacheService } from '@nest-datum/cache';
import { SettingService as NestDataumSettingService } from '@nest-datum/setting';
import { Setting } from './setting.entity';

@Injectable()
export class SettingService extends NestDataumSettingService {
	public entityName = 'setting';
	public entityConstructor = Setting;

	constructor(
		@InjectRepository(Setting) public repository: Repository<Setting>,
		public connection: Connection,
		public cacheService: CacheService,
	) {
		super(repository, connection, cacheService);
	}
}
