import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flyout-menus',
  templateUrl: './flyout-menus.component.html',
  styleUrls: ['./flyout-menus.component.scss']
})
export class FlyoutMenusComponent implements OnInit {
  toggle = true;
  data = [
    {
      id:1,
      title: 'Analytics',
      description: 'Get a better understanding of your traffic'
    },
    {
      id:2,
      title: 'Engagement',
      description: 'Speak directly to your customers'
    },
    {
      id:3,
      title: 'Security',
      description: 'Your customers data will be safe and secure'
    },
    {
      id:4,
      title: 'Integrations',
      description: 'Connect with third-party tools'
    },
    {
      id:5,
      title: 'Automations',
      description: 'Build strategic funnels that will convert'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
