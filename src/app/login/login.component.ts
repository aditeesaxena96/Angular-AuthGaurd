import { Component, OnInit } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user :string;
  pass : string;
  constructor(private route : Router) { }
  Submit()
  {
    localStorage.setItem('user',this.user);
    localStorage.setItem('pass',this.pass);
    this.route.navigate(['/auth'])
  }
  ngOnInit() {
  }

}
