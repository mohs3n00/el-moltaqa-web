/* ==========================================================================
   MOLTACA ELAZHAR — Verified External Media Coverage Data Store
   Documented national press articles covering Moltaca Elazhar
   with verified extracted primary images or text-first cards
   ========================================================================== */

const MOLTACA_MEDIA = [
  {
    id: "media-akhbarelyom-2019",
    outlet: "بوابة أخبار اليوم",
    outletLogoText: "أخبار اليوم",
    date: "31 يوليو 2019",
    reporter: "عبد العال نافع",
    title: "«ملتقى قصاصين الأزهار».. مبادرة شبابية لكشف المواهب بالشعر والرسم",
    summary: "تقرير صحفي مفصل يرصد تنظيم ملتقى أبناء قصاصين الأزهار لمسابقة اكتشاف المواهب الأدبية والفنية بالقرية بمشاركة 16 متسابقاً ولجنة تحكيم متخصصة.",
    image: "assets/stories/talent-competition-2019.jpg",
    url: "https://akhbarelyom.com/news/newdetails/2890266/1/",
    category: "مسابقات ومواهب"
  },
  {
    id: "media-elmwatin-quran-2016",
    outlet: "صحيفة المواطن",
    outletLogoText: "المواطن",
    date: "20 يونيو 2016",
    reporter: "محرر المحافظات",
    title: "تكريم 139 طفلاً من حفظة القرآن الكريم بقرية قصاصين الأزهار",
    summary: "رصد لاحتفالية تكريم براعم وأطفال القرية في مسابقة حفظ القرآن الكريم بالتنسيق والتعاون المشترك بين رابطة الملتقى ومسجد التوحيد.",
    image: "assets/stories/quran-awards-2016.jpg",
    url: "https://www.elmwatin.com/28780",
    category: "تكريم ومجتمع"
  },
  {
    id: "media-elwatan-environment-2015",
    outlet: "جريدة الوطن",
    outletLogoText: "الوطن",
    date: "19 ديسمبر 2015",
    reporter: "نظيمة البحراوي",
    title: "أهالي «قصاصين الأزهار» بالشرقية يطالبون بحماية مياه الري بالصرف الصحي",
    summary: "تقرير صحفي ينقل صوت أهالي القرية لمسؤولي المحافظة دفاعاً عن الأراضي الزراعية والمطالبة بإصلاح المجاري المائية وحماية صحة المزارعين.",
    image: "assets/stories/village-environment-2015.jpg",
    url: "https://m.elwatannews.com/news/details/868900",
    category: "قضايا القرية"
  },
  {
    id: "media-elwatan-campaign-2016",
    outlet: "جريدة الوطن",
    outletLogoText: "الوطن",
    date: "06 أكتوبر 2016",
    reporter: "نظيمة البحراوي",
    title: "حملة شعبية لتطوير «قصاصين الأزهار» في الشرقية بالجهود الذاتية",
    summary: "تغطية ميدانية لإطلاق أعضاء ملتقى أبناء قصاصين الأزهار بالتعاون مع الوحدة المحلية حملة لتطوير القرية وإنارة الشوارع والمقابر وتشجير الطرق وترميم الكباري.",
    image: "assets/activities/village_development_works.jpg",
    url: "https://www.elwatannews.com/news/details/1474166",
    category: "مبادرات وتنمية"
  },
  {
    id: "media-elwatan-services-2020",
    outlet: "جريدة الوطن",
    outletLogoText: "الوطن",
    date: "11 ديسمبر 2020",
    reporter: "نظيمة البحراوي",
    title: "أهالي قصاصين الأزهار يستغيثون بمحافظ الشرقية لتجديد شبكات مياه الشرب",
    summary: "متابعة صحفية لمطالب أهالي القرية بسرعة تجديد وتحديث خطوط مياه الشرب المتهالكة وإحلال البنية التحتية الأساسية بمركز أولاد صقر.",
    image: null,
    url: "https://www.elwatannews.com/news/details/5124208",
    category: "صوت المجتمع"
  }
];

if (typeof window !== "undefined") {
  window.MOLTACA_MEDIA = MOLTACA_MEDIA;
}
