import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { GrowthBookService } from './growth-book.service';

@Directive({
  selector: '[feature]',
})
export class FeatureDirective {
  private featureName: string;
  private isHidden = true;

  constructor(
    private readonly templateRef: TemplateRef<any>,
    private readonly viewContainer: ViewContainerRef,
    private readonly _growthBookService: GrowthBookService
  ) {}

  @Input()
  set feature(name: string) {
    this.featureName = name;
    this.updateView();
  }

  private updateView() {
    if (this.isFeatureOn()) {
      if (this.isHidden) {
        this.viewContainer.createEmbeddedView(this.templateRef);
        this.isHidden = false;
      }
    } else {
      this.isHidden = true;
      this.viewContainer.clear();
    }
  }

  private isFeatureOn() {
    return this._growthBookService.isOn(this.featureName);
  }
}
