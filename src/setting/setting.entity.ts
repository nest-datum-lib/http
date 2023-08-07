import { Entity } from 'typeorm';
import { SettingSql } from '@nest-datum/setting-sql';

@Entity()
export class Setting extends SettingSql {
}
