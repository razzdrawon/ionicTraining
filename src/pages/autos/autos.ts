import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ModalController } from 'ionic-angular';

import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import { Observable } from 'rxjs/Observable';
import { AutosProvider } from './../../providers/autos/autos';

import { AddAutosPage } from './../add-autos/add-autos';

@IonicPage()
@Component({
  selector: 'page-autos',
  templateUrl: 'autos.html',
  providers: [AutosProvider]
})
export class AutosPage implements OnInit {
  ngOnInit(): void {
    this.getAutos();
  }

  image: any;

  public autos: any[];
  public sinAutos: boolean = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private alertCtrl: AlertController,
    private autosProvider: AutosProvider,
    private modalController: ModalController
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AutosPage');
  }

  getAutos() {
    this.autosProvider.getAutos().subscribe(
      result => {
        if (!result) {
          this.errorInterno();
        }
        else {
          console.log(result);
          let autos = Observable.of(result.data);
          autos.map(
            autos => autos.map(auto => Object.assign(
              {}, auto, { img: 'assets/imgs/' + auto.marca.toLowerCase() + '.png' }
            )
            )
          ).subscribe(autos => this.autos = autos);
          if (this.autos.length < 1) {
            this.sinAutos = true;
          }
          else {
            this.sinAutos = false;
          }
        }
      },
      error => {
        this.errorInterno();
      }
    );
  }

  private errorInterno() {
    this.displayMessage('Ocurrio un error', 'Error interno del sistema');
  }

  //función que se encarga de mostrar mensaje Alerta 
  private displayMessage(err: string, title: string) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: err,
      buttons: [
        "Ok"
      ]
    });
    alert.present(prompt);
  }

  public modalAddAuto() {
    this.modalController.create(AddAutosPage).present();
  }

}
