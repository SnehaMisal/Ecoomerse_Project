import { Injectable } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { SellerService } from './services/seller.service';

// @Injectable({
//   providedIn: 'root'
// })
export const authGuard: CanActivateFn = (route, state) => {
  return this.SellerService.isSellerLogIn;
  
};


// @Injectable({
//   providedIn: 'root'
// })

// export class authGuard implements CanActivateFn{
//   constructor(){}
//   CanActivateFn(route: ActivatedRoute, state:RouterStateSnapshot):Observable<boolean | UrlTree>, 
//  return false;
// }
//export const authGuard: 
