import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';
import { CartComponent } from './pages/cart/cart.component';
import { ConfirmationComponent } from './pages/confirmation/confirmation.component';
import { ProductItemDetailsComponent } from './pages/product-item-details/product-item-details.component';
import { ProductListComponent } from './pages/product-list/product-list.component';

@NgModule({
    declarations: [
        AppComponent,
        CartComponent,
        ConfirmationComponent,
        ProductItemDetailsComponent,
        ProductListComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ComponentsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
