function llenar_combos(infoProspecto) {

    let claveCampana = infoProspecto.claveCampana;
    let clavePlantel = infoProspecto.clavePlantel;
    let claveNivel = infoProspecto.claveNivel;
    let claveCarrera = infoProspecto.claveCarrera;
    let claveHorario = infoProspecto.claveHorario;
    let origen = infoProspecto.origen;

    console.log("la clave campaña" + claveCampana);
    console.log("la clave plantel" + clavePlantel);
    console.log("la clave nivel" + claveNivel);
    console.log("la clave carrera" + claveCarrera);
    console.log("la clave horario" + claveHorario);
    console.log("la clave origen" + origen);


    llenarComboCampañas(claveCampana);
    llenaComboPlantel(clavePlantel);
    llenarComboNivel(clavePlantel, claveNivel);
    llenarCombosCarrera(claveCampana, clavePlantel, claveNivel, claveCarrera);
    llenarComboHorarios(claveCampana, clavePlantel, claveNivel, claveCarrera, claveHorario);
    llenarComboOrigen(origen);

}

function llenarComboCampañas(claveCampana) {
    let ruta = setBaseURL() + 'obtener/campanas/0';

    $.ajax({
        url: ruta,
        method: "GET",
        dataType: 'json',
    }).done(function (data) {
        console.log('la data optenida en campañas es');
        console.log(data);
        const campañas = data.EntCampanaDTO;
        console.log(campañas);
        let option_default = `<option value="" disabled selected>Seleciona una campaña</option>`;
        if (campañas != undefined) {
            $("#campana_info").append(option_default); //se establece la campaña por defecto
            for (let index = 0; index < campañas.length; index++) { //recorrer el array de campañas
                const element = campañas[index]; // se establece un elemento por campaña optenida
                let option = `<option value="${element.Campana}">${element.Nombre}</option>`; //se establece la opcion por campaña
                $("#campana_info").append(option); // se inserta la campaña de cada elemen  to
            }
        }
        else {
            $("#campana_info").append(option_default);
        }

        $("#campana_info option[value=" + claveCampana + "]").attr("selected", true);

    }).fail(function (e) {
        console.log("Request: " + JSON.stringify(e));
    });

}

function llenaComboPlantel(clavePlantel) {
    let ruta = setBaseURL() + 'get/planteles';

    $.ajax({
        url: ruta,
        method: "GET",
        dataType: 'json',
    }).done(function (data) {
        console.log("optenida en planteles es");
        console.log(data);
        const plateles = data;
        console.log(plateles);
        let option_default = `<option value="" disabled selected>Seleciona un plantel</option>`;
        if (plateles != undefined) {
            $("#plantel_info").append(option_default); //se establece el plantel por defecto
            for (let index = 0; index < plateles.length; index++) { //recorrer el array de planteles
                const element = plateles[index]; // se establece un elemento por plantel optenida
                let option = `<option value="${element.clave}">${element.descrip}</option>`; //se establece la opcion por campaña
                $("#plantel_info").append(option); // se inserta la platel de cada elemento
            }
        }
        else {
            $("#plantel_info").append(option_default);
        }
        $("#plantel_info option[value=" + clavePlantel + "]").attr("selected", true);

    }).fail(function (e) {
        console.log("Request: " + JSON.stringify(e));
    });
}

function llenarComboNivel(clavePlantel, claveNivel) {
    let ruta = setBaseURL() + 'get/niveles/' + clavePlantel;

    $.ajax({
        url: ruta,
        method: "GET",
        dataType: 'json',
    }).done(function (data) {
        console.log("la data obtenida para nivel es ");
        console.log(data);
        const niveles = data;
        let option_default = `<option value="" disabled selected>Seleciona un Nivel</option>`;
        if (niveles != undefined) {
            $("#nivel_info").append(option_default); //se establece la campaña por defecto
            for (let index = 0; index < niveles.length; index++) { //recorrer el array de campañas
                const element = niveles[index]; // se establece un elemento por campaña optenida
                let option = `<option value="${element.clave}">${element.descrip}</option>`; //se establece la opcion por campaña
                $("#nivel_info").append(option); // se inserta la campaña de cada elemen  to
            }
        }
        else {
            $("#nivel_info").append(option_default);
        }

        $("#nivel_info option[value=" + claveNivel + "]").attr("selected", true);

    }).fail(function (e) {
        console.log("Request: " + JSON.stringify(e));
    });
}

