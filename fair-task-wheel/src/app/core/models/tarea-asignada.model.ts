// src/app/core/models/tarea-asignada.model.ts

/**
 * Ejecución concreta de una TareaDiaria por una Persona en una PartidaDiaria.
 */
export type EstadoTareaAsignada =
  | 'disponible'
  | 'reservada'
  | 'asignada'
  | 'bloqueada'
  | 'finalizada'
  | 'cancelada'
  | 'incumplida';

export interface TareaAsignada {
  /**
   * Identificador único de la instancia de tarea.
   */
  id: string;

  /**
   * Referencia a la plantilla de tarea (TareaDiaria).
   */
  tareaId: string;

  /**
   * Persona responsable de ejecutar esta instancia.
   */
  personaId: string;

  /**
   * PartidaDiaria en la que se asignó la tarea.
   */
  partidaId: string;

  /**
   * Estado de la instancia dentro del ciclo de vida.
   */
  estado: EstadoTareaAsignada;

  /**
   * Momento en que se asignó la tarea (por ruleta o manualmente).
   */
  fechaHoraAsignacion: Date;

  /**
   * Momento en que la persona marcó la tarea como cerrada
   * (finalizada, cancelada o incumplida).
   */
  fechaHoraCheck: Date | null;

  /**
   * Tiempo estimado copiado desde TareaDiaria en el momento de asignar.
   */
  tiempoEstimadoHoras: number;

  /**
   * Tiempo real en horas entre asignación y check (o registrado manualmente).
   */
  tiempoRealHoras: number | null;

  /**
   * Indica si esta ejecución impacta en el cálculo de score.
   */
  afectaScore: boolean;
}
