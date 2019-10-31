import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenMessagePage } from './open-message.page';

describe('OpenMessagePage', () => {
  let component: OpenMessagePage;
  let fixture: ComponentFixture<OpenMessagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenMessagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenMessagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
