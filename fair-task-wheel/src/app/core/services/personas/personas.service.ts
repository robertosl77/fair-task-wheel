// src/app/core/services/personas.service.ts

import { Injectable } from '@angular/core';
import { Persona } from '../../models/persona.model';

@Injectable({
  providedIn: 'root',
})
export class PersonasService {
  // Datos en memoria por ahora
  private personas: Persona[] = [
    {
      id: '1',
      nombre: 'Juan',
      apellido: 'Pérez',
      email: 'juan@example.com',
      activo: true,
      score: 0,
    },
    {
      id: '2',
      nombre: 'Ana',
      apellido: 'García',
      email: 'ana@example.com',
      activo: true,
      score: -1.5,
    },
  ];

  getPersonas(): Persona[] {
    return this.personas;
  }
}
