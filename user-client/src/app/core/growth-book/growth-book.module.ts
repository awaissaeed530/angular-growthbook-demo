import {
  ENVIRONMENT_INITIALIZER,
  inject,
  ModuleWithProviders,
  NgModule,
} from '@angular/core';
import { FeatureDirective } from './feature.directive';
import { FeaturesResolver } from './features.resolver';
import { GrowthBookService } from './growth-book.service';
import { GrowthBookConfig } from './types';

@NgModule({
  declarations: [FeatureDirective],
  exports: [FeatureDirective],
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
