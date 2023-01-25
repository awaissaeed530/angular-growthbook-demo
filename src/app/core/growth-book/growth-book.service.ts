import { Injectable } from '@angular/core';
import { Context as Config, GrowthBook } from '@growthbook/growthbook';

@Injectable()
export class GrowthBookService {
  private growthBook: GrowthBook;

  init(config: Config): void {
    this.growthBook = new GrowthBook(config);
  }

  isOn(featureKey: string): boolean {
    return this.growthBook.isOn(featureKey);
  }

  loadFeatures(): Promise<void> {
    return this.growthBook.loadFeatures({ autoRefresh: true });
  }
}
