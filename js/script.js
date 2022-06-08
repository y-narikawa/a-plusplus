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
    const targets = document
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

});

// slideToggle
const slideToggle = (el, duration = 300) => {
    if (window.getComputedStyle(el).display === "none") {
        return slideDown(el, duration);
    } else {
        return slideUp(el, duration);
    }
};

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