import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { UpdatedeleteComponent } from './updatedelete/updatedelete.component';
import { NewHttpComponent } from './new-http/new-http.component';
import {EndpointService} from '../app/endpoint.service';
import { HttperrorComponent } from './httperror/httperror.component';
import { GithubfollowersComponent } from './githubfollowers/githubfollowers.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    UpdatedeleteComponent,
    NewHttpComponent,
    HttperrorComponent,
    GithubfollowersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule   //Import http Module Here
  ],
  providers: [EndpointService],
  bootstrap: [AppComponent]
})
export class AppModule { }
