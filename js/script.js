document.addEventListener("DOMContentLoaded", () => {
  const ua = navigator.userAgent.toLowerCase();
  if (
    ua.indexOf("iphone") > 0 ||
    (ua.indexOf("android") > 0 && ua.indexOf("mobile") > 0)
  ) {
  } else if (
    ua.indexOf("ipad") > -1 ||
    (ua.indexOf("macintosh") > -1 && "ontouchend" in document) ||
    ua.indexOf("android") > 0
  ) {
    let meta = document.createElement("meta");
    meta.setAttribute("name", "viewport");
    meta.setAttribute("content", "width=1366");
    document.getElementsByTagName("head")[0].appendChild(meta);
  }

  if (window.matchMedia("(max-width: 375px)").matches) {
    let meta = document.createElement("meta");
    meta.setAttribute("name", "viewport");
    meta.setAttribute("content", "width=375");
    document.getElementsByTagName("head")[0].appendChild(meta);
  }

  if (
    ua.indexOf("iphone") > 0 ||
    (ua.indexOf("android") > 0 && ua.indexOf("mobile") > 0) ||
    ua.indexOf("ipad") > -1 ||
    (ua.indexOf("macintosh") > -1 && "ontouchend" in document) ||
    ua.indexOf("android") > 0
  ) {
    let touch =
      "ontouchstart" in document.documentElement ||
      navigator.maxTouchPoints > 0 ||
      navigator.msMaxTouchPoints > 0;

    if (touch) {
      try {
        for (var si in document.styleSheets) {
          var styleSheet = document.styleSheets[si];
          if (!styleSheet.rules) continue;

          for (var ri = styleSheet.rules.length - 1; ri >= 0; ri--) {
            if (!styleSheet.rules[ri].selectorText) continue;

            if (styleSheet.rules[ri].selectorText.match(":hover")) {
              styleSheet.deleteRule(ri);
            }
          }
        }
      } catch (ex) {}
    }
  }
});

