import { Component, OnInit ,Output,EventEmitter, Input} from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-my',
  templateUrl: './my.component.html',
  styleUrls: ['./my.component.css']
})
export class MyComponent implements OnInit {
@Output() childData=new EventEmitter<any>();
@Input() b:any=236;
  constructor(private te:TestService) { }

  ngOnInit() {
  }

join(){
this.childData.emit(100);

}
callserver(){
  this.te.create().subscribe(
next=>{
console.log(next);
},
error=>{
  console.log(error);
},
()=>{
  console.log("done");
}



  );
}

}
