import { Component, OnInit, OnDestroy, AfterViewInit, ViewChild, Renderer,Inject } from '@angular/core';
import { Globals } from '../../../shared/utils/globals';
import { Router } from '@angular/router';
import { EmisionUnitariaModel } from '../../model/emisionUnitariaGde.model';
import { EmisionUnitariaGdeService } from '../../services/emisionUnitariaGde.service';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { TableConfigEmisionGDE } from '../../util/tableConfig.util';
import { MessageService } from '../../../shared/services/message.service';
import { DialogService } from 'ng2-bootstrap-modal';

import { EmisionMasivoGDEModel } from '../../model/emisionMasivoGde.model';
import { DummyServices } from '../../util/util.model';
import { RouterConstanst } from '../../util/constant.util';






@Component({
  selector: ' app-emisionmasiva ',
  templateUrl: './emisionMasivaGde.component.html',
  styleUrls: ['./emisionMasivaGde.component.scss']
})
export class EmisionMasivaGdeComponent implements OnInit, OnDestroy, AfterViewInit {

  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;

  @ViewChild('myModalEmailInfo') myModalEmailInfo;
  dtOptions: any;
  dtTrigger: Subject<any> = new Subject();


  arrayEmisionMasiva: Array<EmisionMasivoGDEModel>;

  radioButtonSelected: String;
  inputOCRut: String;

  messageValidBoolean: Boolean;
  messageValid: String;

  ret: any;

  constructor(public globals: Globals,
    public router: Router,
    public emisionUnitariaGDEService: EmisionUnitariaGdeService,
    public renderer: Renderer,
    public configTable: TableConfigEmisionGDE,
    public messageService: MessageService,
    public dialogService: DialogService) {
      this.inputOCRut = '';
      this.arrayEmisionMasiva = new Array();
  }

  ngOnInit() {
    this.messageValidBoolean = false;
    this.dtOptions = this.configTable.dtOptionsWithinScrollX;
  }

  ngAfterViewInit(): void {
    this.dtTrigger.next();
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }


  buscarMasivas() {
    this.getGuiasDespachoMasivo();
  }
   detalleMasivo(objMasivoGde: EmisionMasivoGDEModel) {
  //   // this.messageService.enviarMensaje('Error búsqueda', ['Debe ingresar filtro de búsqueda'], 'info', this.dialogService);
  //   const disposable = this.dialogService.addDialog(ModalDetalleMasivoComponent, {
  //     title: 'Confirm title',
  //     message: 'Confirm message'})
  //     .subscribe((isConfirmed) => {
  //         // We get dialog result
  //         if (isConfirmed) {

  //         } else {

  //         }
  //     });
      sessionStorage.setItem('objMasivoGde', JSON.stringify(objMasivoGde));
    this.router.navigate([RouterConstanst.ROUTE_DETALLE_GDEMASIVO]);
  }

  refrescarTable() {
    this.dtTrigger.next();
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.destroy();
      this.dtTrigger.next();
    });
  }








  getGuiasDespachoMasivo() {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      //   // Se destruye la tabla anterior para ser reemplazada con los nuevos datos
      dtInstance.destroy();
      //   // LLamada a dtTrigger para renderizar datos
      this.dtTrigger.next();
    });
    console.log(this.arrayEmisionMasiva);
    this.arrayEmisionMasiva = DummyServices.arrayGuiasMasivas;
    this.dtTrigger.next();


  //    this.emisionUnitariaGDEService.getGuiasDespacho(this.inputOCRut).subscribe((res: any) => this.ret = res,
  //    error => () => {
  //    },
  //    () => {
  //       this.arrayGuiaDespacho = this.ret.guiasDespacho;
  //       if (this.arrayGuiaDespacho.length === 0) {
  //       } else {

  //       }
  //    }
  //  );

  }
}
