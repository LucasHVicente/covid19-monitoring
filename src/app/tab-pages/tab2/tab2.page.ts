import { Component } from '@angular/core';
import { CovidService } from 'src/app/services/covid.service';
import { ModalController} from '@ionic/angular';
import { ModalDetalhePage } from '../../modals/modal-detalhe/modal-detalhe.page';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  paises: any[] = [];
  todosPaises: any[] = [];
  busca: String ='';
  ordenaPor: string='';
  tamanhoBusca: number = 0;
  constructor( private covidService: CovidService, private modalController: ModalController) {}

  ngOnInit(){
    this.ordenaPor = 'pais';
    this.atualizaDados();
    
  }

  organiza(modo:string = 'pais'){

    if(modo==='pais'){
      this.paises.sort(function(a, b) {
        if (a.country < b.country)
          return -1;
        if (a.country > b.country)
          return 1;
        return 0;
      });
    }
    if(modo === 'mortes')
      this.paises.sort(function(a, b) {
        if (a.deaths < b.deaths)
          return 1;
        if (a.deaths > b.deaths)
          return -1;
        return 0;
      });  
    if(modo === 'casos')
      this.paises.sort(function(a, b) {
        if (a.cases < b.cases)
          return 1;
        if (a.cases > b.cases)
          return -1;
        return 0;
      });
    if(modo === 'recuperados')
      this.paises.sort(function(a, b) {
        if (a.recovered < b.recovered)
          return 1;
        if (a.recovered > b.recovered)
          return -1;
        return 0;
      });      
  }

  search(){
    let all: any = []
    if(this.busca.length<this.tamanhoBusca)
      this.paises = this.todosPaises;
    // console.log('busca', this.busca)
    this.paises.forEach(pais => {
      let state = pais.country.toLowerCase();
      // console.log('state', state)
      if(state.includes(this.busca.toLowerCase()))
        all.push(pais);
    });
    this.paises = all;
    if(this.busca == '')
      this.paises = this.todosPaises;
    this.tamanhoBusca = this.busca.length;
  }


  async atualizaDados(e:any = null){
    this.paises = await this.covidService.getCasosPorPais();
    this.todosPaises = this.paises;

    this.organiza(this.ordenaPor);
    if(e)
      e.target.complete();
  }

  async mostraDetalhe(pais: any){
    const modal = await this.modalController.create({
      component: ModalDetalhePage,
      componentProps: {
        'country': '',
        'local': pais.country,
        'cases': pais.cases,
        'confirmed': pais.confirmed,
        'deaths': pais.deaths,
        'suspects': 'N/A',
        'recovered': pais.recovered,
        'refuses': 'N/A',
        'updated_at': pais.updated_at
      }
    })
    return await modal.present();

  }

}
