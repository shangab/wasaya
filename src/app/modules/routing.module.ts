import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../comps/home/home.component';
import { DocComponent } from '../comps/doc/doc.component';
import { ReadersComponent } from '../comps/readers/readers.component';
import { ReportersComponent } from '../comps/reporters/reporters.component';
import { LoginComponent } from '../comps/login/login.component';
import { AuthoritiesComponent } from '../comps/authorities/authorities.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'doc', component:DocComponent},
  {path:'readers', component:ReadersComponent},
  {path:'reporters', component:ReportersComponent},
  {path:'login', component:LoginComponent},
  {path:'auths', component:AuthoritiesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
