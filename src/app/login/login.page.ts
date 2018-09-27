import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  registerCredentials = { user: '', pass: '' };

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  login() {    
    this.auth.login(this.registerCredentials);        
  }
}
