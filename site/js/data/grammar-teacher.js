/* «الأستاذ بيشرحلك» — شرح كل درس باللهجة السورية، خطوة بخطوة:
 * what: شو يعني القاعدة · how: كيف بتشتغل · why: ليش بيتغيّر التصريف / ليش هيك · when: إيمتى منستعملها
 * [[...]] = كلام إسباني. */
(function (ECM) {
  'use strict';
  ECM.GRAMMAR_TEACHER = {
    'a1-01': {
      what: 'بالعربي منقول «أنا مؤنس» بلا فعل. بالإسباني لازم يكون في فعل بالنص، وهو [[ser]] يعني «يكون». فبتقول [[Soy Mones]] يعني حرفيًا «أنا بكون مؤنس».',
      how: 'كل شخص إلو شكل خاص من [[ser]]: أنا [[soy]]، إنت [[eres]]، هو أو هي أو حضرتك [[es]]، نحنا [[somos]]، إنتو [[sois]]، هنن [[son]]. احفظ هالست كلمات متل ما بتحفظ أسماء ولادك.',
      why: 'الفعل الإسباني بيتغيّر حسب مين عم يحكي، لهيك من الفعل لحالو بتعرف الفاعل: [[soy]] أكيد يعني «أنا». ومشان هيك الإسبان بيحذفوا الضمير كتير وبيقولوا [[Soy sirio]] بدل [[Yo soy sirio]].',
      when: 'منستعمل [[ser]] لما نعرّف عن حالنا: الاسم، من وين نحنا، شو شغلتنا، وكيف طبعنا الدائم: [[Soy de Damasco. Soy jubilado. Soy tranquilo.]]'
    },
    'a1-02': {
      what: 'كل اسم بالإسباني يا مذكّر يا مؤنث، متل العربي بالضبط: [[el libro]] (الكتاب) مذكّر، و[[la mesa]] (الطاولة) مؤنث. وقبل الاسم منحط «أل» التعريف: [[el]] للمذكّر و[[la]] للمؤنث.',
      how: 'غالبًا الاسم اللي بيخلص بـ [[-o]] مذكّر، واللي بيخلص بـ [[-a]] مؤنث. للجمع منزيد [[-s]] إذا آخر حرف صوتي ([[casa → casas]])، و[[-es]] إذا آخر حرف ساكن ([[ciudad → ciudades]]).',
      why: 'الأداة لازم تمشي مع الاسم: جمع المذكّر [[los]] وجمع المؤنث [[las]]. وفي كلمات شاذة لازم تنحفظ: [[el día]] مذكّر مع إنها بتخلص بـ a، و[[la mano]] مؤنث مع إنها بتخلص بـ o.',
      when: 'كل ما بدك تحكي عن شي: [[el médico, la farmacia, los papeles, las llaves]]. ولما الشي مو معروف منستعمل [[un / una]] يعني «واحد / وحدة»: [[Tengo una cita]].'
    },
    'a1-03': {
      what: 'الصفة هي الكلمة اللي بتوصف: طويل، قصير، حلو. بالإسباني الصفة بتيجي بعد الاسم متل العربي: [[una casa grande]] = «بيت كبير».',
      how: 'الصفة لازم «تتطابق» مع الاسم: إذا الاسم مؤنث بتصير الصفة مؤنث، وإذا جمع بتصير جمع: [[un hijo alto]]، [[una hija alta]]، [[unos hijos altos]].',
      why: 'الإسباني بيحب يكون كل شي متناسق، متل ما منقول بالعربي «بنت طويلة» مو «بنت طويل». بس الصفات اللي بتخلص بـ [[-e]] أو بحرف ساكن ما بتتغيّر بين مذكّر ومؤنث: [[grande, verde, fácil]].',
      when: 'لما توصف أهلك، بيتك، أو أي شي حواليك: [[Mi mujer es simpática. Mi piso es pequeño pero bonito.]]'
    },
    'a1-04': {
      what: 'بالإسباني في فعلين معناهن «يكون»: [[ser]] و[[estar]]. [[estar]] منستعملو للحالة المؤقتة (كيفك هلق) وللمكان (وين الشي).',
      how: 'تصريف [[estar]]: [[estoy, estás, está, estamos, estáis, están]]. انتبه للنبرة على [[está]] و[[están]].',
      why: 'الإسبان بيفرّقوا بين «شو أنا» و«كيف أنا هلق». [[Soy cansado]] غلط لأن التعب مو جزء من طبعك، الصح [[Estoy cansado]] لأنو حالة بتروح.',
      when: 'لما تسأل عن مكان: [[¿Dónde está la farmacia?]]، أو تحكي عن حالك اليوم: [[Estoy enfermo / Estoy contento]].'
    },
    'a1-05': {
      what: '[[hay]] يعني «في» أو «يوجد». مثلًا [[Hay un banco cerca]] يعني «في بنك قريب». أما [[está]] فمنستعملها لنقول وين شي منعرفو.',
      how: '[[hay]] ما بتتغيّر أبدًا، لا مع مفرد ولا مع جمع: [[hay un parque / hay dos parques]]. وبعدها منحط شي مو معرّف: [[un, una]]، رقم، أو [[mucho]].',
      why: 'إذا الشي معروف ومحدد ([[el banco]]، [[mi coche]]) ما منسأل إذا موجود، منسأل وين هو، فمنستعمل [[está]]: [[¿Dónde está el banco?]]. ومشان هيك [[Hay el banco]] غلط.',
      when: 'لما توصف حارتك أو بيتك: [[En mi barrio hay un mercado]]. ولما تسأل عن شي محدد: [[El mercado está al lado de la iglesia]].'
    },
    'a1-06': {
      what: 'هاد أهم زمن بالإسباني: المضارع، يعني الشي اللي عم يصير هلق أو اللي منعملو عادةً: [[Trabajo en Madrid]] = «بشتغل بمدريد».',
      how: 'منشيل آخر حرفين من المصدر ([[-ar, -er, -ir]]) ومنحط نهاية الشخص. مثلًا [[hablar]]: [[hablo, hablas, habla, hablamos, habláis, hablan]].',
      why: 'النهاية هي اللي بتقلّك مين عم يعمل الشي: [[-o]] = أنا، [[-as]] = إنت، [[-amos]] = نحنا. متل العربي «أحكي، تحكي، نحكي» بس التغيير بآخر الكلمة مو بأولها.',
      when: 'للروتين اليومي، للحقائق، وللشي اللي عم يصير: [[Vivo en Valencia. Como a las dos. Mi hijo estudia medicina.]]'
    },
    'a1-07': {
      what: 'في أفعال كتير مستعملة «شاذة»، يعني ما بتمشي على القاعدة، خصوصًا مع «أنا». أهمها: [[tener]] = عندو/بيملك، [[hacer]] = يعمل/يسوي، [[ir]] = يروح، [[venir]] = يجي، [[decir]] = يقول، [[salir]] = يطلع، [[saber]] = يعرف معلومة، [[conocer]] = يعرف شخص أو مكان.',
      how: 'مع «أنا» كتير منهن بيخلصوا بـ [[-go]]: [[tengo]] (عندي)، [[hago]] (بعمل)، [[salgo]] (بطلع)، [[digo]] (بقول)، [[pongo]] (بحط). والأفعال اللي بتخلص بـ [[-cer]] بتصير [[-zco]]: [[conozco]] (بعرف). وفي أفعال شاذة كليًّا متل [[ir]]: [[voy, vas, va, vamos, vais, van]].',
      why: 'هالأفعال قديمة وكتير مستعملة، ومع الزمن صار لفظها أسهل بهالشكل، فتغيّرت كتابتها. الخبر المنيح إنو غالبًا الشذوذ بس مع «أنا»، والباقي قريب من العادي: [[salgo]] بس [[sales, sale, salimos]].',
      when: 'بالحياة اليومية كل دقيقة: [[Tengo una cita. Hago la compra. Voy al médico. No sé dónde está. Conozco a tu hermano.]]'
    },
    'a1-08': {
      what: 'في أفعال بيتغيّر الحرف الصوتي بنصّها: [[pensar]] (يفكّر) بيصير [[pienso]] (بفكّر)، و[[poder]] (يقدر) بيصير [[puedo]] (بقدر)، و[[pedir]] (يطلب) بيصير [[pido]] (بطلب).',
      how: 'التغيير بيصير مع أنا وإنت وهو وهنن بس، وما بيصير مع نحنا وإنتو: [[quiero, quieres, quiere, queremos, queréis, quieren]]. إذا رسمت الجدول بيطلع الشكل متل «الجزمة».',
      why: 'التغيير بيصير بس لما يكون الضغط بالصوت على هاد الحرف. مع [[nosotros]] الضغط بيروح لآخر الكلمة ([[queremos]])، فبيرجع الحرف لأصلو.',
      when: 'مع أفعال كتير يومية: [[¿Puedo pagar con tarjeta? Quiero un café. Duermo poco. Pido la cuenta.]]'
    },
    'a1-09': {
      what: 'الأفعال الانعكاسية هي اللي بيعملها الواحد لحالو: [[lavarse]] = يغسل حالو، [[levantarse]] = يقوم من النوم، [[llamarse]] = اسمو (حرفيًا «بيسمّي حالو»).',
      how: 'منحط ضمير صغير قبل الفعل: [[me, te, se, nos, os, se]]. فـ [[levantarse]] بتصير: [[me levanto]] (بقوم)، [[te levantas]] (بتقوم)، [[se levanta]] (بيقوم).',
      why: 'الضمير بيقلّك إنو الفعل راجع على نفس الشخص. [[Lavo el coche]] = بغسّل السيارة، بس [[Me lavo]] = بتغسّل أنا. وفي أفعال الضمير فيها بيغيّر المعنى: [[llamar]] = يتصل، [[llamarse]] = اسمو.',
      when: 'للروتين اليومي من الصبح للمسا: [[Me despierto a las siete, me ducho, me visto y me voy al trabajo.]]'
    },
    'a1-10': {
      what: '[[gustar]] يعني «بيعجبني» مو «بحب». فلما بتقول [[Me gusta el té]] حرفيًا عم تقول «الشاي بيعجبني». وكمان [[encantar]] = بيعجبني كتير، و[[doler]] = بيوجعني.',
      how: 'الشي اللي بيعجبك هو الفاعل، فإذا مفرد منقول [[gusta]] وإذا جمع منقول [[gustan]]: [[Me gusta el pan / Me gustan las naranjas]]. وقبلو ضمير الشخص: [[me]] (إلي)، [[te]] (إلك)، [[le]] (إلو أو إلها)، [[nos]] (إلنا).',
      why: 'لأنو الجملة مقلوبة بالنسبة إلنا، الفعل ما بيتغيّر حسب «أنا» بل حسب الشي. متل العربي بالضبط: «بيعجبني الشاي» و«بتعجبني البرتقالات».',
      when: 'لما تحكي عن الذوق أو الوجع: [[Me gusta Madrid. Me encantan los niños. Me duele la espalda.]]'
    },
    'a1-11': {
      what: 'كلمات السؤال بالإسباني: [[¿qué?]] = شو، [[¿quién?]] = مين، [[¿dónde?]] = وين، [[¿cuándo?]] = إيمتى، [[¿cómo?]] = كيف، [[¿cuánto?]] = قديش، [[¿por qué?]] = ليش.',
      how: 'السؤال بيبلّش بعلامة مقلوبة [[¿]] وبيخلص بـ [[?]]. وكلمة السؤال دايمًا عليها نبرة: [[qué, dónde]]. وللنفي بس منحط [[no]] قبل الفعل: [[No trabajo]].',
      why: 'العلامة المقلوبة بتقلّك من أول الجملة إنو هي سؤال، فبتعرف كيف بدك تقراها. والنبرة بتفرّق بين [[qué]] (شو؟) و[[que]] (إنّو).',
      when: 'بالإدارة والدكتور والسوق: [[¿Dónde está la ventanilla? ¿Cuánto cuesta? ¿A qué hora abre?]]'
    },
    'a1-12': {
      what: 'في تراكيب بفعلين بتسهّل الحكي كتير: [[ir a]] + مصدر = «رح أعمل»، [[tener que]] + مصدر = «لازم أعمل»، [[poder]] + مصدر = «بقدر أعمل»، [[querer]] + مصدر = «بدّي أعمل».',
      how: 'بتصرّف الفعل الأول بس، والتاني بيضل مصدر: [[Voy a comer]] (رح آكل)، [[Tengo que trabajar]] (لازم أشتغل)، [[Puedo venir]] (بقدر إجي).',
      why: 'هيك ما بتحتاج تحفظ أزمنة صعبة بالبداية. بتحفظ تصريف [[ir, tener, poder, querer]] بالمضارع، ومعهن بتقدر تحكي عن المستقبل والواجب والقدرة.',
      when: 'كل يوم: [[Mañana voy a ir al banco. Tengo que renovar la tarjeta. ¿Puedo pagar aquí? Quiero aprender español.]]'
    },
    'a2-01': {
      what: 'هاد ماضي قريب بيرتبط بالحاضر: شي صار اليوم أو هالأسبوع أو بحياتك من دون ما تحدد إيمتى: [[He comido]] = «أكلت (اليوم)».',
      how: 'منستعمل [[haber]] بالمضارع ([[he, has, ha, hemos, habéis, han]]) وبعدو اسم المفعول: [[-ado]] للأفعال اللي بتخلص بـ ar، و[[-ido]] لـ er و ir: [[he trabajado, he comido, he vivido]].',
      why: 'الفترة لسّا ما خلصت (اليوم لسّا ما خلص، والسنة لسّا ما خلصت)، فالإسبان بيحسّوا إنو الحدث لسّا قريب من الحاضر. وفي أسماء مفعول شاذة لازم تنحفظ: [[hecho]] (معمول)، [[dicho]] (مقول)، [[visto]] (مشوف)، [[escrito]] (مكتوب).',
      when: 'مع [[hoy, esta semana, este año, ya, todavía no, nunca]]: [[Hoy he ido al médico. ¿Has estado en Sevilla?]]'
    },
    'a2-02': {
      what: 'هاد الماضي «المسكّر»: شي صار وخلص بوقت محدد، متل مبارح أو السنة الماضية أو سنة 2015: [[Ayer compré pan]] = «مبارح اشتريت خبز».',
      how: 'لأفعال [[-ar]]: [[-é, -aste, -ó, -amos, -asteis, -aron]]. ولأفعال [[-er / -ir]]: [[-í, -iste, -ió, -imos, -isteis, -ieron]]. انتبه للنبرة: [[hablo]] (بحكي) غير [[habló]] (حكى).',
      why: 'النبرة هون بتغيّر المعنى كليًّا، لهيك الإسبان بيكتبوها. وفي تغييرات إملائية مشان يضل اللفظ نفسو مع «أنا»: [[busqué]] (دوّرت) و[[llegué]] (وصلت).',
      when: 'لما تحكي قصة أو شي صار بتاريخ معروف: [[Llegué a España en 2016. Ayer hablé con mi hijo.]]'
    },
    'a2-03': {
      what: 'أهم الأفعال بالماضي إلها شكل خاص ما بيمشي على القاعدة: [[tener]] (عندو) ← [[tuve]] (كان عندي)، [[hacer]] (يعمل) ← [[hice]] (عملت)، [[ir]] (يروح) و[[ser]] (يكون) ← [[fui]] (رحت أو كنت).',
      how: 'كل فعل إلو جذر خاص ([[tuv-, hic-, pud-, dij-, vin-]]) وبعدو نهايات بلا نبرة: [[-e, -iste, -o, -imos, -isteis, -ieron]]: [[tuve, tuviste, tuvo, tuvimos]].',
      why: 'هالأفعال قديمة جدًا ومن كتر ما انستعملت تغيّر شكلها بالماضي، متل «قال» و«أكل» بالعربي. ما في طريقة إلا الحفظ، بس نهاياتهن كلهن متل بعض.',
      when: 'بكل قصة عن الماضي: [[Ayer tuve cita. Fui al banco. Hice la compra. Mi hijo vino a verme.]]'
    },
    'a2-04': {
      what: 'في ماضيين بالإسباني: [[he comido]] و[[comí]]، والتنين معناهن «أكلت». الفرق بالوقت اللي عم تحكي عنو.',
      how: 'إذا الفترة لسّا ما خلصت (اليوم، هالأسبوع، هالسنة) منستعمل [[he comido]]. وإذا الفترة خلصت (مبارح، الأسبوع الماضي، سنة 2010) منستعمل [[comí]].',
      why: 'الإسباني بيسأل: هل الحدث لسّا إلو علاقة بهلق؟ «اليوم أكلت» يعني اليوم لسّا ماشي، فبتقول [[Hoy he comido]]. أما «مبارح أكلت» فمبارح خلص، فبتقول [[Ayer comí]].',
      when: 'شوف كلمة الوقت بالجملة وهي بتقلّك: [[esta mañana → he tomado]]، [[anoche → tomé]].'
    },
    'a2-05': {
      what: 'هاد الماضي «المفتوح»: للوصف وللعادة بالماضي، متل «كنت ساكن» و«كنت روح» و«كانت الدنيا عم تشتي»: [[Vivía en Damasco]].',
      how: 'سهل كتير: لـ [[-ar]] منحط [[-aba]] ([[hablaba]] = كنت احكي)، ولـ [[-er / -ir]] منحط [[-ía]] ([[comía]] = كنت آكل). في بس تلات أفعال شاذة: [[era]] (كنت)، [[iba]] (كنت روح)، [[veía]] (كنت شوف).',
      why: 'هالزمن ما بيهمّو إيمتى بلّش الشي ولا إيمتى خلص، بيهمّو كيف كانت الحالة. لهيك هو زمن الذكريات: «لما كنت صغير...».',
      when: 'للذكريات والوصف: [[Cuando era joven trabajaba en una fábrica. Hacía calor. Mi padre leía el periódico.]]'
    },
    'a2-06': {
      what: 'لما تحكي قصة بتحتاج الماضيين مع بعض: [[imperfecto]] للخلفية والوصف، و[[indefinido]] للأحداث اللي صارت.',
      how: 'الخلفية: [[Llovía y yo estaba en casa]] (كانت عم تشتي وكنت بالبيت). والحدث: [[…cuando sonó el teléfono]] (…لما رنّ التلفون).',
      why: 'تخيّل فيلم: الـ [[imperfecto]] هو الديكور والجو، والـ [[indefinido]] هو اللي بيصير وبيحرّك القصة. التنين لازمين ليكون في قصة.',
      when: 'لما تحكي كيف وصلت لإسبانيا أو شو صار معك: [[Era invierno. Hacía frío. Llegué a Madrid y busqué a mi hermano.]]'
    },
    'a2-07': {
      what: 'الضماير الصغيرة بتنحط بدل الاسم مشان ما تكرّرو: [[¿Tienes el pasaporte? — Sí, lo tengo]] = «إي، عندي ياه».',
      how: '[[lo / la / los / las]] للشي اللي عم تعمل فيه الفعل (المفعول المباشر)، و[[le / les]] للشخص اللي عم تعطيه أو تحكيلو. وبيجوا قبل الفعل: [[Lo compro. Le escribo.]]',
      why: 'الإسبان ما بيحبّوا التكرار. وإذا اجتمع [[le]] مع [[lo]] بيصير [[se lo]] مشان يسهل اللفظ: [[Se lo doy]] = «بعطيه ياه».',
      when: 'بكل حوار: [[¿Y las llaves? — Las tengo yo. ¿Llamas a tu madre? — Sí, la llamo cada día.]]'
    },
    'a2-08': {
      what: 'الأمر هو لما بدك تقول لحدا يعمل شي: [[¡Ven!]] = تعا، [[Siéntese]] = تفضّل اقعد.',
      how: 'لـ «إنت» منستعمل صيغة «هو» بالمضارع: [[habla]] (احكي)، [[come]] (كول). ولـ «حضرتك» منستعمل الالتزامي: [[hable]]، [[coma]]. وللنهي دايمًا [[no]] + الالتزامي: [[no hables]] (لا تحكي).',
      why: 'الإسبان بيفرّقوا بين الحكي العادي والحكي باحترام. مع الدكتور والموظّف بتسمع [[Firme aquí]] (وقّع هون حضرتك)، ومع ابنك بتقول [[Firma aquí]]. وفي تمان أفعال شاذة للأمر: [[di, haz, ve, pon, sal, sé, ten, ven]].',
      when: 'بالتعليمات والاستمارات والطريق: [[Gire a la derecha. Rellene el formulario. No fumes.]]'
    },
    'a2-09': {
      what: 'المقارنة: [[más … que]] = أكتر من، [[menos … que]] = أقل من، [[tan … como]] = متل: [[Madrid es más grande que Toledo]].',
      how: 'منحط الصفة بين الكلمتين: [[más caro que]] (أغلى من). وللأعلى منقول [[el más … de]]: [[el piso más barato del barrio]] (أرخص بيت بالحارة).',
      why: 'بالعربي عنا وزن «أفعل» (أكبر، أحلى)، بس الإسباني ما عندو هالوزن، لهيك بيستعمل كلمة [[más]]. في كم كلمة شاذة: [[mejor]] (أحسن)، [[peor]] (أسوأ)، [[mayor]] (أكبر بالعمر).',
      when: 'بالسوق ولما تختار بيت أو شغل: [[Este piso es más barato que el otro, pero es menos luminoso.]]'
    },
    'a2-10': {
      what: 'المستقبل البسيط: [[hablaré]] = رح احكي، [[iré]] = رح روح.',
      how: 'سهل: منحط النهاية على المصدر كلّو بلا ما نشيل شي: [[hablar + é = hablaré]]. النهايات للكل: [[-é, -ás, -á, -emos, -éis, -án]].',
      why: 'في ١٢ فعل شاذ بيتغيّر جذرهن، بس النهايات نفسها: [[tener → tendré]] (رح يكون عندي)، [[hacer → haré]] (رح أعمل)، [[decir → diré]] (رح قول). وكمان منستعمل هالزمن للتخمين: [[Serán las tres]] = «يمكن الساعة تلاتة».',
      when: 'للخطط والوعود والتوقعات: [[Mañana lloverá. El año que viene haré el examen. Te llamaré.]]'
    },
    'a2-11': {
      what: '[[estar]] + الفعل بـ [[-ando / -iendo]] يعني «عم يعمل هلق»: [[Estoy comiendo]] = عم آكل.',
      how: 'لـ [[-ar]] منحط [[-ando]] ([[hablando]] = عم يحكي)، ولـ [[-er / -ir]] منحط [[-iendo]] ([[comiendo]] = عم ياكل). وفي تراكيب تانية مفيدة: [[acabar de]] (هلق خلّص)، [[volver a]] (رجع عمل)، [[dejar de]] (بطّل يعمل).',
      why: 'الإسبان بيستعملوا هالتركيب مشان يأكدوا إنو الشي عم يصير بهاللحظة، متل «عم» عنا بالضبط.',
      when: 'بالتلفون كتير: [[Ahora no puedo, estoy conduciendo. Acabo de llegar. He dejado de fumar.]]'
    },
    'a2-12': {
      what: '[[por]] و[[para]] التنين ممكن يعنوا «لـ» أو «من أجل»، بس كل وحدة إلها شغلة.',
      how: '[[para]] = الهدف أو الوجهة أو الشخص اللي رايحلو الشي: [[Estudio para la nacionalidad. Esto es para ti.]] و[[por]] = السبب، أو الطريق، أو الوسيلة، أو السعر: [[Gracias por todo. Paseo por el parque.]]',
      why: 'فكّر بـ [[para]] متل سهم رايح لقدّام (لوين؟ لشو؟)، و[[por]] متل شي جاي من ورا (ليش؟ من وين مرقت؟).',
      when: 'بالحياة اليومية: [[Gracias por tu ayuda. Salgo para Madrid mañana. Lo necesito para el lunes.]]'
    },
    'b1-01': {
      what: 'الـ [[subjuntivo]] صيغة منستعملها لما الشي مو حقيقة مؤكدة: أمنية، أو طلب، أو شك، أو شعور: [[Quiero que vengas]] = «بدي ياك تجي».',
      how: 'منآخد «أنا» بالمضارع ومنشيل [[-o]] ومنقلب النهاية: أفعال [[-ar]] بتاخد [[-e]]، وأفعال [[-er/-ir]] بتاخد [[-a]]: [[hablo → hable]]، [[como → coma]]، [[tengo → tenga]].',
      why: 'الإسباني بيفرّق بين «الواقع» و«اللي ببالي». [[Viene]] = جاي (حقيقة)، بس [[Ojalá venga]] = إن شاء الله يجي (أمنية). شذوذ «أنا» بينتقل للـ subjuntivo: [[tengo → tenga]]، [[hago → haga]].',
      when: 'بعد [[que]] لما في شخصين مختلفين، وبعد [[ojalá]]، وبعد [[cuando]] للمستقبل: [[Espero que estés bien. Cuando llegues, llámame.]]'
    },
    'b1-02': {
      what: 'لما بدك من حدا تاني يعمل شي، الفعل التاني بيصير [[subjuntivo]]: [[Quiero que estudies]] = «بدي ياك تدرس».',
      how: 'فعل الطلب أو النصيحة ([[querer, pedir, aconsejar, recomendar]]) + [[que]] + الفعل بالـ [[subjuntivo]]. وإذا الشخص نفسو منستعمل المصدر: [[Quiero estudiar]] = بدي ادرس.',
      why: 'لأنو طلبك لسّا ما صار حقيقة، هو بس رغبة عندك. الدكتور بيقلّك [[Le aconsejo que camine]] (بنصحك تمشي)، والمشي لسّا ما صار.',
      when: 'مع الدكتور والموظّف والولاد: [[El médico me pide que descanse. Te pido que me ayudes.]]'
    },
    'b1-03': {
      what: 'لما تعبّر عن شعور تجاه شي بيعملو غيرك (فرح، زعل، استغراب)، منستعمل [[subjuntivo]]: [[Me alegro de que estés aquí]] = «مبسوط إنك هون».',
      how: 'تعبير الشعور ([[me alegra, me molesta, es una pena, es normal]]) + [[que]] + [[subjuntivo]]. وإذا ما في شخص تاني منستعمل المصدر: [[Me alegra verte]].',
      why: 'حتى لو الشي صار فعلًا، الإسباني بيحطو بالـ [[subjuntivo]] لأنو المهم هون شعورك تجاهو، مو الخبر نفسو.',
      when: 'بالتهاني والمواساة: [[Me alegro de que hayas aprobado. Siento que estés enfermo.]]'
    },
    'b1-04': {
      what: 'لما تقول رأيك بتأكيد: [[Creo que viene]] (بعتقد إنو جاي) بالـ [[indicativo]]. وإذا نفيت أو شكّيت: [[No creo que venga]] (ما بعتقد إنو يجي) بالـ [[subjuntivo]].',
      how: '[[creo que / pienso que / es verdad que]] + [[indicativo]]. و[[no creo que / dudo que / es posible que]] + [[subjuntivo]].',
      why: 'الـ [[indicativo]] للشي اللي إنت مقتنع إنو حقيقة، والـ [[subjuntivo]] للشي المشكوك فيه. الشك بيقلب الصيغة.',
      when: 'بالنقاش وبامتحان DELE: [[Creo que es una buena idea, pero no creo que sea barato.]]'
    },
    'b1-05': {
      what: 'مع كلمات الوقت ([[cuando]] = لما، [[hasta que]] = لحتى، [[antes de que]] = قبل ما): إذا عم تحكي عن المستقبل منستعمل [[subjuntivo]]: [[Cuando llegue, te llamo]] = لما وصل بتصل فيك.',
      how: '[[cuando]] + [[subjuntivo]] للمستقبل، و[[cuando]] + [[indicativo]] للعادة أو الماضي: [[Cuando llego, ceno]] (لما بوصل بتعشى، كل يوم).',
      why: 'المستقبل لسّا ما صار، فهو مو حقيقة بعد، لهيك [[subjuntivo]]. وغلط تقول [[cuando llegaré]] متل ما منقول بالعربي «لما رح أوصل».',
      when: 'بالخطط: [[Cuando tenga la nacionalidad, viajaré a Siria. Espera aquí hasta que vuelva.]]'
    },
    'b1-06': {
      what: 'الشرطي بيعني «كنت رح» أو «بحب لو»: [[Me gustaría]] = بحب لو، [[¿Podría ayudarme?]] = بتقدر تساعدني؟ (بأدب).',
      how: 'منحط [[-ía]] على المصدر كلّو: [[hablaría, comería, viviría]]. والأفعال الشاذة نفسها تبع المستقبل: [[tendría, haría, podría, diría]].',
      why: 'هالصيغة بتخفّف الحكي وبتخليه مؤدّب، متل ما منقول «بتسمحلي» بدل «اعطيني». ومنستعملها للنصيحة: [[Yo que tú, iría al médico]] = لو كنت محلّك كنت رحت عالدكتور.',
      when: 'بالطلبات المؤدبة والنصايح والأحلام: [[Me gustaría vivir en la costa. ¿Podría repetir, por favor?]]'
    },
    'b1-07': {
      what: 'الماضي الأسبق: شي صار قبل شي تاني بالماضي: [[Cuando llegué, el tren ya había salido]] = لما وصلت كان القطار طالع.',
      how: '[[había, habías, había, habíamos, habíais, habían]] + اسم المفعول: [[había comido]] = كنت آكل (قبلها).',
      why: 'بيساعدك ترتّب الأحداث بالقصة: مين صار أول. الحدث الأقدم بياخد [[había]].',
      when: 'بالقصص: [[Nunca había visto la nieve antes de venir a España.]]'
    },
    'b1-08': {
      what: 'جملة الصلة بتوصف اسم: [[el piso que tiene terraza]] = البيت اللي فيه شرفة.',
      how: 'إذا الشي معروف وموجود منستعمل [[indicativo]]: [[Vivo en un piso que tiene terraza]]. وإذا عم تدوّر عليه وما بتعرف إذا موجود منستعمل [[subjuntivo]]: [[Busco un piso que tenga terraza]].',
      why: 'الشي اللي ما شفتو لسّا مو حقيقة بالنسبة إلك، هو بس بخيالك، لهيك [[subjuntivo]].',
      when: 'لما تدوّر على بيت أو شغل: [[Busco un trabajo que no esté lejos. Necesito a alguien que hable árabe.]]'
    },
    'b1-09': {
      what: 'الكلام المنقول: لما تنقل حكي غيرك: [[Dijo que estaba cansado]] = قال إنو تعبان.',
      how: 'إذا فعل القول بالماضي ([[dijo]])، الزمن بيرجع خطوة لورا: [[estoy → estaba]]، [[iré → iría]]، [[fui → había ido]].',
      why: 'لأنو الكلام صار بالماضي، فالإسباني بيحرّك كل شي لورا ليتناسب مع وقت الحكي، متل العربي لما منقول «قال إنو كان تعبان».',
      when: 'لما تحكي شو قلّك الدكتور أو الموظف: [[El funcionario me dijo que tenía que volver el lunes.]]'
    },
    'b1-10': {
      what: 'لما يجتمع الأمر مع الضماير: [[Dámelo]] = اعطيني ياه، [[No me lo des]] = لا تعطيني ياه.',
      how: 'بالأمر العادي الضماير بتلزق بآخر الفعل: [[da + me + lo = dámelo]]. وبالنهي بتجي قبل الفعل: [[no me lo des]].',
      why: 'لما تلزق الضماير بتطوّل الكلمة، فمنحط نبرة مشان يضل الضغط بمكانو: [[siéntese, dígame]].',
      when: 'بالبيت وبالمحلات: [[Pásame la sal. Dígame su nombre. No te preocupes.]]'
    },
    'b2-01': {
      what: 'الماضي الالتزامي: نفس الـ [[subjuntivo]] بس بسياق ماضي أو خيالي: [[Si tuviera dinero…]] = لو كان معي مصاري…',
      how: 'منآخد صيغة «هنن» بالماضي البسيط ومنشيل [[-ron]] ومنحط [[-ra]]: [[tuvieron → tuviera]]، [[fueron → fuera]]. وفي صيغة تانية بنفس المعنى بـ [[-se]]: [[tuviese]].',
      why: 'لأنها مبنية على الماضي البسيط، كل شذوذو بينتقل إلها. يعني إذا بتعرف [[dijeron]] بتعرف [[dijera]].',
      when: 'للشرط الخيالي والأمنيات والطلبات بالماضي: [[Si fuera joven, estudiaría medicina. Me pidió que viniera.]]'
    },
    'b2-02': {
      what: 'جمل الشرط: إذا ممكن يصير، أو لو كان (خيال)، أو لو كان صار (ندم على الماضي).',
      how: 'ممكن: [[Si llueve, me quedo]] (إذا شتّت بضل). خيال: [[Si tuviera tiempo, viajaría]] (لو عندي وقت كنت سافرت). ماضي: [[Si hubiera estudiado, habría aprobado]] (لو درست كنت نجحت).',
      why: 'كل ما بعد الشي عن الواقع، بترجع الأزمنة لورا خطوة. وبعد [[si]] ما منستعمل أبدًا [[futuro]] ولا [[condicional]].',
      when: 'بالنقاش وبامتحان DELE: [[Si apruebo el examen, pediré la nacionalidad.]]'
    },
    'b2-03': {
      what: 'توافق الأزمنة: زمن الفعل الأول بيحدد زمن الـ [[subjuntivo]] بعدو.',
      how: 'إذا الفعل الأول حاضر: [[Quiero que vengas]]. وإذا ماضي أو شرطي: [[Quería que vinieras]]، [[Me gustaría que vinieras]].',
      why: 'الإسباني بيحب الانسجام: الطلب بالماضي بيطلب شي بالماضي كمان.',
      when: 'بالكتابة الرسمية وبالحكي: [[Me pidieron que trajera el pasaporte.]]'
    },
    'b2-04': {
      what: '[[aunque]] = «مع إنو» أو «حتى لو». المعنى بيتغيّر حسب الصيغة اللي بعدها.',
      how: '[[aunque]] + [[indicativo]] = مع إنو (حقيقة): [[Aunque llueve, salgo]]. و[[aunque]] + [[subjuntivo]] = حتى لو (احتمال): [[Aunque llueva, saldré]].',
      why: 'الـ [[indicativo]] بيقول إنك متأكد من العائق، والـ [[subjuntivo]] بيقول إنك مو متأكد أو ما بيفرق معك.',
      when: 'بالنقاش: [[Aunque es difícil, voy a aprobar. Aunque cueste mucho, lo haré.]]'
    },
    'b2-05': {
      what: 'الهدف والسبب: [[para que]] = مشان (هدف)، [[porque / ya que / como]] = لأنو (سبب).',
      how: '[[para que]] + [[subjuntivo]]: [[Te lo explico para que lo entiendas]]. و[[porque]] + [[indicativo]]: [[No vine porque estaba enfermo]].',
      why: 'الهدف لسّا ما تحقق، فبياخد [[subjuntivo]]. والسبب حقيقة صارت، فبياخد [[indicativo]].',
      when: 'بالرسايل الرسمية: [[Le escribo para que me informe sobre la cita. Como no tenía coche, fui en autobús.]]'
    },
    'b2-06': {
      what: 'المبني للمجهول: لما الفاعل مو مهم أو مو معروف: [[Se vende piso]] = بيت للبيع، [[La ley fue aprobada]] = انقرّ القانون.',
      how: 'الأسهل: [[se]] + الفعل، ويتطابق الفعل مع الشي: [[se vende / se venden]]. والرسمي: [[ser]] + اسم المفعول: [[fue construido]].',
      why: 'بالإعلانات والأخبار ما بيهمّ مين عمل الشي، المهم الشي نفسو. لهيك بتشوف [[se habla español]] و[[se alquila]] بكل مكان.',
      when: 'بالإعلانات والأخبار وأسئلة CCSE: [[La Constitución se aprobó en 1978. Se prohíbe fumar.]]'
    },
    'b2-07': {
      what: 'تراكيب متقدمة بتعطي معاني دقيقة: [[llevar + gerundio]] = صرلي عم، [[soler]] = عادةً، [[estar a punto de]] = على وشك، [[ponerse a]] = بلّش فجأة.',
      how: '[[Llevo cinco años viviendo aquí]] = صرلي خمس سنين ساكن هون. [[Suelo cenar a las nueve]] = عادةً بتعشى عالتسعة.',
      why: 'هالتراكيب بتخلي حكيك طبيعي متل الإسبان، بدل ما تحكي بجمل بسيطة وطويلة.',
      when: 'لما تعرّف عن حالك: [[Llevo diez años en España y suelo hablar español en el trabajo.]]'
    },
    'b2-08': {
      what: 'المستقبل والشرطي ممكن يعنوا «يمكن» أو «أكيد»: [[Estará en casa]] = يمكن يكون بالبيت، [[Serían las diez]] = يمكن كانت الساعة عشرة.',
      how: 'للتخمين عن هلق منستعمل [[futuro]]، وعن الماضي منستعمل [[condicional]]، وعن الماضي القريب منستعمل [[habrá + participio]]: [[Habrá salido]] = يمكن طلع.',
      why: 'الإسباني بيستعمل المستقبل للشي اللي مو متأكد منو، كأنو الحقيقة رح تبيّن بعدين.',
      when: 'لما ما تكون متأكد: [[¿Dónde está mi móvil? Lo habré dejado en el coche.]]'
    },
    'b2-09': {
      what: 'أفعال التحوّل كلها بتعني «صار»، بس كل واحد لنوع مختلف من التغيير.',
      how: '[[ponerse]] لتغيير مؤقت ([[se puso nervioso]] = صار متوتر)، و[[volverse]] لتغيير بالطبع، و[[hacerse]] لتغيير بالجهد أو بالاختيار ([[se hizo español]] = صار إسباني)، و[[quedarse]] للنتيجة ([[se quedó solo]] = ضل لحالو).',
      why: 'العربي عندو «صار» لكل شي، والإسباني بيدقّق: هل التغيير مؤقت؟ بالطبع؟ بإرادتك؟',
      when: 'بالقصص وبالحديث عن حياتك: [[Me hice ciudadano español en 2026.]]'
    },
    'b2-10': {
      what: 'أدوات الربط بتنظّم الكتابة: [[además]] = كمان، [[sin embargo]] = بس/مع ذلك، [[por lo tanto]] = لهيك، [[en primer lugar]] = أولًا.',
      how: 'بتحطها بأول الجملة وبعدها فاصلة: [[En primer lugar, … Además, … Sin embargo, … Por lo tanto, …]]',
      why: 'بامتحان الكتابة (DELE) المصحّح بيحب يشوف نص مرتّب، وهالكلمات بتورجيه إنك عم تفكّر بشكل منظّم.',
      when: 'بالرسايل والكتابة الرسمية: [[En primer lugar, quiero agradecerle su ayuda. Sin embargo, tengo una duda.]]'
    }
  };
})(window.ECM);
