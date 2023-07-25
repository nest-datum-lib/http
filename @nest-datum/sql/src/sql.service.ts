import { 
	Repository,
	Connection, 
} from 'typeorm';
import { CacheService } from '@nest-datum/cache';
import { 
	EntityService,
	Entity, 
} from '@nest-datum/entity';

export class SqlService extends EntityService {
	protected readonly repository: Repository<Entity>;
	protected readonly connectionService: Connection;
	protected readonly cacheService: CacheService;
}
