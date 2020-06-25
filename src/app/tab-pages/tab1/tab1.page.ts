import { Component } from '@angular/core';
import { CovidService } from 'src/app/services/covid.service';
import { ModalController} from '@ionic/angular';
import { ModalDetalhePage } from '../../modals/modal-detalhe/modal-detalhe.page';
 
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  todosEstados: any = [];
  estados: any = [];
  pais: any = [];
  busca: string = '';
  ordenaPor: string = '';
  tamanhoBusca = 0;
  constructor(private covidService: CovidService, private modalController: ModalController) {}

  async ngOnInit(){
    this.ordenaPor = 'estado';
    await this.atualizaDados();
  }

  
  //busca elementos na lista
  search(){
    let all: any  = []
    if(this.busca.length<this.tamanhoBusca)
      this.estados = this.todosEstados;
    // console.log('busca', this.busca)
    this.estados.forEach(estado => {
      let state = estado.state.toLowerCase();
      // console.log('state', state)
      if(state.includes(this.busca.toLowerCase()))
        all.push(estado);
    });
    this.estados = all;
    if(this.busca == '')
      this.estados = this.todosEstados;
    this.tamanhoBusca = this.busca.length;
  }

  //ordena lista de acordo com o parametro
  organiza(modo = 'estado'){
    if(modo === 'estado')
      this.estados.sort(function(a:any, b:any) {
        if (a.state < b.state)
          return -1;
        if (a.state > b.state)
          return 1;
        return 0;
      });  
    if(modo === 'mortes')
      this.estados.sort(function(a:any, b:any) {
        if (a.deaths < b.deaths)
          return 1;
        if (a.deaths > b.deaths)
          return -1;
        return 0;
      });  
    if(modo === 'casos')
      this.estados.sort(function(a:any, b:any) {
        if (a.cases < b.cases)
          return 1;
        if (a.cases > b.cases)
          return -1;
        return 0;
      });
    if(modo === 'suspeitos')
      this.estados.sort(function(a:any, b:any) {
        if (a.suspects < b.suspects)
          return 1;
        if (a.suspects > b.suspects)
          return -1;
        return 0;
      });      
  }

  //busca os dados da API
  async atualizaDados(e:any = null){
    this.pais = await this.covidService.getCasosPorPais('Brazil');
    this.estados = await this.covidService.getEstados();
    this.todosEstados = this.estados;
    
    this.organiza(this.ordenaPor);
    if(e)
      e.target.complete();
      console.log('pais', this.pais)
  }

  //abre modal de detalhe
  async mostraDetalhe(estado: any){
    const modal = await this.modalController.create({
      component: ModalDetalhePage,
      componentProps: {
        'country': this.pais.country,
        'local': estado.state ,
        'cases': estado.cases,
        'confirmed': 'N/A',
        'deaths': estado.deaths,
        'suspects': estado.suspects,
        'recovered': 'N/A',
        'refuses': estado.refuses,
        'updated_at': estado.datetime
      }
    })
    return await modal.present();

  }
}
