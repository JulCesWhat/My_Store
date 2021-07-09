import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartService } from './cart.service';
import { ProductService } from './product.service';

@NgModule({
    declarations: [],
    providers: [
        CartService,
        ProductService
    ],
    imports: [
        CommonModule
    ]
})
export class ServicesModule { }
