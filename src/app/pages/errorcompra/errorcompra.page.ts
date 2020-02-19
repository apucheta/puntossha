import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-errorcompra',
  templateUrl: './errorcompra.page.html',
  styleUrls: ['./errorcompra.page.scss'],
})
export class ErrorcompraPage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  comprar() {
    this.router.navigateByUrl('/compra');
  }

}
