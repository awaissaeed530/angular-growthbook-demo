import { inject } from '@angular/core';
import { GrowthBookService } from './growth-book.service';

export function resolveFeatures() {
  inject(GrowthBookService).loadFeatures();
}
