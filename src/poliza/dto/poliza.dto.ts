import { EstadoPoliza } from "../poliza.entity"

export class PolizaCreate {
    numeroPoliza: string
    codProd: string
    fecIniVig: string
    fecFinVig: string
    cliente: string
}

export class PolizaUpdate {
    cliente: string
    estado: EstadoPoliza
}