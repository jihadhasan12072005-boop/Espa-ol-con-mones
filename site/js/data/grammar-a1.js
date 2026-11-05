/* Grammar course — level A1. Format documented in js/views/learn.js.
 * pr (practice): [stem, [options], answerIndex, why]  or  [stem, 'typed answer', why, [accepted alternatives]] */
(function (ECM) {
  'use strict';
  var G = ECM.GRAMMAR = ECM.GRAMMAR || [];
  function L(o) { o.lv = 'A1'; G.push(o); }

  L({
    id: 'a1-01', t: 'Los pronombres personales y el verbo SER', ta: 'الضمائر الشخصية والفعل SER (يكون)',
    sum: 'أساس كل جملة إسبانية: من يفعل؟ وكيف نصف الأشخاص والأشياء بالفعل ser.',
    meaning: 'الضمير الشخصي يدلّ على الفاعل: [[yo]] (أنا)، [[tú]] (أنتَ/أنتِ)، [[él / ella / usted]] (هو / هي / حضرتك)... أما الفعل [[ser]] فيعني «يكون»، ونستخدمه لنقول **من نحن وما هي طبيعتنا الثابتة**: الاسم، الجنسية، المهنة، الصفات الدائمة، الأصل.\nفي العربية نقول «أنا مؤنس» بلا فعل، أما الإسبانية فتحتاج دائمًا إلى فعل: [[Yo soy Mones]] حرفيًا «أنا أكونُ مؤنس».',
    when: ['التعريف بالنفس والاسم: [[Soy Mones.]]', 'الجنسية والأصل: [[Soy sirio. Soy de Damasco.]]', 'المهنة: [[Es médico.]]', 'الصفات الثابتة (الشكل والطبع): [[Es alto y amable.]]', 'الوقت والتاريخ: [[Son las tres. Hoy es lunes.]]', 'المادة التي صُنع منها الشيء والملكية: [[La mesa es de madera. El coche es de Ana.]]'],
    why: 'الإسبانية تُصرّف الفعل حسب الفاعل، لذلك تكفي صيغة الفعل وحدها لمعرفة الفاعل: [[soy]] تعني حتمًا «أنا». ولهذا **يُحذف الضمير غالبًا** في الكلام الطبيعي، ولا يُذكر إلا للتأكيد أو للتمييز: [[Yo soy español, pero él es italiano.]]',
    steps: ['حدّد الفاعل: من نتحدث عنه؟ (أنا، أنت، هو...)', 'اختر صيغة ser المناسبة لذلك الفاعل من الجدول (soy, eres, es...)', 'أضف المعلومة: اسمًا أو صفة أو جنسية أو مهنة', 'طابق الصفة مع الفاعل في التذكير والتأنيث والعدد: [[Él es alto / Ella es alta / Ellos son altos]]', 'احذف الضمير إن كان الفاعل واضحًا: [[Soy profesor]] بدل [[Yo soy profesor]]'],
    formula: 'sujeto + ser + nombre / adjetivo / de + lugar',
    tables: [
      { head: ['الضمير', 'المعنى', 'ملاحظة'], es: [0], rows: [
        ['yo', 'أنا', 'يُكتب بحرف صغير دائمًا (عكس I في الإنجليزية)'], ['tú', 'أنتَ / أنتِ', 'للمخاطَب القريب (صديق، عائلة). لاحظ النبرة: tú ≠ tu (ـكَ)'],
        ['él / ella', 'هو / هي', 'él بنبرة = هو، el بلا نبرة = أداة التعريف'], ['usted (Ud.)', 'حضرتك (للاحترام)', 'يُصرَّف مثل él: usted es'],
        ['nosotros / nosotras', 'نحن', 'nosotras للمجموعة المؤنثة فقط'], ['vosotros / vosotras', 'أنتم / أنتنّ', 'يُستخدم في إسبانيا فقط للمخاطَبين القريبين'],
        ['ellos / ellas', 'هم / هنّ', 'ellos لمجموعة فيها مذكّر واحد على الأقل'], ['ustedes (Uds.)', 'حضراتكم', 'يُصرَّف مثل ellos: ustedes son']] },
      { v: 'ser', t: 'presente' }
    ],
    forms: { aff: ['Soy sirio y vivo en Madrid.|أنا سوري وأعيش في مدريد.', 'Ella es enfermera.|هي ممرّضة.'], neg: ['No soy alemán, soy sirio.|لستُ ألمانيًا، أنا سوري.', 'Ellos no son de aquí.|هم ليسوا من هنا.'], q: ['¿Eres español?|هل أنت إسباني؟', '¿De dónde es usted?|من أين حضرتك؟'] },
    ex: ['Me llamo Mones y soy de Siria.|اسمي مؤنس وأنا من سوريا.', 'Soy padre de familia.|أنا ربّ أسرة.', '¿Tú eres el nuevo vecino?|هل أنت الجار الجديد؟', 'Mi mujer es muy simpática.|زوجتي لطيفة جدًا.', 'Usted es el señor García, ¿verdad?|حضرتك السيد غارثيا، أليس كذلك؟', 'Nosotros somos sirios, pero vivimos en España.|نحن سوريون، لكننا نعيش في إسبانيا.', 'Vosotros sois muy amables.|أنتم لطفاء جدًا.', 'Mis hijos son estudiantes.|أولادي طلاب.', 'La farmacia es grande y moderna.|الصيدلية كبيرة وحديثة.', 'Hoy es martes.|اليوم الثلاثاء.', 'Son las diez de la mañana.|الساعة العاشرة صباحًا.', 'Es la una y media.|الساعة الواحدة والنصف.', 'El reloj es de oro.|الساعة مصنوعة من الذهب.', 'Este libro es de mi hijo.|هذا الكتاب لابني.', 'Madrid es la capital de España.|مدريد هي عاصمة إسبانيا.', 'No somos turistas, somos residentes.|لسنا سيّاحًا، نحن مقيمون.', '¿Quién es ese hombre? — Es mi jefe.|من ذلك الرجل؟ — إنه مديري.'],
    err: [['Yo es Mones.', 'Yo soy Mones.', 'الفعل يتغيّر مع الفاعل: مع yo نقول soy دائمًا، وليس es.'], ['Soy un médico.', 'Soy médico.', 'مع المهنة بعد ser لا نضع أداة النكرة un/una (إلا إذا أضفنا صفة: Es un médico excelente).'], ['Yo soy Mones. Yo soy sirio. Yo soy de Damasco.', 'Soy Mones. Soy sirio, de Damasco.', 'تكرار yo يبدو غير طبيعي؛ الصيغة soy تكفي.'], ['Ella es sirio.', 'Ella es siria.', 'الصفة تتبع الفاعل في التأنيث: siria للمؤنث.'], ['Tu eres mi amigo.', 'Tú eres mi amigo.', 'tú (أنت) بنبرة؛ tu بلا نبرة تعني «ـكَ» الملكية.']],
    cmp: { t: 'ser أم estar؟ (لمحة أولى)', x: 'كلاهما يُترجم «يكون». [[ser]] لما هو **جوهري وثابت** (من أنت، ما هو الشيء)، و[[estar]] لما هو **حالة مؤقتة أو موقع** (كيف حالك الآن، أين أنت). سندرس estar بالتفصيل في الدرس الرابع.', rows: [['Soy alto.', 'أنا طويل (صفة ثابتة)'], ['Estoy cansado.', 'أنا متعب (حالة الآن)'], ['Es de Madrid.', 'هو من مدريد (أصل)'], ['Está en Madrid.', 'هو في مدريد (موقع)']] },
    tip: 'في إسبانيا يُستخدم [[usted]] مع الموظفين وكبار السن والأطباء في البداية، لكن الإسبان ينتقلون بسرعة إلى [[tú]]. إذا قال لك أحدهم [[Puedes tutearme]] فهذا يعني «يمكنك مخاطبتي بـ tú».',
    pr: [
      ['Yo ___ de Siria.', ['soy', 'es', 'eres', 'son'], 0, 'مع yo: soy.'],
      ['Mis hijos ___ estudiantes.', ['es', 'somos', 'son', 'sois'], 2, 'mis hijos = ellos → son.'],
      ['¿Usted ___ el doctor Ruiz?', ['eres', 'es', 'soy', 'sois'], 1, 'usted يُصرّف مثل él: es.'],
      ['Vosotros ___ muy amables.', ['son', 'somos', 'sois', 'es'], 2, 'vosotros → sois (تُستخدم في إسبانيا).'],
      ['Ella es ___ (sirio).', ['sirio', 'siria', 'sirios', 'sirias'], 1, 'الصفة تتأنث مع ella: siria.'],
      ['Mi mujer y yo ___ de Alepo.', 'somos', '«زوجتي وأنا» = nosotros → somos.'],
      ['Tú ___ mi mejor amigo.', 'eres', 'مع tú: eres.'],
      ['¿Cuál es correcta? «أنا طبيب»', ['Soy un médico.', 'Soy médico.', 'Estoy médico.', 'Es médico.'], 1, 'المهنة بعد ser بلا un، والفاعل yo → soy.'],
      ['¿Qué hora es? — ___ las cinco.', ['Es', 'Son', 'Está', 'Hay'], 1, 'مع الساعات بالجمع (las cinco) نقول son؛ ومع la una نقول es.']
    ]
  });

  L({
    id: 'a1-02', t: 'El sustantivo: género, número y artículos', ta: 'الاسم: المذكّر والمؤنث، المفرد والجمع، وأدوات التعريف والتنكير',
    sum: 'كل اسم في الإسبانية مذكّر أو مؤنث، ويحتاج إلى أداة تناسبه.',
    meaning: 'مثل العربية تمامًا، **كل اسم إسباني له جنس**: مذكّر أو مؤنث، حتى الأشياء: [[la mesa]] (الطاولة) مؤنثة و[[el libro]] (الكتاب) مذكّر. الأداة التي تسبق الاسم تتغيّر حسب جنسه وعدده.\nأدوات التعريف: [[el, la, los, las]] (= «الـ»). أدوات التنكير: [[un, una, unos, unas]] (= «ـٌ» / واحد / بعض).',
    when: ['[[el / la]] لشيء معروف أو محدّد: [[el médico de mi barrio]]', '[[un / una]] لشيء يُذكر أول مرة أو غير محدّد: [[Busco un piso.]]', '[[unos / unas]] = بعض / حوالي: [[unos amigos]]، [[unos 20 euros]]', 'مع الأشياء العامة والأذواق نستخدم أداة التعريف: [[Me gusta el café.]]'],
    why: 'الأداة تعطي معلومتين في كلمة واحدة: الجنس والعدد. وهي ضرورية لأن الصفات والضمائر اللاحقة كلها ستتبعها: [[la casa blanca]] / [[el coche blanco]].',
    steps: ['انظر إلى نهاية الاسم: -o غالبًا مذكّر (el libro)، و -a غالبًا مؤنث (la casa)', 'احفظ الاستثناءات المهمة: [[el día, el mapa, el problema, el idioma, el sofá]] مذكّرة، و[[la mano, la radio, la foto, la moto]] مؤنثة', 'الكلمات المنتهية بـ -ción / -sión / -dad / -tad مؤنثة: [[la estación, la ciudad, la libertad]]', 'للجمع: إذا انتهى الاسم بحرف علّة أضف -s ([[casa → casas]])، وإذا انتهى بحرف ساكن أضف -es ([[ciudad → ciudades]]، [[profesor → profesores]])', 'الاسم المنتهي بـ -z يصير -ces: [[el lápiz → los lápices]]'],
    formula: 'artículo + sustantivo (+ adjetivo)',
    tables: [
      { head: ['', 'مذكّر مفرد', 'مؤنث مفرد', 'مذكّر جمع', 'مؤنث جمع'], es: [1, 2, 3, 4], rows: [['أداة التعريف', 'el', 'la', 'los', 'las'], ['أداة التنكير', 'un', 'una', 'unos', 'unas']] },
      { head: ['قاعدة', 'مثال مفرد', 'مثال جمع'], es: [1, 2], rows: [['ينتهي بحرف علّة ← -s', 'el hijo, la calle', 'los hijos, las calles'], ['ينتهي بحرف ساكن ← -es', 'el autobús, el hospital', 'los autobuses, los hospitales'], ['ينتهي بـ -z ← -ces', 'la luz, la vez', 'las luces, las veces'], ['ينتهي بـ -s غير منبور ← لا يتغيّر', 'el lunes, la crisis', 'los lunes, las crisis']] }
    ],
    forms: { aff: ['Tengo un hijo y dos hijas.|عندي ابن وابنتان.', 'La estación está cerca.|المحطة قريبة.'], neg: ['No tengo coche.|ليس لديّ سيارة (لا نستخدم أداة بعد النفي مع الأشياء القابلة للعد غالبًا).', 'No hay farmacias abiertas.|لا توجد صيدليات مفتوحة.'], q: ['¿Tienes un bolígrafo?|هل عندك قلم؟', '¿Dónde está el hospital?|أين المستشفى؟'] },
    ex: ['El problema es el dinero.|المشكلة هي المال.', 'Necesito una cita con el médico.|أحتاج موعدًا مع الطبيب.', 'Los niños están en el colegio.|الأطفال في المدرسة.', 'Las tiendas cierran a las nueve.|المتاجر تغلق في التاسعة.', 'Hay un mercado en mi barrio.|يوجد سوق في حيّي.', 'El agua está fría.|الماء بارد. (agua مؤنثة لكن نقول el agua لسهولة النطق)', 'Busco unas gafas negras.|أبحث عن نظّارة سوداء.', 'El día está muy bonito.|اليوم جميل جدًا.', 'La mano me duele.|يدي تؤلمني.', 'Los lunes trabajo por la mañana.|أيام الإثنين أعمل صباحًا.', 'Tengo unos amigos españoles.|عندي بعض الأصدقاء الإسبان.', 'La ciudad tiene muchas plazas.|المدينة فيها ساحات كثيرة.', 'El idioma español es bonito.|اللغة الإسبانية جميلة.', 'Las estaciones de metro son limpias.|محطات المترو نظيفة.', 'Quiero un café y una tostada, por favor.|أريد قهوة وخبزًا محمّصًا من فضلك.', 'Los autobuses son rojos en Madrid.|الحافلات حمراء في مدريد.'],
    err: [['la problema', 'el problema', 'problema مذكّرة رغم أنها تنتهي بـ -a (أصلها يوناني مثل el tema, el sistema, el programa).'], ['los ciudads', 'las ciudades', 'ciudad مؤنثة (-dad) وتنتهي بساكن ← نضيف -es.'], ['el mano', 'la mano', 'mano مؤنثة رغم أنها تنتهي بـ -o.'], ['Me gusta café.', 'Me gusta el café.', 'عند الحديث عن شيء بشكل عام نضع أداة التعريف.'], ['las lápizes', 'los lápices', 'lápiz مذكّر، و -z تصير -ces في الجمع.']],
    cmp: { t: 'el / un — التعريف والتنكير', x: 'استخدم [[un]] عندما تذكر الشيء لأول مرة، ثم [[el]] عندما يصبح معروفًا للطرفين: [[En mi calle hay un bar. El bar se llama «Sol».]] — في شارعي يوجد بار. البار اسمه «سول».' },
    tip: 'تعلّم كل اسم جديد **مع أداته**: لا تحفظ «mesa» بل «la mesa». هذه العادة وحدها تحلّ معظم أخطاء التذكير والتأنيث.',
    pr: [
      ['___ problema es grave.', ['La', 'El', 'Los', 'Una'], 1, 'problema مذكّر: el problema.'],
      ['Vivo en ___ ciudad pequeña.', ['un', 'una', 'el', 'unos'], 1, 'ciudad مؤنثة ومذكورة لأول مرة: una ciudad.'],
      ['el hospital → los ___', 'hospitales', 'ينتهي بساكن ← -es.'],
      ['la luz → las ___', 'luces', '-z تصير -ces.'],
      ['___ mano', ['El', 'La', 'Los', 'Un'], 1, 'la mano مؤنثة (استثناء).'],
      ['Me gusta ___ fútbol.', ['un', 'el', '—', 'la'], 1, 'الأذواق العامة مع أداة التعريف.'],
      ['¿Cuál es correcta?', ['las estaciónes', 'los estaciones', 'las estaciones', 'la estaciones'], 2, 'estación مؤنثة، وفي الجمع تسقط النبرة: estaciones.'],
      ['___ días son largos en verano.', ['Las', 'Los', 'El', 'Unas'], 1, 'día مذكّر: los días.']
    ]
  });

  L({
    id: 'a1-03', t: 'El adjetivo: concordancia y posición', ta: 'الصفة: المطابقة وموقعها في الجملة',
    sum: 'الصفة تأتي غالبًا بعد الاسم وتطابقه في الجنس والعدد.',
    meaning: 'الصفة تصف الاسم: [[una casa grande]] (بيت كبير). في الإسبانية، كما في العربية، **تأتي الصفة غالبًا بعد الاسم** وتطابقه في التذكير والتأنيث والإفراد والجمع.',
    when: ['لوصف الأشخاص: [[un hombre trabajador]]', 'لوصف الأشياء والأماكن: [[un piso luminoso]]', 'بعد ser للصفات الثابتة وبعد estar للحالات: [[La casa es grande. La sopa está caliente.]]'],
    why: 'المطابقة تجعل الجملة مترابطة: من نهاية الصفة نعرف أيّ اسم تصف، حتى لو ابتعدت عنه.',
    steps: ['حدّد جنس الاسم وعدده (la casa = مؤنث مفرد)', 'إن كانت الصفة تنتهي بـ -o: غيّرها إلى -a للمؤنث ([[alto → alta]])', 'إن كانت تنتهي بـ -e أو بساكن: لا تتغيّر بين المذكر والمؤنث ([[grande, fácil, azul]])', 'صفات الجنسية المنتهية بساكن تأخذ -a للمؤنث: [[español → española]]، [[alemán → alemana]]', 'للجمع: أضف -s بعد حرف العلّة و -es بعد الساكن ([[altos, fáciles]])'],
    formula: 'artículo + sustantivo + adjetivo (concordancia)',
    tables: [
      { head: ['نوع الصفة', 'مذكّر مفرد', 'مؤنث مفرد', 'مذكّر جمع', 'مؤنث جمع'], es: [1, 2, 3, 4], rows: [['تنتهي بـ -o', 'alto', 'alta', 'altos', 'altas'], ['تنتهي بـ -e', 'grande', 'grande', 'grandes', 'grandes'], ['تنتهي بساكن', 'fácil', 'fácil', 'fáciles', 'fáciles'], ['جنسية بساكن', 'español', 'española', 'españoles', 'españolas'], ['تنتهي بـ -ista', 'optimista', 'optimista', 'optimistas', 'optimistas']] },
      { head: ['الصفة', 'قبل الاسم', 'بعد الاسم'], es: [0, 1, 2], rows: [['grande', 'un gran hombre (رجل عظيم)', 'un hombre grande (رجل ضخم)'], ['bueno', 'un buen amigo', 'un amigo bueno'], ['viejo', 'un viejo amigo (صديق قديم)', 'un amigo viejo (صديق مسنّ)']] }
    ],
    forms: { aff: ['Mi barrio es tranquilo y seguro.|حيّي هادئ وآمن.', 'Tengo dos hijas muy trabajadoras.|عندي ابنتان مجتهدتان جدًا.'], neg: ['El piso no es caro.|الشقة ليست غالية.', 'Las calles no son anchas.|الشوارع ليست عريضة.'], q: ['¿Es difícil el examen?|هل الامتحان صعب؟', '¿Cómo es tu ciudad?|كيف هي مدينتك؟'] },
    ex: ['Vivo en un piso pequeño pero luminoso.|أعيش في شقة صغيرة لكنها مضيئة.', 'Mi vecina es una señora mayor muy amable.|جارتي سيدة كبيرة في السن لطيفة جدًا.', 'Los médicos españoles son muy profesionales.|الأطباء الإسبان مهنيّون جدًا.', 'La comida siria es deliciosa.|الطعام السوري لذيذ.', 'Necesito una camisa blanca.|أحتاج قميصًا أبيض.', 'Las preguntas del examen son fáciles.|أسئلة الامتحان سهلة.', 'Es un trabajo interesante.|إنه عمل مثير للاهتمام.', 'Mis hijos son altos y delgados.|أولادي طوال ونحيفون.', 'Madrid es una ciudad grande y moderna.|مدريد مدينة كبيرة وحديثة.', 'El café está demasiado caliente.|القهوة ساخنة أكثر من اللازم.', 'Mi mujer es española, de Valencia.|زوجتي إسبانية، من فالنسيا.', 'Tengo un buen trabajo.|عندي عمل جيد.', 'Es un gran día para mi familia.|إنه يوم عظيم لعائلتي.', 'Las naranjas valencianas son famosas.|برتقال فالنسيا مشهور.', 'Busco un piso barato y céntrico.|أبحث عن شقة رخيصة وفي المركز.', 'Los ejercicios no son difíciles.|التمارين ليست صعبة.'],
    err: [['una casa blanco', 'una casa blanca', 'casa مؤنثة، فالصفة تنتهي بـ -a.'], ['las mujeres español', 'las mujeres españolas', 'صفات الجنسية تتأنث وتُجمع: española → españolas.'], ['un grande hombre', 'un gran hombre', 'grande تُختصر إلى gran قبل الاسم المفرد.'], ['unas personas simpáticos', 'unas personas simpáticas', 'persona مؤنثة دائمًا حتى لو تحدثنا عن رجال.'], ['un bueno amigo', 'un buen amigo', 'bueno تصير buen قبل الاسم المذكر المفرد (وكذلك malo → mal).']],
    cmp: { t: 'موقع الصفة: قبل أم بعد؟', x: 'القاعدة العامة: **بعد الاسم** (تميّزه عن غيره). قبل الاسم تأتي صفات قليلة تعطي معنى عاطفيًا أو تقييميًا، وبعضها يغيّر معناه: [[un pobre hombre]] (رجل مسكين) / [[un hombre pobre]] (رجل فقير).' },
    tip: 'عند وصف نفسك في امتحان DELE الشفهي استخدم صفات متنوعة: [[trabajador, responsable, tranquilo, sociable, paciente]].',
    pr: [
      ['Las calles son ___ (estrecho).', ['estrecho', 'estrechas', 'estrechos', 'estrecha'], 1, 'calles مؤنث جمع ← estrechas.'],
      ['Mi madre es ___ (alemán).', ['alemán', 'alemana', 'alemanes', 'alemanas'], 1, 'جنسية تنتهي بساكن: تضيف -a وتسقط النبرة: alemana.'],
      ['Es un ___ amigo.', ['bueno', 'buen', 'buena', 'buenos'], 1, 'bueno → buen قبل الاسم المذكر المفرد.'],
      ['Los exámenes son ___ (fácil).', 'fáciles', 'تنتهي بساكن ← -es.'],
      ['una mujer ___ (inteligente)', 'inteligente', 'الصفة المنتهية بـ -e لا تتغيّر مع المؤنث.'],
      ['Madrid es una ___ ciudad.', ['grande', 'gran', 'grandes', 'granda'], 1, 'قبل الاسم المفرد: gran.'],
      ['¿Cuál es correcta?', ['las personas simpáticos', 'las personas simpáticas', 'los personas simpáticos', 'las persona simpáticas'], 1, 'persona مؤنثة دائمًا.'],
      ['Tengo dos camisas ___ (azul).', 'azules', 'azul + es.']
    ]
  });

  L({
    id: 'a1-04', t: 'El verbo ESTAR y la diferencia entre SER y ESTAR', ta: 'الفعل ESTAR والفرق بين SER و ESTAR',
    sum: 'estar للموقع وللحالة المؤقتة؛ ser للهوية والصفة الثابتة.',
    meaning: 'الفعل [[estar]] يعني أيضًا «يكون»، لكنه يُستخدم لشيئين أساسيين: **المكان** (أين؟) و**الحالة** (كيف؟ الآن). [[Estoy en casa]] = أنا في البيت. [[Estoy cansado]] = أنا متعب (الآن).',
    when: ['الموقع: [[El banco está en la calle Mayor.]]', 'الحالة الجسدية أو النفسية المؤقتة: [[Estoy enfermo. Está contento.]]', 'السؤال عن الحال: [[¿Cómo estás? — Estoy bien.]]', 'حالة الأشياء: [[La tienda está cerrada. El café está frío.]]', 'مع الحال المستمر (estar + gerundio): [[Estoy estudiando.]]'],
    why: 'الإسبانية تفرّق بين «ما هو الشيء» و«كيف هو الآن». هذا الفرق غير موجود في العربية، لذلك اسأل نفسك دائمًا: هل أصف **الهوية/الطبع** (ser) أم **الوضع الحالي/المكان** (estar)؟',
    steps: ['اسأل: هل أتحدث عن مكان شيء أو شخص؟ ← estar', 'هل أتحدث عن حالة يمكن أن تتغيّر قريبًا (متعب، مريض، مشغول، مفتوح)؟ ← estar', 'هل أتحدث عن الهوية، الجنسية، المهنة، الصفة الدائمة، الساعة؟ ← ser', 'صرّف الفعل حسب الفاعل ثم طابِق الصفة'],
    formula: 'sujeto + estar + lugar / adjetivo de estado',
    tables: [
      { v: 'estar', t: 'presente' },
      { head: ['SER (هوية، طبيعة)', 'ESTAR (مكان، حالة)'], es: [0, 1], rows: [['Soy Mones.', 'Estoy en Madrid.'], ['Es médico.', 'Está de vacaciones.'], ['Es simpático.', 'Está enfadado.'], ['La sopa es de tomate.', 'La sopa está fría.'], ['Es una persona nerviosa (طبعه).', 'Está nervioso por el examen (الآن).'], ['La reunión es en el ayuntamiento. (حدث)', 'El ayuntamiento está en la plaza. (موقع مبنى)']] },
      { head: ['الصفة', 'مع ser', 'مع estar'], es: [0, 1, 2], rows: [['listo', 'es listo = ذكي', 'está listo = جاهز'], ['malo', 'es malo = سيّئ', 'está malo = مريض'], ['aburrido', 'es aburrido = مملّ', 'está aburrido = يشعر بالملل'], ['rico', 'es rico = غني', 'está rico = لذيذ (طعام)'], ['abierto', 'es abierto = منفتح (شخص)', 'está abierto = مفتوح']] }
    ],
    forms: { aff: ['Estoy muy bien, gracias.|أنا بخير جدًا، شكرًا.', 'La farmacia está abierta.|الصيدلية مفتوحة.'], neg: ['No estoy cansado.|لستُ متعبًا.', 'El director no está en la oficina.|المدير ليس في المكتب.'], q: ['¿Dónde está la estación?|أين المحطة؟', '¿Cómo están tus hijos?|كيف حال أولادك؟'] },
    ex: ['¿Dónde está el centro de salud?|أين المركز الصحي؟', 'Está al lado de la farmacia.|إنه بجانب الصيدلية.', 'Hoy estoy un poco cansado.|اليوم أنا متعب قليلًا.', 'Mi hija está enferma, tiene fiebre.|ابنتي مريضة، عندها حمّى.', 'Las tiendas están cerradas los domingos.|المتاجر مغلقة أيام الأحد.', 'Estamos muy contentos con el piso nuevo.|نحن سعداء جدًا بالشقة الجديدة.', 'El médico está ocupado ahora.|الطبيب مشغول الآن.', 'La paella está muy rica.|الباييّا لذيذة جدًا.', 'Mi hijo es muy listo.|ابني ذكي جدًا.', '¿Estás listo? Nos vamos.|هل أنت جاهز؟ سنذهب.', 'Madrid está en el centro de España.|مدريد تقع في وسط إسبانيا.', 'Mi mujer es profesora, pero ahora está de baja.|زوجتي معلّمة، لكنها الآن في إجازة مرضية.', 'El café está frío.|القهوة باردة.', 'Estoy nervioso por el examen del DELE.|أنا متوتر بسبب امتحان DELE.', 'La ventana está abierta.|النافذة مفتوحة.', 'Mis padres están en Siria.|والداي في سوريا.', 'La fiesta es en casa de Juan.|الحفلة في بيت خوان (حدث ← ser).'],
    err: [['Soy en casa.', 'Estoy en casa.', 'الموقع دائمًا مع estar.'], ['Madrid es en España.', 'Madrid está en España.', 'موقع المدن والأماكن مع estar.'], ['Estoy médico.', 'Soy médico.', 'المهنة مع ser.'], ['Es cansado.', 'Está cansado.', 'التعب حالة مؤقتة ← estar.'], ['¿Cómo eres? (للسؤال عن الحال)', '¿Cómo estás?', '¿Cómo eres? تسأل عن شخصيتك وطبعك، أما الحال فـ ¿Cómo estás?']],
    cmp: { t: 'قاعدة عملية للتذكّر', x: 'SER: هويّة، أصل، مهنة، صفة دائمة، وقت، حدث (أين تقام الحفلة). ESTAR: موقع، حالة، شعور، نتيجة (مفتوح، مكسور). جملة مفيدة: [[Soy Mones, soy sirio y estoy en España.]]' },
    tip: 'في الامتحانات تأتي أسئلة كثيرة عن الصفات التي يتغيّر معناها: [[ser listo / estar listo]]، [[ser malo / estar malo]]. احفظ الجدول الثالث جيدًا.',
    pr: [
      ['El banco ___ en la plaza.', ['es', 'está', 'hay', 'son'], 1, 'الموقع ← estar.'],
      ['Mi padre ___ médico.', ['está', 'es', 'esta', 'hay'], 1, 'المهنة ← ser.'],
      ['Hoy (yo) ___ muy cansado.', ['soy', 'estoy', 'es', 'está'], 1, 'حالة مؤقتة ← estar، مع yo: estoy.'],
      ['¿Cómo ___ (tú)? — Bien, gracias.', 'estás', 'السؤال عن الحال: ¿Cómo estás?'],
      ['La sopa ___ fría.', ['es', 'está', 'son', 'están'], 1, 'حالة الطعام الآن ← estar.'],
      ['Mis hijos ___ en el colegio.', 'están', 'موقع، والفاعل جمع ← están.'],
      ['«ابني ذكي» =', ['Mi hijo está listo.', 'Mi hijo es listo.', 'Mi hijo es preparado.', 'Mi hijo está inteligente.'], 1, 'ser listo = ذكي؛ estar listo = جاهز.'],
      ['La reunión ___ en la sala 3.', ['está', 'es', 'hay', 'tiene'], 1, 'مكان حدث (اجتماع، حفلة) ← ser.'],
      ['Las tiendas ___ cerradas.', 'están', 'نتيجة/حالة ← estar.']
    ]
  });

  L({
    id: 'a1-05', t: 'HAY y ESTÁ / ESTÁN. Las preposiciones de lugar', ta: 'HAY (يوجد) مقابل ESTÁ/ESTÁN، وحروف المكان',
    sum: 'hay لوجود شيء غير محدد؛ está لموقع شيء محدد ومعروف.',
    meaning: '[[hay]] تعني «يوجد / توجد»، وهي صيغة **واحدة لا تتغيّر** للمفرد والجمع: [[Hay un banco. Hay dos bancos.]] أما [[está / están]] فتحدّد **أين** يوجد شيء نعرفه مسبقًا: [[El banco está en la esquina.]]',
    when: ['hay + un/una/unos/رقم/اسم بلا أداة: [[Hay una farmacia cerca. Hay tres hospitales. Hay leche.]]', 'el/la/los/las + اسم + está(n): [[La farmacia está cerca.]]', 'hay que + مصدر = «يجب (بشكل عام)»: [[Hay que pedir cita.]]'],
    why: 'السؤال الذي يجيب عنه hay هو «هل يوجد؟»، والسؤال الذي يجيب عنه está هو «أين هو؟». لذلك لا يجتمع hay مع أداة التعريف el/la.',
    steps: ['هل تُخبر بوجود شيء (لم يُذكر من قبل)؟ ← hay + un/una/رقم', 'هل تحدّد مكان شيء معروف؟ ← el/la + اسم + está، والجمع están', 'أضف حرف المكان المناسب: en, al lado de, delante de...', 'تذكّر: de + el = del (al lado del banco)، و a + el = al'],
    formula: 'Hay + un/una/número + sustantivo  ·  El/La + sustantivo + está + lugar',
    tables: [
      { head: ['حرف المكان', 'المعنى', 'مثال'], es: [0, 2], rows: [['en', 'في / على', 'Las llaves están en la mesa.'], ['encima de', 'فوق', 'El libro está encima de la mesa.'], ['debajo de', 'تحت', 'El gato está debajo de la cama.'], ['al lado de', 'بجانب', 'La farmacia está al lado del banco.'], ['delante de', 'أمام', 'Hay un taxi delante del hotel.'], ['detrás de', 'خلف', 'El parque está detrás del colegio.'], ['enfrente de', 'مقابل', 'El metro está enfrente de mi casa.'], ['entre … y …', 'بين … و …', 'El bar está entre el cine y el banco.'], ['cerca de / lejos de', 'قريب من / بعيد عن', 'Mi trabajo está lejos de casa.'], ['a la derecha / a la izquierda de', 'على يمين / يسار', 'El ascensor está a la derecha.']] }
    ],
    forms: { aff: ['En mi barrio hay dos supermercados.|في حيّي يوجد سوبرماركتان.', 'El supermercado está enfrente del parque.|السوبرماركت مقابل الحديقة.'], neg: ['No hay pan.|لا يوجد خبز.', 'El autobús no está aquí.|الحافلة ليست هنا.'], q: ['¿Hay un cajero por aquí?|هل يوجد صرّاف آلي قريب؟', '¿Dónde están los servicios?|أين دورات المياه؟'] },
    ex: ['Perdone, ¿hay una farmacia por aquí?|عفوًا، هل توجد صيدلية هنا؟', 'Sí, hay una al final de la calle.|نعم، توجد واحدة في نهاية الشارع.', 'La farmacia está al lado del supermercado.|الصيدلية بجانب السوبرماركت.', 'En la clase hay quince alumnos.|في الصف خمسة عشر طالبًا.', 'No hay sillas libres.|لا توجد كراسٍ فارغة.', 'Las llaves están encima de la mesa.|المفاتيح فوق الطاولة.', 'Hay mucha gente en el metro.|يوجد كثير من الناس في المترو.', 'El ayuntamiento está en la plaza Mayor.|البلدية في الساحة الكبرى.', '¿Qué hay en la nevera?|ماذا يوجد في الثلاجة؟', 'Hay leche, huevos y fruta.|يوجد حليب وبيض وفاكهة.', 'Mi casa está cerca de la estación.|بيتي قريب من المحطة.', 'Hay que llevar el pasaporte.|يجب إحضار جواز السفر.', 'El parque está detrás del hospital.|الحديقة خلف المستشفى.', 'Entre el banco y el bar hay una panadería.|بين البنك والبار يوجد مخبز.', 'Los servicios están a la izquierda.|دورات المياه على اليسار.', '¿Hay algún problema?|هل هناك أي مشكلة؟'],
    err: [['Hay el banco en la plaza.', 'El banco está en la plaza.', 'لا نستخدم hay مع أداة التعريف؛ الشيء المعروف نحدّد مكانه بـ está.'], ['Hay dos bancos en la calle? → Hayn', 'Hay dos bancos.', 'hay لا تُجمع أبدًا.'], ['Está una farmacia cerca.', 'Hay una farmacia cerca.', 'للإخبار بوجود شيء غير محدد نستخدم hay.'], ['al lado de el banco', 'al lado del banco', 'de + el تُدمج إلى del.']],
    cmp: { t: 'hay / está / tiene', x: '[[Hay un parque en mi barrio]] (وجود). [[El parque está cerca]] (موقع). [[Mi barrio tiene un parque]] (ملكية/احتواء). الجملتان الأولى والثالثة متقاربتان في المعنى.' },
    tip: 'أسئلة الاتجاهات تتكرر في DELE A2 (المحادثة) وفي الحياة اليومية: احفظ [[¿Hay un/una … por aquí?]] و [[¿Dónde está …?]]',
    pr: [
      ['En mi calle ___ una farmacia.', ['está', 'hay', 'es', 'están'], 1, 'إخبار بوجود شيء غير محدد ← hay.'],
      ['La farmacia ___ al lado del banco.', ['hay', 'está', 'es', 'tiene'], 1, 'موقع شيء معروف ← está.'],
      ['¿Dónde ___ los servicios?', ['hay', 'está', 'están', 'son'], 2, 'شيء معروف بالجمع ← están.'],
      ['___ tres hospitales en la ciudad.', ['Hay', 'Están', 'Son', 'Hayn'], 0, 'hay لا تتغيّر مع الجمع.'],
      ['El metro está enfrente ___ hotel.', 'del', 'de + el = del.'],
      ['«بين البنك والمقهى» = ___ el banco y el café', 'entre', 'entre … y …'],
      ['¿Cuál es correcta?', ['Hay el médico en la consulta.', 'El médico está en la consulta.', 'Está un médico en la consulta.', 'El médico hay en la consulta.'], 1, 'شخص معروف (el médico) ← está.']
    ]
  });

  L({
    id: 'a1-06', t: 'El presente de indicativo: verbos regulares', ta: 'المضارع (الحاضر): الأفعال المنتظمة',
    sum: 'كيف نصرّف أي فعل منتظم ينتهي بـ -ar أو -er أو -ir في الحاضر.',
    meaning: 'زمن الحاضر ([[presente]]) يعبّر عن: ما نفعله **عادةً** ([[Trabajo en un hotel]])، والحقائق ([[El agua hierve a 100 grados]])، وما يحدث الآن بشكل عام، وحتى عن المستقبل القريب المخطّط ([[Mañana voy al médico]]).',
    when: ['العادات والروتين: [[Desayuno a las ocho.]]', 'الحقائق والمعلومات الثابتة: [[Vivo en Madrid.]]', 'المستقبل القريب المؤكّد: [[El lunes empiezo el curso.]]', 'تقديم الطلبات بلطف في المحادثة: [[¿Me pasas la sal?]]'],
    why: 'الفعل الإسباني يتكوّن من **جذر** (يحمل المعنى) و**نهاية** (تحمل الشخص والزمن). عندما تعرف النهايات الست لكل مجموعة، تستطيع تصريف آلاف الأفعال المنتظمة.',
    steps: ['خذ المصدر وحدّد مجموعته: -ar (hablar) أو -er (comer) أو -ir (vivir)', 'احذف النهاية لتحصل على الجذر: habl-، com-، viv-', 'أضف نهاية الشخص المطلوب: habl + o = hablo', 'لاحظ: نهايات -er و -ir متطابقة ما عدا nosotros (-emos / -imos) و vosotros (-éis / -ís)', 'للنفي ضع no قبل الفعل مباشرة: [[No hablo alemán.]]'],
    formula: 'raíz (habl-) + terminación (-o, -as, -a, -amos, -áis, -an)',
    tables: [
      { v: 'hablar', t: 'presente', title: 'hablar (-ar)' }, { v: 'comer', t: 'presente', title: 'comer (-er)' }, { v: 'vivir', t: 'presente', title: 'vivir (-ir)' },
      { head: ['الشخص', '-ar', '-er', '-ir'], es: [0, 1, 2, 3], rows: [['yo', '-o', '-o', '-o'], ['tú', '-as', '-es', '-es'], ['él/ella/usted', '-a', '-e', '-e'], ['nosotros', '-amos', '-emos', '-imos'], ['vosotros', '-áis', '-éis', '-ís'], ['ellos/ustedes', '-an', '-en', '-en']] }
    ],
    forms: { aff: ['Trabajo de lunes a viernes.|أعمل من الإثنين إلى الجمعة.', 'Mis hijos aprenden inglés en el colegio.|أولادي يتعلّمون الإنجليزية في المدرسة.'], neg: ['No como carne de cerdo.|لا آكل لحم الخنزير.', 'Mi mujer no trabaja los sábados.|زوجتي لا تعمل أيام السبت.'], q: ['¿Dónde vives?|أين تسكن؟', '¿A qué hora abren las tiendas?|متى تفتح المتاجر؟'] },
    ex: ['Hablo árabe, español y un poco de inglés.|أتكلّم العربية والإسبانية وقليلًا من الإنجليزية.', 'Vivimos en un piso en el barrio de Tetuán.|نعيش في شقة في حي تطوان.', '¿Trabajas cerca de casa?|هل تعمل قريبًا من البيت؟', 'Mi hijo estudia ingeniería en la universidad.|ابني يدرس الهندسة في الجامعة.', 'Los domingos comemos en familia.|أيام الأحد نأكل مع العائلة.', 'Mi mujer cocina muy bien.|زوجتي تطبخ جيدًا جدًا.', '¿Bebes té o café?|هل تشرب الشاي أم القهوة؟', 'Leo el periódico todas las mañanas.|أقرأ الجريدة كل صباح.', 'Ellos escriben correos a sus amigos.|هم يكتبون رسائل إلكترونية لأصدقائهم.', 'Abrimos la tienda a las nueve.|نفتح المتجر في التاسعة.', '¿Comprendes la pregunta?|هل تفهم السؤال؟', 'Recibo muchas cartas del banco.|أستلم رسائل كثيرة من البنك.', 'Usted necesita una cita previa.|حضرتك تحتاج موعدًا مسبقًا.', 'No compramos en ese supermercado.|لا نشتري من ذلك السوبرماركت.', '¿Vosotros vivís en el centro?|هل تسكنون في المركز؟', 'Mañana visito a mi hermano.|غدًا أزور أخي.', 'Ellos venden fruta en el mercado.|هم يبيعون الفاكهة في السوق.'],
    err: [['Yo habla español.', 'Yo hablo español.', 'مع yo تنتهي الأفعال المنتظمة بـ -o.'], ['Nosotros vivemos aquí.', 'Nosotros vivimos aquí.', 'أفعال -ir مع nosotros: -imos (وليس -emos).'], ['Yo no como no carne.', 'No como carne.', 'no تأتي مرة واحدة قبل الفعل.'], ['Ellos trabajan en lunes.', 'Ellos trabajan los lunes.', 'للأيام المتكرّرة: los lunes (بدون en).'], ['Usted hablas muy bien.', 'Usted habla muy bien.', 'usted يُصرّف مثل él (الشخص الثالث).']],
    cmp: { t: 'الحاضر البسيط أم estar + gerundio؟', x: 'الحاضر البسيط للعادة: [[Trabajo en un hotel]] (أعمل في فندق عمومًا). أما الحدث الجاري في هذه اللحظة بالذات فنستخدم [[estar + gerundio]]: [[Ahora estoy trabajando]] (أنا أعمل الآن في هذه اللحظة). ستدرسه في A2.' },
    tip: 'أذكى طريقة للتدريب: اختر فعلًا كل يوم وصرّفه بصوت عالٍ مع الأشخاص الستة، ثم اكتب جملة حقيقية عن حياتك بكل صيغة. جرّب ذلك في «مختبر القواعد».',
    pr: [
      ['Yo ___ (trabajar) en un restaurante.', 'trabajo', 'الجذر trabaj- + o.'],
      ['Nosotros ___ (vivir) en Madrid.', 'vivimos', 'أفعال -ir مع nosotros: -imos.'],
      ['¿Tú ___ (comer) carne?', 'comes', 'أفعال -er مع tú: -es.'],
      ['Mi mujer ___ (hablar) francés.', ['hablo', 'hablas', 'habla', 'hablan'], 2, 'الشخص الثالث المفرد: habla.'],
      ['Vosotros ___ (aprender) muy rápido.', ['aprendéis', 'aprendís', 'aprenden', 'aprendemos'], 0, 'أفعال -er مع vosotros: -éis.'],
      ['Ellos ___ (escribir) un correo.', ['escriben', 'escribin', 'escribís', 'escribimos'], 0, 'أفعال -ir مع ellos: -en.'],
      ['Usted ___ (necesitar) el NIE.', 'necesita', 'usted مثل él: necesita.'],
      ['«لا أشرب القهوة» =', ['No bebo café.', 'Bebo no café.', 'No bebe café.', 'Yo no bebes café.'], 0, 'no قبل الفعل، ومع yo: bebo.'],
      ['Mis hijos ___ (estudiar) por la tarde.', 'estudian', 'ellos ← -an.']
    ]
  });

  L({
    id: 'a1-07', t: 'Verbos irregulares en presente: TENER, HACER, IR y los verbos en -GO', ta: 'الأفعال الشاذة في المضارع: tener و hacer و ir والأفعال المنتهية بـ -go',
    sum: 'أكثر الأفعال استخدامًا شاذة. نتعلّم أنماطها بدل حفظها عشوائيًا.',
    meaning: 'بعض أهم الأفعال لا تتبع القاعدة كاملة. الخبر الجيد أن شذوذها **منظَّم في مجموعات**: مجموعة يتغيّر فيها **yo** فقط (hago, pongo, salgo...)، ومجموعة تتغيّر في yo وفي الجذر معًا (tengo/tienes)، وأفعال شاذة تمامًا (ir, ser, estar).',
    when: ['[[tener]] = يملك، وأيضًا للعمر والحالات: [[Tengo 55 años. Tengo hambre/frío/prisa.]]', '[[tener que + infinitivo]] = يجب عليّ: [[Tengo que ir al banco.]]', '[[hacer]] = يفعل/يصنع، وللطقس: [[Hace calor. Hace frío.]]', '[[ir a + lugar]] = يذهب إلى: [[Voy al médico.]]', '[[salir]] = يخرج/يغادر؛ [[poner]] = يضع/يشغّل؛ [[venir]] = يأتي؛ [[decir]] = يقول'],
    why: 'الأفعال الأكثر استخدامًا في أي لغة تتآكل وتتغيّر عبر القرون، ولذلك تصبح شاذة. لكن بقية صيغها غالبًا منتظمة: [[hago]] شاذة، أما [[haces, hace, hacemos]] فمنتظمة.',
    steps: ['المجموعة 1 — يتغيّر yo فقط بإضافة -go: [[hacer → hago, poner → pongo, salir → salgo, traer → traigo, caer → caigo]]', 'المجموعة 2 — yo بـ -go + تغيّر في الجذر: [[tener → tengo, tienes; venir → vengo, vienes; decir → digo, dices]]', 'المجموعة 3 — yo بـ -zco: [[conocer → conozco, conducir → conduzco, traducir → traduzco]]', 'المجموعة 4 — yo شاذ تمامًا: [[saber → sé, ver → veo, dar → doy, estar → estoy]]', 'المجموعة 5 — شاذة كليًا: [[ir (voy, vas, va...), ser (soy, eres...)]]'],
    formula: 'yo: -go / -zco  ·  resto: casi regular',
    tables: [{ v: 'tener', t: 'presente' }, { v: 'hacer', t: 'presente' }, { v: 'ir', t: 'presente' }, { v: 'venir', t: 'presente' }, { v: 'decir', t: 'presente' }, { v: 'salir', t: 'presente' }, { v: 'conocer', t: 'presente' }, { v: 'saber', t: 'presente' }],
    forms: { aff: ['Tengo dos hijos y una hija.|عندي ولدان وبنت.', 'Voy al trabajo en metro.|أذهب إلى العمل بالمترو.'], neg: ['No tengo tiempo hoy.|ليس لديّ وقت اليوم.', 'No sé dónde está.|لا أعرف أين هو.'], q: ['¿Cuántos años tienes?|كم عمرك؟', '¿Qué haces los fines de semana?|ماذا تفعل في عطل نهاية الأسبوع؟'] },
    ex: ['Tengo cincuenta y ocho años.|عمري ثمانية وخمسون عامًا.', 'Tengo que renovar el NIE.|يجب أن أجدّد بطاقة الإقامة (NIE).', 'Hoy hace mucho calor.|اليوم الجو حار جدًا.', '¿Qué haces? — Hago la comida.|ماذا تفعل؟ — أحضّر الطعام.', 'Voy a la mezquita los viernes.|أذهب إلى المسجد أيام الجمعة.', 'Mis hijos van al colegio en autobús.|أولادي يذهبون إلى المدرسة بالحافلة.', 'Salgo de casa a las siete y media.|أخرج من البيت في السابعة والنصف.', 'Pongo las llaves en la mesa.|أضع المفاتيح على الطاولة.', 'Vengo de Siria, pero vivo aquí desde 2016.|أتيت من سوريا، لكني أعيش هنا منذ 2016.', '¿Vienes con nosotros?|هل تأتي معنا؟', 'Digo la verdad.|أقول الحقيقة.', '¿Qué dice el médico?|ماذا يقول الطبيب؟', 'Conozco bien Madrid.|أعرف مدريد جيدًا.', 'No sé hablar alemán.|لا أعرف التكلّم بالألمانية.', 'Conduzco un taxi.|أقود سيارة أجرة.', 'Traigo pan para todos.|أحضر خبزًا للجميع.', 'Veo la tele por la noche.|أشاهد التلفاز في الليل.'],
    err: [['Yo tieno 50 años.', 'Tengo 50 años.', 'tener مع yo: tengo.'], ['Soy 50 años.', 'Tengo 50 años.', 'العمر في الإسبانية يُعبَّر عنه بـ tener وليس ser.'], ['Yo hace la comida.', 'Hago la comida.', 'hacer مع yo: hago.'], ['Yo conoco Madrid.', 'Conozco Madrid.', 'الأفعال المنتهية بـ -cer بعد حرف علّة: yo -zco.'], ['Yo sabo la respuesta.', 'Sé la respuesta.', 'saber مع yo: sé (بنبرة).'], ['Voy en el médico.', 'Voy al médico.', 'ir a + el = al.']],
    cmp: { t: 'saber أم conocer؟ (كلاهما «يعرف»)', x: '[[saber]] = يعرف **معلومة** أو يعرف **كيف يفعل شيئًا**: [[Sé tu dirección. Sé cocinar.]] / [[conocer]] = يعرف **شخصًا أو مكانًا** (له خبرة به): [[Conozco a tu hermano. Conozco Sevilla.]] ملاحظة: مع الأشخاص نضيف a: [[conocer a alguien]].' },
    tip: 'تعابير tener مهمة جدًا وتتكرر في الامتحانات: [[tener hambre]] (جائع)، [[tener sed]] (عطشان)، [[tener frío/calor]]، [[tener sueño]] (نعسان)، [[tener prisa]] (مستعجل)، [[tener miedo]] (خائف)، [[tener razón]] (محق).',
    pr: [
      ['Yo ___ (tener) tres hijos.', 'tengo', 'tener مع yo: tengo.'],
      ['¿Tú ___ (venir) a la fiesta?', 'vienes', 'venir: e→ie مع tú: vienes.'],
      ['Yo ___ (hacer) los deberes.', ['hazo', 'hago', 'hace', 'haco'], 1, 'hacer → hago.'],
      ['Nosotros ___ (ir) al mercado.', ['vamos', 'imos', 'vais', 'van'], 0, 'ir شاذ كليًا: vamos.'],
      ['Yo no ___ (saber) la respuesta.', 'sé', 'saber → sé (بنبرة لتمييزها عن se).', ['se']],
      ['Yo ___ (conocer) a tu hermano.', 'conozco', '-cer → -zco مع yo.'],
      ['«عمري 60 سنة» =', ['Soy 60 años.', 'Estoy 60 años.', 'Tengo 60 años.', 'Hay 60 años.'], 2, 'العمر بـ tener.'],
      ['¿Qué ___ (decir) el médico?', 'dice', 'decir: e→i ← dice.'],
      ['Yo ___ (salir) de casa a las 8.', 'salgo', 'salir → salgo.'],
      ['«أعرف الطبخ» =', ['Conozco cocinar.', 'Sé cocinar.', 'Sabo cocinar.', 'Conozco a cocinar.'], 1, 'معرفة كيفية فعل شيء ← saber + مصدر.']
    ]
  });

  L({
    id: 'a1-08', t: 'Verbos con cambio vocálico: e>ie, o>ue, e>i, u>ue', ta: 'الأفعال ذات التغيّر في حرف العلّة: e→ie و o→ue و e→i',
    sum: 'في بعض الأفعال يتغيّر حرف العلّة في الجذر عندما يقع عليه النبر — نمط «الحذاء».',
    meaning: 'في أفعال كثيرة جدًا يتغيّر حرف العلّة الأخير في الجذر عندما يكون **منبورًا** (عليه الضغط الصوتي): [[pensar → pienso]]، [[poder → puedo]]، [[pedir → pido]]. النهايات تبقى منتظمة تمامًا.',
    when: ['e → ie: [[querer, pensar, empezar, preferir, entender, cerrar, tener*, venir*]]', 'o → ue: [[poder, volver, dormir, encontrar, costar, recordar, contar]]', 'e → i (أفعال -ir فقط): [[pedir, repetir, servir, seguir, vestir]]', 'u → ue: فعل واحد مهم هو [[jugar → juego]]'],
    why: 'السبب صوتي تاريخي: حرف العلّة المنبور في اللاتينية تحوّل إلى صوت مزدوج. لذلك **nosotros و vosotros لا يتغيّران** لأن النبر فيهما يقع على النهاية وليس على الجذر: [[pensamos, pensáis]].',
    steps: ['تعلّم الفعل الجديد مع نوع تغيّره: [[poder (ue)]]، [[pedir (i)]]', 'صرّف الفعل كأنه منتظم', 'غيّر حرف العلّة الأخير في الجذر في: yo, tú, él, ellos', 'اترك nosotros و vosotros بلا تغيير', 'شكل الأشخاص المتغيّرة في الجدول يشبه «الحذاء» ولذلك تسمى verbos de bota'],
    formula: 'pens- → piens- (yo, tú, él, ellos) · pens- (nosotros, vosotros)',
    tables: [{ v: 'querer', t: 'presente', sub: 'e > ie' }, { v: 'poder', t: 'presente', sub: 'o > ue' }, { v: 'pedir', t: 'presente', sub: 'e > i' }, { v: 'jugar', t: 'presente', sub: 'u > ue' }, { v: 'dormir', t: 'presente', sub: 'o > ue' }, { v: 'empezar', t: 'presente', sub: 'e > ie' }],
    forms: { aff: ['Quiero un café con leche.|أريد قهوة بالحليب.', 'La clase empieza a las seis.|الدرس يبدأ في السادسة.'], neg: ['No puedo ir mañana.|لا أستطيع الذهاب غدًا.', 'No entiendo esta palabra.|لا أفهم هذه الكلمة.'], q: ['¿Puede repetir, por favor?|هل يمكنك الإعادة من فضلك؟', '¿Cuánto cuesta el billete?|كم ثمن التذكرة؟'] },
    ex: ['¿Puede hablar más despacio, por favor?|هل يمكنك التكلّم ببطء أكثر من فضلك؟', 'No entiendo bien el español rápido.|لا أفهم الإسبانية السريعة جيدًا.', 'Quiero pedir una cita con el médico de cabecera.|أريد طلب موعد مع طبيب الأسرة.', 'El billete de metro cuesta un euro y medio.|تذكرة المترو تكلّف يورو ونصف.', 'Duermo siete horas cada noche.|أنام سبع ساعات كل ليلة.', 'Mis hijos juegan al fútbol los sábados.|أولادي يلعبون كرة القدم أيام السبت.', 'Prefiero el té al café.|أفضّل الشاي على القهوة.', 'Vuelvo a casa a las seis.|أعود إلى البيت في السادسة.', 'El curso empieza en septiembre.|الدورة تبدأ في سبتمبر.', 'Pienso que es una buena idea.|أعتقد أنها فكرة جيدة.', 'No recuerdo su nombre.|لا أتذكّر اسمه.', 'El camarero sirve la comida.|النادل يقدّم الطعام.', 'Podemos ir juntos, si quieres.|يمكننا الذهاب معًا إن أردت.', '¿Repites la pregunta, por favor?|هل تعيد السؤال من فضلك؟', 'Las tiendas cierran a las nueve.|المتاجر تغلق في التاسعة.', 'Siempre pido lo mismo en este bar.|دائمًا أطلب الشيء نفسه في هذا البار.', 'No encuentro mis gafas.|لا أجد نظّارتي.'],
    err: [['Nosotros podemos → nosotros puedemos', 'Nosotros podemos', 'nosotros و vosotros لا يتغيّر فيهما الجذر.'], ['Yo quero un café.', 'Quiero un café.', 'querer: e → ie ← quiero.'], ['Yo pedo la cuenta.', 'Pido la cuenta.', 'pedir: e → i ← pido.'], ['Yo jugo al fútbol.', 'Juego al fútbol.', 'jugar: u → ue ← juego.'], ['¿Cuánto costa?', '¿Cuánto cuesta?', 'costar: o → ue ← cuesta.']],
    cmp: { t: 'pedir أم preguntar؟', x: 'كلاهما يُترجم أحيانًا «يطلب/يسأل»: [[pedir]] = يطلب شيئًا (طعامًا، موعدًا، مساعدة): [[Pido la cuenta.]] / [[preguntar]] = يسأل للحصول على معلومة: [[Pregunto la hora.]]' },
    tip: 'العبارة الأهم لك في إسبانيا: [[¿Puede repetir, por favor? / ¿Puede hablar más despacio?]] — استخدمها بلا خجل؛ الإسبان يقدّرونها.',
    pr: [
      ['Yo ___ (querer) un té.', 'quiero', 'e → ie: quiero.'],
      ['Nosotros ___ (poder) venir mañana.', ['puedemos', 'podemos', 'pudemos', 'pueden'], 1, 'nosotros لا يتغيّر: podemos.'],
      ['¿Cuánto ___ (costar) el piso?', 'cuesta', 'o → ue: cuesta.'],
      ['Yo siempre ___ (pedir) agua.', ['pedo', 'pido', 'pide', 'pedimos'], 1, 'e → i: pido.'],
      ['Mis hijos ___ (jugar) en el parque.', 'juegan', 'u → ue: juegan.'],
      ['Vosotros ___ (dormir) poco.', ['duermís', 'dormís', 'duermen', 'dormen'], 1, 'vosotros لا يتغيّر: dormís.'],
      ['La película ___ (empezar) a las diez.', 'empieza', 'e → ie: empieza.'],
      ['Yo no ___ (entender) la pregunta.', 'entiendo', 'e → ie: entiendo.'],
      ['«أطلب الحساب» =', ['Pregunto la cuenta.', 'Pido la cuenta.', 'Pedo la cuenta.', 'Pide la cuenta.'], 1, 'طلب شيء ← pedir: pido.']
    ]
  });

  L({
    id: 'a1-09', t: 'Los verbos reflexivos y la rutina diaria', ta: 'الأفعال الانعكاسية والروتين اليومي',
    sum: 'أفعال مثل levantarse و ducharse: الفاعل يفعل الفعل لنفسه، ونحتاج ضميرًا خاصًا.',
    meaning: 'الفعل الانعكاسي هو فعل **يعود أثره على الفاعل نفسه**: [[Me ducho]] = أستحمّ (أغسل نفسي). يُعرف في المعجم بأنه ينتهي بـ [[-se]]: [[levantarse, ducharse, llamarse, acostarse]]. يحتاج إلى **ضمير انعكاسي** يطابق الفاعل: [[me, te, se, nos, os, se]].',
    when: ['الروتين اليومي: [[Me levanto a las siete. Me ducho. Me visto.]]', 'الاسم: [[Me llamo Mones.]]', 'التغيّرات والمشاعر: [[Me preocupo, me enfado, me alegro]]', 'بعض الأفعال يتغيّر معناها: [[ir (يذهب) / irse (يغادر)]]، [[llamar (يتصل) / llamarse (يُسمّى)]]'],
    why: 'في العربية نستخدم أحيانًا وزن «تفعّل/افتعل» لهذا المعنى (اغتسل، تحمّم). الإسبانية تستخدم الضمير بدلًا من تغيير وزن الفعل: [[lavo el coche]] (أغسل السيارة) / [[me lavo]] (أغتسل).',
    steps: ['احذف -se من المصدر: levantarse → levantar', 'صرّف الفعل عاديًا: levanto, levantas...', 'ضع الضمير المناسب **قبل** الفعل المصرّف: me levanto, te levantas, se levanta...', 'للنفي: no + ضمير + فعل: [[No me levanto temprano.]]', 'مع المصدر يلتصق الضمير بنهايته: [[Voy a levantarme]] أو قبل الفعل الأول: [[Me voy a levantar]]'],
    formula: 'pronombre reflexivo (me/te/se/nos/os/se) + verbo conjugado',
    tables: [{ v: 'levantarse', t: 'presente' }, { v: 'acostarse', t: 'presente', sub: 'o > ue' }, { v: 'vestirse', t: 'presente', sub: 'e > i' },
      { head: ['الفعل', 'المعنى', 'مثال'], es: [0, 2], rows: [['despertarse (ie)', 'يستيقظ', 'Me despierto a las 6.'], ['levantarse', 'ينهض من السرير', 'Me levanto enseguida.'], ['ducharse', 'يستحمّ (دوش)', 'Me ducho por la mañana.'], ['afeitarse', 'يحلق ذقنه', 'Me afeito cada día.'], ['vestirse (i)', 'يرتدي ملابسه', 'Me visto rápido.'], ['peinarse', 'يمشّط شعره', 'Se peina.'], ['acostarse (ue)', 'يذهب إلى السرير', 'Me acuesto a las 11.'], ['llamarse', 'يُسمّى', 'Me llamo Mones.'], ['quedarse', 'يبقى', 'Me quedo en casa.'], ['irse', 'يغادر/يذهب', 'Me voy ya.']] }],
    forms: { aff: ['Me levanto a las seis y media.|أنهض في السادسة والنصف.', 'Nos acostamos tarde los sábados.|ننام متأخرين أيام السبت.'], neg: ['No me afeito los domingos.|لا أحلق أيام الأحد.', 'Mi hijo no se levanta temprano.|ابني لا ينهض مبكرًا.'], q: ['¿Cómo te llamas?|ما اسمك؟', '¿A qué hora te acuestas?|متى تذهب إلى النوم؟'] },
    ex: ['Me despierto a las seis, pero me levanto a las seis y cuarto.|أستيقظ في السادسة، لكني أنهض في السادسة والربع.', 'Primero me ducho y después desayuno.|أولًا أستحمّ ثم أتناول الفطور.', 'Mi mujer se viste muy elegante.|زوجتي ترتدي ملابس أنيقة جدًا.', 'Los niños se acuestan a las nueve y media.|الأطفال ينامون في التاسعة والنصف.', '¿Cómo se llama usted?|ما اسم حضرتك؟', 'Me llamo Mones Hasan.|اسمي مؤنس حسن.', 'Los domingos nos quedamos en casa.|أيام الأحد نبقى في البيت.', 'Me voy, que es tarde.|سأغادر، فالوقت متأخر.', 'No te preocupes, todo está bien.|لا تقلق، كل شيء بخير.', 'Mi hijo se afeita cada dos días.|ابني يحلق كل يومين.', 'Nos vemos mañana.|نلتقي غدًا.', 'Me lavo las manos antes de comer.|أغسل يديّ قبل الأكل.', '¿Os levantáis temprano?|هل تنهضون مبكرًا؟', 'Siempre me siento en el mismo sitio.|دائمًا أجلس في المكان نفسه.', 'Voy a ducharme ahora.|سأستحمّ الآن.', 'Me pongo el abrigo porque hace frío.|أرتدي المعطف لأن الجو بارد.'],
    err: [['Yo levanto a las siete.', 'Me levanto a las siete.', 'بدون me يصبح المعنى «أرفع (شيئًا)».'], ['Me lavo mis manos.', 'Me lavo las manos.', 'مع أجزاء الجسم نستخدم el/la/los/las وليس الملكية، لأن me يوضّح صاحبها.'], ['Se llamo Mones.', 'Me llamo Mones.', 'الضمير يطابق الفاعل: yo → me.'], ['Voy a me duchar.', 'Voy a ducharme. / Me voy a duchar.', 'الضمير يلتصق بالمصدر أو يسبق الفعل المصرّف، ولا يقع بينهما.']],
    cmp: { t: 'lavar / lavarse — الفرق بين العادي والانعكاسي', x: '[[Lavo el coche]] (أغسل السيارة: الفعل يقع على شيء آخر). [[Me lavo]] (أغتسل: الفعل يقع عليّ). [[Lavo a mi hijo]] (أغسّل ابني). نفس الفعل، والضمير هو الذي يحدّد على من يقع الفعل.' },
    tip: 'وصف الروتين اليومي سؤال شبه مؤكد في DELE A2 الكتابي والشفهي. حضّر فقرة عن يومك باستخدام: [[primero, luego, después, más tarde, por último]].',
    pr: [
      ['Yo ___ (levantarse) a las siete.', 'me levanto', 'الضمير me + levanto.'],
      ['¿Cómo ___ (llamarse) tú?', 'te llamas', 'tú ← te llamas.'],
      ['Los niños ___ a las nueve. (acostarse)', ['se acostan', 'se acuestan', 'les acuestan', 'acuestan'], 1, 'o→ue والضمير se للجمع.'],
      ['Nosotros ___ en casa. (quedarse)', 'nos quedamos', 'nos + quedamos.'],
      ['Me lavo ___ dientes.', ['mis', 'los', 'tus', 'sus'], 1, 'أجزاء الجسم مع الأداة: los dientes.'],
      ['Voy a ___ ahora. (ducharse, yo)', 'ducharme', 'الضمير يلتصق بالمصدر: ducharme.', ['me duchar']],
      ['¿Cuál es correcta?', ['Mi mujer se viste rápido.', 'Mi mujer viste se rápido.', 'Mi mujer se vestí rápido.', 'Mi mujer me viste rápido.'], 0, 'se قبل الفعل المصرّف، vestir: e→i.']
    ]
  });

  L({
    id: 'a1-10', t: 'GUSTAR, ENCANTAR, DOLER y verbos similares', ta: 'الفعل GUSTAR (يعجب) وأفعال مشابهة',
    sum: 'في gustar «الشيء» هو الفاعل، والشخص هو المعجَب. تركيب مختلف عن العربية.',
    meaning: '[[Me gusta el café]] تعني حرفيًا «القهوة **تعجبني**». الشيء (el café) هو **الفاعل**، والشخص يُعبَّر عنه بضمير المفعول غير المباشر: [[me, te, le, nos, os, les]]. لذلك يتصرّف الفعل حسب الشيء: مفرد → [[gusta]]، جمع → [[gustan]].',
    when: ['الأذواق: [[Me gusta el fútbol. Me gustan los gatos.]]', 'مع فعل: [[Me gusta pasear.]] (دائمًا gusta بالمفرد)', '[[encantar]] = يعجب كثيرًا جدًا: [[Me encanta Sevilla.]]', '[[doler]] = يؤلم: [[Me duele la cabeza. Me duelen los pies.]]', 'أفعال مشابهة: [[interesar, importar, molestar, parecer, quedar (bien/mal)]]'],
    why: 'لهذا التركيب نظير في العربية: «تعجبني القهوة» — الفاعل هو القهوة! فكّر بالعربية بهذه الطريقة وستصبح gustar سهلة.',
    steps: ['حدّد الشخص المعجَب ← اختر الضمير: me, te, le, nos, os, les', 'حدّد الشيء المعجِب ← هل هو مفرد أو فعل (gusta) أم جمع (gustan)؟', 'للتوضيح أو التأكيد أضف a + شخص: [[A mi mujer le gusta el té. A mí me gusta el café.]]', 'للنفي: no قبل الضمير: [[No me gusta.]]', 'للاتفاق: [[A mí también / A mí tampoco]]؛ للاختلاف: [[A mí sí / A mí no]]'],
    formula: '(A + persona) + me/te/le/nos/os/les + gusta(n) + cosa',
    tables: [{ head: ['التأكيد (اختياري)', 'الضمير', 'مفرد / فعل', 'جمع'], es: [0, 1, 2, 3], rows: [['a mí', 'me', 'gusta el té', 'gustan las frutas'], ['a ti', 'te', 'gusta el té', 'gustan las frutas'], ['a él / ella / usted', 'le', 'gusta el té', 'gustan las frutas'], ['a nosotros/as', 'nos', 'gusta el té', 'gustan las frutas'], ['a vosotros/as', 'os', 'gusta el té', 'gustan las frutas'], ['a ellos / ellas / ustedes', 'les', 'gusta el té', 'gustan las frutas']] },
      { head: ['التعبير', 'المعنى'], es: [0], rows: [['Me encanta.', 'يعجبني كثيرًا جدًا'], ['Me gusta mucho.', 'يعجبني كثيرًا'], ['Me gusta.', 'يعجبني'], ['No me gusta mucho.', 'لا يعجبني كثيرًا'], ['No me gusta nada.', 'لا يعجبني أبدًا'], ['Odio… / Detesto…', 'أكره…']] }],
    forms: { aff: ['Me gusta mucho pasear por el Retiro.|يعجبني كثيرًا التنزّه في حديقة الريتيرو.', 'A mis hijos les encantan los videojuegos.|أولادي يحبّون ألعاب الفيديو كثيرًا.'], neg: ['No me gustan las películas de miedo.|لا تعجبني أفلام الرعب.', 'A mi mujer no le gusta el frío.|زوجتي لا يعجبها البرد.'], q: ['¿Te gusta la comida española?|هل يعجبك الطعام الإسباني؟', '¿Qué te duele?|ماذا يؤلمك؟'] },
    ex: ['Me gusta mucho el aceite de oliva español.|يعجبني زيت الزيتون الإسباني كثيرًا.', 'Me gustan los mercados tradicionales.|تعجبني الأسواق التقليدية.', 'A mi mujer le gusta cocinar.|زوجتي يعجبها الطبخ.', '¿Os gusta vivir en Madrid?|هل يعجبكم العيش في مدريد؟', 'Nos encanta la playa en verano.|نحبّ الشاطئ كثيرًا في الصيف.', 'No me gusta nada el ruido.|لا يعجبني الضجيج أبدًا.', 'Me duele la espalda desde ayer.|ظهري يؤلمني منذ الأمس.', 'A mi hija le duelen los oídos.|أذنا ابنتي تؤلمانها.', 'Me interesa mucho la historia de España.|يهمّني تاريخ إسبانيا كثيرًا.', '¿Te importa cerrar la ventana?|هل يزعجك أن تغلق النافذة؟ (طلب مهذّب)', 'Me molesta el humo del tabaco.|يزعجني دخان التبغ.', 'Esta camisa te queda muy bien.|هذا القميص يليق بك جدًا.', 'A mí me gusta el té. — A mí también.|أنا أحب الشاي. — وأنا أيضًا.', 'No me gusta el café solo. — A mí sí.|لا تعجبني القهوة السوداء. — أمّا أنا فتعجبني.', '¿Qué te parece el piso? — Me parece caro.|ما رأيك في الشقة؟ — تبدو لي غالية.', 'A los españoles les gusta cenar tarde.|الإسبان يحبّون العشاء متأخرين.'],
    err: [['Yo gusto el café.', 'Me gusta el café.', 'الشخص ليس الفاعل؛ نستخدم الضمير me والفعل gusta.'], ['Me gusta los gatos.', 'Me gustan los gatos.', 'الشيء جمع ← gustan.'], ['A mi mujer gusta el té.', 'A mi mujer le gusta el té.', 'الضمير le ضروري حتى مع وجود a mi mujer.'], ['Me gustan bailar y cantar.', 'Me gusta bailar y cantar.', 'مع الأفعال نستخدم gusta بالمفرد دائمًا.'], ['Me duele mi cabeza.', 'Me duele la cabeza.', 'أجزاء الجسم بأداة التعريف.']],
    cmp: { t: 'gustar / querer / encantar', x: '[[Me gusta Ana]] (تعجبني آنا — قد تحمل معنى إعجاب عاطفي). [[Quiero a Ana]] (أحبّ آنا — محبة عائلية أو عاطفية عميقة). [[Me encanta]] للأشياء والأنشطة، وقلّما يُستخدم للأشخاص. مع الأشياء: [[me gusta / me encanta]]، وليس querer.' },
    tip: 'عند الطبيب: [[Me duele aquí]] (يؤلمني هنا) مع الإشارة. وللألم المستمر: [[Tengo dolor de cabeza / de estómago / de muelas]].',
    pr: [
      ['Me ___ los tomates.', ['gusta', 'gustan', 'gusto', 'gustas'], 1, 'los tomates جمع ← gustan.'],
      ['A mi mujer ___ gusta el té.', ['la', 'le', 'se', 'les'], 1, 'للشخص الثالث المفرد: le.'],
      ['Nos ___ viajar.', ['gusta', 'gustan', 'gustamos', 'gustáis'], 0, 'مع الفعل (مصدر) ← gusta.'],
      ['¿A ti ___ gusta el fútbol?', 'te', 'a ti ← te.'],
      ['Me ___ (doler) los pies.', 'duelen', 'los pies جمع، doler: o→ue ← duelen.'],
      ['A mis hijos ___ encanta la pizza.', 'les', 'ellos ← les.'],
      ['«لا أحب البرد» =', ['No gusto el frío.', 'No me gusta el frío.', 'Me no gusta el frío.', 'No me gustan el frío.'], 1, 'no قبل الضمير، والشيء مفرد.'],
      ['Me gusta el té. — A mí ___. (أنا أيضًا)', ['también', 'tampoco', 'sí', 'no'], 0, 'الاتفاق مع جملة مثبتة: también.']
    ]
  });

  L({
    id: 'a1-11', t: 'Preguntas y negación: los interrogativos', ta: 'السؤال والنفي: أدوات الاستفهام',
    sum: 'كيف تطرح أسئلة صحيحة وتنفي بدقة، مع علامات الاستفهام الإسبانية.',
    meaning: 'تُكتب الأسئلة الإسبانية بعلامتين: **مقلوبة في البداية** [[¿]] وعادية في النهاية [[?]]، وكذلك التعجب [[¡ … !]]. أدوات الاستفهام تحمل **دائمًا نبرة**: [[qué, quién, dónde, cuándo, cómo, cuánto, cuál, por qué]].',
    when: ['سؤال نعم/لا: نفس ترتيب الجملة مع نغمة صاعدة: [[¿Tienes coche?]]', 'سؤال بأداة: الأداة أولًا ثم الفعل ثم الفاعل: [[¿Dónde vive tu hermano?]]', 'النفي: [[no]] قبل الفعل. والنفي المزدوج **صحيح ومطلوب** في الإسبانية: [[No tengo nada. No viene nadie. No voy nunca.]]'],
    why: 'العلامة المقلوبة تخبرك من البداية أن الجملة سؤال، وهذا مهم لأن السؤال والخبر قد يكونان بنفس الكلمات تمامًا: [[Tienes coche.]] / [[¿Tienes coche?]]',
    steps: ['ابدأ بـ ¿ وانتهِ بـ ?', 'ضع أداة الاستفهام (بنبرة) أولًا، ويمكن أن يسبقها حرف جر: [[¿De dónde eres? ¿Con quién vives? ¿A qué hora…?]]', 'ضع الفعل بعد الأداة مباشرة، والفاعل بعده: [[¿Qué estudia tu hijo?]]', 'للنفي ضع no قبل الفعل (وقبل الضمائر): [[No lo sé.]]', 'مع nada / nadie / nunca / tampoco بعد الفعل نحتاج no قبله'],
    formula: '¿ (preposición +) interrogativo + verbo + sujeto ?',
    tables: [{ head: ['الأداة', 'المعنى', 'مثال'], es: [0, 2], rows: [['¿Qué?', 'ماذا؟ ما؟', '¿Qué haces?'], ['¿Quién? / ¿Quiénes?', 'من؟', '¿Quién es?'], ['¿Dónde? / ¿Adónde? / ¿De dónde?', 'أين؟ / إلى أين؟ / من أين؟', '¿Adónde vas?'], ['¿Cuándo?', 'متى؟', '¿Cuándo es la cita?'], ['¿Cómo?', 'كيف؟', '¿Cómo se dice…?'], ['¿Cuánto/a/os/as?', 'كم؟', '¿Cuántos hijos tienes?'], ['¿Cuál? / ¿Cuáles?', 'أيّ؟ / ما هو؟', '¿Cuál es tu número?'], ['¿Por qué?', 'لماذا؟', '¿Por qué estudias español?'], ['¿A qué hora?', 'في أي ساعة؟', '¿A qué hora abre?']] },
      { head: ['إثبات', 'نفي', 'المعنى'], es: [0, 1], rows: [['algo', 'no … nada', 'شيء / لا شيء'], ['alguien', 'no … nadie', 'أحد / لا أحد'], ['siempre', 'no … nunca', 'دائمًا / أبدًا'], ['también', 'tampoco', 'أيضًا / ولا أيضًا'], ['algún, alguna', 'ningún, ninguna', 'أيّ / لا أيّ']] }],
    forms: { aff: ['Siempre desayuno en casa.|دائمًا أفطر في البيت.', 'Alguien llama a la puerta.|أحدهم يطرق الباب.'], neg: ['No desayuno nunca fuera.|لا أفطر خارج البيت أبدًا.', 'No hay nadie en la oficina.|لا يوجد أحد في المكتب.'], q: ['¿Por qué no vienes?|لماذا لا تأتي؟', '¿Cuál es su número de teléfono?|ما رقم هاتف حضرتك؟'] },
    ex: ['¿De dónde es usted? — Soy de Siria.|من أين حضرتك؟ — أنا من سوريا.', '¿Cuántos años tiene su hija?|كم عمر ابنتك؟', '¿A qué hora cierra el banco?|متى يغلق البنك؟', '¿Qué significa «empadronarse»?|ماذا تعني «empadronarse»؟', '¿Cómo se dice «شكرًا» en español?|كيف نقول «شكرًا» بالإسبانية؟', '¿Quién es el responsable?|من المسؤول؟', '¿Cuál es su dirección?|ما عنوان حضرتك؟', '¿Por qué estudias español? — Porque quiero la nacionalidad.|لماذا تدرس الإسبانية؟ — لأني أريد الجنسية.', '¿Con quién vives?|مع من تعيش؟', '¿Adónde vais este verano?|إلى أين تذهبون هذا الصيف؟', 'No entiendo nada.|لا أفهم شيئًا.', 'No conozco a nadie aquí.|لا أعرف أحدًا هنا.', 'Nunca llego tarde.|لا أتأخر أبدًا.', 'No tengo ningún problema.|ليس لديّ أي مشكلة.', 'Yo tampoco fumo.|وأنا أيضًا لا أدخّن.', '¿Hay alguna pregunta? — No, ninguna.|هل هناك أي سؤال؟ — لا، ولا سؤال.'],
    err: [['¿Donde vives?', '¿Dónde vives?', 'أدوات الاستفهام تحمل نبرة دائمًا.'], ['Dónde vives?', '¿Dónde vives?', 'علامة الاستفهام المقلوبة ضرورية في البداية.'], ['Tengo nada.', 'No tengo nada.', 'مع nada بعد الفعل نحتاج no قبله.'], ['¿Qué es tu número?', '¿Cuál es tu número?', 'قبل es مع المعلومات الشخصية نستخدم cuál (أيّ واحد من الممكن).'], ['¿Por qué? — Por qué es caro.', '¿Por qué? — Porque es caro.', 'السؤال por qué (كلمتان بنبرة)، والجواب porque (كلمة واحدة).']],
    cmp: { t: '¿Qué es…? أم ¿Cuál es…؟', x: '[[¿Qué es]] لطلب **تعريف**: [[¿Qué es el NIE?]] (ما هو الـ NIE؟). [[¿Cuál es]] لطلب **معلومة محدّدة** من بين احتمالات: [[¿Cuál es tu NIE?]] (ما رقم NIE الخاص بك؟).' },
    tip: 'في المحادثة الشفهية لـ DELE A2 يجب أن تطرح أسئلة على الممتحِن أيضًا. تدرّب على صياغة 3 أسئلة لكل موقف.',
    pr: [
      ['¿___ vives? — En Madrid.', ['Qué', 'Dónde', 'Cuándo', 'Quién'], 1, 'السؤال عن المكان: dónde.'],
      ['¿___ hijos tienes? — Tres.', ['Cuánto', 'Cuántos', 'Cuántas', 'Cuál'], 1, 'hijos مذكّر جمع ← cuántos.'],
      ['¿___ es tu número de teléfono?', ['Qué', 'Cuál', 'Cómo', 'Quién'], 1, 'معلومة محدّدة ← cuál.'],
      ['No hay ___ en casa. (لا أحد)', 'nadie', 'no … nadie.'],
      ['¿Por qué estudias? — ___ quiero la nacionalidad.', ['Por qué', 'Porque', 'Porqué', 'Por que'], 1, 'الجواب: porque (كلمة واحدة بلا نبرة).'],
      ['¿A ___ hora sale el tren?', 'qué', 'a qué hora.'],
      ['«لا أدخّن أبدًا» =', ['Nunca no fumo.', 'No fumo nunca.', 'No fumo siempre.', 'Fumo nunca no.'], 1, 'no + فعل + nunca، أو Nunca fumo.'],
      ['Yo no como carne. — Yo ___.', ['también', 'tampoco', 'sí', 'nunca'], 1, 'الاتفاق مع جملة منفية: tampoco.']
    ]
  });

  L({
    id: 'a1-12', t: 'Perífrasis básicas: IR A, TENER QUE, HAY QUE, PODER, QUERER + infinitivo', ta: 'التراكيب الفعلية الأساسية: الخطط، الوجوب، القدرة والرغبة',
    sum: 'فعل مصرّف + مصدر: أسهل طريقة للتعبير عن المستقبل والواجب والقدرة.',
    meaning: 'الـ [[perífrasis]] تركيب من فعل مصرّف ومصدر. **تصرّف الفعل الأول فقط** ويبقى الثاني مصدرًا كما هو. هذا يتيح لك التعبير عن المستقبل والواجب والقدرة بمعرفة تصريف الحاضر فقط!',
    when: ['[[ir a + infinitivo]] = سوف (خطط ونوايا): [[Voy a estudiar.]]', '[[tener que + infinitivo]] = يجب على شخص محدد: [[Tengo que trabajar.]]', '[[hay que + infinitivo]] = يجب (بشكل عام، بلا فاعل): [[Hay que pagar en efectivo.]]', '[[poder + infinitivo]] = يستطيع؛ ومع الطلب المهذب: [[¿Puedo pasar?]]', '[[querer + infinitivo]] = يريد: [[Quiero aprender.]]', '[[deber + infinitivo]] = ينبغي (نصيحة أو التزام): [[Debes descansar.]]'],
    why: 'هذه التراكيب تحلّ مشكلة كبيرة لمن يبدأ: بدل تعلّم تصريف المستقبل الآن، تستطيع قول [[Voy a viajar]] فورًا. وهي فعلًا الأكثر استخدامًا في الكلام اليومي في إسبانيا.',
    steps: ['اختر التركيب حسب المعنى (خطة؟ واجب؟ قدرة؟)', 'صرّف الفعل الأول في الحاضر: voy, tengo, puedo...', 'أضف حرف الربط إن وُجد: ir **a**، tener **que**، hay **que**', 'أضف المصدر بلا تغيير: estudiar, comer, vivir', 'للنفي: no قبل الفعل المصرّف: [[No voy a ir.]]'],
    formula: 'ir + a + infinitivo · tener + que + infinitivo · hay que + infinitivo',
    tables: [{ v: 'ir', t: 'presente', title: 'ir (+ a + infinitivo)' }, { v: 'tener', t: 'presente', title: 'tener (+ que + inf.)' }, { v: 'poder', t: 'presente', title: 'poder (+ inf.)' },
      { head: ['التركيب', 'المعنى', 'مثال'], es: [0, 2], rows: [['ir a + inf.', 'سوف (نية)', 'Voy a llamar al banco.'], ['tener que + inf.', 'يجب عليّ', 'Tengo que llevar el pasaporte.'], ['hay que + inf.', 'يجب (عمومًا)', 'Hay que pedir cita previa.'], ['poder + inf.', 'يستطيع', 'Puedo ayudarte.'], ['querer + inf.', 'يريد', 'Quiero vivir aquí.'], ['deber + inf.', 'ينبغي', 'Debes tomar la medicina.'], ['necesitar + inf.', 'يحتاج أن', 'Necesito hablar con usted.']] }],
    forms: { aff: ['Este verano vamos a visitar Sevilla.|هذا الصيف سنزور إشبيلية.', 'Tengo que ir a la oficina de extranjería.|يجب أن أذهب إلى مكتب الأجانب.'], neg: ['No vamos a salir hoy.|لن نخرج اليوم.', 'No tienes que pagar nada.|لا يجب أن تدفع شيئًا.'], q: ['¿Qué vas a hacer el sábado?|ماذا ستفعل يوم السبت؟', '¿Puedo pagar con tarjeta?|هل أستطيع الدفع بالبطاقة؟'] },
    ex: ['Mañana voy a pedir cita en el centro de salud.|غدًا سأطلب موعدًا في المركز الصحي.', 'Mi hijo va a estudiar en la universidad.|ابني سيدرس في الجامعة.', '¿Vas a venir a la reunión?|هل ستأتي إلى الاجتماع؟', 'Tengo que renovar el permiso de residencia.|يجب أن أجدّد تصريح الإقامة.', 'Tenemos que hablar con el casero.|يجب أن نتكلّم مع مالك الشقة.', 'Hay que llevar dos fotos de carné.|يجب إحضار صورتين شخصيتين.', 'Para la nacionalidad hay que aprobar el DELE A2 y el CCSE.|للحصول على الجنسية يجب النجاح في DELE A2 و CCSE.', '¿Puedo hacerle una pregunta?|هل يمكنني أن أسألك سؤالًا؟', 'No puedo dormir bien por el ruido.|لا أستطيع النوم جيدًا بسبب الضجيج.', 'Quiero mejorar mi español.|أريد أن أحسّن إسبانيّتي.', 'Debes descansar más.|ينبغي أن ترتاح أكثر.', '¿Me puede ayudar, por favor?|هل يمكنك مساعدتي من فضلك؟', 'Necesito hablar con el director.|أحتاج أن أتكلّم مع المدير.', 'No vamos a comprar el piso, vamos a alquilarlo.|لن نشتري الشقة، سنستأجرها.', 'Va a llover esta tarde.|ستمطر بعد الظهر.', 'No hay que tener miedo al examen.|لا داعي للخوف من الامتحان.'],
    err: [['Voy estudiar.', 'Voy a estudiar.', 'ir تحتاج دائمًا a قبل المصدر.'], ['Tengo de trabajar.', 'Tengo que trabajar.', 'tener + que (وليس de).'], ['Tengo que trabajo.', 'Tengo que trabajar.', 'الفعل الثاني يبقى مصدرًا.'], ['Hay que yo pago.', 'Tengo que pagar.', 'hay que بلا فاعل؛ للشخص المحدد استخدم tener que.'], ['Voy a ir a ir…', 'Voy a ir al médico.', 'ir a ir صحيحة تمامًا: «سأذهب».']],
    cmp: { t: 'tener que / hay que / deber', x: '[[Tengo que]] = واجب **عليّ أنا** (ضرورة). [[Hay que]] = قاعدة عامة **للجميع** بلا فاعل. [[Debo / Debes]] = التزام أخلاقي أو **نصيحة**: [[Debes ir al médico]] (ينبغي أن تذهب للطبيب).' },
    tip: 'في كتابة DELE A2 يُطلب كثيرًا الحديث عن خطط مستقبلية: [[Este fin de semana voy a…]] مع ربط الأفكار بـ [[primero, después, y luego]].',
    pr: [
      ['Mañana ___ visitar a mi hermano.', ['voy', 'voy a', 'voy de', 'voy que'], 1, 'ir + a + مصدر.'],
      ['(Yo) ___ que trabajar el sábado.', 'tengo', 'tener que: tengo que.'],
      ['Para entrar ___ que enseñar el DNI.', ['tiene', 'hay', 'es', 'está'], 1, 'قاعدة عامة بلا فاعل ← hay que.'],
      ['¿___ (yo, poder) pagar con tarjeta?', 'puedo', 'poder: o→ue ← puedo.'],
      ['Mis hijos van a ___ (estudiar) medicina.', 'estudiar', 'بعد ir a يأتي المصدر بلا تغيير.'],
      ['«لن نخرج» =', ['No vamos a salir.', 'Vamos no a salir.', 'No vamos salir.', 'Vamos a no salimos.'], 0, 'no قبل الفعل المصرّف.'],
      ['Estás muy cansado. ___ descansar.', ['Debes', 'Hay', 'Vas', 'Tienes'], 0, 'نصيحة ← deber + مصدر (tienes que descansar صحيح أيضًا لكن يحتاج que).']
    ]
  });
})(window.ECM);
