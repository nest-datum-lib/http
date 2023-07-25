import { Mixin } from 'ts-mixer';
import { Get } from '@nestjs/common';
import { SqlController } from '@nest-datum/sql';
import { TransportHttpController } from '@nest-datum/transport-http';
import { TransportTcpController } from '@nest-datum/transport-tcp';

export class SqlModelController extends Mixin(SqlController, TransportHttpController, TransportTcpController) {
}
