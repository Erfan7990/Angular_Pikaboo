import { Component, Input, OnInit } from '@angular/core';

// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);


interface carouselImage{
  imageSrc: String;
  imageArt: String;
}
interface bannerImages{
  banner_img_src: String;
  banner_img_art: String;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  @Input() images: carouselImage[] = []

  selectedIndex = 0;
  constructor() { }

  ngOnInit(): void {
  }

  onSwiper([swiper]:any) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }

  banners: bannerImages[] = [
    {
      banner_img_src: '../../../assets/images/banner/Todays-Special.jpg',
      banner_img_art: "Today's Special"
    },
    {
      banner_img_src: '../../../assets/images/banner/SmartPhone.jpg',
      banner_img_art: "Today's Special"
    },
    {
      banner_img_src: '../../../assets/images/banner/Mobile-ac-updated.jpg',
      banner_img_art: "Today's Special"
    },
    {
      banner_img_src: '../../../assets/images/banner/Watch-Top-banner-2_1_.jpg',
      banner_img_art: "Today's Special"
    },
    {
      banner_img_src: '../../../assets/images/banner/Computer-ac-updated.jpg',
      banner_img_art: "Today's Special"
    },
    {
      banner_img_src: '../../../assets/images/banner/Laptop-home-page.jpg',
      banner_img_art: "Today's Special"
    },
    {
      banner_img_src: '../../../assets/images/banner/LIFESTYLE.jpg',
      banner_img_art: "Today's Special"
    },
    {
      banner_img_src: '../../../assets/images/banner/Appliances-updated.jpg',
      banner_img_art: "Today's Special"
    },
  ]
}
