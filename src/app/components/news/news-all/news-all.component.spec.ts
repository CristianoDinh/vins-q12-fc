import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsAllComponent } from './news-all.component';

describe('NewsAllComponent', () => {
  let component: NewsAllComponent;
  let fixture: ComponentFixture<NewsAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewsAllComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
