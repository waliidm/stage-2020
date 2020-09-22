import { Component, OnInit, Input, Renderer2, ViewChild, ElementRef, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { DataService } from '../data.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EditQuestionComponent } from '../edit-question/edit-question.component';
import { mongoose } from 'mongoose';
import { ErrorComponent } from '../show-questions/error/error.component';
import { Router, ActivatedRoute } from '@angular/router';
export interface DialogData {
  title: string;
  type: number;
  answer: [],
  _id: any,
  id:any
}
/**
 * @title Stepper overview
 */
@Component({
  selector: 'app-generate-question',
  templateUrl: './generate-question.component.html',
  styleUrls: ['./generate-question.component.scss']
})
export class GenerateQuestionComponent implements OnInit {
  id="";

  quest: Array<any>;
  type = 0;
  check = '';
  Form: FormGroup;
  @Input() addinput = '';
  @Input() addanswer = '';


  @ViewChild('table') table: ElementRef;
  constructor(private fb: FormBuilder, private dataService: DataService, private renderer: Renderer2, private dialog: MatDialog,private router: Router,public route: ActivatedRoute) { }

  fetchData()
  {this.id = this.route.snapshot.paramMap.get('id');
  console.log(this.id);
  
    this.dataService.getQuestionsById(this.id).subscribe(res => {
      console.log(res);

  
      this.quest = res.questions;
    });
  }

  get addForms() {
    return this.Form.get('adds') as FormArray
  }

  addlist() {
    const add = this.fb.group({
      content: [],
    })

    this.addForms.push(add);
  }

  display(elT, elTY, elA, elID): void {

    const dialogRef = this.dialog.open(EditQuestionComponent, {
      width: '500px',
      data: { title: elT, type: elTY, answer: elA, _id: elID,id:this.id }


    });
    dialogRef.afterClosed().subscribe(()=> {
      this.fetchData();
  });
  }



  submit() {
    if (this.addinput=='')
    {
      const dialogRef = this.dialog.open(ErrorComponent, {
        width: '500px',
        data: {msg:"Please insert the new question's title  "}
       
        
      });
      return;
      
    }

    if (this.type == 3) {
      const newquestion = {
        question: this.addinput,
        type: this.type,
        answer: this.addanswer
      }
      this.dataService.postQuestion(newquestion,this.id).subscribe(()=> {
        this.fetchData();
    });

    }
    else {
      let addsVal: string[] = [];
      for (let entry of this.Form.value.adds) {
        if (entry.content==null)
        {
       this.dialog.open(ErrorComponent, {
            width: '500px',
            data: {msg:"Please fill in the empty answer  "}
           
            
          });
          return;
          
        }
        addsVal.push(entry.content);
      }
      const newquestion = {
        question: this.addinput,
        type: this.type,
        answer: addsVal
      }
      this.dataService.postQuestion(newquestion,this.id).subscribe(()=> {
        this.fetchData();
    });



    }
    this.clearFormArray(this.addForms);
    this.addinput = "";
    this.type = 0;
  }

  clearFormArray = (formArray: FormArray) => {


    while (formArray.length !== 0) {
      formArray.removeAt(0)
    }
  }

  deleteQuestion(i) {
    this.addForms.removeAt(i)
  }

  deleteData(id) {
    var obj = {
      idq:id
    }
    this.dataService.deleteQuestion(this.id,obj).subscribe(()=> {
      this.fetchData();
  });
  }










  ngOnInit() {
    this.Form = this.fb.group({adds: this.fb.array([])})

    this.fetchData();
  }


}







