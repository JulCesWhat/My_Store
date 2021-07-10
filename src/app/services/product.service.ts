import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './../modals/product';
import { Observable, of, Subscription } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    products: Product[] = [];

    constructor(
        private httpClient: HttpClient
    ) { }

    getAllProducts(): Observable<Product[]> {
        return new Observable((observer) => {
            if (this.products.length) {
                observer.next(this.products);
            } else {
                this.httpClient.get("assets/data.json")
                    .subscribe((data) => {
                        this.products = (data as Product[]).map((p) => {
                            return new Product(p);
                        });
                        observer.next(this.products);
                    }, (error) => {
                        observer.error(error);
                    });
            }
        });
    }

    getProduct(id: number): Observable<Product> {
        return new Observable((observer) => {
            if (this.products.length) {
                observer.next(this.products.find((p: Product) => (p.id === id)));
            } else {
                this.httpClient.get("assets/data.json")
                    .subscribe((data) => {
                        this.products = (data as any[]).map((p) => {
                            return new Product(p);
                        });
                        observer.next(this.products.find((p: Product) => (p.id === id)));
                    }, (error) => {
                        observer.error(error);
                    });
            }
        });
    }
}
