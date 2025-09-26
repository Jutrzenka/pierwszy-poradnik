import { Component, signal } from '@angular/core';
import { NgClass, NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [NgClass, NgFor],
  template: `
    <h1>Welcome to {{ title().length == 0 ? 'Dodaj tytuł strony' : title() }}!</h1>
    <ul>
      <li *ngFor="let task of tasks; let i = index">
        <button [ngClass]="task.isActive ? 'btn-active' : 'btn-default'" (click)="toggleButton(i)">
          {{ task.title }}
        </button>
      </li>
    </ul>
  `,
  //  styles: [],
})
export class App {
  protected readonly title = signal('Pierwsza aplikacja napisana w Angularze');

  protected readonly tasks = [
    { title: 'Kliknij mnie', isActive: true },
    { title: 'Kliknij mnie 2', isActive: false },
    { title: 'Kliknij mnie 3', isActive: true },
  ];

  toggleButton(taskNumber: number): void {
    this.tasks[taskNumber].isActive = !this.tasks[taskNumber].isActive;
  }
}
