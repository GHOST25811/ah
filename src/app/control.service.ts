import { Injectable } from '@angular/core';
import{Router,CanActivate} from "@angular/router";
import { pl } from './data/pp';
import { HttpClient } from '@angular/common/http';
import{Observable} from 'rxjs/observable';
import { 
  ValidatorFn,
  Validator, 
  AbstractControl, 
  FormControl, 
  NG_VALIDATORS 
} from '@angular/forms';
import {  BehaviorSubject } from 'rxjs';
import { inject } from '@angular/core/testing';
import { promise } from 'protractor';
import { resolve, reject } from 'q';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ControlService {
g1:any=15 ;
n1:object;
b1:any;
public do:Array<pl>;
pp:object|JSON[];
myData: BehaviorSubject<any> = new BehaviorSubject<any>(0);
  constructor(public http:HttpClient) {
  
  
  

  
    //  this.getData();
    this.rr();
   console.log(this.myData.subscribe());
    //End of get fun
    this.col();
  console.log("out"+this.b1);
  }
  col(){
this.myData.subscribe((data)=>{
  this.b1=(data);
  console.log("bhere1 "+this.b1);
});
console.log("bhere2 "+this.b1);

  }
  ngOnInit() {
    
  }




  async getData() {
    return await new Promise(resolve => {
    this.http.get('http://localhost:3000').subscribe(res => {
    resolve((res));
    return JSON.stringify(res);
    console.log("222"+JSON.stringify(res)); //check if there is data response 
    },
    err => {
    console.log("error", err);
    })
  })}
  /*
  async getpost()//:Observable<object[]>
  {
  
  
    return await new promise(resolve=>{ this.http.get("http://localhost:3000").subscribe(res=>{resolve(res);console.log(res);},err=>{console.log("err",err);})})
 
  } 
 
 */
 //.toPromise().then(res=>{this.n1=res;console.log("re"+
//res[0].name)});
 
   


rr(){
  console.log("nn"+this.n1);
}
}
