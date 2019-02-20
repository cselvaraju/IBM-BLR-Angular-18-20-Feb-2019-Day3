import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PostlistComponent } from './components/postlist/postlist.component';
import { PipedemoComponent } from './components/pipedemo/pipedemo.component';
import { Friendly404Component } from './components/friendly404/friendly404.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'posts', component: PostlistComponent},
  {path: 'pipedemo', component: PipedemoComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', component: Friendly404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
