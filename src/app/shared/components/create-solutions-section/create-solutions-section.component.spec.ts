import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSolutionsSectionComponent } from './create-solutions-section.component';

describe('CreateSolutionsSectionComponent', () => {
  let component: CreateSolutionsSectionComponent;
  let fixture: ComponentFixture<CreateSolutionsSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateSolutionsSectionComponent]
    });
    fixture = TestBed.createComponent(CreateSolutionsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
