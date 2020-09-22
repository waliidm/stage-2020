import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectQuestionnaireToAnswerComponent } from './select-questionnaire-to-answer.component';

describe('SelectQuestionnaireToAnswerComponent', () => {
  let component: SelectQuestionnaireToAnswerComponent;
  let fixture: ComponentFixture<SelectQuestionnaireToAnswerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectQuestionnaireToAnswerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectQuestionnaireToAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
