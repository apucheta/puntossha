import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/servicios/api.service';
import { Storage } from '@ionic/storage';
import { NativeStorage } from '@ionic-native/native-storage/ngx';


@Component({
  selector: 'app-exitocompra',
  templateUrl: './exitocompra.page.html',
  styleUrls: ['./exitocompra.page.scss'],
})
export class ExitocompraPage implements OnInit {

  ngOnInit() {
  }

  token: any;
  nrocuenta: any;
  saldo: any;

  constructor(private natStorage: NativeStorage, private apiservice: ApiService) {
    this.natStorage.getItem('Token').then((result) => {
      this.token = result;
      // console.log(this.token);
      this.natStorage.getItem('Username').then((user) => {
        // console.log('user' + user);
        this.nrocuenta = user;
        this.apiservice.saldo(this.token, this.nrocuenta)
        .subscribe((data) => {
          if (data['mensaje'] == 'OK') {
            // console.log(data['saldo']);
            this.saldo = data['saldo'];
            // console.log(this.saldo);
          }

        });
      });

    });
  }


}
