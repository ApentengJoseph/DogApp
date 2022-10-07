import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BreedComponent } from './breed/breed.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SubBreedComponent } from './sub-breed/sub-breed.component';

const routes: Routes = [
  {path: '', redirectTo: 'home-page', pathMatch: 'full'},
  { path: 'home-page', component: HomePageComponent },
  { path: 'sub-breed/:name', component: SubBreedComponent },
  { path: 'breed/:name', component: BreedComponent },
  { path: '**', component: PageNotFoundComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
