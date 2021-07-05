import {
  Module,
  NestModule,
  MiddlewareConsumer,
  RequestMethod,
} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { User } from './models/user.model';

import { App1Module } from './modules/app1.module';
import { HealthModule } from './modules/health.module';

import { AuthMiddleware } from './middlewares/auth.middleware';
import { GrayLoggerTypeOrm } from './helpers/graylog';
import {
  DB_USE,
  DATABASE_HOST,
  DATABASE_USER,
  DATABASE_PASSWORD,
  DATABASE_PORT,
  DATABASE,
  LOGGING_TYPEORM,
  NODE_ENV,
  MIGRATIONS_RUN_AUTOMATIC,
  SYNCHRONIZE_TYPEORM_DB,
  ACTIVATE_GRAYLOG,
} from './config';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        type: DB_USE,
        host: DATABASE_HOST,
        port: DATABASE_PORT,
        username: DATABASE_USER,
        password: DATABASE_PASSWORD,
        database: DATABASE,
        autoLoadEntities: true,
        synchronize:
          NODE_ENV === 'development' ? SYNCHRONIZE_TYPEORM_DB : false,
        logging: LOGGING_TYPEORM,
        migrations: ['dist/database/migrations/*{.ts,.js}'],
        migrationsTableName: 'migrations_typeorm',
        migrationsRun: MIGRATIONS_RUN_AUTOMATIC,

        logger:
          ACTIVATE_GRAYLOG === true
            ? new GrayLoggerTypeOrm({
                application: configService.get<string>('GRAYLOG_APPLICATION'),
                applicationName: configService.get<string>(
                  'GRAYLOG_APPLICATION_NAME',
                ),
                productName: configService.get<string>('GRAYLOG_NAME'),
                environment: configService.get<string>('GRAYLOG_ENVIRONMENT'),
                servers: [
                  {
                    host: configService.get<string>('GRAYLOG_HOST'),
                    port: parseInt(configService.get<string>('GRAYLOG_PORT')),
                  },
                ],
              })
            : null,
      }),
    }),
    TypeOrmModule.forFeature([User]),
    HealthModule,
    App1Module,
  ],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .exclude({ path: '/health', method: RequestMethod.GET })
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
