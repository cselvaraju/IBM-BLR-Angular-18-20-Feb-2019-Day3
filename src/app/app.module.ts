import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { ActorService } from './services/actor.service';
import { ObservableService } from './services/observable.service';

import { ReversetextPipe } from './pipes/reversetext.pipe';
import { PiglatinPipe } from './pipes/piglatin.pipe';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './components/demo/demo.component';
import { ActorlistComponent } from './components/actorlist/actorlist.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { PipedemoComponent } from './components/pipedemo/pipedemo.component';
import { ObservabledemoComponent } from './components/observabledemo/observabledemo.component';
import { PostlistComponent } from './components/postlist/postlist.component';
import { HomeComponent } from './components/home/home.component';
import { Friendly404Component } from './components/friendly404/friendly404.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    ActorlistComponent,
    ParentComponent,
    ChildComponent,
    PipedemoComponent,
    ReversetextPipe,
    PiglatinPipe,
    ObservabledemoComponent,
    PostlistComponent,
    HomeComponent,
    Friendly404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ActorService,
    ObservableService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
