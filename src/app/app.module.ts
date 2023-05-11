import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { environment } from 'src/environments';
import { AppComponent } from './app.component';
import { GrowthBookModule, resolveFeatures } from './core';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    resolve: { features: resolveFeatures },
    children: [{ path: '', component: HomeComponent }],
  },
];

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes),

    GrowthBookModule.forRoot({
      apiHost: environment.growthBook.apiHost,
      clientKey: environment.growthBook.clientKey,
      enableDevMode: !environment.production,
    }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
