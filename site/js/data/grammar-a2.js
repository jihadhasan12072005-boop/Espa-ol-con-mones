/* Grammar course — level A2 */
(function (ECM) {
  'use strict';
  var G = ECM.GRAMMAR = ECM.GRAMMAR || [];
  function L(o) { o.lv = 'A2'; G.push(o); }

  L({
    id: 'a2-01', t: 'El pretérito perfecto (he hablado)', ta: 'الماضي القريب: Pretérito perfecto',
    sum: 'ماضٍ مرتبط بالحاضر: ما فعلناه «اليوم، هذا الأسبوع، في حياتي». يُبنى بـ haber + اسم المفعول.',
    meaning: 'الـ [[pretérito perfecto]] زمن ماضٍ يتحدث عن أفعال **انتهت** لكنها تقع داخل **فترة زمنية لم تنتهِ بعد** وما زلنا فيها: اليوم، هذا الصباح، هذا الأسبوع، هذا العام، في حياتي. مثال: [[Hoy he desayunado tarde]] = اليوم فطرتُ متأخرًا (واليوم لم ينتهِ).\nوهو زمن **مركّب** من كلمتين: الفعل المساعد [[haber]] مصرّفًا في الحاضر + **اسم المفعول** [[participio]] الذي لا يتغيّر أبدًا: [[he hablado]] = تكلّمتُ.',
    when: ['مع ظروف زمنية لم تنتهِ: [[hoy, esta mañana, esta semana, este mes, este año, este verano]]', 'للتجارب في الحياة (دون تحديد متى): [[¿Has estado alguna vez en Sevilla?]] — هل زرت إشبيلية من قبل؟', 'مع [[ya]] (بالفعل) و [[todavía no / aún no]] (ليس بعد): [[Ya he enviado los papeles. Todavía no he recibido respuesta.]]', 'مع [[nunca, alguna vez, muchas veces, siempre]]: [[Nunca he comido pulpo.]]', 'لماضٍ قريب جدًا تهمّنا نتيجته الآن: [[¡He perdido las llaves!]]'],
    why: 'لماذا [[haber]]؟ لأن الإسبانية تبني كل الأزمنة المركّبة بفعل «haber» (أصله اللاتيني habere = يملك)، فـ [[he comido]] كأنها تعني حرفيًا «أملكُ (فعلَ) الأكلِ منجَزًا» — أي أن النتيجة ما زالت معي الآن. هذا يفسّر لماذا يرتبط هذا الزمن بالحاضر. في إسبانيا (خاصة في الوسط والشمال) يُستخدم هذا الزمن كثيرًا جدًا في الكلام اليومي، أكثر من أمريكا اللاتينية.',
    steps: ['صرّف haber في الحاضر حسب الفاعل: [[he, has, ha, hemos, habéis, han]]', 'كوّن اسم المفعول: أفعال -ar ← احذف -ar وأضف **-ado**: [[hablar → hablado]]', 'أفعال -er و -ir ← احذف النهاية وأضف **-ido**: [[comer → comido، vivir → vivido]]', 'احفظ أسماء المفعول الشاذة: [[hecho, dicho, visto, escrito, puesto, vuelto, abierto, roto, muerto, descubierto, resuelto]]', 'لا تفصل بين haber واسم المفعول أبدًا: الضمائر و no توضع **قبل** haber: [[No lo he visto. Me he levantado.]]', 'اسم المفعول هنا لا يتغيّر مع الفاعل: [[Ella ha comido]] (وليس comida)'],
    formula: 'haber (presente) + participio (-ado / -ido)',
    tables: [
      { v: 'haber', t: 'presente', title: 'haber (auxiliar)', sub: 'الفعل المساعد' },
      { v: 'hablar', t: 'perfecto' }, { v: 'comer', t: 'perfecto' }, { v: 'vivir', t: 'perfecto' },
      { head: ['المصدر', 'اسم المفعول الشاذ', 'مثال'], es: [0, 1, 2], rows: [['hacer', 'hecho', 'He hecho la compra.'], ['decir', 'dicho', '¿Qué has dicho?'], ['ver', 'visto', 'No he visto la película.'], ['escribir', 'escrito', 'He escrito un correo.'], ['poner', 'puesto', '¿Dónde has puesto las llaves?'], ['volver', 'vuelto', 'Ya ha vuelto del trabajo.'], ['abrir', 'abierto', 'Han abierto una tienda nueva.'], ['romper', 'roto', 'Se ha roto la lavadora.'], ['morir', 'muerto', 'Ha muerto un actor famoso.'], ['descubrir', 'descubierto', 'Hemos descubierto un restaurante.'], ['resolver', 'resuelto', 'Ya he resuelto el problema.'], ['leer / traer / oír / caer', 'leído / traído / oído / caído', '¿Has leído la carta?']] },
      { head: ['ظروف الزمن مع الـ Perfecto', 'المعنى'], es: [0], rows: [['hoy / esta mañana / esta tarde', 'اليوم / هذا الصباح / بعد الظهر'], ['esta semana / este mes / este año', 'هذا الأسبوع / الشهر / العام'], ['últimamente / recientemente', 'مؤخّرًا'], ['ya / todavía no / aún no', 'بالفعل / ليس بعد'], ['alguna vez / nunca / muchas veces', 'مرةً ما / أبدًا / مرات كثيرة'], ['hace un rato / hace cinco minutos', 'قبل قليل / قبل خمس دقائق']] }
    ],
    forms: { aff: ['Esta semana he trabajado mucho.|هذا الأسبوع عملتُ كثيرًا.', 'Mis hijos ya han hecho los deberes.|أولادي أنهوا واجباتهم بالفعل.'], neg: ['Todavía no he recibido la tarjeta.|لم أستلم البطاقة بعد.', 'Nunca hemos estado en Galicia.|لم نزر غاليسيا أبدًا.'], q: ['¿Has comido ya?|هل أكلتَ بالفعل؟', '¿Alguna vez has hecho un examen oficial?|هل قدّمتَ امتحانًا رسميًا من قبل؟'] },
    ex: ['Hoy me he levantado a las seis.|اليوم نهضتُ في السادسة.', 'Esta mañana he ido al centro de salud.|هذا الصباح ذهبتُ إلى المركز الصحي.', '¿Qué has hecho este fin de semana?|ماذا فعلتَ في نهاية هذا الأسبوع؟', 'Este año hemos viajado a Valencia.|هذا العام سافرنا إلى فالنسيا.', 'Ya he pagado la factura de la luz.|دفعتُ فاتورة الكهرباء بالفعل.', 'Todavía no he encontrado trabajo.|لم أجد عملًا بعد.', '¿Has estado alguna vez en Toledo?|هل زرتَ طليطلة من قبل؟', 'Nunca he visto una corrida de toros.|لم أرَ مصارعة ثيران أبدًا.', 'Mi mujer ha preparado una cena especial.|زوجتي حضّرت عشاءً خاصًا.', 'Los niños han roto un vaso.|الأطفال كسروا كأسًا.', '¿Dónde has puesto mi móvil?|أين وضعتَ هاتفي؟', 'Hemos abierto una cuenta en el banco.|فتحنا حسابًا في البنك.', 'Me he olvidado de la cita.|نسيتُ الموعد.', 'Últimamente he dormido muy mal.|مؤخرًا نمتُ بشكل سيئ جدًا.', 'Mi hijo ha aprobado el examen de conducir.|ابني نجح في امتحان القيادة.', 'El médico me ha dicho que descanse.|الطبيب قال لي أن أرتاح.', '¿Habéis leído las instrucciones?|هل قرأتم التعليمات؟', 'Ha llovido toda la mañana.|أمطرت طوال الصباح.', 'Se ha estropeado el ascensor.|تعطّل المصعد.'],
    err: [['He hacido la comida.', 'He hecho la comida.', 'hacer له اسم مفعول شاذ: hecho.'], ['Ella ha comida.', 'Ella ha comido.', 'اسم المفعول بعد haber لا يتغيّر مع المؤنث أو الجمع.'], ['He no visto la película.', 'No he visto la película.', 'no توضع قبل haber، لا بينه وبين اسم المفعول.'], ['Yo ha trabajado.', 'Yo he trabajado.', 'haber مع yo: he.'], ['Ayer he ido al médico.', 'Ayer fui al médico.', 'مع ayer (فترة منتهية) نستخدم الـ indefinido وليس الـ perfecto.'], ['He visto lo.', 'Lo he visto.', 'ضمير المفعول يأتي قبل haber.'], ['Estoy comido.', 'He comido.', 'الأزمنة المركّبة تُبنى بـ haber، وليس ser أو estar.']],
    cmp: { t: 'Pretérito perfecto أم Pretérito indefinido؟', x: 'كلاهما ماضٍ منتهٍ، والفرق في **الفترة الزمنية**: إذا كانت الفترة **ما زالت مستمرة** (hoy, esta semana, este año) أو غير محدّدة (alguna vez, nunca) ← [[perfecto]]. إذا كانت **انتهت** (ayer, el lunes pasado, en 2015, hace dos años) ← [[indefinido]]. سندرس الـ indefinido في الدرس التالي.', rows: [['Hoy he comido paella.', 'اليوم أكلتُ باييّا (اليوم لم ينتهِ)'], ['Ayer comí paella.', 'أمس أكلتُ باييّا (أمس انتهى)'], ['Este año he ido a Sevilla.', 'هذا العام ذهبتُ إلى إشبيلية'], ['El año pasado fui a Sevilla.', 'العام الماضي ذهبتُ إلى إشبيلية'], ['¿Has estado en Sevilla? (alguna vez)', 'هل زرتها في حياتك؟'], ['¿Cuándo estuviste en Sevilla?', 'متى زرتها؟ (سؤال عن وقت محدّد)']] },
    tip: 'في امتحان DELE A2 الكتابي غالبًا يُطلب منك أن تحكي «ماذا فعلت اليوم/هذا الأسبوع» في رسالة لصديق: استخدم الـ perfecto مع ya / todavía no. وفي المهمة الأخرى عن «رحلة العام الماضي» استخدم الـ indefinido.',
    pr: [
      ['Hoy (yo) ___ (trabajar) ocho horas.', 'he trabajado', 'haber مع yo (he) + trabajado.'],
      ['¿Tú ___ (ver) la noticia?', 'has visto', 'ver → visto (شاذ).'],
      ['Nosotros ya ___ (hacer) la compra.', ['hemos hacido', 'hemos hecho', 'habemos hecho', 'hemos hecha'], 1, 'hacer → hecho، و haber مع nosotros: hemos.'],
      ['Mi mujer ___ (volver) del trabajo.', 'ha vuelto', 'volver → vuelto.'],
      ['Esta semana ___ mucho. (llover)', ['llovió', 'ha llovido', 'ha llovida', 'está llovido'], 1, 'esta semana فترة مستمرة ← perfecto.'],
      ['Ayer ___ al banco.', ['he ido', 'fui', 'ha ido', 'iba'], 1, 'ayer فترة منتهية ← indefinido.'],
      ['Todavía no ___ (yo, recibir) la carta.', 'he recibido', 'todavía no + perfecto.'],
      ['«لم أرَه» =', ['No lo he visto.', 'He no lo visto.', 'No he lo visto.', 'Lo no he visto.'], 0, 'no + الضمير + haber + اسم المفعول.'],
      ['Los niños ___ (escribir) una carta.', 'han escrito', 'escribir → escrito.'],
      ['¿Alguna vez ___ (vosotros, estar) en Granada?', 'habéis estado', 'haber مع vosotros: habéis.']
    ]
  });

  L({
    id: 'a2-02', t: 'El pretérito indefinido: verbos regulares', ta: 'الماضي البسيط (المنتهي): الأفعال المنتظمة',
    sum: 'لسرد أحداث انتهت في وقت منتهٍ ومحدّد: أمس، العام الماضي، في 2016.',
    meaning: 'الـ [[pretérito indefinido]] (ويسمى أيضًا [[pretérito perfecto simple]]) هو زمن **السرد**: أحداث مكتملة وقعت في فترة **انتهت** تمامًا. [[Ayer hablé con mi hermano]] = أمس تكلّمتُ مع أخي. إنه كلمة واحدة بلا فعل مساعد.',
    when: ['مع ظروف زمنية منتهية: [[ayer, anteayer, anoche, el lunes pasado, la semana pasada, el año pasado, en 2016, hace tres años]]', 'لسرد سلسلة أحداث متتابعة: [[Llegué, comí y me acosté.]]', 'للسيرة الذاتية والتاريخ: [[Llegué a España en 2016. Cervantes murió en 1616.]]', 'لأحداث لها بداية ونهاية محدّدة: [[Viví en Alepo veinte años.]]'],
    why: 'الإسبانية تفصل بين «ماضٍ مرتبط بالحاضر» (perfecto) و«ماضٍ منقطع عن الحاضر» (indefinido). الـ indefinido ينظر إلى الحدث **كوحدة مغلقة** من الخارج: بدأ وانتهى.',
    steps: ['خذ جذر الفعل: habl-، com-، viv-', 'أفعال -ar: [[-é, -aste, -ó, -amos, -asteis, -aron]]', 'أفعال -er و -ir (نفس النهايات): [[-í, -iste, -ió, -imos, -isteis, -ieron]]', 'انتبه للنبرة: [[hablé]] (تكلّمتُ) ≠ [[hable]]؛ [[habló]] (تكلّم) ≠ [[hablo]] (أتكلّم)', 'تغييرات إملائية مع yo: [[-car → -qué (busqué)]]، [[-gar → -gué (llegué)]]، [[-zar → -cé (empecé)]]', 'أفعال -er/-ir التي جذرها ينتهي بحرف علّة: [[leer → leyó, leyeron؛ oír → oyó؛ construir → construyó]]'],
    formula: 'raíz + -é/-aste/-ó/-amos/-asteis/-aron · -í/-iste/-ió/-imos/-isteis/-ieron',
    tables: [{ v: 'hablar', t: 'indefinido' }, { v: 'comer', t: 'indefinido' }, { v: 'vivir', t: 'indefinido' }, { v: 'llegar', t: 'indefinido', sub: '-gar → -gué' }, { v: 'buscar', t: 'indefinido', sub: '-car → -qué' }, { v: 'leer', t: 'indefinido', sub: 'i → y' }],
    forms: { aff: ['Llegué a España en 2016.|وصلتُ إلى إسبانيا في 2016.', 'Anoche cenamos en casa de unos amigos.|ليلة أمس تعشّينا في بيت بعض الأصدقاء.'], neg: ['Ayer no trabajé.|أمس لم أعمل.', 'No comprendieron la pregunta.|لم يفهموا السؤال.'], q: ['¿Cuándo llegaste a Madrid?|متى وصلتَ إلى مدريد؟', '¿Qué compraste ayer?|ماذا اشتريتَ أمس؟'] },
    ex: ['Ayer trabajé hasta las ocho.|أمس عملتُ حتى الثامنة.', 'El sábado pasado visitamos el Museo del Prado.|السبت الماضي زرنا متحف البرادو.', 'Mi hijo nació en Damasco en 2005.|ابني وُلد في دمشق عام 2005.', 'Viví en Turquía dos años.|عشتُ في تركيا سنتين.', 'Anoche vi una película muy buena.|ليلة أمس شاهدتُ فيلمًا جيدًا جدًا.', 'La semana pasada abrimos una cuenta en el banco.|الأسبوع الماضي فتحنا حسابًا في البنك.', '¿A qué hora llegaste?|في أي ساعة وصلت؟', 'Llegué a las nueve y empecé a trabajar enseguida.|وصلتُ في التاسعة وبدأتُ العمل فورًا.', 'Mis padres se casaron en 1970.|تزوّج والداي عام 1970.', 'Hace tres años aprendí a conducir.|قبل ثلاث سنوات تعلّمتُ القيادة.', 'El año pasado mi mujer encontró trabajo.|العام الماضي وجدت زوجتي عملًا.', 'Pagué la multa por internet.|دفعتُ المخالفة عبر الإنترنت.', '¿Leíste el contrato antes de firmar?|هل قرأتَ العقد قبل التوقيع؟', 'Mi hija escribió una carta al ayuntamiento.|ابنتي كتبت رسالة إلى البلدية.', 'Volvimos a casa muy tarde.|عدنا إلى البيت متأخرين جدًا.', 'Me levanté, me duché y salí de casa.|نهضتُ واستحممتُ وخرجتُ من البيت.', 'Cervantes escribió «Don Quijote».|ثربانتس كتب «دون كيخوته».'],
    err: [['Ayer hablo con mi hermano.', 'Ayer hablé con mi hermano.', 'النبرة تغيّر الزمن: hablo (أتكلّم) / hablé (تكلّمتُ).'], ['Yo llegé tarde.', 'Llegué tarde.', 'llegar مع yo: llegué (نضيف u لنحافظ على صوت الـ g).'], ['Ellos comieron → ellos comieran', 'Ellos comieron.', 'نهاية -er/-ir مع ellos في الـ indefinido: -ieron.'], ['Yo busqué → yo buscé', 'Busqué.', '-car → -qué مع yo.'], ['Ayer he trabajado mucho.', 'Ayer trabajé mucho.', 'ayer فترة منتهية ← indefinido.']],
    cmp: { t: 'نفس الصيغة مع nosotros', x: 'مع أفعال -ar و -ir، صيغة nosotros في الـ indefinido **مطابقة** للحاضر: [[hablamos, vivimos]]. السياق يحدّد الزمن: [[Ahora vivimos en Madrid]] (الآن) / [[En 2015 vivimos en Turquía]] (في 2015). أما أفعال -er فتختلف: [[comemos]] (حاضر) / [[comimos]] (ماضٍ).' },
    tip: 'لموضوع «حياتي» في DELE A2: [[Nací en…, estudié…, trabajé como…, llegué a España en…]]. جهّز فقرة من 6 جمل عن سيرتك.',
    pr: [
      ['Ayer (yo) ___ (comprar) pan.', 'compré', '-ar مع yo: -é.'],
      ['Mi hijo ___ (nacer) en 2005.', ['nace', 'nació', 'nacía', 'ha nacido'], 1, 'حدث في تاريخ محدّد ← indefinido، -er مع él: -ió.'],
      ['¿Tú ___ (escribir) el correo?', 'escribiste', '-ir مع tú: -iste.'],
      ['Yo ___ (llegar) tarde ayer.', ['llegé', 'llegué', 'llegue', 'llegó'], 1, '-gar → -gué.'],
      ['Ellos ___ (vivir) en Francia dos años.', 'vivieron', '-ir مع ellos: -ieron.'],
      ['Mi mujer ___ (leer) el periódico.', ['leió', 'leyó', 'leyo', 'lió'], 1, 'i → y بين حرفي علّة: leyó.'],
      ['El año pasado ___ (nosotros, viajar) a Granada.', 'viajamos', 'nosotros مع -ar: -amos.'],
      ['Yo ___ (empezar) el curso en octubre.', 'empecé', '-zar → -cé.']
    ]
  });

  L({
    id: 'a2-03', t: 'El pretérito indefinido: verbos irregulares', ta: 'الماضي البسيط: الأفعال الشاذة',
    sum: 'ser/ir، tener، estar، hacer، poder، poner، venir، decir... شذوذ منتظم في جذور قوية.',
    meaning: 'أهم الأفعال الإسبانية شاذة في الـ indefinido، لكن معظمها يتبع **نمطًا واحدًا**: جذر جديد + نهايات خاصة **بدون نبرة**: [[-e, -iste, -o, -imos, -isteis, -ieron]]. مثال: [[tener → tuv- → tuve, tuviste, tuvo...]]',
    when: ['نفس استخدامات الـ indefinido المنتظم (أحداث منتهية في وقت منتهٍ)', '[[ser]] و [[ir]] لهما **نفس الصيغ تمامًا**: [[fui]] = كنتُ / ذهبتُ؛ السياق يوضّح: [[Fui al médico]] (ذهبتُ)، [[Fue un día difícil]] (كان)', '[[hacer]] للطقس في الماضي: [[Ayer hizo mucho calor.]]'],
    why: 'هذه الجذور («الماضي القوي») ورثتها الإسبانية من اللاتينية. ميزتها أن الجذر **ثابت** لكل الأشخاص، فتكفي معرفة الجذر.',
    steps: ['احفظ الجذر الشاذ: [[tener → tuv, estar → estuv, poder → pud, poner → pus, saber → sup, hacer → hic, querer → quis, venir → vin, andar → anduv]]', 'أضف النهايات بلا نبرة: [[-e, -iste, -o, -imos, -isteis, -ieron]]', 'الجذور المنتهية بـ j تأخذ [[-eron]] مع ellos (وليس -ieron): [[decir → dijeron, traer → trajeron, conducir → condujeron]]', 'hacer مع él: [[hizo]] (بـ z للحفاظ على الصوت)', 'احفظ الأفعال الشاذة كليًا: [[ser/ir: fui, fuiste, fue, fuimos, fuisteis, fueron؛ dar: di, diste, dio...؛ ver: vi, viste, vio...]]', 'أفعال -ir ذات تغيّر الجذر تتغيّر مع él و ellos فقط: [[pedir → pidió, pidieron؛ dormir → durmió, durmieron؛ sentir → sintió]]'],
    formula: 'raíz irregular (tuv-, hic-, pud-…) + -e/-iste/-o/-imos/-isteis/-ieron',
    tables: [{ v: 'ser', t: 'indefinido', title: 'ser / ir', sub: 'نفس الصيغ' }, { v: 'tener', t: 'indefinido' }, { v: 'estar', t: 'indefinido' }, { v: 'hacer', t: 'indefinido' }, { v: 'poder', t: 'indefinido' }, { v: 'decir', t: 'indefinido' }, { v: 'venir', t: 'indefinido' }, { v: 'dar', t: 'indefinido' }, { v: 'pedir', t: 'indefinido', sub: 'e > i (él, ellos)' }, { v: 'dormir', t: 'indefinido', sub: 'o > u (él, ellos)' },
      { head: ['المصدر', 'الجذر', 'yo', 'él'], es: [0, 1, 2, 3], rows: [['tener', 'tuv-', 'tuve', 'tuvo'], ['estar', 'estuv-', 'estuve', 'estuvo'], ['andar', 'anduv-', 'anduve', 'anduvo'], ['poder', 'pud-', 'pude', 'pudo'], ['poner', 'pus-', 'puse', 'puso'], ['saber', 'sup-', 'supe', 'supo'], ['hacer', 'hic-', 'hice', 'hizo'], ['querer', 'quis-', 'quise', 'quiso'], ['venir', 'vin-', 'vine', 'vino'], ['decir', 'dij-', 'dije', 'dijo'], ['traer', 'traj-', 'traje', 'trajo'], ['conducir', 'conduj-', 'conduje', 'condujo']] }],
    forms: { aff: ['El verano pasado fuimos a la playa.|الصيف الماضي ذهبنا إلى الشاطئ.', 'Tuve que esperar dos horas.|اضطررتُ للانتظار ساعتين.'], neg: ['No pude dormir anoche.|لم أستطع النوم ليلة أمس.', 'No vinieron a la reunión.|لم يأتوا إلى الاجتماع.'], q: ['¿Qué hiciste el fin de semana?|ماذا فعلتَ في عطلة نهاية الأسبوع؟', '¿Dónde estuviste ayer?|أين كنتَ أمس؟'] },
    ex: ['Ayer fui a la oficina de extranjería.|أمس ذهبتُ إلى مكتب الأجانب.', 'Fue una experiencia muy positiva.|كانت تجربة إيجابية جدًا.', 'Tuve una entrevista de trabajo el martes.|كان عندي مقابلة عمل يوم الثلاثاء.', 'Estuvimos en Barcelona tres días.|بقينا في برشلونة ثلاثة أيام.', 'El domingo hizo muy buen tiempo.|يوم الأحد كان الطقس جميلًا جدًا.', '¿Qué te dijo el médico?|ماذا قال لك الطبيب؟', 'No pude terminar el examen a tiempo.|لم أستطع إنهاء الامتحان في الوقت.', 'Mis primos vinieron a visitarnos.|أبناء عمي أتوا لزيارتنا.', 'Puse la denuncia en la comisaría.|قدّمتُ البلاغ في مركز الشرطة.', 'Cuando supe la noticia, llamé a mi madre.|عندما علمتُ بالخبر، اتصلتُ بأمي.', 'Le di las gracias al vecino.|شكرتُ الجار.', 'Anoche vimos el partido en un bar.|ليلة أمس شاهدنا المباراة في بار.', 'Mi hijo pidió una beca para la universidad.|ابني طلب منحة للجامعة.', 'El niño durmió muy bien.|الطفل نام جيدًا جدًا.', 'Quise llamarte, pero no tuve tiempo.|أردتُ الاتصال بك، لكن لم يكن عندي وقت.', 'Los turistas trajeron muchos regalos.|السيّاح أحضروا هدايا كثيرة.', 'Condujimos de Madrid a Valencia.|قُدنا من مدريد إلى فالنسيا.'],
    err: [['Ayer yo tení una cita.', 'Ayer tuve una cita.', 'tener في الـ indefinido: tuve.'], ['Él hació los deberes.', 'Él hizo los deberes.', 'hacer مع él: hizo.'], ['Ellos dijieron la verdad.', 'Ellos dijeron la verdad.', 'بعد j نستخدم -eron.'], ['Yo estuví en Madrid.', 'Estuve en Madrid.', 'نهايات الجذور القوية بلا نبرة: estuve.'], ['Ella pedió un café.', 'Ella pidió un café.', 'pedir: e → i مع él/ella.'], ['Yo fuí al médico.', 'Fui al médico.', 'fui و fue بلا نبرة.']],
    cmp: { t: 'ser أم ir في fui؟', x: 'الصيغ واحدة، والسياق يحسم: بعد [[fui]] يأتي **a + مكان** ← ir: [[Fui a Sevilla]] (ذهبتُ). بعد [[fue]] تأتي **صفة أو اسم** ← ser: [[Fue increíble]] (كان رائعًا)، [[Fue presidente]] (كان رئيسًا).' },
    tip: 'تمرين يومي ممتاز: كل مساء اكتب 3 جمل عن يومك بالـ indefinido أو الـ perfecto. استخدم «مختبر القواعد» لمراجعة أي فعل تتردد فيه.',
    pr: [
      ['Ayer (yo) ___ (ir) al banco.', 'fui', 'ir في الـ indefinido: fui.'],
      ['El viaje ___ (ser) muy largo.', ['fue', 'fui', 'era', 'estuvo'], 0, 'ser مع él: fue.'],
      ['Yo ___ (tener) que trabajar el sábado.', 'tuve', 'tener → tuv- + e.'],
      ['¿Qué ___ (hacer) tú anoche?', 'hiciste', 'hacer → hic- + iste.'],
      ['Ellos ___ (decir) que no.', ['dijieron', 'dijeron', 'decieron', 'dicieron'], 1, 'j + eron.'],
      ['Mi madre ___ (venir) a España en 2019.', 'vino', 'venir → vin- + o.'],
      ['El niño ___ (dormir) diez horas.', ['dormió', 'durmió', 'duermió', 'durmío'], 1, 'o → u مع él.'],
      ['Nosotros no ___ (poder) ir.', 'pudimos', 'poder → pud- + imos.'],
      ['Ayer ___ mucho frío.', ['hizo', 'hació', 'hacía', 'fue'], 0, 'الطقس بـ hacer؛ hacer مع él: hizo.']
    ]
  });

  L({
    id: 'a2-04', t: 'Pretérito perfecto o pretérito indefinido', ta: 'Perfecto أم Indefinido؟ الاختيار الصحيح بين الماضيين',
    sum: 'المعيار الأهم في إسبانيا: هل الفترة الزمنية ما زالت مستمرة أم انتهت؟',
    meaning: 'هذا من أهم مواضيع DELE A2. القاعدة في **إسبانيا**: الـ [[perfecto]] للماضي داخل فترة **لم تنتهِ** أو غير محدّدة، والـ [[indefinido]] للماضي في فترة **انتهت**. الحدث نفسه قد يُروى بالزمنين حسب الظرف الزمني المستخدم.',
    when: ['Perfecto: [[hoy, esta mañana, esta semana, este año, alguna vez, nunca, ya, todavía no]]', 'Indefinido: [[ayer, anoche, el lunes, la semana pasada, el año pasado, en 2010, hace dos años, aquel día]]', 'إذا لم يُذكر ظرف زمني: perfecto إن كانت التجربة أو النتيجة مهمة الآن، و indefinido إن كنا نسرد قصة منتهية'],
    why: 'الإسبان يرون «اليوم» و«هذا الأسبوع» كإطار ما زالوا يعيشون فيه، فيستخدمون الـ perfecto حتى لحدث وقع قبل ساعات. أما «أمس» فقد أُغلق. ملاحظة: في أمريكا اللاتينية وجزر الكناري يُستخدم الـ indefinido أكثر، لكن امتحان DELE يقبل الاستخدام الإسباني بوضوح.',
    steps: ['ابحث عن الظرف الزمني في الجملة', 'هل تشمل الفترة اللحظة الحالية؟ (hoy، este mes...) ← perfecto', 'هل الفترة منتهية ومنفصلة عن الآن؟ (ayer، en 2018...) ← indefinido', 'هل هي تجربة حياتية دون تاريخ؟ ← perfecto؛ وإذا سُئلت «متى؟» ← indefinido'],
    formula: 'hoy/esta semana/alguna vez → he hablado · ayer/el año pasado/en 2016 → hablé',
    tables: [{ head: ['Pretérito perfecto', 'Pretérito indefinido'], es: [0, 1], rows: [['Hoy he ido al médico.', 'Ayer fui al médico.'], ['Esta semana hemos trabajado mucho.', 'La semana pasada trabajamos mucho.'], ['Este año he aprendido mucho.', 'El año pasado aprendí mucho.'], ['¿Has estado en Cádiz? — Sí, he estado dos veces.', '¿Cuándo estuviste? — Estuve en 2019.'], ['Todavía no he terminado.', 'Terminé hace una hora.'], ['Esta mañana me he levantado temprano.', 'El lunes me levanté temprano.']] }],
    forms: { aff: ['Este mes he leído dos libros; el mes pasado leí uno.|هذا الشهر قرأتُ كتابين؛ الشهر الماضي قرأتُ واحدًا.', 'He estado en Sevilla; fui en 2021.|زرتُ إشبيلية؛ ذهبتُ في 2021.'], neg: ['Hoy no he desayunado.|اليوم لم أفطر.', 'Ayer no desayuné.|أمس لم أفطر.'], q: ['¿Has hablado con el casero?|هل تكلّمتَ مع المالك؟', '¿Cuándo hablaste con él?|متى تكلّمتَ معه؟'] },
    ex: ['Esta mañana he llamado al ayuntamiento.|هذا الصباح اتصلتُ بالبلدية.', 'Ayer llamé al ayuntamiento.|أمس اتصلتُ بالبلدية.', 'Este verano hemos estado en la playa.|هذا الصيف ذهبنا إلى الشاطئ.', 'El verano pasado estuvimos en la montaña.|الصيف الماضي ذهبنا إلى الجبل.', '¿Has comido alguna vez gazpacho?|هل أكلتَ الغاثباتشو من قبل؟', 'Sí, lo comí en Sevilla hace dos años.|نعم، أكلته في إشبيلية قبل عامين.', 'Todavía no he recibido la resolución.|لم أستلم القرار بعد.', 'Recibí la resolución el 3 de marzo.|استلمتُ القرار في 3 مارس.', 'Hoy ha sido un día muy largo.|اليوم كان يومًا طويلًا جدًا.', 'Ayer fue un día muy largo.|أمس كان يومًا طويلًا جدًا.', 'Este año mi hijo ha empezado la universidad.|هذا العام بدأ ابني الجامعة.', 'En 2016 llegamos a España.|في 2016 وصلنا إلى إسبانيا.', 'Nunca he suspendido un examen.|لم أرسب في امتحان أبدًا.', 'Hace un rato he visto a tu hermano.|قبل قليل رأيتُ أخاك.', 'Hace un mes vi a tu hermano.|قبل شهر رأيتُ أخاك.', 'Últimamente hemos tenido muchos problemas con la luz.|مؤخرًا كان عندنا مشاكل كثيرة مع الكهرباء.'],
    err: [['Ayer he visto a Juan.', 'Ayer vi a Juan.', 'ayer ← indefinido.'], ['Hoy fui al mercado. (في إسبانيا)', 'Hoy he ido al mercado.', 'في إسبانيا: hoy ← perfecto.'], ['En 2016 he llegado a España.', 'En 2016 llegué a España.', 'سنة منتهية ← indefinido.'], ['¿Cuándo has llegado?', '¿Cuándo llegaste?', 'السؤال بـ cuándo يطلب وقتًا محددًا منتهيًا ← indefinido غالبًا.']],
    cmp: { t: 'hace + مدة', x: 'انتبه: [[hace un rato / hace cinco minutos]] (قبل قليل) مع perfecto عادةً في إسبانيا لأن الحدث قريب جدًا، لكن [[hace dos años / hace un mes]] مع indefinido.' },
    tip: 'في قسم القراءة والكتابة من DELE A2 يكثر هذا التمييز. اصنع لنفسك قاعدة سريعة: «هل أستطيع أن أضيف (اليوم/هذا...) للجملة؟ ← perfecto».',
    pr: [
      ['Esta mañana ___ al médico.', ['fui', 'he ido', 'iba', 'voy'], 1, 'esta mañana فترة مستمرة ← perfecto.'],
      ['El lunes pasado ___ al médico.', ['he ido', 'fui', 'iba', 'ha ido'], 1, 'el lunes pasado منتهٍ ← indefinido.'],
      ['¿___ alguna vez en Toledo?', ['Estuviste', 'Has estado', 'Estabas', 'Estás'], 1, 'تجربة في الحياة ← perfecto.'],
      ['En 2010 mi hijo ___ (terminar) el colegio.', 'terminó', 'سنة منتهية ← indefinido.'],
      ['Todavía no ___ (yo, hablar) con él.', 'he hablado', 'todavía no ← perfecto.'],
      ['Hace tres años ___ (nosotros, comprar) el coche.', 'compramos', 'hace tres años ← indefinido.'],
      ['Este año ___ mucho.', ['llovió', 'ha llovido', 'llovía', 'llueve'], 1, 'este año ← perfecto.'],
      ['Anoche no ___ bien.', ['he dormido', 'dormí', 'duermo', 'dormía'], 1, 'anoche منتهية ← indefinido.']
    ]
  });

  L({
    id: 'a2-05', t: 'El pretérito imperfecto', ta: 'الماضي الاعتيادي/الاستمراري: Pretérito imperfecto',
    sum: 'لوصف الماضي: كيف كانت الأمور، ماذا كنّا نفعل عادةً، الخلفية والظروف.',
    meaning: 'الـ [[imperfecto]] يصف الماضي **من الداخل** دون الاهتمام ببدايته ونهايته: العادات القديمة ([[De niño jugaba en la calle]] — في طفولتي كنتُ ألعب في الشارع)، والأوصاف ([[La casa era grande]])، والأحداث الجارية في لحظة ما ([[Llovía]]). يعادل في العربية «كان + يفعل».',
    when: ['العادات المتكررة في الماضي: [[Antes trabajaba en un taller.]] (مع: antes, de niño, siempre, todos los días, normalmente)', 'وصف الأشخاص والأماكن والأشياء في الماضي: [[Mi abuelo era alto y tenía bigote.]]', 'الخلفية والظروف في قصة: [[Hacía sol y había mucha gente.]]', 'الوقت والعمر في الماضي: [[Eran las diez. Tenía veinte años.]]', 'حدث جارٍ عندما وقع حدث آخر: [[Dormía cuando sonó el teléfono.]]', 'الطلب المهذّب: [[Quería pedir una cita.]] (كنتُ أريد = أودّ)'],
    why: 'الـ imperfecto هو «كاميرا الوصف» والـ indefinido هو «كاميرا الحدث». الأول يرسم المشهد، والثاني يحرّك القصة. وهو من **أسهل الأزمنة تصريفًا**: ثلاثة أفعال شاذة فقط في الإسبانية كلها!',
    steps: ['أفعال -ar: احذف -ar وأضف [[-aba, -abas, -aba, -ábamos, -abais, -aban]]', 'أفعال -er/-ir: احذف النهاية وأضف [[-ía, -ías, -ía, -íamos, -íais, -ían]]', 'الأفعال الشاذة الثلاثة فقط: [[ser (era), ir (iba), ver (veía)]]', 'لاحظ أن yo و él لهما نفس الصيغة: [[yo hablaba / él hablaba]] — استخدم الضمير عند الحاجة للوضوح', '[[hay]] تصبح [[había]] في الماضي (= كان يوجد)'],
    formula: 'raíz + -aba (ar) / -ía (er, ir) · ser→era, ir→iba, ver→veía',
    tables: [{ v: 'hablar', t: 'imperfecto' }, { v: 'tener', t: 'imperfecto' }, { v: 'vivir', t: 'imperfecto' }, { v: 'ser', t: 'imperfecto' }, { v: 'ir', t: 'imperfecto' }, { v: 'ver', t: 'imperfecto' }],
    forms: { aff: ['Cuando era joven, trabajaba en el campo.|عندما كنتُ شابًا كنتُ أعمل في الحقل.', 'En Siria vivíamos en una casa con jardín.|في سوريا كنّا نعيش في بيت بحديقة.'], neg: ['Antes no hablaba nada de español.|سابقًا لم أكن أتكلّم شيئًا من الإسبانية.', 'No había metro en mi ciudad.|لم يكن هناك مترو في مدينتي.'], q: ['¿Dónde vivías antes?|أين كنتَ تعيش سابقًا؟', '¿Qué hacías los fines de semana?|ماذا كنتَ تفعل في عطل نهاية الأسبوع؟'] },
    ex: ['De niño jugaba al fútbol con mis primos.|في طفولتي كنتُ ألعب كرة القدم مع أبناء عمّي.', 'Mi padre era profesor de matemáticas.|أبي كان معلّم رياضيات.', 'Todos los veranos íbamos al pueblo de mis abuelos.|كل صيف كنّا نذهب إلى قرية أجدادي.', 'En mi barrio había un mercado muy grande.|في حيّي كان يوجد سوق كبير جدًا.', 'Antes fumaba, pero ya no fumo.|سابقًا كنتُ أدخّن، لكني لم أعد أدخّن.', 'Eran las ocho y hacía mucho frío.|كانت الساعة الثامنة وكان الجو باردًا جدًا.', 'Cuando llegué a España, no conocía a nadie.|عندما وصلتُ إلى إسبانيا لم أكن أعرف أحدًا.', 'Mi casa tenía tres habitaciones y un patio.|بيتي كان فيه ثلاث غرف وفناء.', 'Mi madre siempre cocinaba los viernes.|أمي كانت تطبخ دائمًا أيام الجمعة.', 'Veíamos la tele todas las noches.|كنّا نشاهد التلفاز كل ليلة.', 'Estaba cansado porque trabajaba mucho.|كنتُ متعبًا لأني كنتُ أعمل كثيرًا.', 'Quería pedir información sobre el curso.|كنتُ أودّ طلب معلومات عن الدورة.', 'Mientras yo cocinaba, mi mujer leía.|بينما كنتُ أطبخ، كانت زوجتي تقرأ.', 'La vida en Alepo era muy diferente.|الحياة في حلب كانت مختلفة جدًا.', 'Tenía treinta años cuando nació mi primer hijo.|كان عمري ثلاثين عامًا عندما وُلد ابني الأول.', 'Normalmente me levantaba a las cinco.|عادةً كنتُ أنهض في الخامسة.'],
    err: [['Cuando era niño, jugué cada día.', 'Cuando era niño, jugaba cada día.', 'العادة المتكررة في الماضي ← imperfecto.'], ['Mi abuelo fue alto.', 'Mi abuelo era alto.', 'الوصف في الماضي ← imperfecto.'], ['Yo iba → yo ía', 'Yo iba.', 'ir شاذ: iba.'], ['Habían muchas personas.', 'Había muchas personas.', 'había (hay في الماضي) لا تُجمع أبدًا.'], ['Nosotros hablabamos', 'Nosotros hablábamos', 'nosotros في -ar تحمل نبرة: -ábamos.']],
    cmp: { t: 'imperfecto للوصف، indefinido للحدث', x: '[[Hacía buen tiempo (وصف) y fuimos a la playa (حدث).]] — كان الجو جميلًا فذهبنا إلى الشاطئ. سنتعمق في هذا في الدرس التالي.' },
    tip: 'في DELE A2 يُطلب أحيانًا وصف «كيف كانت حياتك في بلدك» أو «كيف كانت مدينتك»: هذه مهمة imperfecto بامتياز. اربطها بـ [[antes… ahora…]].',
    pr: [
      ['De niño (yo) ___ (vivir) en el campo.', 'vivía', '-ir مع yo: -ía.'],
      ['Mi abuela ___ (ser) muy simpática.', ['fue', 'era', 'estaba', 'es'], 1, 'وصف في الماضي ← era.'],
      ['Antes nosotros ___ (ir) a la playa cada verano.', 'íbamos', 'ir: íbamos (بنبرة).'],
      ['En mi pueblo ___ dos escuelas.', ['habían', 'había', 'hubieron', 'hay'], 1, 'había لا تُجمع.'],
      ['¿Qué ___ (hacer) tú los domingos?', 'hacías', '-er مع tú: -ías.'],
      ['Mientras yo ___ (cocinar), sonó el teléfono.', 'cocinaba', 'حدث جارٍ (خلفية) ← imperfecto.'],
      ['Cuando ___ (tener) 20 años, empecé a trabajar.', ['tuve', 'tenía', 'tengo', 'he tenido'], 1, 'العمر في الماضي ← imperfecto.']
    ]
  });

  L({
    id: 'a2-06', t: 'Indefinido o imperfecto: contar historias', ta: 'Indefinido أم Imperfecto؟ فن سرد القصص',
    sum: 'الـ imperfecto يرسم المشهد، والـ indefinido يروي الأحداث التي تحرّك القصة.',
    meaning: 'عندما نحكي قصة نستخدم الزمنين معًا: **الـ imperfecto للخلفية** (الوصف، الظروف، ما كان يحدث) و**الـ indefinido للأحداث** (ما حدث فجأة، الأفعال المتتابعة). [[Estaba en el metro (خلفية) cuando alguien me robó la cartera (حدث).]]',
    when: ['خلفية + حدث يقطعها: [[Cenábamos cuando llegó mi hermano.]]', 'سلسلة أحداث: كلها indefinido: [[Me levanté, desayuné y salí.]]', 'وصف مشهد: كله imperfecto: [[Era de noche, llovía y no había nadie.]]', 'عادة قديمة (imperfecto) / مرة واحدة (indefinido): [[Siempre iba en bus, pero ese día fui en taxi.]]'],
    why: 'تخيّل فيلمًا: الـ imperfecto هو الديكور والإضاءة والموسيقى، والـ indefinido هو ما يفعله الممثلون. لا يوجد زمن «أصح» من الآخر، بل لكل منهما وظيفة.',
    steps: ['اسأل: هل هذا الفعل يحرّك القصة إلى الأمام (ثم حدث…)؟ ← indefinido', 'هل يصف كيف كانت الأمور، أو ما كان يجري في الخلفية؟ ← imperfecto', 'كلمات تساعدك: [[de repente, entonces, un día, de pronto, ese día]] ← indefinido؛ [[mientras, siempre, normalmente, antes, de niño]] ← imperfecto', 'تركيب شائع: [[imperfecto + cuando + indefinido]]'],
    formula: 'Imperfecto (fondo) + cuando + Indefinido (acción)',
    tables: [{ head: ['Imperfecto (الخلفية)', 'Indefinido (الحدث)'], es: [0, 1], rows: [['Hacía sol…', '…y salimos a pasear.'], ['Estaba en casa…', '…cuando sonó el timbre.'], ['Mi hijo tenía 10 años…', '…cuando llegamos a España.'], ['Siempre comíamos a las dos…', '…pero ese día comimos a las cuatro.'], ['Mientras esperaba el autobús…', '…empezó a llover.']] }],
    forms: { aff: ['Iba por la calle cuando vi a un amigo.|كنتُ أمشي في الشارع عندما رأيتُ صديقًا.', 'Llovía mucho, así que cogimos un taxi.|كانت تمطر كثيرًا، فأخذنا سيارة أجرة.'], neg: ['No sabía la respuesta, por eso no dije nada.|لم أكن أعرف الإجابة، لذلك لم أقل شيئًا.', 'No había nadie cuando llegué.|لم يكن هناك أحد عندما وصلت.'], q: ['¿Qué hacías cuando te llamé?|ماذا كنتَ تفعل عندما اتصلتُ بك؟', '¿Cómo era la casa que visitaste?|كيف كان البيت الذي زرته؟'] },
    ex: ['Eran las siete de la mañana cuando sonó el despertador.|كانت السابعة صباحًا عندما رنّ المنبّه.', 'Mientras desayunaba, escuché las noticias.|بينما كنتُ أفطر، استمعتُ إلى الأخبار.', 'Hacía frío, por eso me puse el abrigo.|كان الجو باردًا، لذلك ارتديتُ المعطف.', 'El metro estaba lleno y no encontré sitio.|كان المترو ممتلئًا ولم أجد مكانًا.', 'Cuando llegué a la oficina, la puerta estaba cerrada.|عندما وصلتُ إلى المكتب كان الباب مغلقًا.', 'Mi jefe hablaba por teléfono y no me vio.|مديري كان يتكلّم بالهاتف ولم يرني.', 'De repente, se fue la luz.|فجأة، انقطعت الكهرباء.', 'Normalmente comía en casa, pero ese día comí en un restaurante.|عادةً كنتُ آكل في البيت، لكن ذلك اليوم أكلتُ في مطعم.', 'El médico me preguntó qué me pasaba.|الطبيب سألني ماذا بي.', 'Le dije que me dolía el estómago.|قلتُ له إن معدتي تؤلمني.', 'Cuando era joven, conocí a mi mujer en una boda.|عندما كنتُ شابًا، تعرّفتُ على زوجتي في عرس.', 'Ella llevaba un vestido azul y sonreía.|كانت ترتدي فستانًا أزرق وتبتسم.', 'Estábamos en el parque cuando empezó a llover.|كنّا في الحديقة عندما بدأت تمطر.', 'No sabía que tu hermano vivía en Madrid.|لم أكن أعرف أن أخاك يعيش في مدريد.', 'Aquel día llegué tarde porque había mucho tráfico.|ذلك اليوم وصلتُ متأخرًا لأنه كان هناك ازدحام كبير.', 'Entramos, nos sentamos y pedimos la comida.|دخلنا وجلسنا وطلبنا الطعام.'],
    err: [['Cuando llegué, mi hijo dormió.', 'Cuando llegué, mi hijo dormía.', 'ما كان يجري في الخلفية ← imperfecto.'], ['Estuve en casa cuando sonaba el teléfono.', 'Estaba en casa cuando sonó el teléfono.', 'الخلفية imperfecto، والحدث المقاطِع indefinido.'], ['Ayer hacía la compra, cociné y limpiaba.', 'Ayer hice la compra, cociné y limpié.', 'سلسلة أحداث مكتملة ← كلها indefinido.'], ['Era un día bonito. Hacía sol. De repente empezaba a llover.', '…De repente empezó a llover.', 'de repente تقدّم حدثًا ← indefinido.']],
    cmp: { t: 'نفس الفعل بمعنيين', x: '[[Conocía a Juan]] = كنتُ أعرف خوان (معرفة سابقة مستمرة). [[Conocí a Juan]] = تعرّفتُ على خوان (لحظة التعارف). وكذلك [[sabía]] (كنتُ أعرف) / [[supe]] (علمتُ، عرفتُ فجأة).' },
    tip: 'في القسم الكتابي لـ DELE A2 قد يُطلب منك أن تحكي «موقفًا طريفًا أو صعبًا حدث لك». ابدأ بمشهد بالـ imperfecto، ثم انتقل إلى الأحداث بالـ indefinido، واختم بالنتيجة.',
    pr: [
      ['Yo ___ (dormir) cuando sonó el teléfono.', ['dormí', 'dormía', 'he dormido', 'duermo'], 1, 'خلفية جارية ← imperfecto.'],
      ['Estaba en el parque cuando ___ (empezar) a llover.', 'empezó', 'حدث يقطع الخلفية ← indefinido.'],
      ['Ayer me levanté, ___ (desayunar) y salí.', 'desayuné', 'سلسلة أحداث ← indefinido.'],
      ['Cuando era niño, ___ (vivir) en un pueblo.', 'vivía', 'وصف/عادة في الماضي ← imperfecto.'],
      ['De repente, ___ la luz.', ['se iba', 'se fue', 'se va', 'se ha ido'], 1, 'de repente ← indefinido.'],
      ['La casa ___ muy vieja y no tenía calefacción.', ['fue', 'era', 'estuvo', 'ha sido'], 1, 'وصف ← imperfecto.'],
      ['«تعرّفتُ على زوجتي في 1995» =', ['Conocía a mi mujer en 1995.', 'Conocí a mi mujer en 1995.', 'Sabía a mi mujer en 1995.', 'He conocido a mi mujer en 1995.'], 1, 'لحظة التعارف ← indefinido، والسنة منتهية.']
    ]
  });

  L({
    id: 'a2-07', t: 'Los pronombres de objeto directo e indirecto', ta: 'ضمائر المفعول به المباشر وغير المباشر',
    sum: 'lo, la, los, las / le, les ومتى يصبح le → se. طريقة الإسبان لعدم تكرار الكلمات.',
    meaning: 'لتجنّب تكرار الاسم نستخدم الضمائر. **المفعول المباشر** (OD) يجيب عن «ماذا؟/من؟»: [[Compro el pan → Lo compro]]. **المفعول غير المباشر** (OI) يجيب عن «لِمن؟»: [[Doy el pan a Ana → Le doy el pan]]. وعندما يجتمعان يأتي OI أولًا ثم OD: [[Se lo doy]] (أعطيها إياه).',
    when: ['OD للأشياء والأشخاص المتلقّين للفعل مباشرة: [[¿Tienes el NIE? — Sí, lo tengo.]]', 'OI للشخص الذي يستفيد أو يستقبل: [[Le escribo a mi hermano.]]', 'اجتماعهما: [[¿Me das la llave? — Sí, te la doy.]]'],
    why: 'الإسبان يكرهون التكرار، والضمائر تجعل الكلام طبيعيًا وسريعًا. في المحادثة الحقيقية ستسمع [[lo, la, le, se lo]] في كل جملة تقريبًا.',
    steps: ['حدّد هل الاسم مفعول مباشر (ماذا؟) أم غير مباشر (لمن؟)', 'اختر الضمير: OD ← [[me, te, lo/la, nos, os, los/las]]؛ OI ← [[me, te, le, nos, os, les]]', 'ضع الضمير **قبل الفعل المصرّف**: [[Lo compro. No lo compro.]]', 'مع المصدر أو الـ gerundio يمكن إلصاقه بالنهاية: [[Voy a comprarlo / Lo voy a comprar]]', 'إذا اجتمعا: OI قبل OD، وإذا كان OI = le/les وOD = lo/la/los/las يصبح le/les ← **se**: [[Le doy el libro → Se lo doy]]'],
    formula: '(no) + OI + OD + verbo · le/les + lo/la → se lo/se la',
    tables: [{ head: ['الشخص', 'مفعول مباشر (OD)', 'مفعول غير مباشر (OI)'], es: [1, 2], rows: [['yo', 'me', 'me'], ['tú', 'te', 'te'], ['él / usted (مذكر)', 'lo', 'le (→ se)'], ['ella / usted (مؤنث)', 'la', 'le (→ se)'], ['nosotros', 'nos', 'nos'], ['vosotros', 'os', 'os'], ['ellos / ustedes', 'los', 'les (→ se)'], ['ellas / ustedes', 'las', 'les (→ se)']] },
      { head: ['الجملة الأصلية', 'مع الضمائر'], es: [0, 1], rows: [['Compro el periódico.', 'Lo compro.'], ['Veo a mi hermana.', 'La veo.'], ['Escribo a mis padres.', 'Les escribo.'], ['Doy el regalo a mi mujer.', 'Se lo doy.'], ['Explico las reglas a los alumnos.', 'Se las explico.'], ['Voy a enviar la carta a Juan.', 'Voy a enviársela. / Se la voy a enviar.']] }],
    forms: { aff: ['¿El contrato? Lo firmé ayer.|العقد؟ وقّعته أمس.', 'A mi madre le compré flores.|لأمي اشتريتُ لها زهورًا.'], neg: ['No lo sé.|لا أعرفه/لا أعرف.', 'No se lo digas a nadie.|لا تقله لأحد.'], q: ['¿La conoces?|هل تعرفها؟', '¿Me lo puedes explicar?|هل يمكنك أن تشرحه لي؟'] },
    ex: ['¿Tienes la tarjeta sanitaria? — Sí, la tengo aquí.|هل معك البطاقة الصحية؟ — نعم، معي هنا.', '¿Dónde compraste el móvil? — Lo compré en el centro.|أين اشتريت الهاتف؟ — اشتريته في المركز.', 'Las llaves… no las encuentro.|المفاتيح… لا أجدها.', 'A mis hijos los llevo al colegio cada mañana.|أولادي أوصلهم إلى المدرسة كل صباح.', 'Le pregunté la dirección a un policía.|سألتُ شرطيًا عن العنوان.', 'El médico me dio una receta.|الطبيب أعطاني وصفة.', '¿Me la puedes dar? — Sí, ahora te la doy.|هل يمكنك أن تعطيني إياها؟ — نعم، الآن أعطيك إياها.', 'Les escribí un correo a los profesores.|كتبتُ رسالة للمعلّمين.', 'Se lo expliqué todo al abogado.|شرحتُ كل شيء للمحامي.', '¿Quién te lo dijo?|من قال لك ذلك؟', 'No te entiendo, ¿puedes repetirlo?|لا أفهمك، هل يمكنك أن تعيده؟', 'Estoy leyendo el libro. Lo estoy leyendo. / Estoy leyéndolo.|أقرأ الكتاب. أنا أقرؤه.', 'Mi vecina nos ayudó mucho.|جارتنا ساعدتنا كثيرًا.', 'A Juan lo conozco desde hace años.|خوان أعرفه منذ سنوات.', 'Os llamo mañana.|أتصل بكم غدًا.', 'Le he enviado los documentos al gestor.|أرسلتُ الوثائق إلى المكتب الإداري (الوكيل).'],
    err: [['Le lo doy.', 'Se lo doy.', 'le + lo يتحول إلى se lo.'], ['Compro lo.', 'Lo compro.', 'الضمير قبل الفعل المصرّف.'], ['La dije la verdad. (لها)', 'Le dije la verdad.', '«قلتُ لها» مفعول غير مباشر ← le (حتى للمؤنث).'], ['Lo voy a comprarlo.', 'Lo voy a comprar. / Voy a comprarlo.', 'الضمير مرة واحدة فقط: قبل أو بعد.'], ['Veo María.', 'Veo a María.', 'المفعول المباشر إذا كان شخصًا يسبقه a.']],
    cmp: { t: 'le أم lo؟', x: 'السؤال: هل الشخص **يتلقّى الفعل مباشرة** (أراه، أساعده، أدعوه) أم **يستقبل شيئًا** (أعطيه، أقول له، أكتب له)؟ [[Lo veo]] (أراه) / [[Le hablo]] (أتكلّم إليه). ملاحظة: في إسبانيا يُقبل [[le]] بدل [[lo]] للرجل كمفعول مباشر ([[le veo]]) ويسمّى leísmo المقبول.' },
    tip: 'في المكاتب الإدارية ستسمع: [[¿Me lo puede firmar aquí?]] (هل يمكنك توقيعه لي هنا؟) و[[Se lo enviamos por correo]] (سنرسله إليك بالبريد).',
    pr: [
      ['¿El pan? Ya ___ compré.', ['la', 'lo', 'le', 'los'], 1, 'el pan مذكر مفرد مفعول مباشر ← lo.'],
      ['¿Las facturas? No ___ tengo.', 'las', 'مؤنث جمع ← las.'],
      ['___ dije la verdad a mi mujer.', ['La', 'Le', 'Lo', 'Se'], 1, '«قلت لها» غير مباشر ← le.'],
      ['Doy el libro a Juan. → ___ doy.', ['Le lo', 'Se lo', 'Lo le', 'Se le'], 1, 'le + lo ← se lo.'],
      ['¿Me das la sal? — Sí, ahora ___ doy.', 'te la', 'OI (te) + OD (la).'],
      ['Voy a llamar a mis padres. → Voy a ___.', 'llamarlos', 'الضمير يلتصق بالمصدر.', ['llamarles']],
      ['«لا أعرفها (شخص)» =', ['No la conozco.', 'No le conozco a ella.', 'No conozco la.', 'La no conozco.'], 0, 'no + la + فعل.']
    ]
  });

  L({
    id: 'a2-08', t: 'El imperativo afirmativo y negativo', ta: 'صيغة الأمر: الإثبات والنهي',
    sum: 'لإعطاء التعليمات والنصائح والطلبات: habla / hable / no hables.',
    meaning: 'الأمر ([[imperativo]]) يُستخدم للتعليمات والطلبات والنصائح والدعوات. له صيغ لـ [[tú, usted, vosotros, ustedes]]. والنهي (الأمر المنفي) يستخدم **صيغة مختلفة** مأخوذة من المضارع الالتزامي (subjuntivo).',
    when: ['التعليمات (وصفات، اتجاهات): [[Gire a la derecha. Añade sal.]]', 'النصائح: [[Descansa más. No trabajes tanto.]]', 'الطلبات والدعوات: [[Pasa, pasa. Siéntese, por favor.]]', 'في المكاتب ستسمع صيغة usted: [[Firme aquí. Espere su turno.]]'],
    why: 'في إسبانيا الأمر **ليس قلّة أدب**؛ يُستخدم كثيرًا ويُلطَّف بالنبرة و[[por favor]]. أما صيغة usted فهي التي ستسمعها من الموظفين والأطباء.',
    steps: ['tú (إثبات): نفس صيغة él في الحاضر: [[habla, come, escribe, piensa, duerme]]', 'tú الشاذة: [[ten, ven, pon, sal, haz, di, ve, sé]]', 'usted/ustedes: نأخذ yo في الحاضر، نحذف -o، ونعكس حرف العلّة (-ar → -e، -er/-ir → -a): [[hablo → hable, como → coma, tengo → tenga]]', 'vosotros (إثبات): المصدر مع r → d: [[hablad, comed, id]]', 'النهي لكل الأشخاص: no + صيغة الـ subjuntivo: [[no hables, no hable, no habléis, no hablen]]', 'الضمائر تلتصق بالأمر المثبت ([[siéntese, dámelo]]) وتسبق المنفي ([[no se siente, no me lo des]])'],
    formula: 'tú: habla / no hables · usted: hable / no hable · vosotros: hablad / no habléis',
    tables: [{ v: 'hablar', t: 'imperativo' }, { v: 'hablar', t: 'imperativoNeg' }, { v: 'comer', t: 'imperativo' }, { v: 'tener', t: 'imperativo' }, { v: 'hacer', t: 'imperativo' }, { v: 'ir', t: 'imperativo' }, { v: 'decir', t: 'imperativo' }, { v: 'poner', t: 'imperativo' }],
    forms: { aff: ['Coge la segunda calle a la izquierda.|خذ الشارع الثاني على اليسار.', 'Rellene este formulario, por favor.|املأ هذه الاستمارة من فضلك.'], neg: ['No te preocupes.|لا تقلق.', 'No aparque aquí.|لا تركن هنا.'], q: ['¿Puedes cerrar la puerta? (بديل مهذّب للأمر)|هل يمكنك إغلاق الباب؟', '¿Me ayuda, por favor?|هل تساعدني من فضلك؟'] },
    ex: ['Siga recto y gire a la derecha.|تابع مباشرة ثم انعطف يمينًا.', 'Espere aquí, por favor.|انتظر هنا من فضلك.', 'Firme en la parte de abajo.|وقّع في الأسفل.', 'Tome esta pastilla cada ocho horas.|تناول هذه الحبة كل ثماني ساعات.', 'No beba alcohol con este medicamento.|لا تشرب الكحول مع هذا الدواء.', 'Pasa, pasa, estás en tu casa.|تفضّل، تفضّل، البيت بيتك.', 'Ven aquí un momento.|تعال إلى هنا لحظة.', 'Haz los deberes antes de cenar.|أنجز واجباتك قبل العشاء.', 'No toques eso, está caliente.|لا تلمس ذلك، إنه ساخن.', 'Dime la verdad.|قل لي الحقيقة.', 'Pon la mesa, por favor.|جهّز المائدة من فضلك.', 'Sal de la autopista en la salida 12.|اخرج من الطريق السريع عند المخرج 12.', 'Llamad antes de venir.|اتصلوا قبل أن تأتوا.', 'No lleguéis tarde.|لا تتأخروا.', 'Siéntese, por favor.|اجلس من فضلك.', 'Tráigame la cuenta, por favor.|أحضر لي الحساب من فضلك.', 'Tened cuidado con el tráfico.|انتبهوا للسير.'],
    err: [['No habla tan rápido. (للنهي)', 'No hables tan rápido.', 'النهي يستخدم الـ subjuntivo: hables.'], ['Hace los deberes. (أمر لـ tú)', 'Haz los deberes.', 'hacer مع tú في الأمر: haz.'], ['Me lo da. (أمر لـ usted)', 'Démelo.', 'في الأمر المثبت تلتصق الضمائر بالفعل.'], ['No dime.', 'No me digas.', 'في النهي: no + ضمير + subjuntivo.'], ['Venga aquí. (لصديق)', 'Ven aquí.', 'مع tú: ven؛ venga لـ usted (وتستخدم أيضًا بمعنى «هيا!»).']],
    cmp: { t: 'الأمر المباشر أم الطلب المهذّب؟', x: 'بين الأصدقاء الأمر عادي: [[Pásame la sal.]] مع الغرباء أو للطلب الأكثر تهذيبًا استخدم سؤالًا: [[¿Me pasa la sal, por favor?]] أو [[¿Podría pasarme la sal?]]' },
    tip: 'تعليمات الامتحان الرسمي نفسها مكتوبة بالأمر (usted): [[Lea el texto. Marque la opción correcta. Escriba un correo.]] من المهم فهمها بسرعة.',
    pr: [
      ['(tú) ___ la puerta, por favor. (cerrar)', 'cierra', 'tú = صيغة él في الحاضر: cierra.'],
      ['(usted) ___ aquí. (firmar)', 'firme', 'usted: firmo → firme.'],
      ['(tú) No ___ tan tarde. (llegar)', ['llegas', 'llega', 'llegues', 'llegue'], 2, 'النهي مع tú: no llegues.'],
      ['(tú) ___ los deberes. (hacer)', ['hace', 'haz', 'haga', 'haces'], 1, 'hacer → haz.'],
      ['(usted) ___ asiento. (tomar)', 'tome', 'usted: tome.'],
      ['(vosotros) ___ cuidado. (tener)', 'tened', 'vosotros: r → d.'],
      ['(tú) No te ___. (preocupar)', 'preocupes', 'no + te + subjuntivo.'],
      ['(tú) ___ aquí. (venir)', ['Viene', 'Ven', 'Venga', 'Vienes'], 1, 'venir → ven.']
    ]
  });

  L({
    id: 'a2-09', t: 'Comparativos y superlativos', ta: 'المقارنة والتفضيل',
    sum: 'más… que، menos… que، tan… como، el más… de، و -ísimo.',
    meaning: 'للمقارنة بين شيئين نستخدم: **التفوّق** [[más + صفة + que]]، **الأقلّ** [[menos + صفة + que]]، **التساوي** [[tan + صفة + como]]. وللتفضيل المطلق: [[el/la más + صفة + de]] (الأكبر في…)، أو اللاحقة [[-ísimo]] (جدًا جدًا).',
    when: ['مقارنة الأماكن والأسعار والأشخاص: [[Madrid es más grande que Toledo.]]', 'مع الأسماء: [[más/menos + اسم + que]]، والتساوي: [[tanto/a/os/as + اسم + como]]', 'مع الأفعال: فعل + [[más que / tanto como]]: [[Trabajo más que tú.]]', 'التفضيل: [[Es el piso más barato del barrio.]]'],
    why: 'المقارنة ضرورية في الامتحانات (مقارنة حياتك هنا وفي بلدك) وفي الحياة (مقارنة الأسعار والشقق والعروض).',
    steps: ['اختر نوع المقارنة: أكثر / أقل / مساوٍ', 'طابِق الصفة مع الاسم الأول: [[La casa es más grande que el piso.]]', 'تذكّر الأشكال الشاذة: [[bueno → mejor، malo → peor، grande (سنًّا) → mayor، pequeño (سنًّا) → menor]]', 'tan قبل الصفة/الظرف، tanto قبل الاسم ويطابقه: [[tanto dinero, tanta gente, tantos libros]]', 'للتفضيل المطلق: [[caro → carísimo، fácil → facilísimo، rico → riquísimo]]'],
    formula: 'más/menos + adj + que · tan + adj + como · el/la más + adj + de',
    tables: [{ head: ['النوع', 'التركيب', 'مثال'], es: [1, 2], rows: [['أكثر', 'más + adj. + que', 'El metro es más rápido que el autobús.'], ['أقل', 'menos + adj. + que', 'Este piso es menos caro que el otro.'], ['مساوٍ (صفة)', 'tan + adj. + como', 'Mi hija es tan alta como yo.'], ['مساوٍ (اسم)', 'tanto/a/os/as + n. + como', 'No tengo tanto tiempo como antes.'], ['مساوٍ (فعل)', 'verbo + tanto como', 'Ahora no trabajo tanto como antes.'], ['تفضيل', 'el/la/los/las más + adj. + de', 'Es la ciudad más bonita de España.'], ['مطلق', 'adj. + -ísimo/a', 'El examen fue facilísimo.']] },
      { head: ['الصفة', 'المقارنة الشاذة', 'مثال'], es: [0, 1, 2], rows: [['bueno / bien', 'mejor', 'Este médico es mejor que el otro.'], ['malo / mal', 'peor', 'Hoy me siento peor que ayer.'], ['grande (العمر)', 'mayor', 'Mi hermano es mayor que yo.'], ['pequeño (العمر)', 'menor', 'Mi hija es menor que mi hijo.']] }],
    forms: { aff: ['La vida en Madrid es más cara que en mi pueblo.|الحياة في مدريد أغلى منها في قريتي.', 'Este es el mejor restaurante del barrio.|هذا أفضل مطعم في الحي.'], neg: ['El tren no es tan caro como el avión.|القطار ليس غاليًا مثل الطائرة.', 'No hay tanta gente como ayer.|لا يوجد ناس كثيرون مثل أمس.'], q: ['¿Cuál es más barato?|أيّهما أرخص؟', '¿Quién es el mayor de tus hijos?|من الأكبر بين أولادك؟'] },
    ex: ['El AVE es más rápido que el autobús.|قطار AVE أسرع من الحافلة.', 'Mi piso nuevo es más grande que el anterior.|شقتي الجديدة أكبر من السابقة.', 'En verano Sevilla es más calurosa que Madrid.|في الصيف إشبيلية أحرّ من مدريد.', 'El español es menos difícil que el alemán.|الإسبانية أقل صعوبة من الألمانية.', 'Mi hijo es tan alto como yo.|ابني طويل مثلي.', 'Ahora tengo más tiempo libre que antes.|الآن لديّ وقت فراغ أكثر من قبل.', 'No gano tanto dinero como en mi país.|لا أكسب مالًا كثيرًا مثلما كنتُ في بلدي.', 'Hoy hay menos gente que ayer.|اليوم يوجد ناس أقل من أمس.', 'Mi hermana es mayor que yo: tiene 62 años.|أختي أكبر مني: عمرها 62 سنة.', 'Este café es mejor que el de ayer.|هذه القهوة أفضل من قهوة أمس.', 'El Mulhacén es la montaña más alta de la Península.|موليهاثين أعلى جبل في شبه الجزيرة.', 'El Teide es el pico más alto de España.|تيدي أعلى قمة في إسبانيا.', 'Madrid es la ciudad más poblada de España.|مدريد أكثر مدن إسبانيا سكانًا.', 'La comida estaba riquísima.|كان الطعام لذيذًا جدًا جدًا.', 'El examen fue dificilísimo.|كان الامتحان صعبًا جدًا جدًا.', 'Trabajo tanto como mi mujer.|أعمل بقدر ما تعمل زوجتي.'],
    err: [['más bueno que', 'mejor que', 'المقارنة من bueno: mejor.'], ['tan alto que', 'tan alto como', 'التساوي: tan… como.'], ['Tengo tan tiempo como tú.', 'Tengo tanto tiempo como tú.', 'قبل الاسم: tanto/a.'], ['Es la ciudad más bonita en España.', 'Es la ciudad más bonita de España.', 'في التفضيل نستخدم de.'], ['más mayor', 'mayor', 'mayor مقارِنة أصلًا.']],
    cmp: { t: 'más que / más de', x: 'نستخدم [[más de]] (وليس más que) قبل **الأرقام**: [[Hay más de cien personas]] (أكثر من مئة شخص). و[[más que]] للمقارنة بين شيئين: [[Gano más que tú]].' },
    tip: 'سؤال شائع في الشفهي: [[¿Qué diferencias hay entre la vida en España y en tu país?]] استخدم المقارنات بثقة.',
    pr: [
      ['El metro es ___ rápido ___ el autobús.', ['más / que', 'más / como', 'tan / que', 'más / de'], 0, 'التفوّق: más… que.'],
      ['Mi hijo es tan alto ___ yo.', 'como', 'tan… como.'],
      ['Este restaurante es ___ que el otro. (bueno)', ['más bueno', 'mejor', 'más mejor', 'buenísimo'], 1, 'bueno → mejor.'],
      ['Hay ___ de cien personas.', 'más', 'قبل الأرقام: más de.'],
      ['No tengo ___ paciencia como antes.', ['tan', 'tanta', 'tanto', 'tantas'], 1, 'paciencia مؤنث مفرد ← tanta.'],
      ['Es el río más largo ___ España.', 'de', 'التفضيل مع de.'],
      ['La comida está muy rica → está ___.', 'riquísima', 'rico → riquísimo/a (c → qu).']
    ]
  });

  L({
    id: 'a2-10', t: 'El futuro simple', ta: 'المستقبل البسيط',
    sum: 'hablaré, comeré, viviré: للتوقعات والوعود والخطط البعيدة.',
    meaning: 'الـ [[futuro simple]] يعبّر عن المستقبل: [[Mañana lloverá]] (ستمطر غدًا). وهو من أسهل الأزمنة: **المصدر كاملًا + نهاية واحدة لكل المجموعات**. يُستخدم أكثر في التوقعات والوعود والكتابة، بينما في الكلام اليومي عن الخطط القريبة يفضّل الإسبان [[ir a + infinitivo]].',
    when: ['التوقعات: [[Mañana hará sol. Creo que aprobarás.]]', 'الوعود: [[Te llamaré esta noche. Te lo prometo.]]', 'الخطط البعيدة أو غير المؤكدة: [[Algún día viviré en la costa.]]', 'مع [[cuando + subjuntivo]] (B1): [[Cuando tenga la nacionalidad, viajaré.]]', 'الشرط الممكن: [[Si estudias, aprobarás.]]'],
    why: 'تاريخيًا كان المستقبل في الإسبانية «المصدر + haber»: [[hablar he]] (لديّ أن أتكلّم)، ثم التصق الفعل المساعد بالمصدر فأصبح [[hablaré]]. لهذا النهايات تشبه تصريف haber: é، ás، á…',
    steps: ['خذ المصدر كاملًا دون حذف شيء: hablar، comer، vivir', 'أضف النهايات (نفسها للمجموعات الثلاث): [[-é, -ás, -á, -emos, -éis, -án]]', 'الأفعال الشاذة تغيّر الجذر فقط والنهايات ثابتة: [[tener → tendr-، poner → pondr-، salir → saldr-، venir → vendr-، poder → podr-، saber → sabr-، haber → habr-، querer → querr-، hacer → har-، decir → dir-]]', 'كل الصيغ تحمل نبرة ما عدا nosotros: [[hablaremos]]'],
    formula: 'infinitivo + -é, -ás, -á, -emos, -éis, -án',
    tables: [{ v: 'hablar', t: 'futuro' }, { v: 'tener', t: 'futuro' }, { v: 'hacer', t: 'futuro' }, { v: 'decir', t: 'futuro' }, { v: 'poder', t: 'futuro' }, { v: 'salir', t: 'futuro' }],
    forms: { aff: ['El año que viene haré el examen DELE.|العام القادم سأقدّم امتحان DELE.', 'Mañana hará buen tiempo.|غدًا سيكون الطقس جميلًا.'], neg: ['No te olvidaré nunca.|لن أنساك أبدًا.', 'No tendremos clase el lunes.|لن يكون عندنا درس يوم الإثنين.'], q: ['¿Vendrás a la fiesta?|هل ستأتي إلى الحفلة؟', '¿Qué harás cuando te jubiles?|ماذا ستفعل عندما تتقاعد؟'] },
    ex: ['El próximo año solicitaré la nacionalidad española.|العام القادم سأتقدّم بطلب الجنسية الإسبانية.', 'Te llamaré en cuanto llegue.|سأتصل بك فور وصولي.', 'Mañana lloverá en el norte.|غدًا ستمطر في الشمال.', 'Seguro que aprobarás el examen.|بالتأكيد ستنجح في الامتحان.', 'En el futuro, los coches serán eléctricos.|في المستقبل ستكون السيارات كهربائية.', 'Tendremos que esperar unas semanas.|سيتعيّن علينا الانتظار بضعة أسابيع.', 'Mis hijos vendrán en Navidad.|أولادي سيأتون في عيد الميلاد.', 'Saldremos a las ocho en punto.|سنخرج في الثامنة تمامًا.', 'Lo haré mañana sin falta.|سأفعله غدًا بلا تأخير.', '¿Podrás ayudarme el sábado?|هل ستستطيع مساعدتي يوم السبت؟', 'Te diré la verdad.|سأقول لك الحقيقة.', 'Habrá mucha gente en el centro.|سيكون هناك ناس كثيرون في المركز.', 'Si estudias cada día, hablarás muy bien.|إذا درستَ كل يوم، ستتكلّم جيدًا جدًا.', 'Pondremos la mesa en el jardín.|سنضع الطاولة في الحديقة.', 'Algún día visitaré todas las ciudades de España.|يومًا ما سأزور كل مدن إسبانيا.', 'Sabremos los resultados en un mes.|سنعرف النتائج خلال شهر.'],
    err: [['Yo teneré tiempo.', 'Tendré tiempo.', 'tener شاذ: tendr-.'], ['Haceré la comida.', 'Haré la comida.', 'hacer: har-.'], ['Nosotros hablarémos', 'hablaremos', 'nosotros بلا نبرة.'], ['Mañana voy a lloverá.', 'Mañana va a llover. / Mañana lloverá.', 'اختر إما ir a + مصدر أو المستقبل البسيط.'], ['Diceré', 'Diré', 'decir: dir-.']],
    cmp: { t: 'futuro أم ir a + infinitivo؟', x: '[[Voy a ver a mi hermano mañana]] — خطة قريبة مؤكدة (الأكثر استخدامًا في الكلام). [[Algún día veré a mi hermano]] — توقع أو أمنية أبعد. ولكلاهما نفس المعنى تقريبًا في كثير من السياقات.' },
    tip: 'المستقبل يُستخدم أيضًا للتخمين في الحاضر (B2): [[¿Qué hora es? — Serán las diez]] (لعلّها العاشرة).',
    pr: [
      ['Mañana (yo) ___ (llamar) al médico.', 'llamaré', 'المصدر + é.'],
      ['El año que viene ___ (nosotros, tener) más tiempo.', 'tendremos', 'tener → tendr- + emos.'],
      ['¿Tú ___ (venir) a la boda?', ['vienes', 'venirás', 'vendrás', 'vendras'], 2, 'venir → vendr- + ás.'],
      ['Mañana ___ (hacer) frío.', 'hará', 'hacer → har- + á.'],
      ['Te ___ (decir) la verdad.', ['diré', 'deciré', 'diceré', 'dire'], 0, 'decir → dir- + é.'],
      ['Si estudias, ___ (aprobar).', 'aprobarás', 'شرط ممكن: si + حاضر، مستقبل.'],
      ['Mis padres ___ (salir) el lunes.', 'saldrán', 'salir → saldr- + án.']
    ]
  });

  L({
    id: 'a2-11', t: 'Estar + gerundio y otras perífrasis (acabar de, empezar a, volver a, dejar de, seguir)', ta: 'الحدث الجاري (estar + gerundio) وتراكيب الفعل الأخرى',
    sum: 'estoy hablando، acabo de llegar، he dejado de fumar، sigo estudiando.',
    meaning: '[[estar + gerundio]] يصف فعلًا **يجري في هذه اللحظة** أو في هذه الفترة: [[Estoy cocinando]] = أنا أطبخ (الآن). الـ [[gerundio]] صيغة ثابتة تنتهي بـ [[-ando]] (لأفعال -ar) و[[-iendo]] (لأفعال -er/-ir). وهناك تراكيب أخرى مهمة تصف بداية الفعل ونهايته وتكراره.',
    when: ['حدث جارٍ الآن: [[¿Qué estás haciendo? — Estoy estudiando.]]', 'فترة مؤقتة حالية: [[Este mes estoy trabajando de noche.]]', '[[acabar de + inf.]] = فعلتُ للتو: [[Acabo de llegar.]]', '[[empezar a / ponerse a + inf.]] = بدأ: [[Empecé a estudiar español en 2017.]]', '[[volver a + inf.]] = أعاد / فعل مرة أخرى: [[Vuelve a llamar más tarde.]]', '[[dejar de + inf.]] = توقّف عن: [[He dejado de fumar.]]', '[[seguir / continuar + gerundio]] = ما زال يفعل: [[Sigo viviendo en Madrid.]]'],
    why: 'الحاضر البسيط في الإسبانية واسع جدًا، لذلك يُستخدم estar + gerundio للتأكيد على أن الحدث **يجري الآن تحديدًا**. والتراكيب الأخرى تعطي دقة زمنية لا تحتاج معها إلى أزمنة معقدة.',
    steps: ['صرّف estar حسب الفاعل والزمن: estoy, estás, está...', 'كوّن الـ gerundio: -ar → [[-ando]] (hablando)؛ -er/-ir → [[-iendo]] (comiendo, viviendo)', 'إذا كان الجذر ينتهي بحرف علّة: [[-yendo]]: [[leer → leyendo، oír → oyendo، ir → yendo]]', 'أفعال -ir ذات تغيّر الجذر: e → i، o → u: [[pedir → pidiendo، decir → diciendo، dormir → durmiendo، venir → viniendo]]', 'الضمائر: قبل estar أو ملتصقة بالـ gerundio مع نبرة: [[Lo estoy leyendo / Estoy leyéndolo]]'],
    formula: 'estar + gerundio (-ando / -iendo) · acabar de / volver a / dejar de + infinitivo',
    tables: [{ v: 'estar', t: 'presente', title: 'estar + gerundio' },
      { head: ['المصدر', 'Gerundio', 'مثال'], es: [0, 1, 2], rows: [['hablar', 'hablando', 'Estoy hablando por teléfono.'], ['comer', 'comiendo', 'Están comiendo.'], ['escribir', 'escribiendo', 'Estoy escribiendo un correo.'], ['leer', 'leyendo', 'Mi hijo está leyendo.'], ['ir', 'yendo', 'Estoy yendo al trabajo.'], ['pedir', 'pidiendo', 'Está pidiendo ayuda.'], ['decir', 'diciendo', '¿Qué estás diciendo?'], ['dormir', 'durmiendo', 'El niño está durmiendo.'], ['venir', 'viniendo', 'Ya está viniendo.'], ['oír', 'oyendo', '¿Me estás oyendo?']] },
      { head: ['التركيب', 'المعنى', 'مثال'], es: [0, 2], rows: [['acabar de + inf.', 'للتو', 'Acabo de salir del médico.'], ['empezar a + inf.', 'يبدأ', 'Empiezo a trabajar mañana.'], ['ponerse a + inf.', 'يشرع فجأة', 'Se puso a llorar.'], ['volver a + inf.', 'يعيد / مرة أخرى', 'No vuelvas a hacerlo.'], ['dejar de + inf.', 'يتوقف عن', 'Dejé de fumar hace un año.'], ['seguir + gerundio', 'ما زال', 'Sigo buscando piso.'], ['llevar + tiempo + gerundio', 'منذ… وهو يفعل', 'Llevo seis años viviendo aquí.']] }],
    forms: { aff: ['Ahora estoy preparando el examen del CCSE.|الآن أحضّر لامتحان CCSE.', 'Acabo de recibir tu mensaje.|استلمتُ رسالتك للتو.'], neg: ['No estoy trabajando este mes.|لا أعمل هذا الشهر.', 'No he dejado de estudiar.|لم أتوقف عن الدراسة.'], q: ['¿Qué estás haciendo?|ماذا تفعل (الآن)؟', '¿Sigues viviendo en el mismo piso?|هل ما زلت تعيش في نفس الشقة؟'] },
    ex: ['Perdona, ahora no puedo hablar, estoy conduciendo.|عذرًا، لا أستطيع التكلّم الآن، أنا أقود.', 'Mi mujer está hablando con la vecina.|زوجتي تتكلّم مع الجارة.', 'Los niños están durmiendo, habla bajo.|الأطفال نائمون، تكلّم بصوت منخفض.', 'Estamos buscando un piso más grande.|نحن نبحث عن شقة أكبر.', 'Está lloviendo mucho.|إنها تمطر كثيرًا.', '¿Me estás escuchando?|هل تستمع إليّ؟', 'Acabo de llegar a casa.|وصلتُ إلى البيت للتو.', 'El autobús acaba de salir.|الحافلة غادرت للتو.', 'Empecé a estudiar español hace tres años.|بدأتُ دراسة الإسبانية قبل ثلاث سنوات.', '¿Puede volver a explicarlo, por favor?|هل يمكنك أن تشرحه مرة أخرى من فضلك؟', 'Mi padre dejó de trabajar a los 65 años.|أبي توقف عن العمل في سن الخامسة والستين.', 'Sigo estudiando todos los días.|ما زلتُ أدرس كل يوم.', 'Llevo ocho años viviendo en España.|أعيش في إسبانيا منذ ثماني سنوات.', 'Estoy leyendo un libro sobre la historia de España.|أقرأ كتابًا عن تاريخ إسبانيا.', 'De repente, el niño se puso a llorar.|فجأة، بدأ الطفل يبكي.', 'Estaba durmiendo cuando me llamaste.|كنتُ نائمًا عندما اتصلتَ بي.'],
    err: [['Estoy comendo.', 'Estoy comiendo.', 'أفعال -er: -iendo.'], ['Estoy leiendo.', 'Estoy leyendo.', 'بعد حرف علّة: -yendo.'], ['Acabo llegar.', 'Acabo de llegar.', 'acabar تحتاج de.'], ['Sigo a estudiar.', 'Sigo estudiando.', 'seguir + gerundio.'], ['Estoy teniendo un coche.', 'Tengo un coche.', 'لا نستخدم estar + gerundio مع أفعال الحالة الدائمة (tener، ser، conocer...).']],
    cmp: { t: 'الحاضر أم estar + gerundio؟', x: '[[Trabajo en un hotel]] = هذا عملي عمومًا. [[Estoy trabajando en un hotel]] = أعمل في فندق (حاليًا، مؤقتًا) أو (الآن في هذه اللحظة). ولا تستخدم estar + gerundio للمستقبل كما في الإنجليزية: «سأسافر غدًا» = [[Viajo / Voy a viajar mañana]].' },
    tip: 'جملة ذهبية للمقابلات وامتحان الجنسية: [[Llevo … años viviendo en España y sigo estudiando español.]]',
    pr: [
      ['Ahora mismo (yo) ___ (estudiar).', 'estoy estudiando', 'estar + gerundio.'],
      ['Mi hijo está ___ (leer) un libro.', ['leendo', 'leyendo', 'leiendo', 'leído'], 1, 'leer → leyendo.'],
      ['El niño está ___ (dormir).', 'durmiendo', 'o → u: durmiendo.'],
      ['Acabo ___ llegar.', 'de', 'acabar de + مصدر.'],
      ['¿Puede volver ___ repetirlo?', ['de', 'a', 'en', '—'], 1, 'volver a + مصدر.'],
      ['He dejado ___ fumar.', 'de', 'dejar de.'],
      ['Llevo cinco años ___ (vivir) aquí.', 'viviendo', 'llevar + مدة + gerundio.'],
      ['Sigo ___ (buscar) trabajo.', 'buscando', 'seguir + gerundio.']
    ]
  });

  L({
    id: 'a2-12', t: 'POR y PARA', ta: 'الفرق بين POR و PARA',
    sum: 'para = الهدف والوجهة والمستفيد والموعد النهائي. por = السبب والمرور والوسيلة والتبادل والمدة.',
    meaning: 'الحرفان [[por]] و [[para]] يُترجمان غالبًا «من أجل/لـ»، لكن لكل منهما منطق: [[para]] ينظر **إلى الأمام** (الهدف، الوجهة، المستفيد)، و[[por]] ينظر **إلى الخلف أو إلى الطريق** (السبب، المرور، الوسيلة، المقابل).',
    when: ['PARA للهدف والغاية: [[Estudio para aprobar.]]', 'PARA للمستفيد والوجهة والموعد النهائي: [[Es para ti. Salgo para Madrid. Lo necesito para el lunes.]]', 'PARA للرأي والاستخدام: [[Para mí, es fácil. Una crema para la piel.]]', 'POR للسبب والدافع: [[Lo hago por mis hijos.]]', 'POR للمرور والوسيلة: [[Paseo por el parque. Te llamo por teléfono.]]', 'POR للثمن والوقت العام والتكرار: [[Lo compré por 20 euros. Por la mañana. Dos veces por semana.]]', 'POR للفاعل في المبني للمجهول: [[escrito por Cervantes]]'],
    why: 'فكّر في سهم: [[para]] → (إلى أين أذهب؟ لماذا؟ الهدف). [[por]] ← (بسبب ماذا؟ عبر ماذا؟). [[Trabajo por mi familia]] (بسبب حبي لعائلتي، دافعي) / [[Trabajo para una empresa]] (لصالح شركة، المستفيد).',
    steps: ['اسأل: هل أتحدث عن هدف أو مستفيد أو وجهة أو موعد؟ ← para', 'هل أتحدث عن سبب/دافع، أو مكان أمرّ فيه، أو وسيلة، أو ثمن، أو جزء من اليوم؟ ← por', 'احفظ التعابير الجاهزة: [[por favor, por fin, por eso, por ejemplo, por supuesto, por cierto, por lo menos, para siempre]]'],
    formula: 'para → objetivo / destino / destinatario · por ← causa / medio / lugar de paso / precio',
    tables: [{ head: ['PARA', 'POR'], es: [0, 1], rows: [['Estudio para la nacionalidad. (الهدف)', 'Estudio por la noche. (وقت عام)'], ['Este regalo es para ti. (المستفيد)', 'Gracias por el regalo. (السبب)'], ['Voy para el centro. (الوجهة)', 'Paseo por el centro. (المرور داخل)'], ['Para el viernes, por favor. (موعد)', 'Te lo envío por correo. (الوسيلة)'], ['Para mí, es caro. (رأي)', 'Lo compré por 10 €. (الثمن)'], ['Trabajo para Renfe. (لصالح)', 'Trabajo por mis hijos. (دافع)']] }],
    forms: { aff: ['Estudio español para hablar con mis vecinos.|أدرس الإسبانية لأتكلّم مع جيراني.', 'Gracias por tu ayuda.|شكرًا على مساعدتك.'], neg: ['No es para mí.|ليس لي.', 'No pasé por tu casa.|لم أمرّ ببيتك.'], q: ['¿Para qué sirve este papel?|لماذا تصلح هذه الورقة؟ (ما الغرض)', '¿Por qué llegas tarde?|لماذا تتأخر؟ (ما السبب)'] },
    ex: ['Necesito el certificado para la oficina de extranjería.|أحتاج الشهادة لمكتب الأجانب.', 'Estas flores son para mi mujer.|هذه الزهور لزوجتي.', 'El tren para Toledo sale a las diez.|القطار المتجه إلى طليطلة يغادر في العاشرة.', 'Tengo que terminar el trabajo para mañana.|يجب أن أنهي العمل قبل الغد.', 'Para mí, el español es más fácil que el inglés.|بالنسبة لي، الإسبانية أسهل من الإنجليزية.', 'Hemos venido a España por nuestros hijos.|جئنا إلى إسبانيا من أجل أولادنا (بسببهم).', 'Me gusta pasear por la Plaza Mayor.|أحب التنزّه في الساحة الكبرى.', 'Hablamos por teléfono cada semana.|نتكلّم بالهاتف كل أسبوع.', 'Compré el sofá por trescientos euros.|اشتريتُ الأريكة بثلاثمئة يورو.', 'Voy al gimnasio dos veces por semana.|أذهب إلى النادي مرتين في الأسبوع.', 'Por la tarde estudio español.|بعد الظهر أدرس الإسبانية.', 'La catedral fue construida por los árabes.|الكاتدرائية بُنيت من قِبل العرب.', 'Gracias por todo.|شكرًا على كل شيء.', 'Por fin he aprobado el examen.|أخيرًا نجحتُ في الامتحان.', 'No había autobuses; por eso llegué tarde.|لم تكن هناك حافلات؛ لذلك وصلتُ متأخرًا.', '¿Para qué necesitas el pasaporte? — Para el banco.|لماذا تحتاج الجواز؟ — للبنك.'],
    err: [['Gracias para todo.', 'Gracias por todo.', 'الشكر بسبب شيء ← por.'], ['Estudio por aprobar.', 'Estudio para aprobar.', 'الهدف ← para.'], ['Te llamo para teléfono.', 'Te llamo por teléfono.', 'الوسيلة ← por.'], ['Lo compré para 20 euros.', 'Lo compré por 20 euros.', 'الثمن ← por.'], ['¿Para qué no vienes?', '¿Por qué no vienes?', 'السؤال عن السبب: por qué.']],
    cmp: { t: '¿Por qué? / ¿Para qué?', x: '[[¿Por qué estudias español?]] يسأل عن **السبب**: [[Porque vivo en España.]] أما [[¿Para qué estudias español?]] فيسأل عن **الهدف**: [[Para conseguir la nacionalidad.]]' },
    tip: 'لا تقلق إذا أخطأت أحيانًا؛ حتى المتعلّمون المتقدمون يخطئون هنا. احفظ التعابير الجاهزة أولًا فهي الأكثر شيوعًا.',
    pr: [
      ['Este regalo es ___ ti.', ['por', 'para'], 1, 'المستفيد ← para.'],
      ['Gracias ___ tu ayuda.', ['por', 'para'], 0, 'سبب الشكر ← por.'],
      ['Estudio ___ aprobar el DELE.', ['por', 'para'], 1, 'الهدف ← para.'],
      ['Paseamos ___ el parque.', ['por', 'para'], 0, 'المرور داخل مكان ← por.'],
      ['Lo necesito ___ el lunes.', ['por', 'para'], 1, 'الموعد النهائي ← para.'],
      ['Te llamo ___ teléfono.', 'por', 'الوسيلة ← por.'],
      ['Compré el coche ___ 5.000 euros.', 'por', 'الثمن ← por.'],
      ['___ mí, es una buena idea.', 'Para', 'الرأي ← para mí.']
    ]
  });
})(window.ECM);
