import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor() {}

  recomendacoes = [
    {
      desc: 'Lave suas mãos com frequencia.',
      img: '../../../assets/maos.png'
    },
    {
      desc: 'Evite tocar o rosto sem antes lavar as mãos.',
      img: './../../assets/rosto.png'
    },
    {
      desc: 'Cubra o rosto com o cotovelo ao espirrar ou tossir.',
      img: './../../assets/espirro.png'
    },
    {
      desc: 'Mantenha uma distancia segura entre as pessoas a sua volta.',
      img: './../../assets/distancia.png'
    },
    {
      desc: 'Evite sair de casa sem um bom motivo, e se necessario sair, use mascara e evite pessoas tossindo.',
      img: '../../../assets/casa.png'
    },
    {
      desc: 'Se mantenha informado pelos meios de comunicação de sua cidade sobre a situação atual do confinamento',
      img: ''
    }
  ]

}
