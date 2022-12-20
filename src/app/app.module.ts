import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BookListComponent} from './component/book-list/book-list.component';
import {BookDetailsComponent} from './component/book-list/book-details/book-details.component';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";
import { BookItemComponent } from './component/book-list/book-item/book-item.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BookEditComponent } from './component/book-list/book-item/book-edit/book-edit.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ReactiveFormsModule } from '@angular/forms';
import { BookAddComponent } from './component/book-add/book-add.component';
import { FooterComponent } from './component/footer/footer.component';
import { LoginComponent } from './component/login/login.component';
import {MatIconModule} from '@angular/material/icon';
import { LogoComponent } from './component/logo/logo.component';
import { StoreModule } from '@ngrx/store';
import { loginReducer } from './store/login.reducer';
import { RegisterComponent } from './component/user/register/register.component';

const routes: Routes = [
  {path: '', redirectTo: '/books', pathMatch: 'full'},
  {path: "books", component: BookListComponent},
  {path: 'books/:id', component: BookItemComponent},
  {path: 'add-book', component: BookAddComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookDetailsComponent,
    BookItemComponent,
    NavbarComponent,
    BookEditComponent,
    BookAddComponent,
    FooterComponent,
    LoginComponent,
    LogoComponent,
    RegisterComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    MatIconModule,
    StoreModule.forRoot({ login : loginReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