document.addEventListener("DOMContentLoaded", function () {
  let flag = 0,
    addClass = "js-scroll";

  flag = scroll(flag);

  window.addEventListener("scroll", function () {
    flag = scroll(flag);
  });

  function scroll(flag) {
    let wt = window.scrollY;
    if (flag == 0 && wt > 0) {
      flag = 1;
      document.body.classList.add(addClass);
    } else if (flag == 1 && wt <= 0) {
      flag = 0;
      document.body.classList.remove(addClass);
    }
    return flag;
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const addTglEvent = (item) => {
    const trigger = item.querySelector(".tgl-switch");
    const contents = item.querySelectorAll(".tgl-content");
    const active = "-active";

    trigger.addEventListener("click", () => {
      contents.forEach((e) => {
        if (e.classList.contains(active)) {
          e.classList.remove(active);
          trigger.classList.remove(active);
          slideUp(e);
        } else {
          e.classList.add(active);
          trigger.classList.add(active);
          slideDown(e);
        }
      });
    });
  };

  const tglItems = document.querySelectorAll(".tgl-wrap");

  tglItems.forEach((item) => {
    addTglEvent(item);
  });

  if (matchMedia("(max-width: 768px)").matches) {
    const spTgl = document.querySelectorAll(".sp-tgl-wrap");

    spTgl.forEach((item) => {
      addTglEvent(item);
    });
  }

  // Modal
  const openBtn = document.querySelector(".openbtn");
  const headerModal = document.querySelector(".header-modal");
  openBtn.addEventListener("click", () => {
    openBtn.classList.toggle("active");
    headerModal.classList.toggle("-active");
  });

  //  smooth scroll
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  const anchorLinksArr = Array.prototype.slice.call(anchorLinks);

  anchorLinksArr.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.hash;
      const targetElement = document.querySelector(targetId);
      const targetOffsetTop =
        window.pageYOffset + targetElement.getBoundingClientRect().top;
      window.scrollTo({
        top: targetOffsetTop,
        behavior: "smooth",
      });
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const target = document.querySelector(".c-search-box-modal");
  const buttons = document.querySelectorAll(".search-box__open-button");
  const close = document.querySelectorAll(".serch-box__close-button");

  buttons.forEach((e) => {
    e.addEventListener("click", () => {
      target.classList.toggle("-active");
    });
  });

  close.forEach((e) => {
    e.addEventListener("click", () => {
      target.classList.remove("-active");
    });
  });
});

// slideUp
const slideUp = (el, duration = 300) => {
  el.style.height = el.offsetHeight + "px";
  el.offsetHeight;
  el.style.transitionProperty = "height, margin, padding";
  el.style.transitionDuration = duration + "ms";
  el.style.transitionTimingFunction = "ease";
  el.style.overflow = "hidden";
  el.style.height = 0;
  el.style.paddingTop = 0;
  el.style.paddingBottom = 0;
  el.style.marginTop = 0;
  el.style.marginBottom = 0;
  setTimeout(() => {
    el.style.display = "none";
    el.style.removeProperty("height");
    el.style.removeProperty("padding-top");
    el.style.removeProperty("padding-bottom");
    el.style.removeProperty("margin-top");
    el.style.removeProperty("margin-bottom");
    el.style.removeProperty("overflow");
    el.style.removeProperty("transition-duration");
    el.style.removeProperty("transition-property");
    el.style.removeProperty("transition-timing-function");
  }, duration);
};

// slideDown
const slideDown = (el, duration = 300) => {
  el.style.removeProperty("display");
  let display = window.getComputedStyle(el).display;
  if (display === "none") {
    display = "block";
  }
  el.style.display = display;
  let height = el.offsetHeight;
  el.style.overflow = "hidden";
  el.style.height = 0;
  el.style.paddingTop = 0;
  el.style.paddingBottom = 0;
  el.style.marginTop = 0;
  el.style.marginBottom = 0;
  el.offsetHeight;
  el.style.transitionProperty = "height, margin, padding";
  el.style.transitionDuration = duration + "ms";
  el.style.transitionTimingFunction = "ease";
  el.style.height = height + "px";
  el.style.removeProperty("padding-top");
  el.style.removeProperty("padding-bottom");
  el.style.removeProperty("margin-top");
  el.style.removeProperty("margin-bottom");
  setTimeout(() => {
    el.style.removeProperty("height");
    el.style.removeProperty("overflow");
    el.style.removeProperty("transition-duration");
    el.style.removeProperty("transition-property");
    el.style.removeProperty("transition-timing-function");
  }, duration);
};

// slideToggle
const slideToggle = (el, duration = 300) => {
  if (window.getComputedStyle(el).display === "none") {
    return slideDown(el, duration);
  } else {
    return slideUp(el, duration);
  }
};

//userinfo
document.getElementById("submit").onclick = function() {
  const user_id = document.getElementById("user_id").value;
  const password = document.getElementById("password").value;
  const password2 = document.getElementById("password2").value;
  const famliy_name = document.getElementById("famliy_name").value;
  const givin_name = document.getElementById("givin_name").value;
  const birthday = document.getElementById("birthday").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;

  let flag = 0;
    if(user_id.length == 0) flag = 1;
    if(password.length == 0) flag = 1; 
    if(password2.length == 0) flag = 1;
    if(famliy_name.length == 0) flag = 1;
    if(givin_name.length == 0) flag = 1; 
    if(birthday.length == 0) flag = 1; 
    if(email.length == 0) flag = 1; 
    if(phone.length == 0) flag = 1; 
    if(flag == 1){ alert('必須項目が未記入の箇所があります'); }
};

//checkbox
// const consent_chk = document.querySelector(`#consent-chk`);
// const submit_btn = document.querySelector(`input[type=submit]`);

// consent_chk.addEventListener('change', () => { 
//   if (consent_chk.checked === true) {
//     submit_btn.disabled = false;
//   } else {
//     submit_btn.disabled = true;
//   }
// });

//image preview

function previewFile(file) {
  const preview = document.getElementById('preview');
  const reader = new FileReader();

  reader.onload = function (e) {
    const imageUrl = e.target.result; 
    const img = document.createElement("img"); 
    img.src = imageUrl; 
    preview.appendChild(img); 
  }

  reader.readAsDataURL(file);
}
const fileInput = document.getElementById('example');
const handleFileSelect = () => {
  const files = fileInput.files;
  for (let i = 0; i < files.length; i++) {
    previewFile(files[i]);
  }
}
fileInput.addEventListener('change', handleFileSelect);