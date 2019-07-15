import{Routes} from '@angular/router';
import { DataComponent } from './data/data.component';
import { HellowComponent } from './hellow/hellow.component';
import { MyComponent } from './my/my.component';

export const routes:Routes=[
 
    {path:'data',component:DataComponent},
    {path:'hellow',component:HellowComponent},
    {path:'my',component:MyComponent}
 
]
  
