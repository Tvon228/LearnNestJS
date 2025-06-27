import { ConfigService } from "@nestjs/config";
import type { TypeOrmModuleOptions } from "@nestjs/typeorm";

export function getDatabaseConfig(configService: ConfigService): TypeOrmModuleOptions {
    return {
        type: 'postgres',
        host: configService.getOrThrow('POSTGRES_HOST'),
        port: configService.getOrThrow('POSTGRES_PORT'),
        username: configService.getOrThrow('POSTGRES_USER'),
        password: configService.getOrThrow('POSTGRES_PASSWORD'),
		database: configService.getOrThrow('POSTGRES_DATABASE'),
		autoLoadEntities: true,
		synchronize: true,
    }
}