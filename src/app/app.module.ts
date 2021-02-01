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
import { InfosCityWidgetComponent } from './components/elements/infos-city-widget/infos-city-widget.component';
import { InfosPollutionWidgetComponent } from './components/elements/infos-pollution-widget/infos-pollution-widget.component';
import { InformationComponent } from './components/smart/information/information.component';
import { MapWidgetComponent } from './components/elements/map-widget/map-widget.component';
import { LeafletMarkerClusterModule } from '@asymmetrik/ngx-leaflet-markercluster';
import { SubjectFormModuleComponent } from './components/elements/subject-form-module/subject-form-module.component';
import { ModuleAnswerFormComponent } from './components/elements/module-answer-form/module-answer-form.component';
import { CommentFormModuleComponent } from './components/elements/comment-form-module/comment-form-module.component';
import { FavoriteListComponent } from './components/elements/favorite-list/favorite-list.component';
import { FavoriteAddComponent } from './components/elements/favorite-add/favorite-add.component';
import { WidgetWeatherComponent } from './components/elements/widget-weather/widget-weather.component';
import { WidgetPolluantComponent } from './components/elements/widget-polluant/widget-polluant.component';
import {NgToggleModule} from '@nth-cloud/ng-toggle';
import { WidgetLoginRequiredComponent } from './components/elements/widget-login-required/widget-login-required.component';
import { EditTopicComponent } from './components/modals/edit-topic/edit-topic.component';
import { ChartsModule } from 'ng2-charts';
import { WidgetWeatherStatComponent } from './components/elements/widget-weather-stat/widget-weather-stat.component';
import { ChartsComponent } from './components/elements/charts/charts.component';
import { LoadingScreenComponent } from './components/elements/loading-screen/loading-screen.component';
import { WidgetPolluantStatComponent } from './components/elements/widget-polluant-stat/widget-polluant-stat.component';
import { WidgetChartsComponent } from './components/elements/widget-charts/widget-charts.component';
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
    InfosCityWidgetComponent,
    InfosPollutionWidgetComponent,
    InformationComponent,
    MapWidgetComponent,
    SubjectFormModuleComponent,
    ModuleAnswerFormComponent,
    CommentFormModuleComponent,
    FavoriteListComponent,
    FavoriteAddComponent,
    WidgetWeatherComponent,
    WidgetPolluantComponent,
    WidgetLoginRequiredComponent,
    EditTopicComponent,
    WidgetWeatherStatComponent,
    ChartsComponent,
    LoadingScreenComponent,
    WidgetPolluantStatComponent,
    WidgetChartsComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    NgbModule,
    HttpClientModule,
    FormsModule, 
    RouterModule.forRoot(ROUTES),
    [Nl2BrPipeModule],
    LeafletMarkerClusterModule,
    NgToggleModule,
    ChartsModule
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
