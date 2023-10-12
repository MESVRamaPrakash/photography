import { Component } from '@angular/core';
import { Price } from '../models/price';
import { PriceserviceService } from '../services/priceservice.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  price!:Price[];
  constructor(private service:PriceserviceService) {}

  ngOnInit():void {
    this.service.fun().subscribe(data=>this.price=data);
  }
}
