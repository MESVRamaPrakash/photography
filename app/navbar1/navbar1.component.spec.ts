import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Navbar1Component } from './Navbar1Component';

describe('Navbar1Component', () => {
  let component: Navbar1Component;
  let fixture: ComponentFixture<Navbar1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Navbar1Component]
    });
    fixture = TestBed.createComponent(Navbar1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});