
(function (root, factory) { if (typeof define === 'function' && define.amd) { define([], factory); } else if (typeof module === 'object' && module.exports) { module.exports = factory(); } else { root.returnExports = factory(); } }(typeof self !== 'undefined' ? self : this, function () { return "@keyframes horizontalmenuitem2191703659__expandSubmenu {\n  0% {\n    transform: translateY(-34%);\n  }\n\n  100% {\n    transform: translateY(0);\n  }\n}\n\n.horizontalmenuitem2191703659__root {\n  -archetype: paintBox;\n\n  box-sizing: border-box;\n\n  display: block;\n\n  transition: inherit;\n}\n\n.horizontalmenuitem2191703659__root:not([href]) {\n  cursor: default !important;\n}\n\n.horizontalmenuitem2191703659__root.horizontalmenuitem2191703659--isHovered,.horizontalmenuitem2191703659__root.horizontalmenuitem2191703659--isCurrentPage,.horizontalmenuitem2191703659__root.horizontalmenuitem2191703659--isHovered .horizontalmenuitem2191703659__label,.horizontalmenuitem2191703659__root.horizontalmenuitem2191703659--isCurrentPage .horizontalmenuitem2191703659__label {\n  transition: all 0.08s cubic-bezier(0, 0, 1, 1);\n}\n\n.horizontalmenuitem2191703659__positionBox {\n  position: absolute;\n  z-index: 47;\n  overflow: hidden;\n  transition: opacity 0.08s cubic-bezier(0, 0, 1, 1);\n}\n\n.horizontalmenuitem2191703659__opened {}\n.horizontalmenuitem2191703659__collapsed {}\n.horizontalmenuitem2191703659__expanded {}\n\n.horizontalmenuitem2191703659__positionBox.horizontalmenuitem2191703659__collapsed {\n  opacity: 0;\n  pointer-events: none;\n}\n\n.horizontalmenuitem2191703659__positionBox.horizontalmenuitem2191703659__opened {\n  transition: opacity 0.3s cubic-bezier(0.25, 1, 0.5, 1);\n}\n\n.horizontalmenuitem2191703659__positionBox.horizontalmenuitem2191703659__expanded {\n  overflow: visible;\n}\n\n.horizontalmenuitem2191703659__positionBox > div {\n  transition: border-color 0.08s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.08s cubic-bezier(0.25, 1, 0.5, 1);\n}\n\n.horizontalmenuitem2191703659__positionBox:not(.horizontalmenuitem2191703659__expanded) > div {\n  border-color: transparent;\n  box-shadow: 0 0 transparent;\n}\n\n.horizontalmenuitem2191703659__positionBox.horizontalmenuitem2191703659__opened > div {\n  animation-name: horizontalmenuitem2191703659__expandSubmenu;\n  animation-duration: 0.3s;\n  animation-timing-function: cubic-bezier(0.25, 1, 0.5, 1);\n  transition: border-color 0.08s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.08s cubic-bezier(0.25, 1, 0.5, 1);\n}\n\n.horizontalmenuitem2191703659__container {\n  -archetype: box;\n  display: flex;\n  height: 100%;\n  align-items: center;\n}\n\n.horizontalmenuitem2191703659__label {\n  -archetype: text;\n  -controller-part-type: LayoutChildDisplayDropdown;\n  white-space: nowrap;\n  transition: inherit;\n}\n\n@keyframes horizontalmenusubitem3868523538__expandLeftTranslate {\n  0% {\n    transform: translateX(-34%);\n  }\n\n  100% {\n    transform: translateX(0);\n  }\n}\n\n@keyframes horizontalmenusubitem3868523538__expandRightTranslate {\n  0% {\n    transform: translateX(34%);\n  }\n\n  100% {\n    transform: translateX(0);\n  }\n}\n\n.horizontalmenusubitem3868523538__root {\n  -archetype: paintBox;\n\n  box-sizing: border-box;\n\n  display: inline-block;\n  width: 100%;\n\n  transition: inherit;\n}\n\n.horizontalmenusubitem3868523538__root:not([href]) {\n  cursor: default !important;\n}\n\n.horizontalmenusubitem3868523538__root.horizontalmenusubitem3868523538--isHovered,.horizontalmenusubitem3868523538__root.horizontalmenusubitem3868523538--isCurrentPage,.horizontalmenusubitem3868523538__root.horizontalmenusubitem3868523538--isHovered .horizontalmenusubitem3868523538__label,.horizontalmenusubitem3868523538__root.horizontalmenusubitem3868523538--isCurrentPage .horizontalmenusubitem3868523538__label {\n  transition: all 0.08s cubic-bezier(0, 0, 1, 1);\n}\n\n.horizontalmenusubitem3868523538__positionBox {\n  position: absolute;\n  z-index: 47;\n}\n\n.horizontalmenusubitem3868523538__opened {}\n.horizontalmenusubitem3868523538__collapsed {}\n.horizontalmenusubitem3868523538__expanded {}\n\n.horizontalmenusubitem3868523538__expand-left {}\n\n.horizontalmenusubitem3868523538__expand-right {}\n\n.horizontalmenusubitem3868523538__positionBox.horizontalmenusubitem3868523538__collapsed {\n  opacity: 0;\n  overflow: hidden;\n  pointer-events: none;\n  transition: opacity 0.08s cubic-bezier(0, 0, 1, 1);\n}\n\n.horizontalmenusubitem3868523538__positionBox.horizontalmenusubitem3868523538__opened {\n  transition: opacity 0.3s cubic-bezier(0.25, 1, 0.5, 1);\n}\n\n.horizontalmenusubitem3868523538__positionBox > div {\n  transition: border-color 0.08s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.08s cubic-bezier(0.25, 1, 0.5, 1);\n}\n\n.horizontalmenusubitem3868523538__positionBox:not(.horizontalmenusubitem3868523538__expanded) > div {\n  border-color: transparent;\n  box-shadow: 0 0 transparent;\n}\n\n.horizontalmenusubitem3868523538__positionBox.horizontalmenusubitem3868523538__opened > div {\n  transition: border-color 0.08s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.08s cubic-bezier(0.25, 1, 0.5, 1);\n}\n\n.horizontalmenusubitem3868523538__positionBox.horizontalmenusubitem3868523538__opened.horizontalmenusubitem3868523538__expand-left > div {\n  animation-name: horizontalmenusubitem3868523538__expandLeftTranslate;\n  animation-duration: 0.3s;\n  animation-timing-function: cubic-bezier(0.25, 1, 0.5, 1);\n}\n\n.horizontalmenusubitem3868523538__positionBox.horizontalmenusubitem3868523538__opened.horizontalmenusubitem3868523538__expand-right > div {\n  animation-name: horizontalmenusubitem3868523538__expandRightTranslate;\n  animation-duration: 0.3s;\n  animation-timing-function: cubic-bezier(0.25, 1, 0.5, 1);\n}\n\n.horizontalmenusubitem3868523538__container {\n  -archetype: box;\n  display: flex;\n}\n\n.horizontalmenusubitem3868523538__label {\n  -archetype: text;\n  -controller-part-type: LayoutChildDisplayDropdown;\n  overflow-wrap: break-word;\n  text-overflow: clip;\n  white-space: normal;\n  word-wrap: break-word;\n}\n\n.horizontalmenuheadingitem589696139__root {\n  -archetype: paintBox;\n\n  box-sizing: border-box;\n\n  display: inline-block;\n  width: 100%;\n\n  transition: inherit;\n}\n\n.horizontalmenuheadingitem589696139__root:not([href]) {\n  cursor: default !important;\n}\n\n.horizontalmenuheadingitem589696139__root.horizontalmenuheadingitem589696139--isHovered,.horizontalmenuheadingitem589696139__root.horizontalmenuheadingitem589696139--isCurrentPage,.horizontalmenuheadingitem589696139__root.horizontalmenuheadingitem589696139--isHovered .horizontalmenuheadingitem589696139__label,.horizontalmenuheadingitem589696139__root.horizontalmenuheadingitem589696139--isCurrentPage .horizontalmenuheadingitem589696139__label {\n  transition: all 0.08s cubic-bezier(0, 0, 1, 1);\n}\n\n.horizontalmenuheadingitem589696139__container {\n  -archetype: box;\n  display: flex;\n}\n\n.horizontalmenuheadingitem589696139__label {\n  -archetype: text;\n  -controller-part-type: LayoutChildDisplayDropdown;\n  color: black;\n  overflow-wrap: break-word;\n  text-overflow: clip;\n  white-space: normal;\n  word-wrap: break-word;\n}\n\n.scrollbutton3613656053__root {\n  -archetype: paddingBox;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  pointer-events: auto;\n  overflow: hidden;\n}\n\n.scrollbutton3613656053__root:hover {\n  transition: all 0.08s cubic-bezier(0, 0, 1, 1);\n}\n\n.scrollbutton3613656053__root.scrollbutton3613656053---side-4-left {\n  transform: scaleX(-1);\n  -webkit-transform: scaleX(-1);\n}\n\n.scrollbutton3613656053__root.scrollbutton3613656053---side-5-right {}\n\n.scrollbutton3613656053__root.scrollbutton3613656053--isHidden {\n  visibility: hidden;\n  pointer-events: none;\n}\n\n.scrollbutton3613656053__icon {\n  -archetype: icon;\n  -controller-part-type: LayoutChildDisplayDropdown;\n  min-width: 1px;\n  max-height: 100%;\n  max-width: 100%;\n}\n\n.scrollbutton3613656053__icon > svg {\n  width: inherit;\n  height: inherit;\n}\n\n.scrollcontrols3995638425__root {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  padding-top: inherit;\n  padding-bottom: inherit;\n  border: inherit;\n  border-color: transparent;\n\n  display: flex;\n  justify-content: space-between;\n\n  pointer-events: none;\n\n  border-radius: inherit;\n}\n.stylablebutton643855516__root {\n    -archetype: box;\n    /* -st-states: error, disabled; */\n    cursor: pointer;\n    border: none;\n    display: block;\n    min-width: 10px;\n    min-height: 10px;\n    width: 100%;\n    height: 100%;\n    box-sizing: border-box;\n    padding: 0px;\n}\n\n.stylablebutton643855516__root[disabled] {\n    pointer-events: none;\n}\n\n.stylablebutton643855516__link {\n    -archetype: box;\n    text-decoration: none;\n    box-sizing: border-box;\n    color: black;\n}\n\n.stylablebutton643855516__container {\n    display: flex;\n    flex-basis: auto;\n    justify-content: center;\n    flex-direction: row;\n    flex-grow: 1;\n    align-items: center;\n    overflow: hidden;\n    height: 100%;\n    width: 100%;\n    transition: all 0.2s ease, visibility 0s;\n}\n\n.stylablebutton643855516__label {\n    -archetype: text;\n    -controller-part-type: \"LayoutChildDisplayDropdown, LayoutFlexChildSpacing(first)\";\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    min-width: 1.8em;\n    max-width: 100%;\n    text-align: center;\n    transition: inherit;\n}\n\n.stylablebutton643855516__icon {\n    -archetype: icon;\n    -controller-part-type: \"LayoutChildDisplayDropdown, LayoutFlexChildSpacing(last)\";\n    min-width: 1px;\n    height: 50px;\n    transition: inherit;\n    flex-shrink: 0;\n    position: relative;\n}\n\n.stylablebutton643855516__icon > div,.stylablebutton643855516__icon svg {\n    width: inherit;\n    height: inherit;\n    top: 0;\n    left: 0;\n}\n.stylablebutton643855516__icon > div {\n    position: relative;\n}\n.stylablebutton643855516__icon svg {\n    position: absolute;\n}\n\n.stylableline2123045772__root {\n    -archetype: box;\n    box-sizing: border-box;\n}\n.stylableline2123045772__text {\n    -archetype: text;\n}\n\n.horizontalmenusubmenu1330664667__root {\n  -archetype: paddingBox;\n  box-sizing: border-box;\n  overflow: hidden;\n}\n\n.horizontalmenusubmenu1330664667__listWrapper {\n  max-width: 100%;\n  column-gap: 0px;\n}\n\n.horizontalmenusubmenu1330664667__pageWrapper {\n  display: flex;\n}\n\n.horizontalmenusubmenu1330664667__pageStretchWrapper {\n  margin: 0 auto;\n}\n\n.horizontalmenusubmenu1330664667__category {}\n\n.horizontalmenusubmenu1330664667__columnsList {}\n\n.horizontalmenusubmenu1330664667__flex {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n}\n\n.horizontalmenusubmenu1330664667__listItem {\n  box-sizing: border-box;\n\n  -webkit-column-break-inside: avoid; /* Chrome, Safari, Opera */\n  page-break-inside: avoid; /* Firefox */\n  break-inside: avoid; /* IE 10+ */\n}\n\n.horizontalmenusubmenu1330664667__rowItem {}\n\n.horizontalmenusubmenu1330664667__columnsList > .horizontalmenusubmenu1330664667__listItem {\n  margin-left: 0px !important;\n  margin-right: 0px !important;\n}\n\n.horizontalmenusubmenu1330664667__root.horizontalmenusubmenu1330664667---submenuMode-6-flyout .horizontalmenusubmenu1330664667__listItem {\n  margin-left: 0px !important;\n  margin-right: 0px !important;\n}\n\n.horizontalmenusubmenu1330664667__root.horizontalmenusubmenu1330664667--chrome .horizontalmenusubmenu1330664667__listItem {\n  transform: translateZ(0px);\n}\n\n/* columns submenu item */\n.horizontalmenusubmenu1330664667__heading {\n}\n\n/* columns menu item */\n.horizontalmenusubmenu1330664667__menuItem {\n}\n\n.horizontalmenusubmenu1330664667__root > ul > li:first-of-type > a,.horizontalmenusubmenu1330664667__root > ul > li:first-of-type > span {\n  margin-top: 0px !important;\n}\n\n.horizontalmenusubmenu1330664667__root > ul > li:last-of-type > a,.horizontalmenusubmenu1330664667__root > ul > li:last-of-type > span,.horizontalmenusubmenu1330664667__listWrapper > li > a:not(:only-child),.horizontalmenusubmenu1330664667__listWrapper > li > span:not(:only-child) {\n  margin-bottom: 0px !important;\n}\n\n/**\n * For focus-ring to be applied inside items BB\n */\n.visual-focus-on .stylablehorizontalmenu4089050981__root .focus-ring:not(.has-custom-focus):focus {\n  box-shadow: inset 0 0 0 1px #ffffff, inset 0 0 0 3px #116dff;\n}\n\n.stylablehorizontalmenu4089050981__root {\n  -archetype: paddingBox;\n\n  box-sizing: border-box;\n\n  display: flex;\n  height: 100%;\n  width: 100%;\n\n  transition: inherit;\n}\n\n.stylablehorizontalmenu4089050981__menu {\n  display: flex;\n  box-sizing: border-box;\n}\n\n/* root menu item */\n.stylablehorizontalmenu4089050981__menuItem {\n}\n\n.stylablehorizontalmenu4089050981__scrollButton {\n}\n\n/* first level submenu */\n.stylablehorizontalmenu4089050981__columnsLayout {\n}\n\n.stylablehorizontalmenu4089050981__leftAlignmentScrollItem {}\n\n.stylablehorizontalmenu4089050981__rightAlignmentScrollItem {}\n\n.stylablehorizontalmenu4089050981__listItem {\n  flex-grow: inherit;\n  box-sizing: border-box;\n}\n\n.stylablehorizontalmenu4089050981__positionBox {}\n\n.stylablehorizontalmenu4089050981__root.stylablehorizontalmenu4089050981---menuMode-6-scroll .stylablehorizontalmenu4089050981__menu > li > span,.stylablehorizontalmenu4089050981__root.stylablehorizontalmenu4089050981---menuMode-6-scroll .stylablehorizontalmenu4089050981__menu > li > a {\n  margin-top: 0;\n  margin-bottom: 0;\n  box-sizing: border-box;\n  height: 100%;\n}\n\n.stylablehorizontalmenu4089050981__root.stylablehorizontalmenu4089050981---menuMode-4-wrap .stylablehorizontalmenu4089050981__menu {\n  flex-wrap: wrap;\n}\n\n.stylablehorizontalmenu4089050981__root.stylablehorizontalmenu4089050981---menuMode-6-scroll.stylablehorizontalmenu4089050981---direction-3-ltr .stylablehorizontalmenu4089050981__menu > li:first-of-type > span,.stylablehorizontalmenu4089050981__root.stylablehorizontalmenu4089050981---menuMode-6-scroll.stylablehorizontalmenu4089050981---direction-3-ltr .stylablehorizontalmenu4089050981__menu > li:first-of-type > a,.stylablehorizontalmenu4089050981__root.stylablehorizontalmenu4089050981---menuMode-6-scroll.stylablehorizontalmenu4089050981---direction-3-rtl .stylablehorizontalmenu4089050981__menu > li:last-of-type > span,.stylablehorizontalmenu4089050981__root.stylablehorizontalmenu4089050981---menuMode-6-scroll.stylablehorizontalmenu4089050981---direction-3-rtl .stylablehorizontalmenu4089050981__menu > li:last-of-type > a {\n  margin-left: 0;\n}\n\n.stylablehorizontalmenu4089050981__root.stylablehorizontalmenu4089050981---menuMode-6-scroll.stylablehorizontalmenu4089050981---direction-3-ltr .stylablehorizontalmenu4089050981__menu > li:last-of-type > span,.stylablehorizontalmenu4089050981__root.stylablehorizontalmenu4089050981---menuMode-6-scroll.stylablehorizontalmenu4089050981---direction-3-ltr .stylablehorizontalmenu4089050981__menu > li:last-of-type > a,.stylablehorizontalmenu4089050981__root.stylablehorizontalmenu4089050981---menuMode-6-scroll.stylablehorizontalmenu4089050981---direction-3-rtl .stylablehorizontalmenu4089050981__menu > li:first-of-type > span,.stylablehorizontalmenu4089050981__root.stylablehorizontalmenu4089050981---menuMode-6-scroll.stylablehorizontalmenu4089050981---direction-3-rtl .stylablehorizontalmenu4089050981__menu > li:first-of-type > a {\n  margin-right: 0;\n}\n\n.stylablehorizontalmenu4089050981__root.stylablehorizontalmenu4089050981---menuMode-6-scroll .stylablehorizontalmenu4089050981__menu {\n  height: auto;\n  width: auto;\n  margin: 0;\n  flex-wrap: nowrap;\n  justify-content: flex-start !important;\n  transition: padding-right .1s !important;\n}\n\n.stylablehorizontalmenu4089050981__root.stylablehorizontalmenu4089050981---menuMode-6-scroll {\n  overflow-x: scroll;\n  scrollbar-width: none;\n  -ms-overflow-style: none;\n  -webkit-overflow-scrolling: touch;\n}\n\n.stylablehorizontalmenu4089050981__root.stylablehorizontalmenu4089050981---menuMode-6-scroll::-webkit-scrollbar {\n  display: none;\n}\n\n.stylablehorizontalmenu4089050981__root.stylablehorizontalmenu4089050981--isScrollable .stylablehorizontalmenu4089050981__menu {\n  padding-right: inherit;\n}\n"; }));