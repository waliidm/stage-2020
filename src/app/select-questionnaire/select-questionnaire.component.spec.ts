import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectQuestionnaireComponent } from './select-questionnaire.component';

describe('SelectQuestionnaireComponent', () => {
  let component: SelectQuestionnaireComponent;
  let fixture: ComponentFixture<SelectQuestionnaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectQuestionnaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectQuestionnaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
