document.addEventListener("DOMContentLoaded", () => {
    const ua = navigator.userAgent.toLowerCase();
    if (
        ua.indexOf("iphone") > 0 ||
        (ua.indexOf("android") > 0 && ua.indexOf("mobile") > 0)
    ) {} else if (
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


document.addEventListener("DOMContentLoaded", () => {
    const targets = document
        .querySelector(".occupation")
        .querySelectorAll(".tgl-wrap");

    const spTgl = document.querySelectorAll(".sp-tgl-wrap");

    const addTglEvent = (item) => {
        const active = "-active";
        const trigger = item.querySelector(".tgl-switch");
        const thisItem = item.querySelector(".tgl-content");

        trigger.addEventListener("click", (el) => {
            targets.forEach((t) => {
                if (t !== item) {
                    t.querySelector(".tgl-switch").classList.remove(active);
                    const content = t.querySelector(".tgl-content");
                    content.classList.remove(active);
                    slideUp(content);
                }
            });

            trigger.classList.toggle(active);
            thisItem.classList.toggle(active);
            slideToggle(thisItem);
        });
    };

    targets.forEach((item) => {
        addTglEvent(item);
    });

    if (matchMedia("(max-width: 768px)").matches) {
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
