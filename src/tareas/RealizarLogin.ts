import { Activity, Task } from '@serenity-js/core';
import { iniciarSesion } from '../Actividades/iniciarSesion';

export class RealizarLogin {
 
  static iniciarSesion(): Activity {
    return Task.where(`#actor inicia sesión con usuario y contraseña valida`,    
      ...iniciarSesion.ingresarCredenciales('Soporte', 'clavesoporte'),
      iniciarSesion.hacerClickEnIniciarSesion()
    );
  }

}
