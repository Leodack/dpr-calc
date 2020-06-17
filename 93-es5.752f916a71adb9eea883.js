function _createForOfIteratorHelper(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=_unsupportedIterableToArray(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,o=!0,s=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return o=e.done,e},e:function(e){s=!0,a=e},f:function(){try{o||null==n.return||n.return()}finally{if(s)throw a}}}}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(e,t):void 0}}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function asyncGeneratorStep(e,t,n,r,i,a,o){try{var s=e[a](o),l=s.value}catch(h){return void n(h)}s.done?t(l):Promise.resolve(l).then(r,i)}function _asyncToGenerator(e){return function(){var t=this,n=arguments;return new Promise((function(r,i){var a=e.apply(t,n);function o(e){asyncGeneratorStep(a,r,i,o,s,"next",e)}function s(e){asyncGeneratorStep(a,r,i,o,s,"throw",e)}o(void 0)}))}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{"8Mb5":function(e,t,n){"use strict";n.r(t),n.d(t,"ion_virtual_scroll",(function(){return s}));var r=n("QX1p"),i=function(e,t){var n=a(e,t);return n&&e.ownerDocument?e.ownerDocument.importNode(n.content,!0).children[0]:null},a=function(e,t){switch(t){case"item":return e.querySelector("template:not([name])");case"header":return e.querySelector("template[name=header]");case"footer":return e.querySelector("template[name=footer]")}},o=function(e,t,n,r,i,a,o,s,l,h,c,u){for(var f=[],d=u+c,p=c;p<d;p++){var v=e[p];if(i){var g=i(v,p,e);null!=g&&f.push({i:h++,type:"header",value:g,index:p,height:n?n(g,p):o,reads:n?0:2,visible:!!n})}if(f.push({i:h++,type:"item",value:v,index:p,height:t?t(v,p):l,reads:t?0:2,visible:!!t}),a){var m=a(v,p,e);null!=m&&f.push({i:h++,type:"footer",value:m,index:p,height:r?r(m,p):s,reads:r?0:2,visible:!!r})}}return f},s=function(){function e(t){var n=this;_classCallCheck(this,e),Object(r.l)(this,t),this.range={offset:0,length:0},this.viewportHeight=0,this.cells=[],this.virtualDom=[],this.isEnabled=!1,this.viewportOffset=0,this.currentScrollTop=0,this.indexDirty=0,this.lastItemLen=0,this.totalHeight=0,this.approxItemHeight=45,this.approxHeaderHeight=30,this.approxFooterHeight=30,this.onScroll=function(){n.updateVirtualScroll()}}var t,n,a;return _createClass(e,[{key:"itemsChanged",value:function(){this.calcCells(),this.updateVirtualScroll()}},{key:"connectedCallback",value:(a=_asyncToGenerator(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=this.el.closest("ion-content"))){e.next=10;break}return e.next=4,t.getScrollElement();case 4:this.scrollEl=e.sent,this.contentEl=t,this.calcCells(),this.updateState(),e.next=11;break;case 10:console.error("<ion-virtual-scroll> must be used inside an <ion-content>");case 11:case"end":return e.stop()}}),e,this)}))),function(){return a.apply(this,arguments)})},{key:"componentDidUpdate",value:function(){this.updateState()}},{key:"disconnectedCallback",value:function(){this.scrollEl=void 0}},{key:"onResize",value:function(){this.calcCells(),this.updateVirtualScroll()}},{key:"positionForItem",value:function(e){return Promise.resolve(function(e,t,n){var r=t.find((function(t){return"item"===t.type&&t.index===e}));return r?n[r.i]:-1}(e,this.cells,this.getHeightIndex()))}},{key:"checkRange",value:(n=_asyncToGenerator(regeneratorRuntime.mark((function e(t){var n,r,i,a,s=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=s.length>1&&void 0!==s[1]?s[1]:-1,this.items){e.next=3;break}return e.abrupt("return");case 3:r=-1===n?this.items.length-t:n,i=function(e,t){return 0===t?0:t===(e.length>0?e[e.length-1].index:0)+1?e.length:e.findIndex((function(e){return e.index===t}))}(this.cells,t),a=o(this.items,this.itemHeight,this.headerHeight,this.footerHeight,this.headerFn,this.footerFn,this.approxHeaderHeight,this.approxFooterHeight,this.approxItemHeight,i,t,r),this.cells=function(e,t,n){if(0===n&&t.length>=e.length)return t;for(var r=0;r<t.length;r++)e[r+n]=t[r];return e}(this.cells,a,i),this.lastItemLen=this.items.length,this.indexDirty=Math.max(t-1,0),this.scheduleUpdate();case 5:case"end":return e.stop()}}),e,this)}))),function(e){return n.apply(this,arguments)})},{key:"checkEnd",value:(t=_asyncToGenerator(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.items&&this.checkRange(this.lastItemLen);case 1:case"end":return e.stop()}}),e,this)}))),function(){return t.apply(this,arguments)})},{key:"updateVirtualScroll",value:function(){this.isEnabled&&this.scrollEl&&(this.timerUpdate&&(clearTimeout(this.timerUpdate),this.timerUpdate=void 0),Object(r.f)(this.readVS.bind(this)),Object(r.n)(this.writeVS.bind(this)))}},{key:"readVS",value:function(){for(var e=this.contentEl,t=this.scrollEl,n=0,r=this.el;r&&r!==e;)n+=r.offsetTop,r=r.parentElement;this.viewportOffset=n,t&&(this.viewportHeight=t.offsetHeight,this.currentScrollTop=t.scrollTop)}},{key:"writeVS",value:function(){var e,t,n=this.indexDirty,a=(e=this.currentScrollTop-this.viewportOffset,t=this.viewportHeight,{top:Math.max(e-100,0),bottom:e+t+100}),o=this.getHeightIndex(),s=function(e,t,n){for(var r=t.top,i=t.bottom,a=0;a<e.length&&!(e[a]>r);a++);for(var o=Math.max(a-2-1,0);a<e.length&&!(e[a]>=i);a++);return{offset:o,length:Math.min(a+2,e.length)-o}}(o,a);(function(e,t,n){return e<=n.offset+n.length||t.offset!==n.offset||t.length!==n.length})(n,this.range,s)&&(this.range=s,function(e,t,n,r){var i,a=_createForOfIteratorHelper(e);try{for(a.s();!(i=a.n()).done;){var o=i.value;o.change=0,o.d=!0}}catch(v){a.e(v)}finally{a.f()}for(var s=[],l=r.offset+r.length,h=function(r){var i=n[r],a=e.find((function(e){return e.d&&e.cell===i}));if(a){var o=t[r];o!==a.top&&(a.top=o,a.change=1),a.d=!1}else s.push(i)},c=r.offset;c<l;c++)h(c);for(var u=e.filter((function(e){return e.d})),f=function(){var n=p[d],r=u.find((function(e){return e.d&&e.cell.type===n.type})),i=n.i;r?(r.d=!1,r.change=2,r.cell=n,r.top=t[i]):e.push({d:!1,cell:n,visible:!0,change:2,top:t[i]})},d=0,p=s;d<p.length;d++)f();e.filter((function(e){return e.d&&-9999!==e.top})).forEach((function(e){e.change=1,e.top=-9999}))}(this.virtualDom,o,this.cells,s),this.nodeRender?function(e,t,n,r){for(var a,o=Array.from(e.children).filter((function(e){return"TEMPLATE"!==e.tagName})),s=o.length,l=0;l<n.length;l++){var h=n[l],c=h.cell;if(2===h.change){if(l<s)t(a=o[l],c,l);else{var u=i(e,c.type);(a=t(u,c,l)||u).classList.add("virtual-item"),e.appendChild(a)}a.$ionCell=c}else a=o[l];0!==h.change&&(a.style.transform="translate3d(0,".concat(h.top,"px,0)"));var f=c.visible;h.visible!==f&&(f?a.classList.remove("virtual-loading"):a.classList.add("virtual-loading"),h.visible=f),c.reads>0&&(r(c,a),c.reads--)}}(this.el,this.nodeRender,this.virtualDom,this.updateCellHeight.bind(this)):this.domRender?this.domRender(this.virtualDom):this.renderItem&&Object(r.h)(this))}},{key:"updateCellHeight",value:function(e,t){var n=this,r=function(){if(t.$ionCell===e){var r=window.getComputedStyle(t),i=t.offsetHeight+parseFloat(r.getPropertyValue("margin-bottom"));n.setCellHeight(e,i)}};t&&t.componentOnReady?t.componentOnReady().then(r):r()}},{key:"setCellHeight",value:function(e,t){var n=e.i;e===this.cells[n]&&(e.height===t&&!0===e.visible||(e.visible=!0,e.height=t,this.indexDirty=Math.min(this.indexDirty,n),this.scheduleUpdate()))}},{key:"scheduleUpdate",value:function(){var e=this;clearTimeout(this.timerUpdate),this.timerUpdate=setTimeout((function(){return e.updateVirtualScroll()}),100)}},{key:"updateState",value:function(){var e=!(!this.scrollEl||!this.cells);e!==this.isEnabled&&(this.enableScrollEvents(e),e&&this.updateVirtualScroll())}},{key:"calcCells",value:function(){this.items&&(this.lastItemLen=this.items.length,this.cells=o(this.items,this.itemHeight,this.headerHeight,this.footerHeight,this.headerFn,this.footerFn,this.approxHeaderHeight,this.approxFooterHeight,this.approxItemHeight,0,0,this.lastItemLen),this.indexDirty=0)}},{key:"getHeightIndex",value:function(){return this.indexDirty!==1/0&&this.calcHeightIndex(this.indexDirty),this.heightIndex}},{key:"calcHeightIndex",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.heightIndex=function(e,t){if(!e)return new Uint32Array(t);if(e.length===t)return e;if(t>e.length){var n=new Uint32Array(t);return n.set(e),n}return e.subarray(0,t)}(this.heightIndex,this.cells.length),this.totalHeight=function(e,t,n){for(var r=e[n],i=n;i<e.length;i++)e[i]=r,r+=t[i].height;return r}(this.heightIndex,this.cells,e),this.indexDirty=1/0}},{key:"enableScrollEvents",value:function(e){var t=this;this.rmEvent&&(this.rmEvent(),this.rmEvent=void 0);var n=this.scrollEl;n&&(this.isEnabled=e,n.addEventListener("scroll",this.onScroll),this.rmEvent=function(){n.removeEventListener("scroll",t.onScroll)})}},{key:"renderVirtualNode",value:function(e){var t=e.cell,n=t.type,r=t.value,i=t.index;switch(n){case"item":return this.renderItem(r,i);case"header":return this.renderHeader(r,i);case"footer":return this.renderFooter(r,i)}}},{key:"render",value:function(){var e=this;return Object(r.j)(r.b,{style:{height:"".concat(this.totalHeight,"px")}},this.renderItem&&Object(r.j)(l,{dom:this.virtualDom},this.virtualDom.map((function(t){return e.renderVirtualNode(t)}))))}},{key:"el",get:function(){return Object(r.g)(this)}}],[{key:"watchers",get:function(){return{itemHeight:["itemsChanged"],headerHeight:["itemsChanged"],footerHeight:["itemsChanged"],items:["itemsChanged"]}}}]),e}(),l=function(e,t,n){var r=e.dom;return n.map(t,(function(e,t){var n=r[t],i=e.vattrs||{},a=i.class||"";return a+="virtual-item ",n.visible||(a+="virtual-loading"),Object.assign(Object.assign({},e),{vattrs:Object.assign(Object.assign({},i),{class:a,style:Object.assign(Object.assign({},i.style),{transform:"translate3d(0,".concat(n.top,"px,0)")})})})}))};s.style="ion-virtual-scroll{display:block;position:relative;width:100%;contain:strict;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}ion-virtual-scroll>.virtual-loading{opacity:0}ion-virtual-scroll>.virtual-item{position:absolute !important;top:0 !important;right:0 !important;left:0 !important;-webkit-transition-duration:0ms;transition-duration:0ms;will-change:transform}"}}]);