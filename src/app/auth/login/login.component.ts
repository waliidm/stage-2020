import { Token } from '@angular/compiler/src/ml_parser/lexer';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
@Input() username;
@Input() password;
  constructor(private dataService: DataService,private route:Router) { }

connect()
{
const result=
{
  userName:this.username,
  password:this.password
}
this.dataService.logUser(result).subscribe((res:any) => {
  sessionStorage.setItem("token", res.token);
}
);
}

  ngOnInit(): void {
  }

}
