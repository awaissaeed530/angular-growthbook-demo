import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments';
import { AppComponent } from './app.component';
import { GrowthBookModule } from './core/growth-book';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    BrowserModule,
    GrowthBookModule.forRoot({
      apiHost: 'http://localhost:3100',
      clientKey: 'sdk-sohtXJJ0iCeYyFW',
      enableDevMode: !environment.production,
    }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
