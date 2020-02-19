import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/servicios/api.service';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transferencia',
  templateUrl: './transferencia.page.html',
  styleUrls: ['./transferencia.page.scss'],
})
export class TransferenciaPage implements OnInit {

  results = [] ;
  idsocio: string;
  keys : any;

  constructor(private ApiService: ApiService, private natStorage: NativeStorage, private router: Router) { }

  ngOnInit() {
  }

  getSocio() {

    // llamo al servicio para tener la informacion que necesito
    this.natStorage.getItem('Token').then(token => {
      this.ApiService.getSocio(token, this.idsocio)
      .subscribe((data) => {
        //console.log(data['datos']);
        // Se arma el array para iterarlo en la vista.
        this.results.push(data['datos']);
      });

    })    
  }


  transferirASocio(idsocio:string){
    this.natStorage.setItem('dni', idsocio);
    this.router.navigateByUrl('/transferencia/confirmacion');
  }
}
