import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/modals/product';
import { CartService } from '../../services/cart.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

    cart: Product[] = [];
    totalPrice: number = 0;

    form = new FormGroup({
        fullname: new FormControl('', [
            Validators.required,
            Validators.minLength(3)
        ]),
        address: new FormControl('', [
            Validators.required,
            Validators.minLength(6)
        ]),
        creditcard: new FormControl('', [
            Validators.required,
            Validators.pattern(/^[0-9]{16}$/)
        ])
    });

    constructor(
        private router: Router,
        private cartService: CartService
    ) { }

    ngOnInit(): void {
        this.cart = this.cartService.getCart();
        this.totalPrice = this.cartService.getTotalPrice();
    }

    removeProduct(product: Product) {
        this.cart = this.cartService.removeProduct(product);
        this.totalPrice = this.cartService.getTotalPrice();
    }

    submitOrder() {
        this.cartService.shopperName = this.form.get('fullname')?.value;
        this.router.navigate([`/confirmation`]);
    }

}
