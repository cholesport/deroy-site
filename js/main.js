(function () {
  var reserved = null;

  function setupTabs() {
    var tabs = document.querySelectorAll("[data-tab]");
    if (!tabs.length) return;
    tabs.forEach(function (btn) {
      btn.addEventListener("click", function () {
        var id = btn.getAttribute("data-tab");
        tabs.forEach(function (other) {
          other.setAttribute("aria-selected", other === btn ? "true" : "false");
        });
        document.querySelectorAll("[data-panel]").forEach(function (panel) {
          panel.hidden = panel.getAttribute("data-panel") !== id;
        });
      });
    });
  }

  function colorName(id) {
    return window.DEROY.t("color_" + id);
  }

  function shotsFor(product) {
    var shots = [
      { id: "bag", src: product.bag, label: window.DEROY.t("shot_bag") },
      { id: "set", src: product.set, label: window.DEROY.t("shot_set") }
    ];
    if (product.life) {
      shots.push({ id: "life", src: product.life, label: window.DEROY.t("shot_life") });
    }
    return shots;
  }

  function readForm() {
    var form = document.getElementById("reserve-form");
    if (!form) return null;
    return {
      name: form.name.value,
      email: form.email.value,
      phone: form.phone.value,
      interest: form.interest.value,
      note: form.note.value
    };
  }

  function renderProduct() {
    var root = document.getElementById("product-root");
    if (!root || !window.DEROY) return;

    var params = new URLSearchParams(window.location.search);
    var id = params.get("id");
    var product = window.DEROY.products[id];
    var kept = readForm();
    var t = window.DEROY.t;

    if (!product) {
      root.innerHTML = chooserHtml(t("chooser_note"));
      return;
    }

    var view = params.get("view");
    if (view !== "bag" && view !== "set" && view !== "life") view = "bag";
    if (view === "life" && !product.life) view = "bag";

    var shots = shotsFor(product);
    var active = shots.filter(function (shot) { return shot.id === view; })[0] || shots[0];
    var backKey = view === "set" ? "back_sets" : "back_bags";
    var backHref = view === "set" ? "sets.html" : "bags.html";
    var kindKey = view === "set" ? "kind_set" : "kind_bag";

    var thumbs = shots.map(function (shot) {
      return (
        '<button type="button" data-shot="' + shot.id + '" aria-pressed="' + (shot.id === active.id ? "true" : "false") + '" aria-label="' + shot.label + '">' +
          '<img src="' + shot.src + '" alt="">' +
        "</button>"
      );
    }).join("");

    var success = reserved && reserved.id === id;
    var formBlock = success
      ? '<p class="form-success">' + t("form_ok").replace("{name}", colorName(id)) + "</p>"
      : formHtml(t, view === "set" ? "set" : "bag", kept);

    root.innerHTML =
      '<div class="product-layout">' +
        '<div>' +
          '<div class="gallery-main"><img src="' + active.src + '" alt="' + colorName(id) + '"></div>' +
          '<div class="thumbs">' + thumbs + "</div>" +
        "</div>" +
        '<div class="product-copy">' +
          '<a class="back-link" href="' + backHref + '">' + t(backKey) + "</a>" +
          '<p class="eyebrow">' + t("sig_title") + "</p>" +
          "<h1>" + colorName(id) + "</h1>" +
          '<p class="kind-line">' + t(kindKey) + " · " + t("made_to_order") + "</p>" +
          '<p class="lede" style="margin-inline:0;text-align:start">' + product[window.DEROY.lang()] + "</p>" +
          '<p class="eyebrow" style="margin-top:28px">' + t("details_kicker") + "</p>" +
          '<ul class="details">' +
            "<li>" + t("detail_1") + "</li>" +
            "<li>" + t("detail_2") + "</li>" +
            "<li>" + t("detail_3") + "</li>" +
            "<li>" + t("detail_4") + "</li>" +
          "</ul>" +
          '<div class="reserve"><h2>' + t("reserve_title") + "</h2>" + formBlock + "</div>" +
        "</div>" +
      "</div>";

    document.title = colorName(id) + " — DEROY";

    root.querySelectorAll("[data-shot]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var next = new URLSearchParams(window.location.search);
        next.set("view", btn.getAttribute("data-shot"));
        history.replaceState(null, "", "product.html?" + next.toString());
        renderProduct();
      });
    });

    var form = document.getElementById("reserve-form");
    if (form) form.addEventListener("submit", onReserve);
  }

  function formHtml(t, interest, kept) {
    kept = kept || {};
    var bagSel = (kept.interest || interest) === "bag" ? " selected" : "";
    var setSel = (kept.interest || interest) === "set" ? " selected" : "";
    return (
      '<form id="reserve-form" novalidate>' +
        '<label class="field">' + t("form_name") +
          '<input name="name" type="text" required autocomplete="name" value="' + escapeAttr(kept.name || "") + '" placeholder="' + escapeAttr(t("ph_name")) + '">' +
        "</label>" +
        '<label class="field">' + t("form_email") +
          '<input name="email" type="email" required autocomplete="email" inputmode="email" value="' + escapeAttr(kept.email || "") + '" placeholder="' + escapeAttr(t("ph_email")) + '">' +
        "</label>" +
        '<label class="field">' + t("form_phone") +
          '<input name="phone" type="tel" autocomplete="tel" value="' + escapeAttr(kept.phone || "") + '" placeholder="' + escapeAttr(t("ph_phone")) + '">' +
        "</label>" +
        '<label class="field">' + t("form_interest") +
          '<select name="interest">' +
            '<option value="bag"' + bagSel + ">" + t("opt_bag") + "</option>" +
            '<option value="set"' + setSel + ">" + t("opt_set") + "</option>" +
          "</select>" +
        "</label>" +
        '<label class="field">' + t("form_note") +
          '<textarea name="note" placeholder="' + escapeAttr(t("ph_note")) + '">' + escapeText(kept.note || "") + "</textarea>" +
        "</label>" +
        '<p class="form-error" id="form-error" role="alert"></p>' +
        '<button class="btn btn-dark" type="submit">' + t("form_submit") + "</button>" +
        '<p class="fine">' + t("form_fine") + "</p>" +
      "</form>"
    );
  }

  function chooserHtml(note) {
    var ids = ["stone", "chocolate", "navy", "burgundy"];
    var cards = ids.map(function (id) {
      var product = window.DEROY.products[id];
      return (
        '<a class="pcard" href="product.html?id=' + id + '&view=bag">' +
          '<span class="pcard-media"><img src="' + product.bag + '" alt="' + colorName(id) + '"></span>' +
          '<span class="pcard-name">' + colorName(id) + "</span>" +
          '<span class="pcard-more">' + window.DEROY.t("explore") + "</span>" +
        "</a>"
      );
    }).join("");
    return (
      '<div class="section"><p class="chooser-note">' + note + "</p>" +
      '<div class="grid-2">' + cards + "</div></div>"
    );
  }

  function onReserve(event) {
    event.preventDefault();
    var form = event.currentTarget;
    var error = document.getElementById("form-error");
    var name = form.name.value.trim();
    var email = form.email.value.trim();
    var t = window.DEROY.t;
    if (!name) {
      error.textContent = t("err_name");
      form.name.focus();
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      error.textContent = t("err_email");
      form.email.focus();
      return;
    }
    error.textContent = "";
    var params = new URLSearchParams(window.location.search);
    reserved = { id: params.get("id") };
    renderProduct();
  }

  function escapeAttr(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/"/g, "&quot;")
      .replace(/</g, "&lt;");
  }

  function escapeText(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;");
  }

  document.addEventListener("DOMContentLoaded", function () {
    setupTabs();
    renderProduct();
  });

  document.addEventListener("deroy:lang", function () {
    if (document.getElementById("product-root")) renderProduct();
  });
})();
