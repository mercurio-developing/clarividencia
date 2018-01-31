import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//app components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { NgGalleryComponent } from './components/ng-gallery/ng-gallery.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { EmailsuccessComponent } from './components/emailsuccess/emailsuccess.component';

//app route
const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path:'home',component:PortfolioComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  { path: 'emailsuccess', component: EmailsuccessComponent },
  { path: '404', component: NotfoundComponent },
  { path: '**', redirectTo: '/404' }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    PortfolioComponent,
    ContactComponent,
    AboutComponent,
    NgGalleryComponent,
    NotfoundComponent,
    EmailsuccessComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
