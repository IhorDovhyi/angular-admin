import {AfterViewInit, Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appAccordion]',
})
export class AccordionDirective implements AfterViewInit {
  @Input() opened!: boolean;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
  ) {
  }

  ngAfterViewInit(): void {
    if (this.opened) {
      this.onClick();
    }
  }

  @HostListener('click', ['$event']) onClick($event?: any) {
    this.el.nativeElement.classList.toggle('is-open');

    const content = this.el.nativeElement.nextElementSibling;

    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";

    }
  }
}
