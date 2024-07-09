import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GridUiLibComponent } from '../../projects/grid-ui-lib/src/public-api';
import { GridConfig } from '../../projects/grid-ui-lib/src/lib/models/grid-config';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GridUiLibComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'grid-ui';
  public gridConfig: GridConfig = {
    columnConfig: [
      { field: 'productId', title: 'Product Id' },
      { field: 'productName', title: 'Name' },
      { field: 'price', title: 'Price' },
      { field: 'quantity', title: 'Quantity' },
    ],
    rowData: [
      { productId: 1, productName: 'Oil', price: 100, quantity: 10 },
      { productId: 2, productName: 'Sugar', price: 50, quantity: 25 },
      { productId: 3, productName: 'Rice', price: 200, quantity: 15 },
      { productId: 4, productName: 'Wheat', price: 150, quantity: 20 },
      { productId: 5, productName: 'Salt', price: 30, quantity: 50 },
      { productId: 6, productName: 'Milk', price: 60, quantity: 30 },
      { productId: 7, productName: 'Butter', price: 120, quantity: 12 },
      { productId: 8, productName: 'Cheese', price: 250, quantity: 8 },
      { productId: 9, productName: 'Bread', price: 40, quantity: 22 },
      { productId: 10, productName: 'Eggs', price: 70, quantity: 18 }
    ],
  };
}
