import { Entity } from 'typeorm';
import { SqlSettingEntity } from '@nest-datum/sql-setting';

@Entity()
export class Setting extends SqlSettingEntity {
}
