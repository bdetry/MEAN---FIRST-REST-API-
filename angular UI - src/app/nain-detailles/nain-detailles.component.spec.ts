import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NainDetaillesComponent } from './nain-detailles.component';

describe('NainDetaillesComponent', () => {
  let component: NainDetaillesComponent;
  let fixture: ComponentFixture<NainDetaillesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NainDetaillesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NainDetaillesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
