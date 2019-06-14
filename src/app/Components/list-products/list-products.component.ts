import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Products';
import { ProductService } from 'src/app/Services/product.service';

@Component({
	selector: 'app-list-products',
	templateUrl: './list-products.component.html',
	styleUrls: [ './list-products.component.css' ]
})
export class ListProductsComponent implements OnInit {
	products: Product[];
	selectedProduct: Product;

	constructor(private productService: ProductService) {}

	ngOnInit() {
		this.getProducts();
	}

	getProducts(): void {
		this.productService.getProducts().subscribe((products) => (this.products = products));
	}

	onSelect(product: Product): void {
		this.selectedProduct = product;
	}

	delete(product: Product): void {
		this.products = this.products.filter((p) => p !== product);
		this.productService.deleteProduct(product).subscribe();
	}
}
