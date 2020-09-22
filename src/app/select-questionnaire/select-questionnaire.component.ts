import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DataService } from '../data.service';
import { AddQuestionnaireComponent } from './add-questionnaire/add-questionnaire.component';
export interface DialogData {
}
@Component({
  selector: 'app-select-questionnaire',
  templateUrl: './select-questionnaire.component.html',
  styleUrls: ['./select-questionnaire.component.scss']
})
export class SelectQuestionnaireComponent implements OnInit {

  questionnaires: Array<any>;
  breakpoint: number;

  constructor(private dataService: DataService,private dialog: MatDialog) { }
  fetchData()
  {
    this.dataService.getQuestions().subscribe(res => {
      console.log(res);
      
      this.questionnaires = res;
    });
  }
  ngOnInit(): void {
    this.fetchData();
    this.breakpoint = (window.innerWidth <= 600) ? 1 : 3;

  }
  add()
  {
    this.dialog.open(AddQuestionnaireComponent, {
      width: '500px',
      height:'250px'
     
      
    });
  }

  remove(id)
  {
    this.dataService.removeQuestionnaire(id).subscribe(
      ()=>{
        this.fetchData();
      }
    );

  }

  
onResize(event) {
  console.log("resize");
  
  this.breakpoint = (event.target.innerWidth <= 600) ? 1 : 3;
}

}
