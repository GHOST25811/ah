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
var ContService = /** @class */ (function () {
    function ContService() {
    }
    ContService.prototype.CanActivate = function () {
    };
    ContService.prototype.setToken = function (To) {
        this.token = To;
    };
    ContService.prototype.setUser = function (To) {
        this.user = To;
    };
    ContService.prototype.getUser = function () {
        return this.user;
    };
    ContService.prototype.getToke = function () {
        return this.token;
    };
    ContService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ContService);
    return ContService;
}());
export { ContService };
//# sourceMappingURL=cont.service.js.map