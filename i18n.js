/* AWiGIS site translations: English (default), French, Arabic (MSA), Portuguese.
   UI strings first, country data (names/capitals/regions/facts) further down. */
var UI_I18N = {
  en: {
    nav_gis101:"GIS 101", nav_about:"About", nav_story:"Story", nav_why:"Why we exist", nav_programs:"Programs", nav_faq:"FAQ", nav_join:"Join us",
    theme_aria:"Switch between light and dark mode", lang_aria:"Choose language",
    lang_tip:"You can read this site in French, Arabic, or Portuguese too.", lang_tip_close_aria:"Close",
    hero_eyebrow:"A community of African women in mapping & GIS",
    hero_h1:"Geospatial organization for African women.",
    hero_tagline:"View the geospatial world through the eyes of African women.",
    cta_register:"Register & join us", cta_story:"Read our story", cta_follow:"Follow us",
    stat_members:"members", stat_countries:"countries", stat_volunteers:"volunteers", stat_founded:"founded",
    story_prev_aria:"Previous country", story_next_aria:"Next country",
    label_capital:"Capital", label_population:"Population", label_worldbank:"World Bank",
    gis101_eyebrow:"New to GIS?", gis101_h2:"What is GIS, and why does it matter?",
    gis101_p:"GIS, short for Geographic Information Systems, is technology that turns location and map data into real decisions: the software behind planning a hospital, tracking a flood, or routing a delivery in minutes instead of hours. AWiGIS exists to make sure African women are building and leading that work.",
    tech1_h3:"Satellite imagery & remote sensing", tech1_p:"Pictures of Earth from space, used to track change like deforestation or flooding.",
    tech2_h3:"Drones & aerial mapping", tech2_p:"Flying cameras that map small areas, like a farm or construction site, in incredible detail.",
    tech3_h3:"Digital twins & 3D mapping", tech3_p:"Realistic digital copies of real places, used to plan cities before anything gets built.",
    tech4_h3:"AI & machine learning", tech4_p:"Software that spots patterns in map data faster, and at a bigger scale, than any human could.",
    tech5_h3:"Location intelligence", tech5_p:"Turning \"where\" data into business and policy decisions, from store sites to disaster response.",
    tech6_h3:"Web & mobile mapping", tech6_p:"The interactive maps you already use every day, in ride-hailing and delivery apps.",
    about_eyebrow:"Who we are", about_h2:"A safe, welcoming space, whatever stage you're at.",
    about_p1:"We're African women from all over the world who work in, study, or are simply curious about GIS and mapping. No matter your level, from total beginner to 20-year expert, there's a place for you here.",
    about_p2:"Being part of AWiGIS means making friends who get it, finding mentors, getting honest career advice, working on real mapping projects for your portfolio, hearing about job openings first, and learning about courses worth taking.",
    about_p3:"Membership itself is just for women, but most of our events are open to everyone, because the more people who understand this field, the better.",
    about_stat1:"members in the community", about_stat2:"African countries represented", about_stat3:"volunteers who keep it running",
    about_note:"As of May 2022, most members were in Nigeria, Kenya, Ghana, Egypt, and South Africa.",
    mission_h3:"Our mission", mission_p:"A safe space for African women in geospatial work, no matter where you are in your career.",
    vision_h3:"Our vision", vision_p:"To close the gender gap in Africa's geospatial industry, one member at a time.",
    history_eyebrow:"Our story", history_h2:"Two small groups that grew into one big family.", history_hint:"Tap any moment to read more.",
    tl1_date:"2017", tl1_title:"Women in GIS: Nigeria begins", tl1_body:"Chidimma C. Umeogu starts a small platform for women in GIS in Nigeria.",
    tl2_date:"2019", tl2_title:"Women in GIS: Ghana begins", tl2_body:"Cyhana L. Williams starts a sister platform for women in GIS in Ghana.",
    tl3_date:"Jun 2019", tl3_title:"Chidimma and Cyhana meet on LinkedIn", tl3_body:"The two founders connect online and realize they're solving the same problem for two different countries.",
    tl4_date:"Oct 2019", tl4_title:"African Women in GIS is born", tl4_body:"The two groups join forces into one continent-wide community, starting with 41 members from Nigeria, 11 from Ghana, and 1 from Burkina Faso.",
    why_eyebrow:"Why we exist", why_h2:"Real problems, and what we do about each one.", why_hint:"Tap a card to flip it and see how AWiGIS helps.",
    flip_tap:"Tap to see how we help ↻",
    why1_front_html:"<b>Geospatial work has long been male-dominated</b>, with few women in senior roles to look up to.",
    why1_back_html:"We connect members with <b>mentors and role models</b>: women further along the path who are ready to guide you.",
    why2_front_html:"<b>Few young women hear about GIS careers growing up</b>, and some parents discourage the idea entirely.",
    why2_back_html:"We run <b>free public webinars</b> and share real member stories, so more girls and families see what's possible.",
    why3_front_html:"<b>Jobs, courses, and events can be hard to find</b>, and often too expensive to reach.",
    why3_back_html:"We share <b>job leads, free resources, and affordable opportunities</b> directly with our members.",
    why4_front_html:"<b>Most women in GIS don't know a community like this exists</b> at all.",
    why4_back_html:"We make noise on purpose, through <b>public events, social media, and word of mouth</b>, so no one has to go it alone.",
    programs_eyebrow:"What we offer", programs_h2:"Programs built around what members actually ask for.",
    mentorship_h3:"Mentorship programme", mentorship_p:"Every round (we call it a \"cohort\") pairs newer members with mentors who've been exactly where you are.",
    round1_label:"Round 1", round1_stats:"9 mentees · 7 mentors",
    round2_label:"Round 2", round2_stats:"20 mentees · 14 mentors",
    round3_label:"Round 3", round3_stats:"22 mentees · 13 mentors",
    mentorship_note:"And still growing. Bars show mentee count relative to the biggest round so far.",
    prog1_h3:"Public webinars & events", prog1_p:"Open to everyone, not just members. Our very first was the IWD 2020 webinar.",
    prog2_h3:"Private member groups", prog2_p:"A WhatsApp space for African women in Africa or the diaspora, to network and swap opportunities.",
    prog3_h3:"Career & portfolio support", prog3_p:"Real project opportunities, job leads, and course recommendations, shared right in the group.",
    colours_eyebrow:"Our colours", colours_h2:"What our colours mean. Tap to flip.",
    swatch1_name:"Leafy green", swatch1_meaning:"Our love for nature & geography",
    swatch2_name:"Pitch black", swatch2_meaning:"Unity and support among members",
    swatch3_name:"Light grey", swatch3_meaning:"Gender equity",
    swatch4_name:"Pure white", swatch4_meaning:"Safety and a safe space",
    faq_eyebrow:"Quick questions", faq_h2:"New to this? Start here.",
    faq1_q:"What even is GIS?", faq1_a:"Short for Geographic Information Systems: software that turns maps and locations into tools for real decisions, like where to put a clinic or how to track flooding.",
    faq2_q:"Do I need a GIS job already to join?", faq2_a:"Not at all. Students, complete beginners, and \"just curious\" women are just as welcome as working professionals.",
    faq3_q:"Is it free to join?", faq3_a:"Yes, membership is free. You just need to be an African woman, in Africa or the diaspora.",
    faq4_q:"I live outside Africa. Can I still join?", faq4_a:"Yes, we welcome African women in the diaspora as well, not just those currently living on the continent.",
    faq5_q:"What do I actually get as a member?", faq5_a:"A private WhatsApp community, mentorship opportunities, job and course leads, and invites to events, plus a lot of people cheering you on.",
    join_eyebrow:"Join the community", join_h2:"Ready to meet 1000+ women who understand you?",
    join_p1:"Our community has become a real source of motivation for African women building careers in GIS. We want to keep growing: reaching more women, introducing younger generations to mapping careers, and helping Africa get the full benefit of this field.",
    join_p2:"If that sounds like you, or you're just curious, come say hello.",
    link_register:"Register & join", link_storymap:"Our story (StoryMap)", link_linkedin:"LinkedIn", link_x:"X / Twitter", link_youtube:"YouTube",
    footer_copyright:"© African Women in GIS (AWiGIS)", toTop_aria:"Back to top"
  },
  fr: {
    nav_gis101:"SIG 101", nav_about:"À propos", nav_story:"Notre histoire", nav_why:"Pourquoi nous existons", nav_programs:"Programmes", nav_faq:"FAQ", nav_join:"Nous rejoindre",
    theme_aria:"Basculer entre le mode clair et sombre", lang_aria:"Choisir la langue",
    lang_tip:"Vous pouvez aussi lire ce site en anglais, en arabe ou en portugais.", lang_tip_close_aria:"Fermer",
    hero_eyebrow:"Une communauté de femmes africaines dans la cartographie et le SIG",
    hero_h1:"Organisation géospatiale pour les femmes africaines.",
    hero_tagline:"Voir le monde géospatial à travers le regard des femmes africaines.",
    cta_register:"S'inscrire et nous rejoindre", cta_story:"Lire notre histoire", cta_follow:"Nous suivre",
    stat_members:"membres", stat_countries:"pays", stat_volunteers:"bénévoles", stat_founded:"fondée en",
    story_prev_aria:"Pays précédent", story_next_aria:"Pays suivant",
    label_capital:"Capitale", label_population:"Population", label_worldbank:"Banque mondiale",
    gis101_eyebrow:"Nouveau dans le SIG ?", gis101_h2:"Qu'est-ce que le SIG, et pourquoi est-ce important ?",
    gis101_p:"Le SIG, ou système d'information géographique, est une technologie qui transforme les données de localisation et de cartes en décisions concrètes : le logiciel derrière la planification d'un hôpital, le suivi d'une inondation, ou l'optimisation d'une livraison en quelques minutes au lieu de plusieurs heures. AWiGIS existe pour que les femmes africaines bâtissent et dirigent ce travail.",
    tech1_h3:"Imagerie satellite & télédétection", tech1_p:"Des images de la Terre prises depuis l'espace, utilisées pour suivre des changements comme la déforestation ou les inondations.",
    tech2_h3:"Drones & cartographie aérienne", tech2_p:"Des caméras volantes qui cartographient de petites zones, comme une ferme ou un chantier, avec un luxe de détails.",
    tech3_h3:"Jumeaux numériques & cartographie 3D", tech3_p:"Des copies numériques réalistes de lieux réels, utilisées pour planifier des villes avant même leur construction.",
    tech4_h3:"IA & apprentissage automatique", tech4_p:"Des logiciels qui repèrent des tendances dans les données cartographiques plus vite, et à plus grande échelle, qu'aucun humain.",
    tech5_h3:"Intelligence de localisation", tech5_p:"Transformer les données de « localisation » en décisions commerciales et politiques, du choix d'un site de magasin à la réponse aux catastrophes.",
    tech6_h3:"Cartographie web & mobile", tech6_p:"Les cartes interactives que vous utilisez déjà chaque jour, dans les applications de VTC et de livraison.",
    about_eyebrow:"Qui nous sommes", about_h2:"Un espace sûr et accueillant, à chaque étape de votre parcours.",
    about_p1:"Nous sommes des femmes africaines du monde entier qui travaillent dans le SIG et la cartographie, qui les étudient, ou qui sont simplement curieuses. Quel que soit votre niveau, de débutante totale à experte de 20 ans d'expérience, il y a une place pour vous ici.",
    about_p2:"Faire partie d'AWiGIS, c'est se faire des amies qui comprennent, trouver des mentores, obtenir des conseils de carrière honnêtes, travailler sur de vrais projets cartographiques pour votre portfolio, être informée en priorité des offres d'emploi, et découvrir les formations qui en valent la peine.",
    about_p3:"L'adhésion elle-même est réservée aux femmes, mais la plupart de nos événements sont ouverts à tous, car plus il y a de personnes qui comprennent ce domaine, mieux c'est.",
    about_stat1:"membres dans la communauté", about_stat2:"pays africains représentés", about_stat3:"bénévoles qui font tourner l'association",
    about_note:"En mai 2022, la plupart des membres se trouvaient au Nigeria, au Kenya, au Ghana, en Égypte et en Afrique du Sud.",
    mission_h3:"Notre mission", mission_p:"Un espace sûr pour les femmes africaines dans le domaine géospatial, quel que soit le stade de leur carrière.",
    vision_h3:"Notre vision", vision_p:"Réduire l'écart entre les sexes dans l'industrie géospatiale africaine, un membre à la fois.",
    history_eyebrow:"Notre histoire", history_h2:"Deux petits groupes devenus une grande famille.", history_hint:"Touchez un moment pour en savoir plus.",
    tl1_date:"2017", tl1_title:"Women in GIS : les débuts au Nigeria", tl1_body:"Chidimma C. Umeogu lance une petite plateforme pour les femmes du SIG au Nigeria.",
    tl2_date:"2019", tl2_title:"Women in GIS : les débuts au Ghana", tl2_body:"Cyhana L. Williams lance une plateforme sœur pour les femmes du SIG au Ghana.",
    tl3_date:"Juin 2019", tl3_title:"Chidimma et Cyhana se rencontrent sur LinkedIn", tl3_body:"Les deux fondatrices se connectent en ligne et réalisent qu'elles résolvent le même problème pour deux pays différents.",
    tl4_date:"Oct. 2019", tl4_title:"African Women in GIS voit le jour", tl4_body:"Les deux groupes unissent leurs forces en une seule communauté continentale, avec 41 membres du Nigeria, 11 du Ghana et 1 du Burkina Faso pour commencer.",
    why_eyebrow:"Pourquoi nous existons", why_h2:"De vrais problèmes, et ce que nous faisons pour chacun d'eux.", why_hint:"Touchez une carte pour la retourner et voir comment AWiGIS aide.",
    flip_tap:"Touchez pour voir comment nous aidons ↻",
    why1_front_html:"<b>Le secteur géospatial a longtemps été dominé par les hommes</b>, avec peu de femmes à des postes de direction à qui s'identifier.",
    why1_back_html:"Nous mettons les membres en lien avec des <b>mentores et des modèles</b> : des femmes plus avancées sur ce chemin, prêtes à vous guider.",
    why2_front_html:"<b>Peu de jeunes femmes entendent parler des carrières en SIG en grandissant</b>, et certains parents découragent complètement cette idée.",
    why2_back_html:"Nous organisons des <b>webinaires publics gratuits</b> et partageons de vraies histoires de membres, pour que plus de filles et de familles voient ce qui est possible.",
    why3_front_html:"<b>Les emplois, les formations et les événements peuvent être difficiles à trouver</b>, et souvent trop coûteux pour y accéder.",
    why3_back_html:"Nous partageons des <b>offres d'emploi, des ressources gratuites et des opportunités abordables</b> directement avec nos membres.",
    why4_front_html:"<b>La plupart des femmes du SIG ignorent même qu'une communauté comme celle-ci existe</b>.",
    why4_back_html:"Nous faisons du bruit volontairement, via des <b>événements publics, les réseaux sociaux et le bouche-à-oreille</b>, pour que personne n'ait à affronter cela seule.",
    programs_eyebrow:"Ce que nous offrons", programs_h2:"Des programmes conçus autour de ce que demandent réellement nos membres.",
    mentorship_h3:"Programme de mentorat", mentorship_p:"Chaque session (que nous appelons une « cohorte ») associe les nouvelles membres à des mentores qui sont déjà passées par là.",
    round1_label:"Session 1", round1_stats:"9 mentorées · 7 mentores",
    round2_label:"Session 2", round2_stats:"20 mentorées · 14 mentores",
    round3_label:"Session 3", round3_stats:"22 mentorées · 13 mentores",
    mentorship_note:"Et ça continue de croître. Les barres montrent le nombre de mentorées par rapport à la plus grande session à ce jour.",
    prog1_h3:"Webinaires & événements publics", prog1_p:"Ouverts à tous, pas seulement aux membres. Notre tout premier a été le webinaire de la JIF 2020.",
    prog2_h3:"Groupes privés de membres", prog2_p:"Un espace WhatsApp pour les femmes africaines, en Afrique ou dans la diaspora, pour réseauter et échanger des opportunités.",
    prog3_h3:"Soutien de carrière & de portfolio", prog3_p:"De vraies opportunités de projets, des offres d'emploi et des recommandations de formations, partagées directement dans le groupe.",
    colours_eyebrow:"Nos couleurs", colours_h2:"Ce que signifient nos couleurs. Touchez pour retourner.",
    swatch1_name:"Vert feuillage", swatch1_meaning:"Notre amour de la nature et de la géographie",
    swatch2_name:"Noir profond", swatch2_meaning:"L'unité et le soutien entre les membres",
    swatch3_name:"Gris clair", swatch3_meaning:"L'égalité des sexes",
    swatch4_name:"Blanc pur", swatch4_meaning:"La sécurité et un espace sûr",
    faq_eyebrow:"Questions rapides", faq_h2:"Nouvelle ici ? Commencez par là.",
    faq1_q:"C'est quoi, le SIG, au juste ?", faq1_a:"L'abréviation de système d'information géographique : un logiciel qui transforme les cartes et les localisations en outils de décision concrets, comme où installer une clinique ou comment suivre une inondation.",
    faq2_q:"Dois-je déjà avoir un emploi en SIG pour rejoindre la communauté ?", faq2_a:"Pas du tout. Les étudiantes, les débutantes complètes et les femmes « simplement curieuses » sont tout aussi bienvenues que les professionnelles en activité.",
    faq3_q:"Est-ce gratuit de nous rejoindre ?", faq3_a:"Oui, l'adhésion est gratuite. Il vous suffit d'être une femme africaine, en Afrique ou dans la diaspora.",
    faq4_q:"Je vis hors d'Afrique. Puis-je quand même rejoindre la communauté ?", faq4_a:"Oui, nous accueillons aussi les femmes africaines de la diaspora, pas seulement celles qui vivent actuellement sur le continent.",
    faq5_q:"Qu'est-ce que j'obtiens concrètement en tant que membre ?", faq5_a:"Une communauté WhatsApp privée, des opportunités de mentorat, des offres d'emploi et de formations, des invitations à des événements, et beaucoup de monde pour vous encourager.",
    join_eyebrow:"Rejoindre la communauté", join_h2:"Prête à rencontrer plus de 1000 femmes qui vous comprennent ?",
    join_p1:"Notre communauté est devenue une véritable source de motivation pour les femmes africaines qui construisent une carrière dans le SIG. Nous voulons continuer à grandir : toucher plus de femmes, faire découvrir les carrières cartographiques aux jeunes générations, et aider l'Afrique à tirer pleinement parti de ce domaine.",
    join_p2:"Si cela vous parle, ou si vous êtes simplement curieuse, venez nous dire bonjour.",
    link_register:"S'inscrire et nous rejoindre", link_storymap:"Notre histoire (StoryMap)", link_linkedin:"LinkedIn", link_x:"X / Twitter", link_youtube:"YouTube",
    footer_copyright:"© African Women in GIS (AWiGIS)", toTop_aria:"Retour en haut"
  },
  ar: {
    nav_gis101:"مدخل إلى GIS", nav_about:"من نحن", nav_story:"قصتنا", nav_why:"لماذا نحن موجودات", nav_programs:"برامجنا", nav_faq:"الأسئلة الشائعة", nav_join:"انضمي إلينا",
    theme_aria:"التبديل بين الوضع الفاتح والداكن", lang_aria:"اختيار اللغة",
    lang_tip:"يمكنك أيضًا قراءة هذا الموقع بالإنجليزية أو الفرنسية أو البرتغالية.", lang_tip_close_aria:"إغلاق",
    hero_eyebrow:"مجتمع للنساء الأفريقيات في مجال الخرائط ونظم المعلومات الجغرافية",
    hero_h1:"منظمة جغرافية مكانية للنساء الأفريقيات.",
    hero_tagline:"شاهدي العالم الجغرافي المكاني من خلال عيون النساء الأفريقيات.",
    cta_register:"سجّلي وانضمي إلينا", cta_story:"اقرئي قصتنا", cta_follow:"تابعينا",
    stat_members:"عضوة", stat_countries:"دولة", stat_volunteers:"متطوعة", stat_founded:"التأسيس",
    story_prev_aria:"الدولة السابقة", story_next_aria:"الدولة التالية",
    label_capital:"العاصمة", label_population:"عدد السكان", label_worldbank:"البنك الدولي",
    gis101_eyebrow:"جديدة على نظم المعلومات الجغرافية؟", gis101_h2:"ما هي نظم المعلومات الجغرافية (GIS)، ولماذا هي مهمة؟",
    gis101_p:"نظم المعلومات الجغرافية (GIS) هي تقنية تحوّل بيانات المواقع والخرائط إلى قرارات حقيقية: فهي البرمجيات الكامنة وراء تخطيط مستشفى، أو رصد فيضان، أو توجيه عملية توصيل في دقائق بدلاً من ساعات. وجدت AWiGIS لضمان أن تكون النساء الأفريقيات صانعات وقائدات لهذا العمل.",
    tech1_h3:"التصوير بالأقمار الصناعية والاستشعار عن بعد", tech1_p:"صور للأرض مُلتقطة من الفضاء، تُستخدم لرصد التغيرات مثل إزالة الغابات أو الفيضانات.",
    tech2_h3:"الطائرات المسيّرة ورسم الخرائط الجوية", tech2_p:"كاميرات طائرة ترسم خرائط مناطق صغيرة، كمزرعة أو موقع بناء، بتفاصيل مذهلة.",
    tech3_h3:"التوائم الرقمية ورسم الخرائط ثلاثية الأبعاد", tech3_p:"نسخ رقمية واقعية لأماكن حقيقية، تُستخدم لتخطيط المدن قبل أن يُبنى فيها أي شيء.",
    tech4_h3:"الذكاء الاصطناعي والتعلّم الآلي", tech4_p:"برمجيات ترصد الأنماط في بيانات الخرائط بسرعة أكبر، وعلى نطاق أوسع، مما يستطيعه أي إنسان.",
    tech5_h3:"ذكاء الموقع", tech5_p:"تحويل بيانات «أين» إلى قرارات تجارية وسياسية، من اختيار مواقع المتاجر إلى الاستجابة للكوارث.",
    tech6_h3:"خرائط الويب والجوال", tech6_p:"الخرائط التفاعلية التي تستخدمينها يوميًا بال‌فعل، في تطبيقات النقل والتوصيل.",
    about_eyebrow:"من نحن", about_h2:"مساحة آمنة وترحيبية، أيًا كانت مرحلتك.",
    about_p1:"نحن نساء أفريقيات من جميع أنحاء العالم، نعمل في مجال نظم المعلومات الجغرافية والخرائط، أو ندرسه، أو مجرد فضوليات بشأنه. مهما كان مستواك، من مبتدئة تمامًا إلى خبيرة بعشرين عامًا من الخبرة، هناك مكان لك هنا.",
    about_p2:"الانضمام إلى AWiGIS يعني تكوين صداقات مع من يفهمنك، وإيجاد موجّهات، والحصول على نصائح مهنية صادقة، والعمل على مشاريع خرائط حقيقية لملفك المهني، ومعرفة فرص العمل أولاً بأول، والتعرّف على الدورات التدريبية التي تستحق الاهتمام.",
    about_p3:"العضوية نفسها مقتصرة على النساء، لكن معظم فعالياتنا مفتوحة للجميع، لأن زيادة عدد من يفهمون هذا المجال تعني نتيجة أفضل.",
    about_stat1:"عضوة في المجتمع", about_stat2:"دولة أفريقية مُمثّلة", about_stat3:"متطوعة يدرن العمل",
    about_note:"حتى مايو 2022، كان معظم الأعضاء في نيجيريا وكينيا وغانا ومصر وجنوب أفريقيا.",
    mission_h3:"رسالتنا", mission_p:"مساحة آمنة للنساء الأفريقيات العاملات في المجال الجغرافي المكاني، أيًا كانت المرحلة التي بلغنها في مسيرتهن المهنية.",
    vision_h3:"رؤيتنا", vision_p:"سدّ الفجوة بين الجنسين في الصناعة الجغرافية المكانية الأفريقية، عضوة تلو الأخرى.",
    history_eyebrow:"قصتنا", history_h2:"مجموعتان صغيرتان نمتا لتصبحا عائلة واحدة كبيرة.", history_hint:"اضغطي على أي لحظة لقراءة المزيد.",
    tl1_date:"2017", tl1_title:"Women in GIS: البداية في نيجيريا", tl1_body:"تطلق تشيديما سي. أوميوغو منصة صغيرة للنساء في مجال نظم المعلومات الجغرافية في نيجيريا.",
    tl2_date:"2019", tl2_title:"Women in GIS: البداية في غانا", tl2_body:"تطلق سيهانا إل. ويليامز منصة شقيقة للنساء في مجال نظم المعلومات الجغرافية في غانا.",
    tl3_date:"يونيو 2019", tl3_title:"تشيديما وسيهانا تلتقيان على لينكدإن", tl3_body:"تتواصل المؤسستان عبر الإنترنت وتدركان أنهما تحلان المشكلة نفسها لدولتين مختلفتين.",
    tl4_date:"أكتوبر 2019", tl4_title:"ولادة African Women in GIS", tl4_body:"تتحد المجموعتان في مجتمع واحد يشمل القارة بأكملها، بدءًا بـ 41 عضوة من نيجيريا و 11 من غانا وعضوة واحدة من بوركينا فاسو.",
    why_eyebrow:"لماذا نحن موجودات", why_h2:"مشكلات حقيقية، وما نفعله حيال كل واحدة منها.", why_hint:"اضغطي على بطاقة لتقليبها ومعرفة كيف تساعد AWiGIS.",
    flip_tap:"اضغطي لمعرفة كيف نساعد ↻",
    why1_front_html:"<b>ظل المجال الجغرافي المكاني يهيمن عليه الرجال لفترة طويلة</b>، مع قلة قليلة من النساء في المناصب العليا كقدوات.",
    why1_back_html:"نربط الأعضاء بـ<b>موجّهات وقدوات</b>: نساء تقدّمن أكثر في هذا المسار وعلى استعداد لإرشادك.",
    why2_front_html:"<b>قلّة من الشابات يسمعن عن مسارات العمل في GIS أثناء نشأتهن</b>، وبعض الآباء يثبّطون الفكرة تمامًا.",
    why2_back_html:"ننظّم <b>ندوات عامة مجانية عبر الإنترنت</b> ونشارك قصصًا حقيقية لأعضائنا، كي يرى المزيد من الفتيات والعائلات ما هو ممكن.",
    why3_front_html:"<b>قد يصعب إيجاد الوظائف والدورات والفعاليات</b>، وغالبًا ما تكون باهظة التكلفة.",
    why3_back_html:"نشارك <b>فرص العمل والموارد المجانية والفرص الميسورة التكلفة</b> مباشرة مع أعضائنا.",
    why4_front_html:"<b>لا تعرف معظم النساء في مجال GIS حتى بوجود مجتمع كهذا</b> من الأساس.",
    why4_back_html:"نُحدث الضجة عن قصد، عبر <b>الفعاليات العامة ووسائل التواصل الاجتماعي والكلمة المتناقلة</b>، حتى لا تضطر أي امرأة لمواجهة الأمر وحدها.",
    programs_eyebrow:"ما نقدّمه", programs_h2:"برامج مبنية على ما يطلبه أعضاؤنا فعليًا.",
    mentorship_h3:"برنامج الإرشاد (المنتورشيب)", mentorship_p:"كل جولة (نسمّيها «دفعة») تربط الأعضاء الجدد بموجّهات مررن بالضبط بما تمرّين به.",
    round1_label:"الدفعة 1", round1_stats:"9 متدرّبات · 7 موجّهات",
    round2_label:"الدفعة 2", round2_stats:"20 متدرّبة · 14 موجّهة",
    round3_label:"الدفعة 3", round3_stats:"22 متدرّبة · 13 موجّهة",
    mentorship_note:"ولا تزال تنمو. تُظهر الأشرطة عدد المتدرّبات مقارنةً بأكبر دفعة حتى الآن.",
    prog1_h3:"ندوات وفعاليات عامة", prog1_p:"مفتوحة للجميع، وليس للأعضاء فقط. كانت أولى فعالياتنا ندوة اليوم العالمي للمرأة 2020.",
    prog2_h3:"مجموعات خاصة للأعضاء", prog2_p:"مساحة واتساب للنساء الأفريقيات في أفريقيا أو في المهجر، للتواصل وتبادل الفرص.",
    prog3_h3:"دعم المسار المهني والملف المهني", prog3_p:"فرص مشاريع حقيقية، وعروض عمل، وتوصيات بدورات تدريبية، تُشارك مباشرة داخل المجموعة.",
    colours_eyebrow:"ألواننا", colours_h2:"ماذا تعني ألواننا. اضغطي للتقليب.",
    swatch1_name:"الأخضر الورقي", swatch1_meaning:"حبنا للطبيعة والجغرافيا",
    swatch2_name:"الأسود الداكن", swatch2_meaning:"الوحدة والدعم بين الأعضاء",
    swatch3_name:"الرمادي الفاتح", swatch3_meaning:"المساواة بين الجنسين",
    swatch4_name:"الأبيض الناصع", swatch4_meaning:"الأمان ومساحة آمنة",
    faq_eyebrow:"أسئلة سريعة", faq_h2:"جديدة على هذا؟ ابدئي هنا.",
    faq1_q:"ما هي نظم المعلومات الجغرافية (GIS) أصلاً؟", faq1_a:"اختصار لـ«نظم المعلومات الجغرافية»: برمجيات تحوّل الخرائط والمواقع إلى أدوات لاتخاذ قرارات حقيقية، مثل أين تُنشأ عيادة، أو كيف يُرصد فيضان.",
    faq2_q:"هل أحتاج إلى وظيفة في GIS بالفعل للانضمام؟", faq2_a:"أبدًا. الطالبات والمبتدئات تمامًا والنساء «الفضوليات فقط» مرحّب بهن تمامًا مثل المحترفات العاملات.",
    faq3_q:"هل الانضمام مجاني؟", faq3_a:"نعم، العضوية مجانية. كل ما تحتاجينه أن تكوني امرأة أفريقية، في أفريقيا أو في المهجر.",
    faq4_q:"أعيش خارج أفريقيا. هل يمكنني الانضمام رغم ذلك؟", faq4_a:"نعم، نرحّب أيضًا بالنساء الأفريقيات في المهجر، وليس فقط اللاتي يعشن حاليًا في القارة.",
    faq5_q:"ماذا أحصل عليه فعليًا بصفتي عضوة؟", faq5_a:"مجتمع واتساب خاص، وفرص إرشاد، وعروض عمل ودورات تدريبية، ودعوات لفعاليات، بالإضافة إلى الكثير ممّن يشجّعنك.",
    join_eyebrow:"انضمي إلى المجتمع", join_h2:"مستعدة للقاء أكثر من 1000 امرأة تفهمك؟",
    join_p1:"أصبح مجتمعنا مصدر إلهام حقيقي للنساء الأفريقيات اللاتي يبنين مسارات مهنية في GIS. نريد الاستمرار في النمو: الوصول إلى مزيد من النساء، وتعريف الأجيال الشابة بمسارات الخرائط، ومساعدة أفريقيا على الاستفادة الكاملة من هذا المجال.",
    join_p2:"إن كان هذا يشبهك، أو كنت فضولية فقط، تعالي وقولي مرحبًا.",
    link_register:"سجّلي وانضمي إلينا", link_storymap:"قصتنا (StoryMap)", link_linkedin:"لينكدإن", link_x:"إكس / تويتر", link_youtube:"يوتيوب",
    footer_copyright:"© African Women in GIS (AWiGIS)", toTop_aria:"العودة إلى الأعلى"
  },
  pt: {
    nav_gis101:"SIG 101", nav_about:"Sobre nós", nav_story:"Nossa história", nav_why:"Por que existimos", nav_programs:"Programas", nav_faq:"Perguntas frequentes", nav_join:"Junte-se a nós",
    theme_aria:"Alternar entre o modo claro e escuro", lang_aria:"Escolher idioma",
    lang_tip:"Você também pode ler este site em inglês, francês ou árabe.", lang_tip_close_aria:"Fechar",
    hero_eyebrow:"Uma comunidade de mulheres africanas em mapeamento e SIG",
    hero_h1:"Organização geoespacial para mulheres africanas.",
    hero_tagline:"Veja o mundo geoespacial pelos olhos das mulheres africanas.",
    cta_register:"Inscreva-se e junte-se a nós", cta_story:"Leia nossa história", cta_follow:"Siga-nos",
    stat_members:"membros", stat_countries:"países", stat_volunteers:"voluntárias", stat_founded:"fundação",
    story_prev_aria:"País anterior", story_next_aria:"Próximo país",
    label_capital:"Capital", label_population:"População", label_worldbank:"Banco Mundial",
    gis101_eyebrow:"Novo no SIG?", gis101_h2:"O que é SIG, e por que isso importa?",
    gis101_p:"SIG, ou Sistema de Informação Geográfica, é uma tecnologia que transforma dados de localização e mapas em decisões reais: o software por trás do planejamento de um hospital, do monitoramento de uma enchente ou do roteamento de uma entrega em minutos em vez de horas. A AWiGIS existe para garantir que as mulheres africanas estejam construindo e liderando esse trabalho.",
    tech1_h3:"Imagens de satélite & sensoriamento remoto", tech1_p:"Imagens da Terra tiradas do espaço, usadas para monitorar mudanças como desmatamento ou enchentes.",
    tech2_h3:"Drones & mapeamento aéreo", tech2_p:"Câmeras voadoras que mapeiam pequenas áreas, como uma fazenda ou um canteiro de obras, com detalhes incríveis.",
    tech3_h3:"Gêmeos digitais & mapeamento 3D", tech3_p:"Cópias digitais realistas de lugares reais, usadas para planejar cidades antes mesmo de serem construídas.",
    tech4_h3:"IA & aprendizado de máquina", tech4_p:"Softwares que identificam padrões em dados de mapas mais rápido, e em maior escala, do que qualquer ser humano conseguiria.",
    tech5_h3:"Inteligência de localização", tech5_p:"Transformar dados de « onde » em decisões de negócios e políticas públicas, da escolha de pontos comerciais à resposta a desastres.",
    tech6_h3:"Mapeamento web & móvel", tech6_p:"Os mapas interativos que você já usa todos os dias, em aplicativos de transporte e entrega.",
    about_eyebrow:"Quem somos", about_h2:"Um espaço seguro e acolhedor, em qualquer fase em que você esteja.",
    about_p1:"Somos mulheres africanas de todo o mundo que trabalham, estudam ou são simplesmente curiosas sobre SIG e mapeamento. Não importa seu nível, de iniciante total a especialista com 20 anos de experiência, há um lugar para você aqui.",
    about_p2:"Fazer parte da AWiGIS significa fazer amizades que entendem você, encontrar mentoras, receber conselhos de carreira honestos, trabalhar em projetos reais de mapeamento para seu portfólio, saber primeiro sobre vagas de emprego e conhecer cursos que valem a pena.",
    about_p3:"A adesão em si é apenas para mulheres, mas a maioria dos nossos eventos é aberta a todos, porque quanto mais pessoas entenderem esse campo, melhor.",
    about_stat1:"membros na comunidade", about_stat2:"países africanos representados", about_stat3:"voluntárias que mantêm tudo funcionando",
    about_note:"Em maio de 2022, a maioria dos membros estava na Nigéria, Quênia, Gana, Egito e África do Sul.",
    mission_h3:"Nossa missão", mission_p:"Um espaço seguro para mulheres africanas no trabalho geoespacial, não importa em que ponto da carreira você esteja.",
    vision_h3:"Nossa visão", vision_p:"Fechar a lacuna de gênero na indústria geoespacial africana, uma integrante de cada vez.",
    history_eyebrow:"Nossa história", history_h2:"Dois pequenos grupos que cresceram e se tornaram uma grande família.", history_hint:"Toque em qualquer momento para saber mais.",
    tl1_date:"2017", tl1_title:"Women in GIS: começa na Nigéria", tl1_body:"Chidimma C. Umeogu cria uma pequena plataforma para mulheres do SIG na Nigéria.",
    tl2_date:"2019", tl2_title:"Women in GIS: começa em Gana", tl2_body:"Cyhana L. Williams cria uma plataforma irmã para mulheres do SIG em Gana.",
    tl3_date:"Jun 2019", tl3_title:"Chidimma e Cyhana se conhecem no LinkedIn", tl3_body:"As duas fundadoras se conectam online e percebem que estão resolvendo o mesmo problema em dois países diferentes.",
    tl4_date:"Out 2019", tl4_title:"Nasce a African Women in GIS", tl4_body:"Os dois grupos unem forças em uma única comunidade continental, começando com 41 membros da Nigéria, 11 de Gana e 1 de Burquina Faso.",
    why_eyebrow:"Por que existimos", why_h2:"Problemas reais, e o que fazemos em relação a cada um deles.", why_hint:"Toque em um cartão para virá-lo e ver como a AWiGIS ajuda.",
    flip_tap:"Toque para ver como ajudamos ↻",
    why1_front_html:"<b>O trabalho geoespacial sempre foi dominado por homens</b>, com poucas mulheres em cargos sêniores como referência.",
    why1_back_html:"Conectamos as membros a <b>mentoras e modelos de referência</b>: mulheres mais avançadas nesse caminho, prontas para orientar você.",
    why2_front_html:"<b>Poucas jovens ouvem falar sobre carreiras em SIG enquanto crescem</b>, e alguns pais desencorajam a ideia completamente.",
    why2_back_html:"Realizamos <b>webinars públicos gratuitos</b> e compartilhamos histórias reais de membros, para que mais garotas e famílias vejam o que é possível.",
    why3_front_html:"<b>Empregos, cursos e eventos podem ser difíceis de encontrar</b>, e muitas vezes caros demais para alcançar.",
    why3_back_html:"Compartilhamos <b>indicações de emprego, recursos gratuitos e oportunidades acessíveis</b> diretamente com nossas membros.",
    why4_front_html:"<b>A maioria das mulheres no SIG nem sabe que uma comunidade como essa existe</b>.",
    why4_back_html:"Fazemos barulho de propósito, por meio de <b>eventos públicos, redes sociais e boca a boca</b>, para que ninguém precise enfrentar isso sozinha.",
    programs_eyebrow:"O que oferecemos", programs_h2:"Programas construídos em torno do que as membros realmente pedem.",
    mentorship_h3:"Programa de mentoria", mentorship_p:"Cada rodada (chamamos de « turma ») une novas membros a mentoras que já passaram exatamente pelo que você está passando.",
    round1_label:"Turma 1", round1_stats:"9 mentoradas · 7 mentoras",
    round2_label:"Turma 2", round2_stats:"20 mentoradas · 14 mentoras",
    round3_label:"Turma 3", round3_stats:"22 mentoradas · 13 mentoras",
    mentorship_note:"E continua crescendo. As barras mostram o número de mentoradas em relação à maior turma até agora.",
    prog1_h3:"Webinars & eventos públicos", prog1_p:"Abertos a todos, não apenas a membros. Nosso primeiro foi o webinar do Dia Internacional da Mulher de 2020.",
    prog2_h3:"Grupos privados de membros", prog2_p:"Um espaço no WhatsApp para mulheres africanas, na África ou na diáspora, para fazer networking e trocar oportunidades.",
    prog3_h3:"Apoio de carreira & portfólio", prog3_p:"Oportunidades reais de projetos, indicações de emprego e recomendações de cursos, compartilhadas diretamente no grupo.",
    colours_eyebrow:"Nossas cores", colours_h2:"O que nossas cores significam. Toque para virar.",
    swatch1_name:"Verde-folha", swatch1_meaning:"Nosso amor pela natureza e pela geografia",
    swatch2_name:"Preto intenso", swatch2_meaning:"Unidade e apoio entre as membros",
    swatch3_name:"Cinza-claro", swatch3_meaning:"Equidade de gênero",
    swatch4_name:"Branco puro", swatch4_meaning:"Segurança e um espaço seguro",
    faq_eyebrow:"Perguntas rápidas", faq_h2:"Nova por aqui? Comece aqui.",
    faq1_q:"Afinal, o que é SIG?", faq1_a:"Abreviação de Sistema de Informação Geográfica: software que transforma mapas e localizações em ferramentas para decisões reais, como onde instalar uma clínica ou como monitorar uma enchente.",
    faq2_q:"Preciso já ter um emprego em SIG para participar?", faq2_a:"De jeito nenhum. Estudantes, iniciantes totais e mulheres « apenas curiosas » são tão bem-vindas quanto profissionais atuantes.",
    faq3_q:"É gratuito participar?", faq3_a:"Sim, a adesão é gratuita. Você só precisa ser uma mulher africana, na África ou na diáspora.",
    faq4_q:"Moro fora da África. Ainda assim posso participar?", faq4_a:"Sim, também damos as boas-vindas a mulheres africanas na diáspora, não apenas às que vivem atualmente no continente.",
    faq5_q:"O que eu realmente recebo como membro?", faq5_a:"Uma comunidade privada no WhatsApp, oportunidades de mentoria, indicações de emprego e cursos, convites para eventos, além de muita gente na sua torcida.",
    join_eyebrow:"Junte-se à comunidade", join_h2:"Pronta para conhecer mais de 1000 mulheres que entendem você?",
    join_p1:"Nossa comunidade se tornou uma verdadeira fonte de motivação para mulheres africanas construindo carreiras em SIG. Queremos continuar crescendo: alcançar mais mulheres, apresentar carreiras de mapeamento às gerações mais jovens e ajudar a África a aproveitar todo o potencial desse campo.",
    join_p2:"Se isso combina com você, ou se você está apenas curiosa, venha dizer olá.",
    link_register:"Inscreva-se e junte-se a nós", link_storymap:"Nossa história (StoryMap)", link_linkedin:"LinkedIn", link_x:"X / Twitter", link_youtube:"YouTube",
    footer_copyright:"© African Women in GIS (AWiGIS)", toTop_aria:"Voltar ao topo"
  }
};

