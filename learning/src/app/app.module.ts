import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { ChangeTextDirective } from './directives/change-text.directive';
import { SqrtPipe } from './pipes/app.sqrt';
import { HomeComponent } from './components/home/home.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { MyserviceService } from './services/myservice.service';
import { HttpClientModule } from '@angular/common/http';
import { FormComponent } from './components/form/form.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TopBarComponent,
    SqrtPipe,
    ChangeTextDirective,
    HomeComponent,
    ContactusComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	HttpClientModule,
	FormsModule,
	ReactiveFormsModule
  ],
  providers: [
	MyserviceService
  ],
  bootstrap: [AppComponent,HeaderComponent,FooterComponent]
})
export class AppModule { }
