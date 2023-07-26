import { 
	Repository,
	Connection, 
} from 'typeorm';
import { ModelService } from './model.service';

export class ModelSqlService extends ModelService {
	protected readonly repository;
	protected readonly connectionService: Connection;
}
