import { Component } from '@angular/core';

@Component({
  selector: 'app-topicsnavbar',
  templateUrl: './topicsnavbar.component.html',
  styleUrls: ['./topicsnavbar.component.css']
})
export class TopicsnavbarComponent {
  logo = "Photography";
  alt = "Logo";
  link1 = "Home";
  link2 = "Topics";
  link3 = "Contact me";
  link4 = "Logout"; 
}
