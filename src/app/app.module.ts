import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { UsersService } from './users.service';

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { ReposComponent } from './components/repos/repos.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { UserComponent } from './components/user/user.component';
import { SearchTestComponent } from './components/search-test/search-test.component';

import { FilterPipe } from './pipes/filter.pipe';
import { UserFilterPipe } from './pipes/user-filter.pipe';

const routes: Routes = [
  { path: '', component: UsersComponent },
  { path: 'repos', component: ReposComponent },
  { path: 'users/:name', component: UserComponent },
  { path: 'repos/:name', component: ReposComponent }
  // { path: '', component: HeroesComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    ReposComponent,
    NavbarComponent,
    HeroesComponent,
    UserComponent,
    SearchTestComponent,
    FilterPipe,
    UserFilterPipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
