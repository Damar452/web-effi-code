import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseEstudiesSectionComponent } from './case-estudies-section.component';

describe('CaseEstudiesSectionComponent', () => {
  let component: CaseEstudiesSectionComponent;
  let fixture: ComponentFixture<CaseEstudiesSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CaseEstudiesSectionComponent]
    });
    fixture = TestBed.createComponent(CaseEstudiesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
