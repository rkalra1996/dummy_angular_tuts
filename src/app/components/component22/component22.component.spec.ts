import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Component22Component } from './component22.component';

describe('Component22Component', () => {
  let component: Component22Component;
  let fixture: ComponentFixture<Component22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Component22Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Component22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
