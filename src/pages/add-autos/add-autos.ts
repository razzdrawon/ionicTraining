
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, Loading, AlertController, LoadingController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AutosProvider } from './../../providers/autos/autos';
import { Auto } from '../../models/auto';

/**
 * Generated class for the AddAutosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-autos',
  templateUrl: 'add-autos.html',
})
export class AddAutosPage {

  
  loading: Loading; 
  public titulo: string;
  public formAuto: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewController: ViewController, 
    private formBuilder: FormBuilder,
    private autosProvider: AutosProvider,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,) {
    this.formAuto = formBuilder.group({
      marca:[null,
            Validators.compose(
            [ Validators.maxLength(15),
              Validators.pattern('[a-zA-Z0-9 \-_.áéóíúÁÉÍÓÚäöüßÄËÏÖÜñÑ]*'), 
              Validators.required])],
      modelo:[null,
            Validators.compose(
            [ Validators.maxLength(10),
              Validators.pattern('[a-zA-Z0-9 \-_.áéóíúÁÉÍÓÚäöüßÄËÏÖÜñÑ]*'), 
              Validators.required])],
      anio:[null,
            Validators.compose(
            [ Validators.maxLength(4),
              Validators.pattern('[0-9]*'), 
              Validators.required])],
      version:[null,
            Validators.compose(
            [ Validators.maxLength(10),
              Validators.pattern('[a-zA-Z0-9 \-_.áéóíúÁÉÍÓÚäöüßÄËÏÖÜñÑ]*'),
              Validators.required])]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddAutosPage');
  }

  cerrarModal() {
    this.viewController.dismiss();
  }

  //Función de guardado
  guardar(){
    let auto = new Auto(
      this.formAuto.value.marca,
      this.formAuto.value.modelo,
      this.formAuto.value.anio,
      this.formAuto.value.version
    )
    this.showLoading()
    this.autosProvider.postAuto(auto)
    .subscribe(
      data=>{
        if(!data){
          this.errorInterno()
        }else{
          this.displayMessage("","Auto agregado satisfactoriamente")
          this.formAuto.reset()
          this.loading.dismissAll()
        }
      },
      error=>{
        this.errorInterno()
      }
    )
  }

  private displayMessage(err:string,title:string){
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: err,
      buttons: [
        {
          text: 'OK',
          handler: () => {
          this.cerrarModal();
          }
        }
      ]
    });
    alert.present();
  }

  private showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Por favor espera...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }

  
  private errorInterno(){
    this.loading.dismissAll()
    this.displayMessage('Ocurrio un error','Error interno del sistema')
  }

}
