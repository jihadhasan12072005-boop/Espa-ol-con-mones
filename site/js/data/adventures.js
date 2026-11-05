/* Spanish Adventures. step: { s: speaker, es, ar, c: [[choice_es, choice_ar, ok(1 good / 0 wrong), feedback_ar, goto?]] }
 * or task step: { task: arabic instruction, keys: 'a|b', model: spanish } */
(function (ECM) {
  'use strict';
  ECM.ADV = [
    { id: 'cafe', lv: 'A1', photo: 'cafe', t: 'Desayuno en un bar de Madrid', ta: 'فطور في مقهى بمدريد',
      intro: 'الساعة التاسعة صباحًا. دخلتَ بارًا صغيرًا قرب ساحة «Plaza Mayor». الإسبان يفطرون غالبًا قهوة وخبزًا محمّصًا (tostada). هدفك: تطلب فطورًا، تسأل عن الطاولة، وتدفع بأدب.',
      vocab: ['un café con leche|قهوة بالحليب', 'un café solo|قهوة سوداء', 'una tostada con tomate|خبز محمّص بالطماطم', 'un zumo de naranja|عصير برتقال', 'la barra|المنضدة (الكاونتر)', 'la terraza|الجلسة الخارجية', '¿Me cobra?|هل تحاسبني؟', 'la cuenta|الحساب'],
      steps: [
        { s: 'Camarero', es: '¡Buenos días! ¿Qué le pongo?', ar: 'صباح الخير! ماذا أقدّم لك؟', c: [
          ['Buenos días. Un café con leche y una tostada con tomate, por favor.', 'صباح الخير. قهوة بالحليب وخبز محمّص بالطماطم من فضلك.', 1, 'ممتاز! تحية + طلب واضح + por favor. هذه الطريقة الطبيعية في إسبانيا.'],
          ['Yo quiero café.', 'أنا أريد قهوة.', 0, 'الجملة مفهومة لكنها جافة قليلًا، و«café» وحده غير محدد. في إسبانيا اطلب نوع القهوة: [[un café con leche / un café solo / un cortado]] وأضف [[por favor]].'],
          ['Buenas noches, una tostada.', 'مساء الخير، خبز محمّص.', 0, 'الساعة التاسعة صباحًا: التحية الصحيحة [[Buenos días]]. نستخدم [[Buenas noches]] في الليل فقط.'] ] },
        { s: 'Camarero', es: '¿Para tomar aquí o para llevar?', ar: 'هل تتناوله هنا أم تأخذه معك؟', c: [
          ['Para tomar aquí. ¿Puedo sentarme en la terraza?', 'هنا. هل يمكنني الجلوس في الجلسة الخارجية؟', 1, 'رائع: [[poder + infinitivo]] للاستئذان المهذب.', 2],
          ['Para tomar aquí, en la barra.', 'هنا، على المنضدة.', 1, 'ممتاز. على المنضدة (la barra) يكون السعر أحيانًا أرخص من الجلوس في الشرفة.', 3],
          ['Para llevo.', '—', 0, 'العبارة الصحيحة [[para llevar]] (بالمصدر، دائمًا).'] ] },
        { s: 'Camarero', es: 'Claro, siéntese donde quiera. Ahora le llevo el desayuno.', ar: 'بالطبع، اجلس حيث تشاء. سأحضر لك الفطور الآن.', c: [
          ['Muchas gracias, muy amable.', 'شكرًا جزيلًا، لطف منك.', 1, 'جميل! [[muy amable]] عبارة مهذبة جدًا.', 3],
          ['Gracias a usted, de nada.', '—', 0, '[[De nada]] تعني «عفوًا» وتُقال ردًّا على الشكر، لا مع الشكر نفسه.'] ] },
        { s: 'Camarero', es: 'Aquí tiene: su café con leche y su tostada. ¿Quiere algo más?', ar: 'تفضّل: قهوتك بالحليب وخبزك المحمّص. هل تريد شيئًا آخر؟', c: [
          ['Sí, ¿me pone también un zumo de naranja natural?', 'نعم، هل تضع لي أيضًا عصير برتقال طبيعي؟', 1, 'ممتاز: [[¿Me pone…?]] صيغة شائعة جدًا في البارات الإسبانية للطلب.'],
          ['No, nada más, gracias.', 'لا، لا شيء آخر، شكرًا.', 1, 'صحيح وطبيعي تمامًا.'],
          ['Sí, quiero uno zumo.', '—', 0, 'قبل الاسم المذكر المفرد: [[un zumo]] وليس uno zumo. (uno يُستخدم وحده: «quiero uno»).'] ] },
        { task: 'حان وقت الدفع. اكتب جملة تطلب بها الحساب من النادل بأدب.', keys: 'cuenta|cobra|cobrar|cuánto', model: '¿Me cobra, por favor? / La cuenta, por favor. / ¿Cuánto es?' },
        { s: 'Camarero', es: 'Son cuatro euros con ochenta. ¿Efectivo o tarjeta?', ar: 'المبلغ أربعة يورو وثمانون سنتًا. نقدًا أم بالبطاقة؟', c: [
          ['Con tarjeta, por favor.', 'بالبطاقة من فضلك.', 1, 'صحيح: [[pagar con tarjeta]] (بالبطاقة) — لاحظ حرف الجر con.'],
          ['En efectivo. Aquí tiene cinco euros; quédese con el cambio.', 'نقدًا. تفضّل خمسة يورو؛ احتفظ بالباقي.', 1, 'رائع! [[Quédese con el cambio]] = احتفظ بالباقي (بقشيش صغير، غير إلزامي في إسبانيا).'],
          ['Por tarjeta.', '—', 0, 'نقول [[con tarjeta]] و[[en efectivo]].'] ] },
        { s: 'Camarero', es: '¡Gracias! Que tenga un buen día.', ar: 'شكرًا! أتمنى لك يومًا سعيدًا.', c: [
          ['Igualmente. ¡Hasta luego!', 'وأنت كذلك. إلى اللقاء!', 1, 'ممتاز: [[Igualmente]] = «ولك مثله».'],
          ['Sí, gracias, tengo.', '—', 0, '«Que tenga un buen día» تمنٍّ، والرد المناسب [[Igualmente]] أو [[Gracias, igualmente]].'] ] }
      ],
      end: 'أكملتَ فطورك كما يفعل الإسبان! تعلّمتَ الطلب بـ ¿Me pone…?، والتمييز بين para tomar aquí / para llevar، والدفع con tarjeta / en efectivo.' },

    { id: 'metro', lv: 'A1', photo: 'metro', t: 'Perdido en el Metro de Madrid', ta: 'في مترو مدريد',
      intro: 'تريد الذهاب من محطة «Sol» إلى «Atocha» لأخذ القطار إلى طليطلة. لا تعرف أي خط تأخذ. هدفك: تشتري تذكرة، تسأل عن الاتجاه، وتصل في الوقت.',
      vocab: ['el billete sencillo|تذكرة ذهاب فقط', 'la máquina|آلة التذاكر', 'la línea|الخط', 'la dirección|الاتجاه', 'hacer transbordo|تغيير الخط', 'la parada / la estación|المحطة', 'la salida|المخرج', 'el andén|الرصيف'],
      steps: [
        { s: 'Narrador', es: 'Estás delante de la máquina de billetes. Hay un empleado cerca.', ar: 'أنت أمام آلة التذاكر. يوجد موظف قريب.', c: [
          ['Perdone, ¿me puede ayudar? No sé cómo funciona la máquina.', 'عفوًا، هل يمكنك مساعدتي؟ لا أعرف كيف تعمل الآلة.', 1, 'ممتاز: [[Perdone]] لجذب الانتباه بأدب، و[[¿me puede ayudar?]].'],
          ['¡Oye! ¡Máquina no funciona!', '—', 0, '[[¡Oye!]] غير رسمية جدًا مع موظف، والجملة تحتاج أداة وفعلًا صحيحًا: [[La máquina no funciona]]. الأفضل: [[Perdone, ¿me puede ayudar?]]'] ] },
        { s: 'Empleado', es: 'Claro. ¿Adónde va?', ar: 'بالطبع. إلى أين تذهب؟', c: [
          ['Voy a Atocha, a la estación de tren.', 'أذهب إلى أتوتشا، إلى محطة القطار.', 1, 'صحيح: [[ir a + مكان]].'],
          ['Voy en Atocha.', '—', 0, 'مع فعل الحركة ir نستخدم [[a]] للوجهة: [[Voy a Atocha]].'] ] },
        { s: 'Empleado', es: 'Necesita un billete sencillo. Pulse aquí, «Billete sencillo», y pague. Son un euro y cincuenta.', ar: 'تحتاج تذكرة ذهاب فقط. اضغط هنا «تذكرة مفردة» وادفع. ثمنها يورو ونصف.', c: [
          ['Perfecto. ¿Y qué línea tengo que coger?', 'ممتاز. وأي خط يجب أن آخذ؟', 1, 'رائع: [[tener que + infinitivo]] و[[coger]] (يأخذ وسيلة نقل — شائع في إسبانيا).'],
          ['¿Qué línea tengo coger?', '—', 0, 'ينقص [[que]]: [[tengo que coger]].'] ] },
        { s: 'Empleado', es: 'Desde Sol, coja la línea 1, dirección Valdecarros. Son dos paradas.', ar: 'من سول، خذ الخط 1 باتجاه فالديكاروس. إنهما محطتان.', c: [
          ['Entonces, línea 1 dirección Valdecarros y me bajo en la segunda parada, ¿verdad?', 'إذن، الخط 1 باتجاه فالديكاروس وأنزل في المحطة الثانية، صحيح؟', 1, 'ممتاز! التأكد بإعادة المعلومة مهارة مهمة في المحادثة وفي امتحان DELE.'],
          ['¿Cuántas paradas son? ¿Diez?', '—', 0, 'الموظف قال [[Son dos paradas]] (محطتان). استمع جيدًا للأرقام.'] ] },
        { s: 'Narrador', es: 'Estás en el andén. Llega el tren, pero está lleno de gente.', ar: 'أنت على الرصيف. يصل القطار لكنه مزدحم.', c: [
          ['Perdón, ¿puedo pasar?', 'عذرًا، هل أستطيع المرور؟', 1, 'العبارة المثالية في وسائل النقل المزدحمة.'],
          ['Empujo sin decir nada.', '—', 0, 'التهذيب مهم: قل [[Perdón]] أو [[Con permiso]] قبل المرور.'] ] },
        { task: 'وصلتَ إلى أتوتشا. اكتب سؤالًا لشخص في المحطة: أين مخرج قطارات «Cercanías» أو «AVE»؟', keys: 'dónde|salida|está|tren', model: 'Perdone, ¿dónde está la salida para los trenes de Cercanías?' },
        { s: 'Señora', es: 'Siga todo recto y suba por las escaleras mecánicas. Está a la derecha.', ar: 'تابع مباشرة واصعد السلالم الكهربائية. إنه على اليمين.', c: [
          ['Muchas gracias, muy amable.', 'شكرًا جزيلًا، لطف منك.', 1, 'أحسنت! فهمتَ الاتجاهات: [[todo recto]] (مباشرة)، [[subir]] (اصعد)، [[a la derecha]] (يمينًا).'],
          ['¿A la izquierda? Gracias.', '—', 0, 'قالت [[a la derecha]] = على اليمين. [[izquierda]] = يسار.'] ] }
      ],
      end: 'وصلتَ إلى أتوتشا في الوقت! تعلّمتَ شراء التذكرة، والسؤال عن الخط والاتجاه، وفهم تعليمات الاتجاهات.' },

    { id: 'medico', lv: 'A2', photo: 'hospital', t: 'Una cita en el centro de salud', ta: 'موعد في المركز الصحي',
      intro: 'منذ ثلاثة أيام تشعر بألم في الحلق وحمّى خفيفة. لديك موعد مع طبيبة الأسرة في المركز الصحي. هدفك: تشرح أعراضك، تفهم التعليمات، وتسأل عن الدواء.',
      vocab: ['la tarjeta sanitaria|البطاقة الصحية', 'me duele…|يؤلمني…', 'la fiebre|الحمّى', 'la tos|السعال', 'desde hace…|منذ…', 'la receta|الوصفة', 'el jarabe|الشراب', 'cada ocho horas|كل ثماني ساعات', 'la baja médica|الإجازة المرضية'],
      steps: [
        { s: 'Recepcionista', es: 'Buenos días. ¿Me da su tarjeta sanitaria, por favor?', ar: 'صباح الخير. هل تعطيني بطاقتك الصحية من فضلك؟', c: [
          ['Sí, aquí tiene. Tengo cita con la doctora Gómez a las diez.', 'نعم، تفضّل. عندي موعد مع الدكتورة غوميث في العاشرة.', 1, 'ممتاز: [[Aquí tiene]] = تفضّل (عند إعطاء شيء).'],
          ['Sí, aquí tengo.', '—', 0, 'عند إعطاء شيء لشخص نقول [[Aquí tiene]] (usted) أو [[Aquí tienes]] (tú).'] ] },
        { s: 'Doctora', es: 'Pase, siéntese. Dígame, ¿qué le pasa?', ar: 'تفضّل، اجلس. قل لي، ماذا بك؟', c: [
          ['Me duele mucho la garganta y tengo fiebre desde hace tres días.', 'حلقي يؤلمني كثيرًا وعندي حمّى منذ ثلاثة أيام.', 1, 'رائع: [[me duele + أداة + جزء الجسم]] و[[desde hace + مدة]].'],
          ['Me duelo la garganta.', '—', 0, 'doler مثل gustar: [[Me duele la garganta]] (الحلق هو الفاعل).'],
          ['Tengo fiebre de tres días.', '—', 0, 'للمدة حتى الآن نقول [[desde hace tres días]].'] ] },
        { s: 'Doctora', es: '¿Tiene tos? ¿Y ha tomado algún medicamento?', ar: 'هل عندك سعال؟ وهل تناولتَ أي دواء؟', c: [
          ['Un poco de tos por la noche. He tomado paracetamol, pero no me ha hecho mucho efecto.', 'سعال قليل في الليل. تناولتُ باراسيتامول لكنه لم يُفد كثيرًا.', 1, 'ممتاز: استخدمتَ الـ [[pretérito perfecto]] (he tomado) لماضٍ قريب مرتبط بالحاضر.'],
          ['Sí, ayer he tomado una pastilla.', '—', 0, 'مع [[ayer]] نستخدم الـ indefinido: [[Ayer tomé una pastilla]].'] ] },
        { s: 'Doctora', es: 'Abra la boca… Tiene la garganta muy inflamada. Le voy a recetar un antibiótico.', ar: 'افتح فمك… حلقك ملتهب جدًا. سأصف لك مضادًا حيويًا.', c: [
          ['¿Cuántas veces al día tengo que tomarlo?', 'كم مرة في اليوم يجب أن أتناوله؟', 1, 'سؤال ممتاز: [[¿Cuántas veces al día…?]] و[[tengo que tomarlo]] (الضمير ملتصق بالمصدر).', 4],
          ['¿Es necesario? No me gustan las pastillas.', 'هل هو ضروري؟ لا تعجبني الحبوب.', 1, 'سؤال مشروع! لاحظ [[me gustan las pastillas]] (جمع ← gustan).', 4] ] },
        { s: 'Doctora', es: 'Una pastilla cada ocho horas durante siete días. Y beba mucha agua. Si necesita la baja, se la hago.', ar: 'حبة كل ثماني ساعات لمدة سبعة أيام. واشرب ماءً كثيرًا. إن احتجت إجازة مرضية أعطيك إياها.', c: [
          ['Sí, por favor. Trabajo en un almacén y así no puedo trabajar.', 'نعم من فضلك. أعمل في مستودع وبهذه الحالة لا أستطيع العمل.', 1, 'ممتاز: شرحتَ السبب بوضوح.'],
          ['No, gracias, me encuentro bien para trabajar.', 'لا شكرًا، أشعر أنني بخير للعمل.', 1, 'صحيح: [[encontrarse bien/mal]] = يشعر بأنه بخير/متوعك.'] ] },
        { task: 'قبل الخروج، اكتب سؤالًا للطبيبة: متى يجب أن تعود إن لم تتحسّن؟', keys: 'cuándo|vuelvo|volver|si no|mejoro', model: 'Doctora, ¿y si no mejoro? ¿Cuándo tengo que volver?' },
        { s: 'Doctora', es: 'Si en cuatro días sigue con fiebre, pida otra cita. ¡Que se mejore!', ar: 'إن استمرت الحمّى بعد أربعة أيام، اطلب موعدًا آخر. أتمنى لك الشفاء!', c: [
          ['Muchas gracias, doctora. Hasta luego.', 'شكرًا جزيلًا يا دكتورة. إلى اللقاء.', 1, 'أحسنت! [[¡Que se mejore!]] تمنٍّ بالـ subjuntivo = «أتمنى لك الشفاء».'] ] }
      ],
      end: 'أنهيت الموعد بنجاح! تعلّمتَ شرح الأعراض بـ me duele وdesde hace، وفهم الجرعات (cada ocho horas)، والإجازة المرضية.' },

    { id: 'banco', lv: 'A2', photo: 'bank', t: 'Abrir una cuenta en el banco', ta: 'فتح حساب في البنك',
      intro: 'وجدتَ عملًا جديدًا، والشركة تحتاج رقم حساب بنكي لتحويل الراتب. هدفك: تفتح حسابًا، تسأل عن العمولات والبطاقة، وتفهم الوثائق المطلوبة.',
      vocab: ['abrir una cuenta|يفتح حسابًا', 'la cuenta nómina|حساب الراتب', 'las comisiones|العمولات', 'la tarjeta de débito|بطاقة الخصم', 'el justificante de domicilio|إثبات السكن', 'domiciliar la nómina|تحويل الراتب إلى الحساب', 'la banca online|الخدمة المصرفية عبر الإنترنت', 'firmar|يوقّع'],
      steps: [
        { s: 'Empleada', es: 'Buenos días, ¿en qué puedo ayudarle?', ar: 'صباح الخير، كيف أستطيع مساعدتك؟', c: [
          ['Buenos días. Quería abrir una cuenta para cobrar mi nómina.', 'صباح الخير. كنتُ أودّ فتح حساب لاستلام راتبي.', 1, 'ممتاز: [[Quería…]] (الـ imperfecto للتهذيب) صيغة مهذبة جدًا.'],
          ['Quiero cuenta.', '—', 0, 'ينقص الأداة والتهذيب: [[Quería abrir una cuenta, por favor]].'] ] },
        { s: 'Empleada', es: 'Muy bien. ¿Tiene el NIE en vigor y un justificante de domicilio?', ar: 'جيد جدًا. هل معك NIE ساري المفعول وإثبات سكن؟', c: [
          ['Tengo el NIE. ¿Qué documento sirve como justificante de domicilio?', 'معي NIE. أي وثيقة تصلح كإثبات للسكن؟', 1, 'سؤال ذكي: [[servir como]] = يصلح كـ.'],
          ['Sí, todo traigo.', '—', 0, 'الترتيب الطبيعي: [[Sí, lo traigo todo]] أو [[Sí, traigo todo]].'] ] },
        { s: 'Empleada', es: 'Un recibo de la luz o el contrato de alquiler, por ejemplo.', ar: 'فاتورة كهرباء أو عقد الإيجار مثلًا.', c: [
          ['Aquí tiene el contrato de alquiler.', 'تفضّل عقد الإيجار.', 1, 'ممتاز.'],
          ['No lo tengo aquí. ¿Puedo traerlo mañana?', 'ليس معي هنا. هل أستطيع إحضاره غدًا؟', 1, 'صحيح: [[traerlo]] الضمير lo يلتصق بالمصدر.'] ] },
        { s: 'Empleada', es: 'Le recomiendo la cuenta nómina: no tiene comisiones si domicilia el sueldo.', ar: 'أنصحك بحساب الراتب: لا عمولات عليه إن حوّلتَ راتبك إليه.', c: [
          ['¿Y la tarjeta de débito tiene algún coste?', 'وهل لبطاقة الخصم أي تكلفة؟', 1, 'ممتاز: [[tener algún coste]].'],
          ['¿Qué significa «domiciliar»?', 'ماذا تعني «domiciliar»؟', 1, 'سؤال ممتاز! السؤال عن معنى كلمة مهارة مهمة: [[¿Qué significa…?]]. domiciliar = ربط دفع أو استلام بالحساب.'] ] },
        { s: 'Empleada', es: 'La tarjeta es gratuita el primer año. También puede usar la aplicación del banco.', ar: 'البطاقة مجانية في السنة الأولى. ويمكنك أيضًا استخدام تطبيق البنك.', c: [
          ['Perfecto. ¿Y cuándo recibiré la tarjeta?', 'ممتاز. ومتى سأستلم البطاقة؟', 1, 'رائع: المستقبل [[recibiré]].'],
          ['Perfecto. ¿Cuándo recibo la tarjeta?', 'ممتاز. متى أستلم البطاقة؟', 1, 'صحيح أيضًا: الحاضر يُستخدم كثيرًا للمستقبل القريب.'] ] },
        { task: 'الموظفة تطلب رقمك السري للبطاقة الجديدة لتسجّله. هذا غير طبيعي! اكتب جملة ترفض فيها بأدب.', keys: 'no|pin|secreto|personal', model: 'Lo siento, pero el PIN es personal y no se lo voy a decir a nadie.' },
        { s: 'Empleada', es: 'Tiene razón, perdone, ha sido un error. Firme aquí y aquí, por favor. ¡Ya está!', ar: 'معك حق، عذرًا، كان خطأ. وقّع هنا وهنا من فضلك. انتهينا!', c: [
          ['Muchas gracias por su ayuda.', 'شكرًا جزيلًا على مساعدتك.', 1, 'أحسنت! وانتبه دائمًا: لا تعطِ رقمك السري لأحد، حتى موظف البنك.'] ] }
      ],
      end: 'فتحتَ حسابك! تعلّمتَ الطلب المهذب بـ Quería…، والوثائق المطلوبة، وحماية رقمك السري.' },

    { id: 'piso', lv: 'A2', photo: 'street', t: 'Buscando piso de alquiler', ta: 'البحث عن شقة للإيجار',
      intro: 'رأيتَ إعلانًا: «Se alquila piso, 2 dormitorios, 850 €». اتصلتَ بالمالك وأنت الآن تزور الشقة. هدفك: تسأل الأسئلة الصحيحة قبل التوقيع.',
      vocab: ['el casero / el propietario|المالك', 'los gastos de comunidad|رسوم العمارة', 'la fianza|التأمين', 'amueblado|مفروش', 'la calefacción|التدفئة', 'luminoso|مضيء', 'el contrato|العقد', 'el empadronamiento|التسجيل البلدي'],
      steps: [
        { s: 'Casero', es: 'Bienvenido. Este es el salón. Como ve, es muy luminoso.', ar: 'أهلًا بك. هذه هي الصالة. كما ترى، مضيئة جدًا.', c: [
          ['Sí, es muy bonito. ¿Cuántos metros tiene el piso?', 'نعم، جميلة جدًا. كم متر مساحة الشقة؟', 1, 'سؤال مهم: [[¿Cuántos metros tiene…?]].'],
          ['Sí, está muy bonito.', '—', 0, 'لوصف صفة ثابتة للشقة نستخدم [[es bonito]]. ([[está bonito]] تعني «يبدو جميلًا الآن»، مقبولة في الكلام لكن ser هنا أدق).'] ] },
        { s: 'Casero', es: 'Setenta metros. Tiene dos dormitorios, un baño y la cocina está equipada.', ar: 'سبعون مترًا. فيها غرفتا نوم وحمّام والمطبخ مجهّز.', c: [
          ['¿Los gastos de comunidad están incluidos en el precio?', 'هل رسوم العمارة مشمولة في السعر؟', 1, 'سؤال أساسي في إسبانيا!'],
          ['¿El piso tiene calefacción?', 'هل في الشقة تدفئة؟', 1, 'سؤال مهم جدًا للشتاء.'] ] },
        { s: 'Casero', es: 'La comunidad sí está incluida. La luz y el gas los paga el inquilino. Hay calefacción de gas.', ar: 'رسوم العمارة مشمولة. الكهرباء والغاز يدفعهما المستأجر. التدفئة بالغاز.', c: [
          ['¿Y cuánto hay que pagar de fianza?', 'وكم يجب دفع التأمين؟', 1, 'ممتاز: [[hay que + infinitivo]] للسؤال عن الواجب العام.'],
          ['¿Cuánto es la fianza?', 'كم التأمين؟', 1, 'صحيح ومباشر.'] ] },
        { s: 'Casero', es: 'Un mes de fianza, y le pido también las dos últimas nóminas.', ar: 'شهر تأمين، وأطلب أيضًا آخر كشفي راتب.', c: [
          ['De acuerdo. ¿Me podré empadronar en el piso?', 'موافق. هل سأستطيع التسجيل البلدي في الشقة؟', 1, 'سؤال ضروري! التسجيل البلدي (empadronamiento) حق للمستأجر ومطلوب لمعاملات كثيرة.'],
          ['Yo no tengo nóminas, soy autónomo.', 'ليس عندي كشوف راتب، أنا أعمل لحسابي.', 1, 'جواب صادق ومفيد. يمكن تقديم إقرار ضريبي بدل الكشوف.'] ] },
        { s: 'Casero', es: 'Sí, claro, sin problema. ¿Le interesa el piso?', ar: 'نعم بالطبع، بلا مشكلة. هل تهمّك الشقة؟', c: [
          ['Me interesa mucho, pero quiero leer el contrato con calma antes de firmar.', 'تهمّني كثيرًا، لكني أريد قراءة العقد بهدوء قبل التوقيع.', 1, 'قرار ذكي! [[antes de + infinitivo]].'],
          ['Me interesan mucho.', '—', 0, 'الشقة مفردة: [[Me interesa]] (مثل gustar).'] ] },
        { task: 'اكتب رسالة قصيرة للمالك: الشقة أعجبتك، وتريد توقيع العقد يوم السبت.', keys: 'piso|gusta|gustado|firmar|sábado', model: 'Hola, el piso me ha gustado mucho. ¿Podemos firmar el contrato el sábado por la mañana? Gracias.' },
        { s: 'Casero', es: 'Perfecto, el sábado a las once. ¡Hasta el sábado!', ar: 'ممتاز، السبت في الحادية عشرة. إلى السبت!', c: [
          ['¡Hasta el sábado! Muchas gracias.', 'إلى السبت! شكرًا جزيلًا.', 1, 'أحسنت! [[Hasta + يوم]] للوداع حتى موعد محدد.'] ] }
      ],
      end: 'كدتَ تحصل على شقتك! تعلّمتَ السؤال عن المصاريف والتأمين والتسجيل البلدي، وأهمية قراءة العقد.' },

    { id: 'ayuntamiento', lv: 'A2', photo: 'ayuntamiento', t: 'Empadronarse en el ayuntamiento', ta: 'التسجيل في البلدية',
      intro: 'انتقلتَ إلى بلدية جديدة ويجب أن تسجّل في السجل البلدي (padrón). لديك موعد مسبق في مكتب خدمة المواطنين. هدفك: تُكمل المعاملة دون نقص في الوثائق.',
      vocab: ['el padrón|السجل البلدي', 'el certificado de empadronamiento|شهادة التسجيل', 'la cita previa|الموعد المسبق', 'el formulario|الاستمارة', 'rellenar|يملأ', 'la hoja de inscripción|استمارة التسجيل', 'el volante|الإفادة (شهادة بسيطة)', 'la ventanilla|الشبّاك'],
      steps: [
        { s: 'Funcionario', es: 'Buenos días. ¿Tiene cita previa?', ar: 'صباح الخير. هل لديك موعد مسبق؟', c: [
          ['Sí, a las nueve y cuarto. Vengo a empadronarme.', 'نعم، في التاسعة والربع. جئتُ للتسجيل في البلدية.', 1, 'ممتاز: فعل انعكاسي [[empadronarme]] (الضمير ملتصق بالمصدر).'],
          ['Sí, vengo para empadronar.', '—', 0, 'الفعل انعكاسي: [[vengo a empadronarme]] (venir a + مصدر للغاية).'] ] },
        { s: 'Funcionario', es: 'Necesito su pasaporte o NIE, el contrato de alquiler y la hoja de inscripción rellenada.', ar: 'أحتاج جوازك أو NIE، وعقد الإيجار، واستمارة التسجيل معبّأة.', c: [
          ['Aquí tiene el NIE y el contrato. ¿Dónde puedo conseguir la hoja de inscripción?', 'تفضّل NIE والعقد. أين أحصل على الاستمارة؟', 1, 'ممتاز: سألتَ عمّا ينقصك.'],
          ['Aquí tiene todo.', 'تفضّل كل شيء.', 0, 'لكن الاستمارة ليست معك! من الأفضل أن تقول ما ينقصك: [[No tengo la hoja de inscripción]].'] ] },
        { s: 'Funcionario', es: 'Tiene una aquí. Rellénela con letras mayúsculas y fírmela abajo.', ar: 'خذ واحدة من هنا. املأها بأحرف كبيرة ووقّعها في الأسفل.', c: [
          ['Perdone, ¿qué tengo que poner en «Nivel de estudios»?', 'عفوًا، ماذا يجب أن أكتب في «المستوى الدراسي»؟', 1, 'سؤال ممتاز عن خانة لا تفهمها.'],
          ['Vale, ahora la relleno.', 'حسنًا، الآن أملؤها.', 1, 'صحيح: [[la relleno]] (الضمير la = الاستمارة).'] ] },
        { task: 'في الاستمارة: اكتب عنوانك بالشكل الإسباني (الشارع، الرقم، الطابق، الباب). استخدم عنوانًا تخيّليًا.', keys: 'calle|avenida|plaza|nº|número|piso|puerta|º', model: 'Calle de Alcalá, n.º 120, 3.º B, 28009 Madrid' },
        { s: 'Funcionario', es: 'Muy bien. ¿Necesita un certificado o un volante de empadronamiento?', ar: 'جيد جدًا. هل تحتاج شهادة أم إفادة تسجيل؟', c: [
          ['¿Cuál es la diferencia?', 'ما الفرق؟', 1, 'سؤال ممتاز! الإفادة (volante) للمعاملات العادية، والشهادة (certificado) وثيقة رسمية أقوى لمعاملات مثل الجنسية.'],
          ['Necesito un certificado para el expediente de nacionalidad.', 'أحتاج شهادة لملف الجنسية.', 1, 'ممتاز: عرفتَ ما تحتاجه بالضبط.'] ] },
        { s: 'Funcionario', es: 'Aquí tiene su certificado. Ya está empadronado.', ar: 'تفضّل شهادتك. أنت الآن مسجّل.', c: [
          ['Muchas gracias. ¡Que tenga un buen día!', 'شكرًا جزيلًا. يومًا سعيدًا!', 1, 'أحسنت! تمنٍّ مهذب بالـ subjuntivo: [[Que tenga…]].'] ] }
      ],
      end: 'أصبحتَ مسجّلًا في البلدية! هذه الشهادة مطلوبة للصحة والمدارس وملف الجنسية.' },

    { id: 'tienda', lv: 'A2', photo: 'tienda', t: 'Devolver una chaqueta', ta: 'إرجاع سترة إلى المتجر',
      intro: 'اشتريتَ سترة الأسبوع الماضي لكنها صغيرة. عندك الإيصال. هدفك: تبدّلها أو تسترجع مالك، وتطالب بحقك بأدب إذا رفضوا.',
      vocab: ['devolver|يُرجع', 'cambiar|يبدّل', 'la talla|المقاس', 'el ticket|الإيصال', 'el reembolso|استرداد المال', 'el vale|قسيمة شراء', 'la hoja de reclamaciones|استمارة الشكاوى', 'el plazo|المهلة'],
      steps: [
        { s: 'Dependienta', es: 'Hola, buenas tardes. ¿Le puedo ayudar en algo?', ar: 'مرحبًا، مساء الخير. هل أستطيع مساعدتك؟', c: [
          ['Buenas tardes. Compré esta chaqueta la semana pasada, pero me queda pequeña.', 'مساء الخير. اشتريتُ هذه السترة الأسبوع الماضي لكنها صغيرة عليّ.', 1, 'ممتاز: [[compré]] (indefinido مع la semana pasada) و[[me queda pequeña]] (تأتي صغيرة عليّ).'],
          ['He comprado esta chaqueta la semana pasada.', '—', 0, 'مع [[la semana pasada]] (فترة منتهية) نستخدم الـ indefinido: [[compré]].'] ] },
        { s: 'Dependienta', es: '¿Quiere cambiarla por otra talla o prefiere la devolución?', ar: 'هل تريد تبديلها بمقاس آخر أم تفضّل الإرجاع؟', c: [
          ['Prefiero cambiarla por una talla más grande.', 'أفضّل تبديلها بمقاس أكبر.', 1, 'ممتاز: [[cambiarla]] الضمير يلتصق بالمصدر.', 2],
          ['Prefiero que me devuelvan el dinero.', 'أفضّل أن تعيدوا لي المال.', 1, 'رائع! [[prefiero que + subjuntivo]] (devuelvan).', 3] ] },
        { s: 'Dependienta', es: 'Lo siento, no nos queda la talla L en ese color. ¿Le enseño otro modelo?', ar: 'آسفة، لم يبقَ المقاس L بهذا اللون. هل أريك موديلًا آخر؟', c: [
          ['No, gracias. Entonces prefiero la devolución.', 'لا شكرًا. إذن أفضّل الإرجاع.', 1, 'قرار منطقي.', 3],
          ['Sí, enséñemelo, por favor.', 'نعم، أريني إياه من فضلك.', 1, 'ممتاز: أمر مهذب مع ضمائر: [[enséñemelo]].', 6] ] },
        { s: 'Dependienta', es: 'Para devoluciones le damos un vale para gastar en la tienda; no devolvemos el dinero.', ar: 'في حالات الإرجاع نعطيك قسيمة للشراء من المتجر؛ لا نعيد المال.', c: [
          ['Perdone, pero en el ticket pone que tengo treinta días para la devolución del dinero.', 'عفوًا، لكن مكتوب في الإيصال أن لديّ ثلاثين يومًا لاسترداد المال.', 1, 'ممتاز! [[pone que…]] = «مكتوب أن…». الدفاع عن حقك بهدوء وبالدليل.'],
          ['¡Esto es ilegal! ¡Quiero hablar con la policía!', '—', 0, 'الغضب لا يساعد. الطريقة الأفضل: الإشارة إلى سياسة المتجر المكتوبة، وإن لزم طلب [[la hoja de reclamaciones]].'] ] },
        { task: 'الموظفة ما زالت ترفض. اكتب جملة تطلب فيها استمارة الشكاوى بأدب.', keys: 'hoja de reclamaciones|reclamación|reclamar', model: 'Entonces, ¿me puede dar la hoja de reclamaciones, por favor?' },
        { s: 'Dependienta', es: 'Tiene razón, perdone. Aquí tiene su dinero: treinta y nueve noventa y cinco.', ar: 'معك حق، عذرًا. تفضّل مالك: تسعة وثلاثون وخمسة وتسعون.', c: [
          ['Muchas gracias por su comprensión.', 'شكرًا جزيلًا على تفهّمك.', 1, 'أحسنت! حصلتَ على حقك بأدب.', -1] ] },
        { s: 'Dependienta', es: 'Mire, esta chaqueta es muy parecida y sí tenemos la L. ¿Se la quiere probar?', ar: 'انظر، هذه السترة مشابهة جدًا ولدينا المقاس L. هل تريد تجربتها؟', c: [
          ['Sí, ¿dónde está el probador?', 'نعم، أين غرفة القياس؟', 1, 'ممتاز: [[el probador]] = غرفة القياس.'],
          ['Sí, me la pruebo.', 'نعم، سأجرّبها.', 1, 'صحيح: [[probarse]] انعكاسي، والضمير la = السترة.'] ] },
        { s: 'Dependienta', es: '¿Qué tal le queda?', ar: 'كيف تبدو عليك؟', c: [
          ['Me queda perfecta. Me la llevo; ¿tengo que pagar la diferencia?', 'تناسبني تمامًا. سآخذها؛ هل يجب أن أدفع الفرق؟', 1, 'ممتاز: [[Me la llevo]] = سآخذها، و[[la diferencia]] = فرق السعر.', -1],
          ['Me queda un poco grande, pero me gusta. Me la llevo.', 'كبيرة قليلًا، لكنها تعجبني. سآخذها.', 1, 'صحيح: [[me queda grande]] = كبيرة عليّ.', -1] ] }
      ],
      end: 'نجحتَ في الإرجاع! تعلّمتَ me queda pequeña، والتمييز بين cambiar وdevolver، وحقك في استمارة الشكاوى.' },

    { id: 'vecinos', lv: 'A2', photo: 'street', t: 'Un problema con los vecinos', ta: 'مشكلة مع الجيران',
      intro: 'جيرانك في الطابق العلوي يضعون موسيقى عالية حتى الساعة الثانية فجرًا للمرة الثالثة هذا الأسبوع. غدًا تعمل مبكرًا. هدفك: تحلّ المشكلة بالحوار وبلطف.',
      vocab: ['el ruido|الضجيج', 'molestar|يزعج', 'bajar el volumen|يخفض الصوت', 'madrugar|يستيقظ باكرًا', 'la comunidad de vecinos|اتحاد السكان', 'el presidente de la comunidad|رئيس اتحاد السكان', 'la convivencia|التعايش', 'disculparse|يعتذر'],
      steps: [
        { s: 'Narrador', es: 'Llamas a la puerta de los vecinos. Abre un chico joven.', ar: 'تطرق باب الجيران. يفتح شاب.', c: [
          ['Hola, buenas noches. Soy el vecino de abajo, del segundo B. Perdona que te moleste a estas horas.', 'مرحبًا، مساء الخير. أنا الجار من الأسفل، الثاني B. عذرًا لإزعاجك في هذه الساعة.', 1, 'بداية ممتازة: تعريف بالنفس واعتذار مسبق: [[Perdona que te moleste]] (subjuntivo).'],
          ['¡La música! ¡Muy alta! ¡Basta!', '—', 0, 'البدء بالصراخ يجعل الحوار صعبًا. ابدأ بالتحية والتعريف بنفسك.'] ] },
        { s: 'Vecino', es: 'Hola… ¿Pasa algo?', ar: 'مرحبًا… هل هناك شيء؟', c: [
          ['Es que se oye mucho la música en mi casa y mañana tengo que madrugar para trabajar.', 'الموسيقى تُسمع كثيرًا في بيتي وغدًا يجب أن أستيقظ باكرًا للعمل.', 1, 'ممتاز: [[Es que…]] لتقديم سبب بلطف، و[[se oye]] (se impersonal).'],
          ['Tú tienes la música muy alto todas las noches.', '—', 0, 'الصفة تطابق الموسيقى: [[muy alta]]. والأسلوب يبدو اتهاميًا؛ الأفضل شرح المشكلة من جهتك.'] ] },
        { s: 'Vecino', es: 'Uy, perdona, no sabía que se oía tanto. Es el cumpleaños de mi compañero.', ar: 'آه، عذرًا، لم أكن أعرف أنها تُسمع هكذا. إنه عيد ميلاد زميلي في السكن.', c: [
          ['¡Ah, felicidades a tu compañero! ¿Podríais bajar un poco el volumen a partir de las doce?', 'آه، مبروك لزميلك! هل يمكنكم خفض الصوت قليلًا بعد الثانية عشرة؟', 1, 'رائع! تهنئة + طلب مهذب بالـ [[condicional]]: [[¿Podríais…?]].'],
          ['No me importa el cumpleaños.', '—', 0, 'جملة قاسية لا تساعد على التعايش. الطلب بالشرطي أكثر لطفًا وفعالية.'] ] },
        { s: 'Vecino', es: 'Claro, ahora mismo la bajamos. Y perdona otra vez.', ar: 'بالطبع، سنخفضها الآن. وعذرًا مرة أخرى.', c: [
          ['No pasa nada. ¡Que lo paséis bien!', 'لا بأس. استمتعوا بوقتكم!', 1, 'نهاية مثالية: [[No pasa nada]] (لا بأس)، و[[Que lo paséis bien]] (subjuntivo للتمني).'] ] },
        { s: 'Narrador', es: 'Una semana después, el ruido vuelve. Decides escribir al presidente de la comunidad.', ar: 'بعد أسبوع، عاد الضجيج. تقرّر الكتابة إلى رئيس اتحاد السكان.', c: [
          ['Escribo un mensaje educado explicando el problema y las fechas.', 'أكتب رسالة مهذبة تشرح المشكلة والتواريخ.', 1, 'الخطوة الصحيحة قبل أي إجراء رسمي.'],
          ['Llamo a la policía inmediatamente a las diez de la noche.', '—', 0, 'الشرطة المحلية خيار عند الإزعاج الليلي الشديد والمتكرر، لكن البدء بالاتحاد غالبًا أفضل للتعايش.'] ] },
        { task: 'اكتب رسالة قصيرة لرئيس الاتحاد: عرّف بنفسك (الطابق)، اشرح مشكلة الضجيج، واطلب الحديث في الاجتماع القادم.', keys: 'vecino|piso|ruido|música|reunión|noche', model: 'Hola, Pedro. Soy Mones, del 2.º B. Desde hace dos semanas hay mucho ruido en el 3.º B por las noches. Ya hablé con ellos, pero continúa. ¿Podemos hablarlo en la próxima reunión de la comunidad? Gracias.' }
      ],
      end: 'تعاملتَ مع المشكلة بذكاء! تعلّمتَ Es que… للتفسير، والطلب بـ ¿Podríais…?، وثقافة التعايش في العمارات الإسبانية.' },

    { id: 'direcciones', lv: 'A1', photo: 'plazamayor', t: 'Turista en tu ciudad', ta: 'سائح يسألك عن الطريق',
      intro: 'أنت في ساحة «Plaza Mayor». سائحة إسبانية من مدينة أخرى تسألك عن الطريق إلى القصر الملكي. هذه المرة **أنت** من يعطي الاتجاهات!',
      vocab: ['todo recto|مباشرة', 'girar a la derecha|انعطف يمينًا', 'a la izquierda|يسارًا', 'cruzar|يعبر', 'la calle|الشارع', 'al final de|في نهاية', 'a unos diez minutos|على بعد عشر دقائق تقريبًا', 'andando / a pie|مشيًا'],
      steps: [
        { s: 'Turista', es: 'Perdone, ¿sabe dónde está el Palacio Real?', ar: 'عفوًا، هل تعرف أين القصر الملكي؟', c: [
          ['Sí, claro. Está muy cerca, a unos diez minutos andando.', 'نعم بالطبع. قريب جدًا، على بعد عشر دقائق مشيًا.', 1, 'ممتاز: [[a unos diez minutos andando]].'],
          ['Sí, es muy cerca.', '—', 0, 'الموقع والمسافة مع [[estar]]: [[Está muy cerca]].'] ] },
        { s: 'Turista', es: '¡Qué bien! ¿Y cómo llego?', ar: 'رائع! وكيف أصل؟', c: [
          ['Salga de la plaza por la calle Mayor y siga todo recto.', 'اخرجي من الساحة عبر الشارع الكبير وتابعي مباشرة.', 1, 'ممتاز: أمر مهذب (usted): [[salga, siga]].'],
          ['Sale de la plaza y sigue.', '—', 0, 'مع usted في الأمر نستخدم الـ subjuntivo: [[Salga… y siga…]]. (sale/sigue = يخرج/يتابع: مضارع).'] ] },
        { s: 'Turista', es: 'Todo recto por la calle Mayor… ¿y luego?', ar: 'مباشرة في الشارع الكبير… ثم؟', c: [
          ['Al final de la calle, cruce y gire a la izquierda. El palacio está enfrente de la catedral de la Almudena.', 'في نهاية الشارع، اعبري وانعطفي يسارًا. القصر مقابل كاتدرائية ألمودينا.', 1, 'ممتاز: [[cruce, gire]] (أمر usted)، و[[enfrente de]].'],
          ['Gira a la derecha, después izquierda, después recto, después…', '—', 0, 'التعليمات طويلة ومربكة. أعطِ معلمًا واضحًا (catedral) وخطوتين أو ثلاثًا فقط.'] ] },
        { task: 'السائحة تسأل: «هل يوجد مقهى جيد هناك؟». اكتب جوابًا مستخدمًا hay.', keys: 'hay|cafetería|café|bar', model: 'Sí, hay una cafetería muy buena al lado del palacio, en la plaza de Oriente.' },
        { s: 'Turista', es: '¡Muchísimas gracias! Es usted muy amable.', ar: 'شكرًا جزيلًا جدًا! أنت لطيف جدًا.', c: [
          ['De nada. ¡Que disfrute de la visita!', 'العفو. استمتعي بالزيارة!', 1, 'ممتاز: [[De nada]] ردًّا على الشكر، و[[Que disfrute]] (subjuntivo للتمني).'],
          ['Gracias.', '—', 0, 'عندما يشكرك أحد، قل [[De nada]] (العفو).'] ] }
      ],
      end: 'أصبحتَ دليلًا سياحيًا! تعلّمتَ إعطاء الاتجاهات بصيغة الأمر المهذبة (salga, siga, gire, cruce) واستخدام المعالم.' },

    { id: 'perdida', lv: 'B1', photo: 'granvia', t: 'He perdido la cartera', ta: 'أضعتُ محفظتي',
      intro: 'عند خروجك من المترو في «Gran Vía» اكتشفت أن محفظتك اختفت: فيها بطاقة الإقامة والبطاقة البنكية ومبلغ صغير. هدفك: تتصرف بسرعة وبشكل صحيح: تلغي البطاقة، تقدّم بلاغًا، وتسأل عن الخطوات.',
      vocab: ['perder / robar|يضيّع / يسرق', 'la cartera|المحفظة', 'bloquear la tarjeta|يوقف البطاقة', 'la denuncia|البلاغ', 'la comisaría|مركز الشرطة', 'el duplicado|نسخة بديلة', 'objetos perdidos|المفقودات', 'darse cuenta de|ينتبه إلى'],
      steps: [
        { s: 'Narrador', es: 'Te das cuenta de que no tienes la cartera. ¿Qué haces primero?', ar: 'تنتبه إلى أن المحفظة ليست معك. ماذا تفعل أولًا؟', c: [
          ['Llamo al banco para bloquear la tarjeta.', 'أتصل بالبنك لإيقاف البطاقة.', 1, 'الخطوة الأولى الصحيحة! لاحظ [[para + infinitivo]] للغاية.'],
          ['Me siento en un banco y espero.', '—', 0, 'الانتظار خطر: يجب إيقاف البطاقة فورًا. (لاحظ أيضًا: banco = بنك وأيضًا مقعد!)'] ] },
        { s: 'Banco', es: 'Banco Norte, buenas tardes. ¿En qué puedo ayudarle?', ar: 'بنك نورتي، مساء الخير. كيف أساعدك؟', c: [
          ['Buenas tardes. Me han robado la cartera y quiero bloquear mi tarjeta.', 'مساء الخير. سُرقت محفظتي وأريد إيقاف بطاقتي.', 1, 'ممتاز: [[Me han robado]] (المبني للمجهول بصيغة ellos) و[[pretérito perfecto]] لحدث قريب.'],
          ['Buenas tardes. Me robó la cartera.', '—', 0, '[[Me robó]] تعني «سرقني (هو)» — كأنك تعرف السارق. عندما لا تعرف الفاعل: [[Me han robado la cartera]].'] ] },
        { s: 'Banco', es: 'De acuerdo, ya está bloqueada. Le enviaremos una nueva a su domicilio. Le recomiendo que ponga una denuncia.', ar: 'حسنًا، تم إيقافها. سنرسل لك بطاقة جديدة إلى عنوانك. أنصحك بتقديم بلاغ.', c: [
          ['Muchas gracias. ¿Dónde está la comisaría más cercana?', 'شكرًا جزيلًا. أين أقرب مركز شرطة؟', 1, 'ممتاز. ولاحظ في كلام الموظف: [[le recomiendo que ponga]] (subjuntivo بعد النصيحة).'],
          ['¿Es necesario que pongo una denuncia?', '—', 0, 'بعد [[es necesario que]] يأتي الـ subjuntivo: [[ponga]].'] ] },
        { s: 'Policía', es: 'Buenas tardes. Cuénteme qué ha pasado.', ar: 'مساء الخير. احكِ لي ما حدث.', c: [
          ['Iba en el metro y había mucha gente. Cuando salí en Gran Vía, la cartera ya no estaba en mi bolsillo.', 'كنتُ في المترو وكان هناك ناس كثيرون. عندما خرجتُ في غران فيا، لم تكن المحفظة في جيبي.', 1, 'سرد ممتاز: الـ [[imperfecto]] للخلفية (iba, había, estaba) والـ [[indefinido]] للحدث (salí).'],
          ['Fui en el metro, hubo mucha gente y la cartera no estuvo.', '—', 0, 'الخلفية والوصف بالـ imperfecto: [[Iba… había… no estaba]].'] ] },
        { s: 'Policía', es: '¿Qué llevaba en la cartera?', ar: 'ماذا كان في المحفظة؟', c: [
          ['La tarjeta de residencia, una tarjeta del banco, la tarjeta de transporte y unos cuarenta euros.', 'بطاقة الإقامة، بطاقة بنك، بطاقة المواصلات، ونحو أربعين يورو.', 1, 'وصف دقيق: [[unos cuarenta euros]] = نحو أربعين.'] ] },
        { s: 'Policía', es: 'Aquí tiene la copia de la denuncia. La necesitará para pedir el duplicado de la tarjeta de residencia.', ar: 'تفضّل نسخة البلاغ. ستحتاجها لطلب بطاقة إقامة بديلة.', c: [
          ['¿Y dónde tengo que pedir el duplicado?', 'وأين يجب أن أطلب البديل؟', 1, 'سؤال ممتاز؛ الجواب: بموعد مسبق في مكتب الأجانب أو مراكز الشرطة المختصة بإصدار الوثائق.'],
          ['Gracias. ¿Y si alguien encuentra la cartera?', 'شكرًا. وإذا وجد أحدهم المحفظة؟', 1, 'سؤال جيد؛ يمكنك أيضًا مراجعة مكتب المفقودات (objetos perdidos) في البلدية.'] ] },
        { task: 'اكتب رسالة لابنك تخبره بما حدث وماذا فعلت (استخدم me han robado وhe llamado/he puesto).', keys: 'robado|perdido|cartera|he llamado|denuncia|he puesto|bloqueado', model: 'Hola, hijo. Me han robado la cartera en el metro. Ya he llamado al banco y he bloqueado la tarjeta. También he puesto una denuncia en la comisaría. Estoy bien, no te preocupes.' }
      ],
      end: 'تصرّفتَ بشكل ممتاز! تعلّمتَ me han robado، والسرد بالـ imperfecto والـ indefinido معًا، والخطوات العملية بعد الضياع أو السرقة.' },

    { id: 'entrevista', lv: 'B1', photo: 'congreso', t: 'Entrevista de trabajo', ta: 'مقابلة عمل',
      intro: 'تقدّمتَ لوظيفة «مسؤول مستودع» في شركة توزيع. هذه مقابلتك الأولى بالإسبانية. هدفك: تتحدث عن خبرتك بثقة، وتستخدم الأزمنة الصحيحة، وتطرح أسئلة جيدة.',
      vocab: ['la experiencia|الخبرة', 'el puesto|المنصب', 'el horario|الدوام', 'el sueldo bruto / neto|الراتب الإجمالي / الصافي', 'las responsabilidades|المسؤوليات', 'trabajar en equipo|العمل ضمن فريق', 'incorporarse|يلتحق بالعمل', 'el periodo de prueba|فترة التجربة'],
      steps: [
        { s: 'Entrevistadora', es: 'Buenos días, siéntese. Hábleme un poco de usted.', ar: 'صباح الخير، اجلس. حدّثني قليلًا عن نفسك.', c: [
          ['Me llamo Mones, soy sirio y llevo nueve años en España. Tengo mucha experiencia en logística.', 'اسمي مؤنس، سوري، وأعيش في إسبانيا منذ تسع سنوات. لديّ خبرة كبيرة في اللوجستيات.', 1, 'ممتاز: [[llevar + tiempo]] تركيب طبيعي جدًا.'],
          ['Me llamo Mones, estoy sirio y estoy en España desde nueve años.', '—', 0, 'الجنسية مع ser: [[soy sirio]]. والمدة: [[desde hace nueve años]] أو [[llevo nueve años]].'] ] },
        { s: 'Entrevistadora', es: '¿Qué experiencia tiene en este tipo de trabajo?', ar: 'ما خبرتك في هذا النوع من العمل؟', c: [
          ['En Siria tuve una tienda durante quince años. Aquí he trabajado cinco años en un almacén de Getafe.', 'في سوريا كان لي متجر خمسة عشر عامًا. وهنا عملتُ خمس سنوات في مستودع في خيتافي.', 1, 'ممتاز: [[tuve]] (indefinido لفترة منتهية) و[[he trabajado]] (perfecto لتجربة تمتد إلى حياتك الحالية).'],
          ['En Siria he tenido una tienda en 2005.', '—', 0, 'مع تاريخ منتهٍ (en 2005) نستخدم الـ indefinido: [[tuve]].'] ] },
        { s: 'Entrevistadora', es: '¿Cuál cree que es su mayor cualidad?', ar: 'ما أكبر صفة إيجابية فيك برأيك؟', c: [
          ['Creo que soy muy responsable y me gusta trabajar en equipo.', 'أعتقد أنني مسؤول جدًا وأحب العمل ضمن فريق.', 1, 'ممتاز: [[Creo que + indicativo]] للرأي المثبت.'],
          ['Creo que sea muy responsable.', '—', 0, 'بعد [[creo que]] المثبتة يأتي الـ indicativo: [[soy]].'] ] },
        { s: 'Entrevistadora', es: 'El puesto es de lunes a viernes, de siete a tres. ¿Tiene alguna pregunta?', ar: 'الدوام من الإثنين إلى الجمعة، من السابعة إلى الثالثة. هل لديك أي سؤال؟', c: [
          ['Sí, ¿el contrato sería indefinido? ¿Y cuál sería el sueldo?', 'نعم، هل سيكون العقد دائمًا؟ وكم سيكون الراتب؟', 1, 'أسئلة مهمة ومهذبة بالـ [[condicional]].'],
          ['No, ninguna.', 'لا، لا شيء.', 0, 'من الأفضل دائمًا طرح سؤال أو اثنين: ذلك يُظهر اهتمامك.'] ] },
        { s: 'Entrevistadora', es: 'Sería un contrato indefinido, con seis meses de prueba. Le llamaremos la semana que viene.', ar: 'سيكون عقدًا دائمًا مع ستة أشهر تجربة. سنتصل بك الأسبوع القادم.', c: [
          ['Muchas gracias por su tiempo. Espero que tengamos la oportunidad de trabajar juntos.', 'شكرًا جزيلًا على وقتك. آمل أن تتاح لنا فرصة العمل معًا.', 1, 'خاتمة ممتازة: [[Espero que + subjuntivo]] (tengamos).'],
          ['Gracias. Espero que me llamáis.', '—', 0, 'بعد [[espero que]] يأتي الـ subjuntivo، ومع usted: [[Espero que me llamen]].'] ] },
        { task: 'بعد المقابلة، اكتب رسالة شكر قصيرة بالبريد الإلكتروني (صيغة رسمية: Estimada…، Un saludo).', keys: 'estimad|gracias|entrevista|saludo|atentamente', model: 'Estimada Sra. López:\nLe agradezco mucho la entrevista de hoy. Me ha interesado mucho el puesto y quedo a su disposición para cualquier información.\nUn saludo cordial,\nMones Hasan' }
      ],
      end: 'أدّيتَ مقابلة ناجحة! تعلّمتَ المزج بين tuve وhe trabajado، والرأي بـ creo que، والختام بـ espero que + subjuntivo.' }
  ];
})(window.ECM);
