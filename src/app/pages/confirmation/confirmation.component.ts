import { Component, OnInit, OnDestroy } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-confirmation',
    templateUrl: './confirmation.component.html',
    styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit, OnDestroy {

    fullname: string = '';
    totalPrice: number = 0;

    constructor(
        private router: Router,
        private cartService: CartService
    ) { }

    ngOnInit(): void {
        this.fullname = this.cartService.shopperName;
        this.totalPrice = this.cartService.getTotalPrice();
    }

    backToProductList() {
        this.router.navigate([`/product-list`]);
    }

    ngOnDestroy(): void {
        this.cartService.resetCartDetails();
    }
}
