import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesCardToAddComponent } from './courses-card-to-add.component';

describe('CoursesCardToAddComponent', () => {
  let component: CoursesCardToAddComponent;
  let fixture: ComponentFixture<CoursesCardToAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursesCardToAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoursesCardToAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
