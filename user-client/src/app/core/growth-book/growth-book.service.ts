import { Injectable } from '@angular/core';
import { GrowthBook } from '@growthbook/growthbook';
import { GrowthBookConfig } from './types';

@Injectable()
export class GrowthBookService {
  private growthBook: GrowthBook;

  init(config: GrowthBookConfig): void {
    this.growthBook = new GrowthBook(config);
  }

  isOn(featureKey: string): boolean {
    return this.growthBook.isOn(featureKey);
  }

  loadFeatures(): Promise<void> {
    return this.growthBook.loadFeatures({ autoRefresh: true });
  }
}