var REGION_I18N = {
  en: {"North Africa":"North Africa","West Africa":"West Africa","East Africa":"East Africa","Central Africa":"Central Africa","Southern Africa":"Southern Africa"},
  fr: {"North Africa":"Afrique du Nord","West Africa":"Afrique de l'Ouest","East Africa":"Afrique de l'Est","Central Africa":"Afrique centrale","Southern Africa":"Afrique australe"},
  ar: {"North Africa":"شمال أفريقيا","West Africa":"غرب أفريقيا","East Africa":"شرق أفريقيا","Central Africa":"وسط أفريقيا","Southern Africa":"الجنوب الأفريقي"},
  pt: {"North Africa":"África do Norte","West Africa":"África Ocidental","East Africa":"África Oriental","Central Africa":"África Central","Southern Africa":"África Austral"}
};

/* Country name / capital / fact translations, keyed by the English name used
   in the `countries` array below. English itself is the base array, so only
   fr/ar/pt are needed here. */
var COUNTRY_TR = {
  fr: {
    'Algeria':{name:'Algérie', capital:'Alger', text:'A lancé Alsat-1 en 2002, le premier satellite de l’Algérie, peu après la création de l’Agence spatiale algérienne.'},
    'Angola':{name:'Angola', capital:'Luanda', text:'Exploite AngoSat-2, un satellite de communication lancé en 2022 après l’échec de son prédécesseur.'},
    'Benin':{name:'Bénin', capital:'Porto-Novo', text:'Cogère le parc national de la Pendjari, qui fait partie d’un complexe transfrontalier classé au patrimoine mondial de l’UNESCO.'},
    'Botswana':{name:'Botswana', capital:'Gaborone', text:'A mis son premier satellite, BOTSAT-1, en orbite en 2025.'},
    'Burkina Faso':{name:'Burkina Faso', capital:'Ouagadougou', text:'Se situe presque entièrement dans le Sahel, la bande semi-aride entre le Sahara et la savane tropicale.'},
    'Burundi':{name:'Burundi', capital:'Gitega', text:'Est bordé par le lac Tanganyika, le deuxième lac d’eau douce le plus profond et le deuxième plus grand en volume au monde.'},
    'Cabo Verde':{name:'Cap-Vert', capital:'Praia', text:'Un archipel volcanique de 10 îles, abritant le Pico do Fogo, l’un des volcans actifs de l’Atlantique.'},
    'Cameroon':{name:'Cameroun', capital:'Yaoundé', text:'Surnommé « l’Afrique en miniature » car il réunit presque tous les grands paysages et climats africains.'},
    'Central African Republic':{name:'République centrafricaine', capital:'Bangui', text:'Se situe sur la ligne de partage des eaux entre les bassins du Tchad et du Congo.'},
    'Chad':{name:'Tchad', capital:'N’Djamena', text:'Abrite le lac Tchad, autrefois l’un des plus grands lacs d’Afrique, aujourd’hui réduit à une fraction de sa taille d’origine.'},
    'Comoros':{name:'Comores', capital:'Moroni', text:'Un archipel volcanique où le mont Karthala, le plus grand volcan des Comores, entre en éruption tous les quelques années.'},
    'Congo':{name:'Congo', capital:'Brazzaville', text:'Brazzaville et Kinshasa se font face de part et d’autre du fleuve Congo, les deux capitales les plus proches au monde.'},
    'Côte d’Ivoire':{name:'Côte d’Ivoire', capital:'Yamoussoukro', text:'A remporté le programme KiboCUBE de l’ONU et de la JAXA en 2024 pour construire et lancer son premier CubeSat depuis l’ISS.'},
    'DR Congo':{name:'RD Congo', capital:'Kinshasa', text:'Traversée par le fleuve Congo, le fleuve le plus profond d’Afrique et le deuxième au monde par le débit.'},
    'Djibouti':{name:'Djibouti', capital:'Djibouti', text:'A lancé son premier satellite, Djibouti-1, puis mis Djibouti-1B en orbite en 2024.'},
    'Egypt':{name:'Égypte', capital:'Le Caire', text:'A lancé EgyptSat-1 en 2007 et exploite aujourd’hui l’une des plus importantes flottes de satellites d’Afrique.'},
    'Equatorial Guinea':{name:'Guinée équatoriale', capital:'Malabo', text:'Seule nation hispanophone d’Afrique, avec l’île d’Annobón située presque exactement sur l’équateur.'},
    'Eritrea':{name:'Érythrée', capital:'Asmara', text:'Borde la mer Rouge sur plus de 1 000 km et comprend les plus de 200 îles de l’archipel des Dahlak.'},
    'Eswatini':{name:'Eswatini', capital:'Mbabane', text:'L’une des dernières monarchies absolues au monde, presque entièrement entourée par l’Afrique du Sud.'},
    'Ethiopia':{name:'Éthiopie', capital:'Addis-Abeba', text:'A lancé ETRSS-1 en 2019, son premier satellite, construit avec des partenaires chinois pour l’agriculture et le suivi du climat.'},
    'Gabon':{name:'Gabon', capital:'Libreville', text:'Plus de 85 % de son territoire est couvert de forêt tropicale, l’un des taux de couverture forestière les plus élevés au monde.'},
    'Gambia':{name:'Gambie', capital:'Banjul', text:'Le plus petit pays continental d’Afrique, entièrement façonné autour du fleuve Gambie.'},
    'Ghana':{name:'Ghana', capital:'Accra', text:'GhanaSat-1, lancé en 2017, a été construit par trois étudiants ingénieurs de l’Université All Nations.'},
    'Guinea':{name:'Guinée', capital:'Conakry', text:'Source des fleuves Niger, Gambie et Sénégal, ce qui lui vaut le surnom de « château d’eau de l’Afrique de l’Ouest ».'},
    'Guinea-Bissau':{name:'Guinée-Bissau', capital:'Bissau', text:'Abrite l’archipel des Bijagos, une réserve de biosphère de l’UNESCO composée de 88 îles.'},
    'Kenya':{name:'Kenya', capital:'Nairobi', text:'A lancé Taifa-1 en 2023, son premier satellite opérationnel d’observation de la Terre.'},
    'Lesotho':{name:'Lesotho', capital:'Maseru', text:'Le seul pays au monde situé entièrement au-dessus de 1 000 mètres d’altitude, surnommé le « Royaume dans le ciel ».'},
    'Liberia':{name:'Liberia', capital:'Monrovia', text:'Abrite l’une des plus grandes étendues restantes de la forêt haute-guinéenne d’Afrique de l’Ouest.'},
    'Libya':{name:'Libye', capital:'Tripoli', text:'Le désert du Sahara couvre environ 90 % du territoire libyen.'},
    'Madagascar':{name:'Madagascar', capital:'Antananarivo', text:'La 4e plus grande île du monde, isolée depuis environ 88 millions d’années, ce qui lui confère une biodiversité incomparable.'},
    'Malawi':{name:'Malawi', capital:'Lilongwe', text:'Dominé par le lac Malawi, le troisième plus grand lac d’Afrique et l’un des plus profonds au monde.'},
    'Mali':{name:'Mali', capital:'Bamako', text:'Environ les deux tiers du Mali se trouvent dans le Sahara, qui abrite la cité commerçante historique de Tombouctou.'},
    'Mauritania':{name:'Mauritanie', capital:'Nouakchott', text:'Désertique à environ 90 %, ce qui en fait l’un des pays les moins densément peuplés au monde.'},
    'Mauritius':{name:'Maurice', capital:'Port-Louis', text:'Exploite MIR-SAT1, son premier nanosatellite, lancé en 2021 dans le cadre du programme KiboCUBE de l’ONU et de la JAXA.'},
    'Morocco':{name:'Maroc', capital:'Rabat', text:'Exploite les satellites d’observation de la Terre Mohammed VI-A et VI-B pour la cartographie et la gestion des catastrophes.'},
    'Mozambique':{name:'Mozambique', capital:'Maputo', text:'Possède l’un des littoraux les plus longs d’Afrique, s’étendant sur plus de 2 500 km le long de l’océan Indien.'},
    'Namibia':{name:'Namibie', capital:'Windhoek', text:'Abrite le Namib, considéré comme le plus vieux désert du monde, avec certaines des plus hautes dunes de la planète.'},
    'Niger':{name:'Niger', capital:'Niamey', text:'Plus de 80 % du territoire du Niger se trouve dans le désert du Sahara.'},
    'Nigeria':{name:'Nigeria', capital:'Abuja', text:'A lancé NigeriaSat-1 en 2003, l’un des premiers satellites d’observation de la Terre en Afrique.'},
    'Rwanda':{name:'Rwanda', capital:'Kigali', text:'A déployé RWASAT-1 en 2019, le premier satellite du Rwanda, construit avec l’Université de Tokyo et ArkEdge Space.'},
    'São Tomé and Príncipe':{name:'Sao Tomé-et-Principe', capital:'Sao Tomé', text:'Le deuxième plus petit pays d’Afrique, un État insulaire volcanique dont l’îlot de Rolas se trouve presque exactement sur l’équateur.'},
    'Senegal':{name:'Sénégal', capital:'Dakar', text:'A lancé GaindéSat-1A en 2024, son premier satellite, construit par une équipe d’ingénieurs sénégalais.'},
    'Seychelles':{name:'Seychelles', capital:'Victoria', text:'Un archipel de 115 îles et le pays le moins peuplé d’Afrique.'},
    'Sierra Leone':{name:'Sierra Leone', capital:'Freetown', text:'Le port naturel de Freetown est l’un des plus grands ports en eau profonde au monde.'},
    'Somalia':{name:'Somalie', capital:'Mogadiscio', text:'Possède le plus long littoral de l’Afrique continentale, s’étendant sur plus de 3 300 km.'},
    'South Africa':{name:'Afrique du Sud', capital:'Pretoria', text:'A construit SUNSAT en 1999, le premier satellite conçu et fabriqué en Afrique à atteindre l’orbite.'},
    'South Sudan':{name:'Soudan du Sud', capital:'Djouba', text:'Abrite le Sudd, l’une des plus grandes zones humides du monde, alimentée par le Nil Blanc.'},
    'Sudan':{name:'Soudan', capital:'Khartoum', text:'Khartoum se trouve exactement au point de rencontre du Nil Bleu et du Nil Blanc, qui forment ensemble le fleuve Nil.'},
    'Tanzania':{name:'Tanzanie', capital:'Dodoma', text:'Abrite le Kilimandjaro, le plus haut sommet d’Afrique avec 5 895 mètres.'},
    'Togo':{name:'Togo', capital:'Lomé', text:'S’étend sur environ 540 km du nord au sud, mais seulement 100 à 160 km dans sa plus grande largeur.'},
    'Tunisia':{name:'Tunisie', capital:'Tunis', text:'A construit Challenge-1, un nanosatellite développé de façon indépendante par une entreprise tunisienne et lancé en 2021.'},
    'Uganda':{name:'Ouganda', capital:'Kampala', text:'A lancé PearlAfricaSat-1, son premier satellite, pour soutenir l’agriculture et la cartographie des ressources.'},
    'Zambia':{name:'Zambie', capital:'Lusaka', text:'Partage les chutes Victoria avec le Zimbabwe, l’une des plus grandes chutes d’eau au monde.'},
    'Zimbabwe':{name:'Zimbabwe', capital:'Harare', text:'A mis ZimSat-1 en orbite en 2022, son premier satellite, construit avec le soutien d’une université japonaise.'}
  },
  ar: {
    'Algeria':{name:'الجزائر', capital:'الجزائر', text:'أطلقت الجزائر قمر Alsat-1 عام 2002، أول قمر صناعي لها، بعد وقت قصير من تأسيس وكالة الفضاء الجزائرية.'},
    'Angola':{name:'أنغولا', capital:'لواندا', text:'تشغّل أنغولا القمر الصناعي AngoSat-2 للاتصالات، الذي أُطلق عام 2022 بعد فشل سابقه.'},
    'Benin':{name:'بنين', capital:'بورتو نوفو', text:'تشارك في إدارة منتزه بندجاري الوطني، الذي يُعد جزءًا من مجمع حياة برية عابر للحدود مدرج في قائمة التراث العالمي لليونسكو.'},
    'Botswana':{name:'بوتسوانا', capital:'غابورون', text:'أطلقت بوتسوانا أول قمر صناعي لها، BOTSAT-1، إلى المدار عام 2025.'},
    'Burkina Faso':{name:'بوركينا فاسو', capital:'واغادوغو', text:'تقع بوركينا فاسو بالكامل تقريبًا ضمن منطقة الساحل، الحزام شبه القاحل بين الصحراء الكبرى والسافانا الاستوائية.'},
    'Burundi':{name:'بوروندي', capital:'جيتيغا', text:'تطل بوروندي على بحيرة تنجانيقا، ثاني أعمق بحيرة مياه عذبة في العالم وثاني أكبرها من حيث الحجم.'},
    'Cabo Verde':{name:'الرأس الأخضر', capital:'برايا', text:'أرخبيل بركاني يضم 10 جزر، ويحتضن بركان بيكو دو فوغو، أحد البراكين النشطة في المحيط الأطلسي.'},
    'Cameroon':{name:'الكاميرون', capital:'ياوندي', text:'يُلقّب بـ«أفريقيا المصغّرة» لاحتوائه على معظم المناظر الطبيعية والمناخ الأفريقية الكبرى.'},
    'Central African Republic':{name:'جمهورية أفريقيا الوسطى', capital:'بانغي', text:'تقع على خط تقسيم المياه بين حوضي بحيرة تشاد ونهر الكونغو.'},
    'Chad':{name:'تشاد', capital:'نجامينا', text:'موطن بحيرة تشاد، التي كانت من أكبر بحيرات أفريقيا، وتقلصت اليوم إلى جزء يسير من مساحتها السابقة.'},
    'Comoros':{name:'جزر القمر', capital:'موروني', text:'أرخبيل بركاني يضم جبل كارثالا، أكبر بركان في جزر القمر، الذي يثور كل بضع سنوات.'},
    'Congo':{name:'الكونغو', capital:'برازافيل', text:'تتقابل برازافيل وكينشاسا على ضفتي نهر الكونغو، في أقرب عاصمتين لبعضهما في العالم.'},
    'Côte d’Ivoire':{name:'ساحل العاج', capital:'ياموسوكرو', text:'فازت ساحل العاج ببرنامج KiboCUBE التابع للأمم المتحدة ووكالة جاكسا عام 2024 لبناء وإطلاق أول قمر مكعّب (CubeSat) لها من محطة الفضاء الدولية.'},
    'DR Congo':{name:'جمهورية الكونغو الديمقراطية', capital:'كينشاسا', text:'يعبرها نهر الكونغو، أعمق نهر في أفريقيا وثاني أكبر أنهار العالم من حيث التصريف المائي.'},
    'Djibouti':{name:'جيبوتي', capital:'جيبوتي', text:'أطلقت جيبوتي أول قمر صناعي لها، Djibouti-1، ثم أضافت القمر Djibouti-1B إلى المدار عام 2024.'},
    'Egypt':{name:'مصر', capital:'القاهرة', text:'أطلقت مصر القمر الصناعي EgyptSat-1 عام 2007، وتشغّل اليوم أحد أكبر أساطيل الأقمار الصناعية في أفريقيا.'},
    'Equatorial Guinea':{name:'غينيا الاستوائية', capital:'مالابو', text:'الدولة الناطقة بالإسبانية الوحيدة في أفريقيا، وتقع جزيرة أنوبون التابعة لها على خط الاستواء تقريبًا.'},
    'Eritrea':{name:'إريتريا', capital:'أسمرة', text:'تمتد سواحل إريتريا على البحر الأحمر لأكثر من 1000 كم، وتضم أرخبيل دهلك الذي يزيد عن 200 جزيرة.'},
    'Eswatini':{name:'إسواتيني', capital:'مبابان', text:'واحدة من آخر الممالك المطلقة في العالم، وتحيط بها جنوب أفريقيا من كل جانب تقريبًا.'},
    'Ethiopia':{name:'إثيوبيا', capital:'أديس أبابا', text:'أطلقت إثيوبيا القمر الصناعي ETRSS-1 عام 2019، أول قمر صناعي لها، بالشراكة مع جهات صينية لدعم الزراعة ورصد المناخ.'},
    'Gabon':{name:'الغابون', capital:'ليبرفيل', text:'تغطي الغابات المطيرة أكثر من 85% من أراضي الغابون، وهي من أعلى نسب الغطاء الحرجي في العالم.'},
    'Gambia':{name:'غامبيا', capital:'بانجول', text:'أصغر دولة في البر الأفريقي، تتشكّل حدودها بالكامل حول نهر غامبيا.'},
    'Ghana':{name:'غانا', capital:'أكرا', text:'أُطلق القمر الصناعي GhanaSat-1 عام 2017، وقد بناه ثلاثة طلاب مهندسين من جامعة All Nations.'},
    'Guinea':{name:'غينيا', capital:'كوناكري', text:'منبع أنهار النيجر وغامبيا والسنغال، ما أكسبها لقب «برج مياه غرب أفريقيا».'},
    'Guinea-Bissau':{name:'غينيا بيساو', capital:'بيساو', text:'موطن أرخبيل بيجاغوس، محمية المحيط الحيوي التابعة لليونسكو والمكوّنة من 88 جزيرة.'},
    'Kenya':{name:'كينيا', capital:'نيروبي', text:'أطلقت كينيا القمر الصناعي Taifa-1 عام 2023، أول قمر تشغيلي لها لرصد الأرض.'},
    'Lesotho':{name:'ليسوتو', capital:'ماسيرو', text:'الدولة الوحيدة في العالم التي تقع بالكامل على ارتفاع يتجاوز 1000 متر، ولُقّبت بـ«المملكة في السماء».'},
    'Liberia':{name:'ليبيريا', capital:'مونروفيا', text:'تحتضن واحدة من أكبر المساحات المتبقية من غابات غينيا العليا المطيرة في غرب أفريقيا.'},
    'Libya':{name:'ليبيا', capital:'طرابلس', text:'تغطي الصحراء الكبرى نحو 90% من مساحة ليبيا.'},
    'Madagascar':{name:'مدغشقر', capital:'أنتاناناريفو', text:'رابع أكبر جزيرة في العالم، ظلت معزولة نحو 88 مليون سنة، ما منحها تنوّعًا بيولوجيًا فريدًا لا مثيل له.'},
    'Malawi':{name:'مالاوي', capital:'ليلونغوي', text:'تهيمن عليها بحيرة مالاوي، ثالث أكبر بحيرة في أفريقيا واحدة من أعمق بحيرات العالم.'},
    'Mali':{name:'مالي', capital:'باماكو', text:'يقع نحو ثلثي مالي ضمن الصحراء الكبرى، التي تحتضن مدينة تمبكتو التجارية التاريخية.'},
    'Mauritania':{name:'موريتانيا', capital:'نواكشوط', text:'نحو 90% من أراضيها صحراء، ما يجعلها من أقل دول العالم كثافة سكانية.'},
    'Mauritius':{name:'موريشيوس', capital:'بورت لويس', text:'تشغّل موريشيوس القمر النانوي MIR-SAT1، أول قمر صناعي لها، الذي أُطلق عام 2021 ضمن برنامج KiboCUBE التابع للأمم المتحدة ووكالة جاكسا.'},
    'Morocco':{name:'المغرب', capital:'الرباط', text:'يشغّل المغرب القمرين الصناعيين محمد السادس-A ومحمد السادس-B لرصد الأرض، لأغراض رسم الخرائط وإدارة الكوارث.'},
    'Mozambique':{name:'موزمبيق', capital:'مابوتو', text:'تمتلك موزمبيق أحد أطول السواحل في أفريقيا، إذ يمتد لأكثر من 2500 كم على طول المحيط الهندي.'},
    'Namibia':{name:'ناميبيا', capital:'ويندهوك', text:'موطن صحراء ناميب التي يُعتقد أنها أقدم صحراء العالم، وتضم بعضًا من أعلى الكثبان الرملية على وجه الأرض.'},
    'Niger':{name:'النيجر', capital:'نيامي', text:'تقع أكثر من 80% من أراضي النيجر ضمن الصحراء الكبرى.'},
    'Nigeria':{name:'نيجيريا', capital:'أبوجا', text:'أطلقت نيجيريا القمر الصناعي NigeriaSat-1 عام 2003، أحد أوائل أقمار رصد الأرض في أفريقيا.'},
    'Rwanda':{name:'رواندا', capital:'كيغالي', text:'أطلقت رواندا القمر الصناعي RWASAT-1 عام 2019، أول قمر صناعي لها، بالتعاون مع جامعة طوكيو وشركة ArkEdge Space.'},
    'São Tomé and Príncipe':{name:'ساو تومي وبرينسيبي', capital:'ساو تومي', text:'ثاني أصغر دولة في أفريقيا، وهي دولة جزرية بركانية تقع جزيرتها الصغيرة رولاس على خط الاستواء تقريبًا.'},
    'Senegal':{name:'السنغال', capital:'داكار', text:'أطلقت السنغال القمر الصناعي GaindéSat-1A عام 2024، أول قمر صناعي لها، على يد فريق من المهندسين السنغاليين.'},
    'Seychelles':{name:'سيشل', capital:'فيكتوريا', text:'أرخبيل يضم 115 جزيرة، وأقل دول أفريقيا من حيث عدد السكان.'},
    'Sierra Leone':{name:'سيراليون', capital:'فريتاون', text:'يُعد ميناء فريتاون الطبيعي واحدًا من أكبر الموانئ العميقة في العالم.'},
    'Somalia':{name:'الصومال', capital:'مقديشو', text:'تمتلك الصومال أطول ساحل في القارة الأفريقية، إذ يمتد لأكثر من 3300 كم.'},
    'South Africa':{name:'جنوب أفريقيا', capital:'بريتوريا', text:'صنعت جنوب أفريقيا القمر الصناعي SUNSAT عام 1999، أول قمر صناعي يُصمّم ويُصنع في أفريقيا ويصل إلى المدار.'},
    'South Sudan':{name:'جنوب السودان', capital:'جوبا', text:'موطن منطقة السدّ، إحدى أكبر الأراضي الرطبة في العالم، التي يغذّيها النيل الأبيض.'},
    'Sudan':{name:'السودان', capital:'الخرطوم', text:'تقع الخرطوم عند نقطة التقاء النيل الأزرق بالنيل الأبيض بالضبط، ليشكّلا معًا نهر النيل.'},
    'Tanzania':{name:'تنزانيا', capital:'دودوما', text:'موطن جبل كليمنجارو، أعلى قمة في أفريقيا بارتفاع 5895 مترًا.'},
    'Togo':{name:'توغو', capital:'لومي', text:'تمتد توغو نحو 540 كم من الشمال إلى الجنوب، لكن عرضها لا يتجاوز 100 إلى 160 كم عند أوسع نقطة.'},
    'Tunisia':{name:'تونس', capital:'تونس', text:'صنعت تونس القمر النانوي Challenge-1، الذي طوّرته شركة تونسية بشكل مستقل وأُطلق عام 2021.'},
    'Uganda':{name:'أوغندا', capital:'كمبالا', text:'أطلقت أوغندا القمر الصناعي PearlAfricaSat-1، أول قمر صناعي لها، لدعم الزراعة ورسم خرائط الموارد.'},
    'Zambia':{name:'زامبيا', capital:'لوساكا', text:'تتشارك زامبيا شلالات فيكتوريا مع زيمبابوي، إحدى أكبر الشلالات في العالم.'},
    'Zimbabwe':{name:'زيمبابوي', capital:'هراري', text:'أطلقت زيمبابوي القمر الصناعي ZimSat-1 إلى المدار عام 2022، أول قمر صناعي لها، بدعم من جامعة يابانية.'}
  },
  pt: {
    'Algeria':{name:'Argélia', capital:'Argel', text:'Lançou o Alsat-1 em 2002, o primeiro satélite da Argélia, pouco depois da fundação da Agência Espacial Argelina.'},
    'Angola':{name:'Angola', capital:'Luanda', text:'Opera o AngoSat-2, um satélite de comunicações lançado em 2022 depois de seu antecessor ter falhado.'},
    'Benin':{name:'Benim', capital:'Porto-Novo', text:'Faz a cogestão do Parque Nacional de Pendjari, parte de um complexo transfronteiriço de vida selvagem Patrimônio Mundial da UNESCO.'},
    'Botswana':{name:'Botsuana', capital:'Gaborone', text:'Colocou seu primeiro satélite, o BOTSAT-1, em órbita em 2025.'},
    'Burkina Faso':{name:'Burquina Faso', capital:'Uagadugu', text:'Está quase inteiramente dentro do Sahel, a faixa semiárida entre o Saara e a savana tropical.'},
    'Burundi':{name:'Burundi', capital:'Gitega', text:'Faz fronteira com o Lago Tanganica, o segundo lago de água doce mais profundo e o segundo maior em volume do mundo.'},
    'Cabo Verde':{name:'Cabo Verde', capital:'Praia', text:'Um arquipélago vulcânico de 10 ilhas, lar do Pico do Fogo, um dos vulcões ativos do Atlântico.'},
    'Cameroon':{name:'Camarões', capital:'Iaundé', text:'Apelidado de «África em miniatura» por reunir quase todas as paisagens e climas africanos.'},
    'Central African Republic':{name:'República Centro-Africana', capital:'Bangui', text:'Situa-se na linha divisória de águas entre as bacias do Chade e do Congo.'},
    'Chad':{name:'Chade', capital:'Ndjamena', text:'Lar do Lago Chade, outrora um dos maiores lagos da África, hoje reduzido a uma fração de seu tamanho original.'},
    'Comoros':{name:'Comores', capital:'Moroni', text:'Um arquipélago vulcânico onde o Monte Karthala, o maior vulcão das Comores, entra em erupção a cada poucos anos.'},
    'Congo':{name:'Congo', capital:'Brazzaville', text:'Brazzaville e Kinshasa ficam frente a frente nas margens do Rio Congo, o par de capitais mais próximo do mundo.'},
    'Côte d’Ivoire':{name:'Costa do Marfim', capital:'Iamussucro', text:'Venceu o programa KiboCUBE da ONU e da JAXA em 2024 para construir e lançar seu primeiro CubeSat a partir da ISS.'},
    'DR Congo':{name:'RD Congo', capital:'Kinshasa', text:'Atravessada pelo Rio Congo, o rio mais profundo da África e o segundo maior do mundo em vazão.'},
    'Djibouti':{name:'Djibuti', capital:'Djibuti', text:'Lançou seu primeiro satélite, o Djibouti-1, e depois colocou o Djibouti-1B em órbita em 2024.'},
    'Egypt':{name:'Egito', capital:'Cairo', text:'Lançou o EgyptSat-1 em 2007 e opera hoje uma das maiores frotas de satélites da África.'},
    'Equatorial Guinea':{name:'Guiné Equatorial', capital:'Malabo', text:'Única nação de língua espanhola da África, com a ilha de Ano Bom situada quase exatamente sobre a linha do Equador.'},
    'Eritrea':{name:'Eritreia', capital:'Asmara', text:'Faz fronteira com o Mar Vermelho por mais de 1.000 km e inclui as mais de 200 ilhas do arquipélago de Dahlak.'},
    'Eswatini':{name:'Essuatíni', capital:'Mbabane', text:'Uma das últimas monarquias absolutas do mundo, quase inteiramente cercada pela África do Sul.'},
    'Ethiopia':{name:'Etiópia', capital:'Adis Abeba', text:'Lançou o ETRSS-1 em 2019, seu primeiro satélite, construído com parceiros chineses para agricultura e monitoramento climático.'},
    'Gabon':{name:'Gabão', capital:'Libreville', text:'Mais de 85% de seu território é coberto por floresta tropical, uma das maiores taxas de cobertura florestal do mundo.'},
    'Gambia':{name:'Gâmbia', capital:'Banjul', text:'O menor país continental da África, inteiramente moldado em torno do rio Gâmbia.'},
    'Ghana':{name:'Gana', capital:'Acra', text:'O GhanaSat-1, lançado em 2017, foi construído por três estudantes de engenharia da Universidade All Nations.'},
    'Guinea':{name:'Guiné', capital:'Conacri', text:'Fonte dos rios Níger, Gâmbia e Senegal, o que lhe rendeu o apelido de «torre de água da África Ocidental».'},
    'Guinea-Bissau':{name:'Guiné-Bissau', capital:'Bissau', text:'Lar do arquipélago dos Bijagós, uma Reserva da Biosfera da UNESCO composta por 88 ilhas.'},
    'Kenya':{name:'Quênia', capital:'Nairóbi', text:'Lançou o Taifa-1 em 2023, seu primeiro satélite operacional de observação da Terra.'},
    'Lesotho':{name:'Lesoto', capital:'Maseru', text:'O único país do mundo situado inteiramente acima de 1.000 metros de altitude, apelidado de «Reino no Céu».'},
    'Liberia':{name:'Libéria', capital:'Monróvia', text:'Abriga um dos maiores trechos remanescentes da floresta da Alta Guiné, na África Ocidental.'},
    'Libya':{name:'Líbia', capital:'Trípoli', text:'O deserto do Saara cobre cerca de 90% do território da Líbia.'},
    'Madagascar':{name:'Madagascar', capital:'Antananarivo', text:'A 4ª maior ilha do mundo, isolada há cerca de 88 milhões de anos, o que lhe confere uma biodiversidade incomparável.'},
    'Malawi':{name:'Malawi', capital:'Lilongwe', text:'Dominado pelo Lago Malawi, o terceiro maior lago da África e um dos mais profundos do mundo.'},
    'Mali':{name:'Mali', capital:'Bamako', text:'Cerca de dois terços do Mali situam-se no Saara, que abriga a histórica cidade comercial de Tombuctu.'},
    'Mauritania':{name:'Mauritânia', capital:'Nuaquechete', text:'Cerca de 90% desertíca, o que a torna um dos países menos densamente povoados do mundo.'},
    'Mauritius':{name:'Maurícia', capital:'Port Louis', text:'Opera o MIR-SAT1, seu primeiro nanossatélite, lançado em 2021 por meio do programa KiboCUBE da ONU e da JAXA.'},
    'Morocco':{name:'Marrocos', capital:'Rabat', text:'Opera os satélites de observação da Terra Mohammed VI-A e VI-B para mapeamento e gestão de desastres.'},
    'Mozambique':{name:'Moçambique', capital:'Maputo', text:'Possui um dos litorais mais extensos da África, estendendo-se por mais de 2.500 km ao longo do Oceano Índico.'},
    'Namibia':{name:'Namíbia', capital:'Windhoek', text:'Lar do Namibe, considerado o deserto mais antigo do mundo, com algumas das dunas mais altas do planeta.'},
    'Niger':{name:'Níger', capital:'Niamei', text:'Mais de 80% do território do Níger está dentro do deserto do Saara.'},
    'Nigeria':{name:'Nigéria', capital:'Abuja', text:'Lançou o NigeriaSat-1 em 2003, um dos primeiros satélites de observação da Terra da África.'},
    'Rwanda':{name:'Ruanda', capital:'Kigali', text:'Lançou o RWASAT-1 em 2019, o primeiro satélite de Ruanda, construído com a Universidade de Tóquio e a ArkEdge Space.'},
    'São Tomé and Príncipe':{name:'São Tomé e Príncipe', capital:'São Tomé', text:'O segundo menor país da África, uma nação insular vulcânica cujo ilhéu das Rolas fica quase exatamente sobre a Linha do Equador.'},
    'Senegal':{name:'Senegal', capital:'Dakar', text:'Lançou o GaindéSat-1A em 2024, seu primeiro satélite, construído por uma equipe de engenheiros senegaleses.'},
    'Seychelles':{name:'Seicheles', capital:'Victoria', text:'Um arquipélago de 115 ilhas e o país menos populoso da África.'},
    'Sierra Leone':{name:'Serra Leoa', capital:'Freetown', text:'O porto natural de Freetown é um dos maiores portos de águas profundas do mundo.'},
    'Somalia':{name:'Somália', capital:'Mogadíscio', text:'Possui o litoral mais extenso da África continental, estendendo-se por mais de 3.300 km.'},
    'South Africa':{name:'África do Sul', capital:'Pretória', text:'Construiu o SUNSAT em 1999, o primeiro satélite projetado e fabricado na África a alcançar a órbita.'},
    'South Sudan':{name:'Sudão do Sul', capital:'Juba', text:'Lar do Sudd, uma das maiores áreas úmidas do mundo, alimentada pelo Nilo Branco.'},
    'Sudan':{name:'Sudão', capital:'Cartum', text:'Cartum situa-se exatamente no ponto de encontro do Nilo Azul e do Nilo Branco, que juntos formam o Rio Nilo.'},
    'Tanzania':{name:'Tanzânia', capital:'Dodoma', text:'Lar do Monte Kilimanjaro, o pico mais alto da África, com 5.895 metros.'},
    'Togo':{name:'Togo', capital:'Lomé', text:'Estende-se por cerca de 540 km de norte a sul, mas apenas 100 a 160 km em seu ponto mais largo.'},
    'Tunisia':{name:'Tunísia', capital:'Tunes', text:'Construiu o Challenge-1, um nanossatélite desenvolvido de forma independente por uma empresa tunisiana e lançado em 2021.'},
    'Uganda':{name:'Uganda', capital:'Campala', text:'Lançou o PearlAfricaSat-1, seu primeiro satélite, para apoiar a agricultura e o mapeamento de recursos.'},
    'Zambia':{name:'Zâmbia', capital:'Lusaka', text:'Compartilha as Cataratas Vitória com o Zimbábue, uma das maiores quedas d’água do mundo.'},
    'Zimbabwe':{name:'Zimbábue', capital:'Harare', text:'Colocou o ZimSat-1 em órbita em 2022, seu primeiro satélite, construído com apoio de uma universidade japonesa.'}
  }
};

