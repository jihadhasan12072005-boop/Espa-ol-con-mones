/* Speaking Studio content. Conversation question: [spanish, arabic gloss, keywords (| separated, for relevance), model answer] */
(function (ECM) {
  'use strict';
  ECM.SPEAK = {
    convos: [
      { id: 'presentacion', lv: 'A1', es: 'Presentarse', ar: 'التعريف بنفسك', photo: 'plazamayor', q: [
        ['¿Cómo te llamas y de dónde eres?', 'ما اسمك ومن أين أنت؟', 'llamo|soy|de', 'Me llamo Mones y soy de Siria, de Alepo.'],
        ['¿Cuántos años tienes?', 'كم عمرك؟', 'tengo|años', 'Tengo cincuenta y ocho años.'],
        ['¿Dónde vives ahora?', 'أين تسكن الآن؟', 'vivo|en', 'Vivo en Madrid, en el barrio de Tetuán.'],
        ['¿Con quién vives?', 'مع من تسكن؟', 'vivo|con|mujer|hijos|familia', 'Vivo con mi mujer y mi hijo pequeño.'],
        ['¿Qué idiomas hablas?', 'ما اللغات التي تتكلّمها؟', 'hablo|árabe|español|inglés', 'Hablo árabe, español y un poco de inglés.'],
        ['¿Por qué estudias español?', 'لماذا تدرس الإسبانية؟', 'porque|quiero|nacionalidad|vivo', 'Estudio español porque vivo en España y quiero obtener la nacionalidad.']
      ] },
      { id: 'rutina', lv: 'A1', es: 'Mi rutina diaria', ar: 'روتيني اليومي', photo: 'cafe', q: [
        ['¿A qué hora te levantas normalmente?', 'متى تنهض عادة؟', 'levanto|las', 'Normalmente me levanto a las siete menos cuarto.'],
        ['¿Qué desayunas?', 'ماذا تفطر؟', 'desayuno|café|té|pan|tostada', 'Desayuno un té con leche y una tostada con aceite y tomate.'],
        ['¿Cómo vas al trabajo o a la ciudad?', 'كيف تذهب إلى العمل أو المدينة؟', 'voy|en|metro|autobús|coche|andando|pie', 'Voy en metro; tardo unos veinte minutos.'],
        ['¿Qué haces por la tarde?', 'ماذا تفعل بعد الظهر؟', 'por la tarde|estudio|paseo|veo|descanso', 'Por la tarde estudio español una hora y luego paseo por el parque.'],
        ['¿A qué hora cenas en tu casa?', 'في أي ساعة تتعشّون في بيتك؟', 'ceno|cenamos|las', 'Cenamos a las nueve, como los españoles.'],
        ['¿Qué haces los fines de semana?', 'ماذا تفعل في عطلة نهاية الأسبوع؟', 'fin de semana|visito|voy|salgo|descanso', 'Los fines de semana visito a mis hijos o voy al mercado con mi mujer.']
      ] },
      { id: 'pasado', lv: 'A2', es: 'Hablar del pasado', ar: 'التحدّث عن الماضي', photo: 'retiro', q: [
        ['¿Qué hiciste ayer?', 'ماذا فعلتَ أمس؟', 'fui|hice|trabajé|estuve|comí|visité', 'Ayer trabajé por la mañana y por la tarde fui al centro de salud.'],
        ['¿Qué has hecho hoy?', 'ماذا فعلتَ اليوم؟', 'he|hoy', 'Hoy me he levantado pronto, he estudiado y he hablado con mi hermano.'],
        ['¿Cuándo llegaste a España?', 'متى وصلتَ إلى إسبانيا؟', 'llegué|en|hace', 'Llegué a España en 2016, hace casi diez años.'],
        ['¿Cómo era tu ciudad cuando eras niño?', 'كيف كانت مدينتك في طفولتك؟', 'era|había|tenía|vivía', 'Mi ciudad era muy antigua y había mercados por todas partes. Era muy bonita.'],
        ['¿Qué hacías los veranos de pequeño?', 'ماذا كنتَ تفعل في الصيف وأنت صغير؟', 'iba|jugaba|pasaba|hacía', 'De pequeño iba al pueblo de mis abuelos y jugaba con mis primos todo el día.'],
        ['¿Has visitado alguna ciudad española? ¿Cuál te gustó más?', 'هل زرتَ مدينة إسبانية؟ أيّها أعجبتك أكثر؟', 'he visitado|he estado|me gustó|visité', 'Sí, he visitado Toledo y Granada. Me gustó más Granada porque la Alhambra es impresionante.']
      ] },
      { id: 'medico', lv: 'A2', es: 'En el médico', ar: 'عند الطبيب', photo: 'hospital', q: [
        ['Buenos días, ¿qué le pasa?', 'صباح الخير، ماذا بك؟', 'me duele|tengo|dolor|fiebre|tos', 'Buenos días, doctor. Me duele mucho la garganta y tengo un poco de fiebre.'],
        ['¿Desde cuándo tiene estos síntomas?', 'منذ متى عندك هذه الأعراض؟', 'desde|hace|días|ayer', 'Desde hace tres días, más o menos.'],
        ['¿Toma algún medicamento?', 'هل تتناول أي دواء؟', 'tomo|no tomo|pastilla|paracetamol', 'Sí, tomo una pastilla para la tensión cada mañana.'],
        ['¿Es alérgico a algo?', 'هل عندك حساسية من شيء؟', 'alérgico|no soy|soy', 'No, que yo sepa no soy alérgico a nada.'],
        ['Le voy a recetar un jarabe. ¿Tiene alguna pregunta?', 'سأصف لك شرابًا. هل لديك سؤال؟', 'cuántas veces|cuándo|puedo|tengo que', '¿Cuántas veces al día tengo que tomarlo? ¿Y puedo ir a trabajar?'],
        ['Si no mejora en una semana, vuelva. ¿De acuerdo?', 'إن لم تتحسّن خلال أسبوع، عُد. اتفقنا؟', 'de acuerdo|vale|gracias', 'De acuerdo, doctor. Muchas gracias. Hasta luego.']
      ] },
      { id: 'tramites', lv: 'A2', es: 'En la oficina', ar: 'في مكتب إداري', photo: 'ayuntamiento', q: [
        ['Buenos días, ¿tiene cita previa?', 'صباح الخير، هل لديك موعد مسبق؟', 'sí|tengo|cita|no', 'Sí, tengo cita a las diez y media. Aquí está el justificante.'],
        ['¿Qué trámite quiere hacer?', 'ما المعاملة التي تريد إجراءها؟', 'quiero|quería|renovar|empadronarme|pedir|solicitar', 'Quería renovar mi tarjeta de residencia.'],
        ['¿Ha traído el pasaporte y una fotografía?', 'هل أحضرت الجواز وصورة؟', 'he traído|aquí|sí|no', 'Sí, he traído el pasaporte, dos fotos y el certificado de empadronamiento.'],
        ['Falta el justificante de pago de la tasa.', 'ينقص إيصال دفع الرسوم.', 'dónde|cómo|puedo|pagar', 'Perdone, ¿dónde puedo pagar la tasa? ¿Se puede pagar en el banco o por internet?'],
        ['Puede pagarla en cualquier banco. Después vuelva aquí.', 'يمكنك دفعها في أي بنك. ثم عُد إلى هنا.', 'vale|de acuerdo|necesito|cita', 'Vale. ¿Necesito pedir una nueva cita o puedo volver hoy mismo?'],
        ['Puede volver hoy antes de las dos.', 'يمكنك العودة اليوم قبل الثانية.', 'gracias|perfecto|vuelvo', 'Perfecto, muchas gracias. Vuelvo en una hora.']
      ] },
      { id: 'opinion', lv: 'B1', es: 'Dar tu opinión', ar: 'إبداء الرأي', photo: 'congreso', q: [
        ['¿Qué te parece la vida en España?', 'ما رأيك في الحياة في إسبانيا؟', 'me parece|creo que|pienso que', 'Me parece muy tranquila y segura. Creo que la gente es abierta, aunque al principio es difícil.'],
        ['¿Crees que es difícil aprender español?', 'هل تعتقد أن تعلّم الإسبانية صعب؟', 'creo que|no creo que|difícil|fácil', 'No creo que sea muy difícil, pero los verbos requieren mucha práctica.'],
        ['¿Qué cambiarías de tu barrio?', 'ماذا كنتَ ستغيّر في حيّك؟', 'cambiaría|me gustaría|pondría|haría', 'Me gustaría que hubiera más parques y cambiaría el horario del autobús nocturno.'],
        ['¿Es mejor vivir en una ciudad grande o en un pueblo?', 'هل الأفضل العيش في مدينة كبيرة أم في قرية؟', 'mejor|depende|porque|aunque', 'Depende. En la ciudad hay más trabajo, pero en un pueblo la vida es más barata y tranquila.'],
        ['¿Qué consejo darías a alguien que acaba de llegar a España?', 'ما نصيحتك لشخص وصل للتو إلى إسبانيا؟', 'le aconsejaría|que|debería|recomiendo', 'Le aconsejaría que aprendiera el idioma desde el primer día y que se empadronara pronto.'],
        ['¿Qué esperas del futuro?', 'ماذا تتوقّع من المستقبل؟', 'espero que|ojalá|me gustaría', 'Espero que mis hijos tengan un buen trabajo y ojalá pueda conseguir pronto la nacionalidad.']
      ] },
      { id: 'hipotesis', lv: 'B2', es: 'Hipótesis y debate', ar: 'الافتراض والنقاش', photo: 'salamanca', q: [
        ['Si pudieras vivir en cualquier ciudad de España, ¿cuál elegirías y por qué?', 'لو استطعتَ العيش في أي مدينة إسبانية، أيّها تختار ولماذا؟', 'elegiría|viviría|porque|si', 'Elegiría Valencia, porque tiene mar, buen clima y no es tan cara como Madrid.'],
        ['¿Qué habrías hecho diferente al llegar a España?', 'ماذا كنتَ ستفعل بشكل مختلف عند وصولك إلى إسبانيا؟', 'habría|hubiera', 'Habría estudiado español de forma intensiva desde el principio; así habría encontrado trabajo antes.'],
        ['¿Crees que las redes sociales ayudan a los inmigrantes?', 'هل تعتقد أن وسائل التواصل تساعد المهاجرين؟', 'creo|sin embargo|por un lado|por otro', 'Por un lado, ayudan a mantener el contacto con la familia; por otro, a veces difunden bulos sobre los trámites.'],
        ['¿Qué medidas tomarías para facilitar el acceso a la vivienda?', 'ما الإجراءات التي كنتَ ستتخذها لتسهيل الحصول على السكن؟', 'tomaría|construiría|habría que|sería necesario', 'Construiría más vivienda pública y sería necesario controlar los precios en las zonas más caras.'],
        ['Aunque te ofrecieran un buen trabajo fuera de España, ¿te irías?', 'حتى لو عُرض عليك عمل جيد خارج إسبانيا، هل كنتَ ستذهب؟', 'aunque|me iría|no me iría|porque', 'Aunque me ofrecieran un buen sueldo, no me iría, porque mi familia ya ha construido su vida aquí.'],
        ['¿Qué ha significado para ti aprender español?', 'ماذا عنى لك تعلّم الإسبانية؟', 'ha significado|me ha permitido|gracias a', 'Me ha permitido entender a mis vecinos, defender mis derechos y sentirme parte de este país.']
      ] }
    ],
    sounds: [
      { id: 'p-b', t: 'P و B', ar: 'العربية ليس فيها حرف P؛ انطقه مثل B لكن **بلا اهتزاز** للحنجرة وبنفخة هواء خفيفة.', words: ['pan', 'banco', 'pagar', 'bajar', 'pera', 'beber', 'Pablo', 'papel'], sentences: ['Pablo paga el pan en la panadería.', 'Bebo un poco de agua.'] },
      { id: 'v-b', t: 'V و B', ar: 'في الإسبانية **V و B تُنطقان بالصوت نفسه** (مثل الباء). لا تنطق V مثل الفاء الإنجليزية.', words: ['vino', 'vivir', 'vaso', 'Valencia', 'nuevo', 'avión', 'verdad', 'invierno'], sentences: ['Vivo en Valencia desde el invierno.', 'Un vaso de vino tinto.'] },
      { id: 'e-i', t: 'E و I', ar: 'العربية فيها ثلاثة أصوات علّة أساسية؛ الإسبانية فيها خمسة. فرّق بين **e** (مثل «إ» المفتوحة) و**i** (مثل «ي» القصيرة): peso ≠ piso.', words: ['peso', 'piso', 'mesa', 'misa', 'tela', 'tila', 'beso', 'viso'], sentences: ['Vivo en un piso pequeño.', 'La mesa está en el salón.'] },
      { id: 'o-u', t: 'O و U', ar: 'فرّق بين **o** المفتوحة و**u** المضمومة: todo ≠ tudo، loco ≠ luco، coma ≠ cuma.', words: ['todo', 'mucho', 'como', 'cuna', 'oso', 'uso', 'polo', 'pulpo'], sentences: ['Como mucho pulpo en Galicia.', 'Todo el mundo usa el metro.'] },
      { id: 'r-rr', t: 'R و RR', ar: '**r** الواحدة (بين حرفي علّة) ضربة واحدة خفيفة. **rr** وأول الكلمة: ترددات متعددة مثل الراء العربية المشدّدة.', words: ['pero', 'perro', 'caro', 'carro', 'rojo', 'Roma', 'hora', 'tierra'], sentences: ['El perro de Ramón corre por la tierra.', 'Pero es muy caro.'] },
      { id: 'j-g', t: 'J و G (قبل e/i)', ar: '**j** و**ge/gi** تُنطق مثل **الخاء** العربية — هذا سهل عليك!', words: ['jamón', 'hijo', 'gente', 'Jorge', 'mujer', 'girar', 'ajo', 'jueves'], sentences: ['Mi hijo Jorge trabaja los jueves.', 'La gente come jamón.'] },
      { id: 'z-c', t: 'Z و C (قبل e/i) في إسبانيا', ar: 'في إسبانيا (الوسط والشمال) **z** و**ce/ci** تُنطق مثل **الثاء** العربية: gracias = «غراثياس». في الجنوب وأمريكا اللاتينية تُنطق سينًا، وكلاهما صحيح.', words: ['gracias', 'cerveza', 'cine', 'zapato', 'cocina', 'once', 'plaza', 'Barcelona'], sentences: ['Muchas gracias por la cena.', 'La plaza está cerca del cine.'] },
      { id: 'll-y-n', t: 'LL و Y و Ñ', ar: '**ll** و**y** تُنطقان غالبًا مثل الياء القوية. **ñ** مثل «نْيـ»: España = «إسبانْيا».', words: ['llamar', 'calle', 'yo', 'playa', 'España', 'niño', 'mañana', 'año'], sentences: ['Mañana voy a la playa con los niños.', 'Me llamo Mones y vivo en esta calle.'] }
    ]
  };
})(window.ECM);
