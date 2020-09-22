import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule,} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { DataService } from './data.service';
import { MatSliderModule } from '@angular/material/slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GenerateQuestionComponent } from './generate-question/generate-question.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatStepperModule} from '@angular/material/stepper';
import {MatListModule} from '@angular/material/list';
import {MatRadioModule} from '@angular/material/radio';
import { HomeComponent } from './home/home.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { ShowQuestionsComponent } from './show-questions/show-questions.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import { EditQuestionComponent } from './edit-question/edit-question.component';
import { ErrorComponent } from './show-questions/error/error.component';
import { SelectQuestionnaireComponent } from './select-questionnaire/select-questionnaire.component';
import { RouterModule } from '@angular/router';
import { SelectQuestionnaireToAnswerComponent } from './show-questions/select-questionnaire-to-answer/select-questionnaire-to-answer.component';
import { AddQuestionnaireComponent } from './select-questionnaire/add-questionnaire/add-questionnaire.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { UserlistComponent } from './userlist/userlist.component';


@NgModule({
  declarations: [
    AppComponent,
    GenerateQuestionComponent,
    HomeComponent,
    ShowQuestionsComponent,
    EditQuestionComponent,
    ErrorComponent,
    SelectQuestionnaireComponent,
    SelectQuestionnaireToAnswerComponent,
    AddQuestionnaireComponent,
    LoginComponent,
    RegisterComponent,
    UserlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatSliderModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatListModule,
    MatRadioModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    MatCheckboxModule,
    MatIconModule,
    MatDialogModule,
    RouterModule

  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

