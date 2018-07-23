import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'My Angular App';
  version:Number = 1.0;
  disable:Boolean = false;

  changeTitle(event) {
    console.log(event.target.value);
    this.title = event.target.value;
  }

}
