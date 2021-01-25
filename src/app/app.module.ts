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
import { TopicListComponent } from './components/smart/forum/topic-list/topic-list.component';
import { SubjectComponent } from './components/smart/forum/subject/subject.component';
import { ModuleSubjectComponent } from './components/elements/module-subject/module-subject.component';
import { ModuleAnswerComponent } from './components/elements/module-answer/module-answer.component';
import { ModuleCommentComponent } from './components/elements/module-comment/module-comment.component';
import {Nl2BrPipeModule} from 'nl2br-pipe';
import { CitySearchComponent } from './components/elements/city-search/city-search.component';
import { CityInfosComponent } from './components/elements/city-infos/city-infos.component';
import { WeatherWidgetComponent } from './components/elements/weather-widget/weather-widget.component';
import { InfosCityWidgetComponent } from './components/elements/infos-city-widget/infos-city-widget.component';
import { InfosPollutionWidgetComponent } from './components/elements/infos-pollution-widget/infos-pollution-widget.component';
import { InformationComponent } from './components/smart/information/information.component';
import { MapWidgetComponent } from './components/elements/map-widget/map-widget.component';
import { PolluantWidgetComponent } from './components/elements/polluant-widget/polluant-widget.component';
registerLocaleData(localeFr, 'fr');


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainMenuComponent,
    FooterComponent,
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
    TopicListComponent,
    SubjectComponent,
    ModuleSubjectComponent,
    ModuleAnswerComponent,
    ModuleCommentComponent,
    CitySearchComponent,
    CityInfosComponent,
    WeatherWidgetComponent,
    InfosCityWidgetComponent,
    InfosPollutionWidgetComponent,
    InformationComponent,
    MapWidgetComponent,
    PolluantWidgetComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    NgbModule,
    HttpClientModule,
    FormsModule, 
    RouterModule.forRoot(ROUTES),
    [Nl2BrPipeModule],
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
