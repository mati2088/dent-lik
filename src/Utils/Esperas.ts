import {Press } from '@serenity-js/web';


export async function esperar(segundos) {
                    const milisegundos = segundos * 1000; // Convierte los segundos en milisegundos
                    return new Promise(resolve => {
                      setTimeout(resolve, milisegundos);
                    });
                  }

export function pressEnter(){return Press.the('Enter')}  

export function pressSpace(){
  return Press.the('Space') 

  
}     
                  