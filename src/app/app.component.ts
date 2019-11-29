import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  navigationSelected: string;

  // By default recipe list should be displayed on start-up
  ngOnInit() {
    this.navigationSelected = 'recipe';
  }

  decideNavigationSelected(navigationSelected: string) {
    this.navigationSelected = navigationSelected;
  }
}