function llenarCombosCarrera(claveCampana, clavePlantel, claveNivel, claveCarrera) {
    let ruta = setBaseURL() + 'obtener/carreras/' + claveCampana + '/' + clavePlantel + '/' + claveNivel;

    $.ajax({
        url: ruta,
        method: "GET",
        dataType: 'json',
    }).done(function (data) {
        console.log("la data optenida para carreras es ");
        console.log(data);
        const carreras = data.Carrera;
        console.log(carreras);
        let option_default = `<option value="" disabled selected>Seleciona una Carrera</option>`;
        if (carreras != undefined) {
            $("#carrera_info").append(option_default); //se establece la campaña por defecto
            for (let index = 0; index < carreras.length; index++) { //recorrer el array de campañas
                const element = carreras[index]; // se establece un elemento por campaña optenida
                let option = `<option value="${element.clave_carrera}">${element.descrip_ofi}</option>`; //se establece la opcion por campaña
                $("#carrera_info").append(option); // se inserta la campaña de cada elemen  to
            }
        }
        else {
            $("#carrera_info").append(option_default);
        }

        $("#carrera_info option[value=" + claveCarrera + "]").attr("selected", true);

    }).fail(function (e) {
        console.log("Request: " + JSON.stringify(e));
    });
}

function llenarComboHorarios(claveCampana, clavePlantel, claveNivel, claveCarrera, claveHorario) {
    let ruta = setBaseURL() + 'obtener/horarios/' + claveCampana + '/' + clavePlantel + '/' + claveNivel + '/' + claveCarrera;

    $.ajax({
        url: ruta,
        method: "GET",
        dataType: 'json',
    }).done(function (data) {
        console.log("la data optenida en horarios");
        console.log(data);
        const horarios = data.Horarios;
        let option_default = `<option value="" disabled selected>Seleciona un Horario</option>`;
        console.log(horarios);
        if (horarios != undefined) {
            $("#horario_info").append(option_default); //se establece la campaña por defecto

            if (horarios.Clave_turno == undefined || horarios.Clave_turno == null) {
                for (let index = 0; index < horarios.length; index++) { //recorrer el array de campañas
                    const element = horarios[index]; // se establece un elemento por campaña optenida
                    let option = `<option value="${element.Horario}">${element.Descripcion}</option>`; //se establece la opcion por campaña
                    $("#horario_info").append(option); // se inserta la campaña de cada elemen  to
                }
            } else {
                let option = `<option value="${horarios.Horario}">${horarios.Descripcion}</option>`; //se establece la opcion por campaña
                $("#horario_info").append(option); // se inserta la campaña de cada elemen  to
            }
        }
        else {
            $("#horario_info").append(option_default);
        }
        $("#horario_info option[value=" + claveHorario + "]").attr("selected", true);

    }).fail(function (e) {
        console.log("Request: " + JSON.stringify(e));
    });
}

function llenarComboOrigen(origen) {
    let ruta = setBaseURL() + 'obtener/origenes';

    $.ajax({
        url: ruta,
        method: "GET",
        dataType: 'json',
    }).done(function (data) {
        console.log("la data para origenes es");
        console.log(data);
        const origenes = data.OrigenesDTO;
        console.log(origenes);
        let option_default = `<option value="" disabled selected>Seleciona un origen</option>`;
        if (origenes != undefined) {
            $("#origen_info").append(option_default); //se establece la campaña por defecto
            for (let index = 0; index < origenes.length; index++) { //recorrer el array de campañas
                const element = origenes[index]; // se establece un elemento por campaña optenida
                let option = `<option value="${element.Origen_id}">${element.Descripcion}</option>`; //se establece la opcion por campaña
                $("#origen_info").append(option); // se inserta la campaña de cada elemen  to
            }
        }
        else {
            $("#origen_info").append(option_default);
        }
        $("#origen_info option[value=" + origen + "]").attr("selected", true);

        $('#modal_carga').modal('hide');

    }).fail(function (e) {
        console.log("Request: " + JSON.stringify(e));
    });
}