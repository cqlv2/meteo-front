import { Routes } from '@Angular/router';
import { WeatherComponent } from '../components/smart/weather/weather.component'
import { FavoriteComponent } from '../components/smart/favorite/favorite.component'
import { ForumComponent } from '../components/smart/forum/forum.component'
import { LoginComponent } from '../components/smart/login/login.component'
import { RegisterComponent } from '../components/smart/register/register.component'
import { ProfilComponent } from '../components/smart/profil/profil.component'
import { GestionFavoriteComponent } from '../components/smart/gestion-favorite/gestion-favorite.component'
import { CguComponent } from '../components/smart/register/cgu/cgu.component';
import { FormComponent } from '../components/smart/register/form/form.component';
import { StateComponent } from '../components/smart/register/state/state.component';
import { ServerComponent } from '../components/error/server/server.component';
import { TopicListComponent } from '../components/smart/forum/topic-list/topic-list.component';
import { SubjectComponent } from '../components/smart/forum/subject/subject.component';
import { InformationComponent } from '../components/smart/information/information.component';
import { FavoriteListComponent } from '../components/elements/favorite-list/favorite-list.component';
import { FavoriteAddComponent } from '../components/elements/favorite-add/favorite-add.component';



export const ROUTES: Routes = [
    // routage par defaut
    { path: '', pathMatch: 'full', redirectTo: 'weather' },
    // weather
    {
        path: 'weather', component: WeatherComponent,
    },
    //    informations
    {
        path: 'information', component: InformationComponent,
    },

    // favorites
    {
        path: 'favorites', component: FavoriteComponent,
        children: [
            {path: '', pathMatch: 'full', redirectTo: 'view'},
            {path: 'view', component: FavoriteListComponent},
            {path: 'add', component: FavoriteAddComponent},
            
        ]
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
    
    // error500
    {
        path: 'err500', component: ServerComponent,
    }






];