import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {

    //@Output() - to make it visible from APP component
    @Output() featureSelected = new EventEmitter<string>();

    //сработает при клике 
    onSelect(feature: string){
        this.featureSelected.emit(feature);
    }

}