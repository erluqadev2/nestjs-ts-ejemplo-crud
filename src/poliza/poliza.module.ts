import { Module } from '@nestjs/common';
import { PolizaController } from './poliza.controller';
import { PolizaService } from './poliza.service';

@Module({
  controllers: [PolizaController],
  providers: [PolizaService]
})
export class PolizaModule {}
