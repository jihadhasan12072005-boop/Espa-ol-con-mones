/* DELE A1 Academy — exam structure and two complete ORIGINAL practice simulations (not official exam items).
 * Row format for questions: [stem, options, index of the correct option, Arabic explanation].
 * Tasks with `multi` have one short text/recording per question; tasks with `fixed` are matching tasks whose
 * options (A, B, C…) keep their order. Official tasks that use pictures are adapted here to text options. */
(function (ECM) {
  'use strict';

  var ADS_A = ['A. Piso en alquiler', 'B. Restaurante El Puerto', 'C. Academia Habla', 'D. Gimnasio Forma', 'E. Cine Avenida', 'F. Tienda Moda Joven', 'G. Se busca camarero', 'H. Farmacia San Pablo'];
  var ADS_B = ['A. Hotel Mar Azul', 'B. Clases de guitarra', 'C. Librería Cervantes', 'D. Taxi 24 horas', 'E. Peluquería Carmen', 'F. Mercado Central', 'G. Escuela infantil Los Peques', 'H. Taller García'];

  ECM.DELE_A1 = {
    spec: {
      photo: 'plazamayor',
      intro: 'امتحان المستوى الأول من شهادات معهد ثربانتس. ليس كافيًا للجنسية (المطلوب A2)، لكنه خطوة أولى ممتازة: نفس شكل الامتحان ونفس طريقة التصحيح بمستوى أسهل. هنا تتعلّم شكله وتتدرّب على كل قسم وتجري محاكاة كاملة.',
      simsNote: 'كل نموذج: 25 سؤال قراءة + 25 سؤال استماع + مهمتا كتابة (استمارة ونص قصير) + 4 مهام محادثة.',
      note: '',
      honest: 'الأسئلة هنا **أصلية للتدريب** وليست أسئلة امتحان رسمية. مدة كل قسم مأخوذة من جدول بنية امتحانات DELE (2020)؛ عدد المهام والأسئلة في كل قسم وفق شكل الامتحان كما نعرفه، فتأكّد من الدليل الرسمي على examenes.cervantes.es. في الامتحان الحقيقي تعتمد بعض المهام على **صور** (اختيار الصورة المناسبة)؛ هنا حوّلناها إلى خيارات مكتوبة. الاستماع بصوت الجهاز (TTS) لا بتسجيلات حقيقية. الكتابة والمحادثة يقيّمهما في الامتحان ممتحِنون معتمدون؛ التطبيق يقدّم مراجعة آلية مساعدة وتقييمًا ذاتيًا فقط.',
      oralNote: '',
      passNote: ''
    },
    parts: [
      { id: 'lectura', es: 'Comprensión de lectura', ar: 'فهم المقروء', min: 45, items: 25, tareas: 4, group: 1, photo: 'salamanca',
        desc: 'تقرأ نصوصًا قصيرة جدًا وبسيطة: رسالة شخصية، ملاحظات ولافتات، إعلانات، وبرنامج أو جدول، وتجيب عن 25 سؤالًا في 4 مهام.',
        tips: ['اقرأ السؤال أولًا ثم ابحث عن الجواب في النص: لا تحتاج أن تفهم كل كلمة.', 'انتبه للأيام والساعات والأسعار: أغلب الأسئلة عنها.', 'في مهمة الإعلانات اقرأ جملة الشخص وابحث عن **الكلمة المفتاحية** ([[trabajo, piso, medicamento…]]).', 'الكلمات الصغيرة تغيّر المعنى: [[no, solo, cerrado, gratis, incluido]].', 'أجب عن كل الأسئلة: لا خصم على الخطأ.'] },
      { id: 'auditiva', es: 'Comprensión auditiva', ar: 'فهم المسموع', min: 20, items: 25, tareas: 4, group: 2, photo: 'metro',
        desc: 'تستمع إلى حوارات قصيرة جدًا، ورسائل وإعلانات، وشخص يتكلّم عن أشخاص آخرين، وحوار أطول قليلًا، وتجيب عن 25 سؤالًا.',
        tips: ['اقرأ الأسئلة والخيارات قبل أن يبدأ التسجيل.', 'ركّز على الأرقام: الساعة، السعر، العمر، رقم الهاتف.', 'في الاستماع الأول افهم الموضوع، وفي الثاني تأكّد من الجواب.', 'إذا غيّر المتكلّم رأيه ([[No, mejor el sábado]]) فالجواب هو آخر ما قاله.', 'في هذا التطبيق الصوت آلي (TTS) وأبطأ قليلًا من المتحدثين الحقيقيين.'] },
      { id: 'escrita', es: 'Expresión e interacción escritas', ar: 'التعبير والتفاعل الكتابي', min: 25, items: 2, tareas: 2, group: 1, photo: 'cafe',
        desc: 'مهمتان: الأولى ملء **استمارة** ببياناتك الشخصية مع جواب قصير، والثانية كتابة **نص قصير** (رسالة، بطاقة، ملاحظة) من 30 إلى 40 كلمة.',
        tips: ['في الاستمارة لا تترك أي خانة فارغة.', 'اكتب الجنسية كصفة: [[sirio / siria]]، والتاريخ هكذا: [[12/07/1965]].', 'في النص القصير غطِّ **كل** النقاط المطلوبة، كل نقطة بجملة.', 'ابدأ بتحية واختم بوداع: [[Hola, … / Un abrazo]].', 'جمل قصيرة صحيحة أفضل من جمل طويلة فيها أخطاء.'] },
      { id: 'oral', es: 'Expresión e interacción orales', ar: 'التعبير والتفاعل الشفهي', min: 10, prep: 10, items: 4, tareas: 4, group: 2, photo: 'plazamayor',
        desc: 'بعد 10 دقائق تحضير، تتكلّم مع الممتحِن نحو 10 دقائق: تقدّم نفسك، تتكلّم عن موضوع بسيط من حياتك، تجيب عن أسئلته، ثم تمثّل حوارات قصيرة في مواقف يومية (في محل، عند شبّاك…).',
        tips: ['في الحوارات اطلب بأدب: [[Quería…, por favor]] واسأل عن السعر: [[¿Cuánto cuesta?]]', 'حضّر تقديم نفسك جيدًا واحفظه: الاسم، العمر، البلد، السكن، العمل، العائلة، اللغات.', 'في التحضير اكتب **كلمات** لا جملًا.', 'إذا لم تفهم السؤال: [[¿Puede repetir, por favor?]] أو [[Más despacio, por favor]].', 'أجب بجملة كاملة لا بكلمة واحدة: [[Vivo en Madrid con mi familia]].', 'تكلّم ببطء ووضوح؛ لا أحد ينتظر منك السرعة في A1.'] }
    ],
    sims: [
      {
        id: 'A1a', title: 'النموذج التدريبي 1', theme: 'حياتي في إسبانيا',
        lectura: [
          { tarea: 1, instr: 'Lea el correo de Samir a su amigo Karim y conteste a las preguntas.', ar: 'المهمة 1: اقرأ الرسالة وأجب (5 أسئلة).',
            text: '¡Hola, Karim!\n¿Qué tal? Yo estoy muy bien. Ahora vivo en Zaragoza con mi mujer y mis dos hijos. Nuestro piso es pequeño, pero está cerca del centro.\nTrabajo en un restaurante de lunes a viernes, de nueve a cinco. Los sábados por la mañana voy a clase de español con mi mujer. La profesora se llama Elena y es muy simpática.\nLos domingos no trabajo. Normalmente vamos al parque con los niños y por la tarde vemos una película en casa.\n¿Y tú? ¿Cuándo vienes a España? En agosto tengo vacaciones.\nUn abrazo,\nSamir',
            q: [
              ['Samir escribe a…', ['un amigo.', 'su profesora.', 'su jefe.'], 0, 'يبدأ بـ «¡Hola, Karim!» ويختم بـ «Un abrazo»: رسالة إلى صديق.'],
              ['Samir vive…', ['solo.', 'con su familia.', 'con un amigo.'], 1, '«vivo… con mi mujer y mis dos hijos» = مع زوجته وولديه.'],
              ['Samir trabaja…', ['todos los días.', 'los fines de semana.', 'de lunes a viernes.'], 2, '«de lunes a viernes, de nueve a cinco».'],
              ['Los sábados Samir…', ['va al parque.', 'estudia español.', 'trabaja en el restaurante.'], 1, '«Los sábados por la mañana voy a clase de español».'],
              ['Samir tiene vacaciones…', ['en agosto.', 'en diciembre.', 'los domingos.'], 0, '«En agosto tengo vacaciones».']
            ] },
          { tarea: 2, instr: 'Lea estos mensajes y carteles. Conteste a la pregunta de cada uno.', ar: 'المهمة 2: ملاحظات ولافتات قصيرة (6 أسئلة).', multi: true,
            blocks: [
              { text: 'Ana:\nHoy llego tarde a casa. La cena está en la nevera.\nBesos, mamá', q: ['La madre de Ana…', ['prepara la cena con Ana.', 'llega tarde a casa.', 'está en casa toda la tarde.'], 1, '«Hoy llego tarde a casa» = اليوم أتأخّر.'] },
              { text: 'PANADERÍA LA ESPIGA\nAbierto de lunes a sábado, de 7:00 a 14:00.\nDomingos, cerrado.', q: ['La panadería…', ['abre por la tarde.', 'cierra los domingos.', 'abre todos los días.'], 1, '«Domingos, cerrado» = مغلق أيام الأحد.'] },
              { text: 'SE VENDE bicicleta casi nueva. 80 euros.\nLlamar por la tarde: 612 345 678 (Pedro).', q: ['Pedro…', ['quiere comprar una bicicleta.', 'vende una bicicleta.', 'busca una bicicleta nueva.'], 1, '«Se vende» = للبيع. بيدرو هو البائع.'] },
              { text: 'CENTRO DE SALUD\nPara pedir cita, llame al 976 11 22 33 o use la página web.', q: ['Para ver al médico, primero hay que…', ['pedir cita.', 'pagar.', 'ir al hospital.'], 0, '«Para pedir cita, llame…» = يجب طلب موعد أولًا.'] },
              { text: 'CLASE DE ESPAÑOL\nMañana no hay clase. La profesora está enferma.\nVolvemos el jueves.', q: ['Mañana los estudiantes…', ['tienen un examen.', 'no tienen clase.', 'tienen una profesora nueva.'], 1, '«Mañana no hay clase» = لا درس غدًا.'] },
              { text: 'SUPERMERCADO DÍA\nOferta de esta semana: 2 litros de leche por 1,50 €.', q: ['Esta semana…', ['la leche es gratis.', 'la leche está más barata.', 'no hay leche.'], 1, '«Oferta» = عرض، أي السعر أرخص.'] }
            ] },
          { tarea: 3, fixed: true, instr: 'Lea los anuncios (A–H) y relacione cada persona con el anuncio que necesita. Hay dos anuncios que no debe elegir.', ar: 'المهمة 3: اربط كل شخص بالإعلان المناسب (6 أسئلة، وإعلانان زائدان).',
            text: 'A. PISO EN ALQUILER. Dos habitaciones, cerca del metro. 600 € al mes.\nB. RESTAURANTE EL PUERTO. Pescado fresco y paella. Menú del día: 12 €. Cerrado los lunes.\nC. ACADEMIA HABLA. Cursos de español para extranjeros. Mañana o tarde. Grupos pequeños.\nD. GIMNASIO FORMA. Abierto todos los días de 7:00 a 23:00. Piscina y clases de yoga.\nE. CINE AVENIDA. Películas para niños los sábados y domingos a las 12:00. Entrada: 4 €.\nF. TIENDA MODA JOVEN. Camisetas, pantalones y zapatos. Rebajas: todo al 50 %.\nG. SE BUSCA CAMARERO para bar en el centro. Horario de tarde. Tel. 644 555 666.\nH. FARMACIA SAN PABLO. Abierta 24 horas, todos los días del año.',
            q: [
              ['«Necesito un trabajo. Tengo experiencia en bares.»', ADS_A, 6, '«Se busca camarero» = مطلوب نادل: إعلان عمل في مقهى.'],
              ['«Quiero aprender español. Solo puedo estudiar por la tarde.»', ADS_A, 2, 'الأكاديمية تقدّم دروس إسبانية «mañana o tarde».'],
              ['«Busco un piso para vivir con mi mujer.»', ADS_A, 0, '«Piso en alquiler» = شقة للإيجار.'],
              ['«Es domingo por la noche y necesito un medicamento.»', ADS_A, 7, 'الصيدلية مفتوحة 24 ساعة كل الأيام.'],
              ['«Quiero hacer deporte muy temprano, antes de ir al trabajo.»', ADS_A, 3, 'النادي الرياضي يفتح من السابعة صباحًا.'],
              ['«Mis hijos quieren ver una película este fin de semana.»', ADS_A, 4, 'السينما تعرض أفلام أطفال يومي السبت والأحد.']
            ] },
          { tarea: 4, instr: 'Lea el programa del centro cultural y complete las frases.', ar: 'المهمة 4: اقرأ البرنامج وأكمل الجمل (8 أسئلة).',
            text: 'CENTRO CULTURAL DEL BARRIO — ACTIVIDADES DE OCTUBRE\n\nClases de cocina española: martes y jueves, de 18:00 a 20:00. Precio: 20 € al mes. Profesor: Antonio.\nClub de lectura: primer lunes del mes, a las 19:00, en la biblioteca. Gratis.\nExcursión a Toledo: sábado 14. Salida en autobús a las 8:30 desde la plaza. Precio: 15 € (comida no incluida).\nCine en español: todos los viernes a las 20:00. Entrada: 2 €.\nBaile para mayores de 60 años: miércoles por la mañana, de 10:00 a 11:30. Gratis.\n\nInformación e inscripciones: de lunes a viernes, de 9:00 a 14:00, en la oficina o en el teléfono 976 44 55 66.',
            q: [
              ['Las clases de cocina son…', ['dos días a la semana.', 'todos los días.', 'los fines de semana.'], 0, '«martes y jueves» = يومان في الأسبوع.'],
              ['Las clases de cocina cuestan…', ['2 euros.', '15 euros.', '20 euros al mes.'], 2, '«Precio: 20 € al mes».'],
              ['El club de lectura es…', ['en la plaza.', 'en la biblioteca.', 'en la oficina.'], 1, '«en la biblioteca».'],
              ['A Toledo van…', ['en tren.', 'en autobús.', 'en coche.'], 1, '«Salida en autobús».'],
              ['En la excursión, la comida…', ['está incluida.', 'no está incluida.', 'cuesta 15 euros.'], 1, '«comida no incluida» = الطعام غير مشمول.'],
              ['El cine en español es…', ['los viernes.', 'los lunes.', 'los miércoles.'], 0, '«todos los viernes a las 20:00».'],
              ['El baile es para…', ['niños.', 'personas mayores.', 'estudiantes de español.'], 1, '«para mayores de 60 años» = لمن فوق الستين.'],
              ['La oficina abre…', ['por la mañana.', 'por la tarde.', 'los sábados.'], 0, '«de 9:00 a 14:00» = في الصباح.']
            ] }
        ],
        auditiva: [
          { tarea: 1, instr: 'Va a escuchar cinco diálogos breves. Conteste a la pregunta de cada uno.', ar: 'المهمة 1: خمسة حوارات قصيرة (5 أسئلة).', multi: true,
            blocks: [
              { lines: [['Camarero', 'Hola, ¿qué desea?'], ['Mujer', 'Un café con leche y una tostada, por favor.'], ['Camarero', '¿Algo más?'], ['Mujer', 'No, gracias.']], q: ['¿Qué pide la mujer?', ['Un té con limón.', 'Un café con leche y una tostada.', 'Un zumo de naranja.'], 1, 'تطلب «un café con leche y una tostada».'] },
              { lines: [['Mujer', 'Perdone, ¿dónde está la farmacia?'], ['Hombre', 'Está muy cerca. La segunda calle a la derecha, al lado del banco.']], q: ['¿Dónde está la farmacia?', ['Al lado del banco.', 'Enfrente del hospital.', 'Detrás del supermercado.'], 0, '«al lado del banco» = بجانب البنك.'] },
              { lines: [['Hombre', '¿A qué hora sale el tren a Madrid?'], ['Mujer', 'A las diez y media.'], ['Hombre', '¿Y cuánto cuesta el billete?'], ['Mujer', 'Veinticinco euros.']], q: ['¿Cuánto cuesta el billete?', ['Diez euros.', 'Veinticinco euros.', 'Treinta euros.'], 1, '«Veinticinco euros» = 25 يورو. (العشرة والنصف هي الساعة.)'] },
              { lines: [['Mujer', '¿Qué haces los domingos?'], ['Hombre', 'Por la mañana juego al fútbol con mis amigos y por la tarde descanso en casa.']], q: ['¿Qué hace el hombre el domingo por la mañana?', ['Juega al fútbol.', 'Descansa en casa.', 'Trabaja.'], 0, 'في الصباح يلعب كرة القدم؛ الراحة في المساء.'] },
              { lines: [['Hombre', '¿Cómo es tu hermana?'], ['Mujer', 'Es alta, tiene el pelo largo y negro, y lleva gafas.']], q: ['¿Cómo es la hermana?', ['Baja y rubia.', 'Alta, con el pelo negro y gafas.', 'Alta, con el pelo corto.'], 1, '«alta… pelo largo y negro… lleva gafas».'] }
            ] },
          { tarea: 2, instr: 'Va a escuchar cinco mensajes. Conteste a la pregunta de cada uno.', ar: 'المهمة 2: خمس رسائل وإعلانات (5 أسئلة).', multi: true,
            blocks: [
              { lines: [['Megafonía', 'Atención, por favor. El tren con destino Barcelona sale de la vía número tres.']], q: ['¿Dónde se oye este mensaje?', ['En una estación.', 'En un supermercado.', 'En un colegio.'], 0, 'يتكلّم عن قطار ورصيف: محطة.'] },
              { lines: [['Megafonía', 'Señores clientes: hoy, las naranjas a un euro el kilo en la sección de fruta.']], q: ['¿Qué está en oferta hoy?', ['La leche.', 'Las naranjas.', 'El pan.'], 1, '«las naranjas a un euro el kilo».'] },
              { lines: [['Contestador', 'Hola, soy María. Ahora no estoy en casa. Deja tu mensaje después de la señal. Gracias.']], q: ['María…', ['no está en casa.', 'está en el trabajo.', 'llama más tarde.'], 0, '«Ahora no estoy en casa».'] },
              { lines: [['Radio', 'Buenos días. Hoy en Madrid hace sol y calor. La temperatura es de treinta grados.']], q: ['¿Qué tiempo hace hoy en Madrid?', ['Llueve.', 'Hace frío.', 'Hace sol y calor.'], 2, '«hace sol y calor».'] },
              { lines: [['Megafonía', 'El museo cierra en diez minutos. Por favor, vayan a la salida. Gracias por su visita.']], q: ['¿Qué tienen que hacer las personas?', ['Comprar una entrada.', 'Salir del museo.', 'Esperar diez minutos.'], 1, '«vayan a la salida» = اذهبوا إلى المخرج.'] }
            ] },
          { tarea: 3, instr: 'Va a escuchar a Lucía hablar de su familia. Conteste a las preguntas.', ar: 'المهمة 3: لوسيا تتكلّم عن عائلتها (8 أسئلة).',
            lines: [['Lucía', 'Hola, me llamo Lucía y voy a hablar de mi familia.'], ['Lucía', 'Mi padre se llama Antonio. Es médico y trabaja en un hospital.'], ['Lucía', 'Mi madre, Carmen, es profesora de música. Toca el piano muy bien.'], ['Lucía', 'Mi hermano mayor, Pablo, vive en Alemania. Trabaja en una empresa de coches.'], ['Lucía', 'Mi hermana Marta tiene veinte años y estudia en la universidad.'], ['Lucía', 'Mi abuelo Juan tiene ochenta años. Le gusta mucho leer el periódico.'], ['Lucía', 'Mi abuela Rosa cocina muy bien. Su paella es fantástica.'], ['Lucía', 'Mi tío Luis tiene un restaurante en Valencia.'], ['Lucía', 'Y mi prima Sara tiene ocho años. Le gustan mucho los animales y tiene dos gatos.']],
            q: [
              ['Antonio…', ['es médico.', 'es profesor.', 'trabaja en un restaurante.'], 0, '«Es médico y trabaja en un hospital».'],
              ['Carmen…', ['canta en un hospital.', 'toca el piano.', 'estudia en la universidad.'], 1, '«Toca el piano muy bien».'],
              ['Pablo…', ['vive en Valencia.', 'vive en otro país.', 'vive con sus padres.'], 1, '«vive en Alemania» = يعيش في بلد آخر.'],
              ['Marta…', ['es estudiante.', 'tiene ocho años.', 'trabaja en una empresa.'], 0, '«estudia en la universidad».'],
              ['Juan…', ['lee el periódico.', 'cocina paella.', 'tiene veinte años.'], 0, '«Le gusta mucho leer el periódico».'],
              ['Rosa…', ['tiene un restaurante.', 'cocina muy bien.', 'es profesora de música.'], 1, '«cocina muy bien».'],
              ['Luis…', ['tiene un restaurante.', 'es médico.', 'vive en Alemania.'], 0, '«tiene un restaurante en Valencia».'],
              ['Sara…', ['tiene dos perros.', 'tiene dos gatos.', 'no tiene animales.'], 1, '«tiene dos gatos».']
            ] },
          { tarea: 4, instr: 'Va a escuchar una conversación en una academia de español. Complete las frases.', ar: 'المهمة 4: حوار في أكاديمية؛ أكمل الجمل (7 أسئلة).',
            lines: [['Secretaria', 'Buenos días. ¿En qué puedo ayudarle?'], ['Omar', 'Buenos días. Quiero hacer un curso de español.'], ['Secretaria', 'Muy bien. ¿Cómo se llama?'], ['Omar', 'Me llamo Omar Haddad.'], ['Secretaria', '¿De dónde es usted?'], ['Omar', 'Soy de Siria, pero vivo en Zaragoza desde hace un año.'], ['Secretaria', '¿Prefiere las clases por la mañana o por la tarde?'], ['Omar', 'Por la tarde, porque por la mañana trabajo en una panadería.'], ['Secretaria', 'Tenemos un curso los lunes y miércoles, de seis a ocho.'], ['Omar', 'Perfecto. ¿Cuánto cuesta?'], ['Secretaria', 'Sesenta euros al mes. El curso empieza el día cinco de octubre.'], ['Omar', 'Muy bien. ¿Puedo pagar con tarjeta?'], ['Secretaria', 'Sí, claro.']],
            q: [
              ['El hombre quiere…', ['un trabajo.', 'estudiar español.', 'alquilar un piso.'], 1, '«Quiero hacer un curso de español».'],
              ['Omar es de…', ['Siria.', 'Zaragoza.', 'Alemania.'], 0, '«Soy de Siria» (ويعيش في سرقسطة).'],
              ['Omar vive en Zaragoza desde hace…', ['un mes.', 'un año.', 'cinco años.'], 1, '«desde hace un año» = منذ سنة.'],
              ['Por la mañana, Omar…', ['estudia.', 'trabaja en una panadería.', 'descansa.'], 1, '«por la mañana trabajo en una panadería».'],
              ['El curso es…', ['los lunes y miércoles.', 'los martes y jueves.', 'todos los días.'], 0, '«los lunes y miércoles, de seis a ocho».'],
              ['El curso cuesta…', ['dieciséis euros.', 'sesenta euros al mes.', 'setenta euros al mes.'], 1, '«Sesenta» = 60 (لا تخلطها مع setenta = 70).'],
              ['Omar quiere pagar…', ['con tarjeta.', 'en efectivo.', 'por internet.'], 0, '«¿Puedo pagar con tarjeta?».']
            ] }
        ],
        escrita: [
          { tarea: 1, task: 'Usted quiere hacer un curso de español en una academia. Complete el formulario de inscripción con sus datos.', taskAr: 'تريد التسجيل في دورة إسبانية. املأ استمارة التسجيل ببياناتك. اكتب جوابك بعد النقطتين في كل سطر.',
            form: 'Nombre: \nApellidos: \nNacionalidad: \nFecha de nacimiento: \nDirección (calle, número, ciudad): \nTeléfono: \nCorreo electrónico: \nProfesión: \n¿Qué lenguas habla?: \n¿Por qué quiere estudiar español? (10–15 palabras): ',
            check: ['كل الخانات مليئة، لا خانة فارغة', 'الجنسية صفة: [[sirio / siria]] (لا [[Siria]])', 'تاريخ الميلاد: [[12/07/1965]] أو [[12 de julio de 1965]]', 'العنوان بالترتيب الإسباني: [[Calle Mayor, 15, Madrid]]', 'السبب جملة كاملة مع [[porque]] أو [[para]]'],
            useful: ['Soy sirio.|أنا سوري.', 'Hablo árabe y un poco de español.|أتكلّم العربية وقليلًا من الإسبانية.', 'Estoy jubilado.|أنا متقاعد.', 'Quiero estudiar español porque vivo en España.|أريد دراسة الإسبانية لأنني أعيش في إسبانيا.', 'para hablar con mis vecinos|لأتكلّم مع جيراني'],
            req: ['@', 'porque|para'],
            model: 'Nombre: Mones\nApellidos: Hasan\nNacionalidad: sirio\nFecha de nacimiento: 12/07/1965\nDirección: Calle Mayor, 15, 2.º B, Madrid\nTeléfono: 612 345 678\nCorreo electrónico: mones@correo.es\nProfesión: jubilado\n¿Qué lenguas habla?: Hablo árabe y un poco de español.\n¿Por qué quiere estudiar español?: Quiero estudiar español porque vivo en España y quiero hablar con mis vecinos.',
            modelAr: 'لاحظ: الجنسية صفة بحرف صغير (sirio)، والبريد فيه @، والسبب جملة كاملة مع porque. (البيانات هنا مثال فقط.)' },
          { tarea: 2, task: 'Usted vive ahora en una ciudad nueva. Escriba un correo a un amigo. En él debe:\n- saludar;\n- decir dónde vive ahora;\n- describir su casa o su barrio;\n- decir qué hace los fines de semana;\n- despedirse.\nNúmero de palabras: entre 30 y 40.', taskAr: 'اكتب رسالة قصيرة إلى صديق (30–40 كلمة): التحية، أين تعيش الآن، وصف بيتك أو حيّك، ماذا تفعل في نهاية الأسبوع، والختام.', words: 40,
            check: ['تحية: [[¡Hola, …!]]', 'أين تعيش: [[Ahora vivo en…]]', 'وصف: [[Mi casa es… / En mi barrio hay…]]', 'نهاية الأسبوع: [[Los sábados / Los domingos…]]', 'ختام: [[Un abrazo / Hasta pronto]]', 'بين 30 و40 كلمة'],
            useful: ['Ahora vivo en…|الآن أعيش في…', 'Mi piso es pequeño, pero bonito.|شقتي صغيرة لكنها جميلة.', 'En mi barrio hay un parque.|في حيّي حديقة.', 'Los domingos paseo con mi familia.|أيام الأحد أتنزّه مع عائلتي.', 'Un abrazo|مع عناق (ختام ودّي)'],
            req: ['hola|querido|querida', 'vivo', 'sábado|domingo|fin de semana|fines de semana', 'abrazo|beso|saludo|hasta pronto'],
            model: '¡Hola, Karim!\n¿Qué tal? Ahora vivo en Valencia. Mi piso es pequeño, pero tiene mucha luz. En mi barrio hay un parque y muchas tiendas. Los sábados voy al mercado y los domingos paseo con mi familia.\nUn abrazo,\nMones',
            modelAr: 'لاحظ: كل نقطة بجملة قصيرة، والأفعال كلها في المضارع، وعدد الكلمات نحو 40.' }
        ],
        oral: [
          { tarea: 1, title: 'Presentación personal', task: 'Preséntese (1–2 minutos). Puede hablar de:',
            prompts: ['Nombre y edad', 'Nacionalidad y ciudad donde vive', 'Profesión o estudios', 'Familia', 'Lenguas que habla', 'Gustos y tiempo libre'],
            model: 'Me llamo Mones y tengo sesenta y un años. Soy sirio, de Damasco, pero ahora vivo en Madrid. Estoy jubilado. Estoy casado y tengo tres hijos. Hablo árabe y un poco de español. En mi tiempo libre me gusta pasear, leer y tomar café con mis amigos.' },
          { tarea: 2, title: 'Exposición de un tema: mi día normal', task: 'Hable de un día normal en su vida (2–3 minutos).',
            prompts: ['¿A qué hora se levanta?', '¿Qué desayuna?', '¿Qué hace por la mañana?', '¿Dónde y con quién come?', '¿Qué hace por la tarde?', '¿A qué hora se acuesta?'],
            model: 'Normalmente me levanto a las siete y media. Desayuno café con leche y pan con aceite. Por la mañana voy al mercado y después estudio español. Como en casa con mi mujer a las dos. Por la tarde descanso un poco y luego paseo por el parque. Ceno a las nueve, veo la televisión y me acuesto a las once.' },
          { tarea: 3, title: 'Conversación con el entrevistador', task: 'El entrevistador le hace preguntas sobre su presentación y su día. Escuche cada pregunta y responda con una frase completa.',
            prompts: ['Responda con frases completas: «Los domingos me levanto a las…»', 'Si no entiende: «¿Puede repetir, por favor?»', 'Puede preguntar también: «¿Y usted?»'],
            questions: ['¿A qué hora se levanta los domingos?', '¿Con quién vive?', '¿Qué le gusta comer?', '¿Qué hace los fines de semana?', '¿Cuántas lenguas habla?'],
            model: '—¿A qué hora se levanta los domingos? —Los domingos me levanto más tarde, a las nueve. —¿Con quién vive? —Vivo con mi mujer. —¿Qué le gusta comer? —Me gusta mucho el arroz con pollo y también la paella. —¿Qué hace los fines de semana? —Los sábados voy al mercado y los domingos visito a mis hijos. —¿Cuántas lenguas habla? —Hablo dos lenguas: árabe y un poco de español.' },
          { tarea: 4, title: 'Diálogos en situaciones: en una cafetería y en una tienda', task: 'El entrevistador es el camarero y después el dependiente. Hable con él en estas dos situaciones.',
            prompts: ['En la cafetería: salude, pida algo de beber y algo de comer, pregunte el precio y pague.', 'En la tienda: diga qué quiere comprar (una camiseta), pregunte por la talla y el color, pregunte el precio.', 'Use: «Quería…», «¿Tiene…?», «¿Cuánto cuesta?», «Gracias, adiós»'],
            questions: ['Hola, buenos días. ¿Qué va a tomar?', '¿Algo más?', 'Hola, ¿qué desea?', '¿Qué talla usa?', '¿De qué color la quiere?'],
            model: 'En la cafetería: —Hola, buenos días. ¿Qué va a tomar? —Buenos días. Quería un café con leche, por favor. —¿Algo más? —Sí, una tostada con tomate. ¿Cuánto es? —Tres euros. —Aquí tiene. Gracias, adiós.\nEn la tienda: —Hola, ¿qué desea? —Quería una camiseta. —¿Qué talla usa? —La talla L. —¿De qué color la quiere? —Azul, por favor. ¿Cuánto cuesta? —Quince euros. —Muy bien, me la llevo.' }
        ]
      },
      {
        id: 'A1b', title: 'النموذج التدريبي 2', theme: 'العائلة ووقت الفراغ',
        lectura: [
          { tarea: 1, instr: 'Lea el mensaje de Marta a su amiga Elena y conteste a las preguntas.', ar: 'المهمة 1: اقرأ الرسالة وأجب (5 أسئلة).',
            text: '¡Hola, Elena!\n¿Cómo estás? El sábado es mi cumpleaños y hago una fiesta en mi casa. Empieza a las ocho de la tarde. Vienen mis compañeros de trabajo y mi hermano Luis con su mujer.\nMi dirección es calle Mayor, número 15, tercer piso. Está cerca de la estación de metro Sol. Si vienes en coche, puedes aparcar en la plaza.\nYo preparo la cena: tortilla de patatas, ensalada y pollo. ¿Puedes traer el postre? Tu tarta de chocolate me encanta.\nEscríbeme, por favor.\nUn beso,\nMarta',
            q: [
              ['Marta escribe para…', ['invitar a Elena a una fiesta.', 'buscar trabajo.', 'pedir una dirección.'], 0, 'عيد ميلادها يوم السبت وتقيم حفلة: دعوة.'],
              ['La fiesta es…', ['el sábado por la mañana.', 'el sábado por la tarde.', 'el domingo.'], 1, '«El sábado… a las ocho de la tarde».'],
              ['Marta vive…', ['en una plaza.', 'cerca del metro.', 'lejos del centro.'], 1, '«cerca de la estación de metro Sol».'],
              ['Para cenar hay…', ['pescado.', 'pollo.', 'pizza.'], 1, '«tortilla de patatas, ensalada y pollo».'],
              ['Marta pide a Elena…', ['una tarta.', 'una ensalada.', 'un coche.'], 0, '«¿Puedes traer el postre? Tu tarta de chocolate…».']
            ] },
          { tarea: 2, instr: 'Lea estos mensajes y carteles. Conteste a la pregunta de cada uno.', ar: 'المهمة 2: ملاحظات ولافتات قصيرة (6 أسئلة).', multi: true,
            blocks: [
              { text: 'Luis:\nEstoy en el supermercado. ¿Necesitamos pan? Llámame.\nSara', q: ['Sara…', ['está en casa.', 'está comprando.', 'está en la panadería.'], 1, '«Estoy en el supermercado» = هي تتسوّق.'] },
              { text: 'BIBLIOTECA\nSilencio, por favor.\nNo se puede hablar por teléfono.', q: ['En la biblioteca no se puede…', ['hablar por teléfono.', 'leer libros.', 'entrar por la tarde.'], 0, '«No se puede hablar por teléfono».'] },
              { text: 'AUTOBÚS 23\nLunes a viernes: cada 10 minutos.\nSábados y domingos: cada 30 minutos.', q: ['Los domingos el autobús pasa…', ['cada diez minutos.', 'cada media hora.', 'una vez al día.'], 1, '«cada 30 minutos» = كل نصف ساعة.'] },
              { text: 'SE ALQUILA habitación en piso compartido. 300 € al mes. Solo chicas.\nLlamar a Julia: 699 111 222.', q: ['La habitación es para…', ['una chica.', 'una familia.', 'un chico.'], 0, '«Solo chicas» = للبنات فقط.'] },
              { text: 'DOCTOR RUIZ\nConsulta: de lunes a jueves, de 16:00 a 20:00.', q: ['El doctor Ruiz trabaja…', ['por la mañana.', 'por la tarde.', 'los viernes.'], 1, 'من 16:00 إلى 20:00 = في المساء.'] },
              { text: 'ZAPATERÍA EL PASO\nCerrado por vacaciones del 1 al 15 de agosto.', q: ['La tienda…', ['abre todo el mes de agosto.', 'está cerrada dos semanas.', 'está cerrada todo el verano.'], 1, 'من 1 إلى 15 أغسطس = أسبوعان.'] }
            ] },
          { tarea: 3, fixed: true, instr: 'Lea los anuncios (A–H) y relacione cada persona con el anuncio que necesita. Hay dos anuncios que no debe elegir.', ar: 'المهمة 3: اربط كل شخص بالإعلان المناسب (6 أسئلة، وإعلانان زائدان).',
            text: 'A. HOTEL MAR AZUL. Habitaciones con vistas a la playa. Desayuno incluido.\nB. CLASES DE GUITARRA para niños y adultos. Profesor con experiencia. Primera clase gratis.\nC. LIBRERÍA CERVANTES. Libros, diccionarios y periódicos en muchas lenguas.\nD. TAXI 24 HORAS. Aeropuerto, estación, hospital. Tel. 976 00 00 00.\nE. PELUQUERÍA CARMEN. Hombres, mujeres y niños. Los martes, sin cita.\nF. MERCADO CENTRAL. Fruta, verdura, carne y pescado frescos. De lunes a sábado por la mañana.\nG. ESCUELA INFANTIL LOS PEQUES. Niños de 0 a 3 años. Horario de 7:30 a 17:00.\nH. TALLER GARCÍA. Reparamos su coche en 24 horas. Precios económicos.',
            q: [
              ['«Mi coche no funciona.»', ADS_B, 7, '«Taller» = ورشة: «Reparamos su coche».'],
              ['«Necesito un diccionario de español y árabe.»', ADS_B, 2, 'المكتبة تبيع «diccionarios… en muchas lenguas».'],
              ['«Tengo que ir al aeropuerto a las cinco de la mañana.»', ADS_B, 3, 'تاكسي 24 ساعة يذهب إلى المطار.'],
              ['«Quiero comprar pescado fresco para la comida.»', ADS_B, 5, 'السوق المركزي: «carne y pescado frescos».'],
              ['«Trabajo todo el día y mi hija tiene dos años.»', ADS_B, 6, 'روضة للأطفال من 0 إلى 3 سنوات.'],
              ['«Queremos pasar las vacaciones cerca del mar.»', ADS_B, 0, 'فندق «con vistas a la playa».']
            ] },
          { tarea: 4, instr: 'Lea la información de la piscina municipal y complete las frases.', ar: 'المهمة 4: اقرأ المعلومات وأكمل الجمل (8 أسئلة).',
            text: 'PISCINA MUNICIPAL DE VERANO\n\nAbierta del 15 de junio al 10 de septiembre.\nHorario: de lunes a viernes, de 11:00 a 20:00. Sábados y domingos, de 10:00 a 21:00.\nPrecios: adultos, 4 €. Niños de 4 a 12 años, 2 €. Menores de 4 años, gratis. Mayores de 65 años, 2 €.\nBono de 10 entradas: 30 €.\nCursos de natación para niños: de lunes a jueves, de 10:00 a 11:00. Precio: 40 € al mes.\nNormas: es obligatorio ducharse antes de entrar en el agua. No se puede comer en la zona de la piscina. Hay una cafetería al lado de la entrada.\nMás información en el Ayuntamiento o en el teléfono 976 77 88 99.',
            q: [
              ['La piscina abre…', ['todo el año.', 'en verano.', 'en invierno.'], 1, 'من 15 يونيو إلى 10 سبتمبر: الصيف.'],
              ['Los fines de semana la piscina cierra…', ['a las ocho.', 'a las nueve.', 'a las diez.'], 1, 'السبت والأحد حتى 21:00 = التاسعة.'],
              ['Un adulto paga…', ['dos euros.', 'cuatro euros.', 'treinta euros.'], 1, '«adultos, 4 €».'],
              ['Un niño de tres años…', ['paga dos euros.', 'no paga.', 'no puede entrar.'], 1, '«Menores de 4 años, gratis» = مجانًا.'],
              ['Los cursos de natación son…', ['por la mañana.', 'por la tarde.', 'el fin de semana.'], 0, 'من 10:00 إلى 11:00 = صباحًا.'],
              ['Antes de entrar en el agua hay que…', ['comer algo.', 'ducharse.', 'pagar 40 euros.'], 1, '«es obligatorio ducharse» = الاستحمام إجباري.'],
              ['Se puede comer…', ['en la cafetería.', 'en la zona de la piscina.', 'en el agua.'], 0, 'الأكل ممنوع في منطقة المسبح، وتوجد كافيتيريا عند المدخل.'],
              ['Para tener más información se puede…', ['llamar por teléfono.', 'escribir una carta.', 'preguntar en la cafetería.'], 0, '«en el teléfono 976 77 88 99».']
            ] }
        ],
        auditiva: [
          { tarea: 1, instr: 'Va a escuchar cinco diálogos breves. Conteste a la pregunta de cada uno.', ar: 'المهمة 1: خمسة حوارات قصيرة (5 أسئلة).', multi: true,
            blocks: [
              { lines: [['Mujer', 'Buenos días. Quería un kilo de tomates y medio kilo de manzanas.'], ['Vendedor', 'Aquí tiene. ¿Algo más?'], ['Mujer', 'No, nada más. ¿Cuánto es?'], ['Vendedor', 'Tres euros con cincuenta.']], q: ['¿Cuánto paga la mujer?', ['Dos euros con cincuenta.', 'Tres euros con cincuenta.', 'Cinco euros.'], 1, '«Tres euros con cincuenta» = 3,50 €.'] },
              { lines: [['Hombre', '¿Tienes hermanos?'], ['Mujer', 'Sí, tengo dos hermanos y una hermana. Yo soy la pequeña.']], q: ['¿Cuántas hermanas tiene la mujer?', ['Una.', 'Dos.', 'Tres.'], 0, '«dos hermanos y una hermana»: أخت واحدة.'] },
              { lines: [['Mujer', '¿Cómo vas al trabajo?'], ['Hombre', 'Normalmente voy en autobús, pero hoy voy a pie porque hace buen tiempo.']], q: ['¿Cómo va hoy el hombre al trabajo?', ['En autobús.', 'A pie.', 'En coche.'], 1, 'عادةً بالحافلة، لكن **اليوم** مشيًا: «hoy voy a pie».'] },
              { lines: [['Hombre', '¿Quedamos el viernes para cenar?'], ['Mujer', 'El viernes no puedo. ¿Mejor el sábado?'], ['Hombre', 'Vale, el sábado a las nueve.']], q: ['¿Cuándo van a cenar?', ['El viernes.', 'El sábado.', 'El domingo.'], 1, 'القرار الأخير: «el sábado a las nueve».'] },
              { lines: [['Mujer', 'Perdón, ¿cuánto cuesta esta camisa?'], ['Dependiente', 'Veinte euros. La tenemos en azul y en blanco.'], ['Mujer', 'Me llevo la azul.']], q: ['¿Qué compra la mujer?', ['Una camisa blanca.', 'Una camisa azul.', 'Unos pantalones azules.'], 1, '«Me llevo la azul» = آخذ الزرقاء.'] }
            ] },
          { tarea: 2, instr: 'Va a escuchar cinco mensajes. Conteste a la pregunta de cada uno.', ar: 'المهمة 2: خمس رسائل وإعلانات (5 أسئلة).', multi: true,
            blocks: [
              { lines: [['Megafonía', 'Pasajeros del vuelo a Sevilla, por favor, vayan a la puerta número doce.']], q: ['¿Dónde se oye este mensaje?', ['En un aeropuerto.', 'En una estación de autobuses.', 'En un hotel.'], 0, '«vuelo» = رحلة طيران، و«puerta» = بوابة: المطار.'] },
              { lines: [['Madre', 'Hola, Pedro, soy tu madre. El domingo comemos todos en casa de la abuela a las dos. No llegues tarde.']], q: ['¿Dónde come la familia el domingo?', ['En casa de la abuela.', 'En un restaurante.', 'En casa de Pedro.'], 0, '«en casa de la abuela».'] },
              { lines: [['Profesora', 'Bienvenidos a la clase de español. Abrimos el libro por la página diez y hacemos el ejercicio dos.']], q: ['¿Quién habla?', ['Un médico.', 'Una profesora.', 'Un camarero.'], 1, 'تتكلّم عن الدرس والكتاب والتمرين: معلّمة.'] },
              { lines: [['Contestador', 'Farmacia Central. Cerramos a las dos y abrimos otra vez a las cinco de la tarde.']], q: ['¿A qué hora abre la farmacia por la tarde?', ['A las dos.', 'A las cuatro.', 'A las cinco.'], 2, '«abrimos otra vez a las cinco de la tarde».'] },
              { lines: [['Camarero', 'Hoy, menú del día: de primero, sopa o ensalada; de segundo, pescado con patatas; y de postre, fruta.']], q: ['¿Qué hay de segundo plato?', ['Sopa.', 'Pescado con patatas.', 'Fruta.'], 1, '«de segundo, pescado con patatas».'] }
            ] },
          { tarea: 3, instr: 'Va a escuchar a Diego hablar de sus compañeros de clase. Conteste a las preguntas.', ar: 'المهمة 3: دييغو يتكلّم عن زملائه في الصف (8 أسئلة).',
            lines: [['Diego', 'Hola, soy Diego. Estudio español en una academia y voy a hablar de mis compañeros de clase.'], ['Diego', 'Yuki es de Japón. Trabaja en un hotel.'], ['Diego', 'Ahmed es de Egipto. Es cocinero y hace una comida muy rica.'], ['Diego', 'Anna es alemana. Tiene tres hijos y vive cerca de la academia.'], ['Diego', 'Paul es francés. Viene a clase en bicicleta todos los días.'], ['Diego', 'Fátima es de Marruecos. Habla cuatro lenguas.'], ['Diego', 'Li es de China. Estudia Medicina en la universidad.'], ['Diego', 'Olga es rusa. Le gusta mucho bailar.'], ['Diego', 'Y nuestro profesor se llama Javier. Es de Sevilla y es muy simpático.']],
            q: [
              ['Yuki…', ['trabaja en un hotel.', 'es cocinera.', 'estudia Medicina.'], 0, '«Trabaja en un hotel».'],
              ['Ahmed…', ['es de Marruecos.', 'cocina muy bien.', 'viene en bicicleta.'], 1, '«Es cocinero y hace una comida muy rica».'],
              ['Anna…', ['tiene tres hijos.', 'vive lejos de la academia.', 'es francesa.'], 0, '«Tiene tres hijos».'],
              ['Paul…', ['va a clase en autobús.', 'va a clase en bicicleta.', 'no va a clase.'], 1, '«Viene a clase en bicicleta».'],
              ['Fátima…', ['habla cuatro lenguas.', 'es de Egipto.', 'trabaja en un hotel.'], 0, '«Habla cuatro lenguas».'],
              ['Li…', ['trabaja en un hospital.', 'es estudiante de Medicina.', 'es profesora.'], 1, '«Estudia Medicina en la universidad».'],
              ['A Olga le gusta…', ['bailar.', 'cocinar.', 'leer.'], 0, '«Le gusta mucho bailar».'],
              ['Javier…', ['es un estudiante.', 'es el profesor.', 'es de Madrid.'], 1, '«nuestro profesor se llama Javier».']
            ] },
          { tarea: 4, instr: 'Va a escuchar una conversación telefónica sobre un piso. Complete las frases.', ar: 'المهمة 4: مكالمة عن شقة؛ أكمل الجمل (7 أسئلة).',
            lines: [['Laura', 'Buenas tardes. Llamo por el anuncio del piso. ¿Está libre todavía?'], ['Propietario', 'Sí, está libre.'], ['Laura', '¿Cuántas habitaciones tiene?'], ['Propietario', 'Tiene tres habitaciones, un baño y una cocina grande.'], ['Laura', '¿Y dónde está?'], ['Propietario', 'En la calle Goya, cerca del parque.'], ['Laura', '¿Cuánto cuesta al mes?'], ['Propietario', 'Setecientos euros, con el agua incluida.'], ['Laura', '¿Tiene ascensor?'], ['Propietario', 'No, no tiene ascensor. Es un segundo piso.'], ['Laura', '¿Puedo verlo mañana?'], ['Propietario', 'Sí, mañana a las seis de la tarde.'], ['Laura', 'Perfecto. Me llamo Laura Gómez. Hasta mañana.']],
            q: [
              ['Laura llama para…', ['alquilar un piso.', 'vender un piso.', 'buscar trabajo.'], 0, 'تتصل بخصوص إعلان الشقة وتسأل عن السعر الشهري: إيجار.'],
              ['El piso tiene…', ['dos habitaciones.', 'tres habitaciones.', 'dos baños.'], 1, '«tres habitaciones, un baño».'],
              ['El piso está…', ['cerca del parque.', 'cerca de la playa.', 'en un centro comercial.'], 0, '«cerca del parque».'],
              ['El piso cuesta…', ['seiscientos euros.', 'setecientos euros.', 'ochocientos euros.'], 1, '«Setecientos» = 700.'],
              ['En el precio está incluida…', ['el agua.', 'la luz.', 'la conexión a internet.'], 0, '«con el agua incluida».'],
              ['El piso…', ['tiene ascensor.', 'no tiene ascensor.', 'es un quinto piso.'], 1, '«No, no tiene ascensor».'],
              ['Laura va a ver el piso…', ['hoy.', 'mañana por la tarde.', 'mañana por la mañana.'], 1, '«mañana a las seis de la tarde».']
            ] }
        ],
        escrita: [
          { tarea: 1, task: 'Usted quiere hacerse socio de la biblioteca municipal. Complete el formulario con sus datos.', taskAr: 'تريد الاشتراك في المكتبة البلدية. املأ الاستمارة ببياناتك. اكتب جوابك بعد النقطتين في كل سطر.',
            form: 'Nombre: \nApellidos: \nEdad: \nNacionalidad: \nDirección: \nTeléfono: \nCorreo electrónico: \n¿Qué tipo de libros le gustan?: \n¿Qué días puede venir a la biblioteca?: \n¿Por qué quiere ser socio? (10–15 palabras): ',
            check: ['كل الخانات مليئة', 'العمر رقم أو جملة: [[61]] أو [[Tengo 61 años]]', 'الجنسية صفة: [[sirio / siria]]', 'الأيام: [[los lunes y los jueves por la tarde]]', 'السبب جملة كاملة مع [[porque]] أو [[para]]'],
            useful: ['Me gustan los libros de historia.|تعجبني كتب التاريخ.', 'los martes por la mañana|أيام الثلاثاء صباحًا', 'Quiero leer libros en español.|أريد قراءة كتب بالإسبانية.', 'porque me gusta mucho leer|لأنني أحب القراءة كثيرًا', 'para aprender español|لأتعلّم الإسبانية'],
            req: ['@', 'porque|para'],
            model: 'Nombre: Mones\nApellidos: Hasan\nEdad: 61\nNacionalidad: sirio\nDirección: Calle Mayor, 15, 2.º B, Madrid\nTeléfono: 612 345 678\nCorreo electrónico: mones@correo.es\n¿Qué tipo de libros le gustan?: Me gustan los libros de historia y los periódicos.\n¿Qué días puede venir a la biblioteca?: Los martes y los jueves por la mañana.\n¿Por qué quiere ser socio?: Quiero ser socio porque me gusta leer y quiero aprender más español.',
            modelAr: 'لاحظ: «Me gustan los libros» بالجمع لأن الكتب جمع، والأيام مع los، والسبب مع porque. (البيانات هنا مثال فقط.)' },
          { tarea: 2, task: 'Usted quiere invitar a un compañero de clase a comer en su casa. Escriba un mensaje. En él debe:\n- saludar;\n- invitarlo a comer;\n- decir el día y la hora;\n- dar su dirección;\n- decir qué van a comer;\n- despedirse.\nNúmero de palabras: entre 30 y 40.', taskAr: 'اكتب رسالة قصيرة تدعو فيها زميلًا إلى الغداء في بيتك (30–40 كلمة): التحية، الدعوة، اليوم والساعة، عنوانك، ماذا ستأكلون، والختام.', words: 40,
            check: ['تحية: [[¡Hola, …!]]', 'الدعوة: [[¿Quieres venir a comer a mi casa?]]', 'اليوم والساعة: [[el domingo a las dos]]', 'العنوان: [[Vivo en la calle…, número…]]', 'الطعام: [[Vamos a comer…]]', 'ختام: [[Hasta el domingo / Un abrazo]]'],
            useful: ['¿Quieres venir a comer a mi casa?|هل تريد أن تأتي لتتغدّى في بيتي؟', 'el domingo a las dos|يوم الأحد في الثانية', 'Vivo en la calle Goya, número 8.|أسكن في شارع غويا رقم 8.', 'Vamos a comer arroz con pollo.|سنأكل أرزًّا بالدجاج.', 'Hasta el domingo.|إلى اللقاء يوم الأحد.'],
            req: ['hola|querido|querida', 'comer|comida', 'calle|plaza|avenida', 'a las|a la una', 'abrazo|hasta|saludo'],
            model: '¡Hola, Ahmed!\n¿Quieres venir a comer a mi casa el domingo? Comemos a las dos. Vivo en la calle Goya, número 8, segundo piso. Vamos a comer arroz con pollo y ensalada.\nHasta el domingo,\nMones',
            modelAr: 'لاحظ: السؤال بعلامتي ¿ ?، واليوم والساعة والعنوان والطعام كلها موجودة في نحو 40 كلمة.' }
        ],
        oral: [
          { tarea: 1, title: 'Presentación personal', task: 'Preséntese (1–2 minutos). Puede hablar de:',
            prompts: ['Nombre, edad y nacionalidad', 'Ciudad y barrio donde vive', 'Con quién vive', 'Trabajo o estudios', 'Qué le gusta y qué no le gusta', 'Por qué estudia español'],
            model: 'Buenos días. Me llamo Mones, tengo sesenta y un años y soy sirio. Vivo en Madrid, en un barrio tranquilo, con mi mujer. Ahora no trabajo: estoy jubilado. Me gusta mucho el café y el fútbol, pero no me gusta el frío. Estudio español porque vivo en España y quiero hablar con la gente.' },
          { tarea: 2, title: 'Exposición de un tema: mi familia', task: 'Hable de su familia (2–3 minutos).',
            prompts: ['¿Cuántas personas hay en su familia?', '¿Cómo se llaman?', '¿Cuántos años tienen?', '¿Dónde viven y qué hacen?', '¿Cómo son? (alto, simpático, trabajador…)', '¿Qué hacen juntos?'],
            model: 'Mi familia es grande. Mi mujer se llama Samira y es muy simpática. Tenemos tres hijos: dos hijos y una hija. Mi hijo mayor tiene treinta años, vive en Madrid y trabaja en una empresa. Mi hija estudia en la universidad. Mi hijo pequeño tiene veinte años y es muy alto. Los domingos comemos todos juntos en mi casa y después paseamos.' },
          { tarea: 3, title: 'Conversación con el entrevistador', task: 'El entrevistador le hace preguntas sobre su presentación y su familia. Escuche cada pregunta y responda con una frase completa.',
            prompts: ['Responda con frases completas: «Mi hija vive en…»', 'Si no entiende: «¿Puede repetir, por favor?»', 'Puede preguntar también: «¿Y usted?»'],
            questions: ['¿Cuántos hijos tiene?', '¿Dónde vive su familia?', '¿Cómo es su casa?', '¿Qué hace los domingos con su familia?', '¿Qué le gusta hacer en su tiempo libre?'],
            model: '—¿Cuántos hijos tiene? —Tengo tres hijos. —¿Dónde vive su familia? —Mi mujer y yo vivimos en Madrid, y mis hermanos viven en Siria. —¿Cómo es su casa? —Mi casa es pequeña, pero tiene mucha luz. Tiene dos habitaciones. —¿Qué hace los domingos con su familia? —Los domingos comemos juntos y vemos una película. —¿Qué le gusta hacer en su tiempo libre? —Me gusta pasear y leer el periódico.' },
          { tarea: 4, title: 'Diálogos en situaciones: en el mercado y en la estación', task: 'El entrevistador es el vendedor y después el empleado de la estación. Hable con él en estas dos situaciones.',
            prompts: ['En el mercado: salude, pida fruta (cantidad), pregunte el precio y pague.', 'En la estación: pida un billete, diga a qué ciudad y qué día, pregunte la hora de salida y el precio.', 'Use: «Quería…», «Un kilo de…», «¿A qué hora sale…?», «¿Cuánto es?»'],
            questions: ['Buenos días, ¿qué le pongo?', '¿Algo más?', 'Hola, ¿adónde quiere ir?', '¿Para qué día?', '¿Ida o ida y vuelta?'],
            model: 'En el mercado: —Buenos días, ¿qué le pongo? —Buenos días. Quería un kilo de naranjas, por favor. —¿Algo más? —Sí, medio kilo de tomates. ¿Cuánto es? —Tres euros con veinte. —Aquí tiene. Gracias.\nEn la estación: —Hola, ¿adónde quiere ir? —Quería un billete para Toledo. —¿Para qué día? —Para el sábado. ¿A qué hora sale el tren? —A las diez. —¿Ida o ida y vuelta? —Ida y vuelta, por favor. ¿Cuánto cuesta? —Veinte euros.' }
        ]
      }
    ]
  };
})(window.ECM);
