import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { from, throwError, Observable } from 'rxjs';
import {questionSchema} from 'server/models/question.js'
import {replySchema} from 'server/models/reply.js'
import { Title } from '@angular/platform-browser';
import {usersSchema} from 'server/models/user.js'
@Injectable()
export class DataService {


  result:any;
  data :any;

  constructor(private http: HttpClient) { }


  getQuestions(): Observable<questionSchema>  {
    return this.http.get<questionSchema>("http://localhost:3000/questions").pipe(map(result => this.result = result.data));
  
  }
  getQuestionsById(_id): Observable<questionSchema>  {
    return this.http.get<questionSchema>(`http://localhost:3000/questions/${_id}`).pipe(map(result => this.result = result.data));
  
  }
  postQuestion(newquestion,_id): Observable<questionSchema> {
    return this.http.put<questionSchema>(`http://localhost:3000/questions/post/${_id}`,newquestion)
  
  }

  deleteQuestion(_id,idq){
    console.log(idq);
    
    return this.http.put(`http://localhost:3000/questions/${_id}/delete`,idq)
  
  }
  updateQuestion(_id,updatedquestion): Observable<questionSchema> {
    console.log(_id);
    console.log(updatedquestion.idq);
    
    return this.http.put<questionSchema>(`http://localhost:3000/questions/replace/${_id}`,updatedquestion)
  
  }

  

  postReply(newreply): Observable<replySchema> {
    return this.http.post<replySchema>("http://localhost:3000/replies",newreply)
  
  }

  addQuestionnaire(title) {
    console.log(title);
    const quest = {
      title:title
    }
    
    return this.http.post("http://localhost:3000/questions/post",quest)
  }

  
  removeQuestionnaire(_id)   {  
    return this.http.delete(`http://localhost:3000/questions/delete/${_id}`)
  }

  postUser(newreply){    
    return this.http.post("http://localhost:3000/users/postUsers",newreply)
  
  }
  logUser(newreply)
  {
    console.log(newreply);
    
    return this.http.post("http://localhost:3000/users/login",newreply)
  }

  getUser(): Observable<usersSchema>
  {
    return this.http.get<usersSchema>("http://localhost:3000/users").pipe(map(res => this.result = res.data));

  }
  updateRole(_id,role): Observable<usersSchema>{    
    var newrole={
      role:role
    }
    
    return this.http.put<usersSchema>(`http://localhost:3000/users/${_id}`,newrole)
  
  }
}
      