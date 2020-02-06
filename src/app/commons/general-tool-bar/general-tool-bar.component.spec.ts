import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralToolBarComponent } from './general-tool-bar.component';

describe('GeneralToolBarComponent', () => {
  let component: GeneralToolBarComponent;
  let fixture: ComponentFixture<GeneralToolBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralToolBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralToolBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
