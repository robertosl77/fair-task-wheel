// src/app/core/models/tarea-diaria.model.ts

/**
 * Definición (plantilla) de una tarea repetible del sistema.
 * No guarda datos de ejecución concreta.
 */
export interface TareaDiaria {
  /**
   * Identificador único de la tarea (UUID o autonumérico).
   */
  id: string;

  /**
   * Nombre corto de la tarea (por ejemplo, "Limpieza de cocina").
   */
  nombre: string;

  /**
   * Descripción opcional de la tarea.
   */
  descripcion?: string;

  /**
   * Tiempo estimado de la tarea en horas.
   * Admite decimales (ej: 0.5 = 30 minutos).
   */
  tiempoEstimadoHoras: number;

  /**
   * Tipo de tarea: trabajo (responsabilidad) u ocio (descanso).
   */
  tipoTarea: 'trabajo' | 'ocio';

  /**
   * Indica si la definición está disponible para nuevas partidas.
   */
  estaActiva: boolean;
}
