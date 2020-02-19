import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CuentasService {

  constructor(private http: HttpClient) { }



   public cambia(token: string, password: string , nuevapassword: string, confirmapw: string) {
    /**
     * CAMBIO DE PW
     */
    const url = 'http://app.hebraica.org.ar:8025/billetera/account.json';
    const postData = {
      password: `${password}`,
      nuevapw: `${nuevapassword}`,
      confirmapw: `${confirmapw}`
    };
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`
      })
    };

    return this.http.post(url, postData, httpOptions);
   }

   public reset(username: string) {
     /** Una vez que veo que el codigo ingresado
      * es igual al generado le genero una password para que luego cambie
      */
     const url = `http://app.hebraica.org.ar:8025/billetera/account/${username}.json`;
     return this.http.get(url);
   }

   public codigo(username: string) {
     /** Pido que me envien el codigo. */
     const url = `http://app.hebraica.org.ar:8025/billetera/account.json?username=${username}`;
     return this.http.get(url);

   }
}
