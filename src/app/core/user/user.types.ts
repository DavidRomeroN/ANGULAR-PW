export interface User {
  id_usuario: string;
  user: string;
  clave: string;
  login_consecutivos: number;
  bloqueado: boolean;
  fecha_alta: Date;
  fecha_baja: Date;
}
