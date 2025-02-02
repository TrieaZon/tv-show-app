import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvSearchComponent } from './tv-search.component';

describe('TvSearchComponent', () => {
  let component: TvSearchComponent;
  let fixture: ComponentFixture<TvSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TvSearchComponent]
    });
    fixture = TestBed.createComponent(TvSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
