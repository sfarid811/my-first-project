import { Directive, ElementRef } from '@angular/core';

@Directive({ selector: '[monSurlignage]' })
export class SurlignerDirective {
  constructor(el: ElementRef) {
    el.nativeElement.style.color = 'green';
  }
}
