import { PostService } from './services/post.service';
import { UserService } from './services/user.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { UsersComponent } from './components/users/users.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PostsComponent } from './components/posts/posts.component';
import { HttpClientModule } from '@angular/common/http';
import { PostFormComponent } from './components/post-form/post-form.component';
import { HomeComponent } from './components/home/home.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UsersComponent,
    NavbarComponent,
    PostsComponent,
    PostFormComponent,
    HomeComponent,
    PostDetailsComponent,
    NotfoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    UserService,
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
