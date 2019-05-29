import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  loginform:loginForm;
  a=new loginForm("");
}
export class loginForm {
  constructor(name){
  }
}
