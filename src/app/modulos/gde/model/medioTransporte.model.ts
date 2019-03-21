export class MedioTransporteModel {

  public patente: String;
  public descripcion: String;
  public cubicaje: Number;
  public sucDespacho: String;
  public informBeetrack: Boolean;

  constructor() {
    this.patente = undefined;
    this.descripcion = undefined;
    this.cubicaje = undefined;
    this.sucDespacho = undefined;
    this.informBeetrack = false;
  }
}
