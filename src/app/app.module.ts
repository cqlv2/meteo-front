import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule }from '@angular/common/http';
import { RouterModule} from '@angular/router'
import { ROUTES } from './routeur/app.routes';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';

import { LOCALE_ID } from '@angular/core';
import { registerLocaleData, CommonModule } from '@angular/common';
import localeFr from '@angular/common/locales/fr';

import { HomeComponent } from './components/smart/home/home.component';
import { WeatherComponent } from './components/smart/weather/weather.component';
import { FavoriteComponent } from './components/smart/favorite/favorite.component';
import { ForumComponent } from './components/smart/forum/forum.component';
import { LoginComponent } from './components/smart/login/login.component';
import { RegisterComponent } from './components/smart/register/register.component';
import { ProfilComponent } from './components/smart/profil/profil.component';
import { LogoutComponent } from './components/smart/logout/logout.component';

import { HeaderComponent } from './components/elements/header/header.component';
import { UserMenuComponent } from './components/elements/user-menu/user-menu.component';
import { MainMenuComponent } from './components/elements/main-menu/main-menu.component';
import { FooterComponent } from './components/elements/footer/footer.component';

import { GestionFavoriteComponent } from './components/smart/gestion-favorite/gestion-favorite.component';
import { AuthInterceptorService } from './services/AuthInterceptorService';
import { CguComponent } from './components/smart/register/cgu/cgu.component';
import { FormComponent } from './components/smart/register/form/form.component';
import { StateComponent } from './components/smart/register/state/state.component';
import { ServerComponent } from './components/error/server/server.component';
registerLocaleData(localeFr, 'fr');


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainMenuComponent,
    FooterComponent,
    HomeComponent,
    WeatherComponent,
    FavoriteComponent,
    ForumComponent,
    LoginComponent,
    RegisterComponent,
    UserMenuComponent,
    ProfilComponent,
    LogoutComponent,
    GestionFavoriteComponent,
    CguComponent,
    FormComponent,
    StateComponent,
    ServerComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    NgbModule,
    HttpClientModule,
    FormsModule, 
    RouterModule.forRoot(ROUTES),
  ],
  providers: [
    { provide: LOCALE_ID, useValue: "fr-FR" },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
