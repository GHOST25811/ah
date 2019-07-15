var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
var HellowComponent = /** @class */ (function () {
    function HellowComponent(ro) {
        this.ro = ro;
        this.notifiy = new EventEmitter();
    }
    HellowComponent.prototype.ngOnInit = function () {
        var you = this.ro.snapshot.queryParamMap.get('rage');
        console.log(you);
    };
    HellowComponent.prototype.add = function () {
        this.notifiy.emit(50);
    };
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], HellowComponent.prototype, "notifiy", void 0);
    __decorate([
        Input('jkk'),
        __metadata("design:type", String)
    ], HellowComponent.prototype, "jpl", void 0);
    HellowComponent = __decorate([
        Component({
            selector: 'app-hellow',
            templateUrl: './hellow.component.html',
            styleUrls: ['./hellow.component.css']
        }),
        __metadata("design:paramtypes", [ActivatedRoute])
    ], HellowComponent);
    return HellowComponent;
}());
export { HellowComponent };
//# sourceMappingURL=hellow.component.js.map