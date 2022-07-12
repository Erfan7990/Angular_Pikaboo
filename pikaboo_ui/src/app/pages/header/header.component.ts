import { Component, OnInit } from '@angular/core';
import { faMagnifyingGlass, faDollyFlatbed, faUnlockKeyhole, faKey } from '@fortawesome/free-solid-svg-icons'
import {  } from '@fortawesome/free-regular-svg-icons'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  faMagnifyingGlass = faMagnifyingGlass;
  faDollyFlatbed = faDollyFlatbed;
  faKey = faKey;
  faUnlockKeyhole = faUnlockKeyhole;

  constructor() { }

  ngOnInit(): void {
  }

}
