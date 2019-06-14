import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListProductsComponent } from './Components/list-products/list-products.component';
import { DashboardProductsComponent } from './Components/dashboard-products/dashboard-products.component';
import { AddProductoComponent } from './Components/add-producto/add-producto.component'; 
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { ProductDetailComponent } from './Components/product-detail/product-detail.component';
import { TableComponent } from './Components/table/table.component';

const routes: Routes = [
  {path: 'list-products', component: ListProductsComponent,
          data: {animation: 'ListProducts'} },
  {path: 'add-product', component: AddProductoComponent,
          data: {animation: 'ListProducts'} },
  {path: 'dashboard-products', component: DashboardProductsComponent,
          data: {animation: 'DashBoardProducts'} },
  {path: 'table', component: TableComponent },
  {path: 'product-detail/:id', component: ProductDetailComponent},
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
