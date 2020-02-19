import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/servicios/api.service';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Component({
  selector: 'app-movimientos',
  templateUrl: './movimientos.page.html',
  styleUrls: ['./movimientos.page.scss'],
})
export class MovimientosPage implements OnInit {
  idsocio: string;
  token: string;
  movimientos = [];
  keys: any;
  constructor( private api: ApiService, private natStorage: NativeStorage) {
    this.natStorage.getItem('Token').then((result) => {
      this.token = result;
      // console.log(this.token);
      this.natStorage.getItem('Username').then((user) => {
        // console.log('user' + user);
        this.idsocio = user;
        this.api.movimientos(this.token, this.idsocio)
        .subscribe((data) => {
          if (data['mensaje'] == 'OK') {
            this.movimientos.push(data['movimientos']);
          } else {
            console.log('fallo el token');
          }
        });
      });
    }).catch((err) => {
      // this.mostrarAlert('Error', 'Reloggea');
      console.log(err);
    });
  }

  ngOnInit() {
  }

  public getKeys(data) {
    this.keys = Object.keys(data);
    // console.log(this.keys);
    return true;
  }
}
