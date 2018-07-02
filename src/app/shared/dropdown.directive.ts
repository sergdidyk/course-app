import { Directive, HostListener, HostBinding } from "@angular/core";

@Directive({
    selector: '[appDropdown]'
}) //we need a decorator to turn it into a directive, selector in order to define how I can add my directive
/**
 * Describing of what should this directive do
 */
export class DropdownDirective {
    @HostBinding('class.show') isOpen = false;

    @HostListener('click') toggleOpen(eventData: Event) {
       this.isOpen = !this.isOpen;
    }
}