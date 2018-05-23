import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service'
import { RepositoryPage } from '../repository/repository'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  langage:String;
  repos : any;

  constructor(
    public navCtrl: NavController,
    public ServiceProvider:ServiceProvider
  ) {

  }
  callData(id){
    this.navCtrl.push(RepositoryPage,{id:id});
  }

  findData(key:any){
    const data = {
      keyword:key.target.value,
      lan:this.langage
    };
    this.ServiceProvider.searchRepo(data).subscribe(data=>{
      this.repos = data.items;
    });

  }



}
