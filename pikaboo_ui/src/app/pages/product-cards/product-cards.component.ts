import { Component, OnInit } from '@angular/core';
import { ProductDetailsService} from '../../services/product-details.service'

interface productDetails {
  id: Number
  imgSrc: String
  ProductName: String
  Discount_Price: String
  Regular_price: String
}

@Component({
  selector: 'app-product-cards',
  templateUrl: './product-cards.component.html',
  styleUrls: ['./product-cards.component.scss']
})
export class ProductCardsComponent implements OnInit {

  products: any[] = []

  constructor(private productDetails:ProductDetailsService) {
    this.products = productDetails.ProductDetails();
  }

  ngOnInit(): void {
  }




}
