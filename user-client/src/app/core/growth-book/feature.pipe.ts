import { Pipe, PipeTransform } from '@angular/core';
import { GrowthBookService } from './growth-book.service';

@Pipe({
  name: 'appFeature',
})
export class FeaturePipe implements PipeTransform {
  constructor(private readonly _growthBookService: GrowthBookService) {}

  transform(featureKey: string): boolean {
    return this._growthBookService.isOn(featureKey);
  }
}
