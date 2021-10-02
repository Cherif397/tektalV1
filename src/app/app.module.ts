import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NutritionComponent } from './nutrition/nutrition.component';
import { HeaderComponent } from './nutrition/header/header.component';
import { FooterComponent } from './nutrition/footer/footer.component';
import { HomeComponent } from './nutrition/home/home.component';
import { LandingPageNutritionComponent } from './nutrition/landing-page-nutrition/landing-page-nutrition.component';

@NgModule({
  declarations: [
    AppComponent,
    NutritionComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LandingPageNutritionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
