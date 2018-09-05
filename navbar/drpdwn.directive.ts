import { Directive ,ElementRef  } from '@angular/core';

@Directive({
  selector: '[appDrpdwn]'
})
export class DrpdwnDirective {

  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'yellow';
 }

}
