import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GrowthBook } from '@growthbook/growthbook';
import { Observable, tap } from 'rxjs';

const FEATURES_ENDPOINT =
  'http://localhost:3100/api/features/key_prod_f6184a7a62d78890';

@Injectable({
  providedIn: 'root',
})
export class GrowthBookService {
  private growthBook: GrowthBook;

  constructor(private readonly _httpClient: HttpClient) {}

  init(): void {
    this.growthBook = new GrowthBook({
      trackingCallback: (experiment, result) => {
        console.log({
          experimentId: experiment.key,
          variationId: result.variationId,
        });
      },
    });

    this.loadFeatures();
  }

  isOn(name: string): boolean {
    return this.growthBook.isOn(name);
  }

  private loadFeatures() {
    this._httpClient
      .get(FEATURES_ENDPOINT)
      .pipe(tap(() => this.setAttributes()))
      .subscribe((res: any) => {
        this.growthBook.setFeatures(res.features);
      });
  }

  private setAttributes() {
    this.growthBook.setAttributes({
      id: 'test',
    });
  }
}
