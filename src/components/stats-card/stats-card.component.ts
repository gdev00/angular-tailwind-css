import { Component, OnInit } from '@angular/core';

export interface IStatusCard {
  title: string;
  percentage: string;
  value: string;
  status: string;
  icon: string;
}

@Component({
  selector: 'app-stats-card',
  templateUrl: './stats-card.component.html',
  styleUrls: ['./stats-card.component.scss']
})
export class StatsCardComponent implements OnInit {
  cards: IStatusCard[]= [
    {
      title: "Total Revenue",
      percentage: "+32.40%",
      value: "$10,243.00",
      status: "up",
      icon: 'fa-solid fa-dollar-sign text-accent-purple',
    },
    {
      title: "Total Dish Ordered",
      percentage: "-12.40%",
      value: "23,456",
      status: "down",
      icon: 'fa-solid fa-tags text-accent-red',
    },
    {
      title: "Total Customer",
      percentage: "+2.40%",
      value: "1,234",
      status: "up",
      icon: 'fa-solid fa-users text-accent-green',
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
