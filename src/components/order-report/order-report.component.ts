import { Component, OnInit } from '@angular/core';

export interface IOrder {
  avatar: string;
  name: string;
  menu: string;
  total: string;
  status: string;
}

@Component({
  selector: 'app-order-report',
  templateUrl: './order-report.component.html',
  styleUrls: ['./order-report.component.scss']
})
export class OrderReportComponent implements OnInit {
  orders: IOrder[] = [
    {
      avatar: "avatar-1.png",
      name: "Eren Jaegar",
      menu: "Spicy seasoned seafood noodles",
      total: "$125",
      status: "completed",
    },
    {
      avatar: "avatar-2.png",
      name: "Reiner Braunn",
      menu: "Salted Pasta with mushroom sauce",
      total: "$145",
      status: "preparing",
    },
    {
      avatar: "avatar-3.png",
      name: "Levi Ackerman",
      menu: "Beef dumpling in hot and sour soup",
      total: "$105",
      status: "pending",
    },
    {
      avatar: "avatar-4.png",
      name: "Historia Reiss",
      menu: "Hot spicy fried rice with omelet",
      total: "$45",
      status: "completed",
    },
    {
      avatar: "avatar-5.png",
      name: "Armin Arlert",
      menu: "Spicy seasoned seafood noodles",
      total: "$125",
      status: "completed",
    },
    {
      avatar: "avatar-6.png",
      name: "Hanji Zoe",
      menu: "Hot spicy fried rice with omelet",
      total: "$245",
      status: "completed",
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
