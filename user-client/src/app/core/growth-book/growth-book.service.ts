import { Injectable } from '@angular/core';
import { GrowthBook } from '@growthbook/growthbook';
import { environment } from 'src/environments';

@Injectable({
  providedIn: 'root',
})
export class GrowthBookService {
  private growthBook: GrowthBook;

  init(): void {
    this.growthBook = new GrowthBook({
      apiHost: 'http://localhost:3100',
      clientKey: 'sdk-sohtXJJ0iCeYyFW',
      enableDevMode: !environment.production,
    });

    this.loadFeatures();
  }

  isOn(name: string): boolean {
    return this.growthBook.isOn(name);
  }

  private loadFeatures(): void {
    this.growthBook.loadFeatures({ autoRefresh: true });
  }
}
