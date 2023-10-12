import {Click} from '@serenity-js/web';
import { ConfirmarFechaPopupUI } from '../../userInterface/popups/ConfirmarFechaPopupUI';

export class ConfirmarFecha{
                    
static clickBotonGuardar() {return Click.on(ConfirmarFechaPopupUI.btnGuardar);}

}