import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailsService {

  constructor() { }

  ProductDetails(){
    return[
      {
        id: 1,
        imgSrc: '../../../assets/images/Products/oneplus-nord-ce2-lite-5-16-2022.jpg',
        ProductName: 'OnePlus Nord CE2 Lite 8GB/128GB with...',
        Discount_Price: '29,990',
        Regular_price: '99.99',

      },
      {
        id: 2,
        imgSrc: '../../../assets/images/Products/galaxy-a13-6gb-16-may-2022.jpg',
        ProductName: 'OnePlus Nord CE2 Lite 8GB/128GB with..',
        Discount_Price: '29,990',
        Regular_price: '99.99',
      },
      {
        id: 3,
        imgSrc: '../../../assets/images/Products/infinix-hot-11s-6gb-07-05-2022.jpg',
        ProductName: 'OnePlus Nord CE2 Lite 8GB/128GB with...',
        Discount_Price: '29,990',
        Regular_price: '99.99',
      },
      {
        id: 4,
        imgSrc: '../../../assets/images/Products/oneplus-bullets-wireless-z-series-bass-edition-12-may-2022.jpg',
        ProductName: 'OnePlus Nord CE2 Lite 8GB/128GB with...',
        Discount_Price: '29,990',
        Regular_price: '99.99',
      },
      {
        id: 5,
        imgSrc: '../../../assets/images/Products/p28-plus-new-offer-15-may.jpg',
        ProductName: 'OnePlus Nord CE2 Lite 8GB/128GB with...',
        Discount_Price: '29,990',
        Regular_price: '99.99',
      },
      {
        id: 6,
        imgSrc: '../../../assets/images/Products/xiaomi-tv-box-s-global-version-new-offer-16-may.jpg',
        ProductName: 'OnePlus Nord CE2 Lite 8GB/128GB with...',
        Discount_Price: '29,990',
        Regular_price: '99.99',
      },
    ]
  }
}
