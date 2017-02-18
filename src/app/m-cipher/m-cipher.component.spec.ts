/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MCipherComponent } from './m-cipher.component';

describe('MCipherComponent', () => {
  let component: MCipherComponent;
  let fixture: ComponentFixture<MCipherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MCipherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MCipherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
