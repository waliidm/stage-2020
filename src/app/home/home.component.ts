import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoginComponent } from '../auth/login/login.component';
import { RegisterComponent } from '../auth/register/register.component';
import jwt_decode from "jwt-decode";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
admin= false;
superuser=false;
show=true;
userlogged=false;
  constructor(private dialog: MatDialog,route:Router) { }

  login()
  {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '500px'
    });
    dialogRef.afterClosed().subscribe(()=>{ 
      location.reload();
      
});
  }

  register() :void
  {
    const dialogRef = this.dialog.open(RegisterComponent, {
      width: '500px'
    });

  }

  logged()
  {
    if(sessionStorage.getItem('token')!=undefined)
    {
      var cryptedToken = sessionStorage.getItem('token');
      var token=jwt_decode(cryptedToken);
      this.admin=token.data.role=="admin";
      this.superuser=token.data.role=="superuser";
      this.show=false;
    } 
  }

  logout()
  {
    sessionStorage.removeItem('token');
    location.reload();
  }
  ngOnInit(): void {
    this.logged();

  }

}
