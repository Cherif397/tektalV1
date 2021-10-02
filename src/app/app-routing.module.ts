import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './nutrition/home/home.component';
import { LandingPageNutritionComponent } from './nutrition/landing-page-nutrition/landing-page-nutrition.component';

const routes: Routes = [
  {path:'',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
