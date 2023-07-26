import { Entity } from 'typeorm';
import { SettingSql } from '@nest-datum/setting';

@Entity()
export class Setting extends SettingSql {
}
