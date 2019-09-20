import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './content/about/about.component';
import { PageNotFoundComponent } from './content/page-not-found/page-not-found.component';
import {ContentComponent} from "./content/content.component";
import { ContactsComponent } from './content/contacts/contacts.component';
import { GalleryComponent } from './content/gallery/gallery.component';
import { HomeComponent } from './content/home/home.component';


const routes: Routes = [
  {path: '',component:ContentComponent},
  {path:'about',component:AboutComponent},
  {path:'contacts',component:ContactsComponent},
  {path:'gallery',component:GalleryComponent},
  {path:'home',component:HomeComponent},
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  declarations:[],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
