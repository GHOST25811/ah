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
import { ControlService } from '../control.service';
var MessageComponent = /** @class */ (function () {
    function MessageComponent(cont) {
        this.cont = cont;
    }
    MessageComponent.prototype.ngOnInit = function () {
        this.word = this.cont.x.length;
    };
    MessageComponent = __decorate([
        Component({
            selector: 'app-message',
            templateUrl: './message.component.html',
            styleUrls: ['./message.component.css']
        }),
        __metadata("design:paramtypes", [ControlService])
    ], MessageComponent);
    return MessageComponent;
}());
export { MessageComponent };
//# sourceMappingURL=message.component.js.map