import { Activity, Task ,actorCalled,Wait, Duration} from '@serenity-js/core';
import { ClickDarCita } from '../Actividades/AgendarCita/ClickDarCita';  
import { seleccionarDoctor } from '../Actividades/AgendarCita/SeleccionarDoctor';
import { seleccionarMotivo } from '../Actividades/AgendarCita/SeleccionarMotivo';
import { DarCita } from '../Actividades/AgendarCita/DarCita';
import { CrearNuevoPaciente } from '../Actividades/AgendarCita/CrearNuevoPaciente';
import {ConfirmarFecha} from '../Actividades/AgendarCita/ConfirmarFecha';
import { PacienteExistente } from '../Actividades/AgendarCita/PacienteExistente';
import { esperar, pressEnter, pressSpace } from '../Utils/Esperas';
export class AgendarCita {

  static agendarCita(): Activity {
    return Task.where(`#actor agenda una cita "`,    
      ClickDarCita.hacerClickEnDarCita(),
      seleccionarDoctor.clickEnDesplegable(),
      seleccionarDoctor.seleccionarDoctor(),
      seleccionarMotivo.clickEnDesplegable(),
      seleccionarMotivo.seleccionarMotivo(),
      seleccionarMotivo.clickBotonSeleccionar(),
      DarCita.seleccionarPrimerHora()
    );
  }

  static crearNuevoPaciente():Activity{
    return Task.where(`#actor crea un nuevo paciente "`,
    DarCita.seleccionarPacienteNuevo(),
    CrearNuevoPaciente.ingresarNombre("QsA"),
    CrearNuevoPaciente.ingresarApellido("AUTOsMATION"),
    CrearNuevoPaciente.ingresarNroDocumento("42334142"),
    CrearNuevoPaciente.ingresarEmail("QA_AUTOMATION@gmail.com"),
    CrearNuevoPaciente.ingresarDireccion("369"),
    CrearNuevoPaciente.seleccionarDepartamento(),
    CrearNuevoPaciente.seleccionarPrimeraOpcionar(),
    CrearNuevoPaciente.ingresarTelefono("48673291"),
    CrearNuevoPaciente.ingresarCelular("+54 2213647411"),
    CrearNuevoPaciente.ingresarNombreResponsable("QA MANUAL"),
    CrearNuevoPaciente.ingresarCelularResponsable("2213647412"),
    CrearNuevoPaciente.ingresarParentescoResponsable("NI IDEA ESTABA DORMIDO"),
    DarCita.clickBotonContinuar(),
    ConfirmarFecha.clickBotonGuardar(),
    DarCita.clickBotonContinuar(),
    )
  }

  static pacienteExistente():Activity{
    return Task.where(`#actor agenda cita con paciente existente "`,
    DarCita.seleccionarPacienteExistente(),
    PacienteExistente.ingresarNombre('Garcia Fernandez'),
    pressSpace(),
    Wait.for(Duration.ofSeconds(2)),
    pressEnter(),
    PacienteExistente.ingresarComentario('lelepancha'),
    DarCita.clickBotonContinuar(),
    )
  }


  

}
