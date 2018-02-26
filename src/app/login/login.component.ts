import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../services/login-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLoggedIn = false;
  userName: string;
  password: string;

  constructor(private loginService:LoginServiceService, private router:Router) { }

  ngOnInit() {
  }

  login() {
    this.isLoggedIn = this.loginService.LoginUser(this.userName, this.password);
    if (this.isLoggedIn) {
      this.router.navigateByUrl("/mytodos");
    }
      
  }

}
