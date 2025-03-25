import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinesUpComponent } from './lines-up.component';

describe('LinesUpComponent', () => {
  let component: LinesUpComponent;
  let fixture: ComponentFixture<LinesUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinesUpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinesUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
