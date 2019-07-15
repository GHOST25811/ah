import { Component, OnInit, Input } from '@angular/core';
import{User} from "./cl.model"
import { ActivatedRoute } from '@angular/router';
import { ContService } from '../view/cont.service';
@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
iscolliabse:boolean=false;
so:string="one";
act:true;
stt:boolean=true;
Rko:boolean=true;
chn:{name,age};
@Input("user") user1:User=null;
constructor(private ro:ActivatedRoute,private cont:ContService) {
  let you=this.ro.snapshot.paramMap.get('age');
  console.log(you);
this.chn={name:true,
  age:15

}
     }
toggle(){

console.log("you had been blured this button");
  
}
  ngOnInit() {
  
  }
now(){
 let v= this.cont.getUser();
 console.log(v);
 document.getElementById('klk').innerHTML=v;
}
changestyle(){
  var the={
'color':this.chn.age >10 ?'red' : 'blue',
'backgroundColor' :this.chn.name=true ?'orange' :'red'
  }
  return the;
}

}
