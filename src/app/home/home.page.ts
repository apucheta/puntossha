import { Component } from '@angular/core';
import { ApiService } from '../servicios/api.service';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import {Plugins} from '@capacitor/core';

const {Browser} = Plugins;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  token: string;
  nrocuenta: string;
  results = [];
  nombre : string;
  saldo: string;

  constructor(public apiservice: ApiService, public router: Router, private storage: Storage,
              public natStorage: NativeStorage) {
    /** 
     * Traigo nombre, username, token y todo lo necesario para mostrar en esta vista.
     */
    this.storage.get('Token').then((result) => {
      this.token = result;
      this.storage.get('Nombre').then((nom)=> {
        this.nombre = nom;
        this.storage.get('Username').then((user) => {
          // console.log('user' + user);
          this.nrocuenta = user;
          this.apiservice.saldo(this.token, this.nrocuenta)
          .subscribe((data) => {
            if (data['mensaje'] == 'OK') {
              this.saldo = data['saldo'];
            }
          });
        });
      });
    });
  }

  comprar() {
    this.router.navigateByUrl('/compra');
  }

  async cargar(){
    const direccion = 'https://hebraica.org.ar/pagoshebraica/';
    await Browser.open({url: direccion});
    //this.router.navigateByUrl('https://hebraica.org.ar/pagoshebraica/');
  }

}
