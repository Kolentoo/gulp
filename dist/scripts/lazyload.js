!function(e,t,o,n){var i=e(t);e.fn.lazyload=function(o){function r(){var t=0;l.each(function(){var o=e(this);if((!a.skip_invisible||o.is(":visible"))&&!e.abovethetop(this,a)&&!e.leftofbegin(this,a))if(e.belowthefold(this,a)||e.rightoffold(this,a)){if(++t>a.failure_limit)return!1}else o.trigger("appear"),t=0})}var f,l=this,a={threshold:0,failure_limit:0,event:"scroll",effect:"show",container:t,data_attribute:"original",skip_invisible:!0,appear:null,load:null};return o&&(n!==o.failurelimit&&(o.failure_limit=o.failurelimit,delete o.failurelimit),n!==o.effectspeed&&(o.effect_speed=o.effectspeed,delete o.effectspeed),e.extend(a,o)),f=a.container===n||a.container===t?i:e(a.container),0===a.event.indexOf("scroll")&&f.bind(a.event,function(e){return r()}),this.each(function(){var t=this,o=e(t);t.loaded=!1,o.one("appear",function(){if(!this.loaded){if(a.appear){var n=l.length;a.appear.call(t,n,a)}e("<img />").bind("load",function(){o.hide().attr("src",o.data(a.data_attribute))[a.effect](a.effect_speed),t.loaded=!0;var n=e.grep(l,function(e){return!e.loaded});if(l=e(n),a.load){var i=l.length;a.load.call(t,i,a)}}).attr("src",o.data(a.data_attribute))}}),0!==a.event.indexOf("scroll")&&o.bind(a.event,function(e){t.loaded||o.trigger("appear")})}),i.bind("resize",function(e){r()}),/iphone|ipod|ipad.*os 5/gi.test(navigator.appVersion)&&i.bind("pageshow",function(t){t.originalEvent.persisted&&l.each(function(){e(this).trigger("appear")})}),e(t).load(function(){r()}),this},e.belowthefold=function(o,r){return(r.container===n||r.container===t?i.height()+i.scrollTop():e(r.container).offset().top+e(r.container).height())<=e(o).offset().top-r.threshold},e.rightoffold=function(o,r){return(r.container===n||r.container===t?i.width()+i.scrollLeft():e(r.container).offset().left+e(r.container).width())<=e(o).offset().left-r.threshold},e.abovethetop=function(o,r){return(r.container===n||r.container===t?i.scrollTop():e(r.container).offset().top)>=e(o).offset().top+r.threshold+e(o).height()},e.leftofbegin=function(o,r){return(r.container===n||r.container===t?i.scrollLeft():e(r.container).offset().left)>=e(o).offset().left+r.threshold+e(o).width()},e.inviewport=function(t,o){return!(e.rightoffold(t,o)||e.leftofbegin(t,o)||e.belowthefold(t,o)||e.abovethetop(t,o))},e.extend(e.expr[":"],{"below-the-fold":function(t){return e.belowthefold(t,{threshold:0})},"above-the-top":function(t){return!e.belowthefold(t,{threshold:0})},"right-of-screen":function(t){return e.rightoffold(t,{threshold:0})},"left-of-screen":function(t){return!e.rightoffold(t,{threshold:0})},"in-viewport":function(t){return e.inviewport(t,{threshold:0})},"above-the-fold":function(t){return!e.belowthefold(t,{threshold:0})},"right-of-fold":function(t){return e.rightoffold(t,{threshold:0})},"left-of-fold":function(t){return!e.rightoffold(t,{threshold:0})}})}(jQuery,window,document);