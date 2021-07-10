import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HeaderComponent } from './header/header.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { RouterModule } from '@angular/router';
import { DropdownComponent } from './dropdown/dropdown.component';

@NgModule({
    declarations: [
        HeaderComponent,
        ProductItemComponent,
        DropdownComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        HeaderComponent,
        ProductItemComponent,
        DropdownComponent
    ]
})
export class ComponentsModule { }
