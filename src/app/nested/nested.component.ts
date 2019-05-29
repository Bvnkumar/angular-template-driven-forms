import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-nested',
  templateUrl: './nested.component.html',
  styleUrls: ['./nested.component.css']
})
export class NestedComponent implements OnInit {

  constructor(public route:ActivatedRoute) { }

  ngOnInit() {
  console.log("ddasdasd")
console.log("this.route.snapshot.params.id", this.route.snapshot.params.id); 
 }


}
