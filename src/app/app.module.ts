import { environment } from '../environments/environment';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { FiltersComponent } from './filters/filters.component';
import { AboutComponent } from './about/about.component';
import { MyteamComponent } from './myteam/myteam.component';

import { DragDropModule } from '@angular/cdk/drag-drop';

import { CoreModule } from './core/core.module';
import { AngularFireModule } from '@angular/fire';
import { AuthService } from './core/auth.service';
import { BottomnavComponent } from './bottomnav/bottomnav.component';
export const firebaseConfig = environment.firebaseConfig;


@NgModule({
    declarations: [
        AppComponent,
        SearchComponent,
        FiltersComponent,
        AboutComponent,
        MyteamComponent,
        BottomnavComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        DragDropModule,
        AngularFireModule.initializeApp(firebaseConfig),
        CoreModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
