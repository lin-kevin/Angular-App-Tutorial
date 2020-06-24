import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, // default 
  { path: 'dashboard', component: DashboardComponent },
  { path: 'heroes', component: HeroesComponent }, 
  { path: 'detail/:id', component: HeroDetailComponent }
  // path: string that matches URL in browser address 
  // component: what the router should create when navigating to this route.
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] // then RouterModule will be available throughout 
})
export class AppRoutingModule { }