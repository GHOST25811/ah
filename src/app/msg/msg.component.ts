import { Component, OnInit,Input } from '@angular/core';
import { pl } from '../data/pp';
import { ContService } from '../view/cont.service';
import { ControlService } from '../control.service';
import { promise } from 'protractor';
import{Observable} from 'rxjs';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@Component({
  selector: 'app-msg',
  templateUrl: './msg.component.html',
  styleUrls: ['./msg.component.css']
})
export class MsgComponent implements OnInit {
 ind:number=0;
 public doub=[];
 roq:Promise<any>;
  constructor(private cont:ControlService,private http:HttpClient) { 
this.getmsg();   
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
