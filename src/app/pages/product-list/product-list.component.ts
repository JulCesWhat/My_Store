import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/modals/product';
import { ProductService } from './../../services/product.service';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

    products: Product[] = [];

    constructor(
        private productService: ProductService
    ) { }

    ngOnInit(): void {
        this.productService.getAllProducts()
            .subscribe((data: Product[]) => {
                this.products = data;
            }, (error) => {
                // Logging error for right now
                console.log(error);
            });
    }

}
