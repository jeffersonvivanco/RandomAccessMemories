import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { PhotosService } from './photos.service';

import { AppComponent } from './app.component';

// Each component must be declared in one and only one module
import { PhotosComponent } from './photos.component';
import { PhotoSearchComponent } from './photo-search.component';


@NgModule({
  declarations: [
    AppComponent,
    PhotosComponent,
    PhotoSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [PhotosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
