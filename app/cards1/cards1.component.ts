import { Component } from '@angular/core';
import { Price } from '../models/price';
import { PriceserviceService } from '../services/priceservice.service';

@Component({
  selector: 'app-cards1',
  templateUrl: './cards1.component.html',
  styleUrls: ['./cards1.component.css']
})
export class Cards1Component {
  price!:Price[];
  constructor(private service:PriceserviceService) {}

  ngOnInit():void {
    this.service.fun().subscribe(data=>this.price=data);
  }
}
