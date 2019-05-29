import { Component, OnInit,HostListener,HostBinding } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public router:Router,public activate:ActivatedRoute) { }

  ngOnInit() {
  }
  login(){
this.router.navigate(['/nested/1']);

  }
  @HostBinding('style.fontWeight') border: string;

  @HostListener('click') onClick(){
      this.border = 'bold';

  alert("dsfds")
  }

}