/* Base country data (English). Population is a bare figure (World Bank,
   2024, see SOURCES.md); the "(World Bank, 2024)" label is added at render
   time from UI_I18N so it translates along with everything else. */
var COUNTRIES = [
  {name:'Algeria', capital:'Algiers', population:'46,814,308', region:'North Africa', factType:'space', animal:'fox', text:'Launched Alsat-1 in 2002, Algeria’s first satellite, shortly after founding the Algerian Space Agency.'},
  {name:'Angola', capital:'Luanda', population:'37,885,849', region:'Central Africa', factType:'space', animal:'antelope', text:'Operates AngoSat-2, a communications satellite launched in 2022 after its predecessor failed.'},
  {name:'Benin', capital:'Porto-Novo', population:'14,462,724', region:'West Africa', factType:'geography', animal:'squirrel', text:'Co-hosts Pendjari National Park, part of a UNESCO World Heritage transboundary wildlife complex.'},
  {name:'Botswana', capital:'Gaborone', population:'2,521,139', region:'Southern Africa', factType:'space', animal:'zebra', text:'Put its first satellite, BOTSAT-1, into orbit in 2025.'},
  {name:'Burkina Faso', capital:'Ouagadougou', population:'23,548,781', region:'West Africa', factType:'geography', animal:'horse', text:'Lies almost entirely within the Sahel, the semi-arid belt between the Sahara and tropical savanna.'},
  {name:'Burundi', capital:'Gitega', population:'14,047,786', region:'East Africa', factType:'geography', animal:'bird', text:'Borders Lake Tanganyika, the world’s second-deepest and second-largest freshwater lake by volume.'},
  {name:'Cabo Verde', capital:'Praia', population:'524,877', region:'West Africa', factType:'geography', animal:'fish', text:'A volcanic archipelago of 10 islands, home to Pico do Fogo, one of the Atlantic’s active volcanoes.'},
  {name:'Cameroon', capital:'Yaoundé', population:'29,123,744', region:'Central Africa', factType:'geography', animal:'lion', text:'Nicknamed "Africa in miniature" for containing nearly every major African landscape and climate.'},
  {name:'Central African Republic', capital:'Bangui', population:'5,330,690', region:'Central Africa', factType:'geography', animal:'elephant', text:'Sits on the watershed between the Chad and Congo River basins.'},
  {name:'Chad', capital:'N’Djamena', population:'20,299,123', region:'Central Africa', factType:'geography', animal:'elephant', text:'Home to Lake Chad, once one of Africa’s largest lakes, now a fraction of its former size.'},
  {name:'Comoros', capital:'Moroni', population:'866,628', region:'East Africa', factType:'geography', animal:'fish', text:'A volcanic archipelago where Mount Karthala, the largest volcano in Comoros, erupts every few years.'},
  {name:'Congo', capital:'Brazzaville', population:'6,332,961', region:'Central Africa', factType:'geography', animal:'gorilla', text:'Brazzaville and Kinshasa face each other across the Congo River, the closest pair of capitals in the world.'},
  {name:'Côte d’Ivoire', capital:'Yamoussoukro', population:'31,934,230', region:'West Africa', factType:'space', animal:'elephant', text:'Won the UN/JAXA KiboCUBE programme in 2024 to build and launch its first CubeSat from the ISS.'},
  {name:'DR Congo', capital:'Kinshasa', population:'109,276,265', region:'Central Africa', factType:'geography', animal:'leopard', text:'Carries the Congo River, Africa’s deepest river and the world’s second-largest by discharge volume.'},
  {name:'Djibouti', capital:'Djibouti', population:'1,168,722', region:'East Africa', factType:'space', animal:'fish', text:'Launched its first satellite, Djibouti-1, then added Djibouti-1B to orbit in 2024.'},
  {name:'Egypt', capital:'Cairo', population:'116,538,258', region:'North Africa', factType:'space', animal:'crocodile', text:'Launched EgyptSat-1 in 2007 and now operates one of Africa’s largest satellite fleets.'},
  {name:'Equatorial Guinea', capital:'Malabo', population:'1,892,516', region:'Central Africa', factType:'geography', animal:'lemur', text:'Africa’s only Spanish-speaking nation, with Annobón Island sitting almost on the Equator.'},
  {name:'Eritrea', capital:'Asmara', population:'3,535,603', region:'East Africa', factType:'geography', animal:'camel', text:'Borders the Red Sea for over 1,000 km and includes the 200-plus islands of the Dahlak Archipelago.'},
  {name:'Eswatini', capital:'Mbabane', population:'1,242,822', region:'Southern Africa', factType:'geography', animal:'rhino', text:'One of the world’s last absolute monarchies, almost entirely bordered by South Africa.'},
  {name:'Ethiopia', capital:'Addis Ababa', population:'132,059,767', region:'East Africa', factType:'space', animal:'antelope', text:'Launched ETRSS-1 in 2019, its first satellite, built with Chinese partners for agriculture and climate monitoring.'},
  {name:'Gabon', capital:'Libreville', population:'2,538,952', region:'Central Africa', factType:'geography', animal:'leopard', text:'Over 85% of its land is covered by rainforest, among the highest forest cover of any country on Earth.'},
  {name:'Gambia', capital:'Banjul', population:'2,759,988', region:'West Africa', factType:'geography', animal:'scorpion', text:'Africa’s smallest mainland country, shaped entirely around the Gambia River.'},
  {name:'Ghana', capital:'Accra', population:'34,427,414', region:'West Africa', factType:'space', animal:'elephant', text:'GhanaSat-1, launched in 2017, was built by three student engineers at All Nations University.'},
  {name:'Guinea', capital:'Conakry', population:'14,754,785', region:'West Africa', factType:'geography', animal:'elephant', text:'Source of the Niger, Gambia, and Senegal Rivers, earning it the nickname "water tower of West Africa."'},
  {name:'Guinea-Bissau', capital:'Bissau', population:'2,201,352', region:'West Africa', factType:'geography', animal:'fox', text:'Home to the Bijagós Archipelago, an 88-island UNESCO Biosphere Reserve.'},
  {name:'Kenya', capital:'Nairobi', population:'56,432,944', region:'East Africa', factType:'space', animal:'lion', text:'Launched Taifa-1 in 2023, its first operational Earth-observation satellite.'},
  {name:'Lesotho', capital:'Maseru', population:'2,337,423', region:'Southern Africa', factType:'geography', animal:'crocodile', text:'The only country in the world lying entirely above 1,000 metres, nicknamed the "Kingdom in the Sky."'},
  {name:'Liberia', capital:'Monrovia', population:'5,612,817', region:'West Africa', factType:'geography', animal:'hippo', text:'Holds one of the largest remaining stretches of West Africa’s Upper Guinean rainforest.'},
  {name:'Libya', capital:'Tripoli', population:'7,381,023', region:'North Africa', factType:'geography', animal:'antelope', text:'The Sahara Desert covers about 90% of Libya’s land area.'},
  {name:'Madagascar', capital:'Antananarivo', population:'31,964,956', region:'East Africa', factType:'geography', animal:'lemur', text:'The world’s 4th-largest island, isolated for about 88 million years, giving it unmatched biodiversity.'},
  {name:'Malawi', capital:'Lilongwe', population:'21,655,286', region:'East Africa', factType:'geography', animal:'fish', text:'Dominated by Lake Malawi, Africa’s third-largest and one of the world’s deepest lakes.'},
  {name:'Mali', capital:'Bamako', population:'24,478,595', region:'West Africa', factType:'geography', animal:'eagle', text:'About two-thirds of Mali lies within the Sahara, home to the historic trading city of Timbuktu.'},
  {name:'Mauritania', capital:'Nouakchott', population:'5,169,395', region:'West Africa', factType:'geography', animal:'bird', text:'About 90% desert, making it one of the most sparsely populated countries on Earth.'},
  {name:'Mauritius', capital:'Port Louis', population:'1,245,779', region:'East Africa', factType:'space', animal:'dodo', text:'MIR-SAT1, Mauritius’ first satellite, launched in 2021 through the UN/JAXA KiboCUBE programme.'},
  {name:'Morocco', capital:'Rabat', population:'38,081,173', region:'North Africa', factType:'space', animal:'lion', text:'Operates the Mohammed VI-A and VI-B Earth-observation satellites for mapping and disaster response.'},
  {name:'Mozambique', capital:'Maputo', population:'34,631,766', region:'East Africa', factType:'geography', animal:'snake', text:'Has one of Africa’s longest coastlines, stretching over 2,500 km along the Indian Ocean.'},
  {name:'Namibia', capital:'Windhoek', population:'3,030,131', region:'Southern Africa', factType:'geography', animal:'cheetah', text:'Home to the Namib, believed to be the world’s oldest desert, with some of the tallest dunes on Earth.'},
  {name:'Niger', capital:'Niamey', population:'27,032,412', region:'West Africa', factType:'geography', animal:'antelope', text:'More than 80% of Niger’s land lies within the Sahara Desert.'},
  {name:'Nigeria', capital:'Abuja', population:'232,679,478', region:'West Africa', factType:'space', animal:'eagle', text:'Launched NigeriaSat-1 in 2003, among Africa’s earliest Earth-observation satellites.'},
  {name:'Rwanda', capital:'Kigali', population:'14,256,567', region:'East Africa', factType:'space', animal:'gorilla', text:'Deployed RWASAT-1 in 2019, Rwanda’s first satellite, built with the University of Tokyo and ArkEdge Space.'},
  {name:'São Tomé and Príncipe', capital:'São Tomé', population:'235,536', region:'Central Africa', factType:'geography', animal:'bird', text:'Africa’s second-smallest country, whose islet of Rolas sits almost exactly on the Equator.'},
  {name:'Senegal', capital:'Dakar', population:'18,501,984', region:'West Africa', factType:'space', animal:'lion', text:'Launched GaindéSat-1A in 2024, its first satellite, built by a team of Senegalese engineers.'},
  {name:'Seychelles', capital:'Victoria', population:'121,354', region:'East Africa', factType:'geography', animal:'tortoise', text:'An archipelago of 115 islands and Africa’s smallest country by population.'},
  {name:'Sierra Leone', capital:'Freetown', population:'8,642,022', region:'West Africa', factType:'geography', animal:'lion', text:'Freetown’s natural harbour is one of the largest deep-water harbours in the world.'},
  {name:'Somalia', capital:'Mogadishu', population:'19,009,151', region:'East Africa', factType:'geography', animal:'camel', text:'Has the longest coastline on mainland Africa, stretching more than 3,300 km.'},
  {name:'South Africa', capital:'Pretoria', population:'64,007,187', region:'Southern Africa', factType:'space', animal:'antelope', text:'Built SUNSAT in 1999, the first satellite designed and built in Africa to reach orbit.'},
  {name:'South Sudan', capital:'Juba', population:'11,943,408', region:'East Africa', factType:'geography', animal:'antelope', text:'Home to the Sudd, one of the world’s largest wetlands, fed by the White Nile.'},
  {name:'Sudan', capital:'Khartoum', population:'50,448,963', region:'North Africa', factType:'geography', animal:'crocodile', text:'Khartoum sits exactly where the Blue Nile and White Nile meet to form the Nile River.'},
  {name:'Tanzania', capital:'Dodoma', population:'68,560,157', region:'East Africa', factType:'geography', animal:'lion', text:'Home to Mount Kilimanjaro, Africa’s highest peak at 5,895 metres.'},
  {name:'Togo', capital:'Lomé', population:'8,406,558', region:'West Africa', factType:'geography', animal:'bird', text:'Stretches about 540 km north to south but only around 100 to 160 km across at its widest.'},
  {name:'Tunisia', capital:'Tunis', population:'12,277,109', region:'North Africa', factType:'space', animal:'eagle', text:'Built Challenge-1, a nanosatellite developed independently by a Tunisian company and launched in 2021.'},
  {name:'Uganda', capital:'Kampala', population:'50,015,092', region:'East Africa', factType:'space', animal:'bird', text:'Launched PearlAfricaSat-1, its first satellite, to support agriculture and resource mapping.'},
  {name:'Zambia', capital:'Lusaka', population:'21,314,956', region:'East Africa', factType:'geography', animal:'eagle', text:'Shares Victoria Falls with Zimbabwe, one of the largest waterfalls on Earth.'},
  {name:'Zimbabwe', capital:'Harare', population:'16,634,373', region:'East Africa', factType:'space', animal:'eagle', text:'Put ZimSat-1 into orbit in 2022, its first satellite, built with Japanese university support.'}
];

