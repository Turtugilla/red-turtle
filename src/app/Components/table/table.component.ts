import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Products';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  products1: Product[];
  cols: any[];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getProducts();

    this.cols = [
        { field: 'productId', header: 'productId', width: '20%'},
        { field: 'purchaseCost', header: 'purchase_cost', width: '10%'},
        { field: 'quantityOnHand', header: 'cantidad', width: '10%'},
        { field: 'markup', header: 'markup', width: '10%'},
        { field: 'available', header: 'available', width: '20%'},
        { field: 'description', header: 'description', width: '10%'},
        { field: 'manufacturerId.name', header: 'manufacturer_id', width: '10%'},
        { field: 'productCode.prodCode', header: 'product_code', width: '10%'},
    ];
  }

  getProducts() : void{
    this.productService.getProducts().subscribe(products => this.products1 = products);
  }
}
