import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { SellerService } from './services/seller.service';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private SellerService: SellerService, ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable< boolean> {
   // const canActivateFn = this.getCanActivateFn();

    return this.SellerService.isSellerLogIn;
  }

  // private getCanActivateFn(): CanActivateFn {
  //   return authGuard;
  // }
}
export const authGuard: CanActivateFn = (route, state) => {
  return true;
};