/* ---------------- application logic ---------------- */
(function(){
  var LANGS = ['en', 'fr', 'ar', 'pt'];
  var LANG_NAMES = {en:'English', fr:'Français', ar:'العربية', pt:'Português'};
  var LANG_CODES = {en:'EN', fr:'FR', ar:'AR', pt:'PT'};

  function getStoredLang(){
    var stored = null;
    try { stored = localStorage.getItem('awigis-lang'); } catch(e){}
    return (stored && LANGS.indexOf(stored) !== -1) ? stored : 'en';
  }

  var currentLang = getStoredLang();
  var storyCurrent = 0;
  var storyTimer = null;

  function t(key){
    var table = UI_I18N[currentLang] || UI_I18N.en;
    return (key in table) ? table[key] : UI_I18N.en[key];
  }

  function applyStaticText(){
    document.querySelectorAll('[data-i18n]').forEach(function(el){
      var v = t(el.getAttribute('data-i18n'));
      if(v != null) el.textContent = v;
    });
    document.querySelectorAll('[data-i18n-html]').forEach(function(el){
      var v = t(el.getAttribute('data-i18n-html'));
      if(v != null) el.innerHTML = v;
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(function(el){
      var v = t(el.getAttribute('data-i18n-aria'));
      if(v != null) el.setAttribute('aria-label', v);
    });
    var langLabel = document.getElementById('langLabel');
    if(langLabel) langLabel.textContent = LANG_CODES[currentLang];
    document.querySelectorAll('#langMenu [data-lang]').forEach(function(btn){
      btn.setAttribute('aria-current', btn.getAttribute('data-lang') === currentLang ? 'true' : 'false');
    });
  }

  /* ---- story card (every African country) ---- */
  var reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var fillEl, bodyEl, locEl, regionEl, detailsEl, textEl, iconUse, countEl, prevBtn, nextBtn, cardEl;

  function cacheStoryEls(){
    fillEl = document.getElementById('storyFill');
    bodyEl = document.getElementById('storyBody');
    locEl = document.getElementById('storyLoc');
    regionEl = document.getElementById('storyRegion');
    detailsEl = document.getElementById('storyDetails');
    textEl = document.getElementById('storyText');
    iconUse = document.querySelector('#storyIconUse use');
    countEl = document.getElementById('storyCount');
    prevBtn = document.getElementById('storyPrev');
    nextBtn = document.getElementById('storyNext');
    cardEl = document.getElementById('storyCard');
  }

  function renderStory(animate){
    if(!cardEl) return;
    var c = COUNTRIES[storyCurrent];
    var tr = (currentLang === 'en') ? null : (COUNTRY_TR[currentLang] || {})[c.name];
    var name = tr ? tr.name : c.name;
    var capital = tr ? tr.capital : c.capital;
    var text = tr ? tr.text : c.text;
    var region = (REGION_I18N[currentLang] || REGION_I18N.en)[c.region] || c.region;

    function apply(){
      locEl.textContent = name;
      regionEl.textContent = region;
      detailsEl.textContent = t('label_capital') + ': ' + capital + ' · ' + t('label_population') + ': ' + c.population + ' (' + t('label_worldbank') + ', 2024)';
      textEl.textContent = text;
      if(iconUse) iconUse.setAttribute('href', '#i-' + c.animal);
      countEl.textContent = (storyCurrent + 1) + ' / ' + COUNTRIES.length;
      if(fillEl) fillEl.style.width = (((storyCurrent + 1) / COUNTRIES.length) * 100).toFixed(1) + '%';
      if(bodyEl) bodyEl.classList.remove('hide');
    }
    if(reduced || !animate){ apply(); } else {
      bodyEl.classList.add('hide');
      setTimeout(apply, 180);
    }
  }

  function clearStoryAuto(){ if(storyTimer){ clearTimeout(storyTimer); storyTimer = null; } }
  function scheduleStoryAuto(){
    clearStoryAuto();
    if(reduced) return;
    storyTimer = setTimeout(function(){ storyGoTo(storyCurrent + 1); }, 5500);
  }
  function storyGoTo(i){
    storyCurrent = (i + COUNTRIES.length) % COUNTRIES.length;
    renderStory(true);
    scheduleStoryAuto();
  }

  function wireStoryCard(){
    cacheStoryEls();
    if(!cardEl) return;
    prevBtn.addEventListener('click', function(){ storyGoTo(storyCurrent - 1); });
    nextBtn.addEventListener('click', function(){ storyGoTo(storyCurrent + 1); });
    cardEl.addEventListener('mouseenter', clearStoryAuto);
    cardEl.addEventListener('mouseleave', scheduleStoryAuto);
    cardEl.addEventListener('focusin', clearStoryAuto);
    cardEl.addEventListener('focusout', scheduleStoryAuto);
    renderStory(false);
    scheduleStoryAuto();
  }

  /* ---- language switching ---- */
  function setLanguage(lang){
    if(LANGS.indexOf(lang) === -1) lang = 'en';
    currentLang = lang;
    try { localStorage.setItem('awigis-lang', lang); } catch(e){}
    var root = document.documentElement;
    root.setAttribute('lang', lang);
    root.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    applyStaticText();
    renderStory(true);
  }

  var dismissLangTip = function(){};

  function wireLangSwitch(){
    var btn = document.getElementById('langBtn');
    var menu = document.getElementById('langMenu');
    if(!btn || !menu) return;
    function closeMenu(){ menu.hidden = true; btn.setAttribute('aria-expanded', 'false'); }
    function openMenu(){ menu.hidden = false; btn.setAttribute('aria-expanded', 'true'); }
    btn.addEventListener('click', function(ev){
      ev.stopPropagation();
      dismissLangTip();
      if(menu.hidden){ openMenu(); } else { closeMenu(); }
    });
    menu.querySelectorAll('[data-lang]').forEach(function(item){
      item.addEventListener('click', function(){
        setLanguage(item.getAttribute('data-lang'));
        closeMenu();
      });
    });
    document.addEventListener('click', function(ev){
      if(!menu.hidden && !menu.contains(ev.target) && ev.target !== btn) closeMenu();
    });
    document.addEventListener('keydown', function(ev){
      if(ev.key === 'Escape') closeMenu();
    });
  }

  /* brief, auto-dismissing nudge pointing at the language switcher so
     first-time visitors notice it exists */
  function wireLangTip(){
    var tip = document.getElementById('langTip');
    var closeBtn = document.getElementById('langTipClose');
    if(!tip) return;
    var hideTimer = null;
    function hide(){
      tip.classList.remove('show');
      if(hideTimer){ clearTimeout(hideTimer); hideTimer = null; }
    }
    dismissLangTip = hide;
    if(closeBtn){
      closeBtn.addEventListener('click', function(ev){
        ev.stopPropagation();
        hide();
      });
    }
    requestAnimationFrame(function(){
      requestAnimationFrame(function(){ tip.classList.add('show'); });
    });
    hideTimer = setTimeout(hide, 5000);
  }

  function init(){
    wireLangSwitch();
    wireStoryCard();
    var root = document.documentElement;
    root.setAttribute('lang', currentLang);
    root.setAttribute('dir', currentLang === 'ar' ? 'rtl' : 'ltr');
    applyStaticText();
    wireLangTip();
  }

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
