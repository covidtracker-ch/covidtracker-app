(this["webpackJsonpct-app-ionic"]=this["webpackJsonpct-app-ionic"]||[]).push([[2],{178:function(t,e,n){"use strict";n.r(e),n.d(e,"startInputShims",(function(){return y}));var r=n(2),o=n.n(r),a=n(3),i=n(21),c=new WeakMap,u=function(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;c.has(t)!==n&&(n?l(t,e,r):d(t,e))},s=function(t){return t===t.getRootNode().activeElement},l=function(t,e,n){var r=e.parentNode,o=e.cloneNode(!1);o.classList.add("cloned-input"),o.tabIndex=-1,r.appendChild(o),c.set(t,o);var a="rtl"===t.ownerDocument.dir?9999:-9999;t.style.pointerEvents="none",e.style.transform="translate3d(".concat(a,"px,").concat(n,"px,0) scale(0)")},d=function(t,e){var n=c.get(t);n&&(c.delete(t),n.remove()),t.style.pointerEvents="",e.style.transform=""},f=function(t,e,n){if(!n||!e)return function(){};var r=function(n){s(e)&&u(t,e,n)},o=function(){return u(t,e,!1)},a=function(){return r(!0)},i=function(){return r(!1)};return n.addEventListener("ionScrollStart",a),n.addEventListener("ionScrollEnd",i),e.addEventListener("blur",o),function(){n.removeEventListener("ionScrollStart",a),n.removeEventListener("ionScrollEnd",i),e.addEventListener("ionBlur",o)}},v="input, textarea, [no-blur]",p=function(t,e,n,r){var o=t.top,a=t.bottom,i=e.top,c=i+15,u=.5*Math.min(e.bottom,r-n)-a,s=c-o,l=Math.round(u<0?-u:s>0?-s:0),d=Math.min(l,o-i),f=Math.abs(d)/.3;return{scrollAmount:d,scrollDuration:Math.min(400,Math.max(150,f)),scrollPadding:n,inputSafeY:4-(o-c)}},m=function(t,e,n,r){var o,a=function(t){o=Object(i.j)(t)},c=function(a){if(o){var c=Object(i.j)(a);h(6,o,c)||s(e)||(a.preventDefault(),a.stopPropagation(),E(t,e,n,r))}};return t.addEventListener("touchstart",a,!0),t.addEventListener("touchend",c,!0),function(){t.removeEventListener("touchstart",a,!0),t.removeEventListener("touchend",c,!0)}},E=function(t,e,n,r){var i=function(t,e,n){var r=t.closest("ion-item,[ion-item]")||t;return p(r.getBoundingClientRect(),e.getBoundingClientRect(),n,t.ownerDocument.defaultView.innerHeight)}(t,n,r);if(Math.abs(i.scrollAmount)<4)e.focus();else if(u(t,e,!0,i.inputSafeY),e.focus(),"undefined"!==typeof window){var c,s=function(){var r=Object(a.a)(o.a.mark((function r(){return o.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return void 0!==c&&clearTimeout(c),window.removeEventListener("resize",s),r.next=4,n.scrollByPoint(0,i.scrollAmount,i.scrollDuration);case 4:u(t,e,!1,i.inputSafeY),e.focus();case 6:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}();window.addEventListener("resize",s),c=setTimeout(s,1e3)}},h=function(t,e,n){if(e&&n){var r=e.x-n.x,o=e.y-n.y;return r*r+o*o>t*t}return!1},g=function(t,e){if("INPUT"===t.tagName&&(!t.parentElement||"ION-INPUT"!==t.parentElement.tagName)&&(!t.parentElement||!t.parentElement.parentElement||"ION-SEARCHBAR"!==t.parentElement.parentElement.tagName)){var n=t.closest("ion-content");if(null!==n){var r=n.$ionPaddingTimer;r&&clearTimeout(r),e>0?n.style.setProperty("--keyboard-offset","".concat(e,"px")):n.$ionPaddingTimer=setTimeout((function(){n.style.setProperty("--keyboard-offset","0px")}),120)}}},y=function(t){var e=document,n=t.getNumber("keyboardHeight",290),r=t.getBoolean("scrollAssist",!0),i=t.getBoolean("hideCaretOnScroll",!0),c=t.getBoolean("inputBlurring",!0),u=t.getBoolean("scrollPadding",!0),s=Array.from(e.querySelectorAll("ion-input, ion-textarea")),l=new WeakMap,d=new WeakMap,p=function(){var t=Object(a.a)(o.a.mark((function t(e){var a,c,u,s,v;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.componentOnReady){t.next=3;break}return t.next=3,e.componentOnReady();case 3:if(a=e.shadowRoot||e,c=a.querySelector("input")||a.querySelector("textarea"),u=e.closest("ion-content"),c){t.next=8;break}return t.abrupt("return");case 8:u&&i&&!l.has(e)&&(s=f(e,c,u),l.set(e,s)),u&&r&&!d.has(e)&&(v=m(e,c,u,n),d.set(e,v));case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();c&&function(){var t=!0,e=!1,n=document,r=function(){e=!0},o=function(){t=!0},a=function(r){if(e)e=!1;else{var o=n.activeElement;if(o&&!o.matches(v)){var a=r.target;a!==o&&(a.matches(v)||a.closest(v)||(t=!1,setTimeout((function(){t||o.blur()}),50)))}}};n.addEventListener("ionScrollStart",r),n.addEventListener("focusin",o,!0),n.addEventListener("touchend",a,!1)}(),u&&function(t){var e=document,n=function(e){g(e.target,t)},r=function(t){g(t.target,0)};e.addEventListener("focusin",n),e.addEventListener("focusout",r)}(n);for(var E=0,h=s;E<h.length;E++){var y=h[E];p(y)}e.addEventListener("ionInputDidLoad",(function(t){p(t.detail)})),e.addEventListener("ionInputDidUnload",(function(t){!function(t){if(i){var e=l.get(t);e&&e(),l.delete(t)}if(r){var n=d.get(t);n&&n(),d.delete(t)}}(t.detail)}))}}}]);
//# sourceMappingURL=2.2d91a75c.chunk.js.map