import { HttpClient } from '@angular/common/http';
import { CommonService } from '../../shared/services/common.service';
import 'rxjs/add/operator/toPromise';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { map } from 'rxjs/operators';
import { TransportCompanyModel } from '../model/empresaTransportista.model';
import { ConductorModel } from '../model/conductor.model';
import { MedioTransporteModel } from '../model/medioTransporte.model';
import { DummyServices } from '../util/util.model';


export class InfoTransportCompanyService {
    private metodo: string;
    public url_api: string;
    ret: any;
    arrayTransporte: Array<TransportCompanyModel>;
    arrayConductores: Array<ConductorModel>;
    arrayCamiones: Array<MedioTransporteModel>;


    constructor(public http: HttpClient, private commonService: CommonService) {
        this.url_api = environment.url_api;
    }

    // Metodo con el cual se recuperan todas las empresas transportistas desde
    public getEmpresasTransportistas () {
        this.metodo = '/getEmpresasTransportistas';
        // return this.http.get(this.url_api + this.metodo).pipe(map(res => res));
        return DummyServices.arrayEmpresaTransportista;

    }

    // Metodo con el cual se recuperan los conductores a partir de una empresa especifica
    public getConductores(empresaTransportista: String) {
      this.metodo = '/getConductores';
      // return this.http.get(this.url_api +  this.metodo + '/' + empresaTransportista).pipe(map(res => res));
      return DummyServices.arrayConductor;
    }

    // Metodo con el cual se recuperan las patentes a partir de una empresa especifica
    public getPatentes(empresaTransportista: any) {
      this.metodo = '/getPatentes';
      // return this.http.get(this.url_api + this.metodo + '/' +  empresaTransportista).pipe(map(res => res));
      return DummyServices.arrayEmpresaTransportista;

    }





}
