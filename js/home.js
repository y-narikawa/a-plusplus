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


function previewImage(obj)
{
    let fileReader = new FileReader()
    
    fileReader.onload = (function() {
        document.getElementById('preview').src = fileReader.result
    })
    fileReader.readAsDataURL(obj.files[0])
}

 //add more input

function addForm() {
  let i = 1 
  let input_data = document.createElement('input')
  input_data.type = 'text'
  input_data.id = 'inputform_' + i
  let parent = document.getElementById('form_area')
  parent.appendChild(input_data)

  let button_data = document.createElement('button')
  button_data.id = i
  button_data.onclick = function(){deleteBtn(this)}
  button_data.innerHTML = '<div class="delete-icon">削除</div> '
  parent.appendChild(button_data)
  i++ 
}

function deleteBtn(target) {
  let target_id = target.id
  let parent = document.getElementById('form_area')
  let ipt_id = document.getElementById('inputform_' + target_id)
  let tgt_id = document.getElementById(target_id)
  parent.removeChild(ipt_id)
  parent.removeChild(tgt_id)
  console.log('m12')
}

// using jquery

// $(function() {
// 	//追加
// 	$('.addformbox').click(function() {
// 		//クローンを変数に格納
// 		var clonecode = $('lisence_bottom:last').clone(true);
// 		console.log(1)
// 		//数字を＋１し変数に格納
// 		var cloneno = clonecode.attr('data-formno');
// 		var cloneno2 = parseInt(cloneno) + 1;
// 		var cloneno3 = parseInt(cloneno) + 2;
//     console.log(2)
// 		//data属性の数字を＋１
// 		clonecode.attr('data-formno',cloneno2);
//     console.log(3)
// 		//数値
// 		clonecode.find('.li_no').html(cloneno3);
//     console.log(4)
// 		//name属性の数字を+1
// 		var namecode = clonecode.find('input.li_text').attr('name');
// 		namecode = namecode.replace(/input\[[0-9]{1,2}/g,'input[' + cloneno2);
// 		clonecode.find('input.li_text').attr('name',namecode);

		
// 		//HTMLに追加
// 		clonecode.insertAfter($('lisence_bottom:last'));
// 	});
	

// 	//削除
// 	$('.deletformbox').click(function() {
// 		//クリックされた削除ボタンの親要素を削除
// 		$(this).parents("lisence_bottom").remove();

// 		var scount = 0;
// 		//番号振り直し
// 		$('lisence_bottom').each(function(){
// 			var scount2 = scount + 1;
		
// 			//data属性の数字
// 			$(this).attr('data-formno',scount);
			
// 			$('.li_no',this).html(scount2);
			
			
// 			//input質問タイトル番号振り直し
// 			var name = $('input.li_text',this).attr('name');
// 			name = name.replace(/input\[[0-9]{1,2}/g,'input[' + scount);
// 			$('input.li_text',this).attr('name',name);

// 			scount += 1;
// 		});
// 	});	
	
// });
