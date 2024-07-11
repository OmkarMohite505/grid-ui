import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

interface Product {
  name: string;
  price: string;
  description: string;
  image: string;
  rating: number;
  reviews: number;
}

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  imports: [CommonModule],
  standalone: true,
})
export class ProductCardComponent implements OnInit {
  products: Product[] = [
    {
      name: 'Wireless Bluetooth Headphones',
      price: '$99.99',
      description:
        'High-quality wireless headphones with noise cancellation and long battery life.',
      image:
        'https://in.jbl.com/dw/image/v2/BFND_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw5c20aed2/01.JBL_Tune%20520BT_Product%20Image_Hero_Black.png?sw=535&sh=535',
      rating: 4.5,
      reviews: 150,
    },
    {
      name: 'Smart Watch',
      price: '$199.99',
      description:
        'Stylish smart watch with heart rate monitor and GPS tracking.',
      image:
        'https://www.gonoise.com/cdn/shop/files/1_ca923369-0c7a-45d7-8edc-7a487a3b5fc6.png?v=1711280604',
      rating: 4.7,
      reviews: 200,
    },
    {
      name: 'Wireless Earbuds',
      price: '$79.99',
      description:
        'Compact wireless earbuds with superior sound quality and long battery life.',
      image:
        'https://www.pebblecart.com/cdn/shop/files/1_5eb9dcb8-cf73-4a4b-861b-16e5b4d959ff.jpg?v=1716216052',
      rating: 4.3,
      reviews: 320,
    },
    {
      name: 'Portable Speaker',
      price: '$49.99',
      description: 'Portable Bluetooth speaker with rich sound and deep bass.',
      image:
        'https://m.media-amazon.com/images/I/41QILblSE7L._SX300_SY300_QL70_FMwebp_.jpg',
      rating: 4.6,
      reviews: 150,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
