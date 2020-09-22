import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
@Input() username;
@Input() password;
  constructor(private dataService: DataService) { }


connect()
{
const result=
{
  userName:this.username,
  password:this.password,
  role:''
}
this.dataService.postUser(result).subscribe();
}
  ngOnInit(): void {
  }

}
