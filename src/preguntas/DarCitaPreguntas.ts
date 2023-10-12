import { Question } from '@serenity-js/core';
import { DarCitaPopupIU } from '../userInterface/popups/DarCitaPopupUI'; 

export class DarCitaPreguntas{
 
  static msjCitaAgendada(): Question<Promise<boolean>>{return DarCitaPopupIU.mensajeCitaGuardada.isVisible();}
 
}
