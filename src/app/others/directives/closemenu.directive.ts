import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[closeMenu]'
})
export class CloseMenuDirective {

@Input("menu")
  public menu: any;

  constructor() { }

  @HostListener("click")
    private onClick(){
      this.menu.classList.remove("show");
    }

}
