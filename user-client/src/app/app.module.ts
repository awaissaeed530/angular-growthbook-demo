import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FeatureDirective } from './core/growth-book/feature.directive';

@NgModule({
  declarations: [AppComponent, FeatureDirective],
  imports: [CommonModule, BrowserModule, HttpClientModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
