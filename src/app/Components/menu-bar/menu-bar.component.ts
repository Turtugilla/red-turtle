import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {

  constructor() { }

  items = [];

  ngOnInit() {
    this.items = [
      {
        label: 'Products',
        items: [
          {
            label: 'Dashboard', routerLink: '/dashboard-products'
          },
          {
            label: 'List', routerLink: '/list-products'
          },
          {
            label: 'Table', routerLink: '/table'
          }
        ]
      }
    ]
  }

}
