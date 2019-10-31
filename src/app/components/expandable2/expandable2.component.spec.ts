import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Expandable2Component } from './expandable2.component';

describe('Expandable2Component', () => {
  let component: Expandable2Component;
  let fixture: ComponentFixture<Expandable2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Expandable2Component ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Expandable2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
