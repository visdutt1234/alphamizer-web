WebFont.load({  google: {    families: ["Montserrat:100,100italic,200,200italic,300,300italic,400,400italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic","Varela:400","Merriweather:300,300italic,400,400italic,700,700italic,900,900italic","Inter:300,regular,500,600","Libre Baskerville:regular,700"]  }});

!function(o,c){var n=c.documentElement,t=" w-mod-";n.className+=t+"js",("ontouchstart"in o||o.DocumentTouch&&c instanceof DocumentTouch)&&(n.className+=t+"touch")}(window,document);

window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('set', 'developer_id.dZGVlNj', true);gtag('config', 'G-X5BBEMK7JT');


const openModal = document.querySelectorAll('.js-open-modal');
const modal = document.querySelector('#modal-free-trial');
const body = document.querySelector('body');

const closeModal = document.querySelector('#close-modal');

for (var i = 0; i < openModal.length; i++) {
    openModal[i].addEventListener('click', function(event) {
        modal.style.display = "block";
        body.style.overflow = 'hidden'
    });
}
if (closeModal) {
	closeModal.addEventListener('click', function(){
    modal.style.display = 'none';
    body.style.overflow = 'auto'
  });
}

setTimeout(() => {
  if (window.location.href.indexOf("#request-demo") > -1) {
  	const requestDemoButton = $('#request-demo-button');
    console.log('opening demo modal', requestDemoButton);
    if (requestDemoButton) {
    	requestDemoButton.click();
    }
    
  }
}, 1000);


/*
const burger = document.querySelector('#nav-icon');
const navOverlay = document.getElementById('#w-nav-overlay-0');

burger.addEventListener('click', function(){
	burger.classList.toggle("open");
});*/


/*navOverlay?.addEventListener('click', function(){
	burger.classList.remove("open");
});*/

/*
$(function() {
  $("#nav-icon").on("click", function(e) {
    $("#nav-icon").toggleClass("open");
    e.stopPropagation()
  });
  $(document).on("click", function(e) {
    if ($(e.target).is("#nav-icon") === false) {
      $("#nav-icon").toggleClass("open");
    }
  });
});*/





const openModal = document.querySelectorAll('.js-open-modal');
const modal = document.querySelector('#modal-free-trial');
const body = document.querySelector('body');

const closeModal = document.querySelector('#close-modal');

for (var i = 0; i < openModal.length; i++) {
    openModal[i].addEventListener('click', function(event) {
        modal.style.display = "block";
        body.style.overflow = 'hidden'
    });
}
if (closeModal) {
	closeModal.addEventListener('click', function(){
    modal.style.display = 'none';
    body.style.overflow = 'auto'
  });
}

setTimeout(() => {
  if (window.location.href.indexOf("#request-demo") > -1) {
  	const requestDemoButton = $('#request-demo-button');
    console.log('opening demo modal', requestDemoButton);
    if (requestDemoButton) {
    	requestDemoButton.click();
    }
    
  }
}, 1000);


/*
const burger = document.querySelector('#nav-icon');
const navOverlay = document.getElementById('#w-nav-overlay-0');

burger.addEventListener('click', function(){
	burger.classList.toggle("open");
});*/


/*navOverlay?.addEventListener('click', function(){
	burger.classList.remove("open");
});*/

/*
$(function() {
  $("#nav-icon").on("click", function(e) {
    $("#nav-icon").toggleClass("open");
    e.stopPropagation()
  });
  $(document).on("click", function(e) {
    if ($(e.target).is("#nav-icon") === false) {
      $("#nav-icon").toggleClass("open");
    }
  });
});*/





      	document.addEventListener('keyup', (event) => {
        	if (event.keyCode === 27) {
            $('.modal-trial-trigger-close').click();
            $('.modal-contact-trigger-close').click();
       		}
        });
 


  window.__lc = window.__lc || {};
  window.__lc.license = 15366033;
  ;(function(n,t,c){function i(n){return e._h?e._h.apply(null,n):e._q.push(n)};
  var e={_q:[],_h:null,_v:"2.0",on:function(){i(["on",c.call(arguments)])},once:function(){
  i(["once",c.call(arguments)])},off:function(){i(["off",c.call(arguments)])},
  get:function(){if(!e._h)throw new Error("[LiveChatWidget] You can't use getters before load.");
  return i(["get",c.call(arguments)])},call:function(){i(["call",c.call(arguments)])},init:function(){
  var n=t.createElement("script");
  n.async=!0,n.type="text/javascript",
  n.src="https://cdn.livechatinc.com/tracking.js",t.head.appendChild(n)}};
  !n.__lc.asyncInit&&e.init(),n.LiveChatWidget=n.LiveChatWidget||e}(window,document,[].slice))
