import {By,PageElement} from '@serenity-js/web';

export class ConfirmarFechaPopupUI{
  static btnGuardar = PageElement.located(By.xpath("//a[@id='guardar-date-expected' and contains(text(),'Guardar')]"));         
}