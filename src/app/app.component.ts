import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularfirst';
  value="湖北";
  list:any[]=['湖北','江苏','河南'];
  sex="0";
}

