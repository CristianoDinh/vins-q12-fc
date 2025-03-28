import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineupComponent } from './lineup-v1.2.0.component';

describe('LineupComponent', () => {
  let component: LineupComponent;
  let fixture: ComponentFixture<LineupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LineupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LineupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
