import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HellowComponent } from './hellow/hellow.component';
import { DataComponent } from './data/data.component';
import { ViewModule } from './view/view.module';

import {HttpClientModule} from '@angular/common/http'

import { TestService } from './test.service';

import { RouterModule } from '@angular/router';
import { routes } from './approute';
import { MyComponent } from './my/my.component';
import { ClComponent } from './cl/cl.component';
import { MainComponent } from './main/main.component';
import { Page2Component } from './page2/page2.component';
import { ButtonComponent } from './button/button.component';
import { MessageComponent } from './message/message.component';
import{ pr} from '../../angular-node-express-api/router/index';
import { MsgComponent } from './msg/msg.component';
@NgModule({
  declarations: [
    AppComponent,
    HellowComponent,
    DataComponent,
    MyComponent,
    ClComponent,
    MainComponent,
    Page2Component,
    ButtonComponent,
    MessageComponent,
    MsgComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ViewModule,HttpClientModule,RouterModule.forRoot(routes)
  ],
  providers: [TestService],
  bootstrap: [AppComponent]
  
})
export class AppModule {
  
 }
