import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HomeResolver } from './components/home/home.resolver';

const routes: Routes = [
  { path: 'home', component: HomeComponent, resolve: { data: HomeResolver }, data: { animationState: 'Two' } },
  { path: 'login', component: LoginComponent, data: { animationState: 'One' } },
  { path: 'register', component: RegisterComponent, data: { animationState: 'register' } },
  { path: 'profile', component: ProfileComponent, data: { animationState: 'Three' } },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
