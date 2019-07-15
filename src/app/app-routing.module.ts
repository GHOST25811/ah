import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyComponent } from './my/my.component';
import { HellowComponent } from './hellow/hellow.component';

const routes: Routes = [

{path:'my',component:MyComponent,children:[

  {path:'nop',component:HellowComponent}
]


}





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
