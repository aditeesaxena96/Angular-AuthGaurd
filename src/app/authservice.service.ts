import { Injectable } from '@angular/core';
import { CanActivate } from '../../node_modules/@angular/router';
import { Router } from '@angular/router'
@Injectable({
  providedIn: 'root'
})
export class AuthserviceService implements CanActivate {

  constructor(private route :Router) { }
  canActivate()
  {
    if(localStorage.getItem('user')==='aditee' )
    {
      return true;
    }
    else
    {
      false;
    }
  }
}
