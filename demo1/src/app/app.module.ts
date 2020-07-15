import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ChangeTextDirective } from './change-text.directive';
import { PipelineComponent } from './components/pipeline/pipeline.component';
import { SqrtPipe } from './components/pipeline/pipeline.sqrt';
import { FormComponent } from './components/form/form.component';
import { AppRouterModule } from './app-router.module';
import { AppCommonModule } from './app-common.module';

@NgModule({
  declarations: [
    AppComponent,
    SqrtPipe,
    HomeComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    ChangeTextDirective,
    PipelineComponent,
    FormComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
	HttpClientModule,
	AppRouterModule,
	AppCommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
