import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend';
  authDone: boolean = false;
  @Input() @Output() username: string = '';

  public setAuthDone($event: any) {
    this.authDone = $event;
  }

  setUsername($event: any) {
    this.username = $event;
  }
}
