import { Module } from '@nestjs/common';
import { TransportModule } from '@nest-datum/transport';
import { TransportTcpService } from './transport-tcp.service';

@Module({
	imports: [],
	controllers: [],
	providers: [ 
		TransportTcpService, 
	],
})
export class TransportTcpModule extends TransportModule {
}
