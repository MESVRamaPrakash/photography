import { Component } from '@angular/core';

@Component({
  selector: 'app-homenavbar',
  templateUrl: './homenavbar.component.html',
  styleUrls: ['./homenavbar.component.css']
})
export class HomenavbarComponent {
  logo = "Photography";
  alt = "Logo";
  link1 = "Home";
  link2 = "Topics";
  link3 = "Contact me";
  link4 = "Logout"; 
}
