import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movil2',
  templateUrl: './movil2.page.html',
  styleUrls: ['./movil2.page.scss'],
})
export class Movil2Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  showPassword: boolean = false;

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
}
