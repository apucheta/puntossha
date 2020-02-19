import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { IMovimiento } from '../model/imovimiento';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient, private storage: Storage, private natStorage: NativeStorage) { }
  
  public login(username: string, password: string) {
    /**
     * Proceso de loggeo al sistema.
     * Apuntado a la tabla de cuentas del este mismo sistema
     */
    this.storage.remove('Token');
    this.natStorage.remove('Token');
    const url = 'http://app.hebraica.org.ar:8025/billetera/token.json';
    const postData = {
      username: `${username}`,
      password: `${password}`
    };
    return this.http.post(url, postData, {});
  }

  public saldo(token: string , nrocuenta: string) {
    /**
     * Traigo el saldo del socio
     * Viene del home por ahora
     */
    const url = `http://app.hebraica.org.ar:8025/billetera/movimientos/${nrocuenta}.json`;
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`
      })
    };
    return this.http.get<Array<any>>(url, httpOptions);
  }

  public confirm(token: string, nrocuenta: string, ptoventa: string) {
    /**
     * Confirma el movimiento
     * Viene del lector de QR
     */
    const url = `http://app.hebraica.org.ar:8025/billetera/movimientos.json`;
    const data = {
      nrocuenta: `${nrocuenta}`,
      puntosventa_id: `${ptoventa}`
    };
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`
      })
    };
    return this.http.post(url, data, httpOptions);
  }

  public movimientos(token: string, nrocuenta: string) {
    /**
     * Traigo los movimientos
     */
    const url = `http://app.hebraica.org.ar:8025/billetera/movimientos.json?socio=${nrocuenta}`;
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`
      })
    };
    return this.http.get<Array<IMovimiento>>(url, httpOptions);
  }

  public notificaciones(token: string, monto: string) {
  /**
   * Envio una notificacion al titular avisandole
   * de un gasto en su grupo familiar 
   */
    const url = 'http://app.hebraica.org.ar:8025/billetera/notificaciones.json';
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`
      })
    };
    const data = {
      // tslint:disable-next-line: object-literal-shorthand
      monto: monto
    };
    return this.http.post(url, data, httpOptions);

  }

  public registro(token:string, idnotificaciones: string){
    const url = 'http://app.hebraica.org.ar:8025/billetera/onesignal.json';
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`
      })
    };
    const data = {
      idnotificaciones: idnotificaciones
    };
    return this.http.post(url, data, httpOptions);
    }
  

    public getSocio(token:string, idsocio:string) {
      const url = 'http://app.hebraica.org.ar:8025/billetera/socios.json';
      const httpOptions= {
        headers: new HttpHeaders({
          Authorization: `Bearer ${token}`
        })
      };
      const data = {
        idsocio: idsocio
      };
      return this.http.post(url, data, httpOptions);

    }

    public transferir(token:string, idsocio:string, monto) {
      const url = `http://app.hebraica.org.ar:8025/billetera/billeteratransferencias.json`;
      const httpOptions= {
        headers: new HttpHeaders({
          Authorization: `Bearer ${token}`
        })
      };
      const data = {
        monto: monto,
        idsocio: idsocio
      }
      return this.http.post(url,data,httpOptions);
    }
}