import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { InputSearchComponent } from './input-search/input-search.component';
import { MessageComponent } from './message/message.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { MenuComponent } from './menu/menu.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { RegisterComponent } from './register/register.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { AddUserComponent } from './add-user/add-user.component';
import {UserService} from './services/user.service';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    InputSearchComponent,
    MessageComponent,
    MenuComponent,
    TemplateDrivenFormComponent,
    RegisterComponent,
    EditUserComponent,
    AddUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxPaginationModule,
    ReactiveFormsModule],
    providers: [UserService],
    bootstrap: [AppComponent]
})
export class AppModule { }
