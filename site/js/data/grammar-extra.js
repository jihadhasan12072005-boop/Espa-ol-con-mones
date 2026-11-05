/* Grammar lessons — parts added to complete the 13-part structure:
 *  def   : definición en español (part 2) · terms: terminología [español, árabe] (part 2)
 *  reg   : lo regular y lo irregular / la regla y sus excepciones (part 6)
 *  fin   : evaluación final, 5 preguntas nuevas [enunciado, opciones, índice correcto, explicación] (part 13)
 * [[...]] = Spanish inside Arabic text. */
(function (ECM) {
  'use strict';
  ECM.GRAMMAR_EXTRA = {
    'a1-01': {
      def: 'Los pronombres personales sustituyen al sujeto (yo, tú, él…). El verbo «ser» identifica y describe características esenciales: nombre, origen, profesión, carácter.',
      terms: [['pronombre personal', 'الضمير الشخصي'], ['sujeto', 'الفاعل / المبتدأ'], ['verbo copulativo', 'فعل رابط (ser / estar)'], ['concordancia', 'المطابقة']],
      reg: 'ser فعل شاذّ تمامًا: صيغه [[soy, eres, es, somos, sois, son]] لا تتبع نمطًا. القاعدة المنتظمة الوحيدة هنا: usted يُصرَّف مثل él، و ustedes مثل ellos.',
      fin: [['Nosotros ___ de Marruecos.', ['somos', 'son', 'sois', 'es'], 0, 'nosotros → somos.'], ['¿___ usted el señor García?', ['Eres', 'Es', 'Soy', 'Son'], 1, 'usted يُصرَّف مثل él → es.'], ['Vosotros ___ muy simpáticos.', ['son', 'sois', 'somos', 'es'], 1, 'vosotros → sois.'], ['Ana y yo ___ amigas.', ['son', 'sois', 'somos', 'están'], 2, 'Ana y yo = nosotras → somos.'], ['Mi padre ___ médico.', ['es', 'está', 'son', 'eres'], 0, 'المهنة ← ser: es.']]
    },
    'a1-02': {
      def: 'El sustantivo nombra personas, cosas o ideas y tiene género (masculino o femenino) y número (singular o plural). El artículo lo acompaña y concuerda con él.',
      terms: [['sustantivo', 'الاسم'], ['género', 'الجنس (مذكّر/مؤنّث)'], ['número', 'العدد (مفرد/جمع)'], ['artículo determinado / indeterminado', 'أداة التعريف / أداة النكرة']],
      reg: 'القاعدة: ‎-o مذكّر و‎-a مؤنّث، والجمع بإضافة ‎-s بعد الحرف الصوتي و‎-es بعد الساكن. الاستثناءات: [[el día, el mapa, el problema, la mano, la foto, la radio]]؛ و[[el agua]] (مؤنّث لكن تُستعمل el للنطق)؛ و‎-z → ‎-ces: [[el lápiz → los lápices]].',
      fin: [['___ problema es grave.', ['El', 'La', 'Los', 'Una'], 0, 'problema مذكّر رغم ‎-a: el problema.'], ['Necesito ___ mano.', ['el', 'la', 'un', 'los'], 1, 'mano مؤنّث: la mano.'], ['El plural de «ciudad» es…', ['ciudads', 'ciudades', 'ciudadas', 'ciudad'], 1, 'ينتهي بساكن → ‎-es.'], ['El plural de «lápiz» es…', ['lápizs', 'lápizes', 'lápices', 'lápiz'], 2, '‎-z → ‎-ces.'], ['___ agua está fría.', ['La', 'El', 'Los', 'Un'], 1, 'agua مؤنّث لكن نقول el agua (يبدأ بـ a منبورة).']]
    },
    'a1-03': {
      def: 'El adjetivo califica al sustantivo y concuerda con él en género y número. En español va normalmente detrás del sustantivo.',
      terms: [['adjetivo calificativo', 'الصفة'], ['concordancia de género y número', 'المطابقة في الجنس والعدد'], ['posición del adjetivo', 'موقع الصفة'], ['adjetivo invariable', 'صفة لا تتغيّر مع الجنس']],
      reg: 'المنتظم: [[alto/alta/altos/altas]]. الصفات المنتهية بـ ‎-e أو بساكن لا تتغيّر مع الجنس: [[grande, verde, fácil, azul]]. صفات الجنسية المنتهية بساكن تأخذ ‎-a: [[español → española]]. وقبل الاسم المذكّر المفرد: [[bueno → buen, malo → mal, grande → gran]].',
      fin: [['Tengo dos hijas muy ___.', ['alto', 'altas', 'altos', 'alta'], 1, 'مؤنّث جمع → altas.'], ['Es una casa ___.', ['grande', 'granda', 'grandes', 'gran'], 0, 'grande لا يتغيّر مع الجنس، وبعد الاسم يبقى grande.'], ['Mi mujer es ___.', ['marroquí', 'marroquía', 'marroquíes', 'marroquíos'], 0, 'marroquí لا يتغيّر مع الجنس.'], ['Hoy hace ___ tiempo.', ['bueno', 'buen', 'buena', 'buenos'], 1, 'قبل الاسم المذكّر المفرد: buen.'], ['Las chicas son ___.', ['españoles', 'española', 'españolas', 'español'], 2, 'مؤنّث جمع: españolas.']]
    },
    'a1-04': {
      def: '«Estar» expresa estados, situaciones temporales y localización. «Ser» define e identifica; «estar» describe cómo o dónde está algo en un momento.',
      terms: [['estado', 'الحالة'], ['localización', 'تحديد المكان'], ['característica permanente', 'صفة دائمة'], ['adjetivo de estado', 'صفة حالة']],
      reg: 'estar شبه منتظم: النهايات عادية لكن النبرة على النهاية [[estás, está, están]] و yo = [[estoy]]. الاستثناء في الاستعمال: مكان الأحداث يأخذ ser ([[La boda es en Toledo]]).',
      fin: [['¿Dónde ___ el baño?', ['es', 'está', 'hay', 'son'], 1, 'مكان شيء محدّد ← estar.'], ['¿Cómo ___ tu madre? —Bien, gracias.', ['es', 'está', 'hay', 'son'], 1, 'السؤال عن الحال ← estar.'], ['La fiesta ___ en mi casa.', ['está', 'es', 'hay', 'están'], 1, 'مكان حدث ← ser.'], ['Hoy ___ muy contento.', ['soy', 'estoy', 'es', 'está'], 1, 'شعور الآن ← estar.'], ['Madrid ___ la capital de España.', ['está', 'es', 'hay', 'son'], 1, 'تعريف/هوية ← ser.']]
    },
    'a1-05': {
      def: '«Hay» (forma impersonal de haber) indica la existencia de algo no identificado. «Está/están» localiza algo ya conocido. Las preposiciones de lugar indican la posición.',
      terms: [['forma impersonal', 'صيغة غير شخصية'], ['existencia', 'الوجود'], ['preposición de lugar', 'حرف جرّ للمكان'], ['artículo indeterminado', 'أداة النكرة']],
      reg: 'hay لا تتغيّر أبدًا: [[hay un banco / hay dos bancos]]. القاعدة: hay + نكرة (un, una, dos, mucho)، و está/están + معرفة (el, la, mi). خطأ شائع: *Hay el banco.',
      fin: [['En mi calle ___ dos farmacias.', ['están', 'hay', 'es', 'son'], 1, 'وجود + عدد ← hay.'], ['La farmacia ___ al lado del banco.', ['hay', 'está', 'es', 'están'], 1, 'شيء معرّف ← está.'], ['¿___ un supermercado cerca?', ['Está', 'Hay', 'Es', 'Están'], 1, 'نكرة ← hay.'], ['Las llaves ___ encima de la mesa.', ['hay', 'está', 'están', 'son'], 2, 'معرّف جمع ← están.'], ['El gato está ___ la cama.', ['debajo de', 'debajo', 'en debajo', 'bajo de'], 0, 'debajo de + اسم.']]
    },
    'a1-06': {
      def: 'El presente de indicativo expresa acciones actuales, habituales y verdades generales. Los verbos regulares forman el presente con la raíz del infinitivo y unas terminaciones fijas.',
      terms: [['infinitivo', 'المصدر'], ['raíz', 'الجذر'], ['terminación', 'النهاية'], ['conjugación (-ar, -er, -ir)', 'مجموعة التصريف']],
      reg: 'المنتظم: الجذر + النهاية (انظر الجدول). لكن كثيرًا من الأفعال الشائعة شاذّة في المضارع (الدرسان القادمان): تغيير الجذر [[pienso, puedo, pido]] أو yo شاذّ [[tengo, hago, conozco]].',
      fin: [['Mi mujer ___ en un hospital. (trabajar)', ['trabaja', 'trabajo', 'trabajas', 'trabajan'], 0, 'ella → ‎-a.'], ['Nosotros ___ en Valencia. (vivir)', ['vivemos', 'vivimos', 'viven', 'vivís'], 1, '‎-ir مع nosotros → ‎-imos.'], ['¿Tú ___ café? (beber)', ['bebas', 'bebes', 'bebe', 'bebo'], 1, 'tú مع ‎-er → ‎-es.'], ['Ellos ___ español. (aprender)', ['aprenden', 'aprendan', 'aprendemos', 'aprende'], 0, 'ellos → ‎-en.'], ['Vosotros ___ mucho. (hablar)', ['hablan', 'habláis', 'habléis', 'hablás'], 1, 'vosotros مع ‎-ar → ‎-áis.']]
    },
    'a1-07': {
      def: 'Algunos verbos muy frecuentes son irregulares en presente: cambian en la primera persona (tengo, hago, salgo, conozco) o en toda la conjugación (ir, ser).',
      terms: [['verbo irregular', 'فعل شاذّ'], ['primera persona del singular', 'المتكلّم المفرد (yo)'], ['verbos en -go', 'أفعال yo بـ ‎-go'], ['verbos en -zco', 'أفعال yo بـ ‎-zco']],
      reg: 'نمط ‎-go: [[tengo, vengo, pongo, salgo, hago, digo, traigo, oigo]]. نمط ‎-zco للأفعال المنتهية بحرف صوتي + ‎-cer/-cir: [[conozco, conduzco, ofrezco]]. شواذ كاملة: [[voy, soy, estoy, doy, sé, veo]]. tener/venir/decir تجمع ‎-go مع تغيير الجذر: [[tienes, vienes, dices]].',
      fin: [['Yo ___ dos hijos. (tener)', ['teno', 'tengo', 'tienes', 'tiengo'], 1, 'tener → tengo.'], ['Yo no ___ a tu hermano. (conocer)', ['conoco', 'conozco', 'conosco', 'conoce'], 1, '‎-cer → ‎-zco.'], ['¿A qué hora ___ tú de casa? (salir)', ['sales', 'salgas', 'salgo', 'sale'], 0, 'الشذوذ في yo فقط: tú sales.'], ['Yo ___ la comida. (hacer)', ['haco', 'hago', 'hace', 'hazo'], 1, 'hacer → hago.'], ['Mis hijos ___ mañana. (venir)', ['venen', 'vienen', 'vengan', 'vengo'], 1, 'venir مع ellos → vienen.']]
    },
    'a1-08': {
      def: 'Los verbos con cambio vocálico modifican la vocal de la raíz cuando está acentuada: e>ie (pensar), o>ue (poder), e>i (pedir), u>ue (jugar). Nosotros y vosotros no cambian.',
      terms: [['diptongación', 'تحويل الحرف إلى حرفين (e → ie)'], ['vocal tónica', 'الحرف الصوتي المنبور'], ['raíz', 'الجذر'], ['forma «bota» / «zapato»', 'شكل الحذاء: الأشخاص الأربعة المتغيّرة']],
      reg: 'القاعدة: التغيير في yo, tú, él, ellos فقط. استثناءات تكثر الأخطاء معها: أفعال منتظمة تشبهها ([[comer, beber, aprender]] لا تتغيّر)؛ و[[jugar]] الوحيد u → ue؛ وفي ‎-ir يظهر التغيير أيضًا في الماضي البسيط للغائب: [[pidió, durmió]].',
      fin: [['¿Tú ___ venir mañana? (poder)', ['podes', 'puedes', 'pueds', 'puedas'], 1, 'o → ue مع tú.'], ['Nosotros ___ en el futuro. (pensar)', ['piensamos', 'pensamos', 'piensemos', 'pensáis'], 1, 'nosotros لا يتغيّر.'], ['Yo ___ la cuenta al camarero. (pedir)', ['pedo', 'pido', 'piedo', 'pide'], 1, 'e → i: pido.'], ['Los niños ___ al fútbol. (jugar)', ['jugan', 'juegan', 'jueguen', 'jugamos'], 1, 'u → ue: juegan.'], ['Yo ___ ocho horas. (dormir)', ['dormo', 'duermo', 'durmo', 'duerme'], 1, 'o → ue: duermo.']]
    },
    'a1-09': {
      def: 'Los verbos reflexivos llevan un pronombre (me, te, se, nos, os, se) que se refiere al mismo sujeto: la acción recae sobre quien la realiza (me lavo = lavo a mí mismo).',
      terms: [['verbo reflexivo', 'الفعل الانعكاسي'], ['pronombre reflexivo', 'الضمير الانعكاسي'], ['rutina diaria', 'الروتين اليومي'], ['enclítico', 'ضمير ملتصق بالفعل']],
      reg: 'المنتظم: الضمير قبل الفعل المصرّف [[me levanto]]، وملتصق بالمصدر والأمر واسم الفاعل [[levantarme, levántate, levantándose]]. أفعال شاذّة كثيرة في هذا الموضوع: [[me acuesto (o → ue), me visto (e → i), me despierto (e → ie)]].',
      fin: [['Yo ___ a las siete. (levantarse)', ['levanto', 'me levanto', 'se levanta', 'me levanta'], 1, 'yo → me + levanto.'], ['¿A qué hora ___ tú? (acostarse)', ['te acuestas', 'te acostas', 'se acuesta', 'me acuesto'], 0, 'tú → te + acuestas (o → ue).'], ['Nosotros ___ rápido. (vestirse)', ['nos vestimos', 'nos vistimos', 'se visten', 'nos vestemos'], 0, 'nosotros بدون تغيير: nos vestimos.'], ['Voy a ___ ahora. (ducharse)', ['me duchar', 'ducharme', 'duchar me', 'me ducho'], 1, 'بعد ir a + المصدر يلتصق الضمير: ducharme.'], ['Mis hijos ___ temprano. (despertarse)', ['se despiertan', 'se despertan', 'despiertan se', 'nos despertamos'], 0, 'ellos → se + despiertan.']]
    },
    'a1-10': {
      def: '«Gustar» y verbos similares (encantar, doler, interesar, molestar) se construyen al revés: la cosa que gusta es el sujeto, y la persona aparece como objeto indirecto (me, te, le…).',
      terms: [['objeto indirecto', 'المفعول غير المباشر'], ['sujeto gramatical', 'الفاعل النحوي'], ['pronombre átono', 'ضمير متّصل (me, te, le…)'], ['construcción inversa', 'بناء معكوس']],
      reg: 'القاعدة: الفعل يتّفق مع الشيء المحبوب: [[me gusta el té / me gustan los dulces]]. مع المصدر دائمًا مفرد: [[me gusta nadar y leer]]. الاستثناء الظاهري: doler يتبع نفس القاعدة: [[me duele la cabeza / me duelen los pies]].',
      fin: [['A mí me ___ las películas españolas.', ['gusta', 'gustan', 'gusto', 'gustas'], 1, 'películas جمع → gustan.'], ['A mi padre ___ gusta el fútbol.', ['me', 'le', 'se', 'lo'], 1, 'لشخص ثالث → le.'], ['Me ___ los pies.', ['duele', 'duelen', 'dolen', 'duelo'], 1, 'pies جمع → duelen.'], ['¿Os ___ cocinar?', ['gustan', 'gusta', 'gustáis', 'gusto'], 1, 'مع مصدر → gusta.'], ['A nosotros ___ encanta Granada.', ['nos', 'les', 'os', 'me'], 0, 'nosotros → nos.']]
    },
    'a1-11': {
      def: 'Los interrogativos (qué, quién, dónde, cuándo, cómo, cuánto, por qué) introducen preguntas y llevan tilde. La negación se forma con «no» delante del verbo.',
      terms: [['pronombre interrogativo', 'أداة استفهام'], ['signos de interrogación ¿?', 'علامتا الاستفهام'], ['negación', 'النفي'], ['doble negación', 'النفي المزدوج']],
      reg: 'كل أدوات الاستفهام تحمل نبرة: [[qué, cómo, dónde]]، وبدونها تصبح أدوات ربط ([[que, como, donde]]). [[cuánto]] يتغيّر: [[cuánto, cuánta, cuántos, cuántas]]. النفي المزدوج صحيح في الإسبانية: [[No tengo nada. No viene nadie.]]',
      fin: [['¿___ vives? —En Sevilla.', ['Cuándo', 'Dónde', 'Qué', 'Quién'], 1, 'المكان → dónde.'], ['¿___ hermanos tienes?', ['Cuánto', 'Cuántos', 'Cuántas', 'Qué'], 1, 'hermanos مذكّر جمع → cuántos.'], ['¿___ es esa señora? —Mi vecina.', ['Qué', 'Quién', 'Cuál', 'Cómo'], 1, 'شخص → quién.'], ['No ___ nadie en casa.', ['hay', 'no hay', 'hay no', 'está'], 0, 'No hay nadie (نفي مزدوج صحيح).'], ['¿___ no vienes? —Porque estoy enfermo.', ['Porque', 'Por qué', 'Qué', 'Para qué'], 1, 'السؤال: por qué (كلمتان + نبرة).']]
    },
    'a1-12': {
      def: 'Las perífrasis verbales combinan un verbo conjugado con un infinitivo para expresar futuro (ir a), obligación (tener que, hay que), posibilidad (poder) o deseo (querer).',
      terms: [['perífrasis verbal', 'تركيب فعلي'], ['infinitivo', 'المصدر'], ['obligación personal / impersonal', 'الواجب الشخصي / العام'], ['futuro próximo', 'المستقبل القريب']],
      reg: 'الفعل الأول وحده يُصرَّف، والثاني يبقى مصدرًا: [[voy a comer, tienes que venir]]. أفعال شاذّة هنا: [[voy, vas, va]] و[[tengo, tienes]] و[[puedo, puedes]] و[[quiero, quieres]]. [[hay que]] لا يتغيّر أبدًا.',
      fin: [['Mañana (yo) ___ a visitar a mis padres.', ['voy', 'voy a', 'vas', 'ir'], 0, 'voy + a visitar (حرف a موجود بعد الفراغ).'], ['___ que llevar el pasaporte. (en general)', ['Tengo', 'Hay', 'Tiene', 'Es'], 1, 'واجب عام → hay que.'], ['Mi hijo tiene ___ estudiar más.', ['de', 'que', 'a', 'por'], 1, 'tener que + مصدر.'], ['¿___ abrir la ventana? (yo, permiso)', ['Puedo', 'Podo', 'Puedes', 'Pueda'], 0, 'poder → puedo.'], ['Nosotros ___ comprar un coche.', ['queremos', 'quieremos', 'queramos', 'quieren'], 0, 'nosotros لا يتغيّر: queremos.']]
    },
    'a2-01': {
      def: 'El pretérito perfecto (he hablado) expresa acciones pasadas dentro de un periodo de tiempo que no ha terminado (hoy, esta semana) o experiencias sin fecha concreta.',
      terms: [['tiempo compuesto', 'زمن مركّب'], ['verbo auxiliar haber', 'الفعل المساعد haber'], ['participio', 'اسم المفعول'], ['marcador temporal', 'كلمة دالّة على الزمن']],
      reg: 'المنتظم: ‎-ar → ‎-ado، ‎-er/-ir → ‎-ido. الشواذ الأساسية: [[abrir → abierto, decir → dicho, escribir → escrito, hacer → hecho, morir → muerto, poner → puesto, romper → roto, ver → visto, volver → vuelto, cubrir → cubierto, resolver → resuelto]]. ومع حرف صوتي قبل ‎-ído: [[leído, creído, traído, oído]].',
      fin: [['Hoy ___ con mi hija. (hablar)', ['he hablado', 'hablé', 'he hablo', 'ha hablado'], 0, 'hoy + yo → he hablado.'], ['¿Has ___ la carta? (escribir)', ['escribido', 'escrito', 'escrita', 'escribí'], 1, 'participio شاذ: escrito.'], ['Este año ___ a Marruecos dos veces. (nosotros, ir)', ['hemos ido', 'fuimos', 'habemos ido', 'hemos idos'], 0, 'este año → hemos ido.'], ['Todavía no he ___ la tele. (ver)', ['veído', 'visto', 'vido', 'vista'], 1, 'ver → visto.'], ['¿Quién ha ___ la ventana? (romper)', ['rompido', 'roto', 'rota', 'rompió'], 1, 'romper → roto.']]
    },
    'a2-02': {
      def: 'El pretérito indefinido expresa acciones terminadas en un momento concreto del pasado (ayer, en 2010). Los verbos regulares tienen dos series de terminaciones: -ar y -er/-ir.',
      terms: [['pretérito perfecto simple (indefinido)', 'الماضي البسيط'], ['acción terminada', 'حدث منتهٍ'], ['cambio ortográfico', 'تغيير إملائي'], ['tilde', 'النبرة الكتابية']],
      reg: 'المنتظم: انظر الجدول. تغييرات إملائية فقط مع yo: [[busqué (c → qu), llegué (g → gu), empecé (z → c)]]. و[[i → y]] بين حرفين صوتيين: [[leyó, leyeron, creyó, construyó]]. لاحظ: [[hablamos]] = المضارع والماضي معًا (السياق يحدّد).',
      fin: [['Ayer ___ un libro. (comprar, yo)', ['compré', 'compró', 'compro', 'comprí'], 0, 'yo مع ‎-ar → ‎-é.'], ['Yo ___ a las ocho. (llegar)', ['llegé', 'llegué', 'llegó', 'llegue'], 1, 'g → gu قبل é: llegué.'], ['Mi hijo ___ el periódico. (leer)', ['leió', 'leyó', 'leó', 'lee'], 1, 'i → y: leyó.'], ['¿Dónde ___ tú el año pasado? (vivir)', ['viviste', 'vivistes', 'vivió', 'vivías'], 0, 'tú → ‎-iste (بدون s في النهاية).'], ['Ayer ellos ___ paella. (comer)', ['comieron', 'comeron', 'comió', 'comimos'], 0, 'ellos مع ‎-er → ‎-ieron.']]
    },
    'a2-03': {
      def: 'Muchos verbos frecuentes tienen una raíz irregular en el indefinido (tuv-, hic-, dij-…) con terminaciones sin tilde. Ser e ir comparten las mismas formas (fui, fuiste…).',
      terms: [['raíz irregular', 'جذر شاذّ'], ['pretérito fuerte', 'ماضٍ «قوي» (منبور على الجذر)'], ['cambio vocálico e>i, o>u', 'تغيير الحرف الصوتي'], ['tercera persona', 'الغائب']],
      reg: 'جذور شاذّة: [[tuv-, estuv-, anduv-, pud-, pus-, sup-, quis-, vin-, hic-, dij-, traj-, conduj-]] مع نهايات [[-e, -iste, -o, -imos, -isteis, -ieron]] بلا نبرة. بعد j: [[dijeron]] وليس *dijieron. أفعال ‎-ir ذات تغيير الجذر: [[pidió, pidieron, durmió, durmieron]].',
      fin: [['Ayer ___ mucho trabajo. (tener, yo)', ['tení', 'tuve', 'tuvé', 'tuvo'], 1, 'tener → tuv- + e.'], ['¿Qué ___ el médico? (decir)', ['decí', 'dijo', 'dijó', 'decio'], 1, 'decir → dijo (بلا نبرة).'], ['Mis padres ___ en julio. (venir)', ['venieron', 'vinieron', 'vinaron', 'vineron'], 1, 'venir → vin- + ieron.'], ['El año pasado ___ a Roma. (ir, nosotros)', ['fuimos', 'íbamos', 'fueron', 'vamos'], 0, 'ir → fuimos.'], ['Ellos ___ la verdad. (decir)', ['dijieron', 'dijeron', 'decieron', 'dicieron'], 1, 'بعد j: ‎-eron.']]
    },
    'a2-04': {
      def: 'El contraste entre pretérito perfecto e indefinido depende del periodo temporal: abierto o relacionado con el presente (he comido hoy) frente a cerrado y terminado (comí ayer).',
      terms: [['periodo abierto / cerrado', 'فترة مفتوحة / منتهية'], ['marcador temporal', 'كلمة زمنية'], ['experiencia', 'تجربة'], ['contraste de tiempos', 'المقارنة بين الأزمنة']],
      reg: 'القاعدة في إسبانيا: الكلمة الزمنية تحدّد. الاستثناء الجغرافي: في جزر الكناري وأمريكا اللاتينية وبعض الشمال يُستعمل [[comí]] حتى مع «اليوم». في DELE و CCSE استعمل قاعدة مدريد.',
      fin: [['Esta semana ___ mucho. (trabajar, yo)', ['he trabajado', 'trabajé', 'trabajaba', 'trabajo'], 0, 'esta semana → perfecto.'], ['En 2015 ___ a España. (llegar, yo)', ['he llegado', 'llegué', 'llegaba', 'llego'], 1, 'سنة محدّدة → indefinido.'], ['¿Alguna vez ___ churros? (comer, tú)', ['comiste', 'has comido', 'comías', 'comes'], 1, 'تجربة → perfecto.'], ['Anoche ___ mal. (dormir, yo)', ['he dormido', 'dormí', 'dormía', 'duermo'], 1, 'anoche → indefinido.'], ['Hoy no ___ nada todavía. (comer, yo)', ['comí', 'he comido', 'comía', 'como'], 1, 'hoy + todavía → perfecto.']]
    },
    'a2-05': {
      def: 'El pretérito imperfecto describe el pasado: hábitos, descripciones, circunstancias y acciones en desarrollo. Es el tiempo del «fondo» de una historia.',
      terms: [['pretérito imperfecto', 'الماضي المستمر/الاعتيادي'], ['acción habitual', 'فعل معتاد'], ['descripción', 'وصف'], ['acción en desarrollo', 'فعل مستمر']],
      reg: 'أكثر الأزمنة انتظامًا: ثلاثة شواذ فقط [[ser → era, ir → iba, ver → veía]]. أفعال ‎-er و‎-ir نهاياتها واحدة [[-ía]]. نبرة nosotros في ‎-ar: [[hablábamos]].',
      fin: [['De niño ___ en el campo. (vivir, yo)', ['vive', 'vivía', 'vivió', 'vivo'], 1, 'وصف مرحلة → imperfecto.'], ['Antes nosotros ___ al cine cada semana. (ir)', ['fuimos', 'íbamos', 'ibamos', 'vamos'], 1, 'ir شاذّ: íbamos (بنبرة).'], ['La casa ___ muy grande. (ser)', ['fue', 'era', 'eras', 'es'], 1, 'وصف → era.'], ['Mientras yo ___, sonó el teléfono. (cocinar)', ['cociné', 'cocinaba', 'cocino', 'cocinaré'], 1, 'فعل مستمر مقطوع → imperfecto.'], ['Mis abuelos ___ la tele por la noche. (ver)', ['vían', 'veían', 'vieron', 'ven'], 1, 'ver → veían.']]
    },
    'a2-06': {
      def: 'Para narrar en pasado, el imperfecto presenta el contexto y las descripciones, y el indefinido las acciones principales que hacen avanzar la historia.',
      terms: [['narración', 'السرد'], ['fondo / contexto', 'الخلفية'], ['acción principal', 'الحدث الرئيسي'], ['acción interrumpida', 'فعل مقطوع']],
      reg: 'القاعدة: خلفية → imperfecto، حدث → indefinido. الاستثناء الظاهري: بعض الأفعال تغيّر معناها: [[conocía]] (كنت أعرفه) / [[conocí]] (تعرّفت عليه)؛ [[sabía]] (كنت أعرف) / [[supe]] (علمت).',
      fin: [['___ las diez cuando llegó Ana.', ['Fueron', 'Eran', 'Son', 'Serán'], 1, 'الساعة → imperfecto.'], ['Yo ___ la tele cuando se fue la luz.', ['vi', 'veía', 'veo', 'he visto'], 1, 'خلفية مقطوعة → veía.'], ['De repente ___ a llover.', ['empezaba', 'empezó', 'empieza', 'empezaría'], 1, 'de repente → indefinido.'], ['A mi mujer la ___ en una boda en 1988.', ['conocía', 'conocí', 'conozco', 'conocería'], 1, 'التعرّف لأول مرة → conocí.'], ['Hacía sol y los niños ___ en el parque.', ['jugaron', 'jugaban', 'juegan', 'jugarán'], 1, 'وصف المشهد → jugaban.']]
    },
    'a2-07': {
      def: 'Los pronombres de objeto directo (lo, la, los, las) sustituyen a la cosa o persona que recibe la acción; los de objeto indirecto (le, les) a la persona que recibe el beneficio o daño.',
      terms: [['objeto directo (OD)', 'المفعول المباشر'], ['objeto indirecto (OI)', 'المفعول غير المباشر'], ['pronombre átono', 'ضمير متّصل'], ['«se» falso', 'se البديلة عن le/les']],
      reg: 'الترتيب: OI قبل OD: [[me lo das]]. الاستثناء المهم: le/les + lo/la تصبح [[se lo / se la]]: [[Se lo doy]] وليس *le lo doy. مع المصدر والأمر يلتصقان: [[dármelo, dímelo]].',
      fin: [['¿Tienes las llaves? —Sí, ___ tengo.', ['los', 'las', 'les', 'la'], 1, 'las llaves مؤنّث جمع → las.'], ['A mi madre ___ compré flores.', ['la', 'le', 'lo', 'se'], 1, 'OI لشخص → le.'], ['El libro, ¿___ das a Juan? —Sí, ___ doy.', ['le lo / le lo', 'se lo / se lo', 'lo le / lo le', 'se le / se le'], 1, 'le + lo → se lo.'], ['¿Me prestas el coche? —Sí, te ___ presto.', ['la', 'lo', 'le', 'los'], 1, 'el coche → lo.'], ['Quiero ___. (comprar + la casa)', ['la comprar', 'comprarla', 'comprar la', 'comprarle'], 1, 'يلتصق بالمصدر: comprarla.']]
    },
    'a2-08': {
      def: 'El imperativo sirve para dar órdenes, instrucciones y consejos. Tiene formas para tú, usted, nosotros, vosotros y ustedes; el negativo se forma con «no» + presente de subjuntivo.',
      terms: [['imperativo afirmativo', 'الأمر'], ['imperativo negativo', 'النهي'], ['forma de cortesía (usted)', 'صيغة الاحترام'], ['pronombres enclíticos', 'ضمائر ملتصقة']],
      reg: 'tú المنتظم = صيغة él في المضارع [[habla, come]]. ثمانية شواذ: [[di, haz, ve, pon, sal, sé, ten, ven]]. usted/ustedes/nosotros والنهي كلّه من المضارع الالتزامي، فيرث شذوذه: [[tenga, haga, vaya, no digas]].',
      fin: [['___ la puerta, por favor. (cerrar, tú)', ['Cierra', 'Cierre', 'Cerra', 'Cierras'], 0, 'tú = صيغة él: cierra.'], ['___ usted aquí. (firmar)', ['Firma', 'Firme', 'Firmes', 'Firmad'], 1, 'usted → firme.'], ['No ___ eso. (decir, tú)', ['dices', 'digas', 'di', 'diga'], 1, 'النهي = no + subjuntivo: digas.'], ['___ los deberes ahora. (hacer, tú)', ['Hace', 'Haz', 'Haga', 'Hazte'], 1, 'hacer → haz.'], ['Niños, ___ despacio. (comer, vosotros)', ['comed', 'coman', 'comáis', 'comid'], 0, 'vosotros → comed.']]
    },
    'a2-09': {
      def: 'Los comparativos expresan superioridad (más… que), inferioridad (menos… que) o igualdad (tan… como). El superlativo destaca un elemento dentro de un grupo (el más… de) o con -ísimo.',
      terms: [['comparativo de superioridad', 'تفضيل بالزيادة'], ['comparativo de igualdad', 'المساواة'], ['superlativo relativo', 'التفضيل الأعلى'], ['superlativo absoluto (-ísimo)', 'المبالغة']],
      reg: 'المنتظم: [[más/menos + صفة + que]]. الشواذ: [[bueno → mejor, malo → peor, grande → mayor (العمر), pequeño → menor]]. ‎-ísimo مع تغيير إملائي: [[rico → riquísimo, largo → larguísimo]].',
      fin: [['Madrid es ___ grande que Toledo.', ['tan', 'más', 'menos de', 'mucho'], 1, 'تفضيل → más… que.'], ['Este café es ___ que el otro.', ['más bueno', 'mejor', 'buenísimo', 'el mejor'], 1, 'bueno → mejor.'], ['Mi hermano es ___ alto ___ yo.', ['tan / que', 'tan / como', 'más / como', 'tanto / como'], 1, 'المساواة: tan… como.'], ['Es el hospital más moderno ___ la ciudad.', ['que', 'de', 'en', 'como'], 1, 'superlativo: el más… de.'], ['La paella está ___. (rico)', ['ricoísima', 'riquísima', 'muy riquísima', 'ricísima'], 1, 'c → qu: riquísima.']]
    },
    'a2-10': {
      def: 'El futuro simple expresa acciones futuras, predicciones, promesas y también probabilidad en el presente. Se forma añadiendo las terminaciones al infinitivo completo.',
      terms: [['futuro simple', 'المستقبل البسيط'], ['predicción', 'تنبّؤ'], ['probabilidad', 'احتمال'], ['raíz irregular de futuro', 'جذر مستقبل شاذّ']],
      reg: 'المنتظم: المصدر + [[é, ás, á, emos, éis, án]]. 12 جذرًا شاذًّا: [[tendr-, vendr-, pondr-, saldr-, valdr-, podr-, sabr-, cabr-, habr-, querr-, har-, dir-]]، وتنتقل إلى مشتقّاتها ([[mantendré, propondré]]).',
      fin: [['Mañana ___ calor. (hacer)', ['hacerá', 'hará', 'hace', 'haría'], 1, 'hacer → har-.'], ['El año que viene ___ más tiempo. (tener, yo)', ['teneré', 'tendré', 'tendría', 'tengo'], 1, 'tener → tendr-.'], ['¿___ a la fiesta? (venir, tú)', ['Vendrás', 'Venirás', 'Vendrías', 'Vienes'], 0, 'venir → vendr-.'], ['No ___ nada a nadie. (decir, yo)', ['deciré', 'diré', 'diría', 'digo'], 1, 'decir → dir-.'], ['¿Qué hora ___? (ser, probabilidad)', ['será', 'es', 'sea', 'sería'], 0, 'احتمال في الحاضر → futuro.']]
    },
    'a2-11': {
      def: '«Estar + gerundio» presenta una acción en desarrollo. Otras perífrasis indican fases de la acción: acabar de (pasado reciente), empezar a (inicio), volver a (repetición), dejar de (fin), seguir + gerundio (continuidad).',
      terms: [['gerundio', 'اسم الفاعل (‎-ando/-iendo)'], ['acción en desarrollo', 'فعل يحدث الآن'], ['perífrasis de fase', 'تراكيب مراحل الفعل'], ['aspecto', 'الجهة (اكتمال/استمرار)']],
      reg: 'المنتظم: ‎-ar → ‎-ando، ‎-er/-ir → ‎-iendo. الشواذ: [[leer → leyendo, ir → yendo, oír → oyendo, construir → construyendo]] و‎-ir ذات تغيير الجذر [[pedir → pidiendo, dormir → durmiendo, decir → diciendo, venir → viniendo]].',
      fin: [['Ahora estoy ___ el periódico. (leer)', ['leiendo', 'leyendo', 'leído', 'leer'], 1, 'i → y: leyendo.'], ['El niño está ___. (dormir)', ['dormiendo', 'durmiendo', 'duermiendo', 'dormido'], 1, 'o → u: durmiendo.'], ['Acabo ___ llegar a casa.', ['a', 'de', 'que', 'por'], 1, 'acabar de + مصدر = للتو.'], ['He dejado ___ fumar.', ['a', 'de', 'que', 'en'], 1, 'dejar de + مصدر = توقّف عن.'], ['Sigo ___ en el mismo piso. (vivir)', ['vivir', 'viviendo', 'vivido', 'a vivir'], 1, 'seguir + gerundio.']]
    },
    'a2-12': {
      def: '«Por» expresa causa, medio, lugar de paso, intercambio y tiempo aproximado; «para» expresa finalidad, destino, destinatario y plazo.',
      terms: [['preposición', 'حرف جرّ'], ['causa', 'السبب'], ['finalidad', 'الغاية'], ['destinatario', 'المرسَل إليه']],
      reg: 'القاعدة: para ← نحو الهدف، por ← السبب أو الطريق. عبارات ثابتة يجب حفظها: [[por favor, por fin, por ejemplo, por la mañana, por supuesto, para siempre]].',
      fin: [['Este regalo es ___ ti.', ['por', 'para', 'a', 'de'], 1, 'المرسَل إليه → para.'], ['Gracias ___ tu ayuda.', ['para', 'por', 'de', 'a'], 1, 'السبب → por.'], ['Estudio español ___ obtener la nacionalidad.', ['por', 'para', 'a', 'de'], 1, 'الغاية → para.'], ['Paseamos ___ el parque.', ['para', 'por', 'en por', 'a'], 1, 'المرور عبر → por.'], ['Lo necesito ___ el lunes.', ['por', 'para', 'en', 'a'], 1, 'موعد نهائي → para.']]
    },
    'b1-01': {
      def: 'El presente de subjuntivo presenta las acciones como no reales o no afirmadas: deseos, dudas, emociones, finalidades. Se forma a partir de la primera persona del presente de indicativo.',
      terms: [['modo subjuntivo', 'الصيغة الالتزامية'], ['modo indicativo', 'صيغة الإخبار'], ['oración subordinada', 'جملة تابعة'], ['vocal temática cruzada', 'تبديل الحرف الصوتي (a ↔ e)']],
      reg: 'المنتظم: yo − o + e/a. الشذوذ ينتقل من yo: [[tengo → tenga, conozco → conozca, digo → diga]]. ستة شواذ كاملة: [[sea, esté, vaya, haya, sepa, dé]]. و‎-ir ذات تغيير الجذر تغيّر nosotros/vosotros أيضًا: [[pidamos, durmamos, sintáis]].',
      fin: [['Quiero que ___ (tú, venir).', ['vienes', 'vengas', 'venga', 'vinieras'], 1, 'yo vengo → vengas.'], ['Espero que ___ (ellos, estar) bien.', ['estan', 'estén', 'están', 'esten'], 1, 'estar → estén.'], ['Es importante que ___ (nosotros, ir).', ['vamos', 'vayamos', 'vayan', 'iremos'], 1, 'ir → vayamos.'], ['No creo que ___ (él, saber) la verdad.', ['sabe', 'sepa', 'saba', 'sabía'], 1, 'saber → sepa.'], ['Ojalá ___ (nosotros, dormir) bien.', ['dormamos', 'durmamos', 'duermamos', 'dormimos'], 1, '‎-ir: o → u في nosotros: durmamos.']]
    },
    'b1-02': {
      def: 'Los verbos de influencia (querer, pedir, aconsejar, recomendar, prohibir) exigen subjuntivo en la oración subordinada cuando el sujeto es diferente; con el mismo sujeto se usa el infinitivo.',
      terms: [['verbo de influencia', 'فعل تأثير (رغبة/طلب/نصيحة)'], ['cambio de sujeto', 'اختلاف الفاعل'], ['infinitivo', 'المصدر'], ['petición', 'طلب']],
      reg: 'القاعدة: فاعلان مختلفان → que + subjuntivo؛ فاعل واحد → مصدر: [[Quiero ir / Quiero que vayas]]. استثناء: مع [[permitir, prohibir, aconsejar]] يمكن المصدر حتى مع فاعل مختلف: [[Te aconsejo descansar]].',
      fin: [['Mi médico me aconseja que ___ menos sal. (comer)', ['como', 'coma', 'comer', 'comí'], 1, 'فاعل مختلف → coma.'], ['Quiero ___ la nacionalidad.', ['que obtenga', 'obtener', 'obtengo', 'obtenga'], 1, 'نفس الفاعل → مصدر.'], ['Te pido que ___ pronto. (volver)', ['vuelves', 'vuelvas', 'volver', 'volvieras'], 1, 'pedir que + subjuntivo.'], ['Os recomiendo que ___ el museo. (visitar)', ['visitáis', 'visitéis', 'visitad', 'visitar'], 1, 'vosotros subjuntivo: visitéis.'], ['Prefiero que tú ___ la cena. (hacer)', ['haces', 'hagas', 'haz', 'hacer'], 1, 'hacer → hagas.']]
    },
    'b1-03': {
      def: 'Los verbos y expresiones de sentimiento y valoración (me alegra, me molesta, es normal, es una pena) llevan subjuntivo cuando la emoción se refiere a otra persona o a un hecho.',
      terms: [['valoración', 'تقييم/حكم'], ['sentimiento', 'شعور'], ['expresión impersonal', 'عبارة غير شخصية'], ['infinitivo con el mismo sujeto', 'المصدر مع نفس الفاعل']],
      reg: 'القاعدة: [[me alegra que + subjuntivo]] حتى لو كان الحدث حقيقة مؤكّدة. الاستثناء: إن كان الفاعل نفسه أو حكمًا عامًا → مصدر: [[Me alegra verte. Es normal estar nervioso.]]',
      fin: [['Me alegro de que ___ aquí. (estar, tú)', ['estás', 'estés', 'estar', 'estabas'], 1, 'عاطفة → estés.'], ['Es una pena que no ___ venir. (poder, vosotros)', ['podéis', 'podáis', 'pudisteis', 'poder'], 1, 'تقييم → podáis.'], ['Es normal ___ nervioso antes de un examen.', ['que estés', 'estar', 'estás', 'esté'], 1, 'حكم عام بلا فاعل → مصدر.'], ['Me molesta que la gente ___ ruido. (hacer)', ['hace', 'haga', 'hacer', 'hará'], 1, 'molestar que → haga.'], ['Nos encanta que nuestros nietos nos ___. (visitar)', ['visitan', 'visiten', 'visitar', 'visitaron'], 1, 'encantar que → visiten.']]
    },
    'b1-04': {
      def: 'Los verbos de opinión y certeza en forma afirmativa (creo que, pienso que, es verdad que) van con indicativo; en forma negativa o con duda (no creo que, dudo que, es posible que) van con subjuntivo.',
      terms: [['opinión', 'رأي'], ['certeza', 'يقين'], ['duda', 'شكّ'], ['negación del verbo principal', 'نفي الفعل الرئيسي']],
      reg: 'القاعدة: إثبات اليقين/الرأي → indicativo؛ نفيه أو الشك → subjuntivo. الاستثناء في السؤال المنفي: [[¿No crees que es tarde?]] (يُستعمل indicativo لأنه رأي مقنَّع).',
      fin: [['Creo que mañana ___. (llover)', ['llueve', 'llueva', 'llover', 'lloviera'], 0, 'رأي مثبت → indicativo.'], ['No creo que ___ razón. (tener, él)', ['tiene', 'tenga', 'tendrá', 'tener'], 1, 'رأي منفي → tenga.'], ['Es verdad que el examen ___ difícil. (ser)', ['es', 'sea', 'fuera', 'será'], 0, 'es verdad que → indicativo.'], ['Dudo que ___ hoy. (venir, ellos)', ['vienen', 'vengan', 'vinieron', 'venir'], 1, 'dudar → subjuntivo.'], ['Es posible que ___ tarde. (llegar, yo)', ['llego', 'llegue', 'llegaré', 'llegara'], 1, 'es posible que → subjuntivo.']]
    },
    'b1-05': {
      def: 'En las oraciones temporales (cuando, hasta que, en cuanto, mientras, antes de que), se usa subjuntivo si la acción es futura y indicativo si es habitual o pasada. «Antes de que» siempre lleva subjuntivo.',
      terms: [['oración temporal', 'جملة زمنية'], ['acción futura', 'فعل مستقبلي'], ['acción habitual', 'فعل معتاد'], ['conjunción temporal', 'أداة ربط زمنية']],
      reg: 'القاعدة: [[cuando + subjuntivo]] للمستقبل، [[cuando + indicativo]] للعادة والماضي. الاستثناء: [[antes de que]] دائمًا مع subjuntivo، و[[después de / antes de + infinitivo]] مع نفس الفاعل. لا مستقبل بعد cuando: *cuando llegaré.',
      fin: [['Cuando ___ a casa, te llamaré. (llegar, yo)', ['llego', 'llegue', 'llegaré', 'llegara'], 1, 'مستقبل → llegue.'], ['Cuando ___ niño, vivía en Fez. (ser, yo)', ['sea', 'era', 'fuera', 'seré'], 1, 'ماضٍ → indicativo.'], ['Espera aquí hasta que ___. (volver, yo)', ['vuelvo', 'vuelva', 'volveré', 'volví'], 1, 'حدث مستقبلي → vuelva.'], ['Siempre que ___ a Madrid, visito a mi hermano. (ir)', ['voy', 'vaya', 'iré', 'fuera'], 0, 'عادة → indicativo.'], ['Llámame antes de que ___ el tren. (salir)', ['sale', 'salga', 'saldrá', 'salir'], 1, 'antes de que → دائمًا subjuntivo.']]
    },
    'b1-06': {
      def: 'El condicional simple expresa acciones hipotéticas, consejos, peticiones corteses, deseos y el futuro visto desde el pasado. Se forma con el infinitivo y las terminaciones -ía.',
      terms: [['condicional simple', 'الشرطي البسيط'], ['hipótesis', 'فرضية'], ['cortesía', 'التأدّب'], ['futuro del pasado', 'المستقبل في الماضي']],
      reg: 'المنتظم: المصدر + [[ía, ías, ía, íamos, íais, ían]]. نفس الجذور الشاذّة للمستقبل: [[tendría, haría, diría, podría, saldría, querría, sabría, pondría, vendría]].',
      fin: [['¿___ ayudarme, por favor? (poder, usted)', ['Puede', 'Podría', 'Podría usted', 'Pudiera'], 1, 'طلب مؤدّب → podría.'], ['Yo que tú, ___ al médico. (ir)', ['iría', 'iré', 'fuera', 'voy'], 0, 'نصيحة → iría.'], ['Me ___ vivir en la costa. (gustar)', ['gustaría', 'gustará', 'gusta', 'gustara'], 0, 'رغبة → gustaría.'], ['Dijo que ___ a las ocho. (venir)', ['vendrá', 'vendría', 'vino', 'venía'], 1, 'المستقبل في الماضي → vendría.'], ['Con más dinero ___ una casa. (comprar, nosotros)', ['compraremos', 'compraríamos', 'compramos', 'compráramos'], 1, 'فرضية → compraríamos.']]
    },
    'b1-07': {
      def: 'El pretérito pluscuamperfecto (había hablado) expresa una acción pasada anterior a otra acción también pasada.',
      terms: [['anterioridad', 'الأسبقية'], ['tiempo compuesto', 'زمن مركّب'], ['haber en imperfecto', 'haber في الماضي المستمر'], ['estilo indirecto', 'الكلام المنقول']],
      reg: 'المنتظم: [[había, habías, había, habíamos, habíais, habían]] + participio. الشواذ هي نفسها شواذ اسم المفعول: [[había hecho, había visto, había vuelto, había dicho]].',
      fin: [['Cuando llegué, el tren ya ___. (salir)', ['salió', 'había salido', 'ha salido', 'salía'], 1, 'حدث أسبق → había salido.'], ['Nunca ___ la nieve antes de venir. (ver, yo)', ['había visto', 'había veído', 'vi', 'he visto'], 0, 'ver → visto.'], ['Me dijo que ya ___ la comida. (hacer, él)', ['había hecho', 'había hacido', 'hizo', 'hacía'], 0, 'hacer → hecho.'], ['Nosotros ya ___ cuando llamaste. (cenar)', ['habíamos cenado', 'hemos cenado', 'habíamos cenada', 'cenábamos'], 0, 'nosotros → habíamos cenado.'], ['Pensé que ___ a casa. (volver, tú)', ['habías volvido', 'habías vuelto', 'volviste', 'has vuelto'], 1, 'volver → vuelto.']]
    },
    'b1-08': {
      def: 'Las oraciones de relativo describen a un sustantivo (antecedente). Llevan indicativo si el antecedente es conocido y existe, y subjuntivo si es desconocido, buscado o inexistente.',
      terms: [['pronombre relativo', 'اسم موصول'], ['antecedente', 'الاسم الموصوف'], ['antecedente conocido / desconocido', 'معروف / غير معروف'], ['oración de relativo', 'جملة صلة']],
      reg: 'القاعدة: [[Busco a la mujer que vive aquí]] (معروفة) / [[Busco un piso que tenga terraza]] (غير محدّد). مع النفي دائمًا subjuntivo: [[No hay nadie que sepa]]. [[quien]] للأشخاص فقط، و[[lo que]] = «ما».',
      fin: [['Busco un piso que ___ ascensor. (tener)', ['tiene', 'tenga', 'tenía', 'tendrá'], 1, 'غير محدّد → tenga.'], ['Vivo en un piso que ___ ascensor. (tener)', ['tiene', 'tenga', 'tuviera', 'tendría'], 0, 'معروف وموجود → tiene.'], ['No hay nadie que ___ árabe aquí. (hablar)', ['habla', 'hable', 'hablar', 'habló'], 1, 'منفي → hable.'], ['___ me dijiste es importante.', ['Que', 'Lo que', 'El que', 'Quien'], 1, '«ما» → lo que.'], ['Esta es la ciudad ___ nací.', ['que', 'donde', 'quien', 'cual'], 1, 'المكان → donde.']]
    },
    'b1-09': {
      def: 'El estilo indirecto reproduce lo que ha dicho otra persona. Si el verbo introductor está en pasado (dijo que), los tiempos suelen retroceder: presente → imperfecto, indefinido → pluscuamperfecto, futuro → condicional.',
      terms: [['estilo directo / indirecto', 'الكلام المباشر / المنقول'], ['verbo introductor', 'فعل القول'], ['correlación de tiempos', 'توافق الأزمنة'], ['marcadores deícticos', 'كلمات الإشارة (hoy → aquel día)']],
      reg: 'القاعدة مع dijo que: [[estoy → estaba, fui → había ido, iré → iría, ven → que fuera]]. الاستثناء: مع dice que (حاضر) لا يتغيّر الزمن، ومع الحقائق الدائمة يمكن الإبقاء عليه: [[Dijo que la Tierra es redonda]].',
      fin: [['«Estoy cansado». → Dijo que ___ cansado.', ['está', 'estaba', 'estuvo', 'estará'], 1, 'presente → imperfecto.'], ['«Iré mañana». → Dijo que ___ al día siguiente.', ['iría', 'irá', 'iba', 'fue'], 0, 'futuro → condicional.'], ['«Perdí el autobús». → Me contó que ___ el autobús.', ['perdió', 'había perdido', 'pierde', 'perdería'], 1, 'indefinido → pluscuamperfecto.'], ['«Ven aquí». → Me pidió que ___ allí.', ['voy', 'fuera', 'vaya', 'ir'], 1, 'أمر في الماضي → imperfecto de subjuntivo.'], ['«Tengo hambre». → Dice que ___ hambre.', ['tenía', 'tiene', 'tuviera', 'tendrá'], 1, 'dice (حاضر) → لا يتغيّر.']]
    },
    'b1-10': {
      def: 'Con el imperativo afirmativo los pronombres van detrás y unidos al verbo (dámelo), con tilde si es necesario; con el imperativo negativo van delante del verbo (no me lo des).',
      terms: [['pronombre enclítico', 'ضمير ملتصق بآخر الفعل'], ['pronombre proclítico', 'ضمير قبل الفعل'], ['tilde diacrítica / gráfica', 'النبرة الكتابية'], ['orden OI + OD', 'ترتيب المفعولين']],
      reg: 'القاعدة: أمر مثبت → ملتصق + نبرة [[dímelo, siéntese]]؛ نهي → قبل الفعل [[no me lo digas]]. استثناءات الكتابة: [[sentemos + nos → sentémonos]] (تُحذف s)، و[[sentad + os → sentaos]] (تُحذف d)، إلا [[idos]].',
      fin: [['El libro, ___ (dar, tú, a mí).', ['dámelo', 'dame lo', 'me lo da', 'dalome'], 0, 'ملتصق: dámelo.'], ['No ___ (decir, tú, a él, eso).', ['díselo', 'se lo digas', 'le lo digas', 'lo le digas'], 1, 'نهي: no se lo digas.'], ['___, por favor. (sentarse, usted)', ['Siéntese', 'Siéntase', 'Se siente', 'Sientese'], 0, 'usted → siente + se → siéntese.'], ['¡___! (levantarse, vosotros)', ['Levantados', 'Levantaos', 'Levantados os', 'Os levantad'], 1, 'levantad + os → levantaos.'], ['___ ahora. (irse, nosotros)', ['Vámonos', 'Vamosnos', 'Nos vamos', 'Vayámosnos'], 0, 'vamos + nos → vámonos.']]
    },
    'b2-01': {
      def: 'El pretérito imperfecto de subjuntivo aparece cuando el verbo principal está en pasado o condicional, en las condicionales irreales y en deseos poco probables. Tiene dos formas equivalentes: -ra y -se.',
      terms: [['imperfecto de subjuntivo', 'الماضي الالتزامي'], ['formas en -ra / -se', 'الصيغتان ‎-ra و‎-se'], ['condicional irreal', 'شرط غير واقعي'], ['tercera persona plural del indefinido', 'ellos في الماضي البسيط']],
      reg: 'القاعدة: ellos في indefinido − ron + ra. لذلك كل شذوذ الماضي البسيط ينتقل: [[tuvieron → tuviera, dijeron → dijera, fueron → fuera, pidieron → pidiera]]. nosotros بنبرة دائمًا: [[tuviéramos]].',
      fin: [['Si ___ tiempo, viajaría más. (tener, yo)', ['tenía', 'tuviera', 'tendría', 'tenga'], 1, 'شرط غير واقعي → tuviera.'], ['Me pidió que le ___ la verdad. (decir, yo)', ['dijera', 'diga', 'dijiera', 'decía'], 0, 'dijeron → dijera.'], ['Ojalá ___ más jóvenes. (ser, nosotros)', ['seamos', 'fuéramos', 'fueramos', 'éramos'], 1, 'fueron → fuéramos (بنبرة).'], ['Quería que ___ conmigo. (venir, tú)', ['vengas', 'vinieras', 'venieras', 'vendrías'], 1, 'vinieron → vinieras.'], ['Habla como si lo ___ todo. (saber)', ['sabe', 'supiera', 'sepa', 'sabía'], 1, 'como si → imperfecto de subjuntivo.']]
    },
    'b2-02': {
      def: 'Las oraciones condicionales pueden ser reales (si + presente → futuro), potenciales o irreales en presente (si + imperfecto de subjuntivo → condicional) e irreales en pasado (si + pluscuamperfecto de subjuntivo → condicional compuesto).',
      terms: [['prótasis (si…)', 'جملة الشرط'], ['apódosis', 'جواب الشرط'], ['condición real / irreal', 'شرط ممكن / غير واقعي'], ['condicional compuesto', 'الشرطي التام']],
      reg: 'القاعدة: لا يأتي بعد si المستقبل ولا الشرطي ولا المضارع الالتزامي: *si tendré, *si tendría, *si tenga. الاستثناء المقبول: المزج بين الزمنين [[Si hubiera estudiado, ahora tendría trabajo]].',
      fin: [['Si mañana ___, iremos a la playa. (hacer sol)', ['hace', 'haga', 'hará', 'hiciera'], 0, 'شرط واقعي → presente.'], ['Si ___ rico, compraría una casa. (ser, yo)', ['soy', 'sería', 'fuera', 'sea'], 2, 'غير واقعي → fuera.'], ['Si hubieras venido, te ___. (gustar)', ['gustaría', 'habría gustado', 'gustará', 'gustara'], 1, 'ماضٍ غير واقعي → habría gustado.'], ['Si lo ___, te lo habría dicho. (saber, yo)', ['supiera', 'hubiera sabido', 'sabría', 'sé'], 1, 'ماضٍ → hubiera sabido.'], ['Si tienes tiempo, ___ (llamar, tú, a mí).', ['llámame', 'me llamarías', 'me llamaras', 'llamarme'], 0, 'شرط واقعي + أمر.']]
    },
    'b2-03': {
      def: 'La concordancia de tiempos relaciona el tiempo del verbo principal con el del subjuntivo: verbo principal en presente o futuro → presente o perfecto de subjuntivo; en pasado o condicional → imperfecto o pluscuamperfecto de subjuntivo.',
      terms: [['consecutio temporum', 'توافق الأزمنة'], ['verbo principal', 'الفعل الرئيسي'], ['simultaneidad / anterioridad', 'التزامن / الأسبقية'], ['subjuntivo compuesto', 'الالتزامي المركّب']],
      reg: 'القاعدة: [[Quiero que vengas / Quería que vinieras]]. الاستثناء: يمكن [[Me alegra que vinieras ayer]] (حاضر + ماضٍ التزامي) حين يكون الحدث نفسه في الماضي.',
      fin: [['Quiero que ___ mañana. (venir, tú)', ['vengas', 'vinieras', 'vendrás', 'vienes'], 0, 'حاضر → presente de subjuntivo.'], ['Quería que ___ ayer. (venir, tú)', ['vengas', 'vinieras', 'vendrías', 'viniste'], 1, 'ماضٍ → imperfecto de subjuntivo.'], ['Me alegro de que ___ el examen. (aprobar, tú, ya)', ['apruebes', 'hayas aprobado', 'aprobaras', 'aprobaste'], 1, 'حدث منتهٍ مرتبط بالحاضر → haya aprobado.'], ['No creía que ___ tan tarde. (ser)', ['sea', 'fuera', 'era', 'es'], 1, 'ماضٍ → fuera.'], ['Me gustaría que ___ conmigo. (venir, vosotros)', ['vengáis', 'vinierais', 'vendríais', 'venís'], 1, 'condicional → imperfecto de subjuntivo.']]
    },
    'b2-04': {
      def: 'Las oraciones concesivas (aunque, a pesar de que, por mucho que) presentan un obstáculo que no impide la acción principal. Con indicativo presentan un hecho; con subjuntivo, una hipótesis o algo que no importa.',
      terms: [['concesión', 'التنازل (رغم أنّ)'], ['obstáculo', 'عائق'], ['hecho real', 'حقيقة'], ['hipótesis', 'فرضية']],
      reg: 'القاعدة: [[Aunque llueve, salgo]] (المطر حقيقة) / [[Aunque llueva, saldré]] (فرضية أو لا يهمّ). استثناء: [[por mucho que]] يأخذ subjuntivo غالبًا، و[[a pesar de + infinitivo/nombre]] بلا que.',
      fin: [['Aunque ___ cansado, voy a trabajar. (estar, yo, es un hecho)', ['estoy', 'esté', 'estuviera', 'estaré'], 0, 'حقيقة → indicativo.'], ['Aunque mañana ___, iremos de excursión. (llover, quizá)', ['llueve', 'llueva', 'lloverá', 'llovería'], 1, 'فرضية → subjuntivo.'], ['Por mucho que ___, no aprendo. (estudiar)', ['estudio', 'estudie', 'estudiaré', 'estudiar'], 1, 'por mucho que + subjuntivo غالبًا.'], ['A pesar ___ lluvia, salimos.', ['que la', 'de la', 'la', 'del'], 1, 'a pesar de + اسم.'], ['Aunque ___ millonario, no lo compraría. (ser, yo)', ['soy', 'sea', 'fuera', 'sería'], 2, 'فرضية غير واقعية → fuera.']]
    },
    'b2-05': {
      def: 'Las oraciones finales (para que, a fin de que) expresan propósito y llevan subjuntivo; las causales (porque, como, ya que, puesto que, dado que) expresan causa y llevan indicativo.',
      terms: [['oración final', 'جملة الغاية'], ['oración causal', 'جملة السبب'], ['conector causal', 'أداة سبب'], ['posición de «como»', 'موقع como (في أول الجملة)']],
      reg: 'القاعدة: [[para que + subjuntivo]] (فاعل مختلف)، [[para + infinitivo]] (نفس الفاعل). [[como]] السببية تأتي في أول الجملة فقط: [[Como llovía, no salimos]]. الاستثناء: [[no porque + subjuntivo]] لنفي السبب: [[No lo digo porque sea tu amigo]].',
      fin: [['Te lo explico para que lo ___. (entender)', ['entiendes', 'entiendas', 'entender', 'entendiste'], 1, 'para que → subjuntivo.'], ['Estudio para ___ el examen. (aprobar, yo mismo)', ['que apruebe', 'aprobar', 'apruebo', 'aprobara'], 1, 'نفس الفاعل → مصدر.'], ['___ no tenía coche, fui en autobús.', ['Porque', 'Como', 'Para que', 'Aunque'], 1, 'السبب في أول الجملة → como.'], ['No vino ya que ___ enfermo. (estar)', ['estaba', 'estuviera', 'esté', 'estar'], 0, 'سبب → indicativo.'], ['Te llamo a fin de que ___ la fecha. (saber)', ['sabes', 'sepas', 'sabrás', 'saber'], 1, 'a fin de que → subjuntivo.']]
    },
    'b2-06': {
      def: 'La voz pasiva destaca el objeto de la acción (ser + participio + por). En la lengua hablada se prefiere la pasiva refleja (se venden pisos) y el «se» impersonal (se vive bien aquí).',
      terms: [['voz pasiva', 'المبني للمجهول'], ['complemento agente', 'الفاعل الحقيقي (por…)'], ['pasiva refleja', 'المجهول بـ se'], ['se impersonal', 'se غير الشخصية']],
      reg: 'القاعدة: في المجهول بـ ser يتطابق اسم المفعول [[La ley fue aprobada]]. في المجهول بـ se يتطابق الفعل مع الشيء [[Se vende piso / Se venden pisos]]. مع الأشخاص المسبوقين بـ a: مفرد دائمًا [[Se busca a los responsables]].',
      fin: [['La Constitución ___ en 1978. (aprobar)', ['fue aprobado', 'fue aprobada', 'fueron aprobadas', 'es aprobado'], 1, 'Constitución مؤنّث مفرد → fue aprobada (ويمكن أيضًا: se aprobó).'], ['En esta tienda ___ fruta. (vender)', ['se vende', 'se venden', 'vende se', 'es vendido'], 0, 'fruta مفرد → se vende.'], ['___ pisos en el centro. (alquilar)', ['Se alquila', 'Se alquilan', 'Alquilan se', 'Es alquilado'], 1, 'pisos جمع → se alquilan.'], ['En España ___ muy tarde. (cenar)', ['se cena', 'se cenan', 'cena se', 'es cenado'], 0, 'se impersonal → مفرد.'], ['El Quijote fue escrito ___ Cervantes.', ['de', 'por', 'para', 'con'], 1, 'الفاعل الحقيقي → por.']]
    },
    'b2-07': {
      def: 'Las perífrasis avanzadas añaden matices: llevar + gerundio (duración hasta ahora), soler + infinitivo (costumbre), estar a punto de (inminencia), ponerse a (comienzo repentino), tener + participio (resultado acumulado).',
      terms: [['duración', 'المدة'], ['costumbre', 'العادة'], ['inminencia', 'القرب الشديد من الحدوث'], ['comienzo repentino', 'البداية المفاجئة']],
      reg: 'القاعدة: [[llevo dos años estudiando]] = أدرس منذ سنتين. [[soler]] شاذّ o → ue ([[suelo, sueles]]) ولا يُستعمل في المستقبل. [[ponerse a]] يتبع شذوذ poner: [[se puso a llorar]].',
      fin: [['___ diez años viviendo en Murcia.', ['Llevo', 'Hace', 'Estoy', 'Tengo'], 0, 'llevar + مدة + gerundio.'], ['Los domingos ___ comer con mis hijos.', ['suelo', 'solo', 'soleo', 'sueles'], 0, 'soler → suelo.'], ['El tren está a punto ___ salir.', ['a', 'de', 'para', 'en'], 1, 'estar a punto de.'], ['De repente el niño se ___ a llorar. (poner)', ['ponió', 'puso', 'ponía', 'pone'], 1, 'poner → puso.'], ['Llevamos una hora ___. (esperar)', ['esperar', 'esperando', 'esperado', 'a esperar'], 1, 'llevar + gerundio.']]
    },
    'b2-08': {
      def: 'El futuro y el condicional pueden expresar probabilidad: el futuro sobre el presente (serán las tres) y el condicional sobre el pasado (serían las tres). El futuro perfecto expresa acciones terminadas antes de un momento futuro o probabilidad sobre un pasado reciente.',
      terms: [['probabilidad', 'الاحتمال'], ['conjetura', 'التخمين'], ['futuro perfecto', 'المستقبل التام'], ['pasado reciente', 'الماضي القريب']],
      reg: 'القاعدة: حاضر محتمل → futuro، ماضٍ محتمل → condicional، ماضٍ قريب محتمل → futuro perfecto ([[habrá salido]]). الجذور الشاذّة نفسها: [[tendrá, habrá, estará]].',
      fin: [['¿Dónde está Ana? —No sé, ___ en casa. (estar)', ['está', 'estará', 'estaría', 'esté'], 1, 'احتمال الآن → estará.'], ['Ayer no vino; ___ enfermo. (estar)', ['estará', 'estaría', 'está', 'estuviera'], 1, 'احتمال في الماضي → estaría.'], ['No contesta; ___ ya. (salir)', ['habrá salido', 'saldrá', 'saldría', 'sale'], 0, 'ماضٍ قريب محتمل → habrá salido.'], ['Para junio ya ___ el curso. (terminar, yo)', ['terminaré', 'habré terminado', 'habría terminado', 'termino'], 1, 'انتهاء قبل وقت مستقبلي.'], ['¿Qué hora es? —___ las cinco. (ser)', ['Serían', 'Serán', 'Son seguro', 'Fueron'], 1, 'تخمين عن الحاضر → serán.']]
    },
    'b2-09': {
      def: 'Los verbos de cambio expresan transformaciones: ponerse (cambio temporal de estado o aspecto), volverse (cambio de carácter), hacerse (cambio voluntario o progresivo), quedarse (resultado), convertirse en y llegar a ser (transformación importante).',
      terms: [['verbo de cambio', 'فعل التحوّل'], ['cambio temporal / permanente', 'تحوّل مؤقّت / دائم'], ['voluntad', 'الإرادة'], ['resultado', 'النتيجة']],
      reg: 'القاعدة: [[ponerse + صفة]] (رد فعل مؤقّت)، [[volverse + صفة]] (طبع)، [[hacerse + مهنة/دين/جنسية]]، [[quedarse + نتيجة]] ([[se quedó ciego]])، [[convertirse en + اسم]]. انتبه: [[hacerse español]] = نال الجنسية الإسبانية.',
      fin: [['Cuando habla en público, se ___ nervioso.', ['vuelve', 'pone', 'hace', 'convierte'], 1, 'مؤقّت → ponerse.'], ['Con los años se ___ muy egoísta.', ['puso', 'volvió', 'quedó', 'hizo'], 1, 'تغيير الطبع → volverse.'], ['Después de diez años se ___ español.', ['puso', 'hizo', 'volvió', 'quedó'], 1, 'جنسية → hacerse.'], ['Al oír la noticia, se ___ sin palabras.', ['quedó', 'puso', 'hizo', 'convirtió'], 0, 'نتيجة → quedarse.'], ['El pueblo se ha convertido ___ una ciudad.', ['a', 'en', 'de', 'por'], 1, 'convertirse en + اسم.']]
    },
    'b2-10': {
      def: 'Los conectores del discurso organizan un texto: ordenan (en primer lugar), añaden (además), oponen (sin embargo), concluyen (por lo tanto, en definitiva) y ejemplifican (por ejemplo).',
      terms: [['conector', 'أداة ربط'], ['adición', 'الإضافة'], ['contraste', 'المعارضة'], ['conclusión', 'الخلاصة']],
      reg: 'لا تصريف هنا، لكن قواعد ثابتة: بعد [[sin embargo]] و[[por lo tanto]] تأتي فاصلة، و[[sino]] (بل) بعد النفي فقط: [[No es caro, sino barato]]. الاستثناء: [[pero]] لا تأتي بعد فاصلة منقوطة عادةً بل بعد فاصلة.',
      fin: [['Es caro; ___, lo voy a comprar.', ['por lo tanto', 'sin embargo', 'además', 'por ejemplo'], 1, 'معارضة → sin embargo.'], ['Llueve mucho; ___, no saldremos.', ['sin embargo', 'por lo tanto', 'aunque', 'además'], 1, 'نتيجة → por lo tanto.'], ['No es médico, ___ enfermero.', ['pero', 'sino', 'sin embargo', 'si no'], 1, 'بعد النفي → sino.'], ['El piso es bonito; ___, está cerca del metro.', ['además', 'sin embargo', 'en cambio', 'por lo tanto'], 0, 'إضافة → además.'], ['___, me gustaría agradecer su ayuda. (para cerrar un texto)', ['Por ejemplo', 'Para terminar', 'Sin embargo', 'Además'], 1, 'خاتمة → para terminar.']]
    }
  };
})(window.ECM);
