import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RepositoryPage } from './repository';

@NgModule({
  declarations: [
    RepositoryPage,
  ],
  imports: [
    IonicPageModule.forChild(RepositoryPage),
  ],
})
export class RepositoryPageModule {}
