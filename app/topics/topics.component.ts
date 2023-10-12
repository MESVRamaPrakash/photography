import { Component } from '@angular/core';
import { Topics } from '../models/price';
import { ServicetService } from '../servicet.service';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.css']
})
export class TopicsComponent {
  topic!:Topics[];
  constructor(private service:ServicetService) {}

  ngOnInit():void {
    this.service.top().subscribe(data=>this.topic=data);

  }
}
