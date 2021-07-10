import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/modals/product';
import { Router } from '@angular/router';

@Component({
    selector: 'app-product-item',
    templateUrl: './product-item.component.html',
    styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

    @Input() product: Product = new Product();

    constructor(
        private route: Router
    ) { }

    ngOnInit(): void {
    }

    handleImgClickEvent() {
        this.route.navigate([`/product-list/${this.product.id}`]);
    }

}
