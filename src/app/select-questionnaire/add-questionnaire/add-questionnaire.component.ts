import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-add-questionnaire',
  templateUrl: './add-questionnaire.component.html',
  styleUrls: ['./add-questionnaire.component.scss']
})
export class AddQuestionnaireComponent implements OnInit {
  @Input() title="";
  constructor(private dataService :DataService) { }

  ngOnInit(): void {
  }

  onSubmit()
  {
    this.dataService.addQuestionnaire(this.title).subscribe();

    
  }


}
