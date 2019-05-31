import { Component,Input,ElementRef,ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  loginform:loginForm;
  a=new loginForm("");
  @ViewChild('name') input;
  constructor(private elementref:ElementRef){
  }
  ngOnInit(){
 
  }
  ngAfterViewInit() {
    console.log("using viewchild",this.input.nativeElement.value);

    console.log("using element reference",this.elementref.nativeElement.querySelector('#name').value);
  }

}
export class loginForm {
  constructor(name){
  }
}
