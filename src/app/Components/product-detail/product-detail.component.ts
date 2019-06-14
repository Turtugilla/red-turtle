import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/Products';
import { ActivatedRoute } from '@angular/router'
import { ProductService } from 'src/app/Services/product.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  @Input() product : Product;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getProduct();
  }

  getProduct(): void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.productService.getProduct(id).subscribe(products => this.product = products);

  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.productService.updateProduct(this.product).subscribe(() => this.goBack());
  }
}
