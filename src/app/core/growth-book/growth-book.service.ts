import { Injectable } from '@angular/core';
import { Context, GrowthBook } from '@growthbook/growthbook';

@Injectable()
export class GrowthBookService {
  private growthBook: GrowthBook;

  init(config: Context): void {
    this.growthBook = new GrowthBook(config);
  }

  isOn(featureKey: string): boolean {
    return this.growthBook.isOn(featureKey);
  }

  loadFeatures(): Promise<void> {
    return this.growthBook.loadFeatures({ autoRefresh: true });
  }
}
