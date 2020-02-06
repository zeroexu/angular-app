import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdquisitionsComponent } from './adquisitions.component';

describe('AdquisitionsComponent', () => {
  let component: AdquisitionsComponent;
  let fixture: ComponentFixture<AdquisitionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdquisitionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdquisitionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
