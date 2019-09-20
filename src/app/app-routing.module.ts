import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';

const routes: Routes = [
  {path: 'app',component:AppComponent},
  {path: 'header',component:HeaderComponent},
  {path: 'footer',component: FooterComponent},
  {path: 'contents',component:ContentComponent},
];

@NgModule({
  declarations:[],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
