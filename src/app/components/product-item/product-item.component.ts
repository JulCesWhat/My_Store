import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/modals/product';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CartService } from '../../services/cart.service';

@Component({
    selector: 'app-product-item',
    templateUrl: './product-item.component.html',
    styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

    @Input() product: Product = new Product();
    form = new FormGroup({
        quantity: new FormControl(1, Validators.required)
    });

    constructor(
        private route: Router,
        private cartService: CartService
    ) { }

    ngOnInit(): void {
    }

    handleImgClickEvent() {
        this.route.navigate([`/product-list/${this.product.id}`]);
    }

    addToCart() {
        const quantity = parseInt(this.form.get('quantity')?.value || 1);
        this.cartService.addProduct(this.product, quantity);
    }

}
