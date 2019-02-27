import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Component21Component } from './component21.component';

describe('Component21Component', () => {
  let component: Component21Component;
  let fixture: ComponentFixture<Component21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Component21Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Component21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
