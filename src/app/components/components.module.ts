import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        HeaderComponent,
        ProductItemComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        HeaderComponent,
        ProductItemComponent
    ]
})
export class ComponentsModule { }
