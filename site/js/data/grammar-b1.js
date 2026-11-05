/* Grammar course — level B1 */
(function (ECM) {
  'use strict';
  var G = ECM.GRAMMAR = ECM.GRAMMAR || [];
  function L(o) { o.lv = 'B1'; G.push(o); }

  L({
    id: 'b1-01', t: 'El presente de subjuntivo: formación', ta: 'المضارع الالتزامي (Subjuntivo): كيف يُبنى',
    sum: 'صيغة الفعل للرغبة والشك والمشاعر وما لم يتحقق بعد. نبنيها من صيغة yo في الحاضر.',
    meaning: 'الـ [[subjuntivo]] ليس زمنًا بل **صيغة** (modo). الـ [[indicativo]] الذي درسناه حتى الآن يقدّم المعلومة كحقيقة، أما الـ subjuntivo فيقدّم الفعل كـ**رغبة أو احتمال أو شعور أو شيء غير متحقق**. يأتي غالبًا بعد [[que]] في جملة ثانية: [[Quiero que vengas]] = أريد أن تأتي.\nفي العربية يشبه إلى حدّ ما الفعل المضارع المنصوب بعد «أن»: «أريد **أن تأتيَ**».',
    when: ['بعد أفعال الرغبة والطلب: [[Quiero que…, Espero que…, Te pido que…]]', 'بعد المشاعر: [[Me alegra que…, Siento que…]]', 'بعد التقييم: [[Es importante que…, Es necesario que…]]', 'بعد الشك والنفي: [[No creo que…, Dudo que…]]', 'بعد [[ojalá]] (يا ليت/إن شاء الله): [[Ojalá apruebe.]]', 'بعد [[cuando]] للمستقبل، و[[para que]]: [[Cuando llegues, llámame.]]'],
    why: 'الـ subjuntivo يحتاج **فاعلين مختلفين** غالبًا: [[Quiero aprobar]] (أنا أريد وأنا أنجح ← مصدر) / [[Quiero que mi hijo apruebe]] (أنا أريد وابني ينجح ← que + subjuntivo). لأن الفعل الثاني ليس حقيقة بل رغبة الفاعل الأول.',
    steps: ['خذ صيغة **yo** في المضارع: [[hablo, como, vivo, tengo, hago, conozco]]', 'احذف [[-o]]: habl-، com-، viv-، teng-، hag-، conozc-', 'أضف النهايات «المعكوسة»: أفعال -ar تأخذ نهايات -e: [[-e, -es, -e, -emos, -éis, -en]]؛ أفعال -er/-ir تأخذ نهايات -a: [[-a, -as, -a, -amos, -áis, -an]]', 'لهذا السبب الأفعال الشاذة في yo تكون شاذة في كل الـ subjuntivo: [[tengo → tenga، hago → haga، digo → diga، salgo → salga]]', 'الأفعال الشاذة كليًا (6): [[ser → sea، estar → esté، ir → vaya، haber → haya، saber → sepa، dar → dé]]', 'تغيّرات إملائية: [[buscar → busque، llegar → llegue، empezar → empiece، coger → coja]]'],
    formula: 'yo (presente) − o + e (verbos -ar) / a (verbos -er, -ir)',
    tables: [{ v: 'hablar', t: 'subjuntivo' }, { v: 'comer', t: 'subjuntivo' }, { v: 'vivir', t: 'subjuntivo' }, { v: 'tener', t: 'subjuntivo' }, { v: 'hacer', t: 'subjuntivo' }, { v: 'ser', t: 'subjuntivo' }, { v: 'ir', t: 'subjuntivo' }, { v: 'estar', t: 'subjuntivo' }, { v: 'saber', t: 'subjuntivo' }, { v: 'pensar', t: 'subjuntivo', sub: 'e > ie' }, { v: 'dormir', t: 'subjuntivo', sub: 'o > ue / u' }, { v: 'pedir', t: 'subjuntivo', sub: 'e > i' }],
    forms: { aff: ['Espero que tengas un buen día.|أتمنى أن يكون لك يوم جميل.', 'Es importante que traigas el pasaporte.|من المهم أن تُحضر جواز السفر.'], neg: ['No creo que llueva hoy.|لا أظن أنها ستمطر اليوم.', 'No quiero que te preocupes.|لا أريد أن تقلق.'], q: ['¿Quieres que te ayude?|هل تريد أن أساعدك؟', '¿Es necesario que vaya en persona?|هل من الضروري أن أذهب شخصيًا؟'] },
    ex: ['Quiero que mis hijos estudien en la universidad.|أريد أن يدرس أولادي في الجامعة.', 'Espero que el examen sea fácil.|آمل أن يكون الامتحان سهلًا.', 'Ojalá haga buen tiempo mañana.|يا ليت يكون الطقس جميلًا غدًا.', 'Ojalá apruebe el DELE a la primera.|إن شاء الله أنجح في DELE من المرة الأولى.', 'El médico quiere que descanse una semana.|الطبيب يريد أن أرتاح أسبوعًا.', 'Es necesario que pidas cita previa.|من الضروري أن تطلب موعدًا مسبقًا.', 'Te pido que hables más despacio.|أطلب منك أن تتكلّم ببطء أكثر.', 'Me alegra que estés aquí.|يسعدني أنك هنا.', 'No creo que el banco abra el sábado.|لا أظن أن البنك يفتح يوم السبت.', 'Cuando tenga tiempo, te llamo.|عندما يكون لديّ وقت، أتصل بك.', 'Te lo explico para que lo entiendas.|أشرحه لك لكي تفهمه.', 'Es mejor que vayamos en metro.|الأفضل أن نذهب بالمترو.', 'Mi mujer prefiere que cenemos en casa.|زوجتي تفضّل أن نتعشّى في البيت.', 'Siento que no puedas venir.|يؤسفني أنك لا تستطيع المجيء.', 'Necesito que me digas la verdad.|أحتاج أن تقول لي الحقيقة.', 'Que tengas buen viaje.|رحلة سعيدة (أتمنى أن تكون لك رحلة طيبة).', 'Que te mejores pronto.|أتمنى لك الشفاء العاجل.'],
    err: [['Quiero que vienes.', 'Quiero que vengas.', 'بعد quiero que ← subjuntivo؛ venir: vengo → venga.'], ['Espero que tienes suerte.', 'Espero que tengas suerte.', 'بعد espero que ← subjuntivo.'], ['Quiero que yo apruebe.', 'Quiero aprobar.', 'إذا كان الفاعل واحدًا نستخدم المصدر.'], ['Ojalá que haces…', 'Ojalá hagas…', 'ojalá دائمًا مع subjuntivo.'], ['Es importante que estudias.', 'Es importante que estudies.', 'بعد es importante que ← subjuntivo.']],
    cmp: { t: 'Indicativo أم Subjuntivo؟', x: '[[Sé que vienes]] (أعرف أنك آتٍ ← معلومة: indicativo). [[Quiero que vengas]] (أريد أن تأتي ← رغبة: subjuntivo). [[Creo que viene]] (أظن أنه آتٍ ← رأي مثبت: indicativo). [[No creo que venga]] (لا أظن أنه آتٍ ← شك: subjuntivo).' },
    tip: 'التمنيات بالـ subjuntivo شائعة جدًا في الحياة اليومية: [[¡Que aproveche!]] (بالهناء والشفاء)، [[¡Que te vaya bien!]] (بالتوفيق)، [[¡Que descanses!]] (نومًا هنيئًا)، [[¡Que te mejores!]] (شفاك الله).',
    pr: [
      ['Quiero que tú ___ (venir) mañana.', 'vengas', 'venir: yo vengo → venga ← vengas.'],
      ['Espero que el examen ___ (ser) fácil.', ['es', 'sea', 'será', 'esté'], 1, 'ser في الـ subjuntivo: sea.'],
      ['Ojalá ___ (hacer) sol.', 'haga', 'hacer: hago → haga.'],
      ['Es importante que ___ (vosotros, estudiar) cada día.', 'estudiéis', '-ar → -éis.'],
      ['No creo que el banco ___ (abrir) hoy.', ['abre', 'abra', 'abrirá', 'abrió'], 1, 'الشك (no creo que) ← subjuntivo: abra.'],
      ['El médico quiere que (yo) ___ (dormir) más.', 'duerma', 'dormir: duermo → duerma.'],
      ['Quiero ___ (aprobar) el examen. (أنا)', ['que apruebe', 'aprobar', 'que apruebo', 'apruebe'], 1, 'نفس الفاعل ← مصدر.'],
      ['Es necesario que ustedes ___ (ir) a la oficina.', 'vayan', 'ir → vaya ← vayan.']
    ]
  });

  L({
    id: 'b1-02', t: 'El subjuntivo para expresar deseos, peticiones y consejos', ta: 'الـ Subjuntivo للتعبير عن الرغبات والطلبات والنصائح',
    sum: 'querer que، pedir que، aconsejar que، recomendar que، prohibir que، ojalá.',
    meaning: 'عندما **نؤثّر في سلوك شخص آخر** (نريد منه، نطلب منه، ننصحه، نمنعه) يأتي فعله في الـ subjuntivo: [[Te aconsejo que descanses]] = أنصحك أن ترتاح. السبب: فعل الشخص الآخر ليس حقيقة بعد، بل هو ما نرغب فيه.',
    when: ['الرغبة: [[querer, desear, preferir, esperar + que]]', 'الطلب: [[pedir, rogar, exigir + que]]', 'النصيحة والتوصية: [[aconsejar, recomendar, sugerir + que]]', 'الأمر والمنع والسماح: [[mandar, ordenar, prohibir, permitir + que]]', 'الأمنية: [[ojalá (que) + subjuntivo]]'],
    why: 'هذه الأفعال كلها تحمل معنى «التأثير». ومع أفعال الطلب والنصيحة يكون هناك ضمير مفعول غير مباشر يدلّ على الشخص: [[Le pido que…، Te recomiendo que…]].',
    steps: ['الجملة الأولى: فاعل + فعل التأثير (indicativo): [[El médico me recomienda]]', 'أضف [[que]]', 'الجملة الثانية: الفعل في الـ subjuntivo بفاعل مختلف: [[que camine todos los días]]', 'إذا كان الفاعل واحدًا: مصدر بلا que: [[Prefiero caminar.]]', 'مع pedir/recomendar يمكن أيضًا المصدر: [[Te recomiendo caminar]] (أقل شيوعًا في الكلام الرسمي)'],
    formula: 'verbo de influencia + que + subjuntivo (sujetos diferentes)',
    tables: [{ head: ['الفعل', 'المعنى', 'مثال'], es: [0, 2], rows: [['querer que', 'يريد أن', 'Quiero que me escuches.'], ['preferir que', 'يفضّل أن', 'Prefiero que vengas pronto.'], ['esperar que', 'يأمل أن', 'Espero que todo salga bien.'], ['pedir que', 'يطلب أن', 'Le pido que repita.'], ['aconsejar / recomendar que', 'ينصح بأن', 'Te recomiendo que leas más.'], ['necesitar que', 'يحتاج أن', 'Necesito que me ayudes.'], ['prohibir que', 'يمنع أن', 'Prohíben que se fume aquí.'], ['permitir / dejar que', 'يسمح بأن', 'No dejan que entremos.'], ['ojalá', 'يا ليت / إن شاء الله', 'Ojalá llueva.']] }, { v: 'poder', t: 'subjuntivo' }, { v: 'venir', t: 'subjuntivo' }],
    forms: { aff: ['El profesor nos pide que hagamos los ejercicios.|المعلم يطلب منا أن نحلّ التمارين.', 'Te aconsejo que llegues pronto.|أنصحك أن تصل مبكرًا.'], neg: ['No quiero que gastes tanto.|لا أريد أن تصرف كثيرًا.', 'Mis padres no permitían que saliera solo. (B2)|والداي لم يسمحا أن أخرج وحدي.'], q: ['¿Quieres que te acompañe?|هل تريد أن أرافقك؟', '¿Qué me recomiendas que haga?|ماذا تنصحني أن أفعل؟'] },
    ex: ['Te recomiendo que visites Granada en primavera.|أنصحك أن تزور غرناطة في الربيع.', 'El casero quiere que paguemos antes del día cinco.|المالك يريد أن ندفع قبل اليوم الخامس.', 'Mi médico me aconseja que coma menos sal.|طبيبي ينصحني أن آكل ملحًا أقل.', 'Le pido que me envíe el documento por correo.|أطلب منك (حضرتك) أن ترسل لي الوثيقة بالبريد.', 'Prefiero que hablemos en persona.|أفضّل أن نتكلّم شخصيًا.', 'Ojalá encuentre un trabajo pronto.|يا ليت أجد عملًا قريبًا.', 'Necesito que firme aquí.|أحتاج أن توقّع هنا.', 'En la biblioteca prohíben que se hable alto.|في المكتبة يمنعون الكلام بصوت عالٍ.', 'Mis hijos quieren que les compre un móvil.|أولادي يريدون أن أشتري لهم هاتفًا.', 'El profesor sugiere que repasemos el subjuntivo.|المعلم يقترح أن نراجع الـ subjuntivo.', 'Espero que tu madre se recupere pronto.|آمل أن تتعافى أمك قريبًا.', 'Os ruego que guardéis silencio.|أرجوكم أن تلتزموا الصمت.', 'No dejan que aparquemos en esta calle.|لا يسمحون لنا بالركن في هذا الشارع.', 'Mi mujer desea que pasemos el verano en la costa.|زوجتي ترغب أن نقضي الصيف على الساحل.', 'Quiero que sepas que estoy muy agradecido.|أريدك أن تعرف أنني ممتنّ جدًا.', '¿Quiere que le traiga un vaso de agua?|هل تريد (حضرتك) أن أحضر لك كأس ماء؟'],
    err: [['Te recomiendo que vas al médico.', 'Te recomiendo que vayas al médico.', 'النصيحة ← subjuntivo.'], ['Quiero que vengas tú mañana. (صحيح) / Quiero tú vengas.', 'Quiero que vengas.', 'لا يمكن حذف que.'], ['Le pido que me ayuda.', 'Le pido que me ayude.', 'pedir que ← subjuntivo.'], ['Espero que no llueve.', 'Espero que no llueva.', 'esperar que ← subjuntivo.']],
    cmp: { t: 'decir que: معلومة أم أمر؟', x: '[[Mi hijo dice que estudia mucho]] (يقول إنه يدرس كثيرًا ← نقل معلومة: indicativo). [[Mi madre me dice que estudie más]] (أمي تقول لي أن أدرس أكثر ← أمر/طلب: subjuntivo). نفس الفعل، معنيان مختلفان.' },
    tip: 'في رسائل DELE الكتابية: [[Te escribo para pedirte que…]] و[[Te recomiendo que…]] تراكيب ممتازة ترفع مستوى كتابتك.',
    pr: [
      ['Te aconsejo que ___ (descansar).', 'descanses', 'نصيحة ← subjuntivo.'],
      ['El profesor quiere que ___ (nosotros, leer) más.', 'leamos', 'leer → lea ← leamos.'],
      ['Ojalá ___ (tú, tener) suerte.', 'tengas', 'tener → tenga ← tengas.'],
      ['Le pido que me ___ (llamar) mañana.', ['llama', 'llame', 'llamará', 'llamar'], 1, 'pedir que ← llame.'],
      ['Mi hija dice que ___ (estar) cansada. (معلومة)', ['está', 'esté', 'estar', 'estará'], 0, 'نقل معلومة ← indicativo.'],
      ['Mi madre me dice que ___ (volver) pronto. (أمر)', ['vuelvo', 'vuelva', 'volver', 'volví'], 1, 'أمر ← subjuntivo.'],
      ['Prefiero ___ (ir) en tren. (أنا)', 'ir', 'نفس الفاعل ← مصدر.'],
      ['Necesitamos que nos ___ (vosotros, ayudar).', 'ayudéis', 'vosotros -ar ← -éis.']
    ]
  });

  L({
    id: 'b1-03', t: 'El subjuntivo con emociones y valoraciones', ta: 'الـ Subjuntivo مع المشاعر والتقييمات',
    sum: 'me alegra que، me molesta que، es normal que، es una pena que...',
    meaning: 'عندما **نعبّر عن شعور أو تقييم** تجاه فعل شخص آخر، يأتي ذلك الفعل في الـ subjuntivo، **حتى لو كان حقيقة**: [[Me alegra que estés bien]] (يسعدني أنك بخير — أنت فعلًا بخير). السبب: التركيز ليس على المعلومة بل على **ردّة فعلنا العاطفية** تجاهها.',
    when: ['المشاعر: [[me alegra, me encanta, me gusta, me molesta, me preocupa, me da miedo, siento, me sorprende + que]]', 'التقييمات (es + صفة + que): [[es bueno, es malo, es normal, es raro, es importante, es necesario, es lógico, es una pena + que]]', 'لكن التقييمات التي تؤكد الحقيقة تأخذ indicativo: [[es verdad, es cierto, es evidente, está claro + que]] (سندرسها في الدرس التالي)'],
    why: 'هذه نقطة مفاجئة للمتعلّم: الإسبانية لا تسأل «هل هو حقيقي؟» بل «هل أقدّمه كمعلومة جديدة، أم أعلّق عليه؟». التعليق العاطفي أو التقييمي ← subjuntivo.',
    steps: ['فعل الشعور (مثل gustar): ضمير + فعل: [[Me preocupa]]', 'أو تعبير تقييمي: [[Es normal]]', 'أضف que + فاعل مختلف + subjuntivo: [[que mi hijo no duerma bien]]', 'نفس الفاعل أو تعميم ← مصدر: [[Me alegra verte. Es importante dormir bien.]]'],
    formula: 'me alegra / es normal + que + subjuntivo  ·  me alegra / es normal + infinitivo',
    tables: [{ head: ['التعبير', 'المعنى', 'مثال'], es: [0, 2], rows: [['Me alegra que', 'يسعدني أن', 'Me alegra que vengas.'], ['Me molesta que', 'يزعجني أن', 'Me molesta que hagan ruido.'], ['Me preocupa que', 'يقلقني أن', 'Me preocupa que no coma.'], ['Siento que', 'يؤسفني أن', 'Siento que estés enfermo.'], ['Me sorprende que', 'يفاجئني أن', 'Me sorprende que no lo sepas.'], ['Es normal que', 'من الطبيعي أن', 'Es normal que estés nervioso.'], ['Es una pena que', 'من المؤسف أن', 'Es una pena que te vayas.'], ['Es mejor que', 'من الأفضل أن', 'Es mejor que esperes.'], ['Es increíble que', 'لا يُصدَّق أن', 'Es increíble que cueste tanto.']] }],
    forms: { aff: ['Me encanta que mis nietos me visiten.|يسعدني جدًا أن يزورني أحفادي.', 'Es lógico que tengas dudas.|من المنطقي أن يكون لديك شكوك.'], neg: ['No me gusta que llegues tarde.|لا يعجبني أن تتأخر.', 'No es normal que haga tanto calor en octubre.|ليس من الطبيعي أن يكون الجو حارًا هكذا في أكتوبر.'], q: ['¿Te molesta que abra la ventana?|هل يزعجك أن أفتح النافذة؟', '¿Es necesario que lleve fotos?|هل من الضروري أن أُحضر صورًا؟'] },
    ex: ['Me alegra mucho que hayas aprobado. (B1+)|يسعدني كثيرًا أنك نجحت.', 'Me preocupa que mi hijo trabaje tantas horas.|يقلقني أن ابني يعمل ساعات كثيرة.', 'Siento mucho que no te encuentres bien.|يؤسفني كثيرًا أنك لست على ما يرام.', 'Es normal que al principio no entiendas todo.|من الطبيعي ألّا تفهم كل شيء في البداية.', 'Es una pena que el museo esté cerrado.|من المؤسف أن المتحف مغلق.', 'Me molesta que los vecinos pongan la música alta.|يزعجني أن الجيران يرفعون صوت الموسيقى.', 'Es importante que los niños duerman bien.|من المهم أن ينام الأطفال جيدًا.', 'Me sorprende que hables tan bien español.|يفاجئني أنك تتكلّم الإسبانية جيدًا هكذا.', 'Es raro que no haya nadie en la oficina.|من الغريب ألّا يكون أحد في المكتب.', 'Nos encanta que haga sol los domingos.|نحب كثيرًا أن تكون الشمس مشرقة أيام الأحد.', 'Es mejor que lleves paraguas.|من الأفضل أن تأخذ مظلة.', 'Me da miedo que se pierda en la ciudad.|أخاف أن يضيع في المدينة.', 'Es increíble que el alquiler sea tan caro.|لا يُصدَّق أن الإيجار غالٍ هكذا.', 'Es fundamental que conozcas tus derechos.|من الأساسي أن تعرف حقوقك.', 'Me alegra verte. (نفس الفاعل)|يسعدني أن أراك.', 'Es importante dormir ocho horas. (تعميم)|من المهم النوم ثماني ساعات.'],
    err: [['Me alegra que estás aquí.', 'Me alegra que estés aquí.', 'الشعور تجاه فعل الآخر ← subjuntivo حتى لو كان حقيقة.'], ['Es normal que tienes miedo.', 'Es normal que tengas miedo.', 'التقييم ← subjuntivo.'], ['Me molestan que hacen ruido.', 'Me molesta que hagan ruido.', 'الفعل molesta مفرد لأن فاعله جملة «que…» كاملة، والفعل الثاني يأتي في الـ subjuntivo.'], ['Es importante que estudiar.', 'Es importante estudiar.', 'بدون فاعل محدد: مصدر بلا que.']],
    cmp: { t: 'Es verdad que / Es normal que', x: '[[Es verdad que estudias mucho]] (indicativo: تأكيد حقيقة). [[Es normal que estudies mucho]] (subjuntivo: تقييم). الفرق ليس في الواقع بل في نوع التعبير.' },
    tip: 'في المحادثة الشفهية (DELE وما بعده) التعليق على الصور بعبارات مثل [[Es normal que…]] و[[Me parece raro que…]] يُظهر مستوى لغويًا جيدًا.',
    pr: [
      ['Me alegra que tú ___ (estar) aquí.', 'estés', 'estar → esté ← estés.'],
      ['Es normal que ___ (tener, tú) miedo.', 'tengas', 'التقييم ← subjuntivo.'],
      ['Siento que no ___ (poder, tú) venir.', ['puedes', 'puedas', 'podrás', 'pudiste'], 1, 'الأسف ← subjuntivo.'],
      ['Me molesta que la gente ___ (fumar) aquí.', 'fume', '-ar ← -e.'],
      ['Es verdad que ___ (hacer) frío.', ['haga', 'hace', 'hará', 'hacer'], 1, 'es verdad que يؤكد حقيقة ← indicativo.'],
      ['Es importante ___ (dormir) bien. (عمومًا)', 'dormir', 'تعميم بلا فاعل ← مصدر.'],
      ['Es una pena que el museo ___ (estar) cerrado.', 'esté', 'تقييم ← subjuntivo.']
    ]
  });

  L({
    id: 'b1-04', t: 'Expresar opinión: creo que / no creo que; es verdad que / no es verdad que', ta: 'التعبير عن الرأي: الإثبات (Indicativo) والنفي والشك (Subjuntivo)',
    sum: 'الرأي المثبت ← indicativo؛ الرأي المنفي والشك ← subjuntivo.',
    meaning: 'عند إبداء رأي **مثبت** نقدّم المعلومة كحقيقة في نظرنا ← [[indicativo]]: [[Creo que tienes razón]]. عند **نفي** الرأي أو التشكيك ← [[subjuntivo]]: [[No creo que tengas razón]]. هذه من أكثر قواعد B1 أهمية في الامتحانات.',
    when: ['مثبت + indicativo: [[creo que, pienso que, me parece que, estoy seguro de que, es verdad/cierto/evidente que, está claro que]]', 'منفي + subjuntivo: [[no creo que, no pienso que, no me parece que, no estoy seguro de que, no es verdad que]]', 'الشك دائمًا + subjuntivo: [[dudo que, es posible que, es probable que, puede que]]', 'الاحتمال بـ [[quizás / tal vez]]: indicativo أو subjuntivo (الـ subjuntivo يزيد الشك)'],
    why: 'المنطق: «أعتقد أن…» = أقدّم شيئًا كحقيقة (indicativo). «لا أعتقد أن…» = لم يعد حقيقة، أصبح غير مؤكد (subjuntivo).',
    steps: ['هل التعبير مثبت (creo، es verdad، estoy seguro)؟ ← indicativo', 'هل هو منفي (no creo، no es verdad)؟ ← subjuntivo', 'هل هو شك أو احتمال (dudo، es posible، puede)؟ ← subjuntivo', 'انتبه: في الأسئلة المنفية للتأكيد ([[¿No crees que es caro?]]) يُستخدم indicativo غالبًا'],
    formula: 'Creo que + indicativo · No creo que + subjuntivo · Dudo / Es posible que + subjuntivo',
    tables: [{ head: ['+ Indicativo', '+ Subjuntivo'], es: [0, 1], rows: [['Creo que es fácil.', 'No creo que sea fácil.'], ['Pienso que tiene razón.', 'No pienso que tenga razón.'], ['Me parece que llueve.', 'No me parece que llueva.'], ['Es verdad que cuesta mucho.', 'No es verdad que cueste mucho.'], ['Estoy seguro de que viene.', 'No estoy seguro de que venga.'], ['Está claro que hay problemas.', 'Dudo que haya problemas.'], ['Sé que lo sabe.', 'Es posible que lo sepa.']] }],
    forms: { aff: ['Creo que el examen es en mayo.|أعتقد أن الامتحان في مايو.', 'Es evidente que el español te ayuda en el trabajo.|من الواضح أن الإسبانية تساعدك في العمل.'], neg: ['No creo que el examen sea en mayo.|لا أعتقد أن الامتحان في مايو.', 'No es cierto que los españoles cenen a las doce.|ليس صحيحًا أن الإسبان يتعشّون في الثانية عشرة.'], q: ['¿Crees que aprobaré?|هل تعتقد أنني سأنجح؟', '¿Es posible que cambien la fecha?|هل من الممكن أن يغيّروا الموعد؟'] },
    ex: ['Creo que Madrid es una ciudad muy segura.|أعتقد أن مدريد مدينة آمنة جدًا.', 'No creo que sea peligrosa.|لا أعتقد أنها خطيرة.', 'Pienso que los alquileres son demasiado caros.|أظن أن الإيجارات غالية جدًا.', 'No pienso que bajen pronto.|لا أظن أنها ستنخفض قريبًا.', 'Me parece que va a llover.|يبدو لي أنها ستمطر.', 'Es verdad que el sistema sanitario funciona bien.|صحيح أن النظام الصحي يعمل جيدًا.', 'No es verdad que haya que esperar meses.|ليس صحيحًا أنه يجب الانتظار شهورًا.', 'Estoy seguro de que lo vas a conseguir.|أنا متأكد أنك ستنجح في ذلك.', 'Dudo que el gestor tenga los papeles hoy.|أشك أن يكون المكتب الإداري قد جهّز الأوراق اليوم.', 'Es posible que haya huelga de metro.|من الممكن أن يكون هناك إضراب في المترو.', 'Es probable que lleguemos tarde.|من المحتمل أن نصل متأخرين.', 'Puede que tengas razón.|ربما أنت محقّ.', 'Quizás venga mañana.|ربما يأتي غدًا.', 'Está claro que necesitamos más tiempo.|من الواضح أننا نحتاج وقتًا أكثر.', 'No estoy seguro de que la tienda esté abierta.|لست متأكدًا أن المتجر مفتوح.', 'Sé que es difícil, pero vale la pena.|أعرف أنه صعب، لكنه يستحق العناء.'],
    err: [['Creo que sea fácil.', 'Creo que es fácil.', 'الرأي المثبت ← indicativo.'], ['No creo que es fácil.', 'No creo que sea fácil.', 'الرأي المنفي ← subjuntivo.'], ['Es posible que viene.', 'Es posible que venga.', 'الاحتمال ← subjuntivo.'], ['Dudo que tiene razón.', 'Dudo que tenga razón.', 'الشك ← subjuntivo.']],
    cmp: { t: 'quizás / a lo mejor', x: '[[a lo mejor]] (ربما) يأتي دائمًا مع **indicativo**: [[A lo mejor viene.]] أما [[quizás / tal vez]] فيقبلان الاثنين: [[Quizás viene]] (احتمال أقوى) / [[Quizás venga]] (احتمال أضعف).' },
    tip: 'مهمة إبداء الرأي حاضرة في كل امتحانات B1 وما فوق: نوّع بين [[En mi opinión…، Desde mi punto de vista…، (No) creo que…، Estoy de acuerdo con… / No estoy de acuerdo con…]]',
    pr: [
      ['Creo que el tren ___ (llegar) a las diez.', ['llega', 'llegue', 'llegara', 'llegar'], 0, 'رأي مثبت ← indicativo.'],
      ['No creo que el tren ___ (llegar) a tiempo.', ['llega', 'llegue', 'llegará', 'llegó'], 1, 'رأي منفي ← subjuntivo.'],
      ['Es posible que ___ (llover) mañana.', 'llueva', 'احتمال ← subjuntivo.'],
      ['Estoy seguro de que ___ (tú, aprobar).', ['apruebes', 'aprobarás', 'aprobar', 'aprobaras'], 1, 'يقين ← indicativo.'],
      ['Dudo que ___ (ellos, saber) la respuesta.', 'sepan', 'saber → sepa ← sepan.'],
      ['A lo mejor ___ (venir) Juan.', ['viene', 'venga', 'vendrá', 'vino'], 0, 'a lo mejor + indicativo.'],
      ['No es verdad que ___ (haber) problemas.', 'haya', 'نفي ← subjuntivo: haya.']
    ]
  });

  L({
    id: 'b1-05', t: 'Oraciones temporales: cuando, hasta que, antes de que, en cuanto', ta: 'جمل الزمن: cuando وأخواتها مع الـ Subjuntivo',
    sum: 'cuando + subjuntivo للمستقبل، و cuando + indicativo للعادة والماضي.',
    meaning: 'بعد [[cuando]] (عندما) وأدوات الزمن الأخرى: إذا كان الحدث **في المستقبل** (لم يحدث بعد) ← [[subjuntivo]]: [[Cuando llegues, llámame]]. إذا كان **عادة** أو **في الماضي** ← [[indicativo]]: [[Cuando llego, siempre te llamo. Cuando llegué, te llamé.]]',
    when: ['المستقبل: [[cuando, en cuanto (فور), hasta que (حتى), mientras (طالما), después de que, tan pronto como + subjuntivo]]', 'العادة (حاضر): cuando + presente de indicativo', 'الماضي: cuando + indefinido / imperfecto', '[[antes de que]] (قبل أن) تأخذ subjuntivo **دائمًا**'],
    why: 'خطأ شائع جدًا عند الناطقين بالعربية والإنجليزية: «عندما سأصل» ← [[cuando llegaré]] ✗. في الإسبانية لا يأتي المستقبل بعد cuando أبدًا. الحدث غير المتحقق بعد ← subjuntivo.',
    steps: ['حدّد زمن الحدث: مستقبل؟ عادة؟ ماضٍ؟', 'المستقبل ← cuando + presente de subjuntivo، والجملة الرئيسية: مستقبل أو أمر أو ir a', 'العادة ← cuando + presente de indicativo', 'الماضي ← cuando + pretérito', 'antes de que + subjuntivo دائمًا؛ ومع نفس الفاعل: [[antes de + infinitivo]]'],
    formula: 'Cuando + subjuntivo (futuro) → futuro / imperativo / ir a',
    tables: [{ head: ['الحالة', 'المثال', 'المعنى'], es: [1], rows: [['مستقبل', 'Cuando tenga la nacionalidad, votaré.', 'عندما أحصل على الجنسية، سأصوّت.'], ['عادة', 'Cuando tengo tiempo, leo.', 'عندما يكون لديّ وقت، أقرأ.'], ['ماضٍ', 'Cuando tenía tiempo, leía.', 'عندما كان لديّ وقت، كنتُ أقرأ.'], ['أمر', 'Cuando llegues, llámame.', 'عندما تصل، اتصل بي.'], ['hasta que', 'Espera hasta que vuelva.', 'انتظر حتى أعود.'], ['en cuanto', 'En cuanto sepa algo, te aviso.', 'فور أن أعرف شيئًا، أخبرك.'], ['antes de que', 'Sal antes de que llueva.', 'اخرج قبل أن تمطر.']] }],
    forms: { aff: ['Cuando me jubile, viviré en la costa.|عندما أتقاعد، سأعيش على الساحل.', 'En cuanto reciba la carta, te llamo.|فور استلامي الرسالة أتصل بك.'], neg: ['No saldremos hasta que deje de llover.|لن نخرج حتى تتوقف عن المطر.', 'No te vayas antes de que llegue tu padre.|لا تذهب قبل أن يصل أبوك.'], q: ['¿Qué harás cuando termines el curso?|ماذا ستفعل عندما تنهي الدورة؟', '¿Me avisas cuando estés listo?|هل تخبرني عندما تكون جاهزًا؟'] },
    ex: ['Cuando apruebe el DELE, pediré la nacionalidad.|عندما أنجح في DELE، سأطلب الجنسية.', 'Cuando llegues a la estación, coge el metro.|عندما تصل إلى المحطة، خذ المترو.', 'Te llamo cuando salga del trabajo.|أتصل بك عندما أخرج من العمل.', 'Cuando era pequeño, vivía con mis abuelos.|عندما كنتُ صغيرًا، كنتُ أعيش مع أجدادي.', 'Cuando hace calor, vamos a la piscina.|عندما يكون الجو حارًا، نذهب إلى المسبح.', 'Cuando llegué a España, no hablaba español.|عندما وصلتُ إلى إسبانيا، لم أكن أتكلّم الإسبانية.', 'Esperaremos hasta que vuelvas.|سننتظر حتى تعود.', 'En cuanto tenga los resultados, te los envío.|فور حصولي على النتائج، أرسلها لك.', 'Antes de que te vayas, firma este papel.|قبل أن تذهب، وقّع هذه الورقة.', 'Después de que termine la reunión, hablamos.|بعد أن ينتهي الاجتماع، نتكلّم.', 'Mientras vivas en esta casa, cumplirás las normas.|طالما تعيش في هذا البيت، ستلتزم بالقواعد.', 'Tan pronto como pueda, iré a verte.|حالما أستطيع، سأذهب لرؤيتك.', 'Antes de salir, cierra la ventana. (نفس الفاعل)|قبل الخروج، أغلق النافذة.', 'Cuando seas mayor, lo entenderás.|عندما تكبر، ستفهم ذلك.', 'Cuando tengas dudas, pregunta.|عندما تكون لديك شكوك، اسأل.', 'Siempre me llama cuando necesita algo.|دائمًا يتصل بي عندما يحتاج شيئًا.'],
    err: [['Cuando llegaré, te llamo.', 'Cuando llegue, te llamo.', 'بعد cuando للمستقبل ← subjuntivo، أبدًا ليس futuro.'], ['Cuando tengo la nacionalidad, viajaré.', 'Cuando tenga la nacionalidad, viajaré.', 'الحدث المستقبلي ← subjuntivo.'], ['Antes de que sales…', 'Antes de que salgas…', 'antes de que + subjuntivo دائمًا.'], ['Espera hasta que vuelvo.', 'Espera hasta que vuelva.', 'حدث لم يقع بعد ← subjuntivo.']],
    cmp: { t: '¿Cuándo? (سؤال) / cuando (أداة)', x: 'السؤال [[¿Cuándo vienes?]] بنبرة ويأخذ indicativo أو futuro: [[¿Cuándo vendrás?]]. أما الأداة الرابطة [[cuando]] بلا نبرة فتتبع القاعدة أعلاه.' },
    tip: 'جملة مفيدة لمقابلة الجنسية ولامتحان DELE: [[Cuando tenga la nacionalidad, me gustaría…]] (عندما أحصل على الجنسية، أودّ أن…).',
    pr: [
      ['Cuando ___ (tú, llegar), llámame.', 'llegues', 'مستقبل ← subjuntivo: llegues.'],
      ['Cuando ___ (yo, tener) tiempo, leo el periódico. (عادة)', ['tenga', 'tengo', 'tendré', 'tuviera'], 1, 'عادة ← indicativo.'],
      ['Cuando ___ (yo, ser) niño, jugaba mucho.', 'era', 'ماضٍ ← imperfecto.'],
      ['Te escribiré en cuanto ___ (saber) algo.', ['sé', 'sepa', 'sabré', 'supe'], 1, 'مستقبل ← subjuntivo: sepa.'],
      ['Espera aquí hasta que ___ (yo, volver).', 'vuelva', 'volver → vuelva.'],
      ['Sal antes de que ___ (llover).', 'llueva', 'antes de que + subjuntivo.'],
      ['¿Qué harás cuando ___ (jubilarse)?', ['te jubiles', 'te jubilas', 'te jubilarás', 'jubilarte'], 0, 'مستقبل ← subjuntivo.']
    ]
  });

  L({
    id: 'b1-06', t: 'El condicional simple', ta: 'الصيغة الشرطية البسيطة: Condicional',
    sum: 'hablaría, comería: للطلب المهذّب والنصيحة والافتراض («كنتُ سأفعل»).',
    meaning: 'الـ [[condicional]] يعبّر عن فعل **افتراضي** أو مشروط: [[Me gustaría vivir en Valencia]] = أودّ أن أعيش في فالنسيا. ويُستخدم كثيرًا **للتهذيب**: [[¿Podría ayudarme?]] (هل يمكنك أن تساعدني؟ — أكثر تهذيبًا من ¿Puede…?).',
    when: ['الطلبات المهذّبة: [[¿Podría…? ¿Le importaría…? Querría…]]', 'الرغبات: [[Me gustaría, me encantaría, preferiría]]', 'النصائح: [[Yo que tú, iría al médico. Deberías descansar.]]', 'الافتراض: [[Con más dinero, viajaría más.]]', 'الشرط غير الواقعي (مع subjuntivo imperfecto، B2): [[Si tuviera tiempo, estudiaría más.]]', 'المستقبل من منظور الماضي: [[Dijo que vendría.]] (قال إنه سيأتي)'],
    why: 'يُبنى مثل المستقبل تمامًا (المصدر + نهاية)، والجذور الشاذة **هي نفسها** جذور المستقبل. إذا عرفت المستقبل عرفت الشرطي!',
    steps: ['خذ المصدر كاملًا: hablar، comer، vivir', 'أضف [[-ía, -ías, -ía, -íamos, -íais, -ían]] (نفس نهايات imperfecto لـ -er/-ir)', 'الجذور الشاذة كالمستقبل: [[tendr-, pondr-, saldr-, vendr-, podr-, sabr-, habr-, querr-, har-, dir-]]', 'للنصيحة: [[Yo que tú / Yo en tu lugar + condicional]] أو [[deberías + infinitivo]]'],
    formula: 'infinitivo + -ía, -ías, -ía, -íamos, -íais, -ían',
    tables: [{ v: 'hablar', t: 'condicional' }, { v: 'poder', t: 'condicional' }, { v: 'tener', t: 'condicional' }, { v: 'hacer', t: 'condicional' }, { v: 'deber', t: 'condicional' }, { v: 'querer', t: 'condicional' }],
    forms: { aff: ['Me gustaría hablar con el responsable.|أودّ التكلّم مع المسؤول.', 'Yo que tú, pediría una segunda opinión.|لو كنتُ مكانك، لطلبتُ رأيًا ثانيًا.'], neg: ['Yo no firmaría ese contrato.|أنا لن أوقّع ذلك العقد (لو كنتُ مكانك).', 'No deberías trabajar tanto.|لا ينبغي أن تعمل كثيرًا هكذا.'], q: ['¿Podría repetir su nombre, por favor?|هل يمكنك تكرار اسمك من فضلك؟', '¿Qué harías tú en mi lugar?|ماذا كنتَ ستفعل لو كنتَ مكاني؟'] },
    ex: ['¿Podría decirme dónde está la secretaría?|هل يمكنك أن تقول لي أين السكرتارية؟', 'Me gustaría pedir información sobre el curso.|أودّ طلب معلومات عن الدورة.', '¿Le importaría cerrar la ventana?|هل يزعجك أن تغلق النافذة؟', 'Deberías ir al médico.|ينبغي أن تذهب إلى الطبيب.', 'Yo en tu lugar, aceptaría el trabajo.|لو كنتُ مكانك، لقبلتُ العمل.', 'Con más tiempo, estudiaría más.|بوقت أكثر، كنتُ سأدرس أكثر.', 'Me encantaría visitar Andalucía.|سأكون سعيدًا جدًا بزيارة الأندلس.', 'Preferiría pagar con tarjeta.|أفضّل الدفع بالبطاقة.', 'El técnico dijo que vendría a las diez.|قال الفنّي إنه سيأتي في العاشرة.', 'Sería mejor llamar antes.|سيكون من الأفضل الاتصال مسبقًا.', 'Yo no diría eso.|أنا لن أقول ذلك.', '¿Tendría un momento para hablar?|هل لديك لحظة للكلام؟', 'Querría una habitación doble, por favor.|أودّ غرفة مزدوجة من فضلك.', 'En tu situación, yo haría lo mismo.|في وضعك، كنتُ سأفعل الشيء نفسه.', 'Pensaba que sería más difícil.|كنتُ أظن أنه سيكون أصعب.', '¿Qué te gustaría hacer este verano?|ماذا تودّ أن تفعل هذا الصيف؟'],
    err: [['Me gustaría que me ayudarías.', 'Me gustaría que me ayudaras. (B2)', 'بعد me gustaría que ← subjuntivo imperfecto.'], ['Teneríamos más tiempo.', 'Tendríamos más tiempo.', 'tener: tendr-.'], ['Haceríamos', 'Haríamos', 'hacer: har-.'], ['Podría usted me ayudar?', '¿Podría ayudarme?', 'الضمير يلتصق بالمصدر أو يسبق podría.']],
    cmp: { t: 'imperfecto / condicional للتهذيب', x: 'للطلب المهذب في المحلات يقول الإسبان: [[Quería un kilo de tomates]] (imperfecto) أو [[Querría…]] (condicional)، وكلاهما أكثر تهذيبًا من [[Quiero…]].' },
    tip: 'في كتابة الرسائل الرسمية (DELE A2/B1): [[Me gustaría solicitar información…، Le agradecería que…، ¿Sería posible…?]]',
    pr: [
      ['¿___ (usted, poder) ayudarme?', 'Podría', 'poder → podr- + ía.'],
      ['Me ___ (gustar) visitar Granada.', 'gustaría', 'gustar → gustaría.'],
      ['Yo que tú, ___ (ir) al médico.', ['iría', 'iré', 'iba', 'vaya'], 0, 'النصيحة: yo que tú + condicional.'],
      ['Nosotros ___ (tener) más tiempo con otro trabajo.', 'tendríamos', 'tener → tendr- + íamos.'],
      ['Dijo que ___ (venir) mañana.', ['vendrá', 'vendría', 'venía', 'viene'], 1, 'مستقبل في الماضي ← condicional.'],
      ['___ (tú, deber) descansar más.', 'Deberías', 'نصيحة: deberías.'],
      ['¿Qué ___ (hacer) tú en mi lugar?', 'harías', 'hacer → har- + ías.']
    ]
  });

  L({
    id: 'b1-07', t: 'El pretérito pluscuamperfecto (había hablado)', ta: 'الماضي الأسبق: Pluscuamperfecto',
    sum: 'ماضٍ قبل ماضٍ آخر: «عندما وصلتُ، كان القطار قد غادر».',
    meaning: 'الـ [[pluscuamperfecto]] يعبّر عن حدث **وقع قبل حدث ماضٍ آخر**. يعادل في العربية «كان قد فعل»: [[Cuando llegué, el tren ya había salido]] = عندما وصلتُ، كان القطار قد غادر.',
    when: ['حدث سابق لحدث ماضٍ: [[Cuando llamé, ya se había ido.]]', 'مع [[ya]] و [[todavía no]] في سياق ماضٍ', 'التجارب حتى لحظة في الماضي: [[Nunca había visto el mar antes de venir a España.]]', 'في الكلام المنقول: [[Me dijo que había perdido las llaves.]]'],
    why: 'يُبنى مثل الـ perfecto بالضبط، لكن haber في الـ **imperfecto** بدل الحاضر. نفس أسماء المفعول الشاذة!',
    steps: ['صرّف haber في الـ imperfecto: [[había, habías, había, habíamos, habíais, habían]]', 'أضف اسم المفعول: hablado، comido، vivido (والشاذة: hecho، dicho، visto...)', 'الضمائر و no قبل había: [[No lo había visto.]]', 'رتّب القصة: الحدث الأسبق ← pluscuamperfecto، الحدث اللاحق ← indefinido'],
    formula: 'haber (imperfecto) + participio',
    tables: [{ v: 'hablar', t: 'pluscuamperfecto' }, { v: 'hacer', t: 'pluscuamperfecto' }, { v: 'ver', t: 'pluscuamperfecto' }, { v: 'volver', t: 'pluscuamperfecto' }],
    forms: { aff: ['Cuando llegó la ambulancia, el hombre ya se había levantado.|عندما وصلت الإسعاف، كان الرجل قد نهض.', 'Me dijo que había aprobado.|قال لي إنه كان قد نجح.'], neg: ['Nunca había estado en un país tan bonito.|لم أكن قد زرتُ بلدًا جميلًا هكذا من قبل.', 'Todavía no habían abierto la tienda.|لم يكونوا قد فتحوا المتجر بعد.'], q: ['¿Habías estado antes en España?|هل كنتَ قد زرت إسبانيا من قبل؟', '¿Ya habías comido cuando te llamé?|هل كنتَ قد أكلتَ عندما اتصلتُ بك؟'] },
    ex: ['Cuando llegué a la estación, el tren ya había salido.|عندما وصلتُ إلى المحطة، كان القطار قد غادر.', 'Antes de venir a España, nunca había visto la nieve.|قبل المجيء إلى إسبانيا، لم أكن قد رأيت الثلج أبدًا.', 'Mi mujer ya había preparado la cena cuando llegué.|زوجتي كانت قد حضّرت العشاء عندما وصلتُ.', 'No pude entrar porque había olvidado las llaves.|لم أستطع الدخول لأني كنتُ قد نسيت المفاتيح.', 'El médico me preguntó si había tomado la medicina.|الطبيب سألني إن كنتُ قد تناولتُ الدواء.', 'Cuando empecé el curso, ya había estudiado un poco.|عندما بدأتُ الدورة، كنتُ قد درستُ قليلًا.', 'Nos dijeron que el vuelo había llegado con retraso.|قالوا لنا إن الرحلة كانت قد وصلت متأخرة.', 'Ya habíamos terminado cuando llegó el jefe.|كنّا قد انتهينا عندما وصل المدير.', 'Nunca había comido algo tan rico.|لم أكن قد أكلتُ شيئًا لذيذًا هكذا من قبل.', 'Cuando llamé, ya se habían ido.|عندما اتصلتُ، كانوا قد ذهبوا.', 'Me di cuenta de que había perdido la cartera.|انتبهتُ إلى أنني كنتُ قد أضعتُ المحفظة.', 'El examen fue fácil porque había estudiado mucho.|كان الامتحان سهلًا لأني كنتُ قد درستُ كثيرًا.', 'Todavía no había amanecido cuando salimos.|لم يكن الفجر قد طلع بعد عندما خرجنا.', 'Le conté lo que había pasado.|حكيتُ له ما كان قد حدث.', '¿Habías oído hablar de Toledo antes?|هل كنتَ قد سمعتَ عن طليطلة من قبل؟', 'Nunca había hecho un examen oficial.|لم أكن قد قدّمتُ امتحانًا رسميًا من قبل.'],
    err: [['Cuando llegué, el tren ya salió.', 'Cuando llegué, el tren ya había salido.', 'الحدث الأسبق ← pluscuamperfecto.'], ['Había hacido…', 'Había hecho…', 'hacer: hecho.'], ['Habían muchas personas que habían venido.', 'Había muchas personas que habían venido.', 'había (=كان يوجد) لا تُجمع، لكن habían venido (فعل مساعد) تُجمع.'], ['Ya había lo visto.', 'Ya lo había visto.', 'الضمير قبل había.']],
    cmp: { t: 'indefinido + indefinido / indefinido + pluscuamperfecto', x: '[[Cuando llegué, salió el tren]] (وصلتُ ثم غادر القطار — رأيته يغادر). [[Cuando llegué, el tren había salido]] (غادر قبل وصولي — لم أره).' },
    tip: 'مفيد جدًا في حكاية قصص الهجرة والوصول إلى إسبانيا في الشفهي: [[Antes de llegar, ya había estudiado un poco de español.]]',
    pr: [
      ['Cuando llegué, el tren ya ___ (salir).', 'había salido', 'الحدث الأسبق ← había + participio.'],
      ['Nunca ___ (yo, ver) el mar antes.', 'había visto', 'ver → visto.'],
      ['Me dijo que ___ (perder) el móvil.', ['perdió', 'había perdido', 'perdía', 'ha perdido'], 1, 'الحدث الأسبق في الكلام المنقول ← pluscuamperfecto.'],
      ['Nosotros ya ___ (cenar) cuando llamaste.', 'habíamos cenado', 'habíamos + cenado.'],
      ['Cuando llegó la policía, el ladrón ya se ___ (escapar).', ['escapó', 'había escapado', 'ha escapado', 'escapaba'], 1, 'حدث سابق ← pluscuamperfecto.'],
      ['¿___ (tú, estar) antes en Madrid?', 'Habías estado', 'habías + estado.']
    ]
  });

  L({
    id: 'b1-08', t: 'Oraciones de relativo: que, quien, donde, lo que (indicativo y subjuntivo)', ta: 'الجمل الموصولة: que و donde و lo que (مع Indicativo و Subjuntivo)',
    sum: 'busco un piso que tiene/tenga… الفرق بين الشيء المعروف والشيء غير المعروف.',
    meaning: 'الجملة الموصولة تصف اسمًا: [[El piso que alquilé es grande]] = الشقة التي استأجرتها كبيرة. أهم ضمير موصول هو [[que]] (الذي/التي/الذين). الجديد في B1: إذا كان الاسم **معروفًا وموجودًا** ← indicativo؛ إذا كان **غير معروف أو غير مؤكد الوجود** ← subjuntivo: [[Busco un piso que tenga ascensor]] (أبحث عن شقة فيها مصعد — لا أعرف إن كانت موجودة).',
    when: ['[[que]] للأشخاص والأشياء: [[El hombre que vive arriba…]]', '[[donde]] للأماكن: [[La ciudad donde nací…]]', '[[quien/quienes]] للأشخاص بعد حرف جر: [[La persona con quien hablé…]]', '[[lo que]] = ما / الشيء الذي: [[No entiendo lo que dices.]]', '[[el/la/los/las que]] بعد حرف جر أو للتحديد: [[El banco en el que trabajo…]]'],
    why: 'المنطق نفسه في كل الـ subjuntivo: ما ليس حقيقة معروفة (شيء نبحث عنه، نتمناه، أو ننفي وجوده) ← subjuntivo.',
    steps: ['ضع الاسم ثم الضمير الموصول المناسب', 'اسأل: هل هذا الشيء/الشخص محدّد وموجود وأعرفه؟ ← indicativo', 'هل هو غير محدّد، أبحث عنه، أو أنفي وجوده (no hay nadie que…)؟ ← subjuntivo', 'مع حرف الجر: [[con quien, en el que, de la que, para lo que]]'],
    formula: 'sustantivo conocido + que + indicativo · sustantivo desconocido/negado + que + subjuntivo',
    tables: [{ head: ['معروف/موجود (Indicativo)', 'غير معروف/منفي (Subjuntivo)'], es: [0, 1], rows: [['Tengo un piso que tiene terraza.', 'Busco un piso que tenga terraza.'], ['Conozco a alguien que habla árabe.', '¿Conoces a alguien que hable árabe?'], ['Hay un médico que atiende los sábados.', 'No hay ningún médico que atienda los sábados.'], ['Haz lo que te dice el médico. (يقوله فعلًا)', 'Haz lo que quieras. (أيًّا كان ما تريده)']] }],
    forms: { aff: ['La señora que vive enfrente es muy amable.|السيدة التي تسكن في المقابل لطيفة جدًا.', 'Necesito alguien que me ayude con la mudanza.|أحتاج شخصًا يساعدني في الانتقال.'], neg: ['No hay nadie que sepa la respuesta.|لا يوجد أحد يعرف الإجابة.', 'No encuentro un piso que cueste menos de 800 euros.|لا أجد شقة تكلّف أقل من 800 يورو.'], q: ['¿Conoces a alguien que trabaje en el ayuntamiento?|هل تعرف أحدًا يعمل في البلدية؟', '¿Hay algún restaurante que abra los lunes?|هل يوجد مطعم يفتح أيام الإثنين؟'] },
    ex: ['El médico que me atendió fue muy amable.|الطبيب الذي فحصني كان لطيفًا جدًا.', 'Esta es la casa donde vivimos los primeros años.|هذا هو البيت الذي عشنا فيه السنوات الأولى.', 'El chico con quien habla mi hija es su compañero.|الشاب الذي تتكلّم معه ابنتي هو زميلها.', 'No entiendo lo que dice el contrato.|لا أفهم ما يقوله العقد.', 'Lo que más me gusta de España es la gente.|أكثر ما يعجبني في إسبانيا هو الناس.', 'Busco un trabajo que tenga horario de mañana.|أبحث عن عمل بدوام صباحي.', 'Quiero un piso que esté cerca del metro.|أريد شقة قريبة من المترو.', 'Tengo un piso que está cerca del metro.|عندي شقة قريبة من المترو.', '¿Hay alguien aquí que hable inglés?|هل يوجد أحد هنا يتكلّم الإنجليزية؟', 'No conozco a nadie que viva en Bilbao.|لا أعرف أحدًا يعيش في بلباو.', 'El banco en el que tengo la cuenta está cerrado.|البنك الذي لديّ فيه الحساب مغلق.', 'Puedes pedir lo que quieras.|يمكنك أن تطلب ما تشاء.', 'Haz lo que te parezca mejor.|افعل ما يبدو لك أفضل.', 'La ciudad donde nací es muy antigua.|المدينة التي وُلدتُ فيها قديمة جدًا.', 'Los alumnos que estudian cada día aprueban.|الطلاب الذين يدرسون كل يوم ينجحون.', 'Necesitamos un abogado que conozca la ley de extranjería.|نحتاج محاميًا يعرف قانون الأجانب.'],
    err: [['Busco un piso que tiene ascensor. (لا أعرف شقة محددة)', 'Busco un piso que tenga ascensor.', 'الشيء غير المعروف ← subjuntivo.'], ['No hay nadie que sabe.', 'No hay nadie que sepa.', 'نفي الوجود ← subjuntivo.'], ['No entiendo que dices.', 'No entiendo lo que dices.', '«ما» = lo que.'], ['La persona con que hablé.', 'La persona con quien / con la que hablé.', 'بعد حرف الجر مع الأشخاص: quien أو la que.']],
    cmp: { t: 'que / lo que', x: '[[que]] يشير إلى اسم مذكور: [[el libro que leo]]. [[lo que]] يشير إلى فكرة أو شيء غير مسمّى: [[lo que leo]] (ما أقرؤه). [[¿Qué quieres?]] (سؤال) / [[Dime lo que quieres]] (أخبرني بما تريد).' },
    tip: 'في إعلانات البحث عن سكن أو عمل (موضوع شائع في القراءة) ستجد: [[Se busca persona que tenga experiencia…]]',
    pr: [
      ['Busco un piso que ___ (tener) dos habitaciones.', ['tiene', 'tenga', 'tendrá', 'tuvo'], 1, 'شقة غير معروفة ← subjuntivo.'],
      ['Vivo en un piso que ___ (tener) dos habitaciones.', ['tiene', 'tenga', 'tuviera', 'tener'], 0, 'شقة معروفة ← indicativo.'],
      ['No hay nadie que ___ (saber) chino.', 'sepa', 'نفي الوجود ← subjuntivo.'],
      ['No entiendo ___ dices.', ['que', 'lo que', 'el que', 'quien'], 1, '«ما تقوله» ← lo que.'],
      ['La ciudad ___ nací es pequeña.', ['que', 'donde', 'quien', 'cual'], 1, 'المكان ← donde.'],
      ['¿Conoces a alguien que ___ (hablar) alemán?', 'hable', 'شخص غير معروف ← subjuntivo.'],
      ['La mujer con ___ hablé es abogada.', ['que', 'quien', 'lo que', 'donde'], 1, 'بعد حرف جر لشخص ← quien.']
    ]
  });

  L({
    id: 'b1-09', t: 'El estilo indirecto: contar lo que dijo otra persona', ta: 'الكلام المنقول (الأسلوب غير المباشر)',
    sum: 'Dice que… / Dijo que…: كيف تتغيّر الأزمنة والضمائر عند نقل الكلام.',
    meaning: 'الأسلوب غير المباشر ينقل كلام شخص دون اقتباسه حرفيًا: [[«Estoy cansado.» → Dice que está cansado.]] إذا كان فعل النقل في **الحاضر** (dice) لا تتغيّر الأزمنة. إذا كان في **الماضي** (dijo) تتراجع الأزمنة خطوة إلى الماضي.',
    when: ['نقل رسائل الهاتف والمحادثات: [[Tu madre dice que la llames.]]', 'سرد ما قاله الطبيب أو الموظف: [[El funcionario me dijo que faltaba un documento.]]', 'نقل الأسئلة: [[Me preguntó si tenía cita. Me preguntó dónde vivía.]]', 'نقل الأوامر: [[Me dijo que esperara. (B2)]] / [[Dice que esperes.]]'],
    why: 'في امتحانات الاستماع والقراءة كثيرًا ما يُنقل الكلام بهذا الأسلوب، وفهمه يساعدك على الإجابة. وفي الحياة تحتاجه لتشرح لعائلتك ما قيل لك في الإدارات.',
    steps: ['غيّر الضمائر والملكية حسب المتكلّم: «Mi coche» → [[su coche]]', 'فعل النقل في الحاضر (dice, pregunta) ← نفس الزمن', 'فعل النقل في الماضي (dijo): presente → [[imperfecto]]؛ indefinido/perfecto → [[pluscuamperfecto]]؛ futuro → [[condicional]]؛ imperativo → subjuntivo (imperfecto)', 'للأسئلة بنعم/لا: [[preguntar si…]]؛ وبأداة: نحافظ على الأداة: [[preguntar dónde/cuándo…]]', 'غيّر ظروف الزمان والمكان: [[hoy → aquel día، mañana → al día siguiente، aquí → allí]]'],
    formula: 'Dice que + mismo tiempo · Dijo que + tiempo «hacia atrás»',
    tables: [{ head: ['الكلام المباشر', 'Dice que…', 'Dijo que…'], es: [0, 1, 2], rows: [['«Estoy cansado.»', 'Dice que está cansado.', 'Dijo que estaba cansado.'], ['«He comido.»', 'Dice que ha comido.', 'Dijo que había comido.'], ['«Fui al médico.»', 'Dice que fue al médico.', 'Dijo que había ido al médico.'], ['«Vendré mañana.»', 'Dice que vendrá mañana.', 'Dijo que vendría al día siguiente.'], ['«¿Tienes cita?»', 'Pregunta si tengo cita.', 'Preguntó si tenía cita.'], ['«¿Dónde vives?»', 'Pregunta dónde vivo.', 'Preguntó dónde vivía.'], ['«Llámame.»', 'Dice que lo llame.', 'Dijo que lo llamara.']] }],
    forms: { aff: ['El médico dice que no es grave.|الطبيب يقول إن الأمر ليس خطيرًا.', 'La funcionaria me dijo que volviera el lunes.|الموظفة قالت لي أن أعود يوم الإثنين.'], neg: ['Dice que no puede venir.|يقول إنه لا يستطيع المجيء.', 'Me dijo que no había plazas.|قال لي إنه لم تكن هناك أماكن.'], q: ['¿Qué te ha dicho el abogado?|ماذا قال لك المحامي؟', 'Me preguntó si quería un café.|سألني إن كنتُ أريد قهوة.'] },
    ex: ['Mi hijo dice que llegará tarde.|ابني يقول إنه سيصل متأخرًا.', 'La profesora dice que estudiemos el capítulo cinco.|المعلمة تقول أن ندرس الفصل الخامس.', 'El casero me dijo que iba a subir el alquiler.|المالك قال لي إنه سيرفع الإيجار.', 'Me dijeron que mi solicitud estaba incompleta.|قالوا لي إن طلبي كان ناقصًا.', 'El médico me dijo que había tenido suerte.|الطبيب قال لي إنني كنتُ محظوظًا.', 'Ana me contó que se había casado.|آنا حكت لي أنها تزوّجت.', 'Me preguntaron si tenía el certificado de empadronamiento.|سألوني إن كان معي شهادة التسجيل في البلدية.', 'El policía me preguntó adónde iba.|الشرطي سألني إلى أين كنتُ ذاهبًا.', 'Me explicó que el examen duraba tres horas.|شرح لي أن الامتحان يستمر ثلاث ساعات.', 'Mi vecino dice que el ascensor está roto.|جاري يقول إن المصعد معطّل.', 'Dijeron en la tele que mañana llovería.|قالوا في التلفاز إنها ستمطر غدًا.', 'Le dije que no se preocupara.|قلتُ له ألّا يقلق.', 'Mi mujer dice que la esperes en la puerta.|زوجتي تقول أن تنتظرها عند الباب.', 'El técnico me aseguró que lo arreglaría al día siguiente.|الفني أكّد لي أنه سيصلحه في اليوم التالي.', 'Me preguntó cuánto tiempo llevaba en España.|سألني منذ متى أعيش في إسبانيا.', 'Nos comunicaron que la oficina estaría cerrada.|أبلغونا أن المكتب سيكون مغلقًا.'],
    err: [['Me preguntó que si tenía cita. (مقبول عاميًا)', 'Me preguntó si tenía cita.', 'في الكتابة: preguntar si.'], ['Dijo que vendrá. (بعد يومين)', 'Dijo que vendría.', 'المستقبل بعد فعل نقل ماضٍ ← condicional.'], ['Dijo que está cansado. (حالة انتهت)', 'Dijo que estaba cansado.', 'الحاضر يتحوّل إلى imperfecto.'], ['Me preguntó dónde vivo yo. (بعد سنوات)', 'Me preguntó dónde vivía.', 'تراجع الزمن.']],
    cmp: { t: 'decir que + indicativo / subjuntivo', x: 'نقل **معلومة** ← indicativo: [[Dice que viene]] (يقول إنه آتٍ). نقل **أمر أو طلب** ← subjuntivo: [[Dice que vengas]] (يقول أن تأتي).' },
    tip: 'في قسم الاستماع من DELE تُطرح أسئلة مثل [[¿Qué le dice la mujer al hombre?]] والإجابات مصاغة بالأسلوب غير المباشر.',
    pr: [
      ['«Estoy enfermo.» → Dijo que ___ enfermo.', ['está', 'estaba', 'estuvo', 'esté'], 1, 'presente → imperfecto.'],
      ['«Vendré mañana.» → Dijo que ___ al día siguiente.', 'vendría', 'futuro → condicional.'],
      ['«¿Tienes hijos?» → Me preguntó ___ tenía hijos.', 'si', 'سؤال نعم/لا ← si.'],
      ['«He perdido el tren.» → Dijo que ___ el tren.', 'había perdido', 'perfecto → pluscuamperfecto.'],
      ['«Llámame.» → Mi madre dice que la ___.', ['llamo', 'llame', 'llamé', 'llamara'], 1, 'أمر + فعل نقل حاضر ← subjuntivo presente.'],
      ['«¿Dónde vives?» → Me preguntó dónde ___.', 'vivía', 'presente → imperfecto.']
    ]
  });

  L({
    id: 'b1-10', t: 'Imperativo con pronombres: dámelo, no me lo des', ta: 'الأمر مع الضمائر: موقعها والنبرة',
    sum: 'في الأمر المثبت تلتصق الضمائر بالفعل وتظهر نبرة؛ في النهي تسبق الفعل.',
    meaning: 'عندما نضيف ضمائر للأمر: في **الإثبات** تلتصق بنهاية الفعل: [[Dámelo]] (أعطني إياه). في **النهي** تأتي منفصلة قبل الفعل: [[No me lo des]] (لا تعطني إياه). وغالبًا نحتاج **نبرة مكتوبة** للحفاظ على مكان النبر الأصلي.',
    when: ['التعليمات اليومية: [[Siéntate. Cállate. Dímelo.]]', 'الأفعال الانعكاسية في الأمر: [[Levántate. No te levantes.]]', 'في المكاتب: [[Rellénelo. Fírmelo aquí. No se olvide.]]'],
    why: 'النبرة تُضاف لأن الكلمة صارت أطول لكن النطق لم يتغيّر: [[da]] + [[me]] + [[lo]] = [[dámelo]] (يبقى النبر على «da»).',
    steps: ['ابدأ بصيغة الأمر: [[da, dé, dad, den]]', 'أضف OI ثم OD في النهاية: da + me + lo → [[dámelo]]', 'إذا كان النبر الأصلي على مقطع صار الثالث من الآخر أو أبعد ← أضف نبرة: [[siéntese, levántate, dígaselo]]', 'مع vosotros والضمير os تسقط d: [[sentad + os → sentaos]]؛ ومع nosotros + nos تسقط s: [[sentemos + nos → sentémonos]]', 'في النهي: no + ضمائر + subjuntivo: [[No te sientes. No se lo digas.]]'],
    formula: 'Afirmativo: verbo + OI + OD (dímelo) · Negativo: no + OI + OD + subjuntivo (no me lo digas)',
    tables: [{ head: ['الإثبات', 'النهي', 'المعنى'], es: [0, 1], rows: [['Siéntate.', 'No te sientes.', 'اجلس / لا تجلس'], ['Levántese.', 'No se levante.', 'انهض (حضرتك) / لا تنهض'], ['Dímelo.', 'No me lo digas.', 'قلها لي / لا تقلها لي'], ['Cómpralo.', 'No lo compres.', 'اشترِه / لا تشترِه'], ['Explícaselo.', 'No se lo expliques.', 'اشرحه له / لا تشرحه له'], ['Llámame.', 'No me llames.', 'اتصل بي / لا تتصل بي'], ['Póntelo.', 'No te lo pongas.', 'البسه / لا تلبسه'], ['Sentaos.', 'No os sentéis.', 'اجلسوا / لا تجلسوا']] }],
    forms: { aff: ['Pásame la sal, por favor.|ناولني الملح من فضلك.', 'Rellene el formulario y fírmelo.|املأ الاستمارة ووقّعها.'], neg: ['No te preocupes por eso.|لا تقلق بشأن ذلك.', 'No se lo digas a nadie.|لا تقله لأحد.'], q: ['¿Me lo explicas otra vez?|هل تشرحه لي مرة أخرى؟', '¿Se lo envío por correo?|هل أرسله لك بالبريد؟'] },
    ex: ['Siéntese, por favor, enseguida le atiendo.|اجلس من فضلك، سأخدمك حالًا.', 'Dígame su nombre completo.|قل لي اسمك الكامل.', 'Déjeme ver su pasaporte.|دعني أرى جوازك.', 'Tómese la pastilla después de comer.|تناول الحبة بعد الأكل.', 'No se olvide de traer la fotocopia.|لا تنسَ إحضار النسخة.', 'Levántate, que llegas tarde.|انهض، فأنت متأخر.', 'Ponte el abrigo, hace frío.|البس المعطف، الجو بارد.', 'No te lo pongas, está sucio.|لا تلبسه، إنه متّسخ.', 'Cuéntamelo todo.|احكِ لي كل شيء.', 'No me lo cuentes ahora.|لا تحكه لي الآن.', 'Explícaselo a tu madre.|اشرحه لأمك.', 'Dáselo al portero.|أعطه للبوّاب.', 'Llamadnos cuando lleguéis.|اتصلوا بنا عندما تصلون.', 'Vámonos, es tarde.|هيا بنا، الوقت متأخر.', 'Acuérdate de pagar el recibo.|تذكّر أن تدفع الفاتورة.', 'No os preocupéis, todo saldrá bien.|لا تقلقوا، كل شيء سيكون بخير.'],
    err: [['Me lo da. (أمر)', 'Démelo.', 'في الإثبات تلتصق الضمائر.'], ['No dímelo.', 'No me lo digas.', 'في النهي: no + ضمائر + subjuntivo.'], ['Dalemelo', 'Dámelo', 'الترتيب: OI ثم OD.'], ['Dáleselo / Dalelo', 'Dáselo', 'le + lo ← se lo.'], ['Sientate', 'Siéntate', 'النبرة ضرورية.']],
    cmp: { t: 'الأمر أم الطلب بالسؤال؟', x: 'الأمر مع الضمائر طبيعي جدًا بين الأصدقاء والعائلة. ومع الغرباء: [[¿Me lo puede explicar?]] أو [[¿Podría explicármelo?]] أكثر تهذيبًا.' },
    tip: 'تعليمات الأطباء والصيادلة كلها تقريبًا بهذا الشكل: [[Tómeselo con agua. No se lo tome en ayunas.]]',
    pr: [
      ['(tú, sentarse) ___', 'Siéntate', 'sienta + te ← siéntate (بنبرة).', ['siéntate']],
      ['(tú, no sentarse) ___', 'No te sientes', 'no + te + subjuntivo.', ['no te sientes']],
      ['(usted, decírmelo) ___', ['Dígamelo', 'Me lo diga', 'Digamelo', 'Dígame lo'], 0, 'diga + me + lo مع نبرة.'],
      ['(tú) No ___ digas a nadie. (se lo)', 'se lo', 'في النهي قبل الفعل.'],
      ['(tú, darle el libro) → ___', ['Dáleselo', 'Dáselo', 'Dalelo', 'Selo da'], 1, 'le + lo ← se lo.'],
      ['(vosotros, sentarse) ___', ['Sentados', 'Sentaos', 'Sentados os', 'Sentadse'], 1, 'sentad + os ← sentaos.']
    ]
  });
})(window.ECM);
