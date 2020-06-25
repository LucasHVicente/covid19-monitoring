import { Component, OnInit, Input } from '@angular/core';
import { ModalController} from '@ionic/angular';

@Component({
  selector: 'app-modal-detalhe',
  templateUrl: './modal-detalhe.page.html',
  styleUrls: ['./modal-detalhe.page.scss'],
})
export class ModalDetalhePage implements OnInit {

  @Input() country: string;
  @Input() local: string;
  @Input() cases: string;
  @Input() confirmed: string;//país apenas
  @Input() deaths: string;
  @Input() recovered: string;//país apenas
  @Input() suspects: string;//estado apenas
  @Input() refuses: string;//estado apenas
  @Input() updated_at: string;
   
  constructor(private modalController: ModalController) { }
  data: string = '';
  ngOnInit() {
    this.data = this.formatDate()
  }

  closeModal(){
    this.modalController.dismiss()
  }

  formatNumber(number: number) {
    if (number < 10) {
      return `0${number}`;
    }
    return number;
  }

  formatDate(date = this.updated_at){
    const d = new Date(date)
    // console.log(d);
    const day = `${this.formatNumber(d.getDate())}/${this.formatNumber(d.getMonth() + 1)}/${d.getFullYear()}`;
    const hour = `${this.formatNumber(d.getHours())}:${this.formatNumber(d.getMinutes())}`;
    return `${day} - ${hour}`;
  }

}
