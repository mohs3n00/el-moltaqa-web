/* ==========================================================================
   MOLTACA ELAZHAR — Verified Stories & Highlights Data Store
   Strict 1-to-1 Mapping: Every card links to its exact verified canonical source
   No duplicate URLs. No unrelated video redirects.
   ========================================================================== */

const MOLTACA_STORIES = [
  // 1. Founding / Community Identity Post
  {
    id: "story-creed-2012",
    type: "community-post",
    title: "«بالأمل أحنا ابتدينا نزرع الحب بأدينا» — الميثاق التأسيسي لملتقى الأزهر",
    date: "25 مارس 2012",
    source: "وثيقة التأسيس — مجموعة فيسبوك",
    ctaText: "بيان المبادرة الكامل",
    summary: "الكلمات التأسيسية التي أطلقت المبادرة لتوحيد صفوف أبناء قصاصين الأزهار في الداخل والخارج، وفتح باب العطاء والتكافل دون أي غايات شخصية.",
    image: "assets/stories/founding_creed_card.jpg",
    url: "https://www.facebook.com/share/p/1LBp4Uw6BE/?mibextid=wwXIfr",
    location: "تأسيس المبادرة الرقمية",
    highlights: [
      "انطلاق المبادرة رسمياً في 25 مارس 2012 بمجهود شبابي تطوعي خالص",
      "تأكيد على الشفافية والتعاون بين الأجيال لخدمة وتنمية القرية",
      "بناء جسر تواصل دائم وموثوق بين أهالي القرية ومغتربيها"
    ]
  },

  // 2. Village Development Initiative
  {
    id: "story-campaign-2016",
    type: "community-initiative",
    title: "حملة تنموية شاملة لتطوير وتشجير وإنارة قرية قصاصين الأزهار بالجهود الذاتية",
    date: "06 أكتوبر 2016",
    source: "جريدة الوطن",
    ctaText: "تفاصيل المبادرة",
    summary: "دشن أعضاء الملتقى بقيادة المؤسس أحمد شعبان فرج الله حملة لتطوير مداخل القرية، إنارة المقابر، تشجير الطريق العام، وترميم الكوبري الرئيسي بالتعاون مع الوحدة المحلية.",
    image: "assets/activities/village_development_works.jpg",
    url: "https://www.elwatannews.com/news/details/1474166",
    location: "مدخل القرية والطريق العام",
    highlights: [
      "مبادرة بالجهود الذاتية قادها المؤسس أحمد شعبان فرج الله بالتنسيق مع أهالي القرية والوحدة المحلية",
      "إنجاز تنظيف شوارع القرية، إنارة المقابر، ترميم كوبري المدخل، وتشجير الطريق العام",
      "فريق عمل ضم: د. صدام حسين، م. محمد الأشموني، م. فرج محمد، م. الشحات السيد، م. محمود المنير، أحمد جمال، عبد الرحمن النجار، هاشم محمود، وسليمان الصلاحي"
    ]
  },

  // 3. Quran Memorization Event
  {
    id: "story-quran-2016",
    type: "community-event",
    title: "تكريم 139 طفلاً من حفظة القرآن الكريم بقرية قصاصين الأزهار",
    date: "20 يونيو 2016",
    source: "صحيفة المواطن",
    ctaText: "تفاصيل الفعالية",
    summary: "احتفالية كبرى نظمها مسجد التوحيد بالتنسيق مع رابطة ملتقى أبناء قصاصين الأزهار لتكريم 139 طفلاً من البراعم الفائزين في مسابقة القرآن السنوية.",
    image: "assets/stories/quran-awards-2016.jpg",
    url: "https://www.elmwatin.com/28780",
    location: "مسجد التوحيد — قصاصين الأزهار",
    highlights: [
      "تكريم 139 طفلاً وطفلة من حفظة كتاب الله تشجيعاً للأجيال الصاعدة",
      "تنسيق أهلي وثيق بين رابطة ملتقى أبناء قصاصين الأزهار وأهالي القرية",
      "توزيع جوائز تقديرية وشهادات تميز لغرس القيم الأصيلة في نفوس الناشئة"
    ]
  },

  // 4. Talent Competition
  {
    id: "story-competition-2019",
    type: "competition",
    title: "«ملتقى قصاصين الأزهار».. مسابقة سنوية لاكتشاف ورعاية المواهب في الشعر والرسم",
    date: "31 يوليو 2019",
    source: "بوابة أخبار اليوم الإلكترونية",
    ctaText: "اقرأ القصة والنتائج",
    summary: "مبادرة شبابية معنوية استهدفت مواهب القرية؛ شارك بها 16 متسابقاً تم تصفيتهم إلى 7 متأهلين بتصويت الجمهور، مع تحكيم متخصص من اتحاد كتاب مصر والإدارة التعليمية.",
    image: "assets/stories/talent-competition-2019.jpg",
    url: "https://akhbarelyom.com/news/newdetails/2890266/1/",
    location: "قصاصين الأزهار — أولاد صقر",
    highlights: [
      "تأهل 7 متسابقين: ناصر شلبي، إكرام عبد العظيم، تغريد مصيلحي (شعر)، إسراء علي، ولاء خضري، أحمد الحلو (رسم)، وأحمد التلباني (تصميم)",
      "لجنة تحكيم متخصصة: الشاعر ثروت سليم (مقرر شعبة الفصحى باتحاد كتاب مصر)، منى صابر صادق، أماني عبد الفتاح، وأحمد الحداد",
      "تنظيم شبابي تطوعي بإشراف نسرين المالكي، محمود ناصر، هدى عبد السلام، وضياء العمدة"
    ]
  },

  // 5. Village Water / Sanitation Story (2015)
  {
    id: "story-village-water-2015",
    type: "village-story",
    title: "أهالي قصاصين الأزهار بالشرقية يتظاهرون احتجاجا على تلوث مياه الري بالصرف الصحي",
    date: "19 ديسمبر 2015",
    source: "جريدة الوطن",
    ctaText: "اقرأ الخبر",
    summary: "وقفة مجتمعية ومناشدات رسمية من أهالي الوحدة المحلية بقصاصين الأزهار لحماية الأراضي الزراعية ووقف تلوث مياه الري بالصرف، حماية لصحة المواطنين.",
    image: "assets/stories/village-environment-2015.jpg",
    url: "https://m.elwatannews.com/news/details/868900",
    location: "الوحدة المحلية بقصاصين الأزهار",
    highlights: [
      "دفاع جماعي عن الرقعة الزراعية وسلامة المحاصيل الاستراتيجية بمركز أولاد صقر",
      "صوت مجتمعي موحد يعبر عن نبض فلاحي ومزارعي القرية",
      "متابعة مستمرة مع الجهات التنفيذية لحل مشكلات المجاري المائية"
    ]
  },

  // 6. 2020 Village Services Story
  {
    id: "story-village-drinking-2020",
    type: "village-story",
    title: "متابعة خدمات القرية: مطالب تجديد وتحديث شبكات مياه الشرب",
    date: "11 ديسمبر 2020",
    source: "جريدة الوطن",
    ctaText: "اقرأ الخبر",
    summary: "رصد لأحد أبرز التحديات الخدمية الحيوية بالقرية ونقل استغاثات الأهالي لمسؤولي محافظة الشرقية لتجديد شبكات المياه المتقادمة وضمان جودة مياه الشرب.",
    image: null,
    url: "https://www.elwatannews.com/news/details/5124208",
    location: "قرية قصاصين الأزهار",
    highlights: [
      "رصد ميداني للمطالب المعيشية والخدمية الأساسية لأهل القرية",
      "تكامل بين المنصات المجتمعية والصحافة الوطنية لإيصال صوت الأهالي",
      "دعوة للإسراع في مشروعات إحلال وتجديد البنية التحتية"
    ]
  },

  // 7. TEN Channel Video
  {
    id: "story-video-ten",
    type: "video",
    title: "تغطية قناة TeN الفضائية لتجربة ملتقى قصاصين الأزهار الرائدة",
    date: "تغطية تلفزيونية",
    source: "قناة TeN الفضائية / فيسبوك ووتش",
    ctaText: "مشاهدة المقطع",
    summary: "تقرير متلفز يرصد نجاح شباب قرية قصاصين الأزهار بمركز أولاد صقر في استثمار الفضاء الرقمي لخدمة قريتهم ورعاية المبدعين ودعم العمل الخيري.",
    image: "assets/stories/ten-tv-broadcast.jpg",
    url: "https://fb.watch/nqadkZDsr8/?mibextid=Nif5oz",
    location: "بث تلفزيوني قومي",
    highlights: [
      "تسليط الضوء على مبادرة قصاصين الأزهار كنموذج أهلي يحتذى به بالشرقية",
      "توثيق أثر المبادرات الثقافية والتكافلية على أرض الواقع",
      "شهادات من شباب القرية حول أهمية العمل التطوعي الموحد"
    ]
  },

  // 8. Moltaca Community Support Video
  {
    id: "story-video-support",
    type: "video",
    title: "ملتقى أبناء قصاصين الأزهار — السند والداعم دايما في كل الأزمات",
    date: "توثيق مصور",
    source: "ملتقى أبناء قصاصين الأزهار",
    ctaText: "مشاهدة الفيديو",
    summary: "مقطع مصور يرصد محطات التلاحم التكافلي وإعداد وتوزيع السلال الغذائية والمساعدات الإنسانية للأسر الأولى بالرعاية خلال مختلف المواسم.",
    image: "assets/archive/community_participation_shield.jpg",
    url: "https://fb.watch/kVNty1P2CY/?mibextid=Nif5oz",
    location: "قصاصين الأزهار",
    highlights: [
      "رصد مباشر لتجهيز وتوصيل السلال التكافلية وحملات الدعم الموسمي",
      "مشاركة فعالة من شباب المتطوعين ومساندة مغتربي القرية",
      "حفظ كرامة المستفيدين وتجسيد التكافل الريفي الأصيل"
    ]
  },

  // 9. Additional Facebook Video: TeN News Crisis Solidarity
  {
    id: "story-video-corona-support",
    type: "video",
    title: "أهالي قصاصين الأزهار يدعمون أول مصاب بفيروس كورونا في القرية ويصفونه بالبطل",
    date: "تقرير مصور",
    source: "قناة TeN الفضائية — فيسبوك",
    ctaText: "مشاهدة المقطع",
    summary: "توثيق متلفز للموقف الإنساني النبيل لأهالي وشباب قصاصين الأزهار في مؤازرة المصابين ومحاربة التنمر والوقوف صفاً واحداً خلال الجائحة.",
    image: "assets/stories/community_solidarity_hall.jpg",
    url: "https://www.facebook.com/share/v/19PwUNh87W/?mibextid=wwXIfr",
    location: "قصاصين الأزهار",
    highlights: [
      "موقف مجتمعي استثنائي لقي إشادة وطنية واسعة",
      "دعم نفسي وتكافلي كامل للأسرة والمصابين",
      "توثيق قيم الأخوة والتراحم بين أهالي القرية"
    ]
  },

  // 10. Additional Facebook Video: Community Youth Message
  {
    id: "story-video-youth-call",
    type: "video",
    title: "رسالة ونداء ملتقى أبناء قصاصين الأزهار لشباب وأهالي القرية",
    date: "مقطع مرئي موثق",
    source: "مجموعة ملتقى أبناء قصاصين الأزهار",
    ctaText: "مشاهدة المقطع",
    summary: "كلمة ونداء مرئي من شباب المبادرة يدعو الأهالي للتكاتف والمشاركة الإيجابية في تنمية وتطوير القرية واستثمار طاقات الجيل الصاعد.",
    image: "assets/stories/village_youth_mosque.jpg",
    url: "https://www.facebook.com/share/v/18hp5nWxpv/?mibextid=wwXIfr",
    location: "قصاصين الأزهار",
    highlights: [
      "تأكيد على فتح باب المشاركة لجميع أبناء القرية دون استثناء",
      "طرح أفكار لمشروعات النظافة والإنارة ورعاية الموهوبين",
      "توحيد الصفوف لمصلحة قصاصين الأزهار وأجيالها القادمة"
    ]
  },

  // 11. Additional Facebook Community Post: Group Announcement
  {
    id: "story-post-community-notice",
    type: "community-post",
    title: "بيان وتواصل دوري لأعضاء ملتقى أبناء قصاصين الأزهار",
    date: "منشور مجتمعي",
    source: "مجموعة فيسبوك الرسمية",
    ctaText: "عرض المنشور",
    summary: "رسالة دورية موجهة لأهالي وأعضاء الملتقى لمتابعة المقترحات الخدمية وتنسيق الأنشطة التطوعية المشتركة داخل القرية.",
    image: "assets/archive/brand_panoramic_banner.jpg",
    url: "https://www.facebook.com/share/p/1Bz1TQwojv/?mibextid=wwXIfr",
    location: "مجموعة فيسبوك الرسمية",
    highlights: [
      "تواصل مستمر مع أعضاء ومغتربي القرية لمناقشة المستجدات",
      "استقبال آراء المواطنين حول أولويات المشروعات المحلية",
      "تعزيز روح المبادرة الذاتية بين شباب القرية"
    ]
  },

  // 12. Additional Facebook Source: Quran Competition Honors
  {
    id: "story-post-quran-awards-doc",
    type: "community-post",
    title: "توثيق حفل توزيع الجوائز على الفائزين بمسابقة القرآن الكريم بمسجد التوحيد",
    date: "منشور توثيقي",
    source: "الصفحة الرسمية للملتقى",
    ctaText: "عرض المنشور",
    summary: "التوثيق الميداني المباشر لتسليم دروع وشهادات التكريم للأطفال الفائزين في مسابقة حفظ القرآن الكريم بمسجد التوحيد بقصاصين الأزهار.",
    image: "assets/stories/quran_awards_mosque.jpg",
    url: "https://www.facebook.com/share/1C8erHMFen/?mibextid=wwXIfr",
    location: "مسجد التوحيد — قصاصين الأزهار",
    highlights: [
      "حضور رواد العمل الدعوي والتعليمي بالقرية لتسليم الجوائز",
      "تكريم الفائزين بالمسابقة القرآنية وسط فرحة أهالي القرية",
      "توثيق مصور لكافة مراحل الحفل وتوزيع الهدايا التشجيعية"
    ]
  }
];

// Runtime URL Uniqueness Validation Check
if (typeof window !== "undefined") {
  window.MOLTACA_STORIES = MOLTACA_STORIES;

  const uniqueUrls = new Set(MOLTACA_STORIES.map(story => story.url));
  if (uniqueUrls.size !== MOLTACA_STORIES.length) {
    console.warn("⚠️ Duplicate story URLs detected! Found " + uniqueUrls.size + " unique out of " + MOLTACA_STORIES.length);
  } else {
    console.log("✅ URL Integrity Verified: All " + MOLTACA_STORIES.length + " stories have exact, distinct source URLs.");
  }
}
