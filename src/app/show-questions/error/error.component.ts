import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ShowQuestionsComponent, DialogData} from '../show-questions.component';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})

export class ErrorComponent {

  constructor(  public dialogRef: MatDialogRef<ShowQuestionsComponent>, @Inject(MAT_DIALOG_DATA) public data: DialogData) {}




}
