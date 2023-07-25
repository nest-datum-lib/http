import { Mixin } from 'ts-mixer';
import { Entity } from 'typeorm';
import { SqlModelEntity } from '@nest-datum/sql-model';
import { SqlModelEnvEntity } from '@nest-datum/sql-model-env';
import { SqlModelRemovableEntity } from '@nest-datum/sql-model-removable';
import { SqlModelStatusEntity } from '@nest-datum/sql-model-status';
import { SqlModelUserEntity } from '@nest-datum/sql-model-user';

@Entity()
export class Route extends Mixin(SqlModelEntity, SqlModelEnvEntity, SqlModelRemovableEntity, SqlModelStatusEntity, SqlModelUserEntity) {
}
