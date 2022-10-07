import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Components imports statements
import { HomePageComponent } from './home-page/home-page.component';
import { BreedComponent } from './breed/breed.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ImagedialogComponent } from './imagedialog/imagedialog.component';
import { SubBreedComponent } from './sub-breed/sub-breed.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';



// Import from Angular material. This can also be in a seperate module as the app enlarges.
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { HeaderComponent } from './header/header.component';
import { PhotogalleryComponent } from './photogallery/photogallery.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    BreedComponent,
    ImagedialogComponent,
    SubBreedComponent,
    PageNotFoundComponent,
    HeaderComponent,
    PhotogalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatMenuModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
