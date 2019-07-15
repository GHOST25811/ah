var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
import { User } from "./cl.model";
import { ActivatedRoute } from '@angular/router';
import { ContService } from '../view/cont.service';
var DataComponent = /** @class */ (function () {
    function DataComponent(ro, cont) {
        this.ro = ro;
        this.cont = cont;
        this.iscolliabse = false;
        this.so = "one";
        this.stt = true;
        this.Rko = true;
        this.user1 = null;
        var you = this.ro.snapshot.paramMap.get('age');
        console.log(you);
        this.chn = { name: true,
            age: 15
        };
    }
    DataComponent.prototype.toggle = function () {
        console.log("you had been blured this button");
    };
    DataComponent.prototype.ngOnInit = function () {
    };
    DataComponent.prototype.now = function () {
        var v = this.cont.getUser();
        console.log(v);
        document.getElementById('klk').innerHTML = v;
    };
    DataComponent.prototype.changestyle = function () {
        var the = {
            'color': this.chn.age > 10 ? 'red' : 'blue',
            'backgroundColor': this.chn.name = true ? 'orange' : 'red'
        };
        return the;
    };
    __decorate([
        Input("user"),
        __metadata("design:type", User)
    ], DataComponent.prototype, "user1", void 0);
    DataComponent = __decorate([
        Component({
            selector: 'app-data',
            templateUrl: './data.component.html',
            styleUrls: ['./data.component.css']
        }),
        __metadata("design:paramtypes", [ActivatedRoute, ContService])
    ], DataComponent);
    return DataComponent;
}());
export { DataComponent };
//# sourceMappingURL=data.component.js.map