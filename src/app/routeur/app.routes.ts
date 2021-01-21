import { Routes } from '@Angular/router';
import { HomeComponent } from '../components/smart/home/home.component'
import { WeatherComponent } from '../components/smart/weather/weather.component'
import { FavoriteComponent } from '../components/smart/favorite/favorite.component'
import { ForumComponent } from '../components/smart/forum/forum.component'
import { LoginComponent } from '../components/smart/login/login.component'
import { RegisterComponent } from '../components/smart/register/register.component'
import { ProfilComponent } from '../components/smart/profil/profil.component'
import { GestionFavoriteComponent } from '../components/smart/gestion-favorite/gestion-favorite.component'
import { LogoutComponent } from '../components/smart/logout/logout.component'
import { CguComponent } from '../components/smart/register/cgu/cgu.component';
import { FormComponent } from '../components/smart/register/form/form.component';
import { StateComponent } from '../components/smart/register/state/state.component';
import { ServerComponent } from '../components/error/server/server.component';
import { TopicListComponent } from '../components/smart/forum/topic-list/topic-list.component';
import { SubjectComponent } from '../components/smart/forum/subject/subject.component';



export const ROUTES: Routes = [
    // routage par defaut
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    //    home
    {
        path: 'home', component: HomeComponent,
    },

    // weather
    {
        path: 'weather', component: WeatherComponent,
    },
    // favorites
    {
        path: 'favorites', component: FavoriteComponent,
    },
    // forum
    {
        path: 'forum', component: ForumComponent,
        children: [
            {path: '', pathMatch: 'full', redirectTo: 'topics'},
            {path: 'topics', component: TopicListComponent},
            {path: 'subjects/:id', component: SubjectComponent}
        ]
    },
    // login
    {
        path: 'login', component: LoginComponent,
    },
    // register
    {
        path: 'register', component: RegisterComponent,
         children:[
            { path: '', pathMatch: 'full', redirectTo: 'cgu' },
            { path: 'cgu', component: CguComponent },
            { path: 'form', component: FormComponent }, 
            { path: 'state', component: StateComponent }, 
        ]
    },
    // profil
    {
        path: 'profil', component: ProfilComponent,
    },
    // favorite
    {
        path: 'favorite', component: GestionFavoriteComponent,
    },  
    // logout
    {
        path: 'logout', component: LogoutComponent,
    },
    // error500
    {
        path: 'err500', component: ServerComponent,
    }






];