import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RactiveComponent } from './ractive/ractive.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  // { path: 'login', component: LoginComponent },
  { path: 'login/:id', component: LoginComponent },
  { path: 'ractive', component: RactiveComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
