import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { 
	Repository,
	Connection, 
} from 'typeorm';
import { AccessSqlService } from '@nest-datum/access-sql';
import { Access } from './access.entity';

@Injectable()
export class AccessService extends AccessSqlService {
	constructor(
		@InjectRepository(Access) public readonly repository: Repository<Access>,
		public readonly connectionService: Connection,
	) {
		super();
	}
}
