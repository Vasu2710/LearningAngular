import { Component } from "@angular/core";

@Component({
    standalone: true,
    selector: 'app-header', 
    templateUrl: './header.component.html', 
    styleUrl: './header.component.css'
})
export class HeaderComponent{
    product= {
       phone :"Iphone",
       model : 15,
       year_released: 2020,
       price: 500,
    }
}