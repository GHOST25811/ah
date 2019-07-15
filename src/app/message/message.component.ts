import { Component, OnInit } from '@angular/core';
import { pl } from '../data/pp';
import { ContService } from '../view/cont.service';
import { ControlService } from '../control.service';
@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
word:any;
  constructor(private cont:ControlService) {
    console.log(this.cont.rr());
   }

  ngOnInit() {
 
   

  }

}
