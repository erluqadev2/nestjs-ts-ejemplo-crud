import { Injectable } from '@nestjs/common';
import { EstadoPoliza, Poliza } from './poliza.entity';
import { PolizaUpdate, PolizaCreate } from './dto/poliza.dto';

@Injectable()
export class PolizaService {

  private polizas: Poliza[] = [
    {
      numeroPoliza: '100020',
      codProd: '2101',
      fecIniVig: '2023-08-01',
      fecFinVig: '2024-08-01',
      cliente: 'Petronilo Sanchez',
      estado: EstadoPoliza.ACT
    },
    {
      numeroPoliza: '100021',
      codProd: '2101',
      fecIniVig: '2023-08-10',
      fecFinVig: '2024-08-10',
      cliente: 'Fidencio Galvez',
      estado: EstadoPoliza.ACT
    }
  ]

  listarPolizas(): Poliza[] {
    return this.polizas;
  }

  registrarPoliza(polizaCreate: PolizaCreate): Poliza {
    const polizaNueva: Poliza = {
      numeroPoliza: polizaCreate.numeroPoliza,
      codProd: polizaCreate.codProd,
      fecIniVig: polizaCreate.fecIniVig,
      fecFinVig: polizaCreate.fecFinVig,
      cliente: polizaCreate.cliente,
      estado: EstadoPoliza.ACT
    }
    this.polizas.push(polizaNueva);
    return polizaNueva;
  }

  obtenerPolizaByNumero(numero: string): Poliza {
    return this.polizas.find(p => p.numeroPoliza === numero);
  }

  eliminarPoliza(numeroPoliza: string): Poliza {
    const poliza = this.obtenerPolizaByNumero(numeroPoliza);
    if (poliza) {
      this.polizas = this.polizas.filter(p => p.numeroPoliza !== numeroPoliza);
    }
    return poliza;
  }

  actualizarPoliza(numeroPoliza: string, polizaUpdate: PolizaUpdate) {
    let poliza = this.obtenerPolizaByNumero(numeroPoliza);
    poliza = Object.assign(poliza, polizaUpdate);
    this.polizas = this.polizas.map(p => p.numeroPoliza === numeroPoliza ? poliza : p)
    return poliza;
  }

}
