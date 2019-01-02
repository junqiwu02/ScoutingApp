import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchComponent } from './search/search.component';
import { TeaminfoComponent } from './teaminfo/teaminfo.component';
import { FiltersComponent } from './filters/filters.component';
import { MyteamComponent } from './myteam/myteam.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
    { path: '', redirectTo: '/search', pathMatch: 'full' },

    { path: 'search', component: SearchComponent },
    { path: 'teaminfo', component: TeaminfoComponent },
    { path: 'filters', component: FiltersComponent },
    { path: 'myteam', component: MyteamComponent },
    { path: 'about', component: AboutComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
