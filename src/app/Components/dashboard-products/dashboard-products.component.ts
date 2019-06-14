import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Products'
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-dashboard-products',
  templateUrl: './dashboard-products.component.html',
  styleUrls: ['./dashboard-products.component.css']
})
export class DashboardProductsComponent implements OnInit {

  products: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() : void {
    this.productService.getProducts().subscribe(products => this.products = products.slice(1,5));
  }
}
