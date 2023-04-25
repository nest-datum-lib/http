import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { 
	Repository,
	Connection, 
} from 'typeorm';
import { SqlService } from '@nest-datum/sql';
import { CacheService } from '@nest-datum/cache';
import { Report } from './report.entity';

@Injectable()
export class ReportService extends SqlService {
	protected readonly repositoryConstructor = Report;

	constructor(
		@InjectRepository(Report) protected readonly repository: Repository<Report>,
		protected readonly connection: Connection,
		protected readonly repositoryCache: CacheService,
	) {
		super();
	}

	protected manyGetColumns(customColumns: object = {}): object {
		return {
			...super.manyGetColumns(customColumns),
			userId: true,
			reportStatusId: true,
			action: true,
			content: true,
			email: true,
			letterId: true,
		};
	}

	protected manyGetQueryColumns(customColumns: object = {}): object {
		return {
			...super.manyGetQueryColumns(customColumns),
			userId: true,
			reportStatusId: true,
			action: true,
			content: true,
			email: true,
			letterId: true,
		};
	}

	protected oneGetColumns(customColumns: object = {}): object {
		return {
			...super.oneGetColumns(customColumns),
			userId: true,
			action: true,
			content: true,
			email: true,
		};
	}
}
