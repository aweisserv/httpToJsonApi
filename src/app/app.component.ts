import { Component } from '@angular/core';
import { JsonService } from './json.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'httpClientXjson';
  desc  = 'Wait a few seconds the request in console'

constructor(public json: JsonService) {

  this.json.getJson('https://api.github.com/users/aweisserv').subscribe((res: any) => {
    console.log(res);
  });

}


}
