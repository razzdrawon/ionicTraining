import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddAutosPage } from './add-autos';

@NgModule({
  declarations: [
    AddAutosPage,
  ],
  imports: [
    IonicPageModule.forChild(AddAutosPage),
  ],
})
export class AddAutosPageModule {}
