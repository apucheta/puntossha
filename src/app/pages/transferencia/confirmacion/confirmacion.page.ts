import { Component, OnInit } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { ApiService } from 'src/app/servicios/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmacion',
  templateUrl: './confirmacion.page.html',
  styleUrls: ['./confirmacion.page.scss'],
})
export class ConfirmacionPage implements OnInit {
  
  dni: string;
  
  constructor(private natStorage: NativeStorage, private apiservice: ApiService, private router: Router) { 
    this.natStorage.getItem('dni').then(dni=>{
      this.dni = dni;
    })
  }

  ngOnInit() {
    this.natStorage.getItem('dni').then(dni=>{
      this.dni = dni;
    })
  }

  confirmacion(idsocio, monto) {
    this.natStorage.getItem('Token').then(token=>{
      this.apiservice.transferir(token, idsocio,monto).subscribe(()=>{
        this.router.navigateByUrl('/exitocompra');
      });
    })   

  }

}
