import {Enter,Click,Press } from '@serenity-js/web';
import { DarCitaPopupIU } from '../../userInterface/popups/DarCitaPopupUI';  

export class PacienteExistente{
                    
 static ingresarNombre(nombre:string) {return Enter.theValue(nombre).into(DarCitaPopupIU.inputNombre);}

 static ingresarComentario(apellido:string) {return Enter.theValue(apellido).into(DarCitaPopupIU.inputComentario);}

}