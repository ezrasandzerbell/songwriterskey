/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SongbankComponent } from './songbank.component';

describe('SongbankComponent', () => {
  let component: SongbankComponent;
  let fixture: ComponentFixture<SongbankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SongbankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SongbankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
