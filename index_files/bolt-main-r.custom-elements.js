(this.webpackJsonp=this.webpackJsonp||[]).push([[2],{151:function(e,i,t){"use strict";t(417);var n=t(418),d=s(t(217)),o=s(t(434)),r=s(t(435)),a=s(t(21)),u=s(t(45)),c=t(218);function s(e){return e&&e.__esModule?e:{default:e}}var w=(0,a.default)(window),l=(0,u.default)(window.rendererModel.runningExperiments,w,"viewer"),f=function(e){var i=l[e];return!(!i||"old"===i||"false"===i)},v=window.serviceTopology,m={staticMediaUrl:v.staticMediaUrl,mediaRootUrl:v.mediaRootUrl,experiments:{},isViewerMode:!window.rendererModel.previewMode,devicePixelRatio:/iemobile/i.test(navigator.userAgent)?Math.round(window.screen.availWidth/(window.screen.width||window.document.documentElement.clientWidth)):window.devicePixelRatio},p={init:function(e){return new r.default(e)}},M={init:function(e){return window.addEventListener("resize",e)}},x={reportBI:function(){}},b=n.wixCustomElementsRegistry.init({resizeService:p,windowResizeService:M});if(b.defineWixDropdownMenu({mutationService:o.default,biService:x}),(f("bv_wixImage")||f("bv_wixImagePhaseTwo"))&&(b.defineWixImage({mutationService:o.default,biService:x},m),b.defineWixBgImage({mutationService:o.default,biService:x},m),b.defineWixBgMedia({mutationService:o.default,biService:x},m)),f("bv_wixVideo")){var g={prefersReducedMotion:(0,c.prefersReducedMotion)()&&f("bv_reducedMotion"),staticVideoUrl:v.staticVideoUrl};b.defineWixVideo({mutationService:o.default,biService:x},g)}e.exports={wixCustomElements:b,loadedModules:{imageClientApi:d.default}}},218:function(e,i,t){"use strict";e.exports={prefersReducedMotion:function(e){return!(!(e=e||("undefined"!=typeof window?window:void 0))||!e.matchMedia)&&e.matchMedia("(prefers-reduced-motion: reduce)").matches}}}}]);
//# sourceMappingURL=bolt-main-r.custom-elements.js.map