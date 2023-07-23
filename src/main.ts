require('dotenv').config();

import { TransportHttpModule } from '@nest-datum/transport-http';
// import { TransportTcpModule } from '@nest-datum/transport-tcp';
import { AppModule } from './app.module';

async function bootstrap() {
	TransportHttpModule.listen(AppModule);
	// TransportTcpModule.listen(AppModule);
};

bootstrap();
