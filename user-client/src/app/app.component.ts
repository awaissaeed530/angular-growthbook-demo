import { Component } from '@angular/core';
import { GrowthBookService } from './core/growth-book';

@Component({
  selector: 'app-root',
  template: `<p *feature="'home-v2'">Hello World!</p>`,
})
export class AppComponent {
  constructor(private readonly _growthBookService: GrowthBookService) {
    this._growthBookService.init();
  }
}
