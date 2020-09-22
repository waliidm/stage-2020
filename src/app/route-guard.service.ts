import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import jwt_decode from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  constructor() { }
  public canActivate(route: ActivatedRouteSnapshot){
    
    var cryptedToken = sessionStorage.getItem('token');
    var token=jwt_decode(cryptedToken);
    var user=token.data.role;

    console.log(user);
    
    if((user == 'admin') ||(user == 'superuser') ){
      return true;
    }
    return false;
  }


}



