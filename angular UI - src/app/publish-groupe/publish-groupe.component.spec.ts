import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishGroupeComponent } from './publish-groupe.component';

describe('PublishGroupeComponent', () => {
  let component: PublishGroupeComponent;
  let fixture: ComponentFixture<PublishGroupeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublishGroupeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublishGroupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
