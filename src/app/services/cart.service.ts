import { Injectable } from '@angular/core';
import { Product } from '../modals/product';

@Injectable({
    providedIn: 'root'
})
export class CartService {

    cart: Product[] = [];

    constructor() { }

    addProduct(product: Product, quantity: number) {
        const foundProduct = this.cart.find((p) => (p.id === product.id));
        if (foundProduct) {
            foundProduct.quantity += quantity;
        } else {
            product.quantity = quantity;
            this.cart.push(product);
        }
        // window.alert(`${quantity} ${product.name}(s) have been added to the cart!`)
    }

    getCart(): Product[] {
        return this.cart;
    }

}
