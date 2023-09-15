import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout-design-v1',
  templateUrl: './layout-design-v1.component.html',
  styleUrls: ['./layout-design-v1.component.scss']
})
export class LayoutDesignV1Component implements OnInit {
  data = [
    'Dates', 'State', 'Suburb', 'Address', 'Vendor', 'Purchaser', 'Current Zoning',
    'Sector', 'Sales Price', 'Land Area', '$/sqm Land' 
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
