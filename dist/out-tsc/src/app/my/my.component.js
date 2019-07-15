var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Output, EventEmitter, Input } from '@angular/core';
import { TestService } from '../test.service';
var MyComponent = /** @class */ (function () {
    function MyComponent(te) {
        this.te = te;
        this.childData = new EventEmitter();
        this.b = 236;
    }
    MyComponent.prototype.ngOnInit = function () {
    };
    MyComponent.prototype.join = function () {
        this.childData.emit(100);
    };
    MyComponent.prototype.callserver = function () {
        this.te.create().subscribe(function (next) {
            console.log(next);
        }, function (error) {
            console.log(error);
        }, function () {
            console.log("done");
        });
    };
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], MyComponent.prototype, "childData", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], MyComponent.prototype, "b", void 0);
    MyComponent = __decorate([
        Component({
            selector: 'app-my',
            templateUrl: './my.component.html',
            styleUrls: ['./my.component.css']
        }),
        __metadata("design:paramtypes", [TestService])
    ], MyComponent);
    return MyComponent;
}());
export { MyComponent };
//# sourceMappingURL=my.component.js.map