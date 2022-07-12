import { Component, OnInit } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductDetailsService} from '../../services/product-details.service'

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {


  faStar = faStar;
  products: any[] = []
  constructor(private activatedRouter: ActivatedRoute, private router: Router, private productDetails: ProductDetailsService) {
    this.products = this.productDetails.ProductDetails();
  }

  product: any;
  productId: any;

  ngOnInit(): void {
    this.productId = this.activatedRouter.snapshot.paramMap.get('id')
    this.product = this.products.find(x=>x.id == this.productId)
    console.log(this.product)
  }

  minus(){

  }
  plus(){

  }

}
