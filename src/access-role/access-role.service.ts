import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { 
	Repository,
	Connection, 
} from 'typeorm';
import { AccessSqlRoleService } from '@nest-datum/access-sql';
import { AccessRole } from './access-role.entity';

@Injectable()
export class AccessRoleService extends AccessSqlRoleService {
	constructor(
		@InjectRepository(AccessRole) public readonly repository: Repository<AccessRole>,
		public readonly connectionService: Connection,
	) {
		super();
	}
}
