import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GenerateQuestionComponent } from './generate-question/generate-question.component';
import {HomeComponent} from './home/home.component';
import { ShowQuestionsComponent } from './show-questions/show-questions.component';
import { SelectQuestionnaireComponent } from './select-questionnaire/select-questionnaire.component';
import { SelectQuestionnaireToAnswerComponent } from './show-questions/select-questionnaire-to-answer/select-questionnaire-to-answer.component';
import { UserlistComponent } from './userlist/userlist.component';
import { RouteGuardService } from './route-guard.service';
import { SuperRouteGuardService } from './super-route-guard.service';
const routes: Routes = [{
  path:'select',
  canActivate : [RouteGuardService],
  component: SelectQuestionnaireComponent
  
  
  },
  {
    path:'user',
    canActivate : [SuperRouteGuardService],
  component: UserlistComponent
  
  
  },
  {
  path:'create/:id',
  canActivate : [RouteGuardService],
  component: GenerateQuestionComponent
  
  
  },
{
  path:'',
  component:HomeComponent
},
{
  path:'show',
  component:SelectQuestionnaireToAnswerComponent
},
{
  path:'show/:id',
  component:ShowQuestionsComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
