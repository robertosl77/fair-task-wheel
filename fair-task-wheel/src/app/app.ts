import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { PersonasListComponent } from './features/personas/personas-list/personas-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, PersonasListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  title = 'Fair Task Wheel';
}
