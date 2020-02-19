import { Component, OnInit } from '@angular/core';
import { CuentasService } from 'src/app/servicios/cuentas.service';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.page.html',
  styleUrls: ['./reset.page.scss'],
})
export class ResetPage implements OnInit {

  constructor(private cuenta: CuentasService, private natstorage: NativeStorage, 
              private router: Router ) { }

  ngOnInit() {
  }

  public codigo(username: string) {
    /** Le paso el user
     * Me devuelve un codigo que luego pedire.
     * Guardo el codigo en storage para luego traerlo y compararlo
     * Lo borro cuando veo que es igual.
     */
    this.cuenta.codigo(username)
    .subscribe(data => {
      if (data['mensaje'] === 'OK') {
        this.natstorage.setItem('Usuario', username);
        this.natstorage.setItem('codigo', data['codigo'])
        .then(()=>{
          this.router.navigateByUrl('/confirma');
        })
      }
    });
  }

}
