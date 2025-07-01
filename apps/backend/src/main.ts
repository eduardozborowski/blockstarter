import { Logger } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import type { NextFunction } from "express";
import { AppModule } from "./app.module";

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	const logger = new Logger("HTTP");

	app.use((req: Request, res: Response, next: NextFunction) => {
		logger.log(`${req.method} ${req.url}`);
		next();
	});

	await app.listen(4000);
}
bootstrap();
