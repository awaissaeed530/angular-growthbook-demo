import {
  ENVIRONMENT_INITIALIZER,
  inject,
  ModuleWithProviders,
  NgModule,
} from '@angular/core';
import { Context } from '@growthbook/growthbook';
import { GrowthBookService } from './growth-book.service';
import { FeaturePipe } from './pipes';

@NgModule({
  declarations: [FeaturePipe],
  exports: [FeaturePipe],
  providers: [GrowthBookService],
})
export class GrowthBookModule {
  static forRoot(config: Context): ModuleWithProviders<GrowthBookModule> {
    return {
      ngModule: GrowthBookModule,
      providers: [
        {
          provide: ENVIRONMENT_INITIALIZER,
          multi: true,
          useValue: () => {
            inject(GrowthBookService).init(config);
          },
        },
      ],
    };
  }
}
