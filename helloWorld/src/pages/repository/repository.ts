import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service'

/**
 * Generated class for the RepositoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-repository',
  templateUrl: 'repository.html',
})
export class RepositoryPage {

  data : any;


  constructor(public navCtrl: NavController, public navParams: NavParams ,public ServiceProvider:ServiceProvider) {
  }

  ionViewDidLoad() {
    this.ServiceProvider.moreRepo(this.navParams.get('id')).subscribe(data=>{
      this.data = data;
    });
  }

}
