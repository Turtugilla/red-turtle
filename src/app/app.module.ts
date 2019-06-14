import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListProductsComponent } from './Components/list-products/list-products.component';
import { ProductDetailComponent } from './Components/product-detail/product-detail.component';
import { MessagesComponent } from './Components/messages/messages.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { DashboardProductsComponent } from './Components/dashboard-products/dashboard-products.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { AddProductoComponent } from './Components/add-producto/add-producto.component'
import { NgxPaginationModule } from 'ngx-pagination';
import { MenubarModule } from 'primeng/menubar';
import { MenuBarComponent } from './Components/menu-bar/menu-bar.component';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { TableComponent } from './Components/table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    ListProductsComponent,
    ProductDetailComponent,
    MessagesComponent,
    DashboardProductsComponent,
    PageNotFoundComponent,
    AddProductoComponent,
    MenuBarComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxPaginationModule,
    MenubarModule,
    InputTextModule,
    TableModule,
    ScrollingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
