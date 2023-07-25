import { Entity } from 'typeorm';
import { SqlStatusEntity } from '@nest-datum/sql-status';

@Entity()
export class RouteStatus extends SqlStatusEntity {
}
