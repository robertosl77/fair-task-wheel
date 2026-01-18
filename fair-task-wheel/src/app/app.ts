import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PersonasListComponent } from './features/personas/personas-list/personas-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PersonasListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  title = 'Fair Task Wheel';
}
