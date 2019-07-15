var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TestService } from './test.service';
import { ControlService } from './control.service';
import { Router } from '@angular/router';
import { ContService } from './view/cont.service';
var AppComponent = /** @class */ (function () {
    function AppComponent(http, stream, route, se, cont) {
        this.http = http;
        this.stream = stream;
        this.route = route;
        this.se = se;
        this.cont = cont;
        this.px = {
            id: 12,
            name: 'ahmad',
            age: 12,
            location: 'damascues'
        };
        this.id = 43;
        this.er = "25811";
        this.coll = "red";
        this.ss = true;
        this.check = true;
        this.arr = ["Asd", 12];
        this.counter = 0;
        se.setUser('test test');
    }
    AppComponent.prototype.correct = function () {
    };
    AppComponent.prototype.ngOnInit = function () {
    };
    /*loglog(){
      
      var result=this.stream.login(this.user,this.pass) ;
      console.log(result);
    }*/
    AppComponent.prototype.load = function () {
        this.stream.create().subscribe(function (next) {
            console.log(next);
        }, function (error) {
            console.log(error);
        }, function () {
            console.log("done");
        });
    };
    AppComponent = __decorate([
        Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        }),
        __metadata("design:paramtypes", [HttpClient, TestService, Router, ContService, ControlService])
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map