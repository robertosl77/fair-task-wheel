import { Component, inject } from '@angular/core';
import { NgFor } from '@angular/common';
import { PersonasService } from '../../../core/services/personas/personas.service';
import { Persona } from '../../../core/models/persona.model';

@Component({
  selector: 'app-personas-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './personas-list.component.html',
})
export class PersonasListComponent {
  private personasService = inject(PersonasService);

  personas: Persona[] = this.personasService.getPersonas();
}
