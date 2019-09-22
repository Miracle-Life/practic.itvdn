import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { PageNotFoundComponent } from './content/page-not-found/page-not-found.component';
import { AboutComponent } from './content/about/about.component';
import { ContactsComponent } from './content/contacts/contacts.component';
import { GalleryComponent } from './content/gallery/gallery.component';
import { HomeComponent } from './content/home/home.component';
import { SiteComponent } from './content/site/site.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { FilfCompComponent } from './content/site/filf-comp/filf-comp.component';
import { Site2Component } from './content/site2/site2.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    PageNotFoundComponent,
    AboutComponent,
    ContactsComponent,
    GalleryComponent,
    HomeComponent,
    SiteComponent,
    FilfCompComponent,
    Site2Component,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
