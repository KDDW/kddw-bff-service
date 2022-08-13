import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';

@Controller()
export class HealthCheckController {
  @Get('/healthcheck')
  @HttpCode(HttpStatus.OK)
  healthCheck(): string {
    return 'ok';
  }
}
