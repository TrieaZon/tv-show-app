import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeScreenShowComponent } from './home-screen-show.component';

describe('HomeScreenShowComponent', () => {
  let component: HomeScreenShowComponent;
  let fixture: ComponentFixture<HomeScreenShowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeScreenShowComponent]
    });
    fixture = TestBed.createComponent(HomeScreenShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
