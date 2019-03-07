import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { ReposComponent } from './components/repos/repos.component';
import { NavbarComponent } from './components/navbar/navbar.component';

const routes: Routes = [
  { path: '', component: UsersComponent },
  { path: 'repos', component: ReposComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    ReposComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
