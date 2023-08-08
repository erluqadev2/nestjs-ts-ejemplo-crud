import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { PolizaService } from './poliza.service';
import { PolizaUpdate, PolizaCreate } from './dto/poliza.dto';

@Controller('poliza')
export class PolizaController {

  constructor(private polizaService: PolizaService) {}

  @Get()
  obtenerPolizas() {
    return this.polizaService.listarPolizas();
  }

  @Get(':numeroPoliza')
  obtenerPolizaByID(@Param('numeroPoliza') numeroPoliza: string) {
    return this.polizaService.obtenerPolizaByNumero(numeroPoliza);
  }

  @Post()
  crearPoliza(@Body() poliza: PolizaCreate) {
    return this.polizaService.registrarPoliza(poliza);
  }

  @Patch(':numeroPoliza')
  actualizaPolizas(@Param('numeroPoliza') numeroPoliza: string, @Body() polizaUpdate: PolizaUpdate) {
    return this.polizaService.actualizarPoliza(numeroPoliza, polizaUpdate);
  }

  @Delete(':numeroPoliza')
  eliminarPoliza(@Param('numeroPoliza') numeroPoliza: string) {
    return this.polizaService.eliminarPoliza(numeroPoliza);
  }

}
