import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-hellow',
  templateUrl: './hellow.component.html',
  styleUrls: ['./hellow.component.css']
})
export class HellowComponent implements OnInit {
uss:any;
@Output() notifiy=new EventEmitter<number>();
 @Input('jkk') jpl:string;
  constructor(private ro:ActivatedRoute) {


   }

  ngOnInit() {
    let you=this.ro.snapshot.queryParamMap.get('rage');
console.log(you);
  }
 add(){
   this.notifiy.emit(50);
 }
 

}
