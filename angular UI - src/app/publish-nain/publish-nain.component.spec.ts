import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishNainComponent } from './publish-nain.component';

describe('PublishNainComponent', () => {
  let component: PublishNainComponent;
  let fixture: ComponentFixture<PublishNainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublishNainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublishNainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
