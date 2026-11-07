/* Tense guide for the Verb Laboratory: Arabic explanation, formation, uses, signal words, typical mistakes
 * and ≥10 examples per tense. In examples, [[form=infinitive]] marks the verb; scripts/check.js verifies that
 * every marked form really belongs to that tense of that verb. [[...]] in prose = Spanish text. */
(function (ECM) {
  'use strict';
  ECM.VERB_TENSES = {
    presente: {
      what: 'يعبّر عن الحاضر: ما يحدث الآن، والعادات، والحقائق الدائمة، وأحيانًا المستقبل القريب المؤكّد.',
      form: 'نحذف ‎-ar/-er/-ir من المصدر ونضيف النهايات: ‎-ar: ‎-o, -as, -a, -amos, -áis, -an · ‎-er: ‎-o, -es, -e, -emos, -éis, -en · ‎-ir: ‎-o, -es, -e, -imos, -ís, -en.',
      uses: ['العادات والروتين: [[Me levanto a las siete.]]', 'الحقائق العامة: [[El agua hierve a 100 grados.]]', 'ما يحدث الآن (مع أو بدون estar + gerundio): [[¿Qué haces?]]', 'المستقبل المبرمَج: [[Mañana salgo para Málaga.]]', 'الطلبات المؤدّبة: [[¿Me pasas la sal?]]'],
      signals: 'siempre, normalmente, todos los días, a menudo, nunca, los lunes, ahora',
      mistakes: ['الأفعال ذات تغيّر الجذر لا تتغيّر مع nosotros و vosotros: [[pensamos]] وليس *piensamos.', 'شواذ المتكلّم yo: [[tengo, hago, pongo, salgo, conozco, sé, doy, voy, estoy, soy]].'],
      ex: ['Mones [[vive=vivir]] en Madrid.|مؤنس يعيش في مدريد.', 'Los lunes [[voy=ir]] al mercado.|أيام الاثنين أذهب إلى السوق.', 'Mi mujer [[trabaja=trabajar]] en un hospital.|زوجتي تعمل في مستشفى.', '¿[[Hablas=hablar]] árabe?|هل تتكلّم العربية؟', 'Nosotros [[comemos=comer]] a las dos.|نأكل في الثانية.', 'Mis hijos [[estudian=estudiar]] en la universidad.|أولادي يدرسون في الجامعة.', '[[Tengo=tener]] cita con el médico mañana.|عندي موعد مع الطبيب غدًا.', 'El autobús [[sale=salir]] cada diez minutos.|تنطلق الحافلة كل عشر دقائق.', '¿Cuánto [[cuesta=costar]] el pan?|كم ثمن الخبز؟', 'No [[entiendo=entender]] esta carta.|لا أفهم هذه الرسالة.', 'En invierno [[llueve=llover]] mucho en Galicia.|في الشتاء تمطر كثيرًا في غاليسيا.', 'Mañana [[empieza=empezar]] el curso.|غدًا تبدأ الدورة.']
    },
    perfecto: {
      what: 'الماضي المرتبط بالحاضر: حدث في فترة لم تنتهِ بعد (اليوم، هذا الأسبوع، هذه السنة) أو تجربة في الحياة دون تحديد وقت.',
      form: 'haber في المضارع ([[he, has, ha, hemos, habéis, han]]) + اسم المفعول (participio): ‎-ar → ‎-ado، ‎-er/-ir → ‎-ido. شواذ: [[hecho, dicho, visto, puesto, escrito, abierto, vuelto, roto, muerto, cubierto, resuelto]].',
      uses: ['ما حدث اليوم أو هذا الأسبوع: [[Hoy he trabajado mucho.]]', 'التجارب: [[¿Has estado en Sevilla?]]', 'مع ya / todavía no: [[Ya he comido. Todavía no he terminado.]]'],
      signals: 'hoy, esta mañana, esta semana, este año, ya, todavía no, nunca, alguna vez, últimamente',
      mistakes: ['اسم المفعول لا يتغيّر بعد haber: [[ella ha comido]] وليس *comida.', 'لا نفصل haber عن اسم المفعول: [[lo he visto]] وليس *he lo visto.'],
      ex: ['Hoy [[he desayunado=desayunar]] muy pronto.|اليوم أفطرت مبكرًا جدًا.', '¿[[Has visto=ver]] mis gafas?|هل رأيت نظّارتي؟', 'Este año [[hemos viajado=viajar]] a Granada.|هذه السنة سافرنا إلى غرناطة.', 'Mi hija todavía no [[ha vuelto=volver]].|ابنتي لم تعد بعد.', 'Nunca [[he comido=comer]] pulpo.|لم آكل الأخطبوط أبدًا.', '¿Ya [[habéis hecho=hacer]] los deberes?|هل أنهيتم الواجبات؟', 'Esta semana [[han abierto=abrir]] una tienda nueva.|هذا الأسبوع افتتحوا محلًّا جديدًا.', 'Últimamente [[he dormido=dormir]] mal.|مؤخرًا نمت نومًا سيئًا.', '¿Alguna vez [[has escrito=escribir]] una carta en español?|هل كتبت يومًا رسالة بالإسبانية؟', 'Esta mañana me [[ha llamado=llamar]] el banco.|هذا الصباح اتصل بي البنك.', 'Ya [[he puesto=poner]] la lavadora.|شغّلت الغسالة.', 'Mis nietos [[han roto=romper]] la ventana.|كسر أحفادي النافذة.']
    },
    imperfecto: {
      what: 'الماضي «المفتوح»: للوصف في الماضي، والعادات المتكرّرة، والأفعال المستمرّة التي قطعها حدث آخر.',
      form: '‎-ar: ‎-aba, -abas, -aba, -ábamos, -abais, -aban · ‎-er/-ir: ‎-ía, -ías, -ía, -íamos, -íais, -ían. ثلاثة شواذ فقط: [[ser → era, ir → iba, ver → veía]].',
      uses: ['العادات في الماضي: [[De niño jugaba en la calle.]]', 'الوصف (الطقس، العمر، المكان، الحالة): [[Hacía frío y era tarde.]]', 'الخلفية لحدث آخر: [[Dormía cuando sonó el teléfono.]]', 'الطلب المؤدّب: [[Quería una cita, por favor.]]'],
      signals: 'antes, de niño, cuando era joven, siempre, todos los veranos, mientras, a menudo',
      mistakes: ['لا نستعمله لحدث واحد منتهٍ له بداية ونهاية: [[Ayer fui al médico]] وليس *iba (إلا إذا كان خلفية).'],
      ex: ['Cuando era joven [[vivía=vivir]] en Alepo.|عندما كنت شابًا كنت أعيش في حلب.', 'Mi padre [[trabajaba=trabajar]] en el puerto.|كان أبي يعمل في الميناء.', 'Todos los veranos [[íbamos=ir]] a la playa.|كل صيف كنّا نذهب إلى الشاطئ.', 'La casa [[era=ser]] pequeña pero bonita.|كان البيت صغيرًا لكنه جميل.', '[[Hacía=hacer]] mucho calor aquel día.|كان الجو حارًّا جدًا ذلك اليوم.', 'Mientras yo [[cocinaba=cocinar]], mi mujer leía.|بينما كنت أطبخ كانت زوجتي تقرأ.', 'De niños [[veíamos=ver]] la tele en casa del vecino.|في صغرنا كنّا نشاهد التلفاز في بيت الجار.', 'Antes no [[hablaba=hablar]] nada de español.|في السابق لم أكن أتكلّم الإسبانية أبدًا.', 'Mi abuela [[tenía=tener]] ochenta años.|كانت جدّتي في الثمانين.', 'Siempre [[comíamos=comer]] juntos los viernes.|كنّا دائمًا نأكل معًا أيام الجمعة.', '[[Estaba=estar]] en la ducha cuando llamaste.|كنت في الحمّام حين اتصلت.', '[[Quería=querer]] pedir información, por favor.|كنت أريد طلب معلومات من فضلك.']
    },
    indefinido: {
      what: 'الماضي «المغلق»: حدث منتهٍ في وقت محدّد من الماضي (أمس، السنة الماضية، سنة 2010).',
      form: '‎-ar: ‎-é, -aste, -ó, -amos, -asteis, -aron · ‎-er/-ir: ‎-í, -iste, -ió, -imos, -isteis, -ieron. جذور شاذة بدون نبرة: [[tuve, estuve, hice, puse, pude, supe, quise, vine, dije, traje, conduje]]؛ و[[fui]] لـ ser و ir.',
      uses: ['حدث منتهٍ في وقت محدّد: [[Ayer compré pan.]]', 'سلسلة أحداث متتالية: [[Llegué, comí y me acosté.]]', 'مدة محدّدة منتهية: [[Viví diez años en Alepo.]]', 'الحدث الذي يقطع الخلفية: [[Dormía cuando sonó el teléfono.]]'],
      signals: 'ayer, anoche, anteayer, la semana pasada, el año pasado, en 2010, hace dos días, de repente',
      mistakes: ['الجذور الشاذة لا تحمل نبرة: [[tuvo, hizo, dijo]] وليس *tuvó.', 'تغيير إملائي مع yo: [[busqué, llegué, empecé]].', 'أفعال ‎-ir ذات تغيّر الجذر تتغيّر في الغائب: [[pidió, durmieron, sintió]].'],
      ex: ['Ayer [[compré=comprar]] un móvil nuevo.|أمس اشتريت هاتفًا جديدًا.', '[[Llegué=llegar]] a España en 2005.|وصلت إلى إسبانيا سنة 2005.', 'El año pasado [[fuimos=ir]] a Toledo.|السنة الماضية ذهبنا إلى طليطلة.', 'Mi hijo [[nació=nacer]] en Barcelona.|وُلد ابني في برشلونة.', 'Anoche [[vimos=ver]] una película muy buena.|شاهدنا البارحة فيلمًا جيدًا جدًا.', '¿Qué [[hiciste=hacer]] el fin de semana?|ماذا فعلت في عطلة نهاية الأسبوع؟', 'La Constitución se [[aprobó=aprobar]] en 1978.|أُقرّ الدستور سنة 1978.', 'El médico me [[dijo=decir]] que descansara.|قال لي الطبيب أن أرتاح.', '[[Tuve=tener]] que esperar dos horas.|اضطررت إلى الانتظار ساعتين.', 'Mis padres [[vinieron=venir]] a vernos en agosto.|جاء والداي لزيارتنا في أغسطس.', 'El camarero [[pidió=pedir]] perdón.|اعتذر النادل.', 'Hace dos días [[empecé=empezar]] un curso de español.|قبل يومين بدأت دورة إسبانية.']
    },
    pluscuamperfecto: {
      what: 'الماضي الأسبق: حدث وقع قبل حدث آخر في الماضي.',
      form: 'haber في الماضي المستمر ([[había, habías, había, habíamos, habíais, habían]]) + اسم المفعول.',
      uses: ['حدث سابق لحدث ماضٍ: [[Cuando llegué, el tren ya había salido.]]', 'في الكلام المنقول: [[Dijo que había terminado.]]', 'تجربة لأول مرة حتى لحظة في الماضي: [[Nunca había visto la nieve.]]'],
      signals: 'ya, todavía no, antes, nunca … hasta entonces, cuando llegué',
      mistakes: ['لا تخلطه بالماضي البسيط: الحدث الأقدم فقط يأخذ pluscuamperfecto.'],
      ex: ['Cuando llegamos, la película ya [[había empezado=empezar]].|عندما وصلنا كان الفيلم قد بدأ.', 'Nunca [[había visto=ver]] el mar antes.|لم أكن قد رأيت البحر من قبل.', 'Me dijo que [[había perdido=perder]] el pasaporte.|قال لي إنه أضاع جواز السفر.', 'Ya [[habíamos cenado=cenar]] cuando llamaste.|كنّا قد تعشّينا حين اتصلت.', 'Mi mujer [[había preparado=preparar]] todo.|كانت زوجتي قد حضّرت كل شيء.', 'No sabía que [[habías vuelto=volver]].|لم أكن أعرف أنك عدت.', 'Los niños ya se [[habían acostado=acostarse]].|كان الأطفال قد ناموا.', 'El banco [[había cerrado=cerrar]] cuando llegué.|كان البنك قد أغلق حين وصلت.', 'Pensé que [[habíais salido=salir]].|ظننت أنكم خرجتم.', 'Antes de venir a España [[había estudiado=estudiar]] un poco de español.|قبل مجيئي إلى إسبانيا كنت قد درست قليلًا من الإسبانية.', 'Me contaron que [[había llovido=llover]] toda la noche.|حكوا لي أنها أمطرت طوال الليل.']
    },
    anterior: {
      what: 'زمن أدبي نادر جدًا اليوم: حدث سابق مباشرة لحدث ماضٍ آخر. يظهر في الكتب القديمة والنصوص الرسمية. في الكلام يُستعمل بدله pluscuamperfecto أو indefinido.',
      form: 'haber في الماضي البسيط ([[hube, hubiste, hubo, hubimos, hubisteis, hubieron]]) + اسم المفعول. يأتي غالبًا بعد [[apenas, en cuanto, cuando, después de que, una vez que]].',
      uses: ['حدث سابق مباشرة (أسلوب أدبي): [[Apenas hubo terminado, se marchó.]]'],
      signals: 'apenas, en cuanto, tan pronto como, una vez que, después de que (أسلوب أدبي)',
      mistakes: ['لا تستعمله في الكلام اليومي ولا في الكتابة العادية؛ تكفي معرفته عند القراءة.'],
      ex: ['Apenas [[hubo terminado=terminar]] la cena, se fue a dormir.|ما إن أنهى العشاء حتى ذهب لينام.', 'En cuanto [[hubieron llegado=llegar]], empezó la ceremonia.|ما إن وصلوا حتى بدأ الحفل.', 'Cuando [[hube leído=leer]] la carta, la guardé.|بعد أن قرأت الرسالة حفظتها.', 'Una vez que [[hubimos comido=comer]], salimos a pasear.|بعد أن أكلنا خرجنا للتنزّه.', 'Tan pronto como [[hubo salido=salir]] el sol, partieron.|ما إن أشرقت الشمس حتى انطلقوا.', 'Apenas [[hubiste cerrado=cerrar]] la puerta, sonó el timbre.|ما إن أغلقت الباب حتى رنّ الجرس.', 'Después de que [[hubieron firmado=firmar]] el tratado, hubo paz.|بعد أن وقّعوا المعاهدة حلّ السلام.', 'Cuando el rey [[hubo muerto=morir]], su hijo heredó el trono.|بعد أن مات الملك ورث ابنه العرش.', 'En cuanto [[hubisteis llegado=llegar]], os sentasteis a la mesa.|ما إن وصلتم حتى جلستم إلى المائدة.', 'Apenas [[hube dicho=decir]] esto, me arrepentí.|ما إن قلت هذا حتى ندمت.']
    },
    futuro: {
      what: 'المستقبل: ما سيحدث، والوعود، والتوقّعات، والاحتمال في الحاضر (¿Dónde estará?).',
      form: 'المصدر كاملًا + ‎-é, -ás, -á, -emos, -éis, -án (للمجموعات الثلاث). جذور شاذة: [[tendr-, pondr-, saldr-, vendr-, podr-, sabr-, cabr-, habr-, querr-, har-, dir-]].',
      uses: ['المستقبل: [[El año que viene viajaré a Granada.]]', 'الوعود: [[Te llamaré mañana.]]', 'التوقّع: [[Mañana lloverá.]]', 'الاحتمال في الحاضر: [[¿Qué hora será? Serán las tres.]]'],
      signals: 'mañana, pasado mañana, el año que viene, la próxima semana, dentro de dos días, algún día',
      mistakes: ['النهايات تحمل نبرة إلا مع nosotros: [[hablaré, hablarás, hablaremos]].', 'في الكلام اليومي يُستعمل كثيرًا ir a + المصدر: [[voy a comer]].'],
      ex: ['Mañana [[iré=ir]] a la oficina de extranjería.|غدًا سأذهب إلى مكتب الأجانب.', 'El examen [[será=ser]] en mayo.|سيكون الامتحان في مايو.', 'Te [[llamaré=llamar]] esta noche.|سأتصل بك الليلة.', 'El año que viene [[tendremos=tener]] más tiempo.|في السنة القادمة سيكون لدينا وقت أكثر.', 'Mañana [[hará=hacer]] sol en Andalucía.|غدًا سيكون الجو مشمسًا في الأندلس.', '¿[[Vendrás=venir]] a la boda?|هل ستأتي إلى العرس؟', 'No te [[diré=decir]] nada.|لن أقول لك شيئًا.', 'Mis hijos [[podrán=poder]] votar el año que viene.|سيستطيع أولادي التصويت في السنة القادمة.', '¿Dónde [[estará=estar]] mi móvil?|أين يا ترى هاتفي؟', '[[Saldremos=salir]] temprano para evitar el tráfico.|سنخرج مبكرًا لتجنّب الزحام.', 'Algún día [[sabré=saber]] hablar perfectamente.|يومًا ما سأعرف الكلام بإتقان.', 'Os [[pondremos=poner]] una nota el viernes.|سنضع لكم علامة يوم الجمعة.']
    },
    futuroPerfecto: {
      what: 'المستقبل التام: حدث سيكون قد انتهى قبل لحظة في المستقبل، أو احتمال عن الماضي القريب.',
      form: 'haber في المستقبل ([[habré, habrás, habrá, habremos, habréis, habrán]]) + اسم المفعول.',
      uses: ['انتهاء قبل وقت مستقبلي: [[A las diez ya habré terminado.]]', 'احتمال عن الماضي: [[¿Por qué no ha venido? Se habrá dormido.]]'],
      signals: 'para mañana, antes de, a las…, dentro de…, cuando…',
      mistakes: ['يُستعمل كثيرًا للتخمين: [[Habrá perdido el autobús]] = ربما فاتته الحافلة.'],
      ex: ['Para junio [[habré aprobado=aprobar]] el DELE.|بحلول يونيو سأكون قد نجحت في DELE.', 'A las ocho ya [[habremos cenado=cenar]].|في الثامنة سنكون قد تعشّينا.', 'Cuando llegues, [[habré preparado=preparar]] la comida.|عندما تصل سأكون قد حضّرت الطعام.', 'No contesta: [[habrá salido=salir]].|لا يجيب: ربما خرج.', 'Dentro de un año [[habrás aprendido=aprender]] mucho.|بعد سنة ستكون قد تعلّمت الكثير.', 'Los niños ya se [[habrán dormido=dormirse]].|ربما نام الأطفال الآن.', 'Para el lunes [[habrán arreglado=arreglar]] el coche.|بحلول الاثنين سيكونون قد أصلحوا السيارة.', '¿[[Habréis terminado=terminar]] antes de las cinco?|هل ستكونون قد انتهيتم قبل الخامسة؟', 'Seguro que [[habrá visto=ver]] el mensaje.|بالتأكيد قد رأى الرسالة.', 'En 2030 [[habremos vivido=vivir]] veinte años aquí.|في 2030 سنكون قد عشنا عشرين سنة هنا.']
    },
    condicional: {
      what: 'الشرطي: ما كان سيحدث بشرط، والنصيحة، والطلب المؤدّب، والاحتمال في الماضي.',
      form: 'المصدر + ‎-ía, -ías, -ía, -íamos, -íais, -ían. نفس الجذور الشاذة للمستقبل: [[tendría, haría, diría, podría, saldría]].',
      uses: ['الطلب المؤدّب: [[¿Podría ayudarme?]]', 'النصيحة: [[Yo que tú, iría al médico.]]', 'الرغبة: [[Me gustaría vivir en la costa.]]', 'الشرط غير المحقّق: [[Si tuviera dinero, compraría una casa.]]', 'المستقبل في الماضي: [[Dijo que vendría.]]'],
      signals: 'si + imperfecto de subjuntivo, yo que tú, en tu lugar, me gustaría',
      mistakes: ['بعد si لا نستعمل الشرطي: [[Si tuviera…]] وليس *Si tendría.'],
      ex: ['¿[[Podría=poder]] repetir, por favor?|هل يمكنك الإعادة من فضلك؟', 'Me [[gustaría=gustar]] aprender a cocinar paella.|أودّ أن أتعلّم طبخ الباييّا.', 'Yo que tú, [[estudiaría=estudiar]] un poco cada día.|لو كنت مكانك لدرست قليلًا كل يوم.', 'Si tuviera tiempo, [[viajaría=viajar]] más.|لو كان لديّ وقت لسافرت أكثر.', 'Dijo que [[llegaría=llegar]] a las cinco.|قال إنه سيصل في الخامسة.', '¿Qué [[harías=hacer]] tú en mi lugar?|ماذا كنت ستفعل مكاني؟', 'Nosotros [[preferiríamos=preferir]] otro día.|كنّا نفضّل يومًا آخر.', '[[Deberías=deber]] descansar más.|يجب أن ترتاح أكثر.', 'Con más dinero [[tendrían=tener]] una casa más grande.|بمال أكثر لكان لديهم بيت أكبر.', '¿Me [[dirías=decir]] la verdad?|هل كنت ستقول لي الحقيقة؟', 'En ese momento [[serían=ser]] las diez.|في تلك اللحظة كانت الساعة ربما العاشرة.', '[[Vendríamos=venir]] con gusto, pero no podemos.|كنّا سنأتي بسرور، لكننا لا نستطيع.']
    },
    condicionalPerfecto: {
      what: 'الشرطي التام: ما كان سيحدث في الماضي لو تحقّق شرط لم يتحقّق (ندم، لوم، تخيّل).',
      form: 'haber في الشرطي ([[habría, habrías, habría, habríamos, habríais, habrían]]) + اسم المفعول.',
      uses: ['شرط ماضٍ غير محقّق: [[Si hubiera estudiado, habría aprobado.]]', 'الندم واللوم: [[Te habría ayudado.]]', 'احتمال عن الماضي البعيد: [[Habrían salido ya.]]'],
      signals: 'si + pluscuamperfecto de subjuntivo, yo en tu lugar, de haberlo sabido',
      mistakes: ['الصيغة الصحيحة في الشرط: [[Si hubiera sabido…, habría…]] وليس *Si habría sabido.'],
      ex: ['Si lo hubiera sabido, te [[habría llamado=llamar]].|لو كنت أعرف لاتصلت بك.', 'Con más tiempo [[habríamos visitado=visitar]] Córdoba.|بوقت أكثر لكنّا زرنا قرطبة.', 'Yo no [[habría dicho=decir]] eso.|ما كنت لأقول ذلك.', '¿Qué [[habrías hecho=hacer]] tú?|ماذا كنت ستفعل أنت؟', 'Si hubieran salido antes, no [[habrían perdido=perder]] el tren.|لو خرجوا مبكرًا لما فاتهم القطار.', 'Me [[habría gustado=gustar]] conocer a tu padre.|كنت أودّ أن أتعرّف على أبيك.', 'Sin tu ayuda no [[habría aprobado=aprobar]].|بدون مساعدتك ما كنت لأنجح.', '[[Habríais disfrutado=disfrutar]] mucho en la fiesta.|كنتم ستستمتعون كثيرًا في الحفلة.', 'En tu lugar, [[habría pedido=pedir]] el libro de reclamaciones.|لو كنت مكانك لطلبت سجلّ الشكاوى.', 'Pensé que ya [[habrías terminado=terminar]].|ظننت أنك ربما انتهيت.']
    },
    subjPresente: {
      what: 'المضارع الالتزامي: لا يصف الواقع بل الرغبة أو الشكّ أو العاطفة أو الطلب أو الغاية، غالبًا بعد [[que]] حين يختلف الفاعلان.',
      form: 'نأخذ yo في المضارع ونحذف ‎-o ثم نعكس الحرف: ‎-ar → ‎-e, -es, -e, -emos, -éis, -en · ‎-er/-ir → ‎-a, -as, -a, -amos, -áis, -an ([[tengo → tenga, hago → haga]]). شواذ: [[sea, esté, vaya, haya, sepa, dé]].',
      uses: ['الرغبة: [[Quiero que vengas.]]', 'العاطفة: [[Me alegro de que estés aquí.]]', 'الشكّ والنفي: [[No creo que llueva.]]', 'الغاية: [[Te lo explico para que lo entiendas.]]', 'المستقبل بعد cuando: [[Cuando llegues, llámame.]]', 'التمنّي: [[¡Ojalá apruebe!]]'],
      signals: 'que, ojalá, para que, cuando (+ مستقبل), antes de que, es importante que, no creo que, espero que',
      mistakes: ['بعد cuando للحديث عن المستقبل: [[Cuando tenga tiempo]] وليس *cuando tendré.', 'مع فاعل واحد نستعمل المصدر: [[Quiero ir]] وليس *Quiero que vaya (إذا كان الفاعل نفسه).'],
      ex: ['Quiero que [[vengas=venir]] conmigo.|أريد أن تأتي معي.', 'Espero que [[apruebes=aprobar]] el examen.|أتمنّى أن تنجح في الامتحان.', 'No creo que [[llueva=llover]] hoy.|لا أظنّ أنها ستمطر اليوم.', '¡Ojalá [[haga=hacer]] buen tiempo mañana!|ليت الطقس يكون جميلًا غدًا!', 'Cuando [[llegues=llegar]] a casa, llámame.|عندما تصل إلى البيت اتصل بي.', 'Es importante que [[traiga=traer]] el pasaporte.|من المهم أن تُحضر جواز السفر.', 'Me alegro de que [[estés=estar]] mejor.|يسعدني أنك أفضل.', 'Te lo repito para que lo [[entiendas=entender]].|أكرّره لك لكي تفهمه.', 'Mis hijos quieren que [[aprenda=aprender]] a usar el ordenador.|أولادي يريدون أن أتعلّم استعمال الحاسوب.', 'Es posible que [[tengamos=tener]] que esperar.|من الممكن أن نضطر إلى الانتظار.', 'Antes de que [[salgas=salir]], cierra la ventana.|قبل أن تخرج أغلق النافذة.', 'Dudo que [[sepan=saber]] la respuesta.|أشكّ أنهم يعرفون الإجابة.']
    },
    subjPerfecto: {
      what: 'الماضي القريب الالتزامي: نفس استعمالات المضارع الالتزامي لكن لحدث منتهٍ يرتبط بالحاضر.',
      form: 'haber في المضارع الالتزامي ([[haya, hayas, haya, hayamos, hayáis, hayan]]) + اسم المفعول.',
      uses: ['العاطفة تجاه حدث قريب: [[Me alegro de que hayas venido.]]', 'الشك في حدث ماضٍ: [[No creo que haya llegado.]]', 'التمنّي لحدث يُحتمل أنه وقع: [[Ojalá haya aprobado.]]', 'المستقبل التام بعد cuando: [[Cuando hayas terminado, avísame.]]'],
      signals: 'me alegro de que, no creo que, ojalá, es posible que, cuando (+ انتهاء في المستقبل)',
      mistakes: ['لا تقل *hayga؛ الصحيح [[haya]].'],
      ex: ['Me alegro de que [[hayas venido=venir]].|يسعدني أنك أتيت.', 'No creo que [[haya llegado=llegar]] todavía.|لا أظنّ أنه وصل بعد.', 'Ojalá [[hayan aprobado=aprobar]] todos.|ليتهم نجحوا جميعًا.', 'Es posible que [[hayamos perdido=perder]] el tren.|من الممكن أن القطار فاتنا.', 'Cuando [[hayas terminado=terminar]], avísame.|عندما تنتهي أبلغني.', 'Siento que no [[hayáis podido=poder]] venir.|يؤسفني أنكم لم تستطيعوا المجيء.', 'Dudo que [[haya entendido=entender]] la pregunta.|أشكّ أنه فهم السؤال.', 'Espero que [[hayas dormido=dormir]] bien.|أتمنّى أنك نمت جيدًا.', 'No es verdad que [[hayan cerrado=cerrar]] el mercado.|ليس صحيحًا أنهم أغلقوا السوق.', 'Me sorprende que no [[hayas visto=ver]] la Alhambra.|يدهشني أنك لم ترَ قصر الحمراء.']
    },
    subjImperfectoRa: {
      what: 'الماضي الالتزامي: نفس منطق الالتزامي في سياق ماضٍ، وللشرط غير الواقعي (si + …)، والتمنّي البعيد، والطلب اللطيف جدًا (quisiera).',
      form: 'نأخذ صيغة ellos في الماضي البسيط ونحذف ‎-ron ثم نضيف: ‎-ra, -ras, -ra, -ramos (بنبرة), -rais, -ran ([[tuvieron → tuviera]], [[fueron → fuera]]).',
      uses: ['بعد فعل ماضٍ: [[Quería que vinieras.]]', 'الشرط غير المحقّق: [[Si tuviera dinero, viajaría.]]', 'التمنّي البعيد: [[¡Ojalá fuera verdad!]]', 'كأنّ: [[Habla como si fuera el jefe.]]', 'الطلب المهذّب: [[Quisiera una cita.]]'],
      signals: 'si (شرط), como si, ojalá, quería que, me pidió que, para que (في الماضي)',
      mistakes: ['nosotros تحمل نبرة دائمًا: [[tuviéramos, fuéramos, habláramos]].'],
      ex: ['Si [[tuviera=tener]] más tiempo, estudiaría más.|لو كان لديّ وقت أكثر لدرست أكثر.', 'Mi madre quería que [[estudiara=estudiar]] medicina.|كانت أمي تريد أن أدرس الطب.', 'Me pidió que [[fuera=ir]] a buscarlo.|طلب منّي أن أذهب لإحضاره.', '¡Ojalá [[pudiera=poder]] ver a mis padres!|ليتني أستطيع رؤية والديّ!', 'Habla como si lo [[supiera=saber]] todo.|يتكلّم كأنه يعرف كل شيء.', '[[Quisiera=querer]] pedir cita, por favor.|أودّ طلب موعد من فضلك.', 'Si [[viviéramos=vivir]] en la costa, iríamos a la playa.|لو كنّا نعيش على الساحل لذهبنا إلى الشاطئ.', 'El médico me aconsejó que [[comiera=comer]] menos sal.|نصحني الطبيب أن آكل ملحًا أقل.', 'No pensé que [[hiciera=hacer]] tanto frío.|لم أظنّ أن الجو سيكون باردًا لهذه الدرجة.', 'Le expliqué todo para que lo [[entendiera=entender]].|شرحت له كل شيء لكي يفهمه.', 'Si [[fueras=ser]] yo, ¿qué harías?|لو كنت مكاني، ماذا كنت ستفعل؟', 'Les dije que [[vinieran=venir]] temprano.|قلت لهم أن يأتوا مبكرًا.']
    },
    subjImperfectoSe: {
      what: 'الصيغة ‎-se للماضي الالتزامي: لها نفس المعنى والاستعمال تمامًا مثل ‎-ra (tuviera = tuviese) في إسبانيا، وتكثر في الكتابة. الفرق الوحيد: ‎-ra يمكن استعمالها في quisiera/debiera للتأدّب، و‎-se لا تُستعمل لذلك.',
      form: 'صيغة ellos في الماضي البسيط بدون ‎-ron + ‎-se, -ses, -se, -semos (بنبرة), -seis, -sen ([[tuvieron → tuviese]]).',
      uses: ['نفس استعمالات ‎-ra: [[Si tuviese dinero, viajaría.]]', 'شائعة في النصوص المكتوبة والأدب.'],
      signals: 'si, como si, ojalá, quería que, para que',
      mistakes: ['لا نستعملها بعد si في الشرطي المؤدّب للطلب: نقول [[Quisiera]] وليس *Quisiese (للطلب).'],
      ex: ['Si [[tuviese=tener]] coche, iría a trabajar en él.|لو كانت لديّ سيارة لذهبت بها إلى العمل.', 'Me pidió que [[llegase=llegar]] pronto.|طلب منّي أن أصل مبكرًا.', 'Ojalá [[hiciese=hacer]] menos calor.|ليت الحرّ يكون أقل.', 'Como si [[fuese=ser]] fácil.|كأنّ الأمر سهل.', 'Quería que [[aprendiésemos=aprender]] inglés.|كان يريد أن نتعلّم الإنجليزية.', 'Si [[supieses=saber]] la verdad, no dirías eso.|لو كنت تعرف الحقيقة لما قلت ذلك.', 'Le rogó que [[volviese=volver]] a casa.|رجاه أن يعود إلى البيت.', 'No creía que [[pudiesen=poder]] venir.|لم أكن أظنّ أنهم يستطيعون المجيء.', 'Lo hice para que [[estuvieses=estar]] tranquila.|فعلته لكي تكوني مطمئنّة.', 'Si [[viniesen=venir]] mis padres, haríamos una fiesta.|لو جاء والداي لأقمنا حفلة.']
    },
    subjPluscuamperfectoRa: {
      what: 'الماضي الأسبق الالتزامي: لشرط ماضٍ لم يتحقّق، والندم، والتمنّي عن الماضي.',
      form: '[[hubiera, hubieras, hubiera, hubiéramos, hubierais, hubieran]] + اسم المفعول.',
      uses: ['الشرط الماضي غير المحقّق: [[Si hubiera estudiado, habría aprobado.]]', 'الندم: [[¡Ojalá no lo hubiera dicho!]]', 'بعد فعل ماضٍ عن حدث أسبق: [[No creí que hubiera terminado.]]'],
      signals: 'si (ماضٍ غير محقّق), ojalá, como si, me habría gustado que',
      mistakes: ['الجملة الثانية غالبًا بالشرطي التام: [[Si hubiera sabido, habría venido.]]'],
      ex: ['Si [[hubiera estudiado=estudiar]] más, habría aprobado.|لو درست أكثر لنجحت.', '¡Ojalá [[hubiera venido=venir]] antes a España!|ليتني أتيت إلى إسبانيا مبكرًا!', 'Si lo [[hubieras visto=ver]]…|لو رأيته…', 'Me habría gustado que [[hubierais conocido=conocer]] a mi padre.|كنت أودّ لو تعرّفتم على أبي.', 'No creí que [[hubieran terminado=terminar]] tan pronto.|لم أظنّ أنهم انتهوا بهذه السرعة.', 'Habló como si no [[hubiera pasado=pasar]] nada.|تكلّم كأن شيئًا لم يحدث.', 'Si [[hubiéramos salido=salir]] antes, no habríamos perdido el avión.|لو خرجنا مبكرًا لما فاتتنا الطائرة.', 'Ojalá no [[hubiera dicho=decir]] eso.|ليتني لم أقل ذلك.', 'Si [[hubieras traído=traer]] el pasaporte, te habrían atendido.|لو أحضرت جواز السفر لخدموك.', 'Si me lo [[hubieran explicado=explicar]] bien, lo habría entendido.|لو شرحوه لي جيدًا لفهمته.']
    },
    subjPluscuamperfectoSe: {
      what: 'نفس الزمن السابق بصيغة ‎-se: [[hubiese]] = [[hubiera]]. أكثر شيوعًا في الكتابة.',
      form: '[[hubiese, hubieses, hubiese, hubiésemos, hubieseis, hubiesen]] + اسم المفعول.',
      uses: ['نفس استعمالات الصيغة ‎-ra: [[Si hubiese sabido, habría venido.]]'],
      signals: 'si, ojalá, como si',
      mistakes: ['في الجملة الرئيسية لا نستعمل ‎-se: [[habría venido]] وليس *hubiese venido (بمعنى الشرطي) — مع أن hubiera مقبولة هناك.'],
      ex: ['Si [[hubiese sabido=saber]] la noticia, te habría llamado.|لو عرفت الخبر لاتصلت بك.', 'Ojalá [[hubiese llovido=llover]] más este invierno.|ليتها أمطرت أكثر هذا الشتاء.', 'Si [[hubiésemos ahorrado=ahorrar]], ahora tendríamos dinero.|لو ادّخرنا لكان لدينا مال الآن.', 'Como si nunca [[hubiese estado=estar]] aquí.|كأنه لم يكن هنا قط.', 'Si [[hubieses leído=leer]] el contrato, no habrías firmado.|لو قرأت العقد لما وقّعت.', 'No pensaba que [[hubiesen vendido=vender]] la casa.|لم أكن أظنّ أنهم باعوا البيت.', 'Si [[hubieseis llegado=llegar]] a tiempo, habríais visto el desfile.|لو وصلتم في الوقت لرأيتم الاستعراض.', 'Me alegré de que [[hubiese aprobado=aprobar]].|فرحت لأنه نجح.', 'Si [[hubiese tenido=tener]] tiempo, habría ido.|لو كان لديّ وقت لذهبت.', 'Ojalá me [[hubiesen avisado=avisar]] antes.|ليتهم أبلغوني من قبل.']
    },
    subjFuturo: {
      what: 'المستقبل الالتزامي: زمن قديم لم يعد مستعملًا في الكلام. يظهر فقط في النصوص القانونية القديمة والأمثال والعبارات الثابتة. اليوم يُستعمل بدله المضارع الالتزامي أو الماضي الالتزامي. نعرضه هنا للقراءة والفهم فقط.',
      form: 'صيغة ellos في الماضي البسيط بدون ‎-ron + ‎-re, -res, -re, -remos (بنبرة), -reis, -ren ([[tuvieron → tuviere]]).',
      uses: ['النصوص القانونية: [[El que violare la ley…]]', 'الأمثال: [[Adonde fueres, haz lo que vieres.]]'],
      signals: 'el que, quien, si (في القوانين القديمة), sea lo que fuere',
      mistakes: ['لا تستعمله في الكلام ولا في امتحان DELE؛ يكفي التعرّف عليه.'],
      ex: ['Adonde [[fueres=ir]], haz lo que vieres.|حيثما ذهبت افعل ما تراه (مثل: في روما افعل كما يفعل الرومان).', 'Sea lo que [[fuere=ser]], tenemos que decidir.|مهما يكن من أمر علينا أن نقرّر.', 'El que [[violare=violar]] esta norma será sancionado.|من يخالف هذه القاعدة سيُعاقَب.', 'Quien [[tuviere=tener]] dudas, consulte al funcionario.|من كانت لديه شكوك فليستشر الموظّف.', 'Si [[hubiere=haber]] reclamaciones, se presentarán por escrito.|إن وُجدت شكاوى تُقدَّم كتابةً.', 'Los que [[vinieren=venir]] después esperarán.|الذين يأتون لاحقًا سينتظرون.', 'Si alguien [[dijere=decir]] lo contrario, miente.|إن قال أحد عكس ذلك فهو يكذب.', 'Haz lo que [[quisieres=querer]].|افعل ما تشاء.', 'El que [[pudiere=poder]] ayudar, que ayude.|من يستطيع المساعدة فليساعد.', 'Cuando [[llegaren=llegar]] los documentos, se resolverá el expediente.|عندما تصل الوثائق سيُبتّ في الملف.']
    },
    subjFuturoPerfecto: {
      what: 'المستقبل التام الالتزامي: قديم جدًا، يظهر تقريبًا في النصوص القانونية فقط. اليوم يُستعمل بدله [[haya + participio]].',
      form: '[[hubiere, hubieres, hubiere, hubiéremos, hubiereis, hubieren]] + اسم المفعول.',
      uses: ['النصوص القانونية: [[Si no hubiere contestado en un mes…]]'],
      signals: 'si, el que, quien (لغة قانونية)',
      mistakes: ['للتعرّف فقط؛ لا تستعمله في الكتابة الحديثة.'],
      ex: ['Si en un mes no [[hubiere contestado=contestar]], se entenderá aceptado.|إذا لم يجب خلال شهر يُعدّ موافقًا.', 'El que [[hubiere robado=robar]] será juzgado.|من سرق سيُحاكَم.', 'Quien [[hubiere pagado=pagar]] la tasa podrá presentarse.|من دفع الرسم يمكنه التقدّم.', 'Si el plazo [[hubiere vencido=vencer]], se archivará la solicitud.|إذا انتهت المهلة يُحفظ الطلب.', 'Los que [[hubieren aprobado=aprobar]] recibirán el diploma.|من نجحوا سيتسلّمون الشهادة.', 'Si alguien [[hubiere perdido=perder]] el resguardo, pedirá otro.|من أضاع الإيصال يطلب غيره.', 'Cuando [[hubiere terminado=terminar]] el plazo, se publicarán las notas.|عندما تنتهي المهلة تُنشر النتائج.', 'Si no se [[hubiere presentado=presentar]] el documento, se denegará.|إذا لم تُقدَّم الوثيقة يُرفض الطلب.', 'El que [[hubiere leído=leer]] la ley lo sabrá.|من قرأ القانون سيعرف ذلك.', 'Si [[hubiéremos llegado=llegar]] tarde, perderemos el turno.|إذا وصلنا متأخّرين نفقد الدور.']
    },
    imperativo: {
      what: 'الأمر: لإعطاء تعليمات أو نصائح أو دعوات. له صيغ لـ [[tú, usted, nosotros, vosotros, ustedes]] فقط — لا يوجد أمر لـ yo، ولا لـ él/ella (نستعمل [[que + subjuntivo]]: [[¡Que pase!]]).',
      form: 'tú = صيغة él في المضارع ([[habla, come, escribe]]) مع 8 شواذ: [[di, haz, ve, pon, sal, sé, ten, ven]] · vosotros = المصدر بدون ‎-r + ‎-d ([[hablad]]) · usted / ustedes / nosotros = المضارع الالتزامي ([[hable, hablen, hablemos]]). الضمائر تلتصق بالفعل مع نبرة: [[siéntese, dámelo, levantaos]].',
      uses: ['التعليمات: [[Gire a la derecha.]]', 'النصائح: [[Bebe mucha agua.]]', 'الدعوات: [[Pasa, siéntate.]]', 'في الاستمارات: [[Rellene el impreso.]]'],
      signals: 'por favor, ¡…!, en las instrucciones y formularios',
      mistakes: ['مع usted نستعمل الالتزامي: [[Pase]] وليس *Pasa (هذه لـ tú).', 'vosotros + الضمير os يحذف ‎-d: [[sentaos]] وليس *sentados (إلا [[idos]]).'],
      ex: ['[[Abre=abrir:1]] la ventana, por favor.|افتح النافذة من فضلك.', '[[Pase=pasar:2]] usted, el médico le espera.|تفضّل، الطبيب ينتظرك.', '[[Ven=venir:1]] aquí un momento.|تعال إلى هنا لحظة.', '[[Haz=hacer:1]] los deberes antes de cenar.|أنجز الواجبات قبل العشاء.', '[[Rellenen=rellenar:5]] el formulario, por favor.|املؤوا الاستمارة من فضلكم.', '[[Vamos=ir:3]] a la playa.|هيّا إلى الشاطئ.', '[[Comed=comer:4]] despacio, niños.|كلوا ببطء يا أطفال.', '[[Siéntese=sentarse:2]], por favor.|اجلس من فضلك.', '[[Pon=poner:1]] la mesa.|حضّر المائدة.', '[[Di=decir:1]] la verdad.|قل الحقيقة.', '[[Sal=salir:1]] de ahí ahora mismo.|اخرج من هناك حالًا.', '[[Levantaos=levantarse:4]], que es tarde.|انهضوا، فقد تأخّر الوقت.']
    },
    imperativoNeg: {
      what: 'النهي: [[no]] + المضارع الالتزامي لكل الأشخاص ([[no hables, no hable, no hablemos, no habléis, no hablen]]). الضمائر تأتي قبل الفعل.',
      form: 'no + المضارع الالتزامي. الضمائر قبل الفعل: [[no te sientes, no se lo digas]].',
      uses: ['التحذير: [[No toques eso.]]', 'النصيحة: [[No comas tanto.]]', 'المنع في اللافتات: [[No fumen aquí.]]'],
      signals: 'no, nunca, jamás',
      mistakes: ['لا تقل *no habla (لـ tú)؛ الصحيح [[no hables]].', 'الضمير قبل الفعل: [[no te preocupes]] وليس *no preocúpate.'],
      ex: ['No [[toques=tocar:1]] el horno, quema.|لا تلمس الفرن، إنه حارق.', 'No te [[preocupes=preocuparse:1]].|لا تقلق.', 'No [[fume=fumar:2]] aquí, por favor.|لا تدخّن هنا من فضلك.', 'No [[lleguéis=llegar:4]] tarde.|لا تتأخّروا.', 'No [[digas=decir:1]] nada a nadie.|لا تقل شيئًا لأحد.', 'No [[vayas=ir:1]] solo de noche.|لا تذهب وحدك ليلًا.', 'No [[olvide=olvidar:2]] su documentación.|لا تنسَ وثائقك.', 'No [[corran=correr:5]] por los pasillos.|لا تركضوا في الممرات.', 'No [[pongas=poner:1]] los pies en el sofá.|لا تضع قدميك على الأريكة.', 'No [[hagamos=hacer:3]] ruido, el bebé duerme.|لا نُحدث ضجيجًا، الطفل نائم.', 'No [[abras=abrir:1]] la puerta a desconocidos.|لا تفتح الباب للغرباء.', 'No [[tengas=tener:1]] miedo.|لا تخف.']
    }
  };
})(window.ECM);
