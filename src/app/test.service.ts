import { Injectable, Input ,Output} from '@angular/core';

import{Observable } from 'rxjs/observable';
import { HttpClient } from '@angular/common/http';
import "rxjs/add/operator/map";

import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class TestService {
 
datastream:Observable<any>;
  constructor(private htp:HttpClient,private roo:Router) { }


  create(){
return this.htp.get('https://jsonplaceholder.typicode.com/posts');
  }
  login(user,pass){
    console.log(pass);
if(user=='admin' && pass=="1234"){
console.log('welocme');
this.roo.navigate(['/data']);
return 'welocme';}
else{
  console.log('failed to login');
}
  }

}
