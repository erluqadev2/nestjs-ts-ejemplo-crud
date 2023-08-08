export enum EstadoPoliza {
  ACT = 'ACT',
  ANU = 'ANU',
  REN = 'REN'
}

export class Poliza {
  numeroPoliza: string
  codProd: string
  fecIniVig: string
  fecFinVig: string
  cliente: string
  estado: EstadoPoliza
}