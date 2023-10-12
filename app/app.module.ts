import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BannerComponent } from './banner/banner.component';
import { CardsComponent } from './cards/cards.component';
import { FaqsComponent } from './faqs/faqs.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Cards1Component } from './cards1/cards1.component';
import { Navbar1Component } from './navbar1/navbar1Component';
import { TopicsComponent } from './topics/topics.component';
import { SignupComponent } from './signup/signup.component';
import { LoginnavbarComponent } from './loginnavbar/loginnavbar.component';
import { TopicsnavbarComponent } from './topicsnavbar/topicsnavbar.component';
import { HomenavbarComponent } from './homenavbar/homenavbar.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    PagenotfoundComponent,
    NavbarComponent,
    BannerComponent,
    CardsComponent,
    FaqsComponent,
    FooterComponent,
    LoginComponent,
    AboutComponent,
    HomeComponent,
    Cards1Component,
    Navbar1Component,
    TopicsComponent,
    SignupComponent,
    LoginnavbarComponent,
    TopicsnavbarComponent,
    HomenavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
