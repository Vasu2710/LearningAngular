import { Component } from "@angular/core";

@Component({
    standalone: true,
    selector: 'app-header', 
    templateUrl: './header.component.html', 
    styleUrl: './header.component.css'
})
export class HeaderComponent{
    first_name = "Vasu";
    last_name = "Bansal";
    message: string = 'Hello, Angular!';
    age = 21
}