import { Component } from "@angular/core";
import { IProduct } from "./product";

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})

export class ProductListComponent {
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string = 'cart';
    products: IProduct[] = [
        {
            "id": 2,
            "name": "Garden Cart",
            "code": "GDN-0023",
            "releaseDate": new Date(2021, 11, 1),
            "description": "15 gallon capacity rolling garden cart",
            "price": 32.99,
            "rating": 4.2,
            "imageUrl": "assets/images/garden_cart.png"
        },
        {
            "id": 5,
            "name": "Hammer",
            "code": "TBX-0048",
            "releaseDate": new Date(2021, 5, 21),
            "description": "Curved claw steel hammer",
            "price": 8.9,
            "rating": 4.8,
            "imageUrl": "assets/images/hammer.png"
        }
    ];

    toggleImage(): void {
        this.showImage = !this.showImage;
    }
}