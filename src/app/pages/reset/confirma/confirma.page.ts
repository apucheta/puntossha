import { Component, OnInit } from '@angular/core';
import { CuentasService } from '../../../servicios/cuentas.service';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ApiService } from '../../../servicios/api.service';

@Component({
  selector: 'app-confirma',
  templateUrl: './confirma.page.html',
  styleUrls: ['./confirma.page.scss'],
})
export class ConfirmaPage implements OnInit {
  codigoGuardado: string;

  constructor(public servicioacc: CuentasService, public natStorage: NativeStorage,
              private api: ApiService, private router: Router, private alertController: AlertController) { }

  ngOnInit() {
  }
  async mostrarAlert(cabecera: string, mensaje: string) {
    const alert = await this.alertController.create({
      header: cabecera,
      message: mensaje,
      buttons: ['OK']
    });
    await alert.present();
    }

  confirmareset(codigo: string) {
    this.natStorage.getItem('codigo').then(
      data=>{
        this.codigoGuardado=data;
        if (codigo === this.codigoGuardado) {
          this.natStorage.getItem('Usuario').then(user => {
            this.servicioacc.reset(user).subscribe(()=>
            this.api.login(user, user).subscribe(exito => {
              if (exito['message']=='OK') {
                this.natStorage.setItem('Token', `${exito['token']}`);
                this.natStorage.setItem('Titular', `${exito['titular']}`);
                this.natStorage.setItem('Username', `${user}`);
                this.natStorage.setItem('Password', `${user}`);
                this.mostrarAlert('Exito', 'Su nueva contraseña es su dni');
                this.router.navigateByUrl('/cambiopw');                
              }
            }));
          });
        }
      });
    }

}
