import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorModifyComponent } from './professor-modify.component';

describe('ProfessorModifyComponent', () => {
  let component: ProfessorModifyComponent;
  let fixture: ComponentFixture<ProfessorModifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessorModifyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfessorModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
