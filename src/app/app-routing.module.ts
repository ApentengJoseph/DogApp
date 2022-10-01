import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BreedComponent } from './breed/breed.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  {path: '', redirectTo: 'home-page', pathMatch: 'full'},
  { path: 'home-page', component: HomePageComponent },
  {path: 'breed/:id', component: BreedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
