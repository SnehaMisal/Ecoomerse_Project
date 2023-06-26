import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { login, signUp } from '../data-type';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SellerService {
  isSellerLogIn=new BehaviorSubject<boolean>(false)
  isLoginError=new EventEmitter<boolean>(false)

  constructor(private http:HttpClient, private route:Router) { }
  userSignUp(data:signUp){
    //console.warn("Service cell");
     this.http.post('http://localhost:3000/seller',data,{observe:'response'})
     .subscribe((result)=>{
      this.isSellerLogIn.next(true);
      localStorage.setItem('seller',JSON.stringify(result.body))
      this.route.navigate(['seller-home'])

     }
     );
  }
  reloadSeller(){
    if(localStorage.getItem('seller')){
      this.isSellerLogIn.next(true);
      this.route.navigate(['seller-home'])
    }
  }
  userLogin(data:login){
    this.http.get(`http://localhost:3000/seller?email=${data.email}&password=${data.password}`,
    {observe:'response'}).subscribe((result:any)=>{
      console.warn(result)
      if(result && result.body && result.body.length){
        localStorage.setItem('seller',JSON.stringify(result.body))
        this.route.navigate(['seller-home'])
      }
      else{
        console.warn("user Log Fail")
        this.isLoginError.emit(true)
      }
    })
  }
}
