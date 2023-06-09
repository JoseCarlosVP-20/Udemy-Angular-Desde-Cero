import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appTheme]',
})
export class ThemeDirective implements OnInit {
  private htmlElement: ElementRef<HTMLDivElement>;

  constructor(private el: ElementRef<HTMLDivElement>) {
    this.htmlElement = el;
  }
  ngOnInit(): void {
    this.setBackground();
    this.setTextColor();
  }

  setBackground() {
    this.htmlElement.nativeElement.style.backgroundColor = '#333';
  }

  setTextColor() {
    this.htmlElement.nativeElement.style.color = 'snow';
  }
}
