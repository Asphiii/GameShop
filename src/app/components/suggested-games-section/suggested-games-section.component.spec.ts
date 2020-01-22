import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestedGamesSectionComponent } from './suggested-games-section.component';

describe('SuggestedGamesSectionComponent', () => {
  let component: SuggestedGamesSectionComponent;
  let fixture: ComponentFixture<SuggestedGamesSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuggestedGamesSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuggestedGamesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
