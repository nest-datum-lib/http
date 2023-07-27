import { 
	Repository,
	Connection, 
} from 'typeorm';
import { ModelService } from './model.service';

class Sample {
}

export function ModelSqlService(Base: any = Sample) {
	class AbstractBase extends ModelService(Base) {
		public readonly repository;
		public readonly connectionService: Connection;
	}

	return AbstractBase;
}
