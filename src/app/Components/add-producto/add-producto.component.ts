import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Products';
import { Manufacturer } from 'src/app/models/Manufacturer';
import { ProductCode } from 'src/app/models/ProductCode';
import { ActivatedRoute } from '@angular/router'
import { ProductService } from 'src/app/Services/product.service';
import { ManufacturerService } from 'src/app/Services/manufacturer.service';
import { ProductCodeService } from 'src/app/Services/product-code.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-producto',
  templateUrl: './add-producto.component.html',
  styleUrls: ['./add-producto.component.css']
})
export class AddProductoComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private manufacturerService: ManufacturerService,
    private productCodeService: ProductCodeService,
    private location: Location
  ) { }

  product: Product = new Product();
  manufacturers: Manufacturer[] = [];
  productCodes: ProductCode[] = [];

  ngOnInit() {
    this.getManufacturers();
    this.getProductCode();
  }

  getManufacturers(): void {
    this.manufacturerService.getManufacturer().subscribe(
      manufacturers => this.manufacturers = manufacturers
    );
  }

  getProductCode(): void {
    this.productCodeService.getProductCode().subscribe(
      productCode => this.productCodes = productCode
    );
  }

  goBack(): void {
    this.location.back();
  }

  onSave(): void {
    this.productService.addProduct(this.product).subscribe();
  }

}
