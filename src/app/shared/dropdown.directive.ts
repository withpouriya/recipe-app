import { AfterViewInit, Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements AfterViewInit {
  isOpen = false
  dropdownMenu: any;

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
    this.dropdownMenu.classList.toggle('show', this.isOpen)
  }

  constructor(private el: ElementRef, private renderer: Renderer2) {

  }

  ngAfterViewInit(): void {
    this.dropdownMenu = this.el.nativeElement.querySelector('.dropdown-menu');
  }

}
