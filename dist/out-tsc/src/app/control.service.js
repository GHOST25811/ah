var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var ControlService = /** @class */ (function () {
    function ControlService(http) {
        this.http = http;
        this.x = [];
    }
    ControlService.prototype.getpost = function () {
        console.log("ASd");
        var x;
        return (this.http.get('http://localhost:3000'));
    };
    ControlService.prototype.ngOnInit = function () {
        var _this = this;
        this.getpost().subscribe(function (data) {
            for (var i = 0; i < 10; i++)
                _this.x.push(data[i]);
        }, function (error) {
            console.log(error);
        }, function () {
            console.log(_this.x[0].name);
        });
        //End of get fun
    };
    ControlService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpClient])
    ], ControlService);
    return ControlService;
}());
export { ControlService };
//# sourceMappingURL=control.service.js.map