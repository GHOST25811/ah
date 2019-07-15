var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HellowComponent } from './hellow/hellow.component';
import { DataComponent } from './data/data.component';
import { ViewModule } from './view/view.module';
import { HttpClientModule } from '@angular/common/http';
import { TestService } from './test.service';
import { RouterModule } from '@angular/router';
import { routes } from './approute';
import { MyComponent } from './my/my.component';
import { ClComponent } from './cl/cl.component';
import { MainComponent } from './main/main.component';
import { Page2Component } from './page2/page2.component';
import { ButtonComponent } from './button/button.component';
import { MessageComponent } from './message/message.component';
import { MsgComponent } from './msg/msg.component';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
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
                ViewModule, HttpClientModule, RouterModule.forRoot(routes)
            ],
            providers: [TestService],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map