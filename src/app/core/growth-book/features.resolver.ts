import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { GrowthBookService } from './growth-book.service';

@Injectable()
export class FeaturesResolver implements Resolve<void> {
  constructor(private readonly _growthBookService: GrowthBookService) {}

  resolve(): Promise<void> {
    return this._growthBookService.loadFeatures();
  }
}
