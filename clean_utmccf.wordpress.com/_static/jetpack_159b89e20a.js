(()=>{var t={14:(t,e,i)=>{"use strict";i.d(e,{Z:()=>u});var n=i(191),o=i.n(n),s=i(261),r=i.n(s),a=i(160),d=i.n(a),l=new URL(i(240),i.b),c=r()(o()),h=d()(l);c.push([t.id,`.wordads-ad-wrapper {\n    position: static;\n    font: 11px Arial, sans-serif;\n    letter-spacing: 1px;\n    text-decoration: none;\n    max-width: 100%;\n    margin: 25px auto;\n    padding: 0;\n    display: flex;\n    justify-content: center;\n}\n\n.wordads-ad-wrapper--sidebar,\n.wordads-ad-wrapper--gutenberg_skyscraper,\n.wordads-ad-wrapper--gutenberg_mobile_leaderboard {\n    font-size: 8px;\n}\n\n.wordads-ad-title {\n    margin: 0 auto 5px\n}\n\n.wordads-ad-controls {\n    margin: 5px auto 0;\n    text-align: right\n}\n\n/* Hide title and controls initially */\n.wordads-ad-title,\n.wordads-ad-controls {\n    visibility: hidden;\n}\n\n.wordads-ad-controls span {\n    cursor: pointer\n}\n\n.wordads-ad {\n    margin: 0 auto;\n    width: fit-content;\n    max-width: 100%;\n    overflow: hidden;\n}\n\n.wordads-ad iframe {\n    margin: 0;\n    padding: 0\n}\n\n.wordads-ad.wordads-ad-responsive {\n    width: 100%;\n    max-width: unset\n}\n\n.wordads-ad-sticky-wrapper {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin: auto;\n    position: fixed;\n    transition: transform .2s ease-in-out;\n    user-select: none;\n    padding: 5px 0;\n    z-index: 49999\n}\n.wordads-ad-wrapper--bottom_sticky.wordads-ad-sticky-wrapper {\n    right: 0;\n    left: 0;\n    bottom: 0;\n    background: #f1f1f1;\n    transform: translate(0, 0);\n}\n.wordads-ad-wrapper--sidebar_sticky_right.wordads-ad-sticky-wrapper {\n    width: fit-content;\n    min-width: 120px;\n    top: max(calc(var(--wp-admin--admin-bar--height, 0px) + 24px), 10%);\n    right: 20px;\n}\n\n.wordads-ad-wrapper--sidebar_sticky_right .wordads-ad-content {\n    border: 1px solid #f1f1f1;\n}\n\n.wordads-ad-sticky-close-btn {\n    width: 28px;\n    height: 28px;\n    position: absolute;\n    box-sizing: content-box;\n    cursor: pointer;\n    overflow: hidden;\n    background-size: 28px;\n    background-repeat: no-repeat;\n    background-position: center;\n    background-image: url(${h})\n}\n\n.wordads-ad-wrapper--bottom_sticky .wordads-ad-sticky-close-btn {\n    top: -14px;\n    left: .75rem;\n}\n\n.wordads-ad-wrapper--sidebar_sticky_right .wordads-ad-sticky-close-btn {\n    top: -14px;\n    right: 0;\n}\n\n.wordads-ad-sticky {\n    width: auto;\n    max-width: initial;\n    max-height: inherit;\n}\n\n.wordads-ad-sticky .wordads-ad-title,\n.wordads-ad-sticky .wordads-ad-controls {\n    color: #333\n}\n\n.wordads-ad-hidden {\n\tvisibility: hidden !important;\n\tposition: absolute !important;\n\tpointer-events: none !important;\n\twidth: 0 !important;\n\theight: 0 !important;\n\toverflow: hidden !important;\n\tclip: rect(0 0 0 0) !important;\n}\n\n.wordads-ad-wrapper--bottom_sticky.wordads-ad-hidden {\n    transform: translate(0, 1000px);\n}\n\n.google-auto-placed {\n    height: 0px !important;\n}\n\nins.adsbygoogle::before,\nins.adsbygoogle::after {\n    visibility: hidden !important;\n}\n\nins.adsbygoogle {\n    background: transparent;\n    padding: 0 !important;\n}`,""]);const u=c},261:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var i="",n=void 0!==e[5];return e[4]&&(i+="@supports (".concat(e[4],") {")),e[2]&&(i+="@media ".concat(e[2]," {")),n&&(i+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),i+=t(e),n&&(i+="}"),e[2]&&(i+="}"),e[4]&&(i+="}"),i})).join("")},e.i=function(t,i,n,o,s){"string"==typeof t&&(t=[[null,t,void 0]]);var r={};if(n)for(var a=0;a<this.length;a++){var d=this[a][0];null!=d&&(r[d]=!0)}for(var l=0;l<t.length;l++){var c=[].concat(t[l]);n&&r[c[0]]||(void 0!==s&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=s),i&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=i):c[2]=i),o&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=o):c[4]="".concat(o)),e.push(c))}},e}},160:t=>{"use strict";t.exports=function(t,e){return e||(e={}),t?(t=String(t.__esModule?t.default:t),/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]|(%20)/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t):t}},191:t=>{"use strict";t.exports=function(t){return t[1]}},546:function(t){t.exports=function(){"use strict";function t(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)t[n]=i[n]}return t}return function e(i,n){function o(e,o,s){if("undefined"!=typeof document){"number"==typeof(s=t({},n,s)).expires&&(s.expires=new Date(Date.now()+864e5*s.expires)),s.expires&&(s.expires=s.expires.toUTCString()),e=encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var r="";for(var a in s)s[a]&&(r+="; "+a,!0!==s[a]&&(r+="="+s[a].split(";")[0]));return document.cookie=e+"="+i.write(o,e)+r}}return Object.create({set:o,get:function(t){if("undefined"!=typeof document&&(!arguments.length||t)){for(var e=document.cookie?document.cookie.split("; "):[],n={},o=0;o<e.length;o++){var s=e[o].split("="),r=s.slice(1).join("=");try{var a=decodeURIComponent(s[0]);if(n[a]=i.read(r,a),t===a)break}catch(t){}}return t?n[t]:n}},remove:function(e,i){o(e,"",t({},i,{expires:-1}))},withAttributes:function(i){return e(this.converter,t({},this.attributes,i))},withConverter:function(i){return e(t({},this.converter,i),this.attributes)}},{attributes:{value:Object.freeze(n)},converter:{value:Object.freeze(i)}})}({read:function(t){return'"'===t[0]&&(t=t.slice(1,-1)),t.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(t){return encodeURIComponent(t).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"})}()},462:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>S});var n=i(157),o=i.n(n),s=i(869),r=i.n(s),a=i(318),d=i.n(a),l=i(825),c=i.n(l),h=i(597),u=i.n(h),g=i(770),p=i.n(g),m=i(14),f={};f.styleTagTransform=p(),f.setAttributes=c(),f.insert=d().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=u(),o()(m.Z,f);const S=m.Z&&m.Z.locals?m.Z.locals:void 0},157:t=>{"use strict";var e=[];function i(t){for(var i=-1,n=0;n<e.length;n++)if(e[n].identifier===t){i=n;break}return i}function n(t,n){for(var s={},r=[],a=0;a<t.length;a++){var d=t[a],l=n.base?d[0]+n.base:d[0],c=s[l]||0,h="".concat(l," ").concat(c);s[l]=c+1;var u=i(h),g={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)e[u].references++,e[u].updater(g);else{var p=o(g,n);n.byIndex=a,e.splice(a,0,{identifier:h,updater:p,references:1})}r.push(h)}return r}function o(t,e){var i=e.domAPI(e);return i.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;i.update(t=e)}else i.remove()}}t.exports=function(t,o){var s=n(t=t||[],o=o||{});return function(t){t=t||[];for(var r=0;r<s.length;r++){var a=i(s[r]);e[a].references--}for(var d=n(t,o),l=0;l<s.length;l++){var c=i(s[l]);0===e[c].references&&(e[c].updater(),e.splice(c,1))}s=d}}},318:t=>{"use strict";var e={};t.exports=function(t,i){var n=function(t){if(void 0===e[t]){var i=document.querySelector(t);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(t){i=null}e[t]=i}return e[t]}(t);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(i)}},597:t=>{"use strict";t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},825:(t,e,i)=>{"use strict";t.exports=function(t){var e=i.nc;e&&t.setAttribute("nonce",e)}},869:t=>{"use strict";t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(i){!function(t,e,i){var n="";i.supports&&(n+="@supports (".concat(i.supports,") {")),i.media&&(n+="@media ".concat(i.media," {"));var o=void 0!==i.layer;o&&(n+="@layer".concat(i.layer.length>0?" ".concat(i.layer):""," {")),n+=i.css,o&&(n+="}"),i.media&&(n+="}"),i.supports&&(n+="}");var s=i.sourceMap;s&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),e.styleTagTransform(n,t,e.options)}(e,t,i)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},770:t=>{"use strict";t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}},12:function(t,e,i){"use strict";var n=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});const o=n(i(202));i(462),e.default=class{constructor(){this.listenersController=new AbortController,this.signal=this.listenersController.signal,this.consent=new o.default}getConsent(){return this.consent}getListenersController(){return this.listenersController}init(t){t.preInit(),this.signal.onabort=()=>t.log("Event listeners removed"),document.addEventListener("scroll",t.throttle((()=>{t.processAds()}),250),{signal:this.signal}),document.addEventListener("resize",t.throttle((()=>{t.processAds()}),250),{signal:this.signal}),window.addEventListener("message",(e=>{t.handlePostMessage(e)}),{signal:this.signal})}}},501:(t,e,i)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getSortedSlotSizes=e.getFormatBySizes=e.getFilteredSlotSizesByWidthAndHeight=e.getFilteredSlotSizesByWidth=e.MAX_INLINE_BLAZE_SLOTS=e.MAX_INLINE_SLOTS=void 0;const n=i(639);e.MAX_INLINE_SLOTS=40,e.MAX_INLINE_BLAZE_SLOTS=20,e.getFilteredSlotSizesByWidth=(t,e)=>(s[t]||[]).filter((([t])=>t<=e)),e.getFilteredSlotSizesByWidthAndHeight=(t,e,i)=>(s[t]||[]).filter((([t,n])=>t<=e&&n<=i));const o=document.documentElement.clientWidth<800,s=Object.freeze({[n.SlotType.TOP]:o?[[320,50]]:[[970,250],[970,90],[728,90]],[n.SlotType.INLINE]:o?[[300,250],[320,50]]:[[970,250],[728,90],[300,250]],[n.SlotType.BELOW_POST]:o?[[300,250]]:[[300,250],[728,90]],[n.SlotType.BOTTOM_STICKY]:o?[[320,50],[468,60]]:[[728,90],[970,90]],[n.SlotType.SIDEBAR]:o?[[120,600],[160,600],[300,250],[300,400],[300,600]]:[[120,600],[160,600],[300,600]],[n.SlotType.SIDEBAR_STICKY_RIGHT]:o?[]:[[120,600],[160,600],[300,250],[300,600],[400,600]],[n.SlotType.GUTENBERG_RECTANGLE]:[[300,250]],[n.SlotType.GUTENBERG_LEADERBOARD]:[[728,90]],[n.SlotType.GUTENBERG_MOBILE_LEADERBOARD]:[[320,50]],[n.SlotType.GUTENBERG_SKYSCRAPER]:[[160,600]],[n.SlotType.SIDEBAR_WIDGET_MEDIUMRECTANGLE]:[[300,250]],[n.SlotType.SIDEBAR_WIDGET_LEADERBOARD]:[[728,90]],[n.SlotType.SIDEBAR_WIDGET_WIDESKYSCRAPER]:[[160,600]],[n.SlotType.SHORTCODE]:[[300,250]]});e.getFormatBySizes=(t,e)=>{for(const[i,o]of Object.entries(s))if(![n.SlotType.TOP,n.SlotType.BOTTOM_STICKY,n.SlotType.SIDEBAR,n.SlotType.SIDEBAR_STICKY_RIGHT,n.SlotType.SIDEBAR_WIDGET_MEDIUMRECTANGLE,n.SlotType.SIDEBAR_WIDGET_LEADERBOARD,n.SlotType.SIDEBAR_WIDGET_WIDESKYSCRAPER,n.SlotType.SIDEBAR_WIDGET_WIDESKYSCRAPER,n.SlotType.INLINE,n.SlotType.SHORTCODE,n.SlotType.BELOW_POST].includes(i)&&o.some((([i,n])=>i===t&&n===e)))return i;return null},e.getSortedSlotSizes=t=>s[t].sort(((t,e)=>{const i=e[0]-t[0];return 0!==i?i:e[1]-t[1]}))},586:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.SMART_NETWORK_ID=void 0,e.SMART_NETWORK_ID=3905},605:function(t,e,i){"use strict";var n=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});const o=n(i(12)),s=n(i(649)),r=new o.default,a=new s.default(r.getConsent(),r.getListenersController());r.init(a)},649:function(t,e,i){"use strict";var n=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});const o=n(i(539)),s=i(586);class r extends o.default{constructor(t,e){super(t,e),this.config={}}insertAdBefore(t,e,i,n=0,o){if(this.getMaxBlazeSlots()>n){if(!this.shouldShowInlineAds())return;const n=this.getRandomTagId(),s=this.createAdSnippet(n),r=this.wrapSnippet(s,e);t.insertAdjacentElement("beforebegin",r),this.slots.push({tagId:n,formatId:o,type:e,sizes:i,element:r,isLazy:!0}),this.trackStat("render_inline")}else{let i=document.createElement("div");i.className="wordads-ad-wrapper",t.insertAdjacentElement("beforebegin",i),this.insertFallbackAd(i,e),this.trackStat("render_inline_fallback")}}convertSlotToEvent(t,e){var i;return{tagId:t.tagId,formatId:t.formatId,isSafe:!(null===(i=null==e?void 0:e.IsSafe)||void 0===i||!i),adNetwork:"Smart"}}getTarget(t){if(!t.length)return this.config.target;const e=this.config.target.split(";");let i=0,n=0;return t.forEach((([t,e])=>{t>i&&(i=t),e>n&&(n=e)})),i&&e.push(`max_width=${i}`),n&&e.push(`max_height=${n}`),e.join(";")}getAdFlowRequestBody(t){const e={timestamp:Date.now(),networkId:this.config.network_id,siteId:this.config.site_id,pageId:this.config.page_id,content_source_id:this.config.blog_id,wp_post_id:this.config.post_id,getAdContent:!0,ads:[{formatId:t.formatId,tagId:t.tagId,target:this.getTarget(t.sizes),isLazy:!1}],gdpr:!1,pageUrl:window.location.href,uid:this.consent.getOrCreateUID()};return this.consent.usPrivacy&&(e.us_privacy=this.consent.usPrivacy),this.consent.tcData&&(e.gdpr=!0,e.gdpr_consent=this.consent.tcData.tcString),e}shouldShowInlineAds(){var t,e;return!(!(null===(t=this.config.inline)||void 0===t?void 0:t.enabled)||!(null===(e=this.config.inline)||void 0===e?void 0:e.format_id))}getMaxSlots(){var t,e,i;return null!==(i=null===(e=null===(t=this.config)||void 0===t?void 0:t.inline)||void 0===e?void 0:e.max_slots)&&void 0!==i?i:0}getMaxBlazeSlots(){var t,e,i;return null!==(i=null===(e=null===(t=this.config)||void 0===t?void 0:t.inline)||void 0===e?void 0:e.max_blaze_slots)&&void 0!==i?i:0}getInlineFormatId(){var t,e;return null===(e=null===(t=this.config)||void 0===t?void 0:t.inline)||void 0===e?void 0:e.format_id}getBottomStickyFormatId(){var t,e;return null===(e=null===(t=this.config)||void 0===t?void 0:t.bottom_sticky)||void 0===e?void 0:e.format_id}shouldShowBottomStickyAds(){var t;return!!(null===(t=this.config.bottom_sticky)||void 0===t?void 0:t.enabled)}shouldShowSidebarStickyRightAds(){var t;return!!(null===(t=this.config.sidebar_sticky_right)||void 0===t?void 0:t.enabled)}getSidebarStickyRightFormatId(){var t,e;return null===(e=null===(t=this.config)||void 0===t?void 0:t.sidebar_sticky_right)||void 0===e?void 0:e.format_id}shouldShowTopAds(){var t;return!!(null===(t=this.config.top)||void 0===t?void 0:t.enabled)}isSlotTypeEnabled(t){var e;return!!(null===(e=this.config[t])||void 0===e?void 0:e.enabled)}getSlotFormatId(t){var e,i;return null!==(i=null===(e=this.config[t])||void 0===e?void 0:e.format_id)&&void 0!==i?i:null}getFormat(t){return t.formatId}checkBrandSafety(t,e){t.hasOwnProperty("isSafe")&&(t.isSafe?(this.logSlot(e,"requesting fallback"),this.insertFallbackAd(e.element,e.type)):this.listenersController.abort())}getLibrariesToFetch(){return{smart:{loaded:!1,url:"https://ced.sascdn.com/tag/3905/smart.js",isInitialized:()=>void 0!==window.sas,init:()=>{window.sas={cmd:[]}}}}}handleNoAdWithSmart(){window.sas.cmd.push((()=>{window.sas.events.on("noad",(t=>{this.handleNoAd(Object.assign(Object.assign({},t),{adNetwork:"Smart"}))}))}))}initAdNetwork(){this.log("Initializing Smart"),window.sas.cmd.push((()=>{window.sas.setup({networkid:s.SMART_NETWORK_ID,domain:"https://www15.smartadserver.com",async:!0})})),this.handleNoAdWithSmart(),window.sas.cmd.push((()=>{window.sas.events.on("ad",(t=>{this.handleAd(Object.assign(Object.assign({},t),{adNetwork:"Smart"}))}))})),this.sendAdflowWarmUpRequest()}sendAdflowWarmUpRequest(){if(!this.config.is_wordads)return;const t=new XMLHttpRequest,e=window.location.href,i="https://af.pubmine.com/ipw?page-url="+encodeURIComponent(e);t.open("GET",i,!0),t.setRequestHeader("Accept","application/json"),t.onreadystatechange=()=>{if(t.readyState===XMLHttpRequest.DONE){const e=t.status>=200&&t.status<=204?"successful":"failed with";this.log(`Warm up request ${e}: ${t.status}, ${t.responseText}`)}},this.log("Calling Adflow for Warmup"),t.send()}mergeConfig(){var t;window.isWatlV1=!0,this.config=this.getServerConfig(),this.log("Merged config:"),this.log(null!==(t=this.config)&&void 0!==t?t:{})}handleAdResponse(t,e){const i=t[e.tagId],n=i&&!i.hasOwnProperty("ScriptNoAd");if(n){let t=document.createElement("script");t.type=i.ContentType,t.innerHTML=i.Content,document.body.appendChild(t)}else{if(i&&i.hasOwnProperty("ScriptNoAd")){let t=new XMLHttpRequest;t.open("GET",i.ScriptNoAd),t.send()}const t=this.convertSlotToEvent(e,i);window.sas.events.fire("noad",t,e.tagId)}this.trackAdFlowRequestLatency(n,e.tagId,e.type)}handleNotOkayResponse(t,e){204!==t&&window.sas.events.fire("noad",this.convertSlotToEvent(e),e.tagId),super.handleNotOkayResponse(t,e)}}e.default=r},313:(t,e)=>{"use strict";var i;Object.defineProperty(e,"__esModule",{value:!0}),e.ScrollDirection=void 0,function(t){t.UP="up",t.DOWN="down"}(i||(e.ScrollDirection=i={}))},639:(t,e)=>{"use strict";var i;Object.defineProperty(e,"__esModule",{value:!0}),e.StickySlotTypes=e.SlotType=void 0,function(t){t.TOP="top",t.INLINE="inline",t.BELOW_POST="belowpost",t.BOTTOM_STICKY="bottom_sticky",t.SIDEBAR="sidebar",t.SIDEBAR_STICKY_RIGHT="sidebar_sticky_right",t.GUTENBERG_RECTANGLE="gutenberg_rectangle",t.GUTENBERG_LEADERBOARD="gutenberg_leaderboard",t.GUTENBERG_MOBILE_LEADERBOARD="gutenberg_mobile_leaderboard",t.GUTENBERG_SKYSCRAPER="gutenberg_skyscraper",t.SIDEBAR_WIDGET_MEDIUMRECTANGLE="sidebar_widget_mediumrectangle",t.SIDEBAR_WIDGET_LEADERBOARD="sidebar_widget_leaderboard",t.SIDEBAR_WIDGET_WIDESKYSCRAPER="sidebar_widget_wideskyscraper",t.SHORTCODE="shortcode"}(i||(e.SlotType=i={})),e.StickySlotTypes=[i.BOTTOM_STICKY,i.SIDEBAR_STICKY_RIGHT]},202:function(t,e,i){"use strict";var n=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});const o=n(i(546)),s=i(586);e.default=class{constructor(){this.logging=!1,this.tcData=null,this.usPrivacy=null,this.uid=null}setLogging(t){this.logging=t}log(t){this.logging&&console.log(t)}init(){this.log("Initializing consent..."),window.__uspapi?(this.log("Querying USP API..."),window.__uspapi("getUSPData",1,((t,e)=>{e&&t.uspString&&(this.usPrivacy=t.uspString,this.log("USP API data found. Setting consent: "+this.usPrivacy))}))):this.log("USP API not found"),window.__tcfapi?(this.log("Querying TCF API..."),window.__tcfapi("addEventListener",2,((t,e)=>{var i;e&&t.gdprApplies?(this.tcData=t,this.log("TCF API data found. Setting consent: "+(null===(i=this.tcData)||void 0===i?void 0:i.tcString)),this.initCookieSync()):this.log("TCF API data found. GDPR does not apply")}))):this.log("TCF API not found")}createUIDFromCookies(t,e,i){const n={expires:e,domain:i||window.location.hostname};this.log(`Created UID from Cookies on ${n.domain}`);const s=o.default.withAttributes(n),r=this.generateUIDValue();return s.set(t,r),r}generateUIDValue(){return Math.random().toString(36).substring(2,10)+(new Date).getTime().toString()}getOrCreateUIDFromLocalStorage(t,e){this.log("UID from localStorage");const i=(localStorage.getItem(t)||"").split(":");let n=i[0];const o=(new Date).getTime();let s=parseInt(i[1]);return(!n||o>s)&&(n=this.generateUIDValue(),s=o+24*e*60*60*1e3,localStorage.setItem(t,n+":"+s)),n}getOrCreateUID(){if(null!==this.uid)return this.uid;if(!this.hasUserConsent())return this.uid="",this.uid;const t="wordads_uid",e=o.default.get(t);if(e)return this.log(`Reused UID value ${e}`),this.uid=e,this.uid;const i=this.getCookiesSharedDomain(t,window.location.hostname);return window.localStorage&&!i||(this.uid=this.createUIDFromCookies(t,30,i)),this.uid=this.uid||this.getOrCreateUIDFromLocalStorage(t,30),this.log(`UID value: ${this.uid}`),this.uid}getCookiesSharedDomain(t,e){const i=e.split(".");if(i.length<=2)return null;let n=null,s=0;for(const r of i){if(s+=r.length,n=e.substring(s),s>=e.length)return null;const i=o.default.withAttributes({domain:n});if(i.set(t,"1")&&i.get(t))return i.remove(t),n;s++}return null}hasUserConsent(){return!this.tcData||!0===this.tcData.vendor.consents[496]&&!0===this.tcData.purpose.consents[1]}initCookieSync(){this.log("Initializing Cookie Sync");let t=`https://sync.smartadserver.com/getuid?nwid=${s.SMART_NETWORK_ID}&url=https://af.pubmine.com/user-sync?pid=[sas_uid]`;this.tcData&&(t+=`&gdpr=1&gdpr_consent=${this.tcData.tcString}`),document.createElement("img").src=t}}},444:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getCompatibleGoogleAdSizes=e.convertFormatsToObject=e.getMaxSlotDimension=void 0;const i=[[970,250],[970,90],[728,90],[336,280],[320,100],[300,600],[300,250],[250,250],[200,200],[320,50],[300,50],[468,60],[160,600],[120,600]];e.getMaxSlotDimension=t=>{let e=0,i=0;return t.forEach((([t,n])=>{t>e&&(e=t),n>i&&(i=n)})),{maxWidth:e,maxHeight:i}},e.convertFormatsToObject=t=>t.reduce(((t,e)=>(t[e]=!0,t)),{}),e.getCompatibleGoogleAdSizes=(t,e)=>{const n=i.find((([i,n])=>i<=t&&n<=e));return null!=n?n:null}},539:(t,e,i)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0});const n=i(501),o=i(639),s=i(313),r=i(444);e.default=class{constructor(t,e){this.logging="function"==typeof URLSearchParams&&"true"===new URLSearchParams(window.location.search).get("wordads-logging"),this.consent=t,this.consent.setLogging(this.logging),this.adFlowUrl="https://af.pubmine.com",this.slots=[],this.initialized=!1,this.config={},this.scroll={lastDirection:s.ScrollDirection.DOWN,lastY:window.scrollY},this.listenersController=e,this.forceAfpAds="function"==typeof URLSearchParams&&"1"===new URLSearchParams(window.location.search).get("afp_test")}log(t){this.logging&&console.log(t)}logSlot(t,e){if(!this.logging)return;const i=t.sizes.map((([t,e])=>t+"x"+e)).join(","),n=[t.type,t.tagId,i].join("|");this.log(`[${n}] ${e}`)}trackStat(t){window._stq=window._stq||[],window._stq.push(["extra",{x_wordads_smart:t}])}recordTracksEvent(t,e){e=e||{},window._tkq=window._tkq||[],window._tkq.push(["recordEvent",t,e])}getServerConfig(){var t,e;const i=document.getElementById("adflow-configuration"),n=i?JSON.parse(i.innerText):{},o=null!==(e=null===(t=null===window||void 0===window?void 0:window.wa_client)||void 0===t?void 0:t.config)&&void 0!==e?e:null===window||void 0===window?void 0:window.wa_smart;return this.deepMerge(n,o)}createAdSnippet(t,e){let i=document.createElement("div"),n=document.createElement("div"),o=document.createElement("div"),s=document.createElement("div");if(i.classList.add("wordads-ad"),n.classList.add("wordads-ad-title"),o.classList.add("wordads-ad-content"),s.classList.add("wordads-ad-controls"),n.innerText=this.config._.title,o.id=t,e){const{maxHeight:t,maxWidth:i}=(0,r.getMaxSlotDimension)(e);o.setAttribute("data-ad-height",t.toString()),o.setAttribute("data-ad-width",i.toString())}return s.innerHTML=this.consent.tcData?`<span onclick="__tcfapi( 'showUi' )">${this.config._.privacy_settings}</span>`:"",i.appendChild(n),i.appendChild(o),i.appendChild(s),i}getBottomStickySlots(){}createBottomStickyAdSnippet(t){const e=this.getBottomStickySlots(),i=this.createAdSnippet(t,e);i.classList.add("wordads-ad-sticky");const n=this.wrapSnippet(i,o.SlotType.BOTTOM_STICKY);n.classList.add("wordads-ad-sticky-wrapper");const r=()=>{this.toggleVisibility(n,s.ScrollDirection.DOWN)},a=document.createElement("div");return a.classList.add("wordads-ad-sticky-close-btn"),a.onclick=function(){n.remove(),document.removeEventListener("scroll",r)},n.insertBefore(a,i),{event:r,snippet:n}}createSidebarStickyAdSnippet(t,e){const i=this.createAdSnippet(t);i.classList.add("wordads-ad-sticky");const n=this.wrapSnippet(i,e);n.classList.add("wordads-ad-sticky-wrapper");const o=this.throttle((()=>{this.updateSidebarStickyVisibility(n)}),150),s=document.createElement("div");return s.classList.add("wordads-ad-sticky-close-btn"),s.onclick=function(){n.remove(),window.removeEventListener("resize",o),document.removeEventListener("scroll",o)},n.insertBefore(s,i),{event:o,snippet:n,adContent:i.querySelector(".wordads-ad-content")}}toggleVisibility(t,e){const i=window.scrollY>this.scroll.lastY?s.ScrollDirection.DOWN:s.ScrollDirection.UP,n=this.scroll.lastDirection===i;if(this.scroll.lastDirection=i,this.scroll.lastY=window.scrollY,n)return;const o="wordads-ad-hidden";e===i?t.classList.remove(o):t.classList.add(o)}wrapSnippet(t,e){const i=document.createElement("div");return i.classList.add("wordads-ad-wrapper"),i.classList.add(`wordads-ad-wrapper--${e}`),i.appendChild(t),i}checkBrandSafety(t,e){}handleNotOkayResponse(t,e){this.log(`Site unable to show ads: ${e.tagId}`),204===t&&this.listenersController.abort()}callAdFlow(t){this.logSlot(t,"calling AdFlow");const e=new XMLHttpRequest;e.onreadystatechange=()=>{if(XMLHttpRequest.DONE===e.readyState){if(performance.mark(`${t.tagId}-end`),200!==e.status)return void this.handleNotOkayResponse(e.status,t);const i=JSON.parse(e.response);this.handleAdResponse(i,t)}},e.open("POST",this.adFlowUrl),e.setRequestHeader("Accept","application/json"),e.withCredentials=!0,performance.mark(`${t.tagId}-start`);const i=this.getAdFlowRequestBody(t);e.send(JSON.stringify(i))}trackAdFlowRequestLatency(t,e,i){let n=performance.measure(`${e}-duration`,`${e}-start`,`${e}-end`),o={has_ad:t,ad_type:i,request_time:Math.round(n.duration),theme:this.config.theme};navigator.connection&&(o.connection_effective_type=navigator.connection.effectiveType,o.connection_downlink=navigator.connection.downlink),this.recordTracksEvent("wpcom_wordads_adflow",o)}insertFallbackAd(t,e){let i=(window.sas_fallback||[]).filter((function(t){return t.type===e}));if(0===i.length)return t.remove(),void this.log(`No fallback found for ${e}, snippet removed`);let n=i[0].tag.replaceAll("{{unique_id}}",Math.trunc(1e6*Math.random())),o=document.createElement("div");o.innerHTML=n,n=o.childNodes[0].nodeValue;let s=document.createElement("div");s.innerHTML=n,t.style.position="relative",t.style.visibility="visible",t.innerHTML=s.innerHTML,s.querySelectorAll("script").forEach((function(t){t.parentNode&&t.parentNode.removeChild(t);let e=document.createElement("script");t.src?e.src=t.src:t.textContent?e.textContent=t.textContent:t.innerText&&(e.innerText=t.innerText),document.body.appendChild(e)})),this.trackStat("fallback_"+e)}getChildrenByTag(t,e){let i=[];for(let n=0;n<t.children.length;n++){let o=t.children[n];o.nodeName===e.toUpperCase()&&i.push(o)}return i}getFloatingElements(t){let e=[],i=t.getElementsByTagName("*");for(let t=0;t<i.length;t++){let n=i[t],o=getComputedStyle(n),s=o.getPropertyValue("position"),r=o.getPropertyValue("float");"relative"!==s&&"absolute"!==s&&"none"===r||e.push(n)}return e}getElementGlobalPosition(t){let e=t.getBoundingClientRect();return{top:e.top+window.scrollY,left:e.left+window.scrollX,bottom:e.top+window.scrollY+e.height,right:e.left+window.scrollX+e.width}}collidesWithElements(t,e){let i=this.getElementGlobalPosition(t),n=!1;return e.forEach((t=>{let e=this.getElementGlobalPosition(t);i.bottom<e.top||i.top>e.bottom||i.right<e.left||i.left>e.left||(n=!0)})),n}getInlineFormatId(){}initInlineAds(){if(!this.shouldShowInlineAds())return;this.log(`Initializing ${o.SlotType.INLINE}`);let t=document.getElementById("wordads-inline-marker");if(!t)return void this.trackStat("inline_no_marker");let e=t.parentElement;if(!e)return;const i=this.getAvailableWidth(e),s=(0,n.getFilteredSlotSizesByWidth)(o.SlotType.INLINE,i);t.remove();let r=this.getMaxSlots(),a=0;const d=window.innerHeight,l=Math.ceil(1.35*d),c=Math.ceil(2.5*d);let h=e.getBoundingClientRect().top+window.scrollY+l;const u=this.getChildrenByTag(e,"p"),g=this.getFloatingElements(e);u.forEach((t=>{const e=t.getBoundingClientRect().top+window.scrollY,i=t.previousElementSibling;e>h&&a<r&&i&&"P"===i.nodeName&&i.textContent&&i.textContent.length>=140&&!this.collidesWithElements(t,g)&&(this.insertAdBefore(t,o.SlotType.INLINE,s,a,this.getInlineFormatId()),h=e+c,a++)})),0===a&&this.trackStat("inline_no_insert")}getBottomStickyFormatId(){}initBottomSticky(){if(!this.shouldShowBottomStickyAds())return;this.log(`Initializing ${o.SlotType.BOTTOM_STICKY}`);const t=this.getRandomTagId(),{event:e,snippet:i}=this.createBottomStickyAdSnippet(t);document.body.append(i);const s=document.documentElement.clientWidth,r=(0,n.getFilteredSlotSizesByWidth)(o.SlotType.BOTTOM_STICKY,s),a=this.getBottomStickyFormatId();this.slots.push(Object.assign({tagId:t,type:o.SlotType.BOTTOM_STICKY,sizes:r,element:i,isLazy:!1,onAd:function(){document.addEventListener("scroll",e,{passive:!0})}},a?{formatId:a}:{}))}getSidebarStickyRightFormatId(){}initSidebarStickyRight(){if(!this.shouldShowSidebarStickyRightAds())return;this.log(`Initializing ${o.SlotType.SIDEBAR_STICKY_RIGHT}`);const t=this.getRandomTagId(),{event:e,snippet:i,adContent:s}=this.createSidebarStickyAdSnippet(t,o.SlotType.SIDEBAR_STICKY_RIGHT);document.body.append(i);const{maxWidth:r,maxHeight:a}=this.getMaxAvailableSidebarStickySize(i);null==s||s.setAttribute("data-ad-height",a.toString()),null==s||s.setAttribute("data-ad-width",r.toString());const d=(0,n.getFilteredSlotSizesByWidthAndHeight)(o.SlotType.SIDEBAR_STICKY_RIGHT,r,a);if(!d.length)return this.log(`No size available for ${o.SlotType.SIDEBAR_STICKY_RIGHT}`),void i.remove();const l=this.getSidebarStickyRightFormatId();this.slots.push(Object.assign({tagId:t,type:o.SlotType.SIDEBAR_STICKY_RIGHT,sizes:d,element:i,isLazy:!1,onAd:()=>{this.updateSidebarStickyVisibility(i),window.addEventListener("resize",e,{passive:!0}),document.addEventListener("scroll",e,{passive:!0})}},l?{formatId:l}:{}))}initTop(){if(!this.shouldShowTopAds())return;this.log(`Initializing ${o.SlotType.TOP}`);const t=Array.from(document.getElementsByClassName("wordads-tag"));let[e]=t.filter((t=>t.dataset.slotType===o.SlotType.TOP));if(!e)return void this.log(`${o.SlotType.TOP} tag not found`);if(e.style.display="",screen.availHeight>=e.getBoundingClientRect().y)return;this.log(`${o.SlotType.TOP} tag relocated to the top`);const i=document.getElementById("wpcom-gifting-banner");i?i.insertAdjacentElement("afterend",e):document.body.prepend(e)}updateSidebarStickyVisibility(t){const e=t.offsetHeight;this.isWithinViewportHeight(e)&&!this.checkIfAdIsOverlappingContent(t)?(this.log("sidebar_sticky_right: ad slot can fit"),t.style.visibility="visible"):(this.log("sidebar_sticky_right: ad slot CANNOT fit"),t.style.visibility="hidden")}isWithinViewportHeight(t){return t<=.8*window.innerHeight}isElemOverlappingAtPoint(t,e,i){return document.elementsFromPoint(t,e).filter((t=>{return!((e=t)===document.body||e===document.documentElement||i.contains(e));var e})).length>0}checkIfAdIsOverlappingContent(t){const e=t.getBoundingClientRect();return this.isElemOverlappingAtPoint(e.left,e.top,t)||this.isElemOverlappingAtPoint(e.left,e.bottom,t)}getMaxAvailableSidebarStickySize(t){const e=(0,n.getSortedSlotSizes)(o.SlotType.SIDEBAR_STICKY_RIGHT);for(const[i,n]of e){t.style.width=`${i}px`,t.style.height=`${n}px`;const e=this.checkIfAdIsOverlappingContent(t);if(t.style.width="",t.style.height="",!e&&this.isWithinViewportHeight(n))return this.log(`sidebar_sticky_right: max available size without overlap, [${i}, ${n}]`),{maxWidth:i,maxHeight:n}}return this.log("sidebar_sticky_right: no slot size fits available space"),{maxWidth:0,maxHeight:0}}initAdTags(){var t;this.log("Initializing ad tags");const e=Array.from(document.getElementsByClassName("wordads-tag"));for(let i=0;i<e.length;i++){const o=e[i],s=null!==(t=o.dataset.slotType)&&void 0!==t?t:"",r=this.getSlotFormatId(s),a=this.getAvailableWidth(o.parentElement),d=(0,n.getFilteredSlotSizesByWidth)(s,a);this.log(`Initializing ad tag ${i+1}: ${s}, format id: ${r}`),s?this.isSlotTypeEnabled(s)?null!==r?d.length?(this.insertAdBefore(o,s,d,i,r),o.remove()):(this.log(`No available sizes for slot type: ${s}`),o.remove()):(this.log(`Invalid slot type: ${s}`),o.remove()):(this.log(`Disabled slot type: ${s}`),o.remove()):(this.log(`Slot type not provided: ${s}`),o.remove())}}getAvailableWidth(t){if(!t)return 0;const e=window.getComputedStyle(t),i=parseFloat(e.paddingLeft),n=parseFloat(e.paddingRight);return t.getBoundingClientRect().width-(i+n)}getFormat(t){}handleNoAdWithSmart(){}handleNoAd(t){let e=this.getSlotByTagId(t.tagId);e?((null==t?void 0:t.adNetwork)?this.logSlot(e,`Got NoAd from ${null==t?void 0:t.adNetwork}, requesting a fallback`):this.logSlot(e,"Got NoAd, requesting a fallback"),window.iponwebTags=window.iponwebTags||[],window.iponwebTags.includes(e.tagId)||this.insertFallbackAd(e.element,e.type),this.checkBrandSafety(t,e),this.trackStat("noad_"+e.type)):this.log(`NoAd: no slot found for tag id: ${t.tagId}, format: ${this.getFormat(t)}`)}handleAd(t){let e=this.getSlotByTagId(t.tagId);e?((null==t?void 0:t.adNetwork)?this.logSlot(e,`Got an Ad from ${null==t?void 0:t.adNetwork}`):this.logSlot(e,"Got an Ad"),o.StickySlotTypes.indexOf(e.type)>-1?e.element.style.position="fixed":e.element.style.position="relative",e.element.style.visibility="visible",e.onAd&&e.onAd(),this.trackStat("ad_"+e.type)):this.log(`Ad: no slot found for tag id: ${t.tagId}, format: ${this.getFormat(t)}`)}handlePostMessage(t){if("object"!=typeof t.data)return;if("wa-inline-frame"!==t.data.type)return;const e=t;let i=document.getElementsByTagName("iframe");for(let t=0;t<i.length;t++)if(i[t].contentWindow===e.source){i[t].style.height=Math.ceil(e.data.height)+"px";let n=i[t].closest(".wordads-ad");n&&(n.classList.contains("wordads-ad-responsive")||n.classList.add("wordads-ad-responsive"),e.data.maxWidth&&n.querySelectorAll(".wordads-ad-title, .wordads-ad-controls").forEach((t=>{t.style.maxWidth=e.data.maxWidth})));break}}getSlotByTagId(t){return this.slots.find((e=>e.tagId===t))}getRandomTagId(){return"wordads-ad-"+Math.trunc(1e6*Math.random())}throttle(t,e){let i=!1;return(...n)=>{i||(t(...n),i=!0,setTimeout((()=>{i=!1}),e))}}isElementInLazyViewport(t){let e=window.innerHeight,i=window.scrollY,n=i-e,o=i+2*e,s=this.getElementGlobalPosition(t);return!(s.bottom<=n||s.top>=o)}processAds(){this.log("processAds: "+this.slots.length),0!==this.slots.length&&this.slots.forEach((t=>{t.isLoaded||(!t.isLazy||this.isElementInLazyViewport(t.element))&&(this.logSlot(t,"in view"),t.isLoaded=!0,this.callAdFlow(t))}))}tryInit(t){const e=Object.values(t).map((t=>t.loaded&&t.isInitialized())).filter(Boolean);Object.keys(t).length===e.length&&(this.log("All scripts loaded, initializing..."),"loading"===document.readyState?document.addEventListener("DOMContentLoaded",(()=>{this.init()})):this.init())}preInit(){this.log("Running Pre Init");const t=this.getLibrariesToFetch();for(const[e,i]of Object.entries(t)){if(i.isInitialized())continue;this.log(`Fetching ${e} script`),i.init();const n=document.createElement("script");n.src=i.url,n.async=!0,n.addEventListener("load",(()=>{this.log(`${e} is loaded`),t[e]=Object.assign(Object.assign({},i),{loaded:!0}),this.tryInit(t)})),document.head.appendChild(n)}}init(){this.log("Init..."),this.mergeConfig(),this.consent.init(),this.initAdNetwork(),this.consent.initCookieSync(),this.initAds()}initAds(){this.initialized||(this.initialized=!0,this.initInlineAds(),this.initTop(),this.initBottomSticky(),this.initSidebarStickyRight(),this.initAdTags(),this.processAds())}deepMerge(t,e){for(let i in e)e.hasOwnProperty(i)&&(e[i]instanceof Object&&t[i]instanceof Object?t[i]=this.deepMerge(t[i],e[i]):t[i]=e[i]);return t}}},240:t=>{"use strict";t.exports="data:image/svg+xml,%3Csvg width=%2730%27 height=%2730%27 viewBox=%270 0 30 30%27 fill=%27none%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Crect x=%270.5%27 y=%270.5%27 width=%2729%27 height=%2729%27 rx=%2714.5%27 fill=%27white%27/%3E%3Crect x=%270.5%27 y=%270.5%27 width=%2729%27 height=%2729%27 rx=%2714.5%27 stroke=%27%23DDDDDF%27/%3E%3Cpath d=%27M19 11L15 15L19 19%27 stroke=%27%237C7F83%27 stroke-width=%271.5%27/%3E%3Cpath d=%27M11 19L15 15L11 11%27 stroke=%27%237C7F83%27 stroke-width=%271.5%27/%3E%3C/svg%3E"}},e={};function i(n){var o=e[n];if(void 0!==o)return o.exports;var s=e[n]={id:n,exports:{}};return t[n].call(s.exports,s,s.exports,i),s.exports}i.m=t,i.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return i.d(e,{a:e}),e},i.d=(t,e)=>{for(var n in e)i.o(e,n)&&!i.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},i.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),i.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.b=document.baseURI||self.location.href,i.nc=void 0,i(605)})();;
( function() {
	var cookieValue = document.cookie.replace( /(?:(?:^|.*;\s*)eucookielaw\s*\=\s*([^;]*).*$)|^.*$/, '$1' );
	var overlay = document.querySelector( '#eu-cookie-law' );
	var container = document.querySelector( '.widget_eu_cookie_law_widget' );
	var initialScrollPosition, scrollFunction;

	function remove( el ) {
		return el && el.parentElement && el.parentElement.removeChild( el );
	}

	function triggerDismissEvent() {
		try {
			const dismissEvent = new Event( 'eucookielaw-dismissed' );
			document.dispatchEvent( dismissEvent );
		} catch ( err ) { }
	}

	function removeOverlay() {
		remove( overlay );
		triggerDismissEvent();
	}

	function fade( el, type, fn ) {
		var duration = 400;

		el.style.display = 'block';
		el.style.transitionProperty = 'opacity';
		el.style.transitionDuration = duration + 'ms';
		el.style.opacity = type === 'in' ? 0 : 1;

		// Double rAF to ensure styles are applied cross-browser.
		requestAnimationFrame( function () {
			requestAnimationFrame( function() {
				el.style.opacity = type === 'in' ? 1 : 0;
				// Wait for animation.
				setTimeout( function () {
					// Clean up.
					el.style.removeProperty( 'opacity' );
					el.style.removeProperty( 'transition-property' );
					el.style.removeProperty( 'transition-duration' );

					if ( type === 'out' ) {
						el.style.display = 'none';
					}

					if ( typeof fn === 'function' ) {
						fn();
					}
				}, duration + 50 );
			} );
		} );
	}

	function appendWidget() {
		document.body.appendChild( container );
		overlay.style.display = 'block';
		fade( container, 'in' );
	}

	if ( typeof wp !== 'undefined' && !! wp.customize ) {
		appendWidget();
		return;
	}

	if ( ! overlay || ! container ) {
		return;
	}

	if ( overlay.classList.contains( 'ads-active' ) ) {
		var adsCookieValue = document.cookie.replace( /(?:(?:^|.*;\s*)personalized-ads-consent\s*\=\s*([^;]*).*$)|^.*$/, '$1' );
		if ( cookieValue !== '' && adsCookieValue !== '' ) {
			removeOverlay();
		}
	} else if ( cookieValue !== '' ) {
		removeOverlay();
	}

	appendWidget();

	overlay.querySelector( 'form' ).addEventListener( 'submit', accept );

	if ( overlay.classList.contains( 'hide-on-scroll' ) ) {
		initialScrollPosition = window.pageYOffset;

		scrollFunction = function() {
			if ( Math.abs( window.pageYOffset - initialScrollPosition ) > 50 ) {
				accept();
			}
		};

		window.addEventListener( 'scroll', scrollFunction );
	} else if ( overlay.classList.contains( 'hide-on-time' ) ) {
		var timeout = parseInt( overlay.getAttribute( 'data-hide-timeout' ), 10 ) || 0;
		setTimeout( accept, timeout * 1000 );
	}

	var accepted = false;
	function accept( event ) {
		if ( accepted ) {
			return;
		}
		accepted = true;

		if ( event && event.preventDefault ) {
			event.preventDefault();
		}

		if ( overlay.classList.contains( 'hide-on-scroll' ) ) {
			window.removeEventListener( 'scroll', scrollFunction );
		}

		var expireTime = new Date();
		var consentExpiration = parseInt( overlay.getAttribute( 'data-consent-expiration' ), 10 ) || 0;
		expireTime.setTime( expireTime.getTime() + ( consentExpiration * 24 * 60 * 60 * 1000 ) );

		document.cookie = 'eucookielaw=' + expireTime.getTime() + ';path=/;expires=' + expireTime.toGMTString();
		if ( overlay.classList.contains( 'ads-active' ) && overlay.classList.contains( 'hide-on-button' ) ) {
			document.cookie = 'personalized-ads-consent=' + expireTime.getTime() + ';path=/;expires=' + expireTime.toGMTString();
		}

		fade( overlay, 'out', function() {
			removeOverlay();
			remove( container );
		} );
	}
} )();
;
/* global wpcom_reblog */

var jetpackLikesWidgetBatch = [];
var jetpackLikesMasterReady = false;

// Due to performance problems on pages with a large number of widget iframes that need to be loaded,
// we are limiting the processing at any instant to unloaded widgets that are currently in viewport,
// plus this constant that will allow processing of widgets above and bellow the current fold.
// This aim of it is to improve the UX and hide the transition from unloaded to loaded state from users.
var jetpackLikesLookAhead = 2000; // pixels

// Keeps track of loaded comment likes widget so we can unload them when they are scrolled out of view.
var jetpackCommentLikesLoadedWidgets = [];

var jetpackLikesDocReadyPromise = new Promise( resolve => {
	if ( document.readyState !== 'loading' ) {
		resolve();
	} else {
		window.addEventListener( 'DOMContentLoaded', () => resolve() );
	}
} );

function JetpackLikesPostMessage( message, target ) {
	if ( typeof message === 'string' ) {
		try {
			message = JSON.parse( message );
		} catch ( e ) {
			return;
		}
	}

	if ( target && typeof target.postMessage === 'function' ) {
		try {
			target.postMessage(
				JSON.stringify( {
					type: 'likesMessage',
					data: message,
				} ),
				'*'
			);
		} catch ( e ) {
			return;
		}
	}
}

function JetpackLikesBatchHandler() {
	const requests = [];
	document.querySelectorAll( 'div.jetpack-likes-widget-unloaded' ).forEach( widget => {
		if ( jetpackLikesWidgetBatch.indexOf( widget.id ) > -1 ) {
			return;
		}

		if ( ! jetpackIsScrolledIntoView( widget ) ) {
			return;
		}

		jetpackLikesWidgetBatch.push( widget.id );

		var regex = /like-(post|comment)-wrapper-(\d+)-(\d+)-(\w+)/,
			match = regex.exec( widget.id ),
			info;

		if ( ! match || match.length !== 5 ) {
			return;
		}

		info = {
			blog_id: match[ 2 ],
			width: widget.width,
		};

		if ( 'post' === match[ 1 ] ) {
			info.post_id = match[ 3 ];
		} else if ( 'comment' === match[ 1 ] ) {
			info.comment_id = match[ 3 ];
		}

		info.obj_id = match[ 4 ];

		requests.push( info );
	} );

	if ( requests.length > 0 ) {
		JetpackLikesPostMessage(
			{ event: 'initialBatch', requests: requests },
			window.frames[ 'likes-master' ]
		);
	}
}

function JetpackLikesMessageListener( event ) {
	let message = event && event.data;
	if ( typeof message === 'string' ) {
		try {
			message = JSON.parse( message );
		} catch ( err ) {
			return;
		}
	}

	const type = message && message.type;
	const data = message && message.data;

	if ( type !== 'likesMessage' || typeof data.event === 'undefined' ) {
		return;
	}

	// We only allow messages from one origin
	const allowedOrigin = 'https://widgets.wp.com';
	if ( allowedOrigin !== event.origin ) {
		return;
	}

	switch ( data.event ) {
		case 'masterReady':
			jetpackLikesDocReadyPromise.then( () => {
				jetpackLikesMasterReady = true;

				const stylesData = {
					event: 'injectStyles',
				};
				const sdTextColor = document.querySelector( '.sd-text-color' );
				const sdLinkColor = document.querySelector( '.sd-link-color' );
				const sdTextColorStyles = ( sdTextColor && getComputedStyle( sdTextColor ) ) || {};
				const sdLinkColorStyles = ( sdLinkColor && getComputedStyle( sdLinkColor ) ) || {};

				// enable reblogs if they are enabled for the page
				if ( document.body.classList.contains( 'jetpack-reblog-enabled' ) ) {
					JetpackLikesPostMessage( { event: 'reblogsEnabled' }, window.frames[ 'likes-master' ] );
				}

				stylesData.textStyles = {
					color: sdTextColorStyles[ 'color' ],
					fontFamily: sdTextColorStyles[ 'font-family' ],
					fontSize: sdTextColorStyles[ 'font-size' ],
					direction: sdTextColorStyles[ 'direction' ],
					fontWeight: sdTextColorStyles[ 'font-weight' ],
					fontStyle: sdTextColorStyles[ 'font-style' ],
					textDecoration: sdTextColorStyles[ 'text-decoration' ],
				};

				stylesData.linkStyles = {
					color: sdLinkColorStyles[ 'color' ],
					fontFamily: sdLinkColorStyles[ 'font-family' ],
					fontSize: sdLinkColorStyles[ 'font-size' ],
					textDecoration: sdLinkColorStyles[ 'text-decoration' ],
					fontWeight: sdLinkColorStyles[ 'font-weight' ],
					fontStyle: sdLinkColorStyles[ 'font-style' ],
				};

				JetpackLikesPostMessage( stylesData, window.frames[ 'likes-master' ] );

				JetpackLikesBatchHandler();
			} );

			break;

		// We're keeping this for planned future follow ups.
		// @see: https://github.com/Automattic/jetpack/pull/42361#discussion_r1995338815
		case 'showLikeWidget':
			break;

		// We're keeping this for planned future follow ups.
		// @see: https://github.com/Automattic/jetpack/pull/42361#discussion_r1995338815
		case 'showCommentLikeWidget':
			break;

		case 'killCommentLikes':
			// If kill switch for comment likes is enabled remove all widgets wrappers and `Loading...` placeholders.
			document
				.querySelectorAll( '.jetpack-comment-likes-widget-wrapper' )
				.forEach( wrapper => wrapper.remove() );
			break;

		case 'clickReblogFlair':
			if ( wpcom_reblog && typeof wpcom_reblog.toggle_reblog_box_flair === 'function' ) {
				wpcom_reblog.toggle_reblog_box_flair( data.obj_id, data.post_id );
			}
			break;

		case 'hideOtherGravatars': {
			hideLikersPopover();
			break;
		}

		case 'showOtherGravatars': {
			const container = document.querySelector( '#likes-other-gravatars' );

			if ( ! container ) {
				break;
			}

			const list = container.querySelector( 'ul' );

			container.style.display = 'none';
			list.innerHTML = '';

			container
				.querySelectorAll( '.likes-text span' )
				.forEach( item => ( item.textContent = data.totalLikesLabel ) );

			( data.likers || [] ).forEach( async ( liker, index ) => {
				if ( liker.profile_URL.substr( 0, 4 ) !== 'http' ) {
					// We only display gravatars with http or https schema
					return;
				}

				const element = document.createElement( 'li' );
				list.append( element );

				element.innerHTML = `
				<a href="${ encodeURI( liker.profile_URL ) }" rel="nofollow" target="_parent" class="wpl-liker">
					<img src="${ encodeURI( liker.avatar_URL ) }"
						alt=""
						style="width: 28px; height: 28px;" />
					<span></span>
				</a>
				`;


				// Add some extra attributes through native methods, to ensure strings are sanitized.
				element.classList.add( liker.css_class );
				element.querySelector( 'img' ).alt = data.avatarAltTitle.replace( '%s', liker.name );
				element.querySelector( 'span' ).innerText = liker.name;

				if ( index === data.likers.length - 1 ) {
					element.addEventListener( 'keydown', ( e ) => {
						if ( e.key === 'Tab' && ! e.shiftKey ) {
							e.preventDefault();
							hideLikersPopover();

							JetpackLikesPostMessage(
								{ event: 'focusLikesCount', parent: data.parent },
								window.frames[ 'likes-master' ]
							);
						}
					} );
				}
			} );

			const positionPopup = function() {
				const containerStyle = getComputedStyle(container);
				const isRtl = containerStyle.direction === 'rtl';

				const el = document.querySelector( `*[name='${ data.parent }']` );
				const rect = el.getBoundingClientRect();
				const win = el.ownerDocument.defaultView;

				const offset = {
					top: rect.top + win.pageYOffset,
					left: rect.left + win.pageXOffset,
				};

				// don't display yet or we get skewed window.innerWidth later
				container.style.display = 'none';

				let containerLeft = 0;
				container.style.top = offset.top + data.position.top - 1 + 'px';

				if ( isRtl ) {
					const visibleAvatarsCount = data && data.likers ? Math.min( data.likers.length, 5 ) : 0;
					// 24px is the width of the avatar + 4px is the padding between avatars
					containerLeft = offset.left + data.position.left + 24 * visibleAvatarsCount + 4;
					container.style.transform = 'translateX(-100%)';
				} else {
					containerLeft = offset.left + data.position.left;
				}
				container.style.left = containerLeft + 'px';

				// Container width - padding
				const initContainerWidth = data.width - 20;
				const rowLength = Math.floor( initContainerWidth / 37 );
				// # of rows + (avatar + avatar padding) + text above + container padding
				let height = Math.ceil( data.likers.length / rowLength ) * 37 + 17 + 22;
				if ( height > 204 ) {
					height = 204;
				}

				// If the popup is overflows viewport width, we should show it on the next line
				// Push it offscreen to calculated rendered width
				const windowWidth = win.innerWidth;
				container.style.left = '-9999px';
				container.style.display = 'block';

				// If the popup exceeds the viewport width,
				// flip the position of the popup.
				const containerWidth = container.offsetWidth;
				const containerRight = containerLeft + containerWidth;

				if ( containerRight > windowWidth && ! isRtl) {
					containerLeft = rect.left + rect.width - containerWidth;
				} else if ( containerLeft - containerWidth < 0 && isRtl ) {
					container.style.transform = 'none';
					containerLeft = rect.left;
				}
				// Set the container left
				container.style.left = containerLeft + 'px';

				container.setAttribute( 'aria-hidden', 'false' );
			}

			positionPopup();
			container.focus();

			const debounce = function( func, wait ) {
				var timeout;
				return function() {
					var context = this;
					var args = arguments;
					clearTimeout( timeout );
					timeout = setTimeout( function() {
						func.apply( context, args );
					}, wait );
				};
			};

			const debouncedPositionPopup = debounce( positionPopup, 100 );

			// Keep a reference of this function in the element itself
			// so that we can destroy it later
			container.__resizeHandler = debouncedPositionPopup;

			// When window is resized, resize the popup.
			window.addEventListener( "resize", debouncedPositionPopup );
		}
	}
}

window.addEventListener( 'message', JetpackLikesMessageListener );

function hideLikersPopover() {
	const container = document.querySelector( '#likes-other-gravatars' );

	if ( container ) {
		container.style.display = 'none';
		container.setAttribute( 'aria-hidden', 'true' );

		// Remove the resize event listener and cleanup.
		const resizeHandler = container.__resizeHandler;
		if ( resizeHandler ) {
			window.removeEventListener( "resize", resizeHandler );
			delete container.__resizeHandler;
		}
	}
}

document.addEventListener( 'click', hideLikersPopover );

function JetpackLikesWidgetQueueHandler() {
	var wrapperID;

	if ( ! jetpackLikesMasterReady ) {
		setTimeout( JetpackLikesWidgetQueueHandler, 500 );
		return;
	}

	// Restore widgets to initial unloaded state when they are scrolled out of view.
	jetpackUnloadScrolledOutWidgets();

	var unloadedWidgetsInView = jetpackGetUnloadedWidgetsInView();

	if ( unloadedWidgetsInView.length > 0 ) {
		// Grab any unloaded widgets for a batch request
		JetpackLikesBatchHandler();
	}

	for ( var i = 0, length = unloadedWidgetsInView.length; i <= length - 1; i++ ) {
		wrapperID = unloadedWidgetsInView[ i ].id;

		if ( ! wrapperID ) {
			continue;
		}

		jetpackLoadLikeWidgetIframe( wrapperID );
	}
}

function jetpackLoadLikeWidgetIframe( wrapperID ) {
	if ( typeof wrapperID === 'undefined' ) {
		return;
	}

	const wrapper = document.querySelector( '#' + wrapperID );
	wrapper.querySelectorAll( 'iframe' ).forEach( iFrame => iFrame.remove() );

	const placeholder = wrapper.querySelector( '.likes-widget-placeholder' );

	// Post like iframe
	if ( placeholder && placeholder.classList.contains( 'post-likes-widget-placeholder' ) ) {
		const postLikesFrame = document.createElement( 'iframe' );

		postLikesFrame.classList.add( 'post-likes-widget', 'jetpack-likes-widget' );
		postLikesFrame.name = wrapper.dataset.name;
		postLikesFrame.src = wrapper.dataset.src;
		postLikesFrame.height = '55px';
		postLikesFrame.width = '100%';
		postLikesFrame.frameBorder = '0';
		postLikesFrame.scrolling = 'no';
		postLikesFrame.title = wrapper.dataset.title;

		placeholder.after( postLikesFrame );
	}

	// Comment like iframe
	if ( placeholder.classList.contains( 'comment-likes-widget-placeholder' ) ) {
		const commentLikesFrame = document.createElement( 'iframe' );

		commentLikesFrame.class = 'comment-likes-widget-frame jetpack-likes-widget-frame';
		commentLikesFrame.name = wrapper.dataset.name;
		commentLikesFrame.src = wrapper.dataset.src;
		commentLikesFrame.height = '18px';
		commentLikesFrame.width = '100%';
		commentLikesFrame.frameBorder = '0';
		commentLikesFrame.scrolling = 'no';

		wrapper.querySelector( '.comment-like-feedback' ).after( commentLikesFrame );

		jetpackCommentLikesLoadedWidgets.push( commentLikesFrame );
	}

	wrapper.classList.remove( 'jetpack-likes-widget-unloaded' );
	wrapper.classList.add( 'jetpack-likes-widget-loading' );

	wrapper.querySelector( 'iframe' ).addEventListener( 'load', e => {
		JetpackLikesPostMessage(
			{ event: 'loadLikeWidget', name: e.target.name, width: e.target.width },
			window.frames[ 'likes-master' ]
		);

		wrapper.classList.remove( 'jetpack-likes-widget-loading' );
		wrapper.classList.add( 'jetpack-likes-widget-loaded' );
	} );
}

function jetpackGetUnloadedWidgetsInView() {
	const unloadedWidgets = document.querySelectorAll( 'div.jetpack-likes-widget-unloaded' );

	return [ ...unloadedWidgets ].filter( item => jetpackIsScrolledIntoView( item ) );
}

function jetpackIsScrolledIntoView( element ) {
	const top = element.getBoundingClientRect().top;
	const bottom = element.getBoundingClientRect().bottom;

	// Allow some slack above and bellow the fold with jetpackLikesLookAhead,
	// with the aim of hiding the transition from unloaded to loaded widget from users.
	return top + jetpackLikesLookAhead >= 0 && bottom <= window.innerHeight + jetpackLikesLookAhead;
}

function jetpackUnloadScrolledOutWidgets() {
	for ( let i = jetpackCommentLikesLoadedWidgets.length - 1; i >= 0; i-- ) {
		const currentWidgetIframe = jetpackCommentLikesLoadedWidgets[ i ];

		if ( ! jetpackIsScrolledIntoView( currentWidgetIframe ) ) {
			const widgetWrapper =
				currentWidgetIframe &&
				currentWidgetIframe.parentElement &&
				currentWidgetIframe.parentElement.parentElement;

			// Restore parent class to 'unloaded' so this widget can be picked up by queue manager again if needed.
			widgetWrapper.classList.remove( 'jetpack-likes-widget-loaded' );
			widgetWrapper.classList.remove( 'jetpack-likes-widget-loading' );
			widgetWrapper.classList.add( 'jetpack-likes-widget-unloaded' );

			// Bring back the loading placeholder into view.
			widgetWrapper
				.querySelectorAll( '.comment-likes-widget-placeholder' )
				.forEach( item => ( item.style.display = 'block' ) );

			// Remove it from the list of loaded widgets.
			jetpackCommentLikesLoadedWidgets.splice( i, 1 );

			// Remove comment like widget iFrame.
			currentWidgetIframe.remove();
		}
	}
}

var jetpackWidgetsDelayedExec = function ( after, fn ) {
	var timer;
	return function () {
		clearTimeout( timer );
		timer = setTimeout( fn, after );
	};
};

var jetpackOnScrollStopped = jetpackWidgetsDelayedExec( 250, JetpackLikesWidgetQueueHandler );

// Load initial batch of widgets, prior to any scrolling events.
JetpackLikesWidgetQueueHandler();

// Add event listener to execute queue handler after scroll.
window.addEventListener( 'scroll', jetpackOnScrollStopped, true );
;
/* global screen_reader_text */
/**
 * navigation.js
 *
 * Handles the navigation menu.
 */
( function( $ ) {

	/* Define variables */
	var header_wrapper, navigation_wrapper, site_navigation, classic_primary, classic_secondary, menu_toggle, window_width, menu_toggle_width, site_branding, header_search;

	header_wrapper     = $( '.header-wrapper' );
	navigation_wrapper = $( '.navigation-wrapper' );
	site_navigation    = $( '#site-navigation' );
	classic_primary    = $( '.navigation-classic .primary-navigation' );
	classic_secondary  = $( '.navigation-classic .secondary-navigation' );
	menu_toggle        = $( '.menu-toggle' );
	site_branding      = $( '.site-branding' );
	header_search      = $( '.header-search' );

	/* Add dropdown toggle to Primary Navigation items */
	$( '.primary-navigation .menu-primary > ul > .page_item_has_children > a, .primary-navigation .menu-primary > ul > .menu-item-has-children > a' ).after( '<button class="dropdown-toggle" aria-expanded="false">' + screen_reader_text.expand + '</button>' );


	/* Depending on window width */
	function responsive_navigation() {

		var e = window, a = 'inner';

		if ( ! ( 'innerWidth' in window ) ) {
			a = 'client';
			e = document.documentElement || document.body;
		}

		window_width = e[ a+'Width' ];
		
		menu_toggle_width = menu_toggle.outerWidth();

		/* Reset menu_toggle DOM position */
		if ( $( 'body' ).hasClass( 'rtl' ) ) {
			menu_toggle.appendTo( site_navigation ).css( 'margin-right', '' );
		} else {
			menu_toggle.appendTo( site_navigation ).css( 'margin-left', '' );
		}

		if ( window_width < 1020 ) {
			classic_secondary.appendTo( navigation_wrapper );
			classic_primary.appendTo( navigation_wrapper );
		} else {
			classic_secondary.insertBefore( header_wrapper );
			classic_primary.insertAfter( header_wrapper );
		}

		if ( window_width < 1230 ) {
			navigation_wrapper.insertBefore( header_wrapper );
			if ( $( 'body' ).hasClass( 'rtl' ) ) {
				$( '.menu-secondary' ).css( 'padding-left', '' );
				menu_toggle.css( 'margin-right', '' );
			} else {
				$( '.menu-secondary' ).css( 'padding-right', '' );
				menu_toggle.css( 'margin-left', '' );
			}
		} else {
			navigation_wrapper.insertAfter( menu_toggle );
			if ( $( 'body' ).hasClass( 'rtl' ) ) {
				$( '.navigation-default .menu-secondary' ).css( 'padding-left', menu_toggle_width + 60 );
			} else {
				$( '.navigation-default .menu-secondary' ).css( 'padding-right', menu_toggle_width + 60 );
			}
			if ( menu_toggle.hasClass( 'open' ) ) {
				$( 'html, body' ).css( 'overflow-y', 'hidden' );
				menu_toggle.appendTo( navigation_wrapper );
				if ( $( 'body' ).hasClass( 'rtl' ) ) {
					menu_toggle.css( 'margin-right', 930 / 2 - menu_toggle_width );
				} else {
					menu_toggle.css( 'margin-left', 930 / 2 - menu_toggle_width );
				}
			} else {
				$( 'html, body' ).css( 'overflow-y', '' );
				if ( $( 'body' ).hasClass( 'rtl' ) ) {
					menu_toggle.css( 'margin-right', '' );
				} else {
					menu_toggle.css( 'margin-left', '' );
				}
			}
		}

		/* Add a max-width to .site-branding */
		var gap_icons = 0;
		if ( site_navigation.length ) {
			gap_icons += 16;
		}
		if ( header_search.length ) {
			gap_icons += 16;
		}
		if ( window_width < 768 ) {
			site_branding.removeAttr( 'style' );
		} else {
			site_branding.css( 'max-width', header_wrapper.outerWidth() - ( site_navigation.outerWidth() + header_search.outerWidth() + gap_icons ) );
		}

		$( '.menu-primary .dropdown-toggle' ).each( function() {
			$( this ).css( 'top', $( this ).prev( 'a' ).outerHeight() - $( this ).outerHeight() - 1 );
		} );
	}

	/* Click toggle */
	menu_toggle.click( function() {
		$( 'html, body' ).scrollTop( 0 );
		$( this ).toggleClass( 'open' );
		$( this ).attr( 'aria-expanded', $( this ).attr( 'aria-expanded' ) === 'false' ? 'true' : 'false' );
		navigation_wrapper.toggle();
		$( '.search-toggle' ).removeClass( 'open' );
		$( '.search-toggle' ).attr( 'aria-expanded', 'false' );
		$( '.search-wrapper' ).hide();
		responsive_navigation();
	} );

	/* Load */
	$( window ).load( responsive_navigation ).resize( responsive_navigation );

	var container = $( '.navigation-classic .primary-navigation' );

	// Fix child menus for touch devices.
	function fixMenuTouchTaps( container ) {
		var touchStartFn,
		    parentLink = container.find( '.menu-item-has-children > a, .page_item_has_children > a' );

		if ( 'ontouchstart' in window ) {
			touchStartFn = function( e ) {
				var menuItem = this.parentNode;

				if ( ! menuItem.classList.contains( 'focus' ) ) {
					e.preventDefault();
					for( var i = 0; i < menuItem.parentNode.children.length; ++i ) {
						if ( menuItem === menuItem.parentNode.children[i] ) {
							continue;
						}
						menuItem.parentNode.children[i].classList.remove( 'focus' );
					}
					menuItem.classList.add( 'focus' );
				} else {
					menuItem.classList.remove( 'focus' );
				}
			};

			for ( var i = 0; i < parentLink.length; ++i ) {
				parentLink[i].addEventListener( 'touchstart', touchStartFn, false )
			}
		}
	}

	fixMenuTouchTaps( container );

} )( jQuery );
;
( function() {
	var is_webkit = navigator.userAgent.toLowerCase().indexOf( 'webkit' ) > -1,
	    is_opera  = navigator.userAgent.toLowerCase().indexOf( 'opera' )  > -1,
	    is_ie     = navigator.userAgent.toLowerCase().indexOf( 'msie' )   > -1;

	if ( ( is_webkit || is_opera || is_ie ) && document.getElementById && window.addEventListener ) {
		window.addEventListener( 'hashchange', function() {
			var element = document.getElementById( location.hash.substring( 1 ) );

			if ( element ) {
				if ( ! /^(?:a|select|input|button|textarea)$/i.test( element.tagName ) ) {
					element.tabIndex = -1;
				}
				element.focus();
			}
		}, false );
	}
})();
;
/* global screen_reader_text */
( function( $ ) {

	/**
	 * A function to add classes to body depending on window width.
	 */
	function body_class() {

		window_width = $( window ).width();
		$( 'body' ).removeClass( 'small-screen medium-screen large-screen' );
		if ( window_width >= 1020 ) {
			$( 'body' ).addClass( 'small-screen medium-screen large-screen' );
		} else if ( window_width >= 768 ) {
			$( 'body' ).addClass( 'small-screen medium-screen' );
		} else if ( window_width >= 600 ) {
			$( 'body' ).addClass( 'small-screen' );
		}

	}

	$( window ).load( function() {

		body_class();

		/* Add dropdown toggle to Custom Menus Widget items */
		$( '.widget_nav_menu ul:not([id^="menu-social"]) .page_item_has_children > a, .widget_nav_menu ul:not([id^="menu-social"]) .menu-item-has-children > a' ).after( '<button class="dropdown-toggle" aria-expanded="false">' + screen_reader_text.expand + '</button>' );

		/* Toggle child menu items */
		$( '.dropdown-toggle' ).click( function( e ) {
			e.preventDefault();
			$( this ).toggleClass( 'toggle-on' );
			$( this ).prev( 'a' ).toggleClass( 'toggle-on' );
			$( this ).next( '.children, .sub-menu' ).toggleClass( 'toggle-on' );
			$( this ).attr( 'aria-expanded', $( this ).attr( 'aria-expanded' ) === 'false' ? 'true' : 'false' );
			$( this ).html( $( this ).html() === screen_reader_text.expand ? screen_reader_text.collapse : screen_reader_text.expand )
		} );

	} ).resize( body_class );

} )( jQuery );
;
