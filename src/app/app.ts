import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Task {
  title: string;
  isActive: boolean;
}

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  template: `
    <h1>Welcome to {{ title().length == 0 ? 'Dodaj tytuł strony' : title() }}!</h1>
    <ul>
      @for (task of tasks; track task.title) {
      <li>
        <button
          [ngClass]="task.isActive ? 'btn-active' : 'btn-default'"
          (click)="toggleButton(task)"
        >
          {{ task.title }}
        </button>
      </li>
      }
    </ul>
  `,
  //  styles: [],
})
export class App {
  protected readonly title = signal('Pierwsza aplikacja napisana w Angularze');

  protected readonly tasks: Task[] = [
    { title: 'Kliknij mnie', isActive: true },
    { title: 'Kliknij mnie 2', isActive: false },
    { title: 'Kliknij mnie 3', isActive: true },
  ];

  toggleButton(task: Task): void {
    task.isActive = !task.isActive;
  }
}
