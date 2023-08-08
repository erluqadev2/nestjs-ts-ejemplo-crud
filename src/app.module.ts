import { Module } from '@nestjs/common';
import { PolizaModule } from './poliza/poliza.module';

@Module({
  imports: [PolizaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
