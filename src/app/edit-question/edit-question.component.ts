import { Component, OnInit, Inject, Input, Renderer2 } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import { GenerateQuestionComponent, DialogData } from '../generate-question/generate-question.component';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { DataService } from '../data.service';
import { ErrorComponent } from '../show-questions/error/error.component';

@Component({
  selector: 'app-edit-question',
  templateUrl: './edit-question.component.html',
  styleUrls: ['./edit-question.component.scss']
})
export class EditQuestionComponent implements OnInit {
  @Input () addinput= this.data.title ;
  @Input () type= this.data.type ;
  FormA : FormGroup;
  @Input () addanswer=this.data.answer;
  constructor(
    public dialogRef: MatDialogRef<GenerateQuestionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,private fb: FormBuilder,private dataService: DataService,private renderer : Renderer2, private dialog: MatDialog) {

     


    }
    get addForms() {
      return this.FormA.get('adds') as FormArray
    }
     addlist()
     {
      const add = this.fb.group({ 
        content: [],
      })
    
      this.addForms.push(add);
     }

     submit()
     {
       
        if(this.type==3)
        {
         const newquestion={
           title:this.addinput,
           type :this.type , 
           answer :this.addanswer,
           idq:this.data._id,
         }
         this.dataService.updateQuestion(this.data.id,newquestion).subscribe();
        }
        
        else{   
          let addsVal: string[]=[];
          for (let entry of this.FormA.value.adds) {
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

           const newquestion={
          title:this.addinput,
          type :this.type , 
          answer :addsVal,
          idq:this.data._id,
        }
        this.dataService.updateQuestion(this.data.id,newquestion).subscribe();

        this.dialogRef.close();

        }

       }
       deleteQuestion(i)
       {
         this.addForms.removeAt(i)    }

    ngOnInit() {
      this.FormA = this.fb.group({

        adds: this.fb.array([
        
        ])
      })
      for(let i of this.data.answer)
      {
        const add = this.fb.group({ 
          content: [i],
        })
      this.addForms.push(add);
      }
    
    }

}
