import {Component, OnInit, Input} from '@angular/core';
import { DataService } from '../data.service';
import { FormGroup, FormBuilder, FormControl, FormArray } from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import { ErrorComponent } from './error/error.component';
import { ActivatedRoute } from '@angular/router';
export interface DialogData {
  msg: string
}
@Component({
  selector: 'app-show-questions',
  templateUrl: './show-questions.component.html',
  styleUrls: ['./show-questions.component.scss']
})
export class ShowQuestionsComponent implements OnInit {
  questions : Array<any>;
 
  rad={};
  i=0;
  QA =[];
  tab=[];
  @Input() name;
  id='';
  constructor(private dataService :DataService,private fb: FormBuilder,private dialog: MatDialog,public route: ActivatedRoute)  {
   }

      ngOnInit(){

        this.fetchData();

      
   }

   fetchData()
   {this.id = this.route.snapshot.paramMap.get('id');
   console.log(this.id);
   
     this.dataService.getQuestionsById(this.id).subscribe(res => {
       console.log(res);
 
   
       this.questions = res.questions;
     });
   }


   checkchange(e,a,val)
   { 
     if(this.rad[a]==undefined)
     {
         this.tab[a]=[];
     }
      if(e.checked)
      {
        this.tab[a].push(val);
      }
      else
      {
        this.tab[a]= this.tab[a].filter(m => m!=val);
      }
      if(this.tab[a]==[])
      {
        this.rad[a]=undefined;
      }
      else
      {
        this.rad[a]=this.tab[a];
      }

   }



  collect()
  {
    if(this.name==undefined)
    {
      const dialogRef = this.dialog.open(ErrorComponent, {
        width: '500px',
        data: {msg:"Please insert your name"}
       
        
      });
      return;
    }
    for(let i in this.rad)
    {
      if (this.rad[i]=="")
      {
        const dialogRef = this.dialog.open(ErrorComponent, {
          width: '500px',
          data: {msg:"Please fill in the form  "}
         
          
        });
        return;
        
      }
    }
    const newreply={
      idq:this.id,
      name:this.name,
      replies : this.rad

    }
    if(Object.keys(this.rad).length==this.questions.length)
    {
    this.dataService.postReply(newreply).subscribe();
    }
    else{
      const dialogRef = this.dialog.open(ErrorComponent, {
        width: '500px',
        data: {msg:"Please fill in the form  "}
       
        
      });
      
    }
  }



  }

