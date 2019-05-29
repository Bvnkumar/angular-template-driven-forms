import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {RouterModule} from '@angular/router';
import { NestedComponent } from './nested/nested.component';
var routes=[{path:'login',component:LoginComponent},{path:'nested/:id',component:NestedComponent},{path:'',redirectTo:'/login',pathMatch: 'full'}];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NestedComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
