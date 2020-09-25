import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BuildsComponent } from './components/builds/builds.component';
import { CreateBuildComponent } from './components/create-build/create-build.component';
import { EditBuildComponent } from './components/edit-build/edit-build.component';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'builds', component: BuildsComponent },
  { path: 'builds/create', component: CreateBuildComponent },
  { path: 'builds/edit/:id', component: EditBuildComponent },
  { path: '', component: HomeComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
