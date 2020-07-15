import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HomeComponent } from './components/home/home.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { FormComponent } from './components/form/form.component';


const routes: Routes = [
	{path:"home", component:HomeComponent}, 
	{path:"contactus", component:ContactusComponent},
	{path:"demo", component:TopBarComponent},
	{path:"form", component:FormComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 
