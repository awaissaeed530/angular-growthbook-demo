import {
  ENVIRONMENT_INITIALIZER,
  inject,
  ModuleWithProviders,
  NgModule,
} from '@angular/core';
import { FeaturePipe } from './feature.pipe';
import { FeaturesResolver } from './features.resolver';
import { GrowthBookService } from './growth-book.service';
import { GrowthBookConfig } from './types';

@NgModule({
  declarations: [FeaturePipe],
  exports: [FeaturePipe],
  providers: [GrowthBookService, FeaturesResolver],
})
export class GrowthBookModule {
  static forRoot(
    config: GrowthBookConfig
  ): ModuleWithProviders<GrowthBookModule> {
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
