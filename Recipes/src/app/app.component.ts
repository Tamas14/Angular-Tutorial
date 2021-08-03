import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  loadedFeature: string = 'recipe'; //shoppingList

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
