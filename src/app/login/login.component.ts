import { Component, OnInit, HostListener, HostBinding, ContentChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NestedComponent } from '../nested/nested.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ContentChild(NestedComponent) nestedComponent;

  constructor(public router: Router, public activate: ActivatedRoute) { }

  ngOnInit() {
  }
  login() {
    this.router.navigate(['/nested/1']);

  }
  @HostBinding('style.fontWeight') border: string;

  @HostListener('click') onClick() {
    this.border = 'bold';

    alert("event from child component")
  }
  ngAfterContentInit() {
    console.log("this.nestedComponent ", this.nestedComponent);
  }
}
