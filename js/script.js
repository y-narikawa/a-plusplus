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