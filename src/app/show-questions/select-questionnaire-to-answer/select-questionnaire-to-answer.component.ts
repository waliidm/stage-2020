import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-select-questionnaire-to-answer',
  templateUrl: './select-questionnaire-to-answer.component.html',
  styleUrls: ['./select-questionnaire-to-answer.component.scss']
})
export class SelectQuestionnaireToAnswerComponent implements OnInit {
  questionnaires: Array<any>;

  constructor(private dataService: DataService) { }
  fetchData()
  {
    this.dataService.getQuestions().subscribe(res => {
      console.log(res);
      
      this.questionnaires = res;
    });
  }
  ngOnInit(): void {
    this.fetchData();
  }
}
