import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './content/about/about.component';
import { PageNotFoundComponent } from './content/page-not-found/page-not-found.component';
import {ContentComponent} from "./content/content.component";
import { ContactsComponent } from './content/contacts/contacts.component';
import { GalleryComponent } from './content/gallery/gallery.component';
import { HomeComponent } from './content/home/home.component';
import { AppComponent } from './app.component';
import { SiteComponent } from './content/site/site.component';
import { Site2Component } from './content/site2/site2.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'app', component: AppComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: 'gallery', component: GalleryComponent},
  {path: 'home', component: HomeComponent},
  {path: 'site', component: SiteComponent},
  {path: 'site2', component: Site2Component},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [ ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
