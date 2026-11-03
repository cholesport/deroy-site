(function () {
  var DICT = {
    en: {
      announce: "Your next chapter. Your own style.",
      nav_bags: "Bags",
      nav_world: "Our World",
      aria_home: "DEROY home",
      aria_lang: "Language",
      lang_status: "Language: English",
      hero_kicker: "The Deroy Edit",
      hero_title: "Your next chapter.\nYour signature style.",
      hero_sub: "For first walks, coffee runs, and everything after.",
      hero_cta: "Explore the collection",
      motherhood: "Motherhood, in your own way.",
      begin_title: "A new beginning.\nStill entirely you.",
      begin_l1: "Meet the bag that belongs in your everyday.",
      begin_l2: "Considered details. Signature stripes. Four ways to make it yours.",
      everyday_kicker: "Meet your everyday",
      sig_title: "The Signature Bag",
      sig_sub: "One silhouette. Four colour stories.",
      color_stone: "Stone & Cream",
      color_chocolate: "Chocolate & Cream",
      color_navy: "Navy & Cashmere",
      color_burgundy: "Burgundy & Blush",
      kind_bag: "The Signature Bag",
      kind_set: "Bag + Stroller Liner",
      explore: "Explore",
      out_kicker: "Out in the world",
      moments_title: "Little moments.\nA whole new world.",
      moments_l1: "The long way home. Your usual coffee.",
      moments_l2: "A quiet walk with your new favourite person.",
      moments_l3: "Something familiar, for everything that’s new.",
      find_colour: "Find your colour",
      together_kicker: "Better together",
      pair_title: "The Perfect Pair",
      pair_l1: "Your signature bag. Its matching stroller liner.",
      pair_l2: "A little coordination, a lot of you.",
      tab_sets: "Matching sets",
      tab_bags: "Bags only",
      pov_kicker: "The Deroy point of view",
      pov_title: "Life changes.\nGood style comes with you.",
      pov_body: "On your shoulder or on your stroller, DEROY is a little piece of your world — ready for the next one.",
      everyday_classic: "The everyday classic",
      colour_own: "A colour of your own",
      discover: "Discover the bag",
      make_kicker: "Make it yours",
      outing_title: "Ready for your first outing?",
      explore_sets: "Explore the matching sets",
      footer_bags: "The Bags",
      footer_sets: "The Matching Sets",
      footer_world: "Our World",
      footer_tag: "A new chapter. Your own style.",
      footer_legal: "© DEROY 2026 · The Art of Becoming",
      title_home: "DEROY — The Art of Becoming",
      title_bags: "The Signature Bag — DEROY",
      title_sets: "The Matching Sets — DEROY",
      title_world: "Our World — DEROY",
      title_product: "The Signature Bag — DEROY",
      alt_hero: "A woman in a black coat walks a stroller with a stone and cream DEROY bag.",
      alt_park: "A woman walks a stroller through the park with a navy DEROY bag clipped to the handle.",
      alt_choc: "Close view of the chocolate and cream DEROY bag hanging from a stroller.",
      alt_burg: "A woman carries the burgundy and blush DEROY bag on a stroller through the city.",
      world_kicker: "Our world",
      world_title: "Motherhood, in your own way.",
      world_p1: "DEROY began with a simple idea: the bag you carry into a new chapter should still feel like yours.",
      world_p2: "It clips to the stroller for the long way home, and comes off the bar when you want it on your shoulder. Same silhouette, four colour stories, one matching liner.",
      world_p3: "We care about the details you touch every day — the stripe, the hardware, the way it sits. Good style, ready for whatever comes next.",
      back_bags: "All bags",
      back_sets: "All matching sets",
      made_to_order: "Made to order",
      details_kicker: "The details",
      detail_1: "Clips to the stroller, or sits on your shoulder",
      detail_2: "Top handles and an adjustable strap",
      detail_3: "Signature stripe and gold-tone hardware",
      detail_4: "A matching liner cut from the same cloth",
      reserve_title: "Request this piece",
      form_name: "Name",
      form_email: "Email",
      form_phone: "Phone",
      form_interest: "I’m interested in",
      opt_bag: "The bag",
      opt_set: "Bag + stroller liner",
      form_note: "Note",
      form_submit: "Send request",
      form_fine: "A request, not a payment. We’ll reply by email.",
      form_ok: "Thank you. We’ll be in touch about {name}.",
      err_name: "Please add your name.",
      err_email: "Please add a valid email.",
      chooser_note: "Choose a colour story.",
      shot_bag: "Bag",
      shot_set: "Matching set",
      shot_life: "In the world",
      ph_name: "Your name",
      ph_email: "you@email.com",
      ph_phone: "Optional",
      ph_note: "Anything we should know"
    },
    he: {
      announce: "הפרק הבא שלך. הסגנון שלך.",
      nav_bags: "תיקים",
      nav_world: "העולם שלנו",
      aria_home: "דרוי, עמוד הבית",
      aria_lang: "שפה",
      lang_status: "שפה: עברית",
      hero_kicker: "האדיט של דרוי",
      hero_title: "הפרק הבא שלך.\nהסגנון החתימתי שלך.",
      hero_sub: "להליכות הראשונות, לקפה בדרך, ולכל מה שאחרי.",
      hero_cta: "גלי את הקולקציה",
      motherhood: "אימהות, בדרך שלך.",
      begin_title: "התחלה חדשה.\nועדיין לגמרי את.",
      begin_l1: "התיק ששייך ליום־יום שלך.",
      begin_l2: "פרטים מדויקים. פסים חתימתיים. ארבע דרכים להפוך אותו לשלך.",
      everyday_kicker: "הכירי את היומיום שלך",
      sig_title: "תיק הסיגנטור",
      sig_sub: "צללית אחת. ארבעה סיפורי צבע.",
      color_stone: "אבן ושמנת",
      color_chocolate: "שוקולד ושמנת",
      color_navy: "נייבי וקשמיר",
      color_burgundy: "בורדו וסומק",
      kind_bag: "תיק הסיגנטור",
      kind_set: "תיק + ריפוד עגלה",
      explore: "גלי",
      out_kicker: "בחוץ, בעולם",
      moments_title: "רגעים קטנים.\nעולם חדש לגמרי.",
      moments_l1: "הדרך הארוכה הביתה. הקפה הקבוע שלך.",
      moments_l2: "הליכה שקטה עם האדם החדש האהוב עלייך.",
      moments_l3: "משהו מוכר, לכל מה שחדש.",
      find_colour: "מצאי את הצבע שלך",
      together_kicker: "טובים יותר ביחד",
      pair_title: "הזוג המושלם",
      pair_l1: "התיק החתימתי שלך. ריפוד העגלה התואם.",
      pair_l2: "תיאום קטן, הרבה ממך.",
      tab_sets: "סטים תואמים",
      tab_bags: "תיקים בלבד",
      pov_kicker: "נקודת המבט של דרוי",
      pov_title: "החיים משתנים.\nסגנון טוב בא איתך.",
      pov_body: "על הכתף או על העגלה, DEROY הוא חתיכה קטנה מהעולם שלך — מוכן לפרק הבא.",
      everyday_classic: "הקלאסיקה היומיומית",
      colour_own: "צבע משלך",
      discover: "גלי את התיק",
      make_kicker: "הפכי אותו לשלך",
      outing_title: "מוכנה ליציאה הראשונה?",
      explore_sets: "גלי את הסטים התואמים",
      footer_bags: "התיקים",
      footer_sets: "הסטים התואמים",
      footer_world: "העולם שלנו",
      footer_tag: "פרק חדש. הסגנון שלך.",
      footer_legal: "© DEROY 2026 · אמנות ההתהוות",
      title_home: "DEROY — אמנות ההתהוות",
      title_bags: "תיק הסיגנטור — DEROY",
      title_sets: "הסטים התואמים — DEROY",
      title_world: "העולם שלנו — DEROY",
      title_product: "תיק הסיגנטור — DEROY",
      alt_hero: "אישה במעיל שחור הולכת עם עגלה ותיק דרוי בפסים של אבן ושמנת.",
      alt_park: "אישה הולכת עם עגלה בפארק, ותיק דרוי נייבי תפוס על הידית.",
      alt_choc: "מבט קרוב על תיק דרוי בשוקולד ושמנת, תלוי על עגלה.",
      alt_burg: "אישה עם תיק דרוי בבורדו וסומק על עגלה, ברחוב בעיר.",
      world_kicker: "העולם שלנו",
      world_title: "אימהות, בדרך שלך.",
      world_p1: "DEROY התחיל מרעיון פשוט: התיק שנכנס איתך לפרק חדש צריך עדיין להרגיש שלך.",
      world_p2: "הוא נתפס על העגלה לדרך הארוכה הביתה, ויורד מהמוט כשרוצים אותו על הכתף. אותה צללית, ארבעה סיפורי צבע, וריפוד אחד תואם.",
      world_p3: "אכפת לנו מהפרטים שנוגעים בהם כל יום — הפס, הפרזול, האופן שבו הוא יושב. סגנון טוב, מוכן לכל מה שיבוא אחר כך.",
      back_bags: "כל התיקים",
      back_sets: "כל הסטים התואמים",
      made_to_order: "בהזמנה אישית",
      details_kicker: "הפרטים",
      detail_1: "נתפס על העגלה, או יושב על הכתף",
      detail_2: "ידיות עליונות ורצועה מתכווננת",
      detail_3: "פס חתימתי ופרזול בגוון זהב",
      detail_4: "ריפוד תואם מאותו הבד",
      reserve_title: "בקשת הזמנה",
      form_name: "שם",
      form_email: "אימייל",
      form_phone: "טלפון",
      form_interest: "מעניין אותי",
      opt_bag: "התיק",
      opt_set: "תיק + ריפוד עגלה",
      form_note: "הערה",
      form_submit: "שליחת בקשה",
      form_fine: "זו בקשה, לא תשלום. נחזור אלייך במייל.",
      form_ok: "תודה. ניצור קשר לגבי {name}.",
      err_name: "נא להוסיף שם.",
      err_email: "נא להוסיף אימייל תקין.",
      chooser_note: "בחרי סיפור צבע.",
      shot_bag: "תיק",
      shot_set: "סט תואם",
      shot_life: "בעולם",
      ph_name: "השם שלך",
      ph_email: "you@email.com",
      ph_phone: "לא חובה",
      ph_note: "משהו שכדאי שנדע"
    }
  };

  var PRODUCTS = {
    stone: {
      bag: "assets/bag-stone.jpg",
      set: "assets/set-stone.jpg",
      life: "",
      en: "A quiet neutral. Stone and cream stripes for the days that already have enough colour — first walks, coffee, the long way home.",
      he: "ניטרלי שקט. פסים של אבן ושמנת לימים שכבר יש בהם מספיק צבע — הליכות ראשונות, קפה, והדרך הארוכה הביתה."
    },
    chocolate: {
      bag: "assets/bag-chocolate.jpg",
      set: "assets/set-chocolate.jpg",
      life: "assets/editorial-chocolate.jpg",
      en: "The everyday classic. Deep chocolate and cream, with gold hardware that catches the light on the stroller bar.",
      he: "הקלאסיקה היומיומית. שוקולד עמוק ושמנת, עם פרזול זהב שתופס אור על מוט העגלה."
    },
    navy: {
      bag: "assets/bag-navy.jpg",
      set: "assets/set-navy.jpg",
      life: "assets/lifestyle-park.jpg",
      en: "Navy and cashmere blue. A crisp stripe for parks, pavements, and everything in between.",
      he: "נייבי וכחול קשמיר. פס חד לפארקים, למדרכות, ולכל מה שביניהם."
    },
    burgundy: {
      bag: "assets/bag-burgundy.jpg",
      set: "assets/set-burgundy.jpg",
      life: "assets/editorial-burgundy.jpg",
      en: "A colour of your own. Burgundy and blush — still entirely you, just at the start of a new chapter.",
      he: "צבע משלך. בורדו וסומק — ועדיין לגמרי את, רק בתחילתו של פרק חדש."
    }
  };

  function lang() {
    return "en";
  }

  function t(key) {
    var current = DICT[lang()] || DICT.en;
    if (current[key] != null) return current[key];
    return DICT.en[key] || "";
  }

  function applyLang(next) {
    next = "en";
    document.documentElement.lang = "en";
    document.documentElement.dir = "ltr";
    try {
      localStorage.setItem("deroy-lang", next);
    } catch (err) {}

    var dict = DICT[next];
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (dict[key] != null) el.textContent = dict[key];
    });
    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-aria");
      if (dict[key] != null) el.setAttribute("aria-label", dict[key]);
    });
    document.querySelectorAll("[data-i18n-alt]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-alt");
      if (dict[key] != null) el.setAttribute("alt", dict[key]);
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-placeholder");
      if (dict[key] != null) el.setAttribute("placeholder", dict[key]);
    });

    var page = document.body && document.body.dataset.page;
    if (page && dict["title_" + page]) document.title = dict["title_" + page];

    document.querySelectorAll("[data-set-lang]").forEach(function (btn) {
      var on = btn.getAttribute("data-set-lang") === next;
      btn.classList.toggle("is-active", on);
      btn.setAttribute("aria-pressed", on ? "true" : "false");
    });

    var status = document.getElementById("lang-status");
    if (status) status.textContent = dict.lang_status;

    document.dispatchEvent(new CustomEvent("deroy:lang", { detail: { lang: next } }));
  }

  window.DEROY = {
    t: t,
    lang: lang,
    applyLang: applyLang,
    products: PRODUCTS
  };

  function boot() {
    try {
      localStorage.removeItem("deroy-lang");
    } catch (err) {}
    applyLang("en");
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
