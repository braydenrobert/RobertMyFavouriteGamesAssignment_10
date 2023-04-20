import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { ContentCardComponent } from './content-card/content-card.component';
import { ContentListComponent } from './content-list/content-list.component';
import { ContentTypeFilterPipe } from './type-filter.pipe';
import {FormsModule} from "@angular/forms";
import { CommonModule } from '@angular/common';
import {HoverAffectDirective} from "./hover-affect.directive";
import { MessagesComponent } from './messages/messages.component';
import { ModifyContentComponent } from './modify-content/modify-content.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import {MatGridListModule} from "@angular/material/grid-list";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import { ContentDetailComponent } from './content-detail/content-detail.component';
import {RouterLink, RouterModule, Routes} from "@angular/router";
import { ServiceWorkerModule } from '@angular/service-worker';
//import { environment } from "../environment";
import { MatSnackBarModule } from '@angular/material/snack-bar';


const routes: Routes = [
  { path: '', redirectTo: '/list', pathMatch: 'full' }, // Redirect root URL to content list
  { path: 'list', component: ContentListComponent }, // Content list route
  { path: 'detail/:id', component: ContentDetailComponent }, // Content detail route with id parameter
  { path: '**', redirectTo: '/list' } // Redirect any invalid URL to content list
];


@NgModule({
  declarations: [
    AppComponent,
    ContentListComponent,
    ContentCardComponent,
    ContentTypeFilterPipe,
    HoverAffectDirective,
    MessagesComponent,
    ModifyContentComponent,
    ContentDetailComponent
  ],
    imports: [
        BrowserModule,
        FormsModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatInputModule,
        MatCardModule,
        MatIconModule,
        MatDialogModule,
        MatGridListModule,
        MatProgressBarModule,
        RouterLink,
        RouterModule.forRoot(routes),
        ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
        MatSnackBarModule
    ],
  providers: [],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class ContentListModule { }
export class AppRoutingModule { }
