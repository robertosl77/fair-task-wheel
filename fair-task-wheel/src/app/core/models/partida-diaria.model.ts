// src/app/core/models/partida-diaria.model.ts

/**
 * Sesión o día de juego en el que se asignan tareas mediante la ruleta.
 */
export type EstadoPartidaDiaria = 'abierta' | 'cerrada';

export interface PartidaDiaria {
  /**
   * Identificador único de la partida (UUID o autonumérico).
   */
  id: string;

  /**
   * Fecha principal asociada a la partida (día de juego).
   */
  fecha: Date;

  /**
   * Momento en que se inicia formalmente la partida.
   */
  fechaHoraInicio: Date;

  /**
   * Momento en que se da por finalizada la partida.
   * Es null mientras la partida está abierta.
   */
  fechaHoraFin: Date | null;

  /**
   * Estado de la partida: abierta (en curso) o cerrada (histórica).
   */
  estado: EstadoPartidaDiaria;

  /**
   * Lista de ids de Persona que participaron en esta partida.
   */
  personasParticipantesIds: string[];

  /**
   * Descripción breve de las reglas/configuración usadas en esta sesión.
   */
  reglasAplicadasDescripcion?: string;
}
