import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1 class="app-title">
      Добро пожаловать в {{ title }}!
    </h1>

    <app-list-manager></app-list-manager>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Мой To Do List ';
}
