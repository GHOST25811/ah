import { Component } from '@angular/core';
import { User } from './data/cl.model';
import { HttpClient } from '@angular/common/http';
import { pl } from './data/pp';
import { TestService } from './test.service';
import{ControlService} from './control.service';
import { Router } from '@angular/router';
import { ContService } from './view/cont.service';


import{Observable} from 'rxjs/observable';
interface DataResponse {
  id: number;
  name: string;
  age: number;
  location:string ;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  px:pl={
    id:12,
    name:'ahmad',
    age:12,
location:'damascues'
  }
  pass:string;

  word:number;
  id=43;
  name:string;
er:string="25811";
coll:string="red";
ss:boolean=true;
g1:string;
check:boolean=true;
arr:any=["Asd",12];
counter:number=0;
data:Observable<Object>;
constructor(private http:HttpClient,private stream:TestService,private route:Router,private se:ContService,private cont:ControlService){

  se.setUser('test test');


}
 correct(){
   
 }
 
ngOnInit(){

}
/*loglog(){
  
  var result=this.stream.login(this.user,this.pass) ;
  console.log(result); 
}*/
load( ){
 this.stream.create().subscribe(
   next=>{
     console.log(next);
   },
   error=>{
     console.log(error);
   },
  ()=>{
console.log("done")
  }
   
 );

}

}


