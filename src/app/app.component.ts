import { Component, Input } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { DataService } from './data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mean';

    constructor(private dataService: DataService) { }

}
