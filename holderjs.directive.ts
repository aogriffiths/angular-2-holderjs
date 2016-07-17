import { Directive, ElementRef } from '@angular/core';
declare var Holder: any;

@Directive({
  selector: '[holderjs]'
})
export class HolderjsDirective {
    constructor(el: ElementRef) {
       Holder.run({images:el.nativeElement});
    }
}
