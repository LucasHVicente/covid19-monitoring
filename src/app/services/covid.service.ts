import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CovidService {

  url = 'https://covid19-brazil-api.now.sh/api/report/v1';

  constructor( private http: HttpClient ) { }

  async getEstados (){
    let data:any = await this.http.get(`${this.url}`).toPromise();
    // console.log('dados', data)
    return data.data;
  }
  
  async getEstado (uf:string){
    let data:any = await this.http.get(`${this.url}/brazil/uf/${uf}`).toPromise();
    // console.log('dados', data)
    return data.data;
  }

  async getCasosPorPais(pais = 'countries'){
    let data:any = await this.http.get(`${this.url}/${pais}`).toPromise();
    // console.log('dados', data)
    return data.data;
  }

  async getStatus(){
    let data:any = await this.http.get(`https://covid19-brazil-api.now.sh/api/status/v1`).toPromise();
    // console.log('dados', data)

    if(data.status=='ok')
      return true;
    else return false;  
  }

}
