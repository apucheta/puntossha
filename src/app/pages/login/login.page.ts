import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Storage } from '@ionic/storage';
import { AlertController } from '@ionic/angular';
import { ApiService } from 'src/app/servicios/api.service';
import {
  Plugins,
  PushNotification,
  PushNotificationToken,
  PushNotificationActionPerformed } from '@capacitor/core';
  const { PushNotifications } = Plugins;


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  username: string;
  password: string;
  token: any;
  nrocuenta: any;
  saldo: any;
  titular: boolean;

  constructor(private apiservice: ApiService, private router: Router, private storage: Storage,
    public alertController: AlertController, public natStorage: NativeStorage
    ) {
      /**
                 * Traigo el token y el user y hago una consulta de saldo.
                 * Si recibo el mensaje ok redirecciono al home, sino lo dejo en la pantalla de login
                 */
                this.natStorage.getItem('Token').then((result) => {
                  this.token = result;
                  // console.log(this.token);
                  this.natStorage.getItem('Username').then((user) => {
                    // console.log('user' + user);
                    this.nrocuenta = user;
                    this.apiservice.saldo(this.token, this.nrocuenta)
                    .subscribe((data) => {
                      if (data['mensaje'] == 'OK') {
                        this.router.navigateByUrl('/home');
                        // this.saldo = data['saldo'];
                      } else {
                        console.log('fallo el token');
                      }
                    });
                  });

                }).catch((err) => {
                  //this.mostrarAlert('Error', 'Reloggea');
                  console.log(err);
                });
              }

  ngOnInit() {
    //console.log('Initializing HomePage');

    // Register with Apple / Google to receive push via APNS/FCM
    PushNotifications.register();

    // On success, we should be able to receive notifications
    PushNotifications.addListener('registration', 
      (token: PushNotificationToken) => {
        this.apiservice.registro(this.token,token.value);
        // alert('Push registration success, token: ' + token.value);
      }
    );

    // Some issue with our setup and push will not work
    PushNotifications.addListener('registrationError', 
      (error: any) => {
        //alert('Error on registration: ' + JSON.stringify(error));
      }
    );

    // Show us the notification payload if the app is open on our device
    PushNotifications.addListener('pushNotificationReceived', 
      (notification: PushNotification) => {
        //alert('Push received: ' + JSON.stringify(notification));
      }
    );

    // Method called when tapping on a notification
    PushNotifications.addListener('pushNotificationActionPerformed', 
      (notification: PushNotificationActionPerformed) => {
        //alert('Push action performed: ' + JSON.stringify(notification));
      }
    );

  }

  async mostrarAlert(cabecera: string, mensaje: string) {
    const alert = await this.alertController.create({
      header: cabecera,
      message: mensaje,
      buttons: ['OK']
    });
    await alert.present();
    }
  
    login(username, password) {
      this.apiservice.login(username, password)
      .subscribe(data => {
        // console.log(data);
        if (data['message'] == 'OK') {
          // MOVILES
          this.natStorage.setItem('Token', `${data['token']}`);
          this.natStorage.setItem('Titular', `${data['titular']}`);
          this.natStorage.setItem('Username', `${username}`);
          this.natStorage.setItem('Password', `${password}`);
          this.natStorage.setItem('Nombre', `${data['Nombre']}`);

          // WEB
          this.storage.set('Token', `${data['token']}`);
          this.storage.set('Username', `${username}`);
          this.storage.set('Password', `${password}`);
          this.storage.set('Titular', `${data['titular']}`);
          this.storage.set('Nombre', `${data['Nombre']}`);
  
          this.router.navigateByUrl('/home');
  
        } else if (data['message'] == 'ERROR. Credenciales invalidas.') {
           this.mostrarAlert('Error', 'Usuario/contraseña invalidos. Intente nuevamente.');
        }
      });
    }
    goToAcc() {
      this.router.navigateByUrl("/cuenta");
    }

}
