import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <ng-container
      [ngTemplateOutlet]="('home-v2' | gbFeature) ? v2 : v1"
    ></ng-container>

    <ng-template #v1>
      <h1>Home V1</h1>
    </ng-template>

    <ng-template #v2>
      <h1>Home V2</h1>
    </ng-template>
  `,
})
export class HomeComponent {}
