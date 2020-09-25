import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuildsComponent } from './components/builds/builds.component';
import { HomeComponent } from './components/home/home.component';
import { CreateBuildComponent } from './components/create-build/create-build.component';
import { EditBuildComponent } from './components/edit-build/edit-build.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    BuildsComponent,
    HomeComponent,
    CreateBuildComponent,
    EditBuildComponent,
    PageNotFoundComponent,
    NavigationComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
