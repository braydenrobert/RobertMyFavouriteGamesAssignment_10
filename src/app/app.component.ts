import { Component, OnInit } from '@angular/core';
import {UpdateService} from "./update.service";

@Component({
  selector: 'app-root',
  template: '<app-content-list></app-content-list>',
})
export class AppComponent implements OnInit {
  title = 'B-Robert-MyFavouriteGames';

  constructor(private updateService: UpdateService) {}

  ngOnInit() {
    this.updateService.checkForUpdates();
  }
}

