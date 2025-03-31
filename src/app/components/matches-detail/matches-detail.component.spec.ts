import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchesDetailComponent } from './matches-detail.component';

describe('MatchesDetailComponent', () => {
  let component: MatchesDetailComponent;
  let fixture: ComponentFixture<MatchesDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatchesDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatchesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
