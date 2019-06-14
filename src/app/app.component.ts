import { Component } from '@angular/core';
import { ListProductsComponent } from 'src/app/Components/list-products/list-products.component';
import { ProductDetailComponent } from 'src/app/Components/product-detail/product-detail.component';
import { MessagesComponent } from 'src/app/Components/messages/messages.component';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from 'src/app/animations'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [slideInAnimation]
})
export class AppComponent {
  title = 'Catalogo';

  prepareRoute(outlet: RouterOutlet){
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
