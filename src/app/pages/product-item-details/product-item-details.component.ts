import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/modals/product';
import { ProductService } from '../../services/product.service';

@Component({
    selector: 'app-product-item-details',
    templateUrl: './product-item-details.component.html',
    styleUrls: ['./product-item-details.component.css']
})
export class ProductItemDetailsComponent implements OnInit {

    product: Product = new Product();

    constructor(
        private activatedRoute: ActivatedRoute,
        private productService: ProductService
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

          });
    }

}
