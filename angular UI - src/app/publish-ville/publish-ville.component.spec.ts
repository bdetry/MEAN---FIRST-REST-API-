import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishVilleComponent } from './publish-ville.component';

describe('PublishVilleComponent', () => {
  let component: PublishVilleComponent;
  let fixture: ComponentFixture<PublishVilleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublishVilleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublishVilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
