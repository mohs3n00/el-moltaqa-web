/* ==========================================================================
   MOLTACA ELAZHAR — Verified Community Data Hub
   Consolidates canonical stories, activities, media, and archive datasets
   ========================================================================== */

const MOLTACA_DATA = {
  get activities() {
    return window.MOLTACA_ACTIVITIES || [];
  },
  get stories() {
    return window.MOLTACA_STORIES || [];
  },
  get featuredMedia() {
    return window.MOLTACA_MEDIA || [];
  },
  get archivePhotos() {
    return window.MOLTACA_ARCHIVE || [];
  },
  featuredVideo: {
    title: "مسيرة ملتقى أبناء قصاصين الأزهار",
    subtitle: "وثائقي يرصد محطات المبادرة وتكافل أهالي القرية منذ عام 2012",
    cover: "assets/stories/community_solidarity_hall.jpg",
    tenUrl: "https://fb.watch/nqadkZDsr8/?mibextid=Nif5oz",
    supportUrl: "https://fb.watch/kVNty1P2CY/?mibextid=Nif5oz"
  },
  appInfo: {
    name: "ملتقى أبناء قصاصين الأزهار",
    platform: "Android Only",
    packageId: "com.elmoltaqa.app",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.elmoltaqa.app",
    badge: "متوفر على متجر Google Play (أندرويد فقط)"
  }
};

if (typeof window !== "undefined") {
  window.MOLTACA_DATA = MOLTACA_DATA;
}
