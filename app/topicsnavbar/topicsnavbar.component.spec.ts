import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicsnavbarComponent } from './topicsnavbar.component';

describe('TopicsnavbarComponent', () => {
  let component: TopicsnavbarComponent;
  let fixture: ComponentFixture<TopicsnavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopicsnavbarComponent]
    });
    fixture = TestBed.createComponent(TopicsnavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
