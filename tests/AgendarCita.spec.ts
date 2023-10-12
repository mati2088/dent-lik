import { actorCalled } from '@serenity-js/core';
import { describe,test, it, beforeEach, afterEach } from '@serenity-js/playwright-test';
import { RealizarLogin } from '../src/tareas/RealizarLogin';
import { AgendarCita } from '../src/tareas/AgendarCita';
import { Verificaciones } from '../src/Utils/Verificaciones';
import { LoginQuestions } from '../src/preguntas/LoginPagePreguntas';
import { DarCitaPreguntas } from '../src/preguntas/DarCitaPreguntas';
import { esperar } from '../src/Utils/Esperas';
import { BrowserConfiguration } from '../src/BasesSteps/BrowserConfiguration ';  

const actor = actorCalled('Usuario');
const browser = new BrowserConfiguration();

describe('Agendar una cita', () => {  //Describe=Escenarios
    beforeEach(async () => {
        await browser.iniciar();
    });

    afterEach(async () => {
        await browser.cerrar();
    });

    test('Deberia Agendar cita con paciente nuevo', async () => {
        await esperar(2);
        await Verificaciones.isPresent('Boton Login', LoginQuestions.btnLoginPresent());
        await actor.attemptsTo(
            RealizarLogin.iniciarSesion(),
            AgendarCita.agendarCita(),
            AgendarCita.crearNuevoPaciente()
        );

        await esperar(3);
        await Verificaciones.isPresent('Texto: La cita fue agendada satisfactoriamente'
              , DarCitaPreguntas.msjCitaAgendada());
    });

    test('Deberia Agendar cita con paciente existente', async () => {
      await esperar(2);
      await Verificaciones.isPresent('Boton Login', LoginQuestions.btnLoginPresent());

      await actor.attemptsTo(
          RealizarLogin.iniciarSesion(),
          AgendarCita.agendarCita(),
          AgendarCita.pacienteExistente()
      );

      await esperar(3);
      await Verificaciones.isPresent('Texto: La cita fue agendada satisfactoriamente'
            , DarCitaPreguntas.msjCitaAgendada());
  });
});

    






