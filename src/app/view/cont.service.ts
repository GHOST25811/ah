import { Injectable } from '@angular/core';
import{Router,CanActivate} from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class ContService {
token:string;
user:string;
  constructor() { }


  CanActivate(){

  }

  public setToken(To){
this.token=To;
  }
  public setUser(To){
    this.user=To;
      }
         getUser(){
        return this.user;

      }
    public  getToke(){
        return this.token;
        
      }



      
}
