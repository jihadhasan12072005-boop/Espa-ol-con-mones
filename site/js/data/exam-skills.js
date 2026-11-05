/* Short reading and listening items for the language examination models.
 * read:   [text, stem, options, answer, why]
 * listen: [[[speaker, line], ...], stem, options, answer, why]               */
(function (ECM) {
  'use strict';
  ECM.EXAM_SKILLS = {
    A1: {
      read: [
        ['Hola, soy Nadia. Vivo en Valencia con mi marido y mis dos hijas. Trabajo en una farmacia por las mañanas.', '¿Dónde trabaja Nadia?', ['En una farmacia.', 'En un colegio.', 'En un hospital.'], 0, '«Trabajo en una farmacia».'],
        ['AVISO: La piscina está cerrada los lunes. Horario: de martes a domingo, de 10:00 a 20:00.', '¿Qué día no abre la piscina?', ['El lunes.', 'El domingo.', 'El martes.'], 0, '«cerrada los lunes».'],
        ['Querido Omar: mañana es el cumpleaños de mamá. ¿Compras tú la tarta? Yo compro las flores. Un beso, Laila.', '¿Qué compra Laila?', ['Las flores.', 'La tarta.', 'Un libro.'], 0, '«Yo compro las flores».'],
        ['Se vende bicicleta azul, casi nueva. 80 euros. Llamar por la tarde al 612 345 678.', '¿Cuándo hay que llamar?', ['Por la tarde.', 'Por la mañana.', 'Por la noche.'], 0, '«Llamar por la tarde».'],
        ['Mi barrio es tranquilo. Hay un parque, un supermercado y una parada de autobús. No hay metro.', '¿Qué NO hay en el barrio?', ['Metro.', 'Parque.', 'Supermercado.'], 0, '«No hay metro».'],
        ['Menú del día: primero, sopa o ensalada; segundo, pollo o pescado; postre: fruta. Precio: 12 €.', '¿Cuánto cuesta el menú?', ['12 euros.', '20 euros.', '2 euros.'], 0, '«Precio: 12 €».'],
        ['Pedro se levanta a las siete, desayuna café y va al trabajo en metro. Vuelve a casa a las seis.', '¿Cómo va Pedro al trabajo?', ['En metro.', 'En coche.', 'Andando.'], 0, '«va al trabajo en metro».'],
        ['Clase de español para adultos: martes y jueves, de 18:00 a 19:30, en el centro cultural. Gratis.', '¿Cuánto cuesta la clase?', ['Es gratis.', '18 euros.', '19,30 euros.'], 0, '«Gratis».']
      ],
      listen: [
        [[['Mujer', '¿Qué hora es?'], ['Hombre', 'Son las tres y cuarto.']], '¿Qué hora es?', ['3:15', '3:45', '4:15'], 0, 'y cuarto = 15 دقيقة.'],
        [[['Camarero', '¿Qué desea?'], ['Cliente', 'Un té con leche y un bocadillo de queso, por favor.']], '¿Qué pide el cliente?', ['Té y un bocadillo.', 'Café y una tostada.', 'Agua y fruta.'], 0, 'شاي وساندويتش جبن.'],
        [[['Hombre', '¿Dónde vives?'], ['Mujer', 'Vivo en la calle Mayor, número doce, tercero izquierda.']], '¿En qué número vive la mujer?', ['12', '3', '2'], 0, 'número doce.'],
        [[['Mujer', '¿Tienes hermanos?'], ['Hombre', 'Sí, tengo dos hermanas y un hermano.']], '¿Cuántos hermanos tiene el hombre en total?', ['Tres.', 'Dos.', 'Uno.'], 0, 'أختان وأخ = 3.'],
        [[['Hombre', '¿Cuánto cuesta este pan?'], ['Mujer', 'Un euro con veinte.']], '¿Cuánto cuesta el pan?', ['1,20 €', '2,10 €', '1,02 €'], 0, 'un euro con veinte.'],
        [[['Mujer', '¿Vamos al cine el sábado?'], ['Hombre', 'El sábado trabajo. ¿El domingo?'], ['Mujer', 'Vale, el domingo.']], '¿Qué día van al cine?', ['El domingo.', 'El sábado.', 'El viernes.'], 0, 'اتفقا على الأحد.']
      ]
    },
    A2: {
      read: [
        ['El sábado pasado fuimos a Segovia. Visitamos el acueducto y comimos cochinillo. Volvimos en autobús porque el tren estaba completo.', '¿Por qué volvieron en autobús?', ['Porque el tren estaba lleno.', 'Porque es más barato.', 'Porque no había trenes.'], 0, '«el tren estaba completo».'],
        ['Hola, Marta: no puedo ir a la reunión de mañana porque tengo cita con el médico. ¿Me cuentas después lo que habéis decidido? Gracias. Javier.', '¿Qué le pide Javier a Marta?', ['Que le cuente lo que decidan.', 'Que vaya al médico con él.', 'Que cambie la reunión.'], 0, '«¿Me cuentas después…?»'],
        ['Cuando era pequeño, vivía en un pueblo de Jaén. Todos los veranos ayudaba a mi abuelo con los olivos.', '¿Qué hacía el autor en verano?', ['Ayudaba a su abuelo.', 'Iba a la playa.', 'Estudiaba inglés.'], 0, 'ayudaba (عادة في الماضي).'],
        ['Oferta de trabajo: se busca camarero/a con experiencia. Horario de tarde. Imprescindible hablar inglés. Enviar CV a empleo@barsol.es', '¿Qué es obligatorio para el trabajo?', ['Hablar inglés.', 'Trabajar por la mañana.', 'Tener coche.'], 0, '«Imprescindible hablar inglés».'],
        ['Esta semana he estado muy ocupado: he cambiado de piso y todavía no he terminado de colocar los muebles.', '¿Qué no ha terminado el autor?', ['De colocar los muebles.', 'De buscar piso.', 'De trabajar.'], 0, '«todavía no he terminado de colocar los muebles».'],
        ['Para pedir cita en el centro de salud, llame al 900 123 456 o use la aplicación. Si es urgente, vaya directamente a Urgencias.', 'Si tiene una urgencia, debe…', ['ir directamente a Urgencias.', 'llamar al 900 123 456.', 'usar la aplicación.'], 0, '«vaya directamente a Urgencias».'],
        ['Mañana hará sol en el sur, pero en el norte lloverá y las temperaturas bajarán.', '¿Qué tiempo hará en el norte?', ['Lloverá.', 'Hará sol.', 'Hará mucho calor.'], 0, 'lloverá.'],
        ['Se alquila piso de dos dormitorios, amueblado, cerca del metro. 850 € al mes, gastos de comunidad incluidos.', 'El precio incluye…', ['los gastos de comunidad.', 'la luz y el agua.', 'el aparcamiento.'], 0, '«gastos de comunidad incluidos».']
      ],
      listen: [
        [[['Mujer', '¿Qué hiciste ayer?'], ['Hombre', 'Fui al dentista por la mañana y por la tarde estuve en casa.']], '¿Qué hizo el hombre por la mañana?', ['Fue al dentista.', 'Estuvo en casa.', 'Fue al trabajo.'], 0, 'fue al dentista.'],
        [[['Hombre', 'Perdone, ¿para ir a la estación?'], ['Mujer', 'Siga todo recto y gire la segunda a la derecha.']], '¿Dónde tiene que girar?', ['La segunda a la derecha.', 'La primera a la izquierda.', 'La segunda a la izquierda.'], 0, 'la segunda a la derecha.'],
        [[['Mujer', '¿Has visto la película nueva?'], ['Hombre', 'Todavía no. La voy a ver este fin de semana.']], '¿Cuándo va a ver la película?', ['Este fin de semana.', 'Ayer.', 'Nunca.'], 0, 'este fin de semana.'],
        [[['Megafonía', 'El tren con destino Málaga saldrá con quince minutos de retraso desde la vía seis.']], '¿Desde qué vía sale el tren?', ['Seis.', 'Quince.', 'Dos.'], 0, 'la vía seis.'],
        [[['Hombre', '¿Cómo era tu casa en Siria?'], ['Mujer', 'Era grande y tenía un patio con un limonero.']], '¿Qué tenía la casa?', ['Un patio con un árbol.', 'Una piscina.', 'Un garaje.'], 0, 'patio con un limonero.'],
        [[['Mujer', 'Si llueve mañana, no vamos a la playa.'], ['Hombre', 'Vale, entonces vamos al museo.']], 'Si llueve, irán…', ['al museo.', 'a la playa.', 'al cine.'], 0, 'al museo.']
      ]
    },
    B1: {
      read: [
        ['Aunque el teletrabajo tiene ventajas, muchos empleados echan de menos el contacto con sus compañeros y dicen sentirse más aislados.', 'Según el texto, un inconveniente del teletrabajo es…', ['la sensación de aislamiento.', 'el precio del transporte.', 'el horario fijo.'], 0, 'aislados = معزولون.'],
        ['El ayuntamiento ha decidido que, a partir de enero, sea obligatorio separar los residuos orgánicos en el contenedor marrón.', 'A partir de enero…', ['habrá que separar los residuos orgánicos.', 'se eliminarán los contenedores.', 'se cobrará por la basura.'], 0, 'separar los orgánicos.'],
        ['Me alegra que hayas decidido presentarte al examen. Estoy segura de que, si sigues estudiando así, aprobarás sin problemas.', '¿Qué piensa la autora?', ['Que su amigo aprobará.', 'Que el examen es imposible.', 'Que debe dejar de estudiar.'], 0, 'estoy segura de que aprobarás.'],
        ['Busco a alguien que pueda cuidar a mi madre por las tardes. Es importante que tenga experiencia y que hable algo de árabe.', '¿Qué requisito pide el anuncio?', ['Que hable algo de árabe.', 'Que tenga coche.', 'Que trabaje por la mañana.'], 0, 'que hable algo de árabe.'],
        ['Cuando llegué al aeropuerto, el avión ya había despegado, así que tuve que comprar otro billete.', '¿Por qué compró otro billete?', ['Porque había perdido el avión.', 'Porque el billete era caro.', 'Porque el vuelo se canceló.'], 0, 'ya había despegado.'],
        ['Te recomiendo que reserves con antelación: en verano los hoteles de la costa se llenan enseguida.', 'El consejo es…', ['reservar pronto.', 'no ir en verano.', 'ir a la montaña.'], 0, 'reservar con antelación.']
      ],
      listen: [
        [[['Mujer', '¿Vendrás a la cena?'], ['Hombre', 'No creo que pueda; tengo que terminar un informe.']], '¿Irá el hombre a la cena?', ['Probablemente no.', 'Seguro que sí.', 'Llegará pronto.'], 0, 'no creo que pueda.'],
        [[['Locutor', 'Debido a la huelga de mañana, la línea 3 del metro funcionará solo al cincuenta por ciento.']], '¿Qué pasará mañana en la línea 3?', ['Habrá menos trenes.', 'Estará cerrada.', 'Será gratis.'], 0, 'al 50%.'],
        [[['Hombre', 'Me dijo que llamaría antes de las diez.'], ['Mujer', 'Pues son las once y no ha llamado.']], '¿Qué ha pasado?', ['La persona no ha llamado todavía.', 'Ha llamado a las diez.', 'Ha llamado dos veces.'], 0, 'no ha llamado.'],
        [[['Mujer', 'Si tuviera más tiempo, aprendería a tocar la guitarra.']], '¿Qué expresa la mujer?', ['Un deseo poco probable ahora.', 'Algo que ya hace.', 'Una obligación.'], 0, 'si tuviera… = افتراض.'],
        [[['Hombre', 'Cuando termine el curso, buscaré trabajo en un hotel.']], '¿Cuándo buscará trabajo?', ['Después de terminar el curso.', 'Ahora mismo.', 'Antes del curso.'], 0, 'cuando termine.']
      ]
    },
    B2: {
      read: [
        ['Pese a las campañas de concienciación, el desperdicio de alimentos sigue siendo elevado: cada hogar tira de media decenas de kilos al año.', 'El texto afirma que…', ['el problema continúa a pesar de las campañas.', 'las campañas han resuelto el problema.', 'nadie tira comida.'], 0, 'pese a = رغم.'],
        ['De haber sabido que la carretera estaba cortada, habríamos salido por la autovía.', '¿Qué significa la frase?', ['No sabían que la carretera estaba cortada.', 'Salieron por la autovía.', 'La carretera estaba abierta.'], 0, 'شرط مستحيل في الماضي.'],
        ['La medida, que entrará en vigor el próximo año, ha sido criticada por las asociaciones de consumidores, que la consideran insuficiente.', 'Las asociaciones de consumidores…', ['creen que la medida es poca cosa.', 'apoyan totalmente la medida.', 'ya aplican la medida.'], 0, 'insuficiente.'],
        ['Por mucho que insistan los vecinos, el ayuntamiento no reabrirá la biblioteca hasta que terminen las obras.', 'La biblioteca reabrirá…', ['cuando terminen las obras.', 'en cuanto insistan los vecinos.', 'nunca.'], 0, 'hasta que terminen las obras.'],
        ['Lleva tres años investigando el fenómeno y, sin embargo, reconoce que aún quedan muchas preguntas sin respuesta.', 'La investigadora…', ['admite que no lo sabe todo.', 'ha terminado la investigación.', 'empezó ayer.'], 0, 'aún quedan preguntas.']
      ],
      listen: [
        [[['Mujer', 'Me extraña que no haya contestado; suele ser muy puntual.']], '¿Qué siente la mujer?', ['Sorpresa.', 'Alegría.', 'Indiferencia.'], 0, 'me extraña = يفاجئني.'],
        [[['Hombre', 'Habrá salido ya, porque la luz de su despacho está apagada.']], '¿Qué expresa el hombre?', ['Una suposición.', 'Una orden.', 'Un deseo.'], 0, 'futuro perfecto للتخمين.'],
        [[['Locutora', 'El Gobierno ha anunciado que, a menos que mejoren los datos, mantendrá las restricciones de agua durante el verano.']], 'Las restricciones se mantendrán…', ['si los datos no mejoran.', 'en cualquier caso.', 'solo en invierno.'], 0, 'a menos que = إلا إذا.'],
        [[['Mujer', 'Aunque me lo hubieran pedido, no habría aceptado el puesto.']], '¿Aceptó el puesto?', ['No; y no lo habría aceptado de ninguna manera.', 'Sí, lo aceptó.', 'Lo pidió ella.'], 0, 'aunque + pluscuamperfecto de subjuntivo.']
      ]
    }
  };
})(window.ECM);
