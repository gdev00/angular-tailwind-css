import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-taskboard-page',
  templateUrl: './taskboard-page.component.html',
  styleUrls: ['./taskboard-page.component.scss']
})
export class TaskboardPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const navbarShowBtn = document.querySelector('.navbar-show-btn');
    const navbarHideBtn = document.querySelector('.navbar-hide-btn');

    navbarShowBtn?.addEventListener('click', () => {
        document?.querySelector('.nav-list')?.classList.add('translate-x-0');
    });

    navbarHideBtn?.addEventListener('click', () => {
        document?.querySelector('.nav-list')?.classList.remove('translate-x-0');
    })
  }

}
