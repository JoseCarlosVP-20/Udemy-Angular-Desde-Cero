import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appBtn]',
})
export class BtnDirective implements OnInit {
  @Input()
  bgColor = 'red';

  @Input()
  bgTextColor = 'snow';

  @Input()
  width = '100%';

  constructor(private el: ElementRef<HTMLButtonElement>) {}
  ngOnInit(): void {
    this.setColor();
    this.setWith();
  }

  setColor() {
    this.el.nativeElement.style.backgroundColor = this.bgColor;
    this.el.nativeElement.style.color = this.bgTextColor;
  }

  setWith() {
    this.el.nativeElement.style.width = `${this.width}`;
    this.el.nativeElement.style.padding = '.3rem';
  }
}
