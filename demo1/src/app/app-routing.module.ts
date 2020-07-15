import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PipelineComponent } from './components/pipeline/pipeline.component';
import { FormComponent } from './components/form/form.component';

const routes: Routes = [
	{ path: '', component: HomeComponent},
	//{ path: 'home/:id', component: HomeComponent},
	{ path: 'home',
		children: [
			{path: '',component: HomeComponent},
			{path: ':id',component: HomeComponent},
		]
	},
	
	
	
	{ path: 'login', component: LoginComponent},
	{ path: 'pipe', component: PipelineComponent},
	{ path: 'form', component: FormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
