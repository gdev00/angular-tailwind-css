import { Component, OnInit } from '@angular/core';

export interface SidebarTab {
  name: string;
  path: string;
}

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  activeMenu = '';
  menus: SidebarTab[] = [
    {
      name: 'Dashboard',
      path: 'fa-solid fa-house',
    },
    {
      name: 'Discounts',
      path: 'fa-solid fa-tag',
    },
    {
      name: 'Graph',
      path: 'fa-solid fa-chart-pie',
    },
    {
      name: 'Messages',
      path: 'fa-solid fa-message',
    },
    {
      name: 'Notifications',
      path: 'fa-solid fa-envelope',
    },
    {
      name: 'Settings',
      path: 'fa-solid fa-gear',
    },
    {
      name: 'Logout',
      path: 'fa-solid fa-right-from-bracket',
    }
  ]

  constructor() { }

  ngOnInit(): void {
    this.activeMenu = this.menus[0].name;
  }

}
