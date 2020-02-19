import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { ApiService } from 'src/app/servicios/api.service';
import { Storage } from '@ionic/storage';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.page.html',
  styleUrls: ['./compra.page.scss'],
})
export class CompraPage implements OnInit {
  scannedCode = null;
  nrocuenta: string;
  token: string;

  constructor(private barcodeScanner: BarcodeScanner, public apiservice: ApiService,
    private storage: Storage, public alertctrl: AlertController,
    private router: Router) { }

  ngOnInit() {
  }
  scanCode() {
    this.barcodeScanner.scan().then(
      barcodeData => {
        // console.log(barcodeData);
        this.scannedCode = barcodeData;
        if (this.scannedCode != null) {
          this.confirmarmov(this.scannedCode.text);
        }
      }
    );
  }

  async mostrarAlert(titulo: string, mensaje: string) {
    const alert = await this.alertctrl.create({
      header: titulo,
      message: mensaje,
      buttons: ['OK']
    });
    await alert.present();
  }

  confirmarmov(PUNTOSVENTA_ID: any ) {
    this.storage.get('Token').then((result) => {
      this.token = result;
      // console.log(this.token);
      this.storage.get('Username').then((user) => {
        // console.log('user ' + user);
        PUNTOSVENTA_ID = parseInt(PUNTOSVENTA_ID);
        this.nrocuenta = user;
        this.apiservice.confirm(this.token, this.nrocuenta, PUNTOSVENTA_ID)
        .subscribe((data) => {
          if (data['mensaje'] == 'OK') {
            // console.log('TODO BIEN ' + data);
            this.mostrarAlert('Exito', 'Se confirmo el movimiento');
            this.apiservice.notificaciones(this.token, data['monto']).subscribe((notificacion) => {
              console.log(notificacion);
            });
            this.router.navigateByUrl('/exitocompra');
          } else {
            // console.log('TODO MAL ' + data);
            this.mostrarAlert('Error', 'No se pudo confirmar el movimiento. Intente nuevamente');
            this.router.navigateByUrl('/errorcompra');
          }

        });
      });
    });
  }

}
