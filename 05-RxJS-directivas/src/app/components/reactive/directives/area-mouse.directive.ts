import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[areaMouse]',
})
export class AreaMouseDirective implements OnInit {
  constructor(private el: ElementRef<HTMLDivElement>) {}

  ngOnInit(): void {
    this.setBackground();
    this.setHeight();
  }

  setBackground() {
    this.el.nativeElement.style.backgroundColor = 'green';
  }

  setHeight() {
    this.el.nativeElement.style.height = '300px';
  }
}
