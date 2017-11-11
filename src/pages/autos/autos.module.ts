import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AutosPage } from './autos';

@NgModule({
  declarations: [
    AutosPage,
  ],
  imports: [
    IonicPageModule.forChild(AutosPage),
  ],
})
export class AutosPageModule {}
