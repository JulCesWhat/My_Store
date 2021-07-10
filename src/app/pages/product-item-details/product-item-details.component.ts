import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/modals/product';
import { ProductService } from '../../services/product.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CartService } from '../../services/cart.service';

@Component({
    selector: 'app-product-item-details',
    templateUrl: './product-item-details.component.html',
    styleUrls: ['./product-item-details.component.css']
})
export class ProductItemDetailsComponent implements OnInit {

    form = new FormGroup({
        quantity: new FormControl(1, Validators.required)
    });

    product: Product = new Product();

    constructor(
        private activatedRoute: ActivatedRoute,
        private productService: ProductService,
        private cartService: CartService
    ) { }

    ngOnInit(): void {
        this.getProduct();
    }

    getProduct() {
        const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
        this.productService.getProduct(id)
            .subscribe((product: Product) => {
                this.product = product;
            }, (error) => {
                // Logging error for right now
                console.log(error);
            });
    }

    addToCart() {
        const quantity = parseInt(this.form.get('quantity')?.value || 1);
        this.cartService.addProduct(this.product, quantity);
    }

}
