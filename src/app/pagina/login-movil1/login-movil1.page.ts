import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-movil1',
  templateUrl: './login-movil1.page.html',
  styleUrls: ['./login-movil1.page.scss'],
})
export class LoginMovil1Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }



  onForgotPassword() {
    // Lógica para recuperar la contraseña
    console.log('Forgot Password');
  }



}
