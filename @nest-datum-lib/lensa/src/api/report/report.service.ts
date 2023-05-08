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
	protected readonly withTwoStepRemoval: boolean = true;
	protected readonly withEnvKey: boolean = false;
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
			id: true,
			lensaId: true,
			targetId: true,
			source: true,
			candidateSource: true,
			customerCategory: true,
			fileId: true,
			language: true,
			jobTitle: true,
			firstName: true,
			email: true,
			state: true,
			city: true,
			isDeleted: true,
			createdAt: true,
			updatedAt: true,
		};
	}

	protected oneGetColumns(customColumns: object = {}): object {
		return {
			id: true,
			lensaId: true,
			targetId: true,
			source: true,
			candidateSource: true,
			customerCategory: true,
			fileId: true,
			language: true,
			jobTitle: true,
			firstName: true,
			email: true,
			state: true,
			city: true,
			isDeleted: true,
			createdAt: true,
			updatedAt: true,
		};
	}
}
