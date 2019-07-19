import { Component, OnInit,Input } from '@angular/core';
import { pl } from '../data/pp';
import { ContService } from '../view/cont.service';
import { ControlService } from '../control.service';
import { promise } from 'protractor';
import{Observable} from 'rxjs';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import{map} from 'rxjs/operators';
@Component({
  selector: 'app-msg',
  templateUrl: './msg.component.html',
  styleUrls: ['./msg.component.css']
})
export class MsgComponent implements OnInit {
 ind:number=0;
  doub=[1,2,3,4,5];
 roq:Promise<any>;
 b1;
 b2:any=13;

  constructor(private cont:ControlService,private http:HttpClient) { 
   
    this.b1=http.get<any>("http://localhost:3000").pipe(map(data=>{data}));
  console.log("bb "+this.b1);
  
  }

  ngOnInit() {

  }

  toyou(){
    return 13;
  }
getmsg()
{this.cont.getData();
  ( console.log(this.cont.pp[0]));






 /*let promise=new promise((resolve,reject)=>{this.http.get("http://localhost:3000").toPromise();
 promise.then(res=>{console.log("re"+res)})} 
 ) ;
 return promise;*/
}


}
