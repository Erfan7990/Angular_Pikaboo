import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  images = [
    {
      imageSrc: './../assets/images/slider/galaxy_m33_5g_copy_big_banner.jpg',
      imageArt: 'Sumsung Galaxy M33 5g'
    },
    {
      imageSrc: './../assets/images/slider/galaxy_s22_ultra_big_banner.jpg',
      imageArt: 'Sumsung Galaxy S22'
    },
    {
      imageSrc: './../assets/images/slider/vivo_smart_deals_copy_big_banner.jpg',
      imageArt: 'ViVo smart deals'
    },
    {
      imageSrc: './../assets/images/slider/bkash_big_banner.jpg',
      imageArt: 'Bkash big banner'
    }
  ]
}
