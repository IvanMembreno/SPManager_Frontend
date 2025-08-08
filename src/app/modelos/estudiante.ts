export interface Estudiante {
    CodigoEstudiante: string;
    Nombre: string;
    Apellido: string;
    Facultad: string;
    Carrera: string;
    Ciclo: string;
    Correo: string;
    Telefono?: string;
    IdDescripcion: number;
    IdEncargado: number;
    Detalles?: Detalle;
    Encargado: Encargado;
}

export interface Detalle {
  id: number;
}

export interface Encargado {
  id: number;
  nombre: string;
}
