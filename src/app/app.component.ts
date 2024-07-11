import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GridUiLibComponent } from '../../projects/grid-ui-lib/src/public-api';
import { GridConfig } from '../../projects/grid-ui-lib/src/lib/models/grid-config';
import { ProductCardComponent } from './components/product-card/product-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GridUiLibComponent, ProductCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'grid-ui';
  public gridConfig: GridConfig = {
    columnConfig: [
      { field: 'productName', title: 'Name' },
      { field: 'description', title: 'Description' },
      { field: 'price', title: 'Price' },
      { field: 'rating', title: 'Rating' },
      { field: 'review', title: 'Review' },
    ],
    rowData: [
      {
        name: 'Wireless Bluetooth Headphones',
        description:
          'High-quality wireless headphones with noise cancellation and long battery life.',
        price: '$99.99',
        rating: 4.5,
        reviews: 150,
      },
      {
        name: 'Smart Watch',
        description:
          'Stylish smart watch with heart rate monitor and GPS tracking.',
        price: '$199.99',
        rating: 4.7,
        reviews: 200,
      },
      {
        name: 'Wireless Earbuds',
        description:
          'Compact wireless earbuds with superior sound quality and long battery life.',
        price: '$79.99',
        rating: 4.3,
        reviews: 320,
      },
      {
        name: 'Portable Speaker',
        description:
          'Portable Bluetooth speaker with rich sound and deep bass.',
        price: '$49.99',
        rating: 4.6,
        reviews: 150,
      },
    ],
  };
}
