import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NainComponent } from './nain.component';

describe('NainComponent', () => {
  let component: NainComponent;
  let fixture: ComponentFixture<NainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
