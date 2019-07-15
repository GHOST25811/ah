import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompComponent } from './comp/comp.component';

@NgModule({
  declarations: [CompComponent],
  imports: [
    CommonModule
  ]
  ,exports:[CompComponent]
})
export class ViewModule { }
