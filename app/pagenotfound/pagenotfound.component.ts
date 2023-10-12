import { Component } from '@angular/core';

@Component({
  selector: 'app-pagenotfound',
  templateUrl: './pagenotfound.component.html',
  styleUrls: ['./pagenotfound.component.css']
})
export class PagenotfoundComponent {
  public message = {
    "color":"red",
    "font-size":"30px",
  }
  greetings='';
  onclick(event:any){
    this.greetings=event.pointerType;
    console.log(event);
  }
}
