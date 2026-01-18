// src/app/core/models/persona.model.ts

export interface Persona {
  /**
   * Identificador único de la persona (por ejemplo, UUID o autonumérico interno).
   * Campo solo lectura a nivel de UI; lo genera la app.
   */
  id: string;

  /**
   * Nombre de pila de la persona (por ejemplo, "Juan").
   */
  nombre: string;

  /**
   * Apellido de la persona (por ejemplo, "Pérez").
   */
  apellido: string;

  /**
   * Correo electrónico de la persona.
   * Opcional en la primera versión.
   */
  email?: string;

  /**
   * Indica si la persona participa en la partida actual.
   * Solo las personas activas entran en la ruleta y en la cola de turnos.
   */
  activo: boolean;

  /**
   * Score actual de la persona, en horas (puede ser positivo o negativo).
   * Se interpreta como ocio_real − trabajo_real.
   */
  score: number;
}
