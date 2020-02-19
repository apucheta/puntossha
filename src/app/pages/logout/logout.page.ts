import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
})
export class LogoutPage implements OnInit {

  constructor(private router: Router, public natStorage: NativeStorage) { 
    this.natStorage.clear().then(() => {
      this.router.navigateByUrl('/login');
    });
  }

  ngOnInit() {
  }

}
