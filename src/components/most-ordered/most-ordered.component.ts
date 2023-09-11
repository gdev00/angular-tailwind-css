import { Component, OnInit } from '@angular/core';

export interface IMostOrdered {
  name: string;
  image: string;
  count: number;
}

@Component({
  selector: 'app-most-ordered',
  templateUrl: './most-ordered.component.html',
  styleUrls: ['./most-ordered.component.scss']
})
export class MostOrderedComponent implements OnInit {
  mostOrdered: IMostOrdered[] = [
    {
      name: "Spicy seasoned seafood noodles",
      image: "food-1.png",
      count: 200,
    },
    {
      name: "Salted pasta with mushroom sauce",
      image: "food-2.png",
      count: 120,
    },
    {
      name: "Beef dumpling in hot and sour soup",
      image: "food-3.png",
      count: 80,
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
