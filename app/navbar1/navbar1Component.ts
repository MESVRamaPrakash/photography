import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar1',
  templateUrl: './navbar1.component.html',
  styleUrls: ['./navbar1.component.css']
})
export class Navbar1Component{
  logo = "Photography";
  alt = "Logo";
  link1 = "Home";
  link2 = "Topics";
  link3 = "Contact me";
  link4 = "Logout"; 

  // constructor(private route: Router) { }

  // ngOnInit(): void { }

  // pricing() {
  //   this.route.navigateByUrl('/price');
  // }
}
