import { Module } from '@nestjs/common';
import { HealthCheckController } from 'healthcheck/healthcheck.controller';

@Module({
  imports: [],
  controllers: [HealthCheckController],
  providers: [],
})
export class AppModule {}
