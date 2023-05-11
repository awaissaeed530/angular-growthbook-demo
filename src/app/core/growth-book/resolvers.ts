import { inject } from '@angular/core';
import { GrowthBookService } from './growth-book.service';

export function resolveFeatures(): Promise<void> {
  return inject(GrowthBookService).loadFeatures();
}
