require('dotenv').config();

import { listen } from '@nest-datum/http';
import { AppModule } from './app.module';

async function bootstrap() {
	listen(AppModule);
};

bootstrap();
