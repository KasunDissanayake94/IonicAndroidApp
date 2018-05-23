import { Injectable } from '@angular/core';
import { Headers , Http } from '@angular/http';
import 'rxjs/add/operator/map';


/*
  Generated class for the ServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServiceProvider {

  constructor(public http: Http) {
    console.log('Hello ServiceProvider Provider');
  }
  searchRepo(data:any){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.get("https://api.github.com/search/repositories?q="+data.keyword+"language:"+data.lan).map(res=>res.json());

  }
  moreRepo(data:any){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.get("https://api.github.com/repositories/"+data).map(res=>res.json());

  }

}
