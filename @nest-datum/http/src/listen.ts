import { NestFactory } from '@nestjs/core';

export const listen = async (Module, callback = () => console.log(`HTTP: port "${process.env.APP_HTTP_PORT}".`)) => (await NestFactory.create(Module)).listen(Number(process.env.APP_HTTP_PORT), callback);

