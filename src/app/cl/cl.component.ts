import { Component, OnInit, Input  } from '@angular/core';

@Component({
  selector: 'app-cl',
  templateUrl: './cl.component.html',
  styleUrls: ['./cl.component.css']
})
export class ClComponent implements OnInit {
@Input('forcl') shield:string;
  constructor() {
    
   }

  ngOnInit() {
  }

}
