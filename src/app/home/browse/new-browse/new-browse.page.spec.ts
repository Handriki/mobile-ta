import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBrowsePage } from './new-browse.page';

describe('NewBrowsePage', () => {
  let component: NewBrowsePage;
  let fixture: ComponentFixture<NewBrowsePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewBrowsePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewBrowsePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
