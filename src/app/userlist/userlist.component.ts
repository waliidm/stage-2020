import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent implements OnInit {
  user : Array<any>;
  displayedColumns: string[] = ['userName', 'isAdmin'];

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData()
  {

    this.dataService.getUser().subscribe(res => {
      res = res.filter(obj => obj.role !== "superuser");
      this.user = res;
    });
  }

  checkchange(e,id)
  {
    if(e.checked)
    {this.dataService.updateRole(id,"admin").subscribe();}
    else
    {this.dataService.updateRole(id,"").subscribe();}
    
    
  }

}
