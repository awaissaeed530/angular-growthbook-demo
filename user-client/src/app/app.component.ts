import { Component } from '@angular/core';
import { GrowthBookService } from './core/growth-book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'user-client';

  constructor(private readonly _growthBookService: GrowthBookService) {
    _growthBookService.init();
  }
}
