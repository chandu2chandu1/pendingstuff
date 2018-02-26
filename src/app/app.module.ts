import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LoginServiceService } from './services/login-service.service';
import { MyTodosComponent } from './my-todos/my-todos.component';
import { HeaderComponent } from './header/header.component';
import { TodoService } from './todo.service';

const appRoutes = [
  {
    path: "",
    component:LoginComponent
  },
  {
    path: "mytodos",
    component: MyTodosComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MyTodosComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [LoginServiceService, TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
