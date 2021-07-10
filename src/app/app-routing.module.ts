import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './pages/cart/cart.component';
import { ConfirmationComponent } from './pages/confirmation/confirmation.component';
import { ProductItemDetailsComponent } from './pages/product-item-details/product-item-details.component'
import { ProductListComponent } from './pages/product-list/product-list.component';

const routes: Routes = [
    { path: '', redirectTo: '/product-list', pathMatch: 'full' },
    { path: 'product-list', component: ProductListComponent },
    { path: 'product-list/:id', component: ProductItemDetailsComponent },
    { path: 'cart', component: CartComponent },
    { path: 'confirmation', component: ConfirmationComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
