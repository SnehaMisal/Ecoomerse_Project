import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  menuType:string="default"
  constructor(private route:Router){}
  ngOnInit(): void {
    this.route.events.subscribe((val:any)=>{
      if(val.url){
        console.warn("val",val.url)
        if(localStorage.getItem('seller') && val.url.includes('seller')){
          console.warn("val",val.url)
          this.menuType="seller"
        }else{
          this.menuType="default"
        }
      }
      
    })
  }
}
