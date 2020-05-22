/*! Copyright (c) 2011 Piotr Rochala (http://rocha.la)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 * Version: 1.3.8
 *
 */
(function(e){e.fn.extend({slimScroll:function(f){var a=e.extend({width:"auto",height:"250px",size:"7px",color:"#000",position:"right",distance:"1px",start:"top",opacity:.4,alwaysVisible:!1,disableFadeOut:!1,railVisible:!1,railColor:"#333",railOpacity:.2,railDraggable:!0,railClass:"slimScrollRail",barClass:"slimScrollBar",wrapperClass:"slimScrollDiv",allowPageScroll:!1,wheelStep:20,touchScrollStep:200,borderRadius:"7px",railBorderRadius:"7px"},f);this.each(function(){function v(d){if(r){d=d||window.event;
var c=0;d.wheelDelta&&(c=-d.wheelDelta/120);d.detail&&(c=d.detail/3);e(d.target||d.srcTarget||d.srcElement).closest("."+a.wrapperClass).is(b.parent())&&n(c,!0);d.preventDefault&&!k&&d.preventDefault();k||(d.returnValue=!1)}}function n(d,g,e){k=!1;var f=b.outerHeight()-c.outerHeight();g&&(g=parseInt(c.css("top"))+d*parseInt(a.wheelStep)/100*c.outerHeight(),g=Math.min(Math.max(g,0),f),g=0<d?Math.ceil(g):Math.floor(g),c.css({top:g+"px"}));l=parseInt(c.css("top"))/(b.outerHeight()-c.outerHeight());g=
l*(b[0].scrollHeight-b.outerHeight());e&&(g=d,d=g/b[0].scrollHeight*b.outerHeight(),d=Math.min(Math.max(d,0),f),c.css({top:d+"px"}));b.scrollTop(g);b.trigger("slimscrolling",~~g);w();p()}function x(){u=Math.max(b.outerHeight()/b[0].scrollHeight*b.outerHeight(),30);c.css({height:u+"px"});var a=u==b.outerHeight()?"none":"block";c.css({display:a})}function w(){x();clearTimeout(B);l==~~l?(k=a.allowPageScroll,C!=l&&b.trigger("slimscroll",0==~~l?"top":"bottom")):k=!1;C=l;u>=b.outerHeight()?k=!0:(c.stop(!0,
!0).fadeIn("fast"),a.railVisible&&m.stop(!0,!0).fadeIn("fast"))}function p(){a.alwaysVisible||(B=setTimeout(function(){a.disableFadeOut&&r||y||z||(c.fadeOut("slow"),m.fadeOut("slow"))},1E3))}var r,y,z,B,A,u,l,C,k=!1,b=e(this);if(b.parent().hasClass(a.wrapperClass)){var q=b.scrollTop(),c=b.siblings("."+a.barClass),m=b.siblings("."+a.railClass);x();if(e.isPlainObject(f)){if("height"in f&&"auto"==f.height){b.parent().css("height","auto");b.css("height","auto");var h=b.parent().parent().height();b.parent().css("height",
h);b.css("height",h)}else"height"in f&&(h=f.height,b.parent().css("height",h),b.css("height",h));if("scrollTo"in f)q=parseInt(a.scrollTo);else if("scrollBy"in f)q+=parseInt(a.scrollBy);else if("destroy"in f){c.remove();m.remove();b.unwrap();return}n(q,!1,!0)}}else if(!(e.isPlainObject(f)&&"destroy"in f)){a.height="auto"==a.height?b.parent().height():a.height;q=e("<div></div>").addClass(a.wrapperClass).css({position:"relative",overflow:"hidden",width:a.width,height:a.height});b.css({overflow:"hidden",
width:a.width,height:a.height});var m=e("<div></div>").addClass(a.railClass).css({width:a.size,height:"100%",position:"absolute",top:0,display:a.alwaysVisible&&a.railVisible?"block":"none","border-radius":a.railBorderRadius,background:a.railColor,opacity:a.railOpacity,zIndex:90}),c=e("<div></div>").addClass(a.barClass).css({background:a.color,width:a.size,position:"absolute",top:0,opacity:a.opacity,display:a.alwaysVisible?"block":"none","border-radius":a.borderRadius,BorderRadius:a.borderRadius,MozBorderRadius:a.borderRadius,
WebkitBorderRadius:a.borderRadius,zIndex:99}),h="right"==a.position?{right:a.distance}:{left:a.distance};m.css(h);c.css(h);b.wrap(q);b.parent().append(c);b.parent().append(m);a.railDraggable&&c.bind("mousedown",function(a){var b=e(document);z=!0;t=parseFloat(c.css("top"));pageY=a.pageY;b.bind("mousemove.slimscroll",function(a){currTop=t+a.pageY-pageY;c.css("top",currTop);n(0,c.position().top,!1)});b.bind("mouseup.slimscroll",function(a){z=!1;p();b.unbind(".slimscroll")});return!1}).bind("selectstart.slimscroll",
function(a){a.stopPropagation();a.preventDefault();return!1});m.hover(function(){w()},function(){p()});c.hover(function(){y=!0},function(){y=!1});b.hover(function(){r=!0;w();p()},function(){r=!1;p()});b.bind("touchstart",function(a,b){a.originalEvent.touches.length&&(A=a.originalEvent.touches[0].pageY)});b.bind("touchmove",function(b){k||b.originalEvent.preventDefault();b.originalEvent.touches.length&&(n((A-b.originalEvent.touches[0].pageY)/a.touchScrollStep,!0),A=b.originalEvent.touches[0].pageY)});
x();"bottom"===a.start?(c.css({top:b.outerHeight()-c.outerHeight()}),n(0,!0)):"top"!==a.start&&(n(e(a.start).position().top,null,!0),a.alwaysVisible||c.hide());window.addEventListener?(this.addEventListener("DOMMouseScroll",v,!1),this.addEventListener("mousewheel",v,!1)):document.attachEvent("onmousewheel",v)}});return this}});e.fn.extend({slimscroll:e.fn.slimScroll})})(jQuery);
/*
 * Toastr
 * Copyright 2012-2015
 * Authors: John Papa, Hans Fjällemark, and Tim Ferrell.
 * All Rights Reserved.
 * Use, reproduction, distribution, and modification of this code is subject to the terms and
 * conditions of the MIT license, available at http://www.opensource.org/licenses/mit-license.php
 *
 * ARIA Support: Greta Krafsig
 *
 * Project: https://github.com/CodeSeven/toastr
 */
/* global define */
(function (define) {
    define(['jquery'], function ($) {
        return (function () {
            var $container;
            var listener;
            var toastId = 0;
            var toastType = {
                error: 'error',
                info: 'info',
                success: 'success',
                warning: 'warning'
            };

            var toastr = {
                clear: clear,
                remove: remove,
                error: error,
                getContainer: getContainer,
                info: info,
                options: {},
                subscribe: subscribe,
                success: success,
                version: '2.1.3',
                warning: warning
            };

            var previousToast;

            return toastr;

            ////////////////

            function error(message, title, optionsOverride) {
                return notify({
                    type: toastType.error,
                    iconClass: getOptions().iconClasses.error,
                    message: message,
                    optionsOverride: optionsOverride,
                    title: title
                });
            }

            function getContainer(options, create) {
                if (!options) { options = getOptions(); }
                $container = $('#' + options.containerId);
                if ($container.length) {
                    return $container;
                }
                if (create) {
                    $container = createContainer(options);
                }
                return $container;
            }

            function info(message, title, optionsOverride) {
                return notify({
                    type: toastType.info,
                    iconClass: getOptions().iconClasses.info,
                    message: message,
                    optionsOverride: optionsOverride,
                    title: title
                });
            }

            function subscribe(callback) {
                listener = callback;
            }

            function success(message, title, optionsOverride) {
                return notify({
                    type: toastType.success,
                    iconClass: getOptions().iconClasses.success,
                    message: message,
                    optionsOverride: optionsOverride,
                    title: title
                });
            }

            function warning(message, title, optionsOverride) {
                return notify({
                    type: toastType.warning,
                    iconClass: getOptions().iconClasses.warning,
                    message: message,
                    optionsOverride: optionsOverride,
                    title: title
                });
            }

            function clear($toastElement, clearOptions) {
                var options = getOptions();
                if (!$container) { getContainer(options); }
                if (!clearToast($toastElement, options, clearOptions)) {
                    clearContainer(options);
                }
            }

            function remove($toastElement) {
                var options = getOptions();
                if (!$container) { getContainer(options); }
                if ($toastElement && $(':focus', $toastElement).length === 0) {
                    removeToast($toastElement);
                    return;
                }
                if ($container.children().length) {
                    $container.remove();
                }
            }

            // internal functions

            function clearContainer (options) {
                var toastsToClear = $container.children();
                for (var i = toastsToClear.length - 1; i >= 0; i--) {
                    clearToast($(toastsToClear[i]), options);
                }
            }

            function clearToast ($toastElement, options, clearOptions) {
                var force = clearOptions && clearOptions.force ? clearOptions.force : false;
                if ($toastElement && (force || $(':focus', $toastElement).length === 0)) {
                    $toastElement[options.hideMethod]({
                        duration: options.hideDuration,
                        easing: options.hideEasing,
                        complete: function () { removeToast($toastElement); }
                    });
                    return true;
                }
                return false;
            }

            function createContainer(options) {
                $container = $('<div/>')
                    .attr('id', options.containerId)
                    .addClass(options.positionClass);

                $container.appendTo($(options.target));
                return $container;
            }

            function getDefaults() {
                return {
                    tapToDismiss: true,
                    toastClass: 'toast',
                    containerId: 'toast-container',
                    debug: false,

                    showMethod: 'fadeIn', //fadeIn, slideDown, and show are built into jQuery
                    showDuration: 300,
                    showEasing: 'swing', //swing and linear are built into jQuery
                    onShown: undefined,
                    hideMethod: 'fadeOut',
                    hideDuration: 1000,
                    hideEasing: 'swing',
                    onHidden: undefined,
                    closeMethod: false,
                    closeDuration: false,
                    closeEasing: false,
                    closeOnHover: true,

                    extendedTimeOut: 1000,
                    iconClasses: {
                        error: 'toast-error',
                        info: 'toast-info',
                        success: 'toast-success',
                        warning: 'toast-warning'
                    },
                    iconClass: 'toast-info',
                    positionClass: 'toast-top-right',
                    timeOut: 5000, // Set timeOut and extendedTimeOut to 0 to make it sticky
                    titleClass: 'toast-title',
                    messageClass: 'toast-message',
                    escapeHtml: false,
                    target: 'body',
                    closeHtml: '<button type="button">&times;</button>',
                    closeClass: 'toast-close-button',
                    newestOnTop: true,
                    preventDuplicates: false,
                    progressBar: false,
                    progressClass: 'toast-progress',
                    rtl: false
                };
            }

            function publish(args) {
                if (!listener) { return; }
                listener(args);
            }

            function notify(map) {
                var options = getOptions();
                var iconClass = map.iconClass || options.iconClass;

                if (typeof (map.optionsOverride) !== 'undefined') {
                    options = $.extend(options, map.optionsOverride);
                    iconClass = map.optionsOverride.iconClass || iconClass;
                }

                if (shouldExit(options, map)) { return; }

                toastId++;

                $container = getContainer(options, true);

                var intervalId = null;
                var $toastElement = $('<div/>');
                var $titleElement = $('<div/>');
                var $messageElement = $('<div/>');
                var $progressElement = $('<div/>');
                var $closeElement = $(options.closeHtml);
                var progressBar = {
                    intervalId: null,
                    hideEta: null,
                    maxHideTime: null
                };
                var response = {
                    toastId: toastId,
                    state: 'visible',
                    startTime: new Date(),
                    options: options,
                    map: map
                };

                personalizeToast();

                displayToast();

                handleEvents();

                publish(response);

                if (options.debug && console) {
                    console.log(response);
                }

                return $toastElement;

                function escapeHtml(source) {
                    if (source == null) {
                        source = '';
                    }

                    return source
                        .replace(/&/g, '&amp;')
                        .replace(/"/g, '&quot;')
                        .replace(/'/g, '&#39;')
                        .replace(/</g, '&lt;')
                        .replace(/>/g, '&gt;');
                }

                function personalizeToast() {
                    setIcon();
                    setTitle();
                    setMessage();
                    setCloseButton();
                    setProgressBar();
                    setRTL();
                    setSequence();
                    setAria();
                }

                function setAria() {
                    var ariaValue = '';
                    switch (map.iconClass) {
                        case 'toast-success':
                        case 'toast-info':
                            ariaValue =  'polite';
                            break;
                        default:
                            ariaValue = 'assertive';
                    }
                    $toastElement.attr('aria-live', ariaValue);
                }

                function handleEvents() {
                    if (options.closeOnHover) {
                        $toastElement.hover(stickAround, delayedHideToast);
                    }

                    if (!options.onclick && options.tapToDismiss) {
                        $toastElement.click(hideToast);
                    }

                    if (options.closeButton && $closeElement) {
                        $closeElement.click(function (event) {
                            if (event.stopPropagation) {
                                event.stopPropagation();
                            } else if (event.cancelBubble !== undefined && event.cancelBubble !== true) {
                                event.cancelBubble = true;
                            }

                            if (options.onCloseClick) {
                                options.onCloseClick(event);
                            }

                            hideToast(true);
                        });
                    }

                    if (options.onclick) {
                        $toastElement.click(function (event) {
                            options.onclick(event);
                            hideToast();
                        });
                    }
                }

                function displayToast() {
                    $toastElement.hide();

                    $toastElement[options.showMethod](
                        {duration: options.showDuration, easing: options.showEasing, complete: options.onShown}
                    );

                    if (options.timeOut > 0) {
                        intervalId = setTimeout(hideToast, options.timeOut);
                        progressBar.maxHideTime = parseFloat(options.timeOut);
                        progressBar.hideEta = new Date().getTime() + progressBar.maxHideTime;
                        if (options.progressBar) {
                            progressBar.intervalId = setInterval(updateProgress, 10);
                        }
                    }
                }

                function setIcon() {
                    if (map.iconClass) {
                        $toastElement.addClass(options.toastClass).addClass(iconClass);
                    }
                }

                function setSequence() {
                    if (options.newestOnTop) {
                        $container.prepend($toastElement);
                    } else {
                        $container.append($toastElement);
                    }
                }

                function setTitle() {
                    if (map.title) {
                        var suffix = map.title;
                        if (options.escapeHtml) {
                            suffix = escapeHtml(map.title);
                        }
                        $titleElement.append(suffix).addClass(options.titleClass);
                        $toastElement.append($titleElement);
                    }
                }

                function setMessage() {
                    if (map.message) {
                        var suffix = map.message;
                        if (options.escapeHtml) {
                            suffix = escapeHtml(map.message);
                        }
                        $messageElement.append(suffix).addClass(options.messageClass);
                        $toastElement.append($messageElement);
                    }
                }

                function setCloseButton() {
                    if (options.closeButton) {
                        $closeElement.addClass(options.closeClass).attr('role', 'button');
                        $toastElement.prepend($closeElement);
                    }
                }

                function setProgressBar() {
                    if (options.progressBar) {
                        $progressElement.addClass(options.progressClass);
                        $toastElement.prepend($progressElement);
                    }
                }

                function setRTL() {
                    if (options.rtl) {
                        $toastElement.addClass('rtl');
                    }
                }

                function shouldExit(options, map) {
                    if (options.preventDuplicates) {
                        if (map.message === previousToast) {
                            return true;
                        } else {
                            previousToast = map.message;
                        }
                    }
                    return false;
                }

                function hideToast(override) {
                    var method = override && options.closeMethod !== false ? options.closeMethod : options.hideMethod;
                    var duration = override && options.closeDuration !== false ?
                        options.closeDuration : options.hideDuration;
                    var easing = override && options.closeEasing !== false ? options.closeEasing : options.hideEasing;
                    if ($(':focus', $toastElement).length && !override) {
                        return;
                    }
                    clearTimeout(progressBar.intervalId);
                    return $toastElement[method]({
                        duration: duration,
                        easing: easing,
                        complete: function () {
                            removeToast($toastElement);
                            clearTimeout(intervalId);
                            if (options.onHidden && response.state !== 'hidden') {
                                options.onHidden();
                            }
                            response.state = 'hidden';
                            response.endTime = new Date();
                            publish(response);
                        }
                    });
                }

                function delayedHideToast() {
                    if (options.timeOut > 0 || options.extendedTimeOut > 0) {
                        intervalId = setTimeout(hideToast, options.extendedTimeOut);
                        progressBar.maxHideTime = parseFloat(options.extendedTimeOut);
                        progressBar.hideEta = new Date().getTime() + progressBar.maxHideTime;
                    }
                }

                function stickAround() {
                    clearTimeout(intervalId);
                    progressBar.hideEta = 0;
                    $toastElement.stop(true, true)[options.showMethod](
                        {duration: options.showDuration, easing: options.showEasing}
                    );
                }

                function updateProgress() {
                    var percentage = ((progressBar.hideEta - (new Date().getTime())) / progressBar.maxHideTime) * 100;
                    $progressElement.width(percentage + '%');
                }
            }

            function getOptions() {
                return $.extend({}, getDefaults(), toastr.options);
            }

            function removeToast($toastElement) {
                if (!$container) { $container = getContainer(); }
                if ($toastElement.is(':visible')) {
                    return;
                }
                $toastElement.remove();
                $toastElement = null;
                if ($container.children().length === 0) {
                    $container.remove();
                    previousToast = undefined;
                }
            }

        })();
    });
}(typeof define === 'function' && define.amd ? define : function (deps, factory) {
    if (typeof module !== 'undefined' && module.exports) { //Node
        module.exports = factory(require('jquery'));
    } else {
        window.toastr = factory(window.jQuery);
    }
}));

!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.swal=e():t.swal=e()}(this,function(){return function(t){function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=8)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o="swal-button";e.CLASS_NAMES={MODAL:"swal-modal",OVERLAY:"swal-overlay",SHOW_MODAL:"swal-overlay--show-modal",MODAL_TITLE:"swal-title",MODAL_TEXT:"swal-text",ICON:"swal-icon",ICON_CUSTOM:"swal-icon--custom",CONTENT:"swal-content",FOOTER:"swal-footer",BUTTON_CONTAINER:"swal-button-container",BUTTON:o,CONFIRM_BUTTON:o+"--confirm",CANCEL_BUTTON:o+"--cancel",DANGER_BUTTON:o+"--danger",BUTTON_LOADING:o+"--loading",BUTTON_LOADER:o+"__loader"},e.default=e.CLASS_NAMES},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getNode=function(t){var e="."+t;return document.querySelector(e)},e.stringToNode=function(t){var e=document.createElement("div");return e.innerHTML=t.trim(),e.firstChild},e.insertAfter=function(t,e){var n=e.nextSibling;e.parentNode.insertBefore(t,n)},e.removeNode=function(t){t.parentElement.removeChild(t)},e.throwErr=function(t){throw t=t.replace(/ +(?= )/g,""),"SweetAlert: "+(t=t.trim())},e.isPlainObject=function(t){if("[object Object]"!==Object.prototype.toString.call(t))return!1;var e=Object.getPrototypeOf(t);return null===e||e===Object.prototype},e.ordinalSuffixOf=function(t){var e=t%10,n=t%100;return 1===e&&11!==n?t+"st":2===e&&12!==n?t+"nd":3===e&&13!==n?t+"rd":t+"th"}},function(t,e,n){"use strict";function o(t){for(var n in t)e.hasOwnProperty(n)||(e[n]=t[n])}Object.defineProperty(e,"__esModule",{value:!0}),o(n(25));var r=n(26);e.overlayMarkup=r.default,o(n(27)),o(n(28)),o(n(29));var i=n(0),a=i.default.MODAL_TITLE,s=i.default.MODAL_TEXT,c=i.default.ICON,l=i.default.FOOTER;e.iconMarkup='\n  <div class="'+c+'"></div>',e.titleMarkup='\n  <div class="'+a+'"></div>\n',e.textMarkup='\n  <div class="'+s+'"></div>',e.footerMarkup='\n  <div class="'+l+'"></div>\n'},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1);e.CONFIRM_KEY="confirm",e.CANCEL_KEY="cancel";var r={visible:!0,text:null,value:null,className:"",closeModal:!0},i=Object.assign({},r,{visible:!1,text:"Cancel",value:null}),a=Object.assign({},r,{text:"OK",value:!0});e.defaultButtonList={cancel:i,confirm:a};var s=function(t){switch(t){case e.CONFIRM_KEY:return a;case e.CANCEL_KEY:return i;default:var n=t.charAt(0).toUpperCase()+t.slice(1);return Object.assign({},r,{text:n,value:t})}},c=function(t,e){var n=s(t);return!0===e?Object.assign({},n,{visible:!0}):"string"==typeof e?Object.assign({},n,{visible:!0,text:e}):o.isPlainObject(e)?Object.assign({visible:!0},n,e):Object.assign({},n,{visible:!1})},l=function(t){for(var e={},n=0,o=Object.keys(t);n<o.length;n++){var r=o[n],a=t[r],s=c(r,a);e[r]=s}return e.cancel||(e.cancel=i),e},u=function(t){var n={};switch(t.length){case 1:n[e.CANCEL_KEY]=Object.assign({},i,{visible:!1});break;case 2:n[e.CANCEL_KEY]=c(e.CANCEL_KEY,t[0]),n[e.CONFIRM_KEY]=c(e.CONFIRM_KEY,t[1]);break;default:o.throwErr("Invalid number of 'buttons' in array ("+t.length+").\n      If you want more than 2 buttons, you need to use an object!")}return n};e.getButtonListOpts=function(t){var n=e.defaultButtonList;return"string"==typeof t?n[e.CONFIRM_KEY]=c(e.CONFIRM_KEY,t):Array.isArray(t)?n=u(t):o.isPlainObject(t)?n=l(t):!0===t?n=u([!0,!0]):!1===t?n=u([!1,!1]):void 0===t&&(n=e.defaultButtonList),n}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r=n(2),i=n(0),a=i.default.MODAL,s=i.default.OVERLAY,c=n(30),l=n(31),u=n(32),f=n(33);e.injectElIntoModal=function(t){var e=o.getNode(a),n=o.stringToNode(t);return e.appendChild(n),n};var d=function(t){t.className=a,t.textContent=""},p=function(t,e){d(t);var n=e.className;n&&t.classList.add(n)};e.initModalContent=function(t){var e=o.getNode(a);p(e,t),c.default(t.icon),l.initTitle(t.title),l.initText(t.text),f.default(t.content),u.default(t.buttons,t.dangerMode)};var m=function(){var t=o.getNode(s),e=o.stringToNode(r.modalMarkup);t.appendChild(e)};e.default=m},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(3),r={isOpen:!1,promise:null,actions:{},timer:null},i=Object.assign({},r);e.resetState=function(){i=Object.assign({},r)},e.setActionValue=function(t){if("string"==typeof t)return a(o.CONFIRM_KEY,t);for(var e in t)a(e,t[e])};var a=function(t,e){i.actions[t]||(i.actions[t]={}),Object.assign(i.actions[t],{value:e})};e.setActionOptionsFor=function(t,e){var n=(void 0===e?{}:e).closeModal,o=void 0===n||n;Object.assign(i.actions[t],{closeModal:o})},e.default=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r=n(3),i=n(0),a=i.default.OVERLAY,s=i.default.SHOW_MODAL,c=i.default.BUTTON,l=i.default.BUTTON_LOADING,u=n(5);e.openModal=function(){o.getNode(a).classList.add(s),u.default.isOpen=!0};var f=function(){o.getNode(a).classList.remove(s),u.default.isOpen=!1};e.onAction=function(t){void 0===t&&(t=r.CANCEL_KEY);var e=u.default.actions[t],n=e.value;if(!1===e.closeModal){var i=c+"--"+t;o.getNode(i).classList.add(l)}else f();u.default.promise.resolve(n)},e.getState=function(){var t=Object.assign({},u.default);return delete t.promise,delete t.timer,t},e.stopLoading=function(){for(var t=document.querySelectorAll("."+c),e=0;e<t.length;e++){t[e].classList.remove(l)}}},function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){(function(e){t.exports=e.sweetAlert=n(9)}).call(e,n(7))},function(t,e,n){(function(e){t.exports=e.swal=n(10)}).call(e,n(7))},function(t,e,n){"undefined"!=typeof window&&n(11),n(16);var o=n(23).default;t.exports=o},function(t,e,n){var o=n(12);"string"==typeof o&&(o=[[t.i,o,""]]);var r={insertAt:"top"};r.transform=void 0;n(14)(o,r);o.locals&&(t.exports=o.locals)},function(t,e,n){e=t.exports=n(13)(void 0),e.push([t.i,'.swal-icon--error{border-color:#f27474;-webkit-animation:animateErrorIcon .5s;animation:animateErrorIcon .5s}.swal-icon--error__x-mark{position:relative;display:block;-webkit-animation:animateXMark .5s;animation:animateXMark .5s}.swal-icon--error__line{position:absolute;height:5px;width:47px;background-color:#f27474;display:block;top:37px;border-radius:2px}.swal-icon--error__line--left{-webkit-transform:rotate(45deg);transform:rotate(45deg);left:17px}.swal-icon--error__line--right{-webkit-transform:rotate(-45deg);transform:rotate(-45deg);right:16px}@-webkit-keyframes animateErrorIcon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}to{-webkit-transform:rotateX(0deg);transform:rotateX(0deg);opacity:1}}@keyframes animateErrorIcon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}to{-webkit-transform:rotateX(0deg);transform:rotateX(0deg);opacity:1}}@-webkit-keyframes animateXMark{0%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}50%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}80%{-webkit-transform:scale(1.15);transform:scale(1.15);margin-top:-6px}to{-webkit-transform:scale(1);transform:scale(1);margin-top:0;opacity:1}}@keyframes animateXMark{0%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}50%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}80%{-webkit-transform:scale(1.15);transform:scale(1.15);margin-top:-6px}to{-webkit-transform:scale(1);transform:scale(1);margin-top:0;opacity:1}}.swal-icon--warning{border-color:#f8bb86;-webkit-animation:pulseWarning .75s infinite alternate;animation:pulseWarning .75s infinite alternate}.swal-icon--warning__body{width:5px;height:47px;top:10px;border-radius:2px;margin-left:-2px}.swal-icon--warning__body,.swal-icon--warning__dot{position:absolute;left:50%;background-color:#f8bb86}.swal-icon--warning__dot{width:7px;height:7px;border-radius:50%;margin-left:-4px;bottom:-11px}@-webkit-keyframes pulseWarning{0%{border-color:#f8d486}to{border-color:#f8bb86}}@keyframes pulseWarning{0%{border-color:#f8d486}to{border-color:#f8bb86}}.swal-icon--success{border-color:#a5dc86}.swal-icon--success:after,.swal-icon--success:before{content:"";border-radius:50%;position:absolute;width:60px;height:120px;background:#fff;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.swal-icon--success:before{border-radius:120px 0 0 120px;top:-7px;left:-33px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:60px 60px;transform-origin:60px 60px}.swal-icon--success:after{border-radius:0 120px 120px 0;top:-11px;left:30px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:0 60px;transform-origin:0 60px;-webkit-animation:rotatePlaceholder 4.25s ease-in;animation:rotatePlaceholder 4.25s ease-in}.swal-icon--success__ring{width:80px;height:80px;border:4px solid hsla(98,55%,69%,.2);border-radius:50%;box-sizing:content-box;position:absolute;left:-4px;top:-4px;z-index:2}.swal-icon--success__hide-corners{width:5px;height:90px;background-color:#fff;padding:1px;position:absolute;left:28px;top:8px;z-index:1;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.swal-icon--success__line{height:5px;background-color:#a5dc86;display:block;border-radius:2px;position:absolute;z-index:2}.swal-icon--success__line--tip{width:25px;left:14px;top:46px;-webkit-transform:rotate(45deg);transform:rotate(45deg);-webkit-animation:animateSuccessTip .75s;animation:animateSuccessTip .75s}.swal-icon--success__line--long{width:47px;right:8px;top:38px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-animation:animateSuccessLong .75s;animation:animateSuccessLong .75s}@-webkit-keyframes rotatePlaceholder{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}to{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@keyframes rotatePlaceholder{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}to{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@-webkit-keyframes animateSuccessTip{0%{width:0;left:1px;top:19px}54%{width:0;left:1px;top:19px}70%{width:50px;left:-8px;top:37px}84%{width:17px;left:21px;top:48px}to{width:25px;left:14px;top:45px}}@keyframes animateSuccessTip{0%{width:0;left:1px;top:19px}54%{width:0;left:1px;top:19px}70%{width:50px;left:-8px;top:37px}84%{width:17px;left:21px;top:48px}to{width:25px;left:14px;top:45px}}@-webkit-keyframes animateSuccessLong{0%{width:0;right:46px;top:54px}65%{width:0;right:46px;top:54px}84%{width:55px;right:0;top:35px}to{width:47px;right:8px;top:38px}}@keyframes animateSuccessLong{0%{width:0;right:46px;top:54px}65%{width:0;right:46px;top:54px}84%{width:55px;right:0;top:35px}to{width:47px;right:8px;top:38px}}.swal-icon--info{border-color:#c9dae1}.swal-icon--info:before{width:5px;height:29px;bottom:17px;border-radius:2px;margin-left:-2px}.swal-icon--info:after,.swal-icon--info:before{content:"";position:absolute;left:50%;background-color:#c9dae1}.swal-icon--info:after{width:7px;height:7px;border-radius:50%;margin-left:-3px;top:19px}.swal-icon{width:80px;height:80px;border-width:4px;border-style:solid;border-radius:50%;padding:0;position:relative;box-sizing:content-box;margin:20px auto}.swal-icon:first-child{margin-top:32px}.swal-icon--custom{width:auto;height:auto;max-width:100%;border:none;border-radius:0}.swal-icon img{max-width:100%;max-height:100%}.swal-title{color:rgba(0,0,0,.65);font-weight:600;text-transform:none;position:relative;display:block;padding:13px 16px;font-size:27px;line-height:normal;text-align:center;margin-bottom:0}.swal-title:first-child{margin-top:26px}.swal-title:not(:first-child){padding-bottom:0}.swal-title:not(:last-child){margin-bottom:13px}.swal-text{font-size:16px;position:relative;float:none;line-height:normal;vertical-align:top;text-align:left;display:inline-block;margin:0;padding:0 10px;font-weight:400;color:rgba(0,0,0,.64);max-width:calc(100% - 20px);overflow-wrap:break-word;box-sizing:border-box}.swal-text:first-child{margin-top:45px}.swal-text:last-child{margin-bottom:45px}.swal-footer{text-align:right;padding-top:13px;margin-top:13px;padding:13px 16px;border-radius:inherit;border-top-left-radius:0;border-top-right-radius:0}.swal-button-container{margin:5px;display:inline-block;position:relative}.swal-button{background-color:#7cd1f9;color:#fff;border:none;box-shadow:none;border-radius:5px;font-weight:600;font-size:14px;padding:10px 24px;margin:0;cursor:pointer}.swal-button:not([disabled]):hover{background-color:#78cbf2}.swal-button:active{background-color:#70bce0}.swal-button:focus{outline:none;box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(43,114,165,.29)}.swal-button[disabled]{opacity:.5;cursor:default}.swal-button::-moz-focus-inner{border:0}.swal-button--cancel{color:#555;background-color:#efefef}.swal-button--cancel:not([disabled]):hover{background-color:#e8e8e8}.swal-button--cancel:active{background-color:#d7d7d7}.swal-button--cancel:focus{box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(116,136,150,.29)}.swal-button--danger{background-color:#e64942}.swal-button--danger:not([disabled]):hover{background-color:#df4740}.swal-button--danger:active{background-color:#cf423b}.swal-button--danger:focus{box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(165,43,43,.29)}.swal-content{padding:0 20px;margin-top:20px;font-size:medium}.swal-content:last-child{margin-bottom:20px}.swal-content__input,.swal-content__textarea{-webkit-appearance:none;background-color:#fff;border:none;font-size:14px;display:block;box-sizing:border-box;width:100%;border:1px solid rgba(0,0,0,.14);padding:10px 13px;border-radius:2px;transition:border-color .2s}.swal-content__input:focus,.swal-content__textarea:focus{outline:none;border-color:#6db8ff}.swal-content__textarea{resize:vertical}.swal-button--loading{color:transparent}.swal-button--loading~.swal-button__loader{opacity:1}.swal-button__loader{position:absolute;height:auto;width:43px;z-index:2;left:50%;top:50%;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%);text-align:center;pointer-events:none;opacity:0}.swal-button__loader div{display:inline-block;float:none;vertical-align:baseline;width:9px;height:9px;padding:0;border:none;margin:2px;opacity:.4;border-radius:7px;background-color:hsla(0,0%,100%,.9);transition:background .2s;-webkit-animation:swal-loading-anim 1s infinite;animation:swal-loading-anim 1s infinite}.swal-button__loader div:nth-child(3n+2){-webkit-animation-delay:.15s;animation-delay:.15s}.swal-button__loader div:nth-child(3n+3){-webkit-animation-delay:.3s;animation-delay:.3s}@-webkit-keyframes swal-loading-anim{0%{opacity:.4}20%{opacity:.4}50%{opacity:1}to{opacity:.4}}@keyframes swal-loading-anim{0%{opacity:.4}20%{opacity:.4}50%{opacity:1}to{opacity:.4}}.swal-overlay{position:fixed;top:0;bottom:0;left:0;right:0;text-align:center;font-size:0;overflow-y:auto;background-color:rgba(0,0,0,.4);z-index:10000;pointer-events:none;opacity:0;transition:opacity .3s}.swal-overlay:before{content:" ";display:inline-block;vertical-align:middle;height:100%}.swal-overlay--show-modal{opacity:1;pointer-events:auto}.swal-overlay--show-modal .swal-modal{opacity:1;pointer-events:auto;box-sizing:border-box;-webkit-animation:showSweetAlert .3s;animation:showSweetAlert .3s;will-change:transform}.swal-modal{width:478px;opacity:0;pointer-events:none;background-color:#fff;text-align:center;border-radius:5px;position:static;margin:20px auto;display:inline-block;vertical-align:middle;-webkit-transform:scale(1);transform:scale(1);-webkit-transform-origin:50% 50%;transform-origin:50% 50%;z-index:10001;transition:opacity .2s,-webkit-transform .3s;transition:transform .3s,opacity .2s;transition:transform .3s,opacity .2s,-webkit-transform .3s}@media (max-width:500px){.swal-modal{width:calc(100% - 20px)}}@-webkit-keyframes showSweetAlert{0%{-webkit-transform:scale(1);transform:scale(1)}1%{-webkit-transform:scale(.5);transform:scale(.5)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}to{-webkit-transform:scale(1);transform:scale(1)}}@keyframes showSweetAlert{0%{-webkit-transform:scale(1);transform:scale(1)}1%{-webkit-transform:scale(.5);transform:scale(.5)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}to{-webkit-transform:scale(1);transform:scale(1)}}',""])},function(t,e){function n(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var i=o(r);return[n].concat(r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"})).concat([i]).join("\n")}return[n].join("\n")}function o(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var o=n(e,t);return e[2]?"@media "+e[2]+"{"+o+"}":o}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(o[i]=!0)}for(r=0;r<t.length;r++){var a=t[r];"number"==typeof a[0]&&o[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(t,e,n){function o(t,e){for(var n=0;n<t.length;n++){var o=t[n],r=m[o.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](o.parts[i]);for(;i<o.parts.length;i++)r.parts.push(u(o.parts[i],e))}else{for(var a=[],i=0;i<o.parts.length;i++)a.push(u(o.parts[i],e));m[o.id]={id:o.id,refs:1,parts:a}}}}function r(t,e){for(var n=[],o={},r=0;r<t.length;r++){var i=t[r],a=e.base?i[0]+e.base:i[0],s=i[1],c=i[2],l=i[3],u={css:s,media:c,sourceMap:l};o[a]?o[a].parts.push(u):n.push(o[a]={id:a,parts:[u]})}return n}function i(t,e){var n=v(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=w[w.length-1];if("top"===t.insertAt)o?o.nextSibling?n.insertBefore(e,o.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),w.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(e)}}function a(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=w.indexOf(t);e>=0&&w.splice(e,1)}function s(t){var e=document.createElement("style");return t.attrs.type="text/css",l(e,t.attrs),i(t,e),e}function c(t){var e=document.createElement("link");return t.attrs.type="text/css",t.attrs.rel="stylesheet",l(e,t.attrs),i(t,e),e}function l(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function u(t,e){var n,o,r,i;if(e.transform&&t.css){if(!(i=e.transform(t.css)))return function(){};t.css=i}if(e.singleton){var l=h++;n=g||(g=s(e)),o=f.bind(null,n,l,!1),r=f.bind(null,n,l,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=c(e),o=p.bind(null,n,e),r=function(){a(n),n.href&&URL.revokeObjectURL(n.href)}):(n=s(e),o=d.bind(null,n),r=function(){a(n)});return o(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;o(t=e)}else r()}}function f(t,e,n,o){var r=n?"":o.css;if(t.styleSheet)t.styleSheet.cssText=x(e,r);else{var i=document.createTextNode(r),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}function d(t,e){var n=e.css,o=e.media;if(o&&t.setAttribute("media",o),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}function p(t,e,n){var o=n.css,r=n.sourceMap,i=void 0===e.convertToAbsoluteUrls&&r;(e.convertToAbsoluteUrls||i)&&(o=y(o)),r&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var a=new Blob([o],{type:"text/css"}),s=t.href;t.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}var m={},b=function(t){var e;return function(){return void 0===e&&(e=t.apply(this,arguments)),e}}(function(){return window&&document&&document.all&&!window.atob}),v=function(t){var e={};return function(n){return void 0===e[n]&&(e[n]=t.call(this,n)),e[n]}}(function(t){return document.querySelector(t)}),g=null,h=0,w=[],y=n(15);t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");e=e||{},e.attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||(e.singleton=b()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=r(t,e);return o(n,e),function(t){for(var i=[],a=0;a<n.length;a++){var s=n[a],c=m[s.id];c.refs--,i.push(c)}if(t){o(r(t,e),e)}for(var a=0;a<i.length;a++){var c=i[a];if(0===c.refs){for(var l=0;l<c.parts.length;l++)c.parts[l]();delete m[c.id]}}}};var x=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,o=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var r=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(r))return t;var i;return i=0===r.indexOf("//")?r:0===r.indexOf("/")?n+r:o+r.replace(/^\.\//,""),"url("+JSON.stringify(i)+")"})}},function(t,e,n){var o=n(17);"undefined"==typeof window||window.Promise||(window.Promise=o),n(21),String.prototype.includes||(String.prototype.includes=function(t,e){"use strict";return"number"!=typeof e&&(e=0),!(e+t.length>this.length)&&-1!==this.indexOf(t,e)}),Array.prototype.includes||Object.defineProperty(Array.prototype,"includes",{value:function(t,e){if(null==this)throw new TypeError('"this" is null or not defined');var n=Object(this),o=n.length>>>0;if(0===o)return!1;for(var r=0|e,i=Math.max(r>=0?r:o-Math.abs(r),0);i<o;){if(function(t,e){return t===e||"number"==typeof t&&"number"==typeof e&&isNaN(t)&&isNaN(e)}(n[i],t))return!0;i++}return!1}}),"undefined"!=typeof window&&function(t){t.forEach(function(t){t.hasOwnProperty("remove")||Object.defineProperty(t,"remove",{configurable:!0,enumerable:!0,writable:!0,value:function(){this.parentNode.removeChild(this)}})})}([Element.prototype,CharacterData.prototype,DocumentType.prototype])},function(t,e,n){(function(e){!function(n){function o(){}function r(t,e){return function(){t.apply(e,arguments)}}function i(t){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new");if("function"!=typeof t)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],f(t,this)}function a(t,e){for(;3===t._state;)t=t._value;if(0===t._state)return void t._deferreds.push(e);t._handled=!0,i._immediateFn(function(){var n=1===t._state?e.onFulfilled:e.onRejected;if(null===n)return void(1===t._state?s:c)(e.promise,t._value);var o;try{o=n(t._value)}catch(t){return void c(e.promise,t)}s(e.promise,o)})}function s(t,e){try{if(e===t)throw new TypeError("A promise cannot be resolved with itself.");if(e&&("object"==typeof e||"function"==typeof e)){var n=e.then;if(e instanceof i)return t._state=3,t._value=e,void l(t);if("function"==typeof n)return void f(r(n,e),t)}t._state=1,t._value=e,l(t)}catch(e){c(t,e)}}function c(t,e){t._state=2,t._value=e,l(t)}function l(t){2===t._state&&0===t._deferreds.length&&i._immediateFn(function(){t._handled||i._unhandledRejectionFn(t._value)});for(var e=0,n=t._deferreds.length;e<n;e++)a(t,t._deferreds[e]);t._deferreds=null}function u(t,e,n){this.onFulfilled="function"==typeof t?t:null,this.onRejected="function"==typeof e?e:null,this.promise=n}function f(t,e){var n=!1;try{t(function(t){n||(n=!0,s(e,t))},function(t){n||(n=!0,c(e,t))})}catch(t){if(n)return;n=!0,c(e,t)}}var d=setTimeout;i.prototype.catch=function(t){return this.then(null,t)},i.prototype.then=function(t,e){var n=new this.constructor(o);return a(this,new u(t,e,n)),n},i.all=function(t){var e=Array.prototype.slice.call(t);return new i(function(t,n){function o(i,a){try{if(a&&("object"==typeof a||"function"==typeof a)){var s=a.then;if("function"==typeof s)return void s.call(a,function(t){o(i,t)},n)}e[i]=a,0==--r&&t(e)}catch(t){n(t)}}if(0===e.length)return t([]);for(var r=e.length,i=0;i<e.length;i++)o(i,e[i])})},i.resolve=function(t){return t&&"object"==typeof t&&t.constructor===i?t:new i(function(e){e(t)})},i.reject=function(t){return new i(function(e,n){n(t)})},i.race=function(t){return new i(function(e,n){for(var o=0,r=t.length;o<r;o++)t[o].then(e,n)})},i._immediateFn="function"==typeof e&&function(t){e(t)}||function(t){d(t,0)},i._unhandledRejectionFn=function(t){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",t)},i._setImmediateFn=function(t){i._immediateFn=t},i._setUnhandledRejectionFn=function(t){i._unhandledRejectionFn=t},void 0!==t&&t.exports?t.exports=i:n.Promise||(n.Promise=i)}(this)}).call(e,n(18).setImmediate)},function(t,e,n){function o(t,e){this._id=t,this._clearFn=e}var r=Function.prototype.apply;e.setTimeout=function(){return new o(r.call(setTimeout,window,arguments),clearTimeout)},e.setInterval=function(){return new o(r.call(setInterval,window,arguments),clearInterval)},e.clearTimeout=e.clearInterval=function(t){t&&t.close()},o.prototype.unref=o.prototype.ref=function(){},o.prototype.close=function(){this._clearFn.call(window,this._id)},e.enroll=function(t,e){clearTimeout(t._idleTimeoutId),t._idleTimeout=e},e.unenroll=function(t){clearTimeout(t._idleTimeoutId),t._idleTimeout=-1},e._unrefActive=e.active=function(t){clearTimeout(t._idleTimeoutId);var e=t._idleTimeout;e>=0&&(t._idleTimeoutId=setTimeout(function(){t._onTimeout&&t._onTimeout()},e))},n(19),e.setImmediate=setImmediate,e.clearImmediate=clearImmediate},function(t,e,n){(function(t,e){!function(t,n){"use strict";function o(t){"function"!=typeof t&&(t=new Function(""+t));for(var e=new Array(arguments.length-1),n=0;n<e.length;n++)e[n]=arguments[n+1];var o={callback:t,args:e};return l[c]=o,s(c),c++}function r(t){delete l[t]}function i(t){var e=t.callback,o=t.args;switch(o.length){case 0:e();break;case 1:e(o[0]);break;case 2:e(o[0],o[1]);break;case 3:e(o[0],o[1],o[2]);break;default:e.apply(n,o)}}function a(t){if(u)setTimeout(a,0,t);else{var e=l[t];if(e){u=!0;try{i(e)}finally{r(t),u=!1}}}}if(!t.setImmediate){var s,c=1,l={},u=!1,f=t.document,d=Object.getPrototypeOf&&Object.getPrototypeOf(t);d=d&&d.setTimeout?d:t,"[object process]"==={}.toString.call(t.process)?function(){s=function(t){e.nextTick(function(){a(t)})}}():function(){if(t.postMessage&&!t.importScripts){var e=!0,n=t.onmessage;return t.onmessage=function(){e=!1},t.postMessage("","*"),t.onmessage=n,e}}()?function(){var e="setImmediate$"+Math.random()+"$",n=function(n){n.source===t&&"string"==typeof n.data&&0===n.data.indexOf(e)&&a(+n.data.slice(e.length))};t.addEventListener?t.addEventListener("message",n,!1):t.attachEvent("onmessage",n),s=function(n){t.postMessage(e+n,"*")}}():t.MessageChannel?function(){var t=new MessageChannel;t.port1.onmessage=function(t){a(t.data)},s=function(e){t.port2.postMessage(e)}}():f&&"onreadystatechange"in f.createElement("script")?function(){var t=f.documentElement;s=function(e){var n=f.createElement("script");n.onreadystatechange=function(){a(e),n.onreadystatechange=null,t.removeChild(n),n=null},t.appendChild(n)}}():function(){s=function(t){setTimeout(a,0,t)}}(),d.setImmediate=o,d.clearImmediate=r}}("undefined"==typeof self?void 0===t?this:t:self)}).call(e,n(7),n(20))},function(t,e){function n(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function r(t){if(u===setTimeout)return setTimeout(t,0);if((u===n||!u)&&setTimeout)return u=setTimeout,setTimeout(t,0);try{return u(t,0)}catch(e){try{return u.call(null,t,0)}catch(e){return u.call(this,t,0)}}}function i(t){if(f===clearTimeout)return clearTimeout(t);if((f===o||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(t);try{return f(t)}catch(e){try{return f.call(null,t)}catch(e){return f.call(this,t)}}}function a(){b&&p&&(b=!1,p.length?m=p.concat(m):v=-1,m.length&&s())}function s(){if(!b){var t=r(a);b=!0;for(var e=m.length;e;){for(p=m,m=[];++v<e;)p&&p[v].run();v=-1,e=m.length}p=null,b=!1,i(t)}}function c(t,e){this.fun=t,this.array=e}function l(){}var u,f,d=t.exports={};!function(){try{u="function"==typeof setTimeout?setTimeout:n}catch(t){u=n}try{f="function"==typeof clearTimeout?clearTimeout:o}catch(t){f=o}}();var p,m=[],b=!1,v=-1;d.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];m.push(new c(t,e)),1!==m.length||b||r(s)},c.prototype.run=function(){this.fun.apply(null,this.array)},d.title="browser",d.browser=!0,d.env={},d.argv=[],d.version="",d.versions={},d.on=l,d.addListener=l,d.once=l,d.off=l,d.removeListener=l,d.removeAllListeners=l,d.emit=l,d.prependListener=l,d.prependOnceListener=l,d.listeners=function(t){return[]},d.binding=function(t){throw new Error("process.binding is not supported")},d.cwd=function(){return"/"},d.chdir=function(t){throw new Error("process.chdir is not supported")},d.umask=function(){return 0}},function(t,e,n){"use strict";n(22).polyfill()},function(t,e,n){"use strict";function o(t,e){if(void 0===t||null===t)throw new TypeError("Cannot convert first argument to object");for(var n=Object(t),o=1;o<arguments.length;o++){var r=arguments[o];if(void 0!==r&&null!==r)for(var i=Object.keys(Object(r)),a=0,s=i.length;a<s;a++){var c=i[a],l=Object.getOwnPropertyDescriptor(r,c);void 0!==l&&l.enumerable&&(n[c]=r[c])}}return n}function r(){Object.assign||Object.defineProperty(Object,"assign",{enumerable:!1,configurable:!0,writable:!0,value:o})}t.exports={assign:o,polyfill:r}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(24),r=n(6),i=n(5),a=n(36),s=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];if("undefined"!=typeof window){var n=a.getOpts.apply(void 0,t);return new Promise(function(t,e){i.default.promise={resolve:t,reject:e},o.default(n),setTimeout(function(){r.openModal()})})}};s.close=r.onAction,s.getState=r.getState,s.setActionValue=i.setActionValue,s.stopLoading=r.stopLoading,s.setDefaults=a.setDefaults,e.default=s},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r=n(0),i=r.default.MODAL,a=n(4),s=n(34),c=n(35),l=n(1);e.init=function(t){o.getNode(i)||(document.body||l.throwErr("You can only use SweetAlert AFTER the DOM has loaded!"),s.default(),a.default()),a.initModalContent(t),c.default(t)},e.default=e.init},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),r=o.default.MODAL;e.modalMarkup='\n  <div class="'+r+'" role="dialog" aria-modal="true"></div>',e.default=e.modalMarkup},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),r=o.default.OVERLAY,i='<div \n    class="'+r+'"\n    tabIndex="-1">\n  </div>';e.default=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),r=o.default.ICON;e.errorIconMarkup=function(){var t=r+"--error",e=t+"__line";return'\n    <div class="'+t+'__x-mark">\n      <span class="'+e+" "+e+'--left"></span>\n      <span class="'+e+" "+e+'--right"></span>\n    </div>\n  '},e.warningIconMarkup=function(){var t=r+"--warning";return'\n    <span class="'+t+'__body">\n      <span class="'+t+'__dot"></span>\n    </span>\n  '},e.successIconMarkup=function(){var t=r+"--success";return'\n    <span class="'+t+"__line "+t+'__line--long"></span>\n    <span class="'+t+"__line "+t+'__line--tip"></span>\n\n    <div class="'+t+'__ring"></div>\n    <div class="'+t+'__hide-corners"></div>\n  '}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),r=o.default.CONTENT;e.contentMarkup='\n  <div class="'+r+'">\n\n  </div>\n'},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),r=o.default.BUTTON_CONTAINER,i=o.default.BUTTON,a=o.default.BUTTON_LOADER;e.buttonMarkup='\n  <div class="'+r+'">\n\n    <button\n      class="'+i+'"\n    ></button>\n\n    <div class="'+a+'">\n      <div></div>\n      <div></div>\n      <div></div>\n    </div>\n\n  </div>\n'},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(4),r=n(2),i=n(0),a=i.default.ICON,s=i.default.ICON_CUSTOM,c=["error","warning","success","info"],l={error:r.errorIconMarkup(),warning:r.warningIconMarkup(),success:r.successIconMarkup()},u=function(t,e){var n=a+"--"+t;e.classList.add(n);var o=l[t];o&&(e.innerHTML=o)},f=function(t,e){e.classList.add(s);var n=document.createElement("img");n.src=t,e.appendChild(n)},d=function(t){if(t){var e=o.injectElIntoModal(r.iconMarkup);c.includes(t)?u(t,e):f(t,e)}};e.default=d},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(2),r=n(4),i=function(t){navigator.userAgent.includes("AppleWebKit")&&(t.style.display="none",t.offsetHeight,t.style.display="")};e.initTitle=function(t){if(t){var e=r.injectElIntoModal(o.titleMarkup);e.textContent=t,i(e)}},e.initText=function(t){if(t){var e=document.createDocumentFragment();t.split("\n").forEach(function(t,n,o){e.appendChild(document.createTextNode(t)),n<o.length-1&&e.appendChild(document.createElement("br"))});var n=r.injectElIntoModal(o.textMarkup);n.appendChild(e),i(n)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r=n(4),i=n(0),a=i.default.BUTTON,s=i.default.DANGER_BUTTON,c=n(3),l=n(2),u=n(6),f=n(5),d=function(t,e,n){var r=e.text,i=e.value,d=e.className,p=e.closeModal,m=o.stringToNode(l.buttonMarkup),b=m.querySelector("."+a),v=a+"--"+t;if(b.classList.add(v),d){(Array.isArray(d)?d:d.split(" ")).filter(function(t){return t.length>0}).forEach(function(t){b.classList.add(t)})}n&&t===c.CONFIRM_KEY&&b.classList.add(s),b.textContent=r;var g={};return g[t]=i,f.setActionValue(g),f.setActionOptionsFor(t,{closeModal:p}),b.addEventListener("click",function(){return u.onAction(t)}),m},p=function(t,e){var n=r.injectElIntoModal(l.footerMarkup);for(var o in t){var i=t[o],a=d(o,i,e);i.visible&&n.appendChild(a)}0===n.children.length&&n.remove()};e.default=p},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(3),r=n(4),i=n(2),a=n(5),s=n(6),c=n(0),l=c.default.CONTENT,u=function(t){t.addEventListener("input",function(t){var e=t.target,n=e.value;a.setActionValue(n)}),t.addEventListener("keyup",function(t){if("Enter"===t.key)return s.onAction(o.CONFIRM_KEY)}),setTimeout(function(){t.focus(),a.setActionValue("")},0)},f=function(t,e,n){var o=document.createElement(e),r=l+"__"+e;o.classList.add(r);for(var i in n){var a=n[i];o[i]=a}"input"===e&&u(o),t.appendChild(o)},d=function(t){if(t){var e=r.injectElIntoModal(i.contentMarkup),n=t.element,o=t.attributes;"string"==typeof n?f(e,n,o):e.appendChild(n)}};e.default=d},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r=n(2),i=function(){var t=o.stringToNode(r.overlayMarkup);document.body.appendChild(t)};e.default=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(5),r=n(6),i=n(1),a=n(3),s=n(0),c=s.default.MODAL,l=s.default.BUTTON,u=s.default.OVERLAY,f=function(t){t.preventDefault(),v()},d=function(t){t.preventDefault(),g()},p=function(t){if(o.default.isOpen)switch(t.key){case"Escape":return r.onAction(a.CANCEL_KEY)}},m=function(t){if(o.default.isOpen)switch(t.key){case"Tab":return f(t)}},b=function(t){if(o.default.isOpen)return"Tab"===t.key&&t.shiftKey?d(t):void 0},v=function(){var t=i.getNode(l);t&&(t.tabIndex=0,t.focus())},g=function(){var t=i.getNode(c),e=t.querySelectorAll("."+l),n=e.length-1,o=e[n];o&&o.focus()},h=function(t){t[t.length-1].addEventListener("keydown",m)},w=function(t){t[0].addEventListener("keydown",b)},y=function(){var t=i.getNode(c),e=t.querySelectorAll("."+l);e.length&&(h(e),w(e))},x=function(t){if(i.getNode(u)===t.target)return r.onAction(a.CANCEL_KEY)},_=function(t){var e=i.getNode(u);e.removeEventListener("click",x),t&&e.addEventListener("click",x)},k=function(t){o.default.timer&&clearTimeout(o.default.timer),t&&(o.default.timer=window.setTimeout(function(){return r.onAction(a.CANCEL_KEY)},t))},O=function(t){t.closeOnEsc?document.addEventListener("keyup",p):document.removeEventListener("keyup",p),t.dangerMode?v():g(),y(),_(t.closeOnClickOutside),k(t.timer)};e.default=O},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r=n(3),i=n(37),a=n(38),s={title:null,text:null,icon:null,buttons:r.defaultButtonList,content:null,className:null,closeOnClickOutside:!0,closeOnEsc:!0,dangerMode:!1,timer:null},c=Object.assign({},s);e.setDefaults=function(t){c=Object.assign({},s,t)};var l=function(t){var e=t&&t.button,n=t&&t.buttons;return void 0!==e&&void 0!==n&&o.throwErr("Cannot set both 'button' and 'buttons' options!"),void 0!==e?{confirm:e}:n},u=function(t){return o.ordinalSuffixOf(t+1)},f=function(t,e){o.throwErr(u(e)+" argument ('"+t+"') is invalid")},d=function(t,e){var n=t+1,r=e[n];o.isPlainObject(r)||void 0===r||o.throwErr("Expected "+u(n)+" argument ('"+r+"') to be a plain object")},p=function(t,e){var n=t+1,r=e[n];void 0!==r&&o.throwErr("Unexpected "+u(n)+" argument ("+r+")")},m=function(t,e,n,r){var i=typeof e,a="string"===i,s=e instanceof Element;if(a){if(0===n)return{text:e};if(1===n)return{text:e,title:r[0]};if(2===n)return d(n,r),{icon:e};f(e,n)}else{if(s&&0===n)return d(n,r),{content:e};if(o.isPlainObject(e))return p(n,r),e;f(e,n)}};e.getOpts=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n={};t.forEach(function(e,o){var r=m(0,e,o,t);Object.assign(n,r)});var o=l(n);n.buttons=r.getButtonListOpts(o),delete n.button,n.content=i.getContentOpts(n.content);var u=Object.assign({},s,c,n);return Object.keys(u).forEach(function(t){a.DEPRECATED_OPTS[t]&&a.logDeprecation(t)}),u}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r={element:"input",attributes:{placeholder:""}};e.getContentOpts=function(t){var e={};return o.isPlainObject(t)?Object.assign(e,t):t instanceof Element?{element:t}:"input"===t?r:null}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.logDeprecation=function(t){var n=e.DEPRECATED_OPTS[t],o=n.onlyRename,r=n.replacement,i=n.subOption,a=n.link,s=o?"renamed":"deprecated",c='SweetAlert warning: "'+t+'" option has been '+s+".";if(r){c+=" Please use"+(i?' "'+i+'" in ':" ")+'"'+r+'" instead.'}var l="https://sweetalert.js.org";c+=a?" More details: "+l+a:" More details: "+l+"/guides/#upgrading-from-1x",console.warn(c)},e.DEPRECATED_OPTS={type:{replacement:"icon",link:"/docs/#icon"},imageUrl:{replacement:"icon",link:"/docs/#icon"},customClass:{replacement:"className",onlyRename:!0,link:"/docs/#classname"},imageSize:{},showCancelButton:{replacement:"buttons",link:"/docs/#buttons"},showConfirmButton:{replacement:"button",link:"/docs/#button"},confirmButtonText:{replacement:"button",link:"/docs/#button"},confirmButtonColor:{},cancelButtonText:{replacement:"buttons",link:"/docs/#buttons"},closeOnConfirm:{replacement:"button",subOption:"closeModal",link:"/docs/#button"},closeOnCancel:{replacement:"buttons",subOption:"closeModal",link:"/docs/#buttons"},showLoaderOnConfirm:{replacement:"buttons"},animation:{},inputType:{replacement:"content",link:"/docs/#content"},inputValue:{replacement:"content",link:"/docs/#content"},inputPlaceholder:{replacement:"content",link:"/docs/#content"},html:{replacement:"content",link:"/docs/#content"},allowEscapeKey:{replacement:"closeOnEsc",onlyRename:!0,link:"/docs/#closeonesc"},allowClickOutside:{replacement:"closeOnClickOutside",onlyRename:!0,link:"/docs/#closeonclickoutside"}}}])});
/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */

;(function(root, factory) {

  if (typeof define === 'function' && define.amd) {
    define(factory);
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.NProgress = factory();
  }

})(this, function() {
  var NProgress = {};

  NProgress.version = '0.2.0';

  var Settings = NProgress.settings = {
    minimum: 0.08,
    easing: 'ease',
    positionUsing: '',
    speed: 200,
    trickle: true,
    trickleRate: 0.02,
    trickleSpeed: 800,
    showSpinner: true,
    barSelector: '[role="bar"]',
    spinnerSelector: '[role="spinner"]',
    parent: 'body',
    template: '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
  };

  /**
   * Updates configuration.
   *
   *     NProgress.configure({
   *       minimum: 0.1
   *     });
   */
  NProgress.configure = function(options) {
    var key, value;
    for (key in options) {
      value = options[key];
      if (value !== undefined && options.hasOwnProperty(key)) Settings[key] = value;
    }

    return this;
  };

  /**
   * Last number.
   */

  NProgress.status = null;

  /**
   * Sets the progress bar status, where `n` is a number from `0.0` to `1.0`.
   *
   *     NProgress.set(0.4);
   *     NProgress.set(1.0);
   */

  NProgress.set = function(n) {
    var started = NProgress.isStarted();

    n = clamp(n, Settings.minimum, 1);
    NProgress.status = (n === 1 ? null : n);

    var progress = NProgress.render(!started),
        bar      = progress.querySelector(Settings.barSelector),
        speed    = Settings.speed,
        ease     = Settings.easing;

    progress.offsetWidth; /* Repaint */

    queue(function(next) {
      // Set positionUsing if it hasn't already been set
      if (Settings.positionUsing === '') Settings.positionUsing = NProgress.getPositioningCSS();

      // Add transition
      css(bar, barPositionCSS(n, speed, ease));

      if (n === 1) {
        // Fade out
        css(progress, { 
          transition: 'none', 
          opacity: 1 
        });
        progress.offsetWidth; /* Repaint */

        setTimeout(function() {
          css(progress, { 
            transition: 'all ' + speed + 'ms linear', 
            opacity: 0 
          });
          setTimeout(function() {
            NProgress.remove();
            next();
          }, speed);
        }, speed);
      } else {
        setTimeout(next, speed);
      }
    });

    return this;
  };

  NProgress.isStarted = function() {
    return typeof NProgress.status === 'number';
  };

  /**
   * Shows the progress bar.
   * This is the same as setting the status to 0%, except that it doesn't go backwards.
   *
   *     NProgress.start();
   *
   */
  NProgress.start = function() {
    if (!NProgress.status) NProgress.set(0);

    var work = function() {
      setTimeout(function() {
        if (!NProgress.status) return;
        NProgress.trickle();
        work();
      }, Settings.trickleSpeed);
    };

    if (Settings.trickle) work();

    return this;
  };

  /**
   * Hides the progress bar.
   * This is the *sort of* the same as setting the status to 100%, with the
   * difference being `done()` makes some placebo effect of some realistic motion.
   *
   *     NProgress.done();
   *
   * If `true` is passed, it will show the progress bar even if its hidden.
   *
   *     NProgress.done(true);
   */

  NProgress.done = function(force) {
    if (!force && !NProgress.status) return this;

    return NProgress.inc(0.3 + 0.5 * Math.random()).set(1);
  };

  /**
   * Increments by a random amount.
   */

  NProgress.inc = function(amount) {
    var n = NProgress.status;

    if (!n) {
      return NProgress.start();
    } else {
      if (typeof amount !== 'number') {
        amount = (1 - n) * clamp(Math.random() * n, 0.1, 0.95);
      }

      n = clamp(n + amount, 0, 0.994);
      return NProgress.set(n);
    }
  };

  NProgress.trickle = function() {
    return NProgress.inc(Math.random() * Settings.trickleRate);
  };

  /**
   * Waits for all supplied jQuery promises and
   * increases the progress as the promises resolve.
   *
   * @param $promise jQUery Promise
   */
  (function() {
    var initial = 0, current = 0;

    NProgress.promise = function($promise) {
      if (!$promise || $promise.state() === "resolved") {
        return this;
      }

      if (current === 0) {
        NProgress.start();
      }

      initial++;
      current++;

      $promise.always(function() {
        current--;
        if (current === 0) {
            initial = 0;
            NProgress.done();
        } else {
            NProgress.set((initial - current) / initial);
        }
      });

      return this;
    };

  })();

  /**
   * (Internal) renders the progress bar markup based on the `template`
   * setting.
   */

  NProgress.render = function(fromStart) {
    if (NProgress.isRendered()) return document.getElementById('nprogress');

    addClass(document.documentElement, 'nprogress-busy');
    
    var progress = document.createElement('div');
    progress.id = 'nprogress';
    progress.innerHTML = Settings.template;

    var bar      = progress.querySelector(Settings.barSelector),
        perc     = fromStart ? '-100' : toBarPerc(NProgress.status || 0),
        parent   = document.querySelector(Settings.parent),
        spinner;
    
    css(bar, {
      transition: 'all 0 linear',
      transform: 'translate3d(' + perc + '%,0,0)'
    });

    if (!Settings.showSpinner) {
      spinner = progress.querySelector(Settings.spinnerSelector);
      spinner && removeElement(spinner);
    }

    if (parent != document.body) {
      addClass(parent, 'nprogress-custom-parent');
    }

    parent.appendChild(progress);
    return progress;
  };

  /**
   * Removes the element. Opposite of render().
   */

  NProgress.remove = function() {
    removeClass(document.documentElement, 'nprogress-busy');
    removeClass(document.querySelector(Settings.parent), 'nprogress-custom-parent');
    var progress = document.getElementById('nprogress');
    progress && removeElement(progress);
  };

  /**
   * Checks if the progress bar is rendered.
   */

  NProgress.isRendered = function() {
    return !!document.getElementById('nprogress');
  };

  /**
   * Determine which positioning CSS rule to use.
   */

  NProgress.getPositioningCSS = function() {
    // Sniff on document.body.style
    var bodyStyle = document.body.style;

    // Sniff prefixes
    var vendorPrefix = ('WebkitTransform' in bodyStyle) ? 'Webkit' :
                       ('MozTransform' in bodyStyle) ? 'Moz' :
                       ('msTransform' in bodyStyle) ? 'ms' :
                       ('OTransform' in bodyStyle) ? 'O' : '';

    if (vendorPrefix + 'Perspective' in bodyStyle) {
      // Modern browsers with 3D support, e.g. Webkit, IE10
      return 'translate3d';
    } else if (vendorPrefix + 'Transform' in bodyStyle) {
      // Browsers without 3D support, e.g. IE9
      return 'translate';
    } else {
      // Browsers without translate() support, e.g. IE7-8
      return 'margin';
    }
  };

  /**
   * Helpers
   */

  function clamp(n, min, max) {
    if (n < min) return min;
    if (n > max) return max;
    return n;
  }

  /**
   * (Internal) converts a percentage (`0..1`) to a bar translateX
   * percentage (`-100%..0%`).
   */

  function toBarPerc(n) {
    return (-1 + n) * 100;
  }


  /**
   * (Internal) returns the correct CSS for changing the bar's
   * position given an n percentage, and speed and ease from Settings
   */

  function barPositionCSS(n, speed, ease) {
    var barCSS;

    if (Settings.positionUsing === 'translate3d') {
      barCSS = { transform: 'translate3d('+toBarPerc(n)+'%,0,0)' };
    } else if (Settings.positionUsing === 'translate') {
      barCSS = { transform: 'translate('+toBarPerc(n)+'%,0)' };
    } else {
      barCSS = { 'margin-left': toBarPerc(n)+'%' };
    }

    barCSS.transition = 'all '+speed+'ms '+ease;

    return barCSS;
  }

  /**
   * (Internal) Queues a function to be executed.
   */

  var queue = (function() {
    var pending = [];
    
    function next() {
      var fn = pending.shift();
      if (fn) {
        fn(next);
      }
    }

    return function(fn) {
      pending.push(fn);
      if (pending.length == 1) next();
    };
  })();

  /**
   * (Internal) Applies css properties to an element, similar to the jQuery 
   * css method.
   *
   * While this helper does assist with vendor prefixed property names, it 
   * does not perform any manipulation of values prior to setting styles.
   */

  var css = (function() {
    var cssPrefixes = [ 'Webkit', 'O', 'Moz', 'ms' ],
        cssProps    = {};

    function camelCase(string) {
      return string.replace(/^-ms-/, 'ms-').replace(/-([\da-z])/gi, function(match, letter) {
        return letter.toUpperCase();
      });
    }

    function getVendorProp(name) {
      var style = document.body.style;
      if (name in style) return name;

      var i = cssPrefixes.length,
          capName = name.charAt(0).toUpperCase() + name.slice(1),
          vendorName;
      while (i--) {
        vendorName = cssPrefixes[i] + capName;
        if (vendorName in style) return vendorName;
      }

      return name;
    }

    function getStyleProp(name) {
      name = camelCase(name);
      return cssProps[name] || (cssProps[name] = getVendorProp(name));
    }

    function applyCss(element, prop, value) {
      prop = getStyleProp(prop);
      element.style[prop] = value;
    }

    return function(element, properties) {
      var args = arguments,
          prop, 
          value;

      if (args.length == 2) {
        for (prop in properties) {
          value = properties[prop];
          if (value !== undefined && properties.hasOwnProperty(prop)) applyCss(element, prop, value);
        }
      } else {
        applyCss(element, args[1], args[2]);
      }
    }
  })();

  /**
   * (Internal) Determines if an element or space separated list of class names contains a class name.
   */

  function hasClass(element, name) {
    var list = typeof element == 'string' ? element : classList(element);
    return list.indexOf(' ' + name + ' ') >= 0;
  }

  /**
   * (Internal) Adds a class to an element.
   */

  function addClass(element, name) {
    var oldList = classList(element),
        newList = oldList + name;

    if (hasClass(oldList, name)) return; 

    // Trim the opening space.
    element.className = newList.substring(1);
  }

  /**
   * (Internal) Removes a class from an element.
   */

  function removeClass(element, name) {
    var oldList = classList(element),
        newList;

    if (!hasClass(element, name)) return;

    // Replace the class name.
    newList = oldList.replace(' ' + name + ' ', ' ');

    // Trim the opening and closing spaces.
    element.className = newList.substring(1, newList.length - 1);
  }

  /**
   * (Internal) Gets a space separated list of the class names on the element. 
   * The list is wrapped with a single space on each end to facilitate finding 
   * matches within the list.
   */

  function classList(element) {
    return (' ' + (element.className || '') + ' ').replace(/\s+/gi, ' ');
  }

  /**
   * (Internal) Removes an element from the DOM.
   */

  function removeElement(element) {
    element && element.parentNode && element.parentNode.removeChild(element);
  }

  return NProgress;
});


/*! iCheck v1.0.2 by Damir Sultanov, http://git.io/arlzeA, MIT Licensed */
(function(f){function A(a,b,d){var c=a[0],g=/er/.test(d)?_indeterminate:/bl/.test(d)?n:k,e=d==_update?{checked:c[k],disabled:c[n],indeterminate:"true"==a.attr(_indeterminate)||"false"==a.attr(_determinate)}:c[g];if(/^(ch|di|in)/.test(d)&&!e)x(a,g);else if(/^(un|en|de)/.test(d)&&e)q(a,g);else if(d==_update)for(var f in e)e[f]?x(a,f,!0):q(a,f,!0);else if(!b||"toggle"==d){if(!b)a[_callback]("ifClicked");e?c[_type]!==r&&q(a,g):x(a,g)}}function x(a,b,d){var c=a[0],g=a.parent(),e=b==k,u=b==_indeterminate,
v=b==n,s=u?_determinate:e?y:"enabled",F=l(a,s+t(c[_type])),B=l(a,b+t(c[_type]));if(!0!==c[b]){if(!d&&b==k&&c[_type]==r&&c.name){var w=a.closest("form"),p='input[name="'+c.name+'"]',p=w.length?w.find(p):f(p);p.each(function(){this!==c&&f(this).data(m)&&q(f(this),b)})}u?(c[b]=!0,c[k]&&q(a,k,"force")):(d||(c[b]=!0),e&&c[_indeterminate]&&q(a,_indeterminate,!1));D(a,e,b,d)}c[n]&&l(a,_cursor,!0)&&g.find("."+C).css(_cursor,"default");g[_add](B||l(a,b)||"");g.attr("role")&&!u&&g.attr("aria-"+(v?n:k),"true");
g[_remove](F||l(a,s)||"")}function q(a,b,d){var c=a[0],g=a.parent(),e=b==k,f=b==_indeterminate,m=b==n,s=f?_determinate:e?y:"enabled",q=l(a,s+t(c[_type])),r=l(a,b+t(c[_type]));if(!1!==c[b]){if(f||!d||"force"==d)c[b]=!1;D(a,e,s,d)}!c[n]&&l(a,_cursor,!0)&&g.find("."+C).css(_cursor,"pointer");g[_remove](r||l(a,b)||"");g.attr("role")&&!f&&g.attr("aria-"+(m?n:k),"false");g[_add](q||l(a,s)||"")}function E(a,b){if(a.data(m)){a.parent().html(a.attr("style",a.data(m).s||""));if(b)a[_callback](b);a.off(".i").unwrap();
f(_label+'[for="'+a[0].id+'"]').add(a.closest(_label)).off(".i")}}function l(a,b,f){if(a.data(m))return a.data(m).o[b+(f?"":"Class")]}function t(a){return a.charAt(0).toUpperCase()+a.slice(1)}function D(a,b,f,c){if(!c){if(b)a[_callback]("ifToggled");a[_callback]("ifChanged")[_callback]("if"+t(f))}}var m="iCheck",C=m+"-helper",r="radio",k="checked",y="un"+k,n="disabled";_determinate="determinate";_indeterminate="in"+_determinate;_update="update";_type="type";_click="click";_touch="touchbegin.i touchend.i";
_add="addClass";_remove="removeClass";_callback="trigger";_label="label";_cursor="cursor";_mobile=/ipad|iphone|ipod|android|blackberry|windows phone|opera mini|silk/i.test(navigator.userAgent);f.fn[m]=function(a,b){var d='input[type="checkbox"], input[type="'+r+'"]',c=f(),g=function(a){a.each(function(){var a=f(this);c=a.is(d)?c.add(a):c.add(a.find(d))})};if(/^(check|uncheck|toggle|indeterminate|determinate|disable|enable|update|destroy)$/i.test(a))return a=a.toLowerCase(),g(this),c.each(function(){var c=
f(this);"destroy"==a?E(c,"ifDestroyed"):A(c,!0,a);f.isFunction(b)&&b()});if("object"!=typeof a&&a)return this;var e=f.extend({checkedClass:k,disabledClass:n,indeterminateClass:_indeterminate,labelHover:!0},a),l=e.handle,v=e.hoverClass||"hover",s=e.focusClass||"focus",t=e.activeClass||"active",B=!!e.labelHover,w=e.labelHoverClass||"hover",p=(""+e.increaseArea).replace("%","")|0;if("checkbox"==l||l==r)d='input[type="'+l+'"]';-50>p&&(p=-50);g(this);return c.each(function(){var a=f(this);E(a);var c=this,
b=c.id,g=-p+"%",d=100+2*p+"%",d={position:"absolute",top:g,left:g,display:"block",width:d,height:d,margin:0,padding:0,background:"#fff",border:0,opacity:0},g=_mobile?{position:"absolute",visibility:"hidden"}:p?d:{position:"absolute",opacity:0},l="checkbox"==c[_type]?e.checkboxClass||"icheckbox":e.radioClass||"i"+r,z=f(_label+'[for="'+b+'"]').add(a.closest(_label)),u=!!e.aria,y=m+"-"+Math.random().toString(36).substr(2,6),h='<div class="'+l+'" '+(u?'role="'+c[_type]+'" ':"");u&&z.each(function(){h+=
'aria-labelledby="';this.id?h+=this.id:(this.id=y,h+=y);h+='"'});h=a.wrap(h+"/>")[_callback]("ifCreated").parent().append(e.insert);d=f('<ins class="'+C+'"/>').css(d).appendTo(h);a.data(m,{o:e,s:a.attr("style")}).css(g);e.inheritClass&&h[_add](c.className||"");e.inheritID&&b&&h.attr("id",m+"-"+b);"static"==h.css("position")&&h.css("position","relative");A(a,!0,_update);if(z.length)z.on(_click+".i mouseover.i mouseout.i "+_touch,function(b){var d=b[_type],e=f(this);if(!c[n]){if(d==_click){if(f(b.target).is("a"))return;
A(a,!1,!0)}else B&&(/ut|nd/.test(d)?(h[_remove](v),e[_remove](w)):(h[_add](v),e[_add](w)));if(_mobile)b.stopPropagation();else return!1}});a.on(_click+".i focus.i blur.i keyup.i keydown.i keypress.i",function(b){var d=b[_type];b=b.keyCode;if(d==_click)return!1;if("keydown"==d&&32==b)return c[_type]==r&&c[k]||(c[k]?q(a,k):x(a,k)),!1;if("keyup"==d&&c[_type]==r)!c[k]&&x(a,k);else if(/us|ur/.test(d))h["blur"==d?_remove:_add](s)});d.on(_click+" mousedown mouseup mouseover mouseout "+_touch,function(b){var d=
b[_type],e=/wn|up/.test(d)?t:v;if(!c[n]){if(d==_click)A(a,!1,!0);else{if(/wn|er|in/.test(d))h[_add](e);else h[_remove](e+" "+t);if(z.length&&B&&e==v)z[/ut|nd/.test(d)?_remove:_add](w)}if(_mobile)b.stopPropagation();else return!1}})})}})(window.jQuery||window.Zepto);

/*!
 * Datepicker for Bootstrap v1.9.0 (https://github.com/uxsolutions/bootstrap-datepicker)
 *
 * Licensed under the Apache License v2.0 (http://www.apache.org/licenses/LICENSE-2.0)
 */

(function(factory){
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        factory(require('jquery'));
    } else {
        factory(jQuery);
    }
}(function($, undefined){
	function UTCDate(){
		return new Date(Date.UTC.apply(Date, arguments));
	}
	function UTCToday(){
		var today = new Date();
		return UTCDate(today.getFullYear(), today.getMonth(), today.getDate());
	}
	function isUTCEquals(date1, date2) {
		return (
			date1.getUTCFullYear() === date2.getUTCFullYear() &&
			date1.getUTCMonth() === date2.getUTCMonth() &&
			date1.getUTCDate() === date2.getUTCDate()
		);
	}
	function alias(method, deprecationMsg){
		return function(){
			if (deprecationMsg !== undefined) {
				$.fn.datepicker.deprecated(deprecationMsg);
			}

			return this[method].apply(this, arguments);
		};
	}
	function isValidDate(d) {
		return d && !isNaN(d.getTime());
	}

	var DateArray = (function(){
		var extras = {
			get: function(i){
				return this.slice(i)[0];
			},
			contains: function(d){
				// Array.indexOf is not cross-browser;
				// $.inArray doesn't work with Dates
				var val = d && d.valueOf();
				for (var i=0, l=this.length; i < l; i++)
          // Use date arithmetic to allow dates with different times to match
          if (0 <= this[i].valueOf() - val && this[i].valueOf() - val < 1000*60*60*24)
						return i;
				return -1;
			},
			remove: function(i){
				this.splice(i,1);
			},
			replace: function(new_array){
				if (!new_array)
					return;
				if (!$.isArray(new_array))
					new_array = [new_array];
				this.clear();
				this.push.apply(this, new_array);
			},
			clear: function(){
				this.length = 0;
			},
			copy: function(){
				var a = new DateArray();
				a.replace(this);
				return a;
			}
		};

		return function(){
			var a = [];
			a.push.apply(a, arguments);
			$.extend(a, extras);
			return a;
		};
	})();


	// Picker object

	var Datepicker = function(element, options){
		$.data(element, 'datepicker', this);

		this._events = [];
		this._secondaryEvents = [];

		this._process_options(options);

		this.dates = new DateArray();
		this.viewDate = this.o.defaultViewDate;
		this.focusDate = null;

		this.element = $(element);
		this.isInput = this.element.is('input');
		this.inputField = this.isInput ? this.element : this.element.find('input');
		this.component = this.element.hasClass('date') ? this.element.find('.add-on, .input-group-addon, .input-group-append, .input-group-prepend, .btn') : false;
		if (this.component && this.component.length === 0)
			this.component = false;
		this.isInline = !this.component && this.element.is('div');

		this.picker = $(DPGlobal.template);

		// Checking templates and inserting
		if (this._check_template(this.o.templates.leftArrow)) {
			this.picker.find('.prev').html(this.o.templates.leftArrow);
		}

		if (this._check_template(this.o.templates.rightArrow)) {
			this.picker.find('.next').html(this.o.templates.rightArrow);
		}

		this._buildEvents();
		this._attachEvents();

		if (this.isInline){
			this.picker.addClass('datepicker-inline').appendTo(this.element);
		}
		else {
			this.picker.addClass('datepicker-dropdown dropdown-menu');
		}

		if (this.o.rtl){
			this.picker.addClass('datepicker-rtl');
		}

		if (this.o.calendarWeeks) {
			this.picker.find('.datepicker-days .datepicker-switch, thead .datepicker-title, tfoot .today, tfoot .clear')
				.attr('colspan', function(i, val){
					return Number(val) + 1;
				});
		}

		this._process_options({
			startDate: this._o.startDate,
			endDate: this._o.endDate,
			daysOfWeekDisabled: this.o.daysOfWeekDisabled,
			daysOfWeekHighlighted: this.o.daysOfWeekHighlighted,
			datesDisabled: this.o.datesDisabled
		});

		this._allow_update = false;
		this.setViewMode(this.o.startView);
		this._allow_update = true;

		this.fillDow();
		this.fillMonths();

		this.update();

		if (this.isInline){
			this.show();
		}
	};

	Datepicker.prototype = {
		constructor: Datepicker,

		_resolveViewName: function(view){
			$.each(DPGlobal.viewModes, function(i, viewMode){
				if (view === i || $.inArray(view, viewMode.names) !== -1){
					view = i;
					return false;
				}
			});

			return view;
		},

		_resolveDaysOfWeek: function(daysOfWeek){
			if (!$.isArray(daysOfWeek))
				daysOfWeek = daysOfWeek.split(/[,\s]*/);
			return $.map(daysOfWeek, Number);
		},

		_check_template: function(tmp){
			try {
				// If empty
				if (tmp === undefined || tmp === "") {
					return false;
				}
				// If no html, everything ok
				if ((tmp.match(/[<>]/g) || []).length <= 0) {
					return true;
				}
				// Checking if html is fine
				var jDom = $(tmp);
				return jDom.length > 0;
			}
			catch (ex) {
				return false;
			}
		},

		_process_options: function(opts){
			// Store raw options for reference
			this._o = $.extend({}, this._o, opts);
			// Processed options
			var o = this.o = $.extend({}, this._o);

			// Check if "de-DE" style date is available, if not language should
			// fallback to 2 letter code eg "de"
			var lang = o.language;
			if (!dates[lang]){
				lang = lang.split('-')[0];
				if (!dates[lang])
					lang = defaults.language;
			}
			o.language = lang;

			// Retrieve view index from any aliases
			o.startView = this._resolveViewName(o.startView);
			o.minViewMode = this._resolveViewName(o.minViewMode);
			o.maxViewMode = this._resolveViewName(o.maxViewMode);

			// Check view is between min and max
			o.startView = Math.max(this.o.minViewMode, Math.min(this.o.maxViewMode, o.startView));

			// true, false, or Number > 0
			if (o.multidate !== true){
				o.multidate = Number(o.multidate) || false;
				if (o.multidate !== false)
					o.multidate = Math.max(0, o.multidate);
			}
			o.multidateSeparator = String(o.multidateSeparator);

			o.weekStart %= 7;
			o.weekEnd = (o.weekStart + 6) % 7;

			var format = DPGlobal.parseFormat(o.format);
			if (o.startDate !== -Infinity){
				if (!!o.startDate){
					if (o.startDate instanceof Date)
						o.startDate = this._local_to_utc(this._zero_time(o.startDate));
					else
						o.startDate = DPGlobal.parseDate(o.startDate, format, o.language, o.assumeNearbyYear);
				}
				else {
					o.startDate = -Infinity;
				}
			}
			if (o.endDate !== Infinity){
				if (!!o.endDate){
					if (o.endDate instanceof Date)
						o.endDate = this._local_to_utc(this._zero_time(o.endDate));
					else
						o.endDate = DPGlobal.parseDate(o.endDate, format, o.language, o.assumeNearbyYear);
				}
				else {
					o.endDate = Infinity;
				}
			}

			o.daysOfWeekDisabled = this._resolveDaysOfWeek(o.daysOfWeekDisabled||[]);
			o.daysOfWeekHighlighted = this._resolveDaysOfWeek(o.daysOfWeekHighlighted||[]);

			o.datesDisabled = o.datesDisabled||[];
			if (!$.isArray(o.datesDisabled)) {
				o.datesDisabled = o.datesDisabled.split(',');
			}
			o.datesDisabled = $.map(o.datesDisabled, function(d){
				return DPGlobal.parseDate(d, format, o.language, o.assumeNearbyYear);
			});

			var plc = String(o.orientation).toLowerCase().split(/\s+/g),
				_plc = o.orientation.toLowerCase();
			plc = $.grep(plc, function(word){
				return /^auto|left|right|top|bottom$/.test(word);
			});
			o.orientation = {x: 'auto', y: 'auto'};
			if (!_plc || _plc === 'auto')
				; // no action
			else if (plc.length === 1){
				switch (plc[0]){
					case 'top':
					case 'bottom':
						o.orientation.y = plc[0];
						break;
					case 'left':
					case 'right':
						o.orientation.x = plc[0];
						break;
				}
			}
			else {
				_plc = $.grep(plc, function(word){
					return /^left|right$/.test(word);
				});
				o.orientation.x = _plc[0] || 'auto';

				_plc = $.grep(plc, function(word){
					return /^top|bottom$/.test(word);
				});
				o.orientation.y = _plc[0] || 'auto';
			}
			if (o.defaultViewDate instanceof Date || typeof o.defaultViewDate === 'string') {
				o.defaultViewDate = DPGlobal.parseDate(o.defaultViewDate, format, o.language, o.assumeNearbyYear);
			} else if (o.defaultViewDate) {
				var year = o.defaultViewDate.year || new Date().getFullYear();
				var month = o.defaultViewDate.month || 0;
				var day = o.defaultViewDate.day || 1;
				o.defaultViewDate = UTCDate(year, month, day);
			} else {
				o.defaultViewDate = UTCToday();
			}
		},
		_applyEvents: function(evs){
			for (var i=0, el, ch, ev; i < evs.length; i++){
				el = evs[i][0];
				if (evs[i].length === 2){
					ch = undefined;
					ev = evs[i][1];
				} else if (evs[i].length === 3){
					ch = evs[i][1];
					ev = evs[i][2];
				}
				el.on(ev, ch);
			}
		},
		_unapplyEvents: function(evs){
			for (var i=0, el, ev, ch; i < evs.length; i++){
				el = evs[i][0];
				if (evs[i].length === 2){
					ch = undefined;
					ev = evs[i][1];
				} else if (evs[i].length === 3){
					ch = evs[i][1];
					ev = evs[i][2];
				}
				el.off(ev, ch);
			}
		},
		_buildEvents: function(){
            var events = {
                keyup: $.proxy(function(e){
                    if ($.inArray(e.keyCode, [27, 37, 39, 38, 40, 32, 13, 9]) === -1)
                        this.update();
                }, this),
                keydown: $.proxy(this.keydown, this),
                paste: $.proxy(this.paste, this)
            };

            if (this.o.showOnFocus === true) {
                events.focus = $.proxy(this.show, this);
            }

            if (this.isInput) { // single input
                this._events = [
                    [this.element, events]
                ];
            }
            // component: input + button
            else if (this.component && this.inputField.length) {
                this._events = [
                    // For components that are not readonly, allow keyboard nav
                    [this.inputField, events],
                    [this.component, {
                        click: $.proxy(this.show, this)
                    }]
                ];
            }
			else {
				this._events = [
					[this.element, {
						click: $.proxy(this.show, this),
						keydown: $.proxy(this.keydown, this)
					}]
				];
			}
			this._events.push(
				// Component: listen for blur on element descendants
				[this.element, '*', {
					blur: $.proxy(function(e){
						this._focused_from = e.target;
					}, this)
				}],
				// Input: listen for blur on element
				[this.element, {
					blur: $.proxy(function(e){
						this._focused_from = e.target;
					}, this)
				}]
			);

			if (this.o.immediateUpdates) {
				// Trigger input updates immediately on changed year/month
				this._events.push([this.element, {
					'changeYear changeMonth': $.proxy(function(e){
						this.update(e.date);
					}, this)
				}]);
			}

			this._secondaryEvents = [
				[this.picker, {
					click: $.proxy(this.click, this)
				}],
				[this.picker, '.prev, .next', {
					click: $.proxy(this.navArrowsClick, this)
				}],
				[this.picker, '.day:not(.disabled)', {
					click: $.proxy(this.dayCellClick, this)
				}],
				[$(window), {
					resize: $.proxy(this.place, this)
				}],
				[$(document), {
					'mousedown touchstart': $.proxy(function(e){
						// Clicked outside the datepicker, hide it
						if (!(
							this.element.is(e.target) ||
							this.element.find(e.target).length ||
							this.picker.is(e.target) ||
							this.picker.find(e.target).length ||
							this.isInline
						)){
							this.hide();
						}
					}, this)
				}]
			];
		},
		_attachEvents: function(){
			this._detachEvents();
			this._applyEvents(this._events);
		},
		_detachEvents: function(){
			this._unapplyEvents(this._events);
		},
		_attachSecondaryEvents: function(){
			this._detachSecondaryEvents();
			this._applyEvents(this._secondaryEvents);
		},
		_detachSecondaryEvents: function(){
			this._unapplyEvents(this._secondaryEvents);
		},
		_trigger: function(event, altdate){
			var date = altdate || this.dates.get(-1),
				local_date = this._utc_to_local(date);

			this.element.trigger({
				type: event,
				date: local_date,
				viewMode: this.viewMode,
				dates: $.map(this.dates, this._utc_to_local),
				format: $.proxy(function(ix, format){
					if (arguments.length === 0){
						ix = this.dates.length - 1;
						format = this.o.format;
					} else if (typeof ix === 'string'){
						format = ix;
						ix = this.dates.length - 1;
					}
					format = format || this.o.format;
					var date = this.dates.get(ix);
					return DPGlobal.formatDate(date, format, this.o.language);
				}, this)
			});
		},

		show: function(){
			if (this.inputField.is(':disabled') || (this.inputField.prop('readonly') && this.o.enableOnReadonly === false))
				return;
			if (!this.isInline)
				this.picker.appendTo(this.o.container);
			this.place();
			this.picker.show();
			this._attachSecondaryEvents();
			this._trigger('show');
			if ((window.navigator.msMaxTouchPoints || 'ontouchstart' in document) && this.o.disableTouchKeyboard) {
				$(this.element).blur();
			}
			return this;
		},

		hide: function(){
			if (this.isInline || !this.picker.is(':visible'))
				return this;
			this.focusDate = null;
			this.picker.hide().detach();
			this._detachSecondaryEvents();
			this.setViewMode(this.o.startView);

			if (this.o.forceParse && this.inputField.val())
				this.setValue();
			this._trigger('hide');
			return this;
		},

		destroy: function(){
			this.hide();
			this._detachEvents();
			this._detachSecondaryEvents();
			this.picker.remove();
			delete this.element.data().datepicker;
			if (!this.isInput){
				delete this.element.data().date;
			}
			return this;
		},

		paste: function(e){
			var dateString;
			if (e.originalEvent.clipboardData && e.originalEvent.clipboardData.types
				&& $.inArray('text/plain', e.originalEvent.clipboardData.types) !== -1) {
				dateString = e.originalEvent.clipboardData.getData('text/plain');
			} else if (window.clipboardData) {
				dateString = window.clipboardData.getData('Text');
			} else {
				return;
			}
			this.setDate(dateString);
			this.update();
			e.preventDefault();
		},

		_utc_to_local: function(utc){
			if (!utc) {
				return utc;
			}

			var local = new Date(utc.getTime() + (utc.getTimezoneOffset() * 60000));

			if (local.getTimezoneOffset() !== utc.getTimezoneOffset()) {
				local = new Date(utc.getTime() + (local.getTimezoneOffset() * 60000));
			}

			return local;
		},
		_local_to_utc: function(local){
			return local && new Date(local.getTime() - (local.getTimezoneOffset()*60000));
		},
		_zero_time: function(local){
			return local && new Date(local.getFullYear(), local.getMonth(), local.getDate());
		},
		_zero_utc_time: function(utc){
			return utc && UTCDate(utc.getUTCFullYear(), utc.getUTCMonth(), utc.getUTCDate());
		},

		getDates: function(){
			return $.map(this.dates, this._utc_to_local);
		},

		getUTCDates: function(){
			return $.map(this.dates, function(d){
				return new Date(d);
			});
		},

		getDate: function(){
			return this._utc_to_local(this.getUTCDate());
		},

		getUTCDate: function(){
			var selected_date = this.dates.get(-1);
			if (selected_date !== undefined) {
				return new Date(selected_date);
			} else {
				return null;
			}
		},

		clearDates: function(){
			this.inputField.val('');
			this.update();
			this._trigger('changeDate');

			if (this.o.autoclose) {
				this.hide();
			}
		},

		setDates: function(){
			var args = $.isArray(arguments[0]) ? arguments[0] : arguments;
			this.update.apply(this, args);
			this._trigger('changeDate');
			this.setValue();
			return this;
		},

		setUTCDates: function(){
			var args = $.isArray(arguments[0]) ? arguments[0] : arguments;
			this.setDates.apply(this, $.map(args, this._utc_to_local));
			return this;
		},

		setDate: alias('setDates'),
		setUTCDate: alias('setUTCDates'),
		remove: alias('destroy', 'Method `remove` is deprecated and will be removed in version 2.0. Use `destroy` instead'),

		setValue: function(){
			var formatted = this.getFormattedDate();
			this.inputField.val(formatted);
			return this;
		},

		getFormattedDate: function(format){
			if (format === undefined)
				format = this.o.format;

			var lang = this.o.language;
			return $.map(this.dates, function(d){
				return DPGlobal.formatDate(d, format, lang);
			}).join(this.o.multidateSeparator);
		},

		getStartDate: function(){
			return this.o.startDate;
		},

		setStartDate: function(startDate){
			this._process_options({startDate: startDate});
			this.update();
			this.updateNavArrows();
			return this;
		},

		getEndDate: function(){
			return this.o.endDate;
		},

		setEndDate: function(endDate){
			this._process_options({endDate: endDate});
			this.update();
			this.updateNavArrows();
			return this;
		},

		setDaysOfWeekDisabled: function(daysOfWeekDisabled){
			this._process_options({daysOfWeekDisabled: daysOfWeekDisabled});
			this.update();
			return this;
		},

		setDaysOfWeekHighlighted: function(daysOfWeekHighlighted){
			this._process_options({daysOfWeekHighlighted: daysOfWeekHighlighted});
			this.update();
			return this;
		},

		setDatesDisabled: function(datesDisabled){
			this._process_options({datesDisabled: datesDisabled});
			this.update();
			return this;
		},

		place: function(){
			if (this.isInline)
				return this;
			var calendarWidth = this.picker.outerWidth(),
				calendarHeight = this.picker.outerHeight(),
				visualPadding = 10,
				container = $(this.o.container),
				windowWidth = container.width(),
				scrollTop = this.o.container === 'body' ? $(document).scrollTop() : container.scrollTop(),
				appendOffset = container.offset();

			var parentsZindex = [0];
			this.element.parents().each(function(){
				var itemZIndex = $(this).css('z-index');
				if (itemZIndex !== 'auto' && Number(itemZIndex) !== 0) parentsZindex.push(Number(itemZIndex));
			});
			var zIndex = Math.max.apply(Math, parentsZindex) + this.o.zIndexOffset;
			var offset = this.component ? this.component.parent().offset() : this.element.offset();
			var height = this.component ? this.component.outerHeight(true) : this.element.outerHeight(false);
			var width = this.component ? this.component.outerWidth(true) : this.element.outerWidth(false);
			var left = offset.left - appendOffset.left;
			var top = offset.top - appendOffset.top;

			if (this.o.container !== 'body') {
				top += scrollTop;
			}

			this.picker.removeClass(
				'datepicker-orient-top datepicker-orient-bottom '+
				'datepicker-orient-right datepicker-orient-left'
			);

			if (this.o.orientation.x !== 'auto'){
				this.picker.addClass('datepicker-orient-' + this.o.orientation.x);
				if (this.o.orientation.x === 'right')
					left -= calendarWidth - width;
			}
			// auto x orientation is best-placement: if it crosses a window
			// edge, fudge it sideways
			else {
				if (offset.left < 0) {
					// component is outside the window on the left side. Move it into visible range
					this.picker.addClass('datepicker-orient-left');
					left -= offset.left - visualPadding;
				} else if (left + calendarWidth > windowWidth) {
					// the calendar passes the widow right edge. Align it to component right side
					this.picker.addClass('datepicker-orient-right');
					left += width - calendarWidth;
				} else {
					if (this.o.rtl) {
						// Default to right
						this.picker.addClass('datepicker-orient-right');
					} else {
						// Default to left
						this.picker.addClass('datepicker-orient-left');
					}
				}
			}

			// auto y orientation is best-situation: top or bottom, no fudging,
			// decision based on which shows more of the calendar
			var yorient = this.o.orientation.y,
				top_overflow;
			if (yorient === 'auto'){
				top_overflow = -scrollTop + top - calendarHeight;
				yorient = top_overflow < 0 ? 'bottom' : 'top';
			}

			this.picker.addClass('datepicker-orient-' + yorient);
			if (yorient === 'top')
				top -= calendarHeight + parseInt(this.picker.css('padding-top'));
			else
				top += height;

			if (this.o.rtl) {
				var right = windowWidth - (left + width);
				this.picker.css({
					top: top,
					right: right,
					zIndex: zIndex
				});
			} else {
				this.picker.css({
					top: top,
					left: left,
					zIndex: zIndex
				});
			}
			return this;
		},

		_allow_update: true,
		update: function(){
			if (!this._allow_update)
				return this;

			var oldDates = this.dates.copy(),
				dates = [],
				fromArgs = false;
			if (arguments.length){
				$.each(arguments, $.proxy(function(i, date){
					if (date instanceof Date)
						date = this._local_to_utc(date);
					dates.push(date);
				}, this));
				fromArgs = true;
			} else {
				dates = this.isInput
						? this.element.val()
						: this.element.data('date') || this.inputField.val();
				if (dates && this.o.multidate)
					dates = dates.split(this.o.multidateSeparator);
				else
					dates = [dates];
				delete this.element.data().date;
			}

			dates = $.map(dates, $.proxy(function(date){
				return DPGlobal.parseDate(date, this.o.format, this.o.language, this.o.assumeNearbyYear);
			}, this));
			dates = $.grep(dates, $.proxy(function(date){
				return (
					!this.dateWithinRange(date) ||
					!date
				);
			}, this), true);
			this.dates.replace(dates);

			if (this.o.updateViewDate) {
				if (this.dates.length)
					this.viewDate = new Date(this.dates.get(-1));
				else if (this.viewDate < this.o.startDate)
					this.viewDate = new Date(this.o.startDate);
				else if (this.viewDate > this.o.endDate)
					this.viewDate = new Date(this.o.endDate);
				else
					this.viewDate = this.o.defaultViewDate;
			}

			if (fromArgs){
				// setting date by clicking
				this.setValue();
				this.element.change();
			}
			else if (this.dates.length){
				// setting date by typing
				if (String(oldDates) !== String(this.dates) && fromArgs) {
					this._trigger('changeDate');
					this.element.change();
				}
			}
			if (!this.dates.length && oldDates.length) {
				this._trigger('clearDate');
				this.element.change();
			}

			this.fill();
			return this;
		},

		fillDow: function(){
      if (this.o.showWeekDays) {
			var dowCnt = this.o.weekStart,
				html = '<tr>';
			if (this.o.calendarWeeks){
				html += '<th class="cw">&#160;</th>';
			}
			while (dowCnt < this.o.weekStart + 7){
				html += '<th class="dow';
        if ($.inArray(dowCnt, this.o.daysOfWeekDisabled) !== -1)
          html += ' disabled';
        html += '">'+dates[this.o.language].daysMin[(dowCnt++)%7]+'</th>';
			}
			html += '</tr>';
			this.picker.find('.datepicker-days thead').append(html);
      }
		},

		fillMonths: function(){
      var localDate = this._utc_to_local(this.viewDate);
			var html = '';
			var focused;
			for (var i = 0; i < 12; i++){
				focused = localDate && localDate.getMonth() === i ? ' focused' : '';
				html += '<span class="month' + focused + '">' + dates[this.o.language].monthsShort[i] + '</span>';
			}
			this.picker.find('.datepicker-months td').html(html);
		},

		setRange: function(range){
			if (!range || !range.length)
				delete this.range;
			else
				this.range = $.map(range, function(d){
					return d.valueOf();
				});
			this.fill();
		},

		getClassNames: function(date){
			var cls = [],
				year = this.viewDate.getUTCFullYear(),
				month = this.viewDate.getUTCMonth(),
				today = UTCToday();
			if (date.getUTCFullYear() < year || (date.getUTCFullYear() === year && date.getUTCMonth() < month)){
				cls.push('old');
			} else if (date.getUTCFullYear() > year || (date.getUTCFullYear() === year && date.getUTCMonth() > month)){
				cls.push('new');
			}
			if (this.focusDate && date.valueOf() === this.focusDate.valueOf())
				cls.push('focused');
			// Compare internal UTC date with UTC today, not local today
			if (this.o.todayHighlight && isUTCEquals(date, today)) {
				cls.push('today');
			}
			if (this.dates.contains(date) !== -1)
				cls.push('active');
			if (!this.dateWithinRange(date)){
				cls.push('disabled');
			}
			if (this.dateIsDisabled(date)){
				cls.push('disabled', 'disabled-date');
			}
			if ($.inArray(date.getUTCDay(), this.o.daysOfWeekHighlighted) !== -1){
				cls.push('highlighted');
			}

			if (this.range){
				if (date > this.range[0] && date < this.range[this.range.length-1]){
					cls.push('range');
				}
				if ($.inArray(date.valueOf(), this.range) !== -1){
					cls.push('selected');
				}
				if (date.valueOf() === this.range[0]){
          cls.push('range-start');
        }
        if (date.valueOf() === this.range[this.range.length-1]){
          cls.push('range-end');
        }
			}
			return cls;
		},

		_fill_yearsView: function(selector, cssClass, factor, year, startYear, endYear, beforeFn){
			var html = '';
			var step = factor / 10;
			var view = this.picker.find(selector);
			var startVal = Math.floor(year / factor) * factor;
			var endVal = startVal + step * 9;
			var focusedVal = Math.floor(this.viewDate.getFullYear() / step) * step;
			var selected = $.map(this.dates, function(d){
				return Math.floor(d.getUTCFullYear() / step) * step;
			});

			var classes, tooltip, before;
			for (var currVal = startVal - step; currVal <= endVal + step; currVal += step) {
				classes = [cssClass];
				tooltip = null;

				if (currVal === startVal - step) {
					classes.push('old');
				} else if (currVal === endVal + step) {
					classes.push('new');
				}
				if ($.inArray(currVal, selected) !== -1) {
					classes.push('active');
				}
				if (currVal < startYear || currVal > endYear) {
					classes.push('disabled');
				}
				if (currVal === focusedVal) {
				  classes.push('focused');
        }

				if (beforeFn !== $.noop) {
					before = beforeFn(new Date(currVal, 0, 1));
					if (before === undefined) {
						before = {};
					} else if (typeof before === 'boolean') {
						before = {enabled: before};
					} else if (typeof before === 'string') {
						before = {classes: before};
					}
					if (before.enabled === false) {
						classes.push('disabled');
					}
					if (before.classes) {
						classes = classes.concat(before.classes.split(/\s+/));
					}
					if (before.tooltip) {
						tooltip = before.tooltip;
					}
				}

				html += '<span class="' + classes.join(' ') + '"' + (tooltip ? ' title="' + tooltip + '"' : '') + '>' + currVal + '</span>';
			}

			view.find('.datepicker-switch').text(startVal + '-' + endVal);
			view.find('td').html(html);
		},

		fill: function(){
			var d = new Date(this.viewDate),
				year = d.getUTCFullYear(),
				month = d.getUTCMonth(),
				startYear = this.o.startDate !== -Infinity ? this.o.startDate.getUTCFullYear() : -Infinity,
				startMonth = this.o.startDate !== -Infinity ? this.o.startDate.getUTCMonth() : -Infinity,
				endYear = this.o.endDate !== Infinity ? this.o.endDate.getUTCFullYear() : Infinity,
				endMonth = this.o.endDate !== Infinity ? this.o.endDate.getUTCMonth() : Infinity,
				todaytxt = dates[this.o.language].today || dates['en'].today || '',
				cleartxt = dates[this.o.language].clear || dates['en'].clear || '',
        titleFormat = dates[this.o.language].titleFormat || dates['en'].titleFormat,
        todayDate = UTCToday(),
        titleBtnVisible = (this.o.todayBtn === true || this.o.todayBtn === 'linked') && todayDate >= this.o.startDate && todayDate <= this.o.endDate && !this.weekOfDateIsDisabled(todayDate),
				tooltip,
				before;
			if (isNaN(year) || isNaN(month))
				return;
			this.picker.find('.datepicker-days .datepicker-switch')
						.text(DPGlobal.formatDate(d, titleFormat, this.o.language));
			this.picker.find('tfoot .today')
						.text(todaytxt)
            .css('display', titleBtnVisible ? 'table-cell' : 'none');
			this.picker.find('tfoot .clear')
						.text(cleartxt)
						.css('display', this.o.clearBtn === true ? 'table-cell' : 'none');
			this.picker.find('thead .datepicker-title')
						.text(this.o.title)
						.css('display', typeof this.o.title === 'string' && this.o.title !== '' ? 'table-cell' : 'none');
			this.updateNavArrows();
			this.fillMonths();
			var prevMonth = UTCDate(year, month, 0),
				day = prevMonth.getUTCDate();
			prevMonth.setUTCDate(day - (prevMonth.getUTCDay() - this.o.weekStart + 7)%7);
			var nextMonth = new Date(prevMonth);
			if (prevMonth.getUTCFullYear() < 100){
        nextMonth.setUTCFullYear(prevMonth.getUTCFullYear());
      }
			nextMonth.setUTCDate(nextMonth.getUTCDate() + 42);
			nextMonth = nextMonth.valueOf();
			var html = [];
			var weekDay, clsName;
			while (prevMonth.valueOf() < nextMonth){
				weekDay = prevMonth.getUTCDay();
				if (weekDay === this.o.weekStart){
					html.push('<tr>');
					if (this.o.calendarWeeks){
						// ISO 8601: First week contains first thursday.
						// ISO also states week starts on Monday, but we can be more abstract here.
						var
							// Start of current week: based on weekstart/current date
							ws = new Date(+prevMonth + (this.o.weekStart - weekDay - 7) % 7 * 864e5),
							// Thursday of this week
							th = new Date(Number(ws) + (7 + 4 - ws.getUTCDay()) % 7 * 864e5),
							// First Thursday of year, year from thursday
							yth = new Date(Number(yth = UTCDate(th.getUTCFullYear(), 0, 1)) + (7 + 4 - yth.getUTCDay()) % 7 * 864e5),
							// Calendar week: ms between thursdays, div ms per day, div 7 days
							calWeek = (th - yth) / 864e5 / 7 + 1;
						html.push('<td class="cw">'+ calWeek +'</td>');
					}
				}
				clsName = this.getClassNames(prevMonth);
				clsName.push('day');

				var content = prevMonth.getUTCDate();

				if (this.o.beforeShowDay !== $.noop){
					before = this.o.beforeShowDay(this._utc_to_local(prevMonth));
					if (before === undefined)
						before = {};
					else if (typeof before === 'boolean')
						before = {enabled: before};
					else if (typeof before === 'string')
						before = {classes: before};
					if (before.enabled === false)
						clsName.push('disabled');
					if (before.classes)
						clsName = clsName.concat(before.classes.split(/\s+/));
					if (before.tooltip)
						tooltip = before.tooltip;
					if (before.content)
						content = before.content;
				}

				//Check if uniqueSort exists (supported by jquery >=1.12 and >=2.2)
				//Fallback to unique function for older jquery versions
				if ($.isFunction($.uniqueSort)) {
					clsName = $.uniqueSort(clsName);
				} else {
					clsName = $.unique(clsName);
				}

				html.push('<td class="'+clsName.join(' ')+'"' + (tooltip ? ' title="'+tooltip+'"' : '') + ' data-date="' + prevMonth.getTime().toString() + '">' + content + '</td>');
				tooltip = null;
				if (weekDay === this.o.weekEnd){
					html.push('</tr>');
				}
				prevMonth.setUTCDate(prevMonth.getUTCDate() + 1);
			}
			this.picker.find('.datepicker-days tbody').html(html.join(''));

			var monthsTitle = dates[this.o.language].monthsTitle || dates['en'].monthsTitle || 'Months';
			var months = this.picker.find('.datepicker-months')
						.find('.datepicker-switch')
							.text(this.o.maxViewMode < 2 ? monthsTitle : year)
							.end()
						.find('tbody span').removeClass('active');

			$.each(this.dates, function(i, d){
				if (d.getUTCFullYear() === year)
					months.eq(d.getUTCMonth()).addClass('active');
			});

			if (year < startYear || year > endYear){
				months.addClass('disabled');
			}
			if (year === startYear){
				months.slice(0, startMonth).addClass('disabled');
			}
			if (year === endYear){
				months.slice(endMonth+1).addClass('disabled');
			}

			if (this.o.beforeShowMonth !== $.noop){
				var that = this;
				$.each(months, function(i, month){
          var moDate = new Date(year, i, 1);
          var before = that.o.beforeShowMonth(moDate);
					if (before === undefined)
						before = {};
					else if (typeof before === 'boolean')
						before = {enabled: before};
					else if (typeof before === 'string')
						before = {classes: before};
					if (before.enabled === false && !$(month).hasClass('disabled'))
					    $(month).addClass('disabled');
					if (before.classes)
					    $(month).addClass(before.classes);
					if (before.tooltip)
					    $(month).prop('title', before.tooltip);
				});
			}

			// Generating decade/years picker
			this._fill_yearsView(
				'.datepicker-years',
				'year',
				10,
				year,
				startYear,
				endYear,
				this.o.beforeShowYear
			);

			// Generating century/decades picker
			this._fill_yearsView(
				'.datepicker-decades',
				'decade',
				100,
				year,
				startYear,
				endYear,
				this.o.beforeShowDecade
			);

			// Generating millennium/centuries picker
			this._fill_yearsView(
				'.datepicker-centuries',
				'century',
				1000,
				year,
				startYear,
				endYear,
				this.o.beforeShowCentury
			);
		},

		updateNavArrows: function(){
			if (!this._allow_update)
				return;

			var d = new Date(this.viewDate),
				year = d.getUTCFullYear(),
				month = d.getUTCMonth(),
				startYear = this.o.startDate !== -Infinity ? this.o.startDate.getUTCFullYear() : -Infinity,
				startMonth = this.o.startDate !== -Infinity ? this.o.startDate.getUTCMonth() : -Infinity,
				endYear = this.o.endDate !== Infinity ? this.o.endDate.getUTCFullYear() : Infinity,
				endMonth = this.o.endDate !== Infinity ? this.o.endDate.getUTCMonth() : Infinity,
				prevIsDisabled,
				nextIsDisabled,
				factor = 1;
			switch (this.viewMode){
				case 4:
					factor *= 10;
					/* falls through */
				case 3:
					factor *= 10;
					/* falls through */
				case 2:
					factor *= 10;
					/* falls through */
				case 1:
					prevIsDisabled = Math.floor(year / factor) * factor <= startYear;
					nextIsDisabled = Math.floor(year / factor) * factor + factor > endYear;
					break;
				case 0:
					prevIsDisabled = year <= startYear && month <= startMonth;
					nextIsDisabled = year >= endYear && month >= endMonth;
					break;
			}

			this.picker.find('.prev').toggleClass('disabled', prevIsDisabled);
			this.picker.find('.next').toggleClass('disabled', nextIsDisabled);
		},

		click: function(e){
			e.preventDefault();
			e.stopPropagation();

			var target, dir, day, year, month;
			target = $(e.target);

			// Clicked on the switch
			if (target.hasClass('datepicker-switch') && this.viewMode !== this.o.maxViewMode){
				this.setViewMode(this.viewMode + 1);
			}

			// Clicked on today button
			if (target.hasClass('today') && !target.hasClass('day')){
				this.setViewMode(0);
				this._setDate(UTCToday(), this.o.todayBtn === 'linked' ? null : 'view');
			}

			// Clicked on clear button
			if (target.hasClass('clear')){
				this.clearDates();
			}

			if (!target.hasClass('disabled')){
				// Clicked on a month, year, decade, century
				if (target.hasClass('month')
						|| target.hasClass('year')
						|| target.hasClass('decade')
						|| target.hasClass('century')) {
					this.viewDate.setUTCDate(1);

					day = 1;
					if (this.viewMode === 1){
						month = target.parent().find('span').index(target);
						year = this.viewDate.getUTCFullYear();
						this.viewDate.setUTCMonth(month);
					} else {
						month = 0;
						year = Number(target.text());
						this.viewDate.setUTCFullYear(year);
					}

					this._trigger(DPGlobal.viewModes[this.viewMode - 1].e, this.viewDate);

					if (this.viewMode === this.o.minViewMode){
						this._setDate(UTCDate(year, month, day));
					} else {
						this.setViewMode(this.viewMode - 1);
						this.fill();
					}
				}
			}

			if (this.picker.is(':visible') && this._focused_from){
				this._focused_from.focus();
			}
			delete this._focused_from;
		},

		dayCellClick: function(e){
			var $target = $(e.currentTarget);
			var timestamp = $target.data('date');
			var date = new Date(timestamp);

			if (this.o.updateViewDate) {
				if (date.getUTCFullYear() !== this.viewDate.getUTCFullYear()) {
					this._trigger('changeYear', this.viewDate);
				}

				if (date.getUTCMonth() !== this.viewDate.getUTCMonth()) {
					this._trigger('changeMonth', this.viewDate);
				}
			}
			this._setDate(date);
		},

		// Clicked on prev or next
		navArrowsClick: function(e){
			var $target = $(e.currentTarget);
			var dir = $target.hasClass('prev') ? -1 : 1;
			if (this.viewMode !== 0){
				dir *= DPGlobal.viewModes[this.viewMode].navStep * 12;
			}
			this.viewDate = this.moveMonth(this.viewDate, dir);
			this._trigger(DPGlobal.viewModes[this.viewMode].e, this.viewDate);
			this.fill();
		},

		_toggle_multidate: function(date){
			var ix = this.dates.contains(date);
			if (!date){
				this.dates.clear();
			}

			if (ix !== -1){
				if (this.o.multidate === true || this.o.multidate > 1 || this.o.toggleActive){
					this.dates.remove(ix);
				}
			} else if (this.o.multidate === false) {
				this.dates.clear();
				this.dates.push(date);
			}
			else {
				this.dates.push(date);
			}

			if (typeof this.o.multidate === 'number')
				while (this.dates.length > this.o.multidate)
					this.dates.remove(0);
		},

		_setDate: function(date, which){
			if (!which || which === 'date')
				this._toggle_multidate(date && new Date(date));
			if ((!which && this.o.updateViewDate) || which === 'view')
				this.viewDate = date && new Date(date);

			this.fill();
			this.setValue();
			if (!which || which !== 'view') {
				this._trigger('changeDate');
			}
			this.inputField.trigger('change');
			if (this.o.autoclose && (!which || which === 'date')){
				this.hide();
			}
		},

		moveDay: function(date, dir){
			var newDate = new Date(date);
			newDate.setUTCDate(date.getUTCDate() + dir);

			return newDate;
		},

		moveWeek: function(date, dir){
			return this.moveDay(date, dir * 7);
		},

		moveMonth: function(date, dir){
			if (!isValidDate(date))
				return this.o.defaultViewDate;
			if (!dir)
				return date;
			var new_date = new Date(date.valueOf()),
				day = new_date.getUTCDate(),
				month = new_date.getUTCMonth(),
				mag = Math.abs(dir),
				new_month, test;
			dir = dir > 0 ? 1 : -1;
			if (mag === 1){
				test = dir === -1
					// If going back one month, make sure month is not current month
					// (eg, Mar 31 -> Feb 31 == Feb 28, not Mar 02)
					? function(){
						return new_date.getUTCMonth() === month;
					}
					// If going forward one month, make sure month is as expected
					// (eg, Jan 31 -> Feb 31 == Feb 28, not Mar 02)
					: function(){
						return new_date.getUTCMonth() !== new_month;
					};
				new_month = month + dir;
				new_date.setUTCMonth(new_month);
				// Dec -> Jan (12) or Jan -> Dec (-1) -- limit expected date to 0-11
				new_month = (new_month + 12) % 12;
			}
			else {
				// For magnitudes >1, move one month at a time...
				for (var i=0; i < mag; i++)
					// ...which might decrease the day (eg, Jan 31 to Feb 28, etc)...
					new_date = this.moveMonth(new_date, dir);
				// ...then reset the day, keeping it in the new month
				new_month = new_date.getUTCMonth();
				new_date.setUTCDate(day);
				test = function(){
					return new_month !== new_date.getUTCMonth();
				};
			}
			// Common date-resetting loop -- if date is beyond end of month, make it
			// end of month
			while (test()){
				new_date.setUTCDate(--day);
				new_date.setUTCMonth(new_month);
			}
			return new_date;
		},

		moveYear: function(date, dir){
			return this.moveMonth(date, dir*12);
		},

		moveAvailableDate: function(date, dir, fn){
			do {
				date = this[fn](date, dir);

				if (!this.dateWithinRange(date))
					return false;

				fn = 'moveDay';
			}
			while (this.dateIsDisabled(date));

			return date;
		},

		weekOfDateIsDisabled: function(date){
			return $.inArray(date.getUTCDay(), this.o.daysOfWeekDisabled) !== -1;
		},

		dateIsDisabled: function(date){
			return (
				this.weekOfDateIsDisabled(date) ||
				$.grep(this.o.datesDisabled, function(d){
					return isUTCEquals(date, d);
				}).length > 0
			);
		},

		dateWithinRange: function(date){
			return date >= this.o.startDate && date <= this.o.endDate;
		},

		keydown: function(e){
			if (!this.picker.is(':visible')){
				if (e.keyCode === 40 || e.keyCode === 27) { // allow down to re-show picker
					this.show();
					e.stopPropagation();
        }
				return;
			}
			var dateChanged = false,
				dir, newViewDate,
				focusDate = this.focusDate || this.viewDate;
			switch (e.keyCode){
				case 27: // escape
					if (this.focusDate){
						this.focusDate = null;
						this.viewDate = this.dates.get(-1) || this.viewDate;
						this.fill();
					}
					else
						this.hide();
					e.preventDefault();
					e.stopPropagation();
					break;
				case 37: // left
				case 38: // up
				case 39: // right
				case 40: // down
					if (!this.o.keyboardNavigation || this.o.daysOfWeekDisabled.length === 7)
						break;
					dir = e.keyCode === 37 || e.keyCode === 38 ? -1 : 1;
          if (this.viewMode === 0) {
  					if (e.ctrlKey){
  						newViewDate = this.moveAvailableDate(focusDate, dir, 'moveYear');

  						if (newViewDate)
  							this._trigger('changeYear', this.viewDate);
  					} else if (e.shiftKey){
  						newViewDate = this.moveAvailableDate(focusDate, dir, 'moveMonth');

  						if (newViewDate)
  							this._trigger('changeMonth', this.viewDate);
  					} else if (e.keyCode === 37 || e.keyCode === 39){
  						newViewDate = this.moveAvailableDate(focusDate, dir, 'moveDay');
  					} else if (!this.weekOfDateIsDisabled(focusDate)){
  						newViewDate = this.moveAvailableDate(focusDate, dir, 'moveWeek');
  					}
          } else if (this.viewMode === 1) {
            if (e.keyCode === 38 || e.keyCode === 40) {
              dir = dir * 4;
            }
            newViewDate = this.moveAvailableDate(focusDate, dir, 'moveMonth');
          } else if (this.viewMode === 2) {
            if (e.keyCode === 38 || e.keyCode === 40) {
              dir = dir * 4;
            }
            newViewDate = this.moveAvailableDate(focusDate, dir, 'moveYear');
          }
					if (newViewDate){
						this.focusDate = this.viewDate = newViewDate;
						this.setValue();
						this.fill();
						e.preventDefault();
					}
					break;
				case 13: // enter
					if (!this.o.forceParse)
						break;
					focusDate = this.focusDate || this.dates.get(-1) || this.viewDate;
					if (this.o.keyboardNavigation) {
						this._toggle_multidate(focusDate);
						dateChanged = true;
					}
					this.focusDate = null;
					this.viewDate = this.dates.get(-1) || this.viewDate;
					this.setValue();
					this.fill();
					if (this.picker.is(':visible')){
						e.preventDefault();
						e.stopPropagation();
						if (this.o.autoclose)
							this.hide();
					}
					break;
				case 9: // tab
					this.focusDate = null;
					this.viewDate = this.dates.get(-1) || this.viewDate;
					this.fill();
					this.hide();
					break;
			}
			if (dateChanged){
				if (this.dates.length)
					this._trigger('changeDate');
				else
					this._trigger('clearDate');
				this.inputField.trigger('change');
			}
		},

		setViewMode: function(viewMode){
			this.viewMode = viewMode;
			this.picker
				.children('div')
				.hide()
				.filter('.datepicker-' + DPGlobal.viewModes[this.viewMode].clsName)
					.show();
			this.updateNavArrows();
      this._trigger('changeViewMode', new Date(this.viewDate));
		}
	};

	var DateRangePicker = function(element, options){
		$.data(element, 'datepicker', this);
		this.element = $(element);
		this.inputs = $.map(options.inputs, function(i){
			return i.jquery ? i[0] : i;
		});
		delete options.inputs;

		this.keepEmptyValues = options.keepEmptyValues;
		delete options.keepEmptyValues;

		datepickerPlugin.call($(this.inputs), options)
			.on('changeDate', $.proxy(this.dateUpdated, this));

		this.pickers = $.map(this.inputs, function(i){
			return $.data(i, 'datepicker');
		});
		this.updateDates();
	};
	DateRangePicker.prototype = {
		updateDates: function(){
			this.dates = $.map(this.pickers, function(i){
				return i.getUTCDate();
			});
			this.updateRanges();
		},
		updateRanges: function(){
			var range = $.map(this.dates, function(d){
				return d.valueOf();
			});
			$.each(this.pickers, function(i, p){
				p.setRange(range);
			});
		},
		clearDates: function(){
			$.each(this.pickers, function(i, p){
				p.clearDates();
			});
		},
		dateUpdated: function(e){
			// `this.updating` is a workaround for preventing infinite recursion
			// between `changeDate` triggering and `setUTCDate` calling.  Until
			// there is a better mechanism.
			if (this.updating)
				return;
			this.updating = true;

			var dp = $.data(e.target, 'datepicker');

			if (dp === undefined) {
				return;
			}

			var new_date = dp.getUTCDate(),
				keep_empty_values = this.keepEmptyValues,
				i = $.inArray(e.target, this.inputs),
				j = i - 1,
				k = i + 1,
				l = this.inputs.length;
			if (i === -1)
				return;

			$.each(this.pickers, function(i, p){
				if (!p.getUTCDate() && (p === dp || !keep_empty_values))
					p.setUTCDate(new_date);
			});

			if (new_date < this.dates[j]){
				// Date being moved earlier/left
				while (j >= 0 && new_date < this.dates[j]){
					this.pickers[j--].setUTCDate(new_date);
				}
			} else if (new_date > this.dates[k]){
				// Date being moved later/right
				while (k < l && new_date > this.dates[k]){
					this.pickers[k++].setUTCDate(new_date);
				}
			}
			this.updateDates();

			delete this.updating;
		},
		destroy: function(){
			$.map(this.pickers, function(p){ p.destroy(); });
			$(this.inputs).off('changeDate', this.dateUpdated);
			delete this.element.data().datepicker;
		},
		remove: alias('destroy', 'Method `remove` is deprecated and will be removed in version 2.0. Use `destroy` instead')
	};

	function opts_from_el(el, prefix){
		// Derive options from element data-attrs
		var data = $(el).data(),
			out = {}, inkey,
			replace = new RegExp('^' + prefix.toLowerCase() + '([A-Z])');
		prefix = new RegExp('^' + prefix.toLowerCase());
		function re_lower(_,a){
			return a.toLowerCase();
		}
		for (var key in data)
			if (prefix.test(key)){
				inkey = key.replace(replace, re_lower);
				out[inkey] = data[key];
			}
		return out;
	}

	function opts_from_locale(lang){
		// Derive options from locale plugins
		var out = {};
		// Check if "de-DE" style date is available, if not language should
		// fallback to 2 letter code eg "de"
		if (!dates[lang]){
			lang = lang.split('-')[0];
			if (!dates[lang])
				return;
		}
		var d = dates[lang];
		$.each(locale_opts, function(i,k){
			if (k in d)
				out[k] = d[k];
		});
		return out;
	}

	var old = $.fn.datepicker;
	var datepickerPlugin = function(option){
		var args = Array.apply(null, arguments);
		args.shift();
		var internal_return;
		this.each(function(){
			var $this = $(this),
				data = $this.data('datepicker'),
				options = typeof option === 'object' && option;
			if (!data){
				var elopts = opts_from_el(this, 'date'),
					// Preliminary otions
					xopts = $.extend({}, defaults, elopts, options),
					locopts = opts_from_locale(xopts.language),
					// Options priority: js args, data-attrs, locales, defaults
					opts = $.extend({}, defaults, locopts, elopts, options);
				if ($this.hasClass('input-daterange') || opts.inputs){
					$.extend(opts, {
						inputs: opts.inputs || $this.find('input').toArray()
					});
					data = new DateRangePicker(this, opts);
				}
				else {
					data = new Datepicker(this, opts);
				}
				$this.data('datepicker', data);
			}
			if (typeof option === 'string' && typeof data[option] === 'function'){
				internal_return = data[option].apply(data, args);
			}
		});

		if (
			internal_return === undefined ||
			internal_return instanceof Datepicker ||
			internal_return instanceof DateRangePicker
		)
			return this;

		if (this.length > 1)
			throw new Error('Using only allowed for the collection of a single element (' + option + ' function)');
		else
			return internal_return;
	};
	$.fn.datepicker = datepickerPlugin;

	var defaults = $.fn.datepicker.defaults = {
		assumeNearbyYear: false,
		autoclose: false,
		beforeShowDay: $.noop,
		beforeShowMonth: $.noop,
		beforeShowYear: $.noop,
		beforeShowDecade: $.noop,
		beforeShowCentury: $.noop,
		calendarWeeks: false,
		clearBtn: false,
		toggleActive: false,
		daysOfWeekDisabled: [],
		daysOfWeekHighlighted: [],
		datesDisabled: [],
		endDate: Infinity,
		forceParse: true,
		format: 'mm/dd/yyyy',
		keepEmptyValues: false,
		keyboardNavigation: true,
		language: 'en',
		minViewMode: 0,
		maxViewMode: 4,
		multidate: false,
		multidateSeparator: ',',
		orientation: "auto",
		rtl: false,
		startDate: -Infinity,
		startView: 0,
		todayBtn: false,
		todayHighlight: false,
		updateViewDate: true,
		weekStart: 0,
		disableTouchKeyboard: false,
		enableOnReadonly: true,
		showOnFocus: true,
		zIndexOffset: 10,
		container: 'body',
		immediateUpdates: false,
		title: '',
		templates: {
			leftArrow: '&#x00AB;',
			rightArrow: '&#x00BB;'
		},
    showWeekDays: true
	};
	var locale_opts = $.fn.datepicker.locale_opts = [
		'format',
		'rtl',
		'weekStart'
	];
	$.fn.datepicker.Constructor = Datepicker;
	var dates = $.fn.datepicker.dates = {
		en: {
			days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
			daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
			daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
			months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
			monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
			today: "Today",
			clear: "Clear",
			titleFormat: "MM yyyy"
		}
	};

	var DPGlobal = {
		viewModes: [
			{
				names: ['days', 'month'],
				clsName: 'days',
				e: 'changeMonth'
			},
			{
				names: ['months', 'year'],
				clsName: 'months',
				e: 'changeYear',
				navStep: 1
			},
			{
				names: ['years', 'decade'],
				clsName: 'years',
				e: 'changeDecade',
				navStep: 10
			},
			{
				names: ['decades', 'century'],
				clsName: 'decades',
				e: 'changeCentury',
				navStep: 100
			},
			{
				names: ['centuries', 'millennium'],
				clsName: 'centuries',
				e: 'changeMillennium',
				navStep: 1000
			}
		],
		validParts: /dd?|DD?|mm?|MM?|yy(?:yy)?/g,
		nonpunctuation: /[^ -\/:-@\u5e74\u6708\u65e5\[-`{-~\t\n\r]+/g,
		parseFormat: function(format){
			if (typeof format.toValue === 'function' && typeof format.toDisplay === 'function')
                return format;
            // IE treats \0 as a string end in inputs (truncating the value),
			// so it's a bad format delimiter, anyway
			var separators = format.replace(this.validParts, '\0').split('\0'),
				parts = format.match(this.validParts);
			if (!separators || !separators.length || !parts || parts.length === 0){
				throw new Error("Invalid date format.");
			}
			return {separators: separators, parts: parts};
		},
		parseDate: function(date, format, language, assumeNearby){
			if (!date)
				return undefined;
			if (date instanceof Date)
				return date;
			if (typeof format === 'string')
				format = DPGlobal.parseFormat(format);
			if (format.toValue)
				return format.toValue(date, format, language);
			var fn_map = {
					d: 'moveDay',
					m: 'moveMonth',
					w: 'moveWeek',
					y: 'moveYear'
				},
				dateAliases = {
					yesterday: '-1d',
					today: '+0d',
					tomorrow: '+1d'
				},
				parts, part, dir, i, fn;
			if (date in dateAliases){
				date = dateAliases[date];
			}
			if (/^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/i.test(date)){
				parts = date.match(/([\-+]\d+)([dmwy])/gi);
				date = new Date();
				for (i=0; i < parts.length; i++){
					part = parts[i].match(/([\-+]\d+)([dmwy])/i);
					dir = Number(part[1]);
					fn = fn_map[part[2].toLowerCase()];
					date = Datepicker.prototype[fn](date, dir);
				}
				return Datepicker.prototype._zero_utc_time(date);
			}

			parts = date && date.match(this.nonpunctuation) || [];

			function applyNearbyYear(year, threshold){
				if (threshold === true)
					threshold = 10;

				// if year is 2 digits or less, than the user most likely is trying to get a recent century
				if (year < 100){
					year += 2000;
					// if the new year is more than threshold years in advance, use last century
					if (year > ((new Date()).getFullYear()+threshold)){
						year -= 100;
					}
				}

				return year;
			}

			var parsed = {},
				setters_order = ['yyyy', 'yy', 'M', 'MM', 'm', 'mm', 'd', 'dd'],
				setters_map = {
					yyyy: function(d,v){
						return d.setUTCFullYear(assumeNearby ? applyNearbyYear(v, assumeNearby) : v);
					},
					m: function(d,v){
						if (isNaN(d))
							return d;
						v -= 1;
						while (v < 0) v += 12;
						v %= 12;
						d.setUTCMonth(v);
						while (d.getUTCMonth() !== v)
							d.setUTCDate(d.getUTCDate()-1);
						return d;
					},
					d: function(d,v){
						return d.setUTCDate(v);
					}
				},
				val, filtered;
			setters_map['yy'] = setters_map['yyyy'];
			setters_map['M'] = setters_map['MM'] = setters_map['mm'] = setters_map['m'];
			setters_map['dd'] = setters_map['d'];
			date = UTCToday();
			var fparts = format.parts.slice();
			// Remove noop parts
			if (parts.length !== fparts.length){
				fparts = $(fparts).filter(function(i,p){
					return $.inArray(p, setters_order) !== -1;
				}).toArray();
			}
			// Process remainder
			function match_part(){
				var m = this.slice(0, parts[i].length),
					p = parts[i].slice(0, m.length);
				return m.toLowerCase() === p.toLowerCase();
			}
			if (parts.length === fparts.length){
				var cnt;
				for (i=0, cnt = fparts.length; i < cnt; i++){
					val = parseInt(parts[i], 10);
					part = fparts[i];
					if (isNaN(val)){
						switch (part){
							case 'MM':
								filtered = $(dates[language].months).filter(match_part);
								val = $.inArray(filtered[0], dates[language].months) + 1;
								break;
							case 'M':
								filtered = $(dates[language].monthsShort).filter(match_part);
								val = $.inArray(filtered[0], dates[language].monthsShort) + 1;
								break;
						}
					}
					parsed[part] = val;
				}
				var _date, s;
				for (i=0; i < setters_order.length; i++){
					s = setters_order[i];
					if (s in parsed && !isNaN(parsed[s])){
						_date = new Date(date);
						setters_map[s](_date, parsed[s]);
						if (!isNaN(_date))
							date = _date;
					}
				}
			}
			return date;
		},
		formatDate: function(date, format, language){
			if (!date)
				return '';
			if (typeof format === 'string')
				format = DPGlobal.parseFormat(format);
			if (format.toDisplay)
                return format.toDisplay(date, format, language);
            var val = {
				d: date.getUTCDate(),
				D: dates[language].daysShort[date.getUTCDay()],
				DD: dates[language].days[date.getUTCDay()],
				m: date.getUTCMonth() + 1,
				M: dates[language].monthsShort[date.getUTCMonth()],
				MM: dates[language].months[date.getUTCMonth()],
				yy: date.getUTCFullYear().toString().substring(2),
				yyyy: date.getUTCFullYear()
			};
			val.dd = (val.d < 10 ? '0' : '') + val.d;
			val.mm = (val.m < 10 ? '0' : '') + val.m;
			date = [];
			var seps = $.extend([], format.separators);
			for (var i=0, cnt = format.parts.length; i <= cnt; i++){
				if (seps.length)
					date.push(seps.shift());
				date.push(val[format.parts[i]]);
			}
			return date.join('');
		},
		headTemplate: '<thead>'+
			              '<tr>'+
			                '<th colspan="7" class="datepicker-title"></th>'+
			              '</tr>'+
							'<tr>'+
								'<th class="prev">'+defaults.templates.leftArrow+'</th>'+
								'<th colspan="5" class="datepicker-switch"></th>'+
								'<th class="next">'+defaults.templates.rightArrow+'</th>'+
							'</tr>'+
						'</thead>',
		contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>',
		footTemplate: '<tfoot>'+
							'<tr>'+
								'<th colspan="7" class="today"></th>'+
							'</tr>'+
							'<tr>'+
								'<th colspan="7" class="clear"></th>'+
							'</tr>'+
						'</tfoot>'
	};
	DPGlobal.template = '<div class="datepicker">'+
							'<div class="datepicker-days">'+
								'<table class="table-condensed">'+
									DPGlobal.headTemplate+
									'<tbody></tbody>'+
									DPGlobal.footTemplate+
								'</table>'+
							'</div>'+
							'<div class="datepicker-months">'+
								'<table class="table-condensed">'+
									DPGlobal.headTemplate+
									DPGlobal.contTemplate+
									DPGlobal.footTemplate+
								'</table>'+
							'</div>'+
							'<div class="datepicker-years">'+
								'<table class="table-condensed">'+
									DPGlobal.headTemplate+
									DPGlobal.contTemplate+
									DPGlobal.footTemplate+
								'</table>'+
							'</div>'+
							'<div class="datepicker-decades">'+
								'<table class="table-condensed">'+
									DPGlobal.headTemplate+
									DPGlobal.contTemplate+
									DPGlobal.footTemplate+
								'</table>'+
							'</div>'+
							'<div class="datepicker-centuries">'+
								'<table class="table-condensed">'+
									DPGlobal.headTemplate+
									DPGlobal.contTemplate+
									DPGlobal.footTemplate+
								'</table>'+
							'</div>'+
						'</div>';

	$.fn.datepicker.DPGlobal = DPGlobal;


	/* DATEPICKER NO CONFLICT
	* =================== */

	$.fn.datepicker.noConflict = function(){
		$.fn.datepicker = old;
		return this;
	};

	/* DATEPICKER VERSION
	 * =================== */
	$.fn.datepicker.version = '1.9.0';

	$.fn.datepicker.deprecated = function(msg){
		var console = window.console;
		if (console && console.warn) {
			console.warn('DEPRECATED: ' + msg);
		}
	};


	/* DATEPICKER DATA-API
	* ================== */

	$(document).on(
		'focus.datepicker.data-api click.datepicker.data-api',
		'[data-provide="datepicker"]',
		function(e){
			var $this = $(this);
			if ($this.data('datepicker'))
				return;
			e.preventDefault();
			// component click requires us to explicitly show it
			datepickerPlugin.call($this, 'show');
		}
	);
	$(function(){
		datepickerPlugin.call($('[data-provide="datepicker-inline"]'));
	});

}));

/*!
 * Timepicker Component for Twitter Bootstrap
 *
 * Copyright 2013 Joris de Wit and bootstrap-timepicker contributors
 *
 * Contributors https://github.com/jdewit/bootstrap-timepicker/graphs/contributors
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
(function($, window, document) {
  'use strict';

  // TIMEPICKER PUBLIC CLASS DEFINITION
  var Timepicker = function(element, options) {
    this.widget = '';
    this.$element = $(element);
    this.defaultTime = options.defaultTime;
    this.disableFocus = options.disableFocus;
    this.disableMousewheel = options.disableMousewheel;
    this.isOpen = options.isOpen;
    this.minuteStep = options.minuteStep;
    this.modalBackdrop = options.modalBackdrop;
    this.orientation = options.orientation;
    this.secondStep = options.secondStep;
    this.snapToStep = options.snapToStep;
    this.showInputs = options.showInputs;
    this.showMeridian = options.showMeridian;
    this.showSeconds = options.showSeconds;
    this.template = options.template;
    this.appendWidgetTo = options.appendWidgetTo;
    this.showWidgetOnAddonClick = options.showWidgetOnAddonClick;
    this.icons = options.icons;
    this.maxHours = options.maxHours;
    this.explicitMode = options.explicitMode; // If true 123 = 1:23, 12345 = 1:23:45, else invalid.

    this.handleDocumentClick = function (e) {
      var self = e.data.scope;
      // This condition was inspired by bootstrap-datepicker.
      // The element the timepicker is invoked on is the input but it has a sibling for addon/button.
      if (!(self.$element.parent().find(e.target).length ||
          self.$widget.is(e.target) ||
          self.$widget.find(e.target).length)) {
        self.hideWidget();
      }
    };

    this._init();
  };

  Timepicker.prototype = {

    constructor: Timepicker,
    _init: function() {
      var self = this;

      if (this.showWidgetOnAddonClick && (this.$element.parent().hasClass('input-group') && this.$element.parent().hasClass('bootstrap-timepicker'))) {
        this.$element.parent('.input-group.bootstrap-timepicker').find('.input-group-addon').on({
          'click.timepicker': $.proxy(this.showWidget, this)
        });
        this.$element.on({
          'focus.timepicker': $.proxy(this.highlightUnit, this),
          'click.timepicker': $.proxy(this.highlightUnit, this),
          'keydown.timepicker': $.proxy(this.elementKeydown, this),
          'blur.timepicker': $.proxy(this.blurElement, this),
          'mousewheel.timepicker DOMMouseScroll.timepicker': $.proxy(this.mousewheel, this)
        });
      } else {
        if (this.template) {
          this.$element.on({
            'focus.timepicker': $.proxy(this.showWidget, this),
            'click.timepicker': $.proxy(this.showWidget, this),
            'blur.timepicker': $.proxy(this.blurElement, this),
            'mousewheel.timepicker DOMMouseScroll.timepicker': $.proxy(this.mousewheel, this)
          });
        } else {
          this.$element.on({
            'focus.timepicker': $.proxy(this.highlightUnit, this),
            'click.timepicker': $.proxy(this.highlightUnit, this),
            'keydown.timepicker': $.proxy(this.elementKeydown, this),
            'blur.timepicker': $.proxy(this.blurElement, this),
            'mousewheel.timepicker DOMMouseScroll.timepicker': $.proxy(this.mousewheel, this)
          });
        }
      }

      if (this.template !== false) {
        this.$widget = $(this.getTemplate()).on('click', $.proxy(this.widgetClick, this));
      } else {
        this.$widget = false;
      }

      if (this.showInputs && this.$widget !== false) {
        this.$widget.find('input').each(function() {
          $(this).on({
            'click.timepicker': function() { $(this).select(); },
            'keydown.timepicker': $.proxy(self.widgetKeydown, self),
            'keyup.timepicker': $.proxy(self.widgetKeyup, self)
          });
        });
      }

      this.setDefaultTime(this.defaultTime);
    },

    blurElement: function() {
      this.highlightedUnit = null;
      this.updateFromElementVal();
    },

    clear: function() {
      this.hour = '';
      this.minute = '';
      this.second = '';
      this.meridian = '';

      this.$element.val('');
    },

    decrementHour: function() {
      if (this.showMeridian) {
        if (this.hour === 1) {
          this.hour = 12;
        } else if (this.hour === 12) {
          this.hour--;

          return this.toggleMeridian();
        } else if (this.hour === 0) {
          this.hour = 11;

          return this.toggleMeridian();
        } else {
          this.hour--;
        }
      } else {
        if (this.hour <= 0) {
          this.hour = this.maxHours - 1;
        } else {
          this.hour--;
        }
      }
    },

    decrementMinute: function(step) {
      var newVal;

      if (step) {
        newVal = this.minute - step;
      } else {
        newVal = this.minute - this.minuteStep;
      }

      if (newVal < 0) {
        this.decrementHour();
        this.minute = newVal + 60;
      } else {
        this.minute = newVal;
      }
    },

    decrementSecond: function() {
      var newVal = this.second - this.secondStep;

      if (newVal < 0) {
        this.decrementMinute(true);
        this.second = newVal + 60;
      } else {
        this.second = newVal;
      }
    },

    elementKeydown: function(e) {
      switch (e.which) {
      case 9: //tab
        if (e.shiftKey) {
          if (this.highlightedUnit === 'hour') {
            this.hideWidget();
            break;
          }
          this.highlightPrevUnit();
        } else if ((this.showMeridian && this.highlightedUnit === 'meridian') || (this.showSeconds && this.highlightedUnit === 'second') || (!this.showMeridian && !this.showSeconds && this.highlightedUnit ==='minute')) {
          this.hideWidget();
          break;
        } else {
          this.highlightNextUnit();
        }
        e.preventDefault();
        this.updateFromElementVal();
        break;
      case 27: // escape
        this.updateFromElementVal();
        break;
      case 37: // left arrow
        e.preventDefault();
        this.highlightPrevUnit();
        this.updateFromElementVal();
        break;
      case 38: // up arrow
        e.preventDefault();
        switch (this.highlightedUnit) {
        case 'hour':
          this.incrementHour();
          this.highlightHour();
          break;
        case 'minute':
          this.incrementMinute();
          this.highlightMinute();
          break;
        case 'second':
          this.incrementSecond();
          this.highlightSecond();
          break;
        case 'meridian':
          this.toggleMeridian();
          this.highlightMeridian();
          break;
        }
        this.update();
        break;
      case 39: // right arrow
        e.preventDefault();
        this.highlightNextUnit();
        this.updateFromElementVal();
        break;
      case 40: // down arrow
        e.preventDefault();
        switch (this.highlightedUnit) {
        case 'hour':
          this.decrementHour();
          this.highlightHour();
          break;
        case 'minute':
          this.decrementMinute();
          this.highlightMinute();
          break;
        case 'second':
          this.decrementSecond();
          this.highlightSecond();
          break;
        case 'meridian':
          this.toggleMeridian();
          this.highlightMeridian();
          break;
        }

        this.update();
        break;
      }
    },

    getCursorPosition: function() {
      var input = this.$element.get(0);

      if ('selectionStart' in input) {// Standard-compliant browsers

        return input.selectionStart;
      } else if (document.selection) {// IE fix
        input.focus();
        var sel = document.selection.createRange(),
          selLen = document.selection.createRange().text.length;

        sel.moveStart('character', - input.value.length);

        return sel.text.length - selLen;
      }
    },

    getTemplate: function() {
      var template,
        hourTemplate,
        minuteTemplate,
        secondTemplate,
        meridianTemplate,
        templateContent;

      if (this.showInputs) {
        hourTemplate = '<input type="text" class="bootstrap-timepicker-hour" maxlength="2"/>';
        minuteTemplate = '<input type="text" class="bootstrap-timepicker-minute" maxlength="2"/>';
        secondTemplate = '<input type="text" class="bootstrap-timepicker-second" maxlength="2"/>';
        meridianTemplate = '<input type="text" class="bootstrap-timepicker-meridian" maxlength="2"/>';
      } else {
        hourTemplate = '<span class="bootstrap-timepicker-hour"></span>';
        minuteTemplate = '<span class="bootstrap-timepicker-minute"></span>';
        secondTemplate = '<span class="bootstrap-timepicker-second"></span>';
        meridianTemplate = '<span class="bootstrap-timepicker-meridian"></span>';
      }

      templateContent = '<table>'+
         '<tr>'+
           '<td><a href="#" data-action="incrementHour"><span class="'+ this.icons.up +'"></span></a></td>'+
           '<td class="separator">&nbsp;</td>'+
           '<td><a href="#" data-action="incrementMinute"><span class="'+ this.icons.up +'"></span></a></td>'+
           (this.showSeconds ?
             '<td class="separator">&nbsp;</td>'+
             '<td><a href="#" data-action="incrementSecond"><span class="'+ this.icons.up +'"></span></a></td>'
           : '') +
           (this.showMeridian ?
             '<td class="separator">&nbsp;</td>'+
             '<td class="meridian-column"><a href="#" data-action="toggleMeridian"><span class="'+ this.icons.up +'"></span></a></td>'
           : '') +
         '</tr>'+
         '<tr>'+
           '<td>'+ hourTemplate +'</td> '+
           '<td class="separator">:</td>'+
           '<td>'+ minuteTemplate +'</td> '+
           (this.showSeconds ?
            '<td class="separator">:</td>'+
            '<td>'+ secondTemplate +'</td>'
           : '') +
           (this.showMeridian ?
            '<td class="separator">&nbsp;</td>'+
            '<td>'+ meridianTemplate +'</td>'
           : '') +
         '</tr>'+
         '<tr>'+
           '<td><a href="#" data-action="decrementHour"><span class="'+ this.icons.down +'"></span></a></td>'+
           '<td class="separator"></td>'+
           '<td><a href="#" data-action="decrementMinute"><span class="'+ this.icons.down +'"></span></a></td>'+
           (this.showSeconds ?
            '<td class="separator">&nbsp;</td>'+
            '<td><a href="#" data-action="decrementSecond"><span class="'+ this.icons.down +'"></span></a></td>'
           : '') +
           (this.showMeridian ?
            '<td class="separator">&nbsp;</td>'+
            '<td><a href="#" data-action="toggleMeridian"><span class="'+ this.icons.down +'"></span></a></td>'
           : '') +
         '</tr>'+
       '</table>';

      switch(this.template) {
      case 'modal':
        template = '<div class="bootstrap-timepicker-widget modal hide fade in" data-backdrop="'+ (this.modalBackdrop ? 'true' : 'false') +'">'+
          '<div class="modal-header">'+
            '<a href="#" class="close" data-dismiss="modal">&times;</a>'+
            '<h3>Pick a Time</h3>'+
          '</div>'+
          '<div class="modal-content">'+
            templateContent +
          '</div>'+
          '<div class="modal-footer">'+
            '<a href="#" class="btn btn-primary" data-dismiss="modal">OK</a>'+
          '</div>'+
        '</div>';
        break;
      case 'dropdown':
        template = '<div class="bootstrap-timepicker-widget dropdown-menu">'+ templateContent +'</div>';
        break;
      }

      return template;
    },

    getTime: function() {
      if (this.hour === '') {
        return '';
      }

      return this.hour + ':' + (this.minute.toString().length === 1 ? '0' + this.minute : this.minute) + (this.showSeconds ? ':' + (this.second.toString().length === 1 ? '0' + this.second : this.second) : '') + (this.showMeridian ? ' ' + this.meridian : '');
    },

    hideWidget: function() {
      if (this.isOpen === false) {
        return;
      }

      this.$element.trigger({
        'type': 'hide.timepicker',
        'time': {
          'value': this.getTime(),
          'hours': this.hour,
          'minutes': this.minute,
          'seconds': this.second,
          'meridian': this.meridian
        }
      });

      if (this.template === 'modal' && this.$widget.modal) {
        this.$widget.modal('hide');
      } else {
        this.$widget.removeClass('open');
      }

      $(document).off('mousedown.timepicker, touchend.timepicker', this.handleDocumentClick);

      this.isOpen = false;
      // show/hide approach taken by datepicker
      this.$widget.detach();
    },

    highlightUnit: function() {
      this.position = this.getCursorPosition();
      if (this.position >= 0 && this.position <= 2) {
        this.highlightHour();
      } else if (this.position >= 3 && this.position <= 5) {
        this.highlightMinute();
      } else if (this.position >= 6 && this.position <= 8) {
        if (this.showSeconds) {
          this.highlightSecond();
        } else {
          this.highlightMeridian();
        }
      } else if (this.position >= 9 && this.position <= 11) {
        this.highlightMeridian();
      }
    },

    highlightNextUnit: function() {
      switch (this.highlightedUnit) {
      case 'hour':
        this.highlightMinute();
        break;
      case 'minute':
        if (this.showSeconds) {
          this.highlightSecond();
        } else if (this.showMeridian){
          this.highlightMeridian();
        } else {
          this.highlightHour();
        }
        break;
      case 'second':
        if (this.showMeridian) {
          this.highlightMeridian();
        } else {
          this.highlightHour();
        }
        break;
      case 'meridian':
        this.highlightHour();
        break;
      }
    },

    highlightPrevUnit: function() {
      switch (this.highlightedUnit) {
      case 'hour':
        if(this.showMeridian){
          this.highlightMeridian();
        } else if (this.showSeconds) {
          this.highlightSecond();
        } else {
          this.highlightMinute();
        }
        break;
      case 'minute':
        this.highlightHour();
        break;
      case 'second':
        this.highlightMinute();
        break;
      case 'meridian':
        if (this.showSeconds) {
          this.highlightSecond();
        } else {
          this.highlightMinute();
        }
        break;
      }
    },

    highlightHour: function() {
      var $element = this.$element.get(0),
          self = this;

      this.highlightedUnit = 'hour';

      if ($element.setSelectionRange) {
        setTimeout(function() {
          if (self.hour < 10) {
            $element.setSelectionRange(0,1);
          } else {
            $element.setSelectionRange(0,2);
          }
        }, 0);
      }
    },

    highlightMinute: function() {
      var $element = this.$element.get(0),
          self = this;

      this.highlightedUnit = 'minute';

      if ($element.setSelectionRange) {
        setTimeout(function() {
          if (self.hour < 10) {
            $element.setSelectionRange(2,4);
          } else {
            $element.setSelectionRange(3,5);
          }
        }, 0);
      }
    },

    highlightSecond: function() {
      var $element = this.$element.get(0),
          self = this;

      this.highlightedUnit = 'second';

      if ($element.setSelectionRange) {
        setTimeout(function() {
          if (self.hour < 10) {
            $element.setSelectionRange(5,7);
          } else {
            $element.setSelectionRange(6,8);
          }
        }, 0);
      }
    },

    highlightMeridian: function() {
      var $element = this.$element.get(0),
          self = this;

      this.highlightedUnit = 'meridian';

      if ($element.setSelectionRange) {
        if (this.showSeconds) {
          setTimeout(function() {
            if (self.hour < 10) {
              $element.setSelectionRange(8,10);
            } else {
              $element.setSelectionRange(9,11);
            }
          }, 0);
        } else {
          setTimeout(function() {
            if (self.hour < 10) {
              $element.setSelectionRange(5,7);
            } else {
              $element.setSelectionRange(6,8);
            }
          }, 0);
        }
      }
    },

    incrementHour: function() {
      if (this.showMeridian) {
        if (this.hour === 11) {
          this.hour++;
          return this.toggleMeridian();
        } else if (this.hour === 12) {
          this.hour = 0;
        }
      }
      if (this.hour === this.maxHours - 1) {
        this.hour = 0;

        return;
      }
      this.hour++;
    },

    incrementMinute: function(step) {
      var newVal;

      if (step) {
        newVal = this.minute + step;
      } else {
        newVal = this.minute + this.minuteStep - (this.minute % this.minuteStep);
      }

      if (newVal > 59) {
        this.incrementHour();
        this.minute = newVal - 60;
      } else {
        this.minute = newVal;
      }
    },

    incrementSecond: function() {
      var newVal = this.second + this.secondStep - (this.second % this.secondStep);

      if (newVal > 59) {
        this.incrementMinute(true);
        this.second = newVal - 60;
      } else {
        this.second = newVal;
      }
    },

    mousewheel: function(e) {
      if (this.disableMousewheel) {
        return;
      }

      e.preventDefault();
      e.stopPropagation();

      var delta = e.originalEvent.wheelDelta || -e.originalEvent.detail,
          scrollTo = null;

      if (e.type === 'mousewheel') {
        scrollTo = (e.originalEvent.wheelDelta * -1);
      }
      else if (e.type === 'DOMMouseScroll') {
        scrollTo = 40 * e.originalEvent.detail;
      }

      if (scrollTo) {
        e.preventDefault();
        $(this).scrollTop(scrollTo + $(this).scrollTop());
      }

      switch (this.highlightedUnit) {
      case 'minute':
        if (delta > 0) {
          this.incrementMinute();
        } else {
          this.decrementMinute();
        }
        this.highlightMinute();
        break;
      case 'second':
        if (delta > 0) {
          this.incrementSecond();
        } else {
          this.decrementSecond();
        }
        this.highlightSecond();
        break;
      case 'meridian':
        this.toggleMeridian();
        this.highlightMeridian();
        break;
      default:
        if (delta > 0) {
          this.incrementHour();
        } else {
          this.decrementHour();
        }
        this.highlightHour();
        break;
      }

      return false;
    },

    /**
     * Given a segment value like 43, will round and snap the segment
     * to the nearest "step", like 45 if step is 15. Segment will
     * "overflow" to 0 if it's larger than 59 or would otherwise
     * round up to 60.
     */
    changeToNearestStep: function (segment, step) {
      if (segment % step === 0) {
        return segment;
      }
      if (Math.round((segment % step) / step)) {
        return (segment + (step - segment % step)) % 60;
      } else {
        return segment - segment % step;
      }
    },

    // This method was adapted from bootstrap-datepicker.
    place : function() {
      if (this.isInline) {
        return;
      }
      var widgetWidth = this.$widget.outerWidth(), widgetHeight = this.$widget.outerHeight(), visualPadding = 10, windowWidth =
        $(window).width(), windowHeight = $(window).height(), scrollTop = $(window).scrollTop();

      var zIndex = parseInt(this.$element.parents().filter(function() { return $(this).css('z-index') !== 'auto'; }).first().css('z-index'), 10) + 10;
      var offset = this.component ? this.component.parent().offset() : this.$element.offset();
      var height = this.component ? this.component.outerHeight(true) : this.$element.outerHeight(false);
      var width = this.component ? this.component.outerWidth(true) : this.$element.outerWidth(false);
      var left = offset.left, top = offset.top;

      this.$widget.removeClass('timepicker-orient-top timepicker-orient-bottom timepicker-orient-right timepicker-orient-left');

      if (this.orientation.x !== 'auto') {
        this.$widget.addClass('timepicker-orient-' + this.orientation.x);
        if (this.orientation.x === 'right') {
          left -= widgetWidth - width;
        }
      } else{
        // auto x orientation is best-placement: if it crosses a window edge, fudge it sideways
        // Default to left
        this.$widget.addClass('timepicker-orient-left');
        if (offset.left < 0) {
          left -= offset.left - visualPadding;
        } else if (offset.left + widgetWidth > windowWidth) {
          left = windowWidth - widgetWidth - visualPadding;
        }
      }
      // auto y orientation is best-situation: top or bottom, no fudging, decision based on which shows more of the widget
      var yorient = this.orientation.y, topOverflow, bottomOverflow;
      if (yorient === 'auto') {
        topOverflow = -scrollTop + offset.top - widgetHeight;
        bottomOverflow = scrollTop + windowHeight - (offset.top + height + widgetHeight);
        if (Math.max(topOverflow, bottomOverflow) === bottomOverflow) {
          yorient = 'top';
        } else {
          yorient = 'bottom';
        }
      }
      this.$widget.addClass('timepicker-orient-' + yorient);
      if (yorient === 'top'){
        top += height;
      } else{
        top -= widgetHeight + parseInt(this.$widget.css('padding-top'), 10);
      }

      this.$widget.css({
        top : top,
        left : left,
        zIndex : zIndex
      });
    },

    remove: function() {
      $('document').off('.timepicker');
      if (this.$widget) {
        this.$widget.remove();
      }
      delete this.$element.data().timepicker;
    },

    setDefaultTime: function(defaultTime) {
      if (!this.$element.val()) {
        if (defaultTime === 'current') {
          var dTime = new Date(),
            hours = dTime.getHours(),
            minutes = dTime.getMinutes(),
            seconds = dTime.getSeconds(),
            meridian = 'AM';

          if (seconds !== 0) {
            seconds = Math.ceil(dTime.getSeconds() / this.secondStep) * this.secondStep;
            if (seconds === 60) {
              minutes += 1;
              seconds = 0;
            }
          }

          if (minutes !== 0) {
            minutes = Math.ceil(dTime.getMinutes() / this.minuteStep) * this.minuteStep;
            if (minutes === 60) {
              hours += 1;
              minutes = 0;
            }
          }

          if (this.showMeridian) {
            if (hours === 0) {
              hours = 12;
            } else if (hours >= 12) {
              if (hours > 12) {
                hours = hours - 12;
              }
              meridian = 'PM';
            } else {
              meridian = 'AM';
            }
          }

          this.hour = hours;
          this.minute = minutes;
          this.second = seconds;
          this.meridian = meridian;

          this.update();

        } else if (defaultTime === false) {
          this.hour = 0;
          this.minute = 0;
          this.second = 0;
          this.meridian = 'AM';
        } else {
          this.setTime(defaultTime);
        }
      } else {
        this.updateFromElementVal();
      }
    },

    setTime: function(time, ignoreWidget) {
      if (!time) {
        this.clear();
        return;
      }

      var timeMode,
          timeArray,
          hour,
          minute,
          second,
          meridian;

      if (typeof time === 'object' && time.getMonth){
        // this is a date object
        hour    = time.getHours();
        minute  = time.getMinutes();
        second  = time.getSeconds();

        if (this.showMeridian){
          meridian = 'AM';
          if (hour > 12){
            meridian = 'PM';
            hour = hour % 12;
          }

          if (hour === 12){
            meridian = 'PM';
          }
        }
      } else {
        timeMode = ((/a/i).test(time) ? 1 : 0) + ((/p/i).test(time) ? 2 : 0); // 0 = none, 1 = AM, 2 = PM, 3 = BOTH.
        if (timeMode > 2) { // If both are present, fail.
          this.clear();
          return;
        }

        timeArray = time.replace(/[^0-9\:]/g, '').split(':');

        hour = timeArray[0] ? timeArray[0].toString() : timeArray.toString();

        if(this.explicitMode && hour.length > 2 && (hour.length % 2) !== 0 ) {
          this.clear();
          return;
        }

        minute = timeArray[1] ? timeArray[1].toString() : '';
        second = timeArray[2] ? timeArray[2].toString() : '';

        // adaptive time parsing
        if (hour.length > 4) {
          second = hour.slice(-2);
          hour = hour.slice(0, -2);
        }

        if (hour.length > 2) {
          minute = hour.slice(-2);
          hour = hour.slice(0, -2);
        }

        if (minute.length > 2) {
          second = minute.slice(-2);
          minute = minute.slice(0, -2);
        }

        hour = parseInt(hour, 10);
        minute = parseInt(minute, 10);
        second = parseInt(second, 10);

        if (isNaN(hour)) {
          hour = 0;
        }
        if (isNaN(minute)) {
          minute = 0;
        }
        if (isNaN(second)) {
          second = 0;
        }

        // Adjust the time based upon unit boundary.
        // NOTE: Negatives will never occur due to time.replace() above.
        if (second > 59) {
          second = 59;
        }

        if (minute > 59) {
          minute = 59;
        }

        if (hour >= this.maxHours) {
          // No day/date handling.
          hour = this.maxHours - 1;
        }

        if (this.showMeridian) {
          if (hour > 12) {
            // Force PM.
            timeMode = 2;
            hour -= 12;
          }
          if (!timeMode) {
            timeMode = 1;
          }
          if (hour === 0) {
            hour = 12; // AM or PM, reset to 12.  0 AM = 12 AM.  0 PM = 12 PM, etc.
          }
          meridian = timeMode === 1 ? 'AM' : 'PM';
        } else if (hour < 12 && timeMode === 2) {
          hour += 12;
        } else {
          if (hour >= this.maxHours) {
            hour = this.maxHours - 1;
          } else if ((hour < 0) || (hour === 12 && timeMode === 1)){
            hour = 0;
          }
        }
      }

      this.hour = hour;
      if (this.snapToStep) {
        this.minute = this.changeToNearestStep(minute, this.minuteStep);
        this.second = this.changeToNearestStep(second, this.secondStep);
      } else {
        this.minute = minute;
        this.second = second;
      }
      this.meridian = meridian;

      this.update(ignoreWidget);
    },

    showWidget: function() {
      if (this.isOpen) {
        return;
      }

      if (this.$element.is(':disabled')) {
        return;
      }

      // show/hide approach taken by datepicker
      this.$widget.appendTo(this.appendWidgetTo);
      $(document).on('mousedown.timepicker, touchend.timepicker', {scope: this}, this.handleDocumentClick);

      this.$element.trigger({
        'type': 'show.timepicker',
        'time': {
          'value': this.getTime(),
          'hours': this.hour,
          'minutes': this.minute,
          'seconds': this.second,
          'meridian': this.meridian
        }
      });

      this.place();
      if (this.disableFocus) {
        this.$element.blur();
      }

      // widget shouldn't be empty on open
      if (this.hour === '') {
        if (this.defaultTime) {
          this.setDefaultTime(this.defaultTime);
        } else {
          this.setTime('0:0:0');
        }
      }

      if (this.template === 'modal' && this.$widget.modal) {
        this.$widget.modal('show').on('hidden', $.proxy(this.hideWidget, this));
      } else {
        if (this.isOpen === false) {
          this.$widget.addClass('open');
        }
      }

      this.isOpen = true;
    },

    toggleMeridian: function() {
      this.meridian = this.meridian === 'AM' ? 'PM' : 'AM';
    },

    update: function(ignoreWidget) {
      this.updateElement();
      if (!ignoreWidget) {
        this.updateWidget();
      }

      this.$element.trigger({
        'type': 'changeTime.timepicker',
        'time': {
          'value': this.getTime(),
          'hours': this.hour,
          'minutes': this.minute,
          'seconds': this.second,
          'meridian': this.meridian
        }
      });
    },

    updateElement: function() {
      this.$element.val(this.getTime()).change();
    },

    updateFromElementVal: function() {
      this.setTime(this.$element.val());
    },

    updateWidget: function() {
      if (this.$widget === false) {
        return;
      }

      var hour = this.hour,
          minute = this.minute.toString().length === 1 ? '0' + this.minute : this.minute,
          second = this.second.toString().length === 1 ? '0' + this.second : this.second;

      if (this.showInputs) {
        this.$widget.find('input.bootstrap-timepicker-hour').val(hour);
        this.$widget.find('input.bootstrap-timepicker-minute').val(minute);

        if (this.showSeconds) {
          this.$widget.find('input.bootstrap-timepicker-second').val(second);
        }
        if (this.showMeridian) {
          this.$widget.find('input.bootstrap-timepicker-meridian').val(this.meridian);
        }
      } else {
        this.$widget.find('span.bootstrap-timepicker-hour').text(hour);
        this.$widget.find('span.bootstrap-timepicker-minute').text(minute);

        if (this.showSeconds) {
          this.$widget.find('span.bootstrap-timepicker-second').text(second);
        }
        if (this.showMeridian) {
          this.$widget.find('span.bootstrap-timepicker-meridian').text(this.meridian);
        }
      }
    },

    updateFromWidgetInputs: function() {
      if (this.$widget === false) {
        return;
      }

      var t = this.$widget.find('input.bootstrap-timepicker-hour').val() + ':' +
              this.$widget.find('input.bootstrap-timepicker-minute').val() +
              (this.showSeconds ? ':' + this.$widget.find('input.bootstrap-timepicker-second').val() : '') +
              (this.showMeridian ? this.$widget.find('input.bootstrap-timepicker-meridian').val() : '')
      ;

      this.setTime(t, true);
    },

    widgetClick: function(e) {
      e.stopPropagation();
      e.preventDefault();

      var $input = $(e.target),
          action = $input.closest('a').data('action');

      if (action) {
        this[action]();
      }
      this.update();

      if ($input.is('input')) {
        $input.get(0).setSelectionRange(0,2);
      }
    },

    widgetKeydown: function(e) {
      var $input = $(e.target),
          name = $input.attr('class').replace('bootstrap-timepicker-', '');

      switch (e.which) {
      case 9: //tab
        if (e.shiftKey) {
          if (name === 'hour') {
            return this.hideWidget();
          }
        } else if ((this.showMeridian && name === 'meridian') || (this.showSeconds && name === 'second') || (!this.showMeridian && !this.showSeconds && name === 'minute')) {
          return this.hideWidget();
        }
        break;
      case 27: // escape
        this.hideWidget();
        break;
      case 38: // up arrow
        e.preventDefault();
        switch (name) {
        case 'hour':
          this.incrementHour();
          break;
        case 'minute':
          this.incrementMinute();
          break;
        case 'second':
          this.incrementSecond();
          break;
        case 'meridian':
          this.toggleMeridian();
          break;
        }
        this.setTime(this.getTime());
        $input.get(0).setSelectionRange(0,2);
        break;
      case 40: // down arrow
        e.preventDefault();
        switch (name) {
        case 'hour':
          this.decrementHour();
          break;
        case 'minute':
          this.decrementMinute();
          break;
        case 'second':
          this.decrementSecond();
          break;
        case 'meridian':
          this.toggleMeridian();
          break;
        }
        this.setTime(this.getTime());
        $input.get(0).setSelectionRange(0,2);
        break;
      }
    },

    widgetKeyup: function(e) {
      if ((e.which === 65) || (e.which === 77) || (e.which === 80) || (e.which === 46) || (e.which === 8) || (e.which >= 48 && e.which <= 57) || (e.which >= 96 && e.which <= 105)) {
        this.updateFromWidgetInputs();
      }
    }
  };

  //TIMEPICKER PLUGIN DEFINITION
  $.fn.timepicker = function(option) {
    var args = Array.apply(null, arguments);
    args.shift();
    return this.each(function() {
      var $this = $(this),
        data = $this.data('timepicker'),
        options = typeof option === 'object' && option;

      if (!data) {
        $this.data('timepicker', (data = new Timepicker(this, $.extend({}, $.fn.timepicker.defaults, options, $(this).data()))));
      }

      if (typeof option === 'string') {
        data[option].apply(data, args);
      }
    });
  };

  $.fn.timepicker.defaults = {
    defaultTime: 'current',
    disableFocus: false,
    disableMousewheel: false,
    isOpen: false,
    minuteStep: 15,
    modalBackdrop: false,
    orientation: { x: 'auto', y: 'auto'},
    secondStep: 15,
    snapToStep: false,
    showSeconds: false,
    showInputs: true,
    showMeridian: true,
    template: 'dropdown',
    appendWidgetTo: 'body',
    showWidgetOnAddonClick: true,
    icons: {
      up: 'glyphicon glyphicon-chevron-up',
      down: 'glyphicon glyphicon-chevron-down'
    },
    maxHours: 24,
    explicitMode: false
  };

  $.fn.timepicker.Constructor = Timepicker;

  $(document).on(
    'focus.timepicker.data-api click.timepicker.data-api',
    '[data-provide="timepicker"]',
    function(e){
      var $this = $(this);
      if ($this.data('timepicker')) {
        return;
      }
      e.preventDefault();
      // component click requires us to explicitly show it
      $this.timepicker();
    }
  );

})(jQuery, window, document);

/*! Select2 4.0.7 | https://github.com/select2/select2/blob/master/LICENSE.md */!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof module&&module.exports?module.exports=function(b,c){return void 0===c&&(c="undefined"!=typeof window?require("jquery"):require("jquery")(b)),a(c),c}:a(jQuery)}(function(a){var b=function(){if(a&&a.fn&&a.fn.select2&&a.fn.select2.amd)var b=a.fn.select2.amd;var b;return function(){if(!b||!b.requirejs){b?c=b:b={};var a,c,d;!function(b){function e(a,b){return v.call(a,b)}function f(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o=b&&b.split("/"),p=t.map,q=p&&p["*"]||{};if(a){for(a=a.split("/"),g=a.length-1,t.nodeIdCompat&&x.test(a[g])&&(a[g]=a[g].replace(x,"")),"."===a[0].charAt(0)&&o&&(n=o.slice(0,o.length-1),a=n.concat(a)),k=0;k<a.length;k++)if("."===(m=a[k]))a.splice(k,1),k-=1;else if(".."===m){if(0===k||1===k&&".."===a[2]||".."===a[k-1])continue;k>0&&(a.splice(k-1,2),k-=2)}a=a.join("/")}if((o||q)&&p){for(c=a.split("/"),k=c.length;k>0;k-=1){if(d=c.slice(0,k).join("/"),o)for(l=o.length;l>0;l-=1)if((e=p[o.slice(0,l).join("/")])&&(e=e[d])){f=e,h=k;break}if(f)break;!i&&q&&q[d]&&(i=q[d],j=k)}!f&&i&&(f=i,h=j),f&&(c.splice(0,h,f),a=c.join("/"))}return a}function g(a,c){return function(){var d=w.call(arguments,0);return"string"!=typeof d[0]&&1===d.length&&d.push(null),o.apply(b,d.concat([a,c]))}}function h(a){return function(b){return f(b,a)}}function i(a){return function(b){r[a]=b}}function j(a){if(e(s,a)){var c=s[a];delete s[a],u[a]=!0,n.apply(b,c)}if(!e(r,a)&&!e(u,a))throw new Error("No "+a);return r[a]}function k(a){var b,c=a?a.indexOf("!"):-1;return c>-1&&(b=a.substring(0,c),a=a.substring(c+1,a.length)),[b,a]}function l(a){return a?k(a):[]}function m(a){return function(){return t&&t.config&&t.config[a]||{}}}var n,o,p,q,r={},s={},t={},u={},v=Object.prototype.hasOwnProperty,w=[].slice,x=/\.js$/;p=function(a,b){var c,d=k(a),e=d[0],g=b[1];return a=d[1],e&&(e=f(e,g),c=j(e)),e?a=c&&c.normalize?c.normalize(a,h(g)):f(a,g):(a=f(a,g),d=k(a),e=d[0],a=d[1],e&&(c=j(e))),{f:e?e+"!"+a:a,n:a,pr:e,p:c}},q={require:function(a){return g(a)},exports:function(a){var b=r[a];return void 0!==b?b:r[a]={}},module:function(a){return{id:a,uri:"",exports:r[a],config:m(a)}}},n=function(a,c,d,f){var h,k,m,n,o,t,v,w=[],x=typeof d;if(f=f||a,t=l(f),"undefined"===x||"function"===x){for(c=!c.length&&d.length?["require","exports","module"]:c,o=0;o<c.length;o+=1)if(n=p(c[o],t),"require"===(k=n.f))w[o]=q.require(a);else if("exports"===k)w[o]=q.exports(a),v=!0;else if("module"===k)h=w[o]=q.module(a);else if(e(r,k)||e(s,k)||e(u,k))w[o]=j(k);else{if(!n.p)throw new Error(a+" missing "+k);n.p.load(n.n,g(f,!0),i(k),{}),w[o]=r[k]}m=d?d.apply(r[a],w):void 0,a&&(h&&h.exports!==b&&h.exports!==r[a]?r[a]=h.exports:m===b&&v||(r[a]=m))}else a&&(r[a]=d)},a=c=o=function(a,c,d,e,f){if("string"==typeof a)return q[a]?q[a](c):j(p(a,l(c)).f);if(!a.splice){if(t=a,t.deps&&o(t.deps,t.callback),!c)return;c.splice?(a=c,c=d,d=null):a=b}return c=c||function(){},"function"==typeof d&&(d=e,e=f),e?n(b,a,c,d):setTimeout(function(){n(b,a,c,d)},4),o},o.config=function(a){return o(a)},a._defined=r,d=function(a,b,c){if("string"!=typeof a)throw new Error("See almond README: incorrect module build, no module name");b.splice||(c=b,b=[]),e(r,a)||e(s,a)||(s[a]=[a,b,c])},d.amd={jQuery:!0}}(),b.requirejs=a,b.require=c,b.define=d}}(),b.define("almond",function(){}),b.define("jquery",[],function(){var b=a||$;return null==b&&console&&console.error&&console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."),b}),b.define("select2/utils",["jquery"],function(a){function b(a){var b=a.prototype,c=[];for(var d in b){"function"==typeof b[d]&&("constructor"!==d&&c.push(d))}return c}var c={};c.Extend=function(a,b){function c(){this.constructor=a}var d={}.hasOwnProperty;for(var e in b)d.call(b,e)&&(a[e]=b[e]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a},c.Decorate=function(a,c){function d(){var b=Array.prototype.unshift,d=c.prototype.constructor.length,e=a.prototype.constructor;d>0&&(b.call(arguments,a.prototype.constructor),e=c.prototype.constructor),e.apply(this,arguments)}function e(){this.constructor=d}var f=b(c),g=b(a);c.displayName=a.displayName,d.prototype=new e;for(var h=0;h<g.length;h++){var i=g[h];d.prototype[i]=a.prototype[i]}for(var j=(function(a){var b=function(){};a in d.prototype&&(b=d.prototype[a]);var e=c.prototype[a];return function(){return Array.prototype.unshift.call(arguments,b),e.apply(this,arguments)}}),k=0;k<f.length;k++){var l=f[k];d.prototype[l]=j(l)}return d};var d=function(){this.listeners={}};d.prototype.on=function(a,b){this.listeners=this.listeners||{},a in this.listeners?this.listeners[a].push(b):this.listeners[a]=[b]},d.prototype.trigger=function(a){var b=Array.prototype.slice,c=b.call(arguments,1);this.listeners=this.listeners||{},null==c&&(c=[]),0===c.length&&c.push({}),c[0]._type=a,a in this.listeners&&this.invoke(this.listeners[a],b.call(arguments,1)),"*"in this.listeners&&this.invoke(this.listeners["*"],arguments)},d.prototype.invoke=function(a,b){for(var c=0,d=a.length;c<d;c++)a[c].apply(this,b)},c.Observable=d,c.generateChars=function(a){for(var b="",c=0;c<a;c++){b+=Math.floor(36*Math.random()).toString(36)}return b},c.bind=function(a,b){return function(){a.apply(b,arguments)}},c._convertData=function(a){for(var b in a){var c=b.split("-"),d=a;if(1!==c.length){for(var e=0;e<c.length;e++){var f=c[e];f=f.substring(0,1).toLowerCase()+f.substring(1),f in d||(d[f]={}),e==c.length-1&&(d[f]=a[b]),d=d[f]}delete a[b]}}return a},c.hasScroll=function(b,c){var d=a(c),e=c.style.overflowX,f=c.style.overflowY;return(e!==f||"hidden"!==f&&"visible"!==f)&&("scroll"===e||"scroll"===f||(d.innerHeight()<c.scrollHeight||d.innerWidth()<c.scrollWidth))},c.escapeMarkup=function(a){var b={"\\":"&#92;","&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#47;"};return"string"!=typeof a?a:String(a).replace(/[&<>"'\/\\]/g,function(a){return b[a]})},c.appendMany=function(b,c){if("1.7"===a.fn.jquery.substr(0,3)){var d=a();a.map(c,function(a){d=d.add(a)}),c=d}b.append(c)},c.__cache={};var e=0;return c.GetUniqueElementId=function(a){var b=a.getAttribute("data-select2-id");return null==b&&(a.id?(b=a.id,a.setAttribute("data-select2-id",b)):(a.setAttribute("data-select2-id",++e),b=e.toString())),b},c.StoreData=function(a,b,d){var e=c.GetUniqueElementId(a);c.__cache[e]||(c.__cache[e]={}),c.__cache[e][b]=d},c.GetData=function(b,d){var e=c.GetUniqueElementId(b);return d?c.__cache[e]&&null!=c.__cache[e][d]?c.__cache[e][d]:a(b).data(d):c.__cache[e]},c.RemoveData=function(a){var b=c.GetUniqueElementId(a);null!=c.__cache[b]&&delete c.__cache[b]},c}),b.define("select2/results",["jquery","./utils"],function(a,b){function c(a,b,d){this.$element=a,this.data=d,this.options=b,c.__super__.constructor.call(this)}return b.Extend(c,b.Observable),c.prototype.render=function(){var b=a('<ul class="select2-results__options" role="tree"></ul>');return this.options.get("multiple")&&b.attr("aria-multiselectable","true"),this.$results=b,b},c.prototype.clear=function(){this.$results.empty()},c.prototype.displayMessage=function(b){var c=this.options.get("escapeMarkup");this.clear(),this.hideLoading();var d=a('<li role="treeitem" aria-live="assertive" class="select2-results__option"></li>'),e=this.options.get("translations").get(b.message);d.append(c(e(b.args))),d[0].className+=" select2-results__message",this.$results.append(d)},c.prototype.hideMessages=function(){this.$results.find(".select2-results__message").remove()},c.prototype.append=function(a){this.hideLoading();var b=[];if(null==a.results||0===a.results.length)return void(0===this.$results.children().length&&this.trigger("results:message",{message:"noResults"}));a.results=this.sort(a.results);for(var c=0;c<a.results.length;c++){var d=a.results[c],e=this.option(d);b.push(e)}this.$results.append(b)},c.prototype.position=function(a,b){b.find(".select2-results").append(a)},c.prototype.sort=function(a){return this.options.get("sorter")(a)},c.prototype.highlightFirstItem=function(){var a=this.$results.find(".select2-results__option[aria-selected]"),b=a.filter("[aria-selected=true]");b.length>0?b.first().trigger("mouseenter"):a.first().trigger("mouseenter"),this.ensureHighlightVisible()},c.prototype.setClasses=function(){var c=this;this.data.current(function(d){var e=a.map(d,function(a){return a.id.toString()});c.$results.find(".select2-results__option[aria-selected]").each(function(){var c=a(this),d=b.GetData(this,"data"),f=""+d.id;null!=d.element&&d.element.selected||null==d.element&&a.inArray(f,e)>-1?c.attr("aria-selected","true"):c.attr("aria-selected","false")})})},c.prototype.showLoading=function(a){this.hideLoading();var b=this.options.get("translations").get("searching"),c={disabled:!0,loading:!0,text:b(a)},d=this.option(c);d.className+=" loading-results",this.$results.prepend(d)},c.prototype.hideLoading=function(){this.$results.find(".loading-results").remove()},c.prototype.option=function(c){var d=document.createElement("li");d.className="select2-results__option";var e={role:"treeitem","aria-selected":"false"};c.disabled&&(delete e["aria-selected"],e["aria-disabled"]="true"),null==c.id&&delete e["aria-selected"],null!=c._resultId&&(d.id=c._resultId),c.title&&(d.title=c.title),c.children&&(e.role="group",e["aria-label"]=c.text,delete e["aria-selected"]);for(var f in e){var g=e[f];d.setAttribute(f,g)}if(c.children){var h=a(d),i=document.createElement("strong");i.className="select2-results__group";a(i);this.template(c,i);for(var j=[],k=0;k<c.children.length;k++){var l=c.children[k],m=this.option(l);j.push(m)}var n=a("<ul></ul>",{class:"select2-results__options select2-results__options--nested"});n.append(j),h.append(i),h.append(n)}else this.template(c,d);return b.StoreData(d,"data",c),d},c.prototype.bind=function(c,d){var e=this,f=c.id+"-results";this.$results.attr("id",f),c.on("results:all",function(a){e.clear(),e.append(a.data),c.isOpen()&&(e.setClasses(),e.highlightFirstItem())}),c.on("results:append",function(a){e.append(a.data),c.isOpen()&&e.setClasses()}),c.on("query",function(a){e.hideMessages(),e.showLoading(a)}),c.on("select",function(){c.isOpen()&&(e.setClasses(),e.options.get("scrollAfterSelect")&&e.highlightFirstItem())}),c.on("unselect",function(){c.isOpen()&&(e.setClasses(),e.options.get("scrollAfterSelect")&&e.highlightFirstItem())}),c.on("open",function(){e.$results.attr("aria-expanded","true"),e.$results.attr("aria-hidden","false"),e.setClasses(),e.ensureHighlightVisible()}),c.on("close",function(){e.$results.attr("aria-expanded","false"),e.$results.attr("aria-hidden","true"),e.$results.removeAttr("aria-activedescendant")}),c.on("results:toggle",function(){var a=e.getHighlightedResults();0!==a.length&&a.trigger("mouseup")}),c.on("results:select",function(){var a=e.getHighlightedResults();if(0!==a.length){var c=b.GetData(a[0],"data");"true"==a.attr("aria-selected")?e.trigger("close",{}):e.trigger("select",{data:c})}}),c.on("results:previous",function(){var a=e.getHighlightedResults(),b=e.$results.find("[aria-selected]"),c=b.index(a);if(!(c<=0)){var d=c-1;0===a.length&&(d=0);var f=b.eq(d);f.trigger("mouseenter");var g=e.$results.offset().top,h=f.offset().top,i=e.$results.scrollTop()+(h-g);0===d?e.$results.scrollTop(0):h-g<0&&e.$results.scrollTop(i)}}),c.on("results:next",function(){var a=e.getHighlightedResults(),b=e.$results.find("[aria-selected]"),c=b.index(a),d=c+1;if(!(d>=b.length)){var f=b.eq(d);f.trigger("mouseenter");var g=e.$results.offset().top+e.$results.outerHeight(!1),h=f.offset().top+f.outerHeight(!1),i=e.$results.scrollTop()+h-g;0===d?e.$results.scrollTop(0):h>g&&e.$results.scrollTop(i)}}),c.on("results:focus",function(a){a.element.addClass("select2-results__option--highlighted")}),c.on("results:message",function(a){e.displayMessage(a)}),a.fn.mousewheel&&this.$results.on("mousewheel",function(a){var b=e.$results.scrollTop(),c=e.$results.get(0).scrollHeight-b+a.deltaY,d=a.deltaY>0&&b-a.deltaY<=0,f=a.deltaY<0&&c<=e.$results.height();d?(e.$results.scrollTop(0),a.preventDefault(),a.stopPropagation()):f&&(e.$results.scrollTop(e.$results.get(0).scrollHeight-e.$results.height()),a.preventDefault(),a.stopPropagation())}),this.$results.on("mouseup",".select2-results__option[aria-selected]",function(c){var d=a(this),f=b.GetData(this,"data");if("true"===d.attr("aria-selected"))return void(e.options.get("multiple")?e.trigger("unselect",{originalEvent:c,data:f}):e.trigger("close",{}));e.trigger("select",{originalEvent:c,data:f})}),this.$results.on("mouseenter",".select2-results__option[aria-selected]",function(c){var d=b.GetData(this,"data");e.getHighlightedResults().removeClass("select2-results__option--highlighted"),e.trigger("results:focus",{data:d,element:a(this)})})},c.prototype.getHighlightedResults=function(){return this.$results.find(".select2-results__option--highlighted")},c.prototype.destroy=function(){this.$results.remove()},c.prototype.ensureHighlightVisible=function(){var a=this.getHighlightedResults();if(0!==a.length){var b=this.$results.find("[aria-selected]"),c=b.index(a),d=this.$results.offset().top,e=a.offset().top,f=this.$results.scrollTop()+(e-d),g=e-d;f-=2*a.outerHeight(!1),c<=2?this.$results.scrollTop(0):(g>this.$results.outerHeight()||g<0)&&this.$results.scrollTop(f)}},c.prototype.template=function(b,c){var d=this.options.get("templateResult"),e=this.options.get("escapeMarkup"),f=d(b,c);null==f?c.style.display="none":"string"==typeof f?c.innerHTML=e(f):a(c).append(f)},c}),b.define("select2/keys",[],function(){return{BACKSPACE:8,TAB:9,ENTER:13,SHIFT:16,CTRL:17,ALT:18,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,DELETE:46}}),b.define("select2/selection/base",["jquery","../utils","../keys"],function(a,b,c){function d(a,b){this.$element=a,this.options=b,d.__super__.constructor.call(this)}return b.Extend(d,b.Observable),d.prototype.render=function(){var c=a('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>');return this._tabindex=0,null!=b.GetData(this.$element[0],"old-tabindex")?this._tabindex=b.GetData(this.$element[0],"old-tabindex"):null!=this.$element.attr("tabindex")&&(this._tabindex=this.$element.attr("tabindex")),c.attr("title",this.$element.attr("title")),c.attr("tabindex",this._tabindex),this.$selection=c,c},d.prototype.bind=function(a,b){var d=this,e=(a.id,a.id+"-results");this.container=a,this.$selection.on("focus",function(a){d.trigger("focus",a)}),this.$selection.on("blur",function(a){d._handleBlur(a)}),this.$selection.on("keydown",function(a){d.trigger("keypress",a),a.which===c.SPACE&&a.preventDefault()}),a.on("results:focus",function(a){d.$selection.attr("aria-activedescendant",a.data._resultId)}),a.on("selection:update",function(a){d.update(a.data)}),a.on("open",function(){d.$selection.attr("aria-expanded","true"),d.$selection.attr("aria-owns",e),d._attachCloseHandler(a)}),a.on("close",function(){d.$selection.attr("aria-expanded","false"),d.$selection.removeAttr("aria-activedescendant"),d.$selection.removeAttr("aria-owns"),window.setTimeout(function(){d.$selection.focus()},0),d._detachCloseHandler(a)}),a.on("enable",function(){d.$selection.attr("tabindex",d._tabindex)}),a.on("disable",function(){d.$selection.attr("tabindex","-1")})},d.prototype._handleBlur=function(b){var c=this;window.setTimeout(function(){document.activeElement==c.$selection[0]||a.contains(c.$selection[0],document.activeElement)||c.trigger("blur",b)},1)},d.prototype._attachCloseHandler=function(c){a(document.body).on("mousedown.select2."+c.id,function(c){var d=a(c.target),e=d.closest(".select2");a(".select2.select2-container--open").each(function(){a(this),this!=e[0]&&b.GetData(this,"element").select2("close")})})},d.prototype._detachCloseHandler=function(b){a(document.body).off("mousedown.select2."+b.id)},d.prototype.position=function(a,b){b.find(".selection").append(a)},d.prototype.destroy=function(){this._detachCloseHandler(this.container)},d.prototype.update=function(a){throw new Error("The `update` method must be defined in child classes.")},d}),b.define("select2/selection/single",["jquery","./base","../utils","../keys"],function(a,b,c,d){function e(){e.__super__.constructor.apply(this,arguments)}return c.Extend(e,b),e.prototype.render=function(){var a=e.__super__.render.call(this);return a.addClass("select2-selection--single"),a.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'),a},e.prototype.bind=function(a,b){var c=this;e.__super__.bind.apply(this,arguments);var d=a.id+"-container";this.$selection.find(".select2-selection__rendered").attr("id",d).attr("role","textbox").attr("aria-readonly","true"),this.$selection.attr("aria-labelledby",d),this.$selection.on("mousedown",function(a){1===a.which&&c.trigger("toggle",{originalEvent:a})}),this.$selection.on("focus",function(a){}),this.$selection.on("blur",function(a){}),a.on("focus",function(b){a.isOpen()||c.$selection.focus()})},e.prototype.clear=function(){var a=this.$selection.find(".select2-selection__rendered");a.empty(),a.removeAttr("title")},e.prototype.display=function(a,b){var c=this.options.get("templateSelection");return this.options.get("escapeMarkup")(c(a,b))},e.prototype.selectionContainer=function(){return a("<span></span>")},e.prototype.update=function(a){if(0===a.length)return void this.clear();var b=a[0],c=this.$selection.find(".select2-selection__rendered"),d=this.display(b,c);c.empty().append(d),c.attr("title",b.title||b.text)},e}),b.define("select2/selection/multiple",["jquery","./base","../utils"],function(a,b,c){function d(a,b){d.__super__.constructor.apply(this,arguments)}return c.Extend(d,b),d.prototype.render=function(){var a=d.__super__.render.call(this);return a.addClass("select2-selection--multiple"),a.html('<ul class="select2-selection__rendered"></ul>'),a},d.prototype.bind=function(b,e){var f=this;d.__super__.bind.apply(this,arguments),this.$selection.on("click",function(a){f.trigger("toggle",{originalEvent:a})}),this.$selection.on("click",".select2-selection__choice__remove",function(b){if(!f.options.get("disabled")){var d=a(this),e=d.parent(),g=c.GetData(e[0],"data");f.trigger("unselect",{originalEvent:b,data:g})}})},d.prototype.clear=function(){var a=this.$selection.find(".select2-selection__rendered");a.empty(),a.removeAttr("title")},d.prototype.display=function(a,b){var c=this.options.get("templateSelection");return this.options.get("escapeMarkup")(c(a,b))},d.prototype.selectionContainer=function(){return a('<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>')},d.prototype.update=function(a){if(this.clear(),0!==a.length){for(var b=[],d=0;d<a.length;d++){var e=a[d],f=this.selectionContainer(),g=this.display(e,f);f.append(g),f.attr("title",e.title||e.text),c.StoreData(f[0],"data",e),b.push(f)}var h=this.$selection.find(".select2-selection__rendered");c.appendMany(h,b)}},d}),b.define("select2/selection/placeholder",["../utils"],function(a){function b(a,b,c){this.placeholder=this.normalizePlaceholder(c.get("placeholder")),a.call(this,b,c)}return b.prototype.normalizePlaceholder=function(a,b){return"string"==typeof b&&(b={id:"",text:b}),b},b.prototype.createPlaceholder=function(a,b){var c=this.selectionContainer();return c.html(this.display(b)),c.addClass("select2-selection__placeholder").removeClass("select2-selection__choice"),c},b.prototype.update=function(a,b){var c=1==b.length&&b[0].id!=this.placeholder.id;if(b.length>1||c)return a.call(this,b);this.clear();var d=this.createPlaceholder(this.placeholder);this.$selection.find(".select2-selection__rendered").append(d)},b}),b.define("select2/selection/allowClear",["jquery","../keys","../utils"],function(a,b,c){function d(){}return d.prototype.bind=function(a,b,c){var d=this;a.call(this,b,c),null==this.placeholder&&this.options.get("debug")&&window.console&&console.error&&console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."),this.$selection.on("mousedown",".select2-selection__clear",function(a){d._handleClear(a)}),b.on("keypress",function(a){d._handleKeyboardClear(a,b)})},d.prototype._handleClear=function(a,b){if(!this.options.get("disabled")){var d=this.$selection.find(".select2-selection__clear");if(0!==d.length){b.stopPropagation();var e=c.GetData(d[0],"data"),f=this.$element.val();this.$element.val(this.placeholder.id);var g={data:e};if(this.trigger("clear",g),g.prevented)return void this.$element.val(f);for(var h=0;h<e.length;h++)if(g={data:e[h]},this.trigger("unselect",g),g.prevented)return void this.$element.val(f);this.$element.trigger("change"),this.trigger("toggle",{})}}},d.prototype._handleKeyboardClear=function(a,c,d){d.isOpen()||c.which!=b.DELETE&&c.which!=b.BACKSPACE||this._handleClear(c)},d.prototype.update=function(b,d){if(b.call(this,d),!(this.$selection.find(".select2-selection__placeholder").length>0||0===d.length)){var e=this.options.get("translations").get("removeAllItems"),f=a('<span class="select2-selection__clear" title="'+e()+'">&times;</span>');c.StoreData(f[0],"data",d),this.$selection.find(".select2-selection__rendered").prepend(f)}},d}),b.define("select2/selection/search",["jquery","../utils","../keys"],function(a,b,c){function d(a,b,c){a.call(this,b,c)}return d.prototype.render=function(b){var c=a('<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="textbox" aria-autocomplete="list" /></li>');this.$searchContainer=c,this.$search=c.find("input");var d=b.call(this);return this._transferTabIndex(),d},d.prototype.bind=function(a,d,e){var f=this;a.call(this,d,e),d.on("open",function(){f.$search.trigger("focus")}),d.on("close",function(){f.$search.val(""),f.$search.removeAttr("aria-activedescendant"),f.$search.trigger("focus")}),d.on("enable",function(){f.$search.prop("disabled",!1),f._transferTabIndex()}),d.on("disable",function(){f.$search.prop("disabled",!0)}),d.on("focus",function(a){f.$search.trigger("focus")}),d.on("results:focus",function(a){f.$search.attr("aria-activedescendant",a.id)}),this.$selection.on("focusin",".select2-search--inline",function(a){f.trigger("focus",a)}),this.$selection.on("focusout",".select2-search--inline",function(a){f._handleBlur(a)}),this.$selection.on("keydown",".select2-search--inline",function(a){if(a.stopPropagation(),f.trigger("keypress",a),f._keyUpPrevented=a.isDefaultPrevented(),a.which===c.BACKSPACE&&""===f.$search.val()){var d=f.$searchContainer.prev(".select2-selection__choice");if(d.length>0){var e=b.GetData(d[0],"data");f.searchRemoveChoice(e),a.preventDefault()}}});var g=document.documentMode,h=g&&g<=11;this.$selection.on("input.searchcheck",".select2-search--inline",function(a){if(h)return void f.$selection.off("input.search input.searchcheck");f.$selection.off("keyup.search")}),this.$selection.on("keyup.search input.search",".select2-search--inline",function(a){if(h&&"input"===a.type)return void f.$selection.off("input.search input.searchcheck");var b=a.which;b!=c.SHIFT&&b!=c.CTRL&&b!=c.ALT&&b!=c.TAB&&f.handleSearch(a)})},d.prototype._transferTabIndex=function(a){this.$search.attr("tabindex",this.$selection.attr("tabindex")),this.$selection.attr("tabindex","-1")},d.prototype.createPlaceholder=function(a,b){this.$search.attr("placeholder",b.text)},d.prototype.update=function(a,b){var c=this.$search[0]==document.activeElement;if(this.$search.attr("placeholder",""),a.call(this,b),this.$selection.find(".select2-selection__rendered").append(this.$searchContainer),this.resizeSearch(),c){this.$element.find("[data-select2-tag]").length?this.$element.focus():this.$search.focus()}},d.prototype.handleSearch=function(){if(this.resizeSearch(),!this._keyUpPrevented){var a=this.$search.val();this.trigger("query",{term:a})}this._keyUpPrevented=!1},d.prototype.searchRemoveChoice=function(a,b){this.trigger("unselect",{data:b}),this.$search.val(b.text),this.handleSearch()},d.prototype.resizeSearch=function(){this.$search.css("width","25px");var a="";if(""!==this.$search.attr("placeholder"))a=this.$selection.find(".select2-selection__rendered").innerWidth();else{a=.75*(this.$search.val().length+1)+"em"}this.$search.css("width",a)},d}),b.define("select2/selection/eventRelay",["jquery"],function(a){function b(){}return b.prototype.bind=function(b,c,d){var e=this,f=["open","opening","close","closing","select","selecting","unselect","unselecting","clear","clearing"],g=["opening","closing","selecting","unselecting","clearing"];b.call(this,c,d),c.on("*",function(b,c){if(-1!==a.inArray(b,f)){c=c||{};var d=a.Event("select2:"+b,{params:c});e.$element.trigger(d),-1!==a.inArray(b,g)&&(c.prevented=d.isDefaultPrevented())}})},b}),b.define("select2/translation",["jquery","require"],function(a,b){function c(a){this.dict=a||{}}return c.prototype.all=function(){return this.dict},c.prototype.get=function(a){return this.dict[a]},c.prototype.extend=function(b){this.dict=a.extend({},b.all(),this.dict)},c._cache={},c.loadPath=function(a){if(!(a in c._cache)){var d=b(a);c._cache[a]=d}return new c(c._cache[a])},c}),b.define("select2/diacritics",[],function(){return{"Ⓐ":"A","Ａ":"A","À":"A","Á":"A","Â":"A","Ầ":"A","Ấ":"A","Ẫ":"A","Ẩ":"A","Ã":"A","Ā":"A","Ă":"A","Ằ":"A","Ắ":"A","Ẵ":"A","Ẳ":"A","Ȧ":"A","Ǡ":"A","Ä":"A","Ǟ":"A","Ả":"A","Å":"A","Ǻ":"A","Ǎ":"A","Ȁ":"A","Ȃ":"A","Ạ":"A","Ậ":"A","Ặ":"A","Ḁ":"A","Ą":"A","Ⱥ":"A","Ɐ":"A","Ꜳ":"AA","Æ":"AE","Ǽ":"AE","Ǣ":"AE","Ꜵ":"AO","Ꜷ":"AU","Ꜹ":"AV","Ꜻ":"AV","Ꜽ":"AY","Ⓑ":"B","Ｂ":"B","Ḃ":"B","Ḅ":"B","Ḇ":"B","Ƀ":"B","Ƃ":"B","Ɓ":"B","Ⓒ":"C","Ｃ":"C","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","Ç":"C","Ḉ":"C","Ƈ":"C","Ȼ":"C","Ꜿ":"C","Ⓓ":"D","Ｄ":"D","Ḋ":"D","Ď":"D","Ḍ":"D","Ḑ":"D","Ḓ":"D","Ḏ":"D","Đ":"D","Ƌ":"D","Ɗ":"D","Ɖ":"D","Ꝺ":"D","Ǳ":"DZ","Ǆ":"DZ","ǲ":"Dz","ǅ":"Dz","Ⓔ":"E","Ｅ":"E","È":"E","É":"E","Ê":"E","Ề":"E","Ế":"E","Ễ":"E","Ể":"E","Ẽ":"E","Ē":"E","Ḕ":"E","Ḗ":"E","Ĕ":"E","Ė":"E","Ë":"E","Ẻ":"E","Ě":"E","Ȅ":"E","Ȇ":"E","Ẹ":"E","Ệ":"E","Ȩ":"E","Ḝ":"E","Ę":"E","Ḙ":"E","Ḛ":"E","Ɛ":"E","Ǝ":"E","Ⓕ":"F","Ｆ":"F","Ḟ":"F","Ƒ":"F","Ꝼ":"F","Ⓖ":"G","Ｇ":"G","Ǵ":"G","Ĝ":"G","Ḡ":"G","Ğ":"G","Ġ":"G","Ǧ":"G","Ģ":"G","Ǥ":"G","Ɠ":"G","Ꞡ":"G","Ᵹ":"G","Ꝿ":"G","Ⓗ":"H","Ｈ":"H","Ĥ":"H","Ḣ":"H","Ḧ":"H","Ȟ":"H","Ḥ":"H","Ḩ":"H","Ḫ":"H","Ħ":"H","Ⱨ":"H","Ⱶ":"H","Ɥ":"H","Ⓘ":"I","Ｉ":"I","Ì":"I","Í":"I","Î":"I","Ĩ":"I","Ī":"I","Ĭ":"I","İ":"I","Ï":"I","Ḯ":"I","Ỉ":"I","Ǐ":"I","Ȉ":"I","Ȋ":"I","Ị":"I","Į":"I","Ḭ":"I","Ɨ":"I","Ⓙ":"J","Ｊ":"J","Ĵ":"J","Ɉ":"J","Ⓚ":"K","Ｋ":"K","Ḱ":"K","Ǩ":"K","Ḳ":"K","Ķ":"K","Ḵ":"K","Ƙ":"K","Ⱪ":"K","Ꝁ":"K","Ꝃ":"K","Ꝅ":"K","Ꞣ":"K","Ⓛ":"L","Ｌ":"L","Ŀ":"L","Ĺ":"L","Ľ":"L","Ḷ":"L","Ḹ":"L","Ļ":"L","Ḽ":"L","Ḻ":"L","Ł":"L","Ƚ":"L","Ɫ":"L","Ⱡ":"L","Ꝉ":"L","Ꝇ":"L","Ꞁ":"L","Ǉ":"LJ","ǈ":"Lj","Ⓜ":"M","Ｍ":"M","Ḿ":"M","Ṁ":"M","Ṃ":"M","Ɱ":"M","Ɯ":"M","Ⓝ":"N","Ｎ":"N","Ǹ":"N","Ń":"N","Ñ":"N","Ṅ":"N","Ň":"N","Ṇ":"N","Ņ":"N","Ṋ":"N","Ṉ":"N","Ƞ":"N","Ɲ":"N","Ꞑ":"N","Ꞥ":"N","Ǌ":"NJ","ǋ":"Nj","Ⓞ":"O","Ｏ":"O","Ò":"O","Ó":"O","Ô":"O","Ồ":"O","Ố":"O","Ỗ":"O","Ổ":"O","Õ":"O","Ṍ":"O","Ȭ":"O","Ṏ":"O","Ō":"O","Ṑ":"O","Ṓ":"O","Ŏ":"O","Ȯ":"O","Ȱ":"O","Ö":"O","Ȫ":"O","Ỏ":"O","Ő":"O","Ǒ":"O","Ȍ":"O","Ȏ":"O","Ơ":"O","Ờ":"O","Ớ":"O","Ỡ":"O","Ở":"O","Ợ":"O","Ọ":"O","Ộ":"O","Ǫ":"O","Ǭ":"O","Ø":"O","Ǿ":"O","Ɔ":"O","Ɵ":"O","Ꝋ":"O","Ꝍ":"O","Œ":"OE","Ƣ":"OI","Ꝏ":"OO","Ȣ":"OU","Ⓟ":"P","Ｐ":"P","Ṕ":"P","Ṗ":"P","Ƥ":"P","Ᵽ":"P","Ꝑ":"P","Ꝓ":"P","Ꝕ":"P","Ⓠ":"Q","Ｑ":"Q","Ꝗ":"Q","Ꝙ":"Q","Ɋ":"Q","Ⓡ":"R","Ｒ":"R","Ŕ":"R","Ṙ":"R","Ř":"R","Ȑ":"R","Ȓ":"R","Ṛ":"R","Ṝ":"R","Ŗ":"R","Ṟ":"R","Ɍ":"R","Ɽ":"R","Ꝛ":"R","Ꞧ":"R","Ꞃ":"R","Ⓢ":"S","Ｓ":"S","ẞ":"S","Ś":"S","Ṥ":"S","Ŝ":"S","Ṡ":"S","Š":"S","Ṧ":"S","Ṣ":"S","Ṩ":"S","Ș":"S","Ş":"S","Ȿ":"S","Ꞩ":"S","Ꞅ":"S","Ⓣ":"T","Ｔ":"T","Ṫ":"T","Ť":"T","Ṭ":"T","Ț":"T","Ţ":"T","Ṱ":"T","Ṯ":"T","Ŧ":"T","Ƭ":"T","Ʈ":"T","Ⱦ":"T","Ꞇ":"T","Ꜩ":"TZ","Ⓤ":"U","Ｕ":"U","Ù":"U","Ú":"U","Û":"U","Ũ":"U","Ṹ":"U","Ū":"U","Ṻ":"U","Ŭ":"U","Ü":"U","Ǜ":"U","Ǘ":"U","Ǖ":"U","Ǚ":"U","Ủ":"U","Ů":"U","Ű":"U","Ǔ":"U","Ȕ":"U","Ȗ":"U","Ư":"U","Ừ":"U","Ứ":"U","Ữ":"U","Ử":"U","Ự":"U","Ụ":"U","Ṳ":"U","Ų":"U","Ṷ":"U","Ṵ":"U","Ʉ":"U","Ⓥ":"V","Ｖ":"V","Ṽ":"V","Ṿ":"V","Ʋ":"V","Ꝟ":"V","Ʌ":"V","Ꝡ":"VY","Ⓦ":"W","Ｗ":"W","Ẁ":"W","Ẃ":"W","Ŵ":"W","Ẇ":"W","Ẅ":"W","Ẉ":"W","Ⱳ":"W","Ⓧ":"X","Ｘ":"X","Ẋ":"X","Ẍ":"X","Ⓨ":"Y","Ｙ":"Y","Ỳ":"Y","Ý":"Y","Ŷ":"Y","Ỹ":"Y","Ȳ":"Y","Ẏ":"Y","Ÿ":"Y","Ỷ":"Y","Ỵ":"Y","Ƴ":"Y","Ɏ":"Y","Ỿ":"Y","Ⓩ":"Z","Ｚ":"Z","Ź":"Z","Ẑ":"Z","Ż":"Z","Ž":"Z","Ẓ":"Z","Ẕ":"Z","Ƶ":"Z","Ȥ":"Z","Ɀ":"Z","Ⱬ":"Z","Ꝣ":"Z","ⓐ":"a","ａ":"a","ẚ":"a","à":"a","á":"a","â":"a","ầ":"a","ấ":"a","ẫ":"a","ẩ":"a","ã":"a","ā":"a","ă":"a","ằ":"a","ắ":"a","ẵ":"a","ẳ":"a","ȧ":"a","ǡ":"a","ä":"a","ǟ":"a","ả":"a","å":"a","ǻ":"a","ǎ":"a","ȁ":"a","ȃ":"a","ạ":"a","ậ":"a","ặ":"a","ḁ":"a","ą":"a","ⱥ":"a","ɐ":"a","ꜳ":"aa","æ":"ae","ǽ":"ae","ǣ":"ae","ꜵ":"ao","ꜷ":"au","ꜹ":"av","ꜻ":"av","ꜽ":"ay","ⓑ":"b","ｂ":"b","ḃ":"b","ḅ":"b","ḇ":"b","ƀ":"b","ƃ":"b","ɓ":"b","ⓒ":"c","ｃ":"c","ć":"c","ĉ":"c","ċ":"c","č":"c","ç":"c","ḉ":"c","ƈ":"c","ȼ":"c","ꜿ":"c","ↄ":"c","ⓓ":"d","ｄ":"d","ḋ":"d","ď":"d","ḍ":"d","ḑ":"d","ḓ":"d","ḏ":"d","đ":"d","ƌ":"d","ɖ":"d","ɗ":"d","ꝺ":"d","ǳ":"dz","ǆ":"dz","ⓔ":"e","ｅ":"e","è":"e","é":"e","ê":"e","ề":"e","ế":"e","ễ":"e","ể":"e","ẽ":"e","ē":"e","ḕ":"e","ḗ":"e","ĕ":"e","ė":"e","ë":"e","ẻ":"e","ě":"e","ȅ":"e","ȇ":"e","ẹ":"e","ệ":"e","ȩ":"e","ḝ":"e","ę":"e","ḙ":"e","ḛ":"e","ɇ":"e","ɛ":"e","ǝ":"e","ⓕ":"f","ｆ":"f","ḟ":"f","ƒ":"f","ꝼ":"f","ⓖ":"g","ｇ":"g","ǵ":"g","ĝ":"g","ḡ":"g","ğ":"g","ġ":"g","ǧ":"g","ģ":"g","ǥ":"g","ɠ":"g","ꞡ":"g","ᵹ":"g","ꝿ":"g","ⓗ":"h","ｈ":"h","ĥ":"h","ḣ":"h","ḧ":"h","ȟ":"h","ḥ":"h","ḩ":"h","ḫ":"h","ẖ":"h","ħ":"h","ⱨ":"h","ⱶ":"h","ɥ":"h","ƕ":"hv","ⓘ":"i","ｉ":"i","ì":"i","í":"i","î":"i","ĩ":"i","ī":"i","ĭ":"i","ï":"i","ḯ":"i","ỉ":"i","ǐ":"i","ȉ":"i","ȋ":"i","ị":"i","į":"i","ḭ":"i","ɨ":"i","ı":"i","ⓙ":"j","ｊ":"j","ĵ":"j","ǰ":"j","ɉ":"j","ⓚ":"k","ｋ":"k","ḱ":"k","ǩ":"k","ḳ":"k","ķ":"k","ḵ":"k","ƙ":"k","ⱪ":"k","ꝁ":"k","ꝃ":"k","ꝅ":"k","ꞣ":"k","ⓛ":"l","ｌ":"l","ŀ":"l","ĺ":"l","ľ":"l","ḷ":"l","ḹ":"l","ļ":"l","ḽ":"l","ḻ":"l","ſ":"l","ł":"l","ƚ":"l","ɫ":"l","ⱡ":"l","ꝉ":"l","ꞁ":"l","ꝇ":"l","ǉ":"lj","ⓜ":"m","ｍ":"m","ḿ":"m","ṁ":"m","ṃ":"m","ɱ":"m","ɯ":"m","ⓝ":"n","ｎ":"n","ǹ":"n","ń":"n","ñ":"n","ṅ":"n","ň":"n","ṇ":"n","ņ":"n","ṋ":"n","ṉ":"n","ƞ":"n","ɲ":"n","ŉ":"n","ꞑ":"n","ꞥ":"n","ǌ":"nj","ⓞ":"o","ｏ":"o","ò":"o","ó":"o","ô":"o","ồ":"o","ố":"o","ỗ":"o","ổ":"o","õ":"o","ṍ":"o","ȭ":"o","ṏ":"o","ō":"o","ṑ":"o","ṓ":"o","ŏ":"o","ȯ":"o","ȱ":"o","ö":"o","ȫ":"o","ỏ":"o","ő":"o","ǒ":"o","ȍ":"o","ȏ":"o","ơ":"o","ờ":"o","ớ":"o","ỡ":"o","ở":"o","ợ":"o","ọ":"o","ộ":"o","ǫ":"o","ǭ":"o","ø":"o","ǿ":"o","ɔ":"o","ꝋ":"o","ꝍ":"o","ɵ":"o","œ":"oe","ƣ":"oi","ȣ":"ou","ꝏ":"oo","ⓟ":"p","ｐ":"p","ṕ":"p","ṗ":"p","ƥ":"p","ᵽ":"p","ꝑ":"p","ꝓ":"p","ꝕ":"p","ⓠ":"q","ｑ":"q","ɋ":"q","ꝗ":"q","ꝙ":"q","ⓡ":"r","ｒ":"r","ŕ":"r","ṙ":"r","ř":"r","ȑ":"r","ȓ":"r","ṛ":"r","ṝ":"r","ŗ":"r","ṟ":"r","ɍ":"r","ɽ":"r","ꝛ":"r","ꞧ":"r","ꞃ":"r","ⓢ":"s","ｓ":"s","ß":"s","ś":"s","ṥ":"s","ŝ":"s","ṡ":"s","š":"s","ṧ":"s","ṣ":"s","ṩ":"s","ș":"s","ş":"s","ȿ":"s","ꞩ":"s","ꞅ":"s","ẛ":"s","ⓣ":"t","ｔ":"t","ṫ":"t","ẗ":"t","ť":"t","ṭ":"t","ț":"t","ţ":"t","ṱ":"t","ṯ":"t","ŧ":"t","ƭ":"t","ʈ":"t","ⱦ":"t","ꞇ":"t","ꜩ":"tz","ⓤ":"u","ｕ":"u","ù":"u","ú":"u","û":"u","ũ":"u","ṹ":"u","ū":"u","ṻ":"u","ŭ":"u","ü":"u","ǜ":"u","ǘ":"u","ǖ":"u","ǚ":"u","ủ":"u","ů":"u","ű":"u","ǔ":"u","ȕ":"u","ȗ":"u","ư":"u","ừ":"u","ứ":"u","ữ":"u","ử":"u","ự":"u","ụ":"u","ṳ":"u","ų":"u","ṷ":"u","ṵ":"u","ʉ":"u","ⓥ":"v","ｖ":"v","ṽ":"v","ṿ":"v","ʋ":"v","ꝟ":"v","ʌ":"v","ꝡ":"vy","ⓦ":"w","ｗ":"w","ẁ":"w","ẃ":"w","ŵ":"w","ẇ":"w","ẅ":"w","ẘ":"w","ẉ":"w","ⱳ":"w","ⓧ":"x","ｘ":"x","ẋ":"x","ẍ":"x","ⓨ":"y","ｙ":"y","ỳ":"y","ý":"y","ŷ":"y","ỹ":"y","ȳ":"y","ẏ":"y","ÿ":"y","ỷ":"y","ẙ":"y","ỵ":"y","ƴ":"y","ɏ":"y","ỿ":"y","ⓩ":"z","ｚ":"z","ź":"z","ẑ":"z","ż":"z","ž":"z","ẓ":"z","ẕ":"z","ƶ":"z","ȥ":"z","ɀ":"z","ⱬ":"z","ꝣ":"z","Ά":"Α","Έ":"Ε","Ή":"Η","Ί":"Ι","Ϊ":"Ι","Ό":"Ο","Ύ":"Υ","Ϋ":"Υ","Ώ":"Ω","ά":"α","έ":"ε","ή":"η","ί":"ι","ϊ":"ι","ΐ":"ι","ό":"ο","ύ":"υ","ϋ":"υ","ΰ":"υ","ώ":"ω","ς":"σ","’":"'"}}),b.define("select2/data/base",["../utils"],function(a){function b(a,c){b.__super__.constructor.call(this)}return a.Extend(b,a.Observable),b.prototype.current=function(a){throw new Error("The `current` method must be defined in child classes.")},b.prototype.query=function(a,b){throw new Error("The `query` method must be defined in child classes.")},b.prototype.bind=function(a,b){},b.prototype.destroy=function(){},b.prototype.generateResultId=function(b,c){var d=b.id+"-result-";return d+=a.generateChars(4),null!=c.id?d+="-"+c.id.toString():d+="-"+a.generateChars(4),d},b}),b.define("select2/data/select",["./base","../utils","jquery"],function(a,b,c){function d(a,b){this.$element=a,this.options=b,d.__super__.constructor.call(this)}return b.Extend(d,a),d.prototype.current=function(a){var b=[],d=this;this.$element.find(":selected").each(function(){var a=c(this),e=d.item(a);b.push(e)}),a(b)},d.prototype.select=function(a){var b=this;if(a.selected=!0,c(a.element).is("option"))return a.element.selected=!0,void this.$element.trigger("change");if(this.$element.prop("multiple"))this.current(function(d){var e=[];a=[a],a.push.apply(a,d);for(var f=0;f<a.length;f++){var g=a[f].id;-1===c.inArray(g,e)&&e.push(g)}b.$element.val(e),b.$element.trigger("change")});else{var d=a.id;this.$element.val(d),this.$element.trigger("change")}},d.prototype.unselect=function(a){var b=this;if(this.$element.prop("multiple")){if(a.selected=!1,c(a.element).is("option"))return a.element.selected=!1,void this.$element.trigger("change");this.current(function(d){for(var e=[],f=0;f<d.length;f++){var g=d[f].id;g!==a.id&&-1===c.inArray(g,e)&&e.push(g)}b.$element.val(e),b.$element.trigger("change")})}},d.prototype.bind=function(a,b){var c=this;this.container=a,a.on("select",function(a){c.select(a.data)}),a.on("unselect",function(a){c.unselect(a.data)})},d.prototype.destroy=function(){this.$element.find("*").each(function(){b.RemoveData(this)})},d.prototype.query=function(a,b){var d=[],e=this;this.$element.children().each(function(){var b=c(this);if(b.is("option")||b.is("optgroup")){var f=e.item(b),g=e.matches(a,f);null!==g&&d.push(g)}}),b({results:d})},d.prototype.addOptions=function(a){b.appendMany(this.$element,a)},d.prototype.option=function(a){var d;a.children?(d=document.createElement("optgroup"),d.label=a.text):(d=document.createElement("option"),void 0!==d.textContent?d.textContent=a.text:d.innerText=a.text),void 0!==a.id&&(d.value=a.id),a.disabled&&(d.disabled=!0),a.selected&&(d.selected=!0),a.title&&(d.title=a.title);var e=c(d),f=this._normalizeItem(a);return f.element=d,b.StoreData(d,"data",f),e},d.prototype.item=function(a){var d={};if(null!=(d=b.GetData(a[0],"data")))return d;if(a.is("option"))d={id:a.val(),text:a.text(),disabled:a.prop("disabled"),selected:a.prop("selected"),title:a.prop("title")};else if(a.is("optgroup")){d={text:a.prop("label"),children:[],title:a.prop("title")};for(var e=a.children("option"),f=[],g=0;g<e.length;g++){var h=c(e[g]),i=this.item(h);f.push(i)}d.children=f}return d=this._normalizeItem(d),d.element=a[0],b.StoreData(a[0],"data",d),d},d.prototype._normalizeItem=function(a){a!==Object(a)&&(a={id:a,text:a}),a=c.extend({},{text:""},a);var b={selected:!1,disabled:!1};return null!=a.id&&(a.id=a.id.toString()),null!=a.text&&(a.text=a.text.toString()),null==a._resultId&&a.id&&null!=this.container&&(a._resultId=this.generateResultId(this.container,a)),c.extend({},b,a)},d.prototype.matches=function(a,b){return this.options.get("matcher")(a,b)},d}),b.define("select2/data/array",["./select","../utils","jquery"],function(a,b,c){function d(a,b){var c=b.get("data")||[];d.__super__.constructor.call(this,a,b),this.addOptions(this.convertToOptions(c))}return b.Extend(d,a),d.prototype.select=function(a){var b=this.$element.find("option").filter(function(b,c){return c.value==a.id.toString()});0===b.length&&(b=this.option(a),this.addOptions(b)),d.__super__.select.call(this,a)},d.prototype.convertToOptions=function(a){function d(a){return function(){return c(this).val()==a.id}}for(var e=this,f=this.$element.find("option"),g=f.map(function(){return e.item(c(this)).id}).get(),h=[],i=0;i<a.length;i++){var j=this._normalizeItem(a[i]);if(c.inArray(j.id,g)>=0){var k=f.filter(d(j)),l=this.item(k),m=c.extend(!0,{},j,l),n=this.option(m);k.replaceWith(n)}else{var o=this.option(j);if(j.children){var p=this.convertToOptions(j.children);b.appendMany(o,p)}h.push(o)}}return h},d}),b.define("select2/data/ajax",["./array","../utils","jquery"],function(a,b,c){function d(a,b){this.ajaxOptions=this._applyDefaults(b.get("ajax")),null!=this.ajaxOptions.processResults&&(this.processResults=this.ajaxOptions.processResults),d.__super__.constructor.call(this,a,b)}return b.Extend(d,a),d.prototype._applyDefaults=function(a){var b={data:function(a){return c.extend({},a,{q:a.term})},transport:function(a,b,d){var e=c.ajax(a);return e.then(b),e.fail(d),e}};return c.extend({},b,a,!0)},d.prototype.processResults=function(a){return a},d.prototype.query=function(a,b){function d(){var d=f.transport(f,function(d){var f=e.processResults(d,a);e.options.get("debug")&&window.console&&console.error&&(f&&f.results&&c.isArray(f.results)||console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")),b(f)},function(){"status"in d&&(0===d.status||"0"===d.status)||e.trigger("results:message",{message:"errorLoading"})});e._request=d}var e=this;null!=this._request&&(c.isFunction(this._request.abort)&&this._request.abort(),this._request=null);var f=c.extend({type:"GET"},this.ajaxOptions);"function"==typeof f.url&&(f.url=f.url.call(this.$element,a)),"function"==typeof f.data&&(f.data=f.data.call(this.$element,a)),this.ajaxOptions.delay&&null!=a.term?(this._queryTimeout&&window.clearTimeout(this._queryTimeout),this._queryTimeout=window.setTimeout(d,this.ajaxOptions.delay)):d()},d}),b.define("select2/data/tags",["jquery"],function(a){function b(b,c,d){var e=d.get("tags"),f=d.get("createTag");void 0!==f&&(this.createTag=f);var g=d.get("insertTag");if(void 0!==g&&(this.insertTag=g),b.call(this,c,d),a.isArray(e))for(var h=0;h<e.length;h++){var i=e[h],j=this._normalizeItem(i),k=this.option(j);this.$element.append(k)}}return b.prototype.query=function(a,b,c){function d(a,f){for(var g=a.results,h=0;h<g.length;h++){var i=g[h],j=null!=i.children&&!d({results:i.children},!0);if((i.text||"").toUpperCase()===(b.term||"").toUpperCase()||j)return!f&&(a.data=g,void c(a))}if(f)return!0;var k=e.createTag(b);if(null!=k){var l=e.option(k);l.attr("data-select2-tag",!0),e.addOptions([l]),e.insertTag(g,k)}a.results=g,c(a)}var e=this;if(this._removeOldTags(),null==b.term||null!=b.page)return void a.call(this,b,c);a.call(this,b,d)},b.prototype.createTag=function(b,c){var d=a.trim(c.term);return""===d?null:{id:d,text:d}},b.prototype.insertTag=function(a,b,c){b.unshift(c)},b.prototype._removeOldTags=function(b){this._lastTag;this.$element.find("option[data-select2-tag]").each(function(){this.selected||a(this).remove()})},b}),b.define("select2/data/tokenizer",["jquery"],function(a){function b(a,b,c){var d=c.get("tokenizer");void 0!==d&&(this.tokenizer=d),a.call(this,b,c)}return b.prototype.bind=function(a,b,c){a.call(this,b,c),this.$search=b.dropdown.$search||b.selection.$search||c.find(".select2-search__field")},b.prototype.query=function(b,c,d){function e(b){var c=g._normalizeItem(b);if(!g.$element.find("option").filter(function(){return a(this).val()===c.id}).length){var d=g.option(c);d.attr("data-select2-tag",!0),g._removeOldTags(),g.addOptions([d])}f(c)}function f(a){g.trigger("select",{data:a})}var g=this;c.term=c.term||"";var h=this.tokenizer(c,this.options,e);h.term!==c.term&&(this.$search.length&&(this.$search.val(h.term),this.$search.focus()),c.term=h.term),b.call(this,c,d)},b.prototype.tokenizer=function(b,c,d,e){for(var f=d.get("tokenSeparators")||[],g=c.term,h=0,i=this.createTag||function(a){return{id:a.term,text:a.term}};h<g.length;){var j=g[h];if(-1!==a.inArray(j,f)){var k=g.substr(0,h),l=a.extend({},c,{term:k}),m=i(l);null!=m?(e(m),g=g.substr(h+1)||"",h=0):h++}else h++}return{term:g}},b}),b.define("select2/data/minimumInputLength",[],function(){function a(a,b,c){this.minimumInputLength=c.get("minimumInputLength"),a.call(this,b,c)}return a.prototype.query=function(a,b,c){if(b.term=b.term||"",b.term.length<this.minimumInputLength)return void this.trigger("results:message",{message:"inputTooShort",args:{minimum:this.minimumInputLength,input:b.term,params:b}});a.call(this,b,c)},a}),b.define("select2/data/maximumInputLength",[],function(){function a(a,b,c){this.maximumInputLength=c.get("maximumInputLength"),a.call(this,b,c)}return a.prototype.query=function(a,b,c){if(b.term=b.term||"",this.maximumInputLength>0&&b.term.length>this.maximumInputLength)return void this.trigger("results:message",{message:"inputTooLong",args:{maximum:this.maximumInputLength,input:b.term,params:b}});a.call(this,b,c)},a}),b.define("select2/data/maximumSelectionLength",[],function(){function a(a,b,c){this.maximumSelectionLength=c.get("maximumSelectionLength"),a.call(this,b,c)}return a.prototype.query=function(a,b,c){var d=this;this.current(function(e){var f=null!=e?e.length:0;if(d.maximumSelectionLength>0&&f>=d.maximumSelectionLength)return void d.trigger("results:message",{message:"maximumSelected",args:{maximum:d.maximumSelectionLength}});a.call(d,b,c)})},a}),b.define("select2/dropdown",["jquery","./utils"],function(a,b){function c(a,b){this.$element=a,this.options=b,c.__super__.constructor.call(this)}return b.Extend(c,b.Observable),c.prototype.render=function(){var b=a('<span class="select2-dropdown"><span class="select2-results"></span></span>');return b.attr("dir",this.options.get("dir")),this.$dropdown=b,b},c.prototype.bind=function(){},c.prototype.position=function(a,b){},c.prototype.destroy=function(){this.$dropdown.remove()},c}),b.define("select2/dropdown/search",["jquery","../utils"],function(a,b){function c(){}return c.prototype.render=function(b){var c=b.call(this),d=a('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="textbox" /></span>');return this.$searchContainer=d,this.$search=d.find("input"),c.prepend(d),c},c.prototype.bind=function(b,c,d){var e=this;b.call(this,c,d),this.$search.on("keydown",function(a){e.trigger("keypress",a),e._keyUpPrevented=a.isDefaultPrevented()}),this.$search.on("input",function(b){a(this).off("keyup")}),this.$search.on("keyup input",function(a){e.handleSearch(a)}),c.on("open",function(){e.$search.attr("tabindex",0),e.$search.focus(),window.setTimeout(function(){e.$search.focus()},0)}),c.on("close",function(){e.$search.attr("tabindex",-1),e.$search.val(""),e.$search.blur()}),c.on("focus",function(){c.isOpen()||e.$search.focus()}),c.on("results:all",function(a){if(null==a.query.term||""===a.query.term){e.showSearch(a)?e.$searchContainer.removeClass("select2-search--hide"):e.$searchContainer.addClass("select2-search--hide")}})},c.prototype.handleSearch=function(a){if(!this._keyUpPrevented){var b=this.$search.val();this.trigger("query",{term:b})}this._keyUpPrevented=!1},c.prototype.showSearch=function(a,b){return!0},c}),b.define("select2/dropdown/hidePlaceholder",[],function(){function a(a,b,c,d){this.placeholder=this.normalizePlaceholder(c.get("placeholder")),a.call(this,b,c,d)}return a.prototype.append=function(a,b){b.results=this.removePlaceholder(b.results),a.call(this,b)},a.prototype.normalizePlaceholder=function(a,b){return"string"==typeof b&&(b={id:"",text:b}),b},a.prototype.removePlaceholder=function(a,b){for(var c=b.slice(0),d=b.length-1;d>=0;d--){var e=b[d];this.placeholder.id===e.id&&c.splice(d,1)}return c},a}),b.define("select2/dropdown/infiniteScroll",["jquery"],function(a){function b(a,b,c,d){this.lastParams={},a.call(this,b,c,d),this.$loadingMore=this.createLoadingMore(),this.loading=!1}return b.prototype.append=function(a,b){this.$loadingMore.remove(),this.loading=!1,a.call(this,b),this.showLoadingMore(b)&&this.$results.append(this.$loadingMore)},b.prototype.bind=function(b,c,d){var e=this;b.call(this,c,d),c.on("query",function(a){e.lastParams=a,e.loading=!0}),c.on("query:append",function(a){e.lastParams=a,e.loading=!0}),this.$results.on("scroll",function(){var b=a.contains(document.documentElement,e.$loadingMore[0]);if(!e.loading&&b){e.$results.offset().top+e.$results.outerHeight(!1)+50>=e.$loadingMore.offset().top+e.$loadingMore.outerHeight(!1)&&e.loadMore()}})},b.prototype.loadMore=function(){this.loading=!0;var b=a.extend({},{page:1},this.lastParams);b.page++,this.trigger("query:append",b)},b.prototype.showLoadingMore=function(a,b){return b.pagination&&b.pagination.more},b.prototype.createLoadingMore=function(){var b=a('<li class="select2-results__option select2-results__option--load-more"role="treeitem" aria-disabled="true"></li>'),c=this.options.get("translations").get("loadingMore");return b.html(c(this.lastParams)),b},b}),b.define("select2/dropdown/attachBody",["jquery","../utils"],function(a,b){function c(b,c,d){this.$dropdownParent=d.get("dropdownParent")||a(document.body),b.call(this,c,d)}return c.prototype.bind=function(a,b,c){var d=this,e=!1;a.call(this,b,c),b.on("open",function(){d._showDropdown(),d._attachPositioningHandler(b),e||(e=!0,b.on("results:all",function(){d._positionDropdown(),d._resizeDropdown()}),b.on("results:append",function(){d._positionDropdown(),d._resizeDropdown()}))}),b.on("close",function(){d._hideDropdown(),d._detachPositioningHandler(b)}),this.$dropdownContainer.on("mousedown",function(a){a.stopPropagation()})},c.prototype.destroy=function(a){a.call(this),this.$dropdownContainer.remove()},c.prototype.position=function(a,b,c){b.attr("class",c.attr("class")),b.removeClass("select2"),b.addClass("select2-container--open"),b.css({position:"absolute",top:-999999}),this.$container=c},c.prototype.render=function(b){var c=a("<span></span>"),d=b.call(this);return c.append(d),this.$dropdownContainer=c,c},c.prototype._hideDropdown=function(a){this.$dropdownContainer.detach()},c.prototype._attachPositioningHandler=function(c,d){var e=this,f="scroll.select2."+d.id,g="resize.select2."+d.id,h="orientationchange.select2."+d.id,i=this.$container.parents().filter(b.hasScroll);i.each(function(){b.StoreData(this,"select2-scroll-position",{x:a(this).scrollLeft(),y:a(this).scrollTop()})}),i.on(f,function(c){var d=b.GetData(this,"select2-scroll-position");a(this).scrollTop(d.y)}),a(window).on(f+" "+g+" "+h,function(a){e._positionDropdown(),e._resizeDropdown()})},c.prototype._detachPositioningHandler=function(c,d){var e="scroll.select2."+d.id,f="resize.select2."+d.id,g="orientationchange.select2."+d.id;this.$container.parents().filter(b.hasScroll).off(e),a(window).off(e+" "+f+" "+g)},c.prototype._positionDropdown=function(){var b=a(window),c=this.$dropdown.hasClass("select2-dropdown--above"),d=this.$dropdown.hasClass("select2-dropdown--below"),e=null,f=this.$container.offset();f.bottom=f.top+this.$container.outerHeight(!1);var g={height:this.$container.outerHeight(!1)};g.top=f.top,g.bottom=f.top+g.height;var h={height:this.$dropdown.outerHeight(!1)},i={top:b.scrollTop(),bottom:b.scrollTop()+b.height()},j=i.top<f.top-h.height,k=i.bottom>f.bottom+h.height,l={left:f.left,top:g.bottom},m=this.$dropdownParent;"static"===m.css("position")&&(m=m.offsetParent());var n=m.offset();l.top-=n.top,l.left-=n.left,c||d||(e="below"),k||!j||c?!j&&k&&c&&(e="below"):e="above",("above"==e||c&&"below"!==e)&&(l.top=g.top-n.top-h.height),null!=e&&(this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--"+e),this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--"+e)),this.$dropdownContainer.css(l)},c.prototype._resizeDropdown=function(){var a={width:this.$container.outerWidth(!1)+"px"};this.options.get("dropdownAutoWidth")&&(a.minWidth=a.width,a.position="relative",a.width="auto"),this.$dropdown.css(a)},c.prototype._showDropdown=function(a){this.$dropdownContainer.appendTo(this.$dropdownParent),this._positionDropdown(),this._resizeDropdown()},c}),b.define("select2/dropdown/minimumResultsForSearch",[],function(){function a(b){for(var c=0,d=0;d<b.length;d++){var e=b[d];e.children?c+=a(e.children):c++}return c}function b(a,b,c,d){this.minimumResultsForSearch=c.get("minimumResultsForSearch"),this.minimumResultsForSearch<0&&(this.minimumResultsForSearch=1/0),a.call(this,b,c,d)}return b.prototype.showSearch=function(b,c){return!(a(c.data.results)<this.minimumResultsForSearch)&&b.call(this,c)},b}),b.define("select2/dropdown/selectOnClose",["../utils"],function(a){function b(){}return b.prototype.bind=function(a,b,c){var d=this;a.call(this,b,c),b.on("close",function(a){d._handleSelectOnClose(a)})},b.prototype._handleSelectOnClose=function(b,c){if(c&&null!=c.originalSelect2Event){var d=c.originalSelect2Event;if("select"===d._type||"unselect"===d._type)return}var e=this.getHighlightedResults();if(!(e.length<1)){var f=a.GetData(e[0],"data");null!=f.element&&f.element.selected||null==f.element&&f.selected||this.trigger("select",{data:f})}},b}),b.define("select2/dropdown/closeOnSelect",[],function(){function a(){}return a.prototype.bind=function(a,b,c){var d=this;a.call(this,b,c),b.on("select",function(a){d._selectTriggered(a)}),b.on("unselect",function(a){d._selectTriggered(a)})},a.prototype._selectTriggered=function(a,b){var c=b.originalEvent;c&&(c.ctrlKey||c.metaKey)||this.trigger("close",{originalEvent:c,originalSelect2Event:b})},a}),b.define("select2/i18n/en",[],function(){return{errorLoading:function(){return"The results could not be loaded."},inputTooLong:function(a){var b=a.input.length-a.maximum,c="Please delete "+b+" character";return 1!=b&&(c+="s"),c},inputTooShort:function(a){return"Please enter "+(a.minimum-a.input.length)+" or more characters"},loadingMore:function(){return"Loading more results…"},maximumSelected:function(a){var b="You can only select "+a.maximum+" item";return 1!=a.maximum&&(b+="s"),b},noResults:function(){return"No results found"},searching:function(){return"Searching…"},removeAllItems:function(){return"Remove all items"}}}),b.define("select2/defaults",["jquery","require","./results","./selection/single","./selection/multiple","./selection/placeholder","./selection/allowClear","./selection/search","./selection/eventRelay","./utils","./translation","./diacritics","./data/select","./data/array","./data/ajax","./data/tags","./data/tokenizer","./data/minimumInputLength","./data/maximumInputLength","./data/maximumSelectionLength","./dropdown","./dropdown/search","./dropdown/hidePlaceholder","./dropdown/infiniteScroll","./dropdown/attachBody","./dropdown/minimumResultsForSearch","./dropdown/selectOnClose","./dropdown/closeOnSelect","./i18n/en"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C){function D(){this.reset()}return D.prototype.apply=function(l){if(l=a.extend(!0,{},this.defaults,l),null==l.dataAdapter){if(null!=l.ajax?l.dataAdapter=o:null!=l.data?l.dataAdapter=n:l.dataAdapter=m,l.minimumInputLength>0&&(l.dataAdapter=j.Decorate(l.dataAdapter,r)),l.maximumInputLength>0&&(l.dataAdapter=j.Decorate(l.dataAdapter,s)),l.maximumSelectionLength>0&&(l.dataAdapter=j.Decorate(l.dataAdapter,t)),l.tags&&(l.dataAdapter=j.Decorate(l.dataAdapter,p)),null==l.tokenSeparators&&null==l.tokenizer||(l.dataAdapter=j.Decorate(l.dataAdapter,q)),null!=l.query){var C=b(l.amdBase+"compat/query");l.dataAdapter=j.Decorate(l.dataAdapter,C)}if(null!=l.initSelection){var D=b(l.amdBase+"compat/initSelection");l.dataAdapter=j.Decorate(l.dataAdapter,D)}}if(null==l.resultsAdapter&&(l.resultsAdapter=c,null!=l.ajax&&(l.resultsAdapter=j.Decorate(l.resultsAdapter,x)),null!=l.placeholder&&(l.resultsAdapter=j.Decorate(l.resultsAdapter,w)),l.selectOnClose&&(l.resultsAdapter=j.Decorate(l.resultsAdapter,A))),null==l.dropdownAdapter){if(l.multiple)l.dropdownAdapter=u;else{var E=j.Decorate(u,v);l.dropdownAdapter=E}if(0!==l.minimumResultsForSearch&&(l.dropdownAdapter=j.Decorate(l.dropdownAdapter,z)),l.closeOnSelect&&(l.dropdownAdapter=j.Decorate(l.dropdownAdapter,B)),null!=l.dropdownCssClass||null!=l.dropdownCss||null!=l.adaptDropdownCssClass){var F=b(l.amdBase+"compat/dropdownCss");l.dropdownAdapter=j.Decorate(l.dropdownAdapter,F)}l.dropdownAdapter=j.Decorate(l.dropdownAdapter,y)}if(null==l.selectionAdapter){if(l.multiple?l.selectionAdapter=e:l.selectionAdapter=d,null!=l.placeholder&&(l.selectionAdapter=j.Decorate(l.selectionAdapter,f)),l.allowClear&&(l.selectionAdapter=j.Decorate(l.selectionAdapter,g)),l.multiple&&(l.selectionAdapter=j.Decorate(l.selectionAdapter,h)),null!=l.containerCssClass||null!=l.containerCss||null!=l.adaptContainerCssClass){var G=b(l.amdBase+"compat/containerCss");l.selectionAdapter=j.Decorate(l.selectionAdapter,G)}l.selectionAdapter=j.Decorate(l.selectionAdapter,i)}if("string"==typeof l.language)if(l.language.indexOf("-")>0){var H=l.language.split("-"),I=H[0];l.language=[l.language,I]}else l.language=[l.language];if(a.isArray(l.language)){var J=new k;l.language.push("en");for(var K=l.language,L=0;L<K.length;L++){var M=K[L],N={};try{N=k.loadPath(M)}catch(a){try{M=this.defaults.amdLanguageBase+M,N=k.loadPath(M)}catch(a){l.debug&&window.console&&console.warn&&console.warn('Select2: The language file for "'+M+'" could not be automatically loaded. A fallback will be used instead.');continue}}J.extend(N)}l.translations=J}else{var O=k.loadPath(this.defaults.amdLanguageBase+"en"),P=new k(l.language);P.extend(O),l.translations=P}return l},D.prototype.reset=function(){function b(a){function b(a){return l[a]||a}return a.replace(/[^\u0000-\u007E]/g,b)}function c(d,e){if(""===a.trim(d.term))return e;if(e.children&&e.children.length>0){for(var f=a.extend(!0,{},e),g=e.children.length-1;g>=0;g--){null==c(d,e.children[g])&&f.children.splice(g,1)}return f.children.length>0?f:c(d,f)}var h=b(e.text).toUpperCase(),i=b(d.term).toUpperCase();return h.indexOf(i)>-1?e:null}this.defaults={amdBase:"./",amdLanguageBase:"./i18n/",closeOnSelect:!0,debug:!1,dropdownAutoWidth:!1,escapeMarkup:j.escapeMarkup,language:C,matcher:c,minimumInputLength:0,maximumInputLength:0,maximumSelectionLength:0,minimumResultsForSearch:0,selectOnClose:!1,scrollAfterSelect:!1,sorter:function(a){return a},templateResult:function(a){return a.text},templateSelection:function(a){return a.text},theme:"default",width:"resolve"}},D.prototype.set=function(b,c){var d=a.camelCase(b),e={};e[d]=c;var f=j._convertData(e);a.extend(!0,this.defaults,f)},new D}),b.define("select2/options",["require","jquery","./defaults","./utils"],function(a,b,c,d){function e(b,e){if(this.options=b,null!=e&&this.fromElement(e),this.options=c.apply(this.options),e&&e.is("input")){var f=a(this.get("amdBase")+"compat/inputData");this.options.dataAdapter=d.Decorate(this.options.dataAdapter,f)}}return e.prototype.fromElement=function(a){function c(a,b){return b.toUpperCase()}var e=["select2"];null==this.options.multiple&&(this.options.multiple=a.prop("multiple")),null==this.options.disabled&&(this.options.disabled=a.prop("disabled")),null==this.options.language&&(a.prop("lang")?this.options.language=a.prop("lang").toLowerCase():a.closest("[lang]").prop("lang")&&(this.options.language=a.closest("[lang]").prop("lang"))),null==this.options.dir&&(a.prop("dir")?this.options.dir=a.prop("dir"):a.closest("[dir]").prop("dir")?this.options.dir=a.closest("[dir]").prop("dir"):this.options.dir="ltr"),a.prop("disabled",this.options.disabled),a.prop("multiple",this.options.multiple),d.GetData(a[0],"select2Tags")&&(this.options.debug&&window.console&&console.warn&&console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'),d.StoreData(a[0],"data",d.GetData(a[0],"select2Tags")),d.StoreData(a[0],"tags",!0)),d.GetData(a[0],"ajaxUrl")&&(this.options.debug&&window.console&&console.warn&&console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."),a.attr("ajax--url",d.GetData(a[0],"ajaxUrl")),d.StoreData(a[0],"ajax-Url",d.GetData(a[0],"ajaxUrl")));for(var f={},g=0;g<a[0].attributes.length;g++){var h=a[0].attributes[g].name,i="data-";if(h.substr(0,i.length)==i){var j=h.substring(i.length),k=d.GetData(a[0],j);f[j.replace(/-([a-z])/g,c)]=k}}b.fn.jquery&&"1."==b.fn.jquery.substr(0,2)&&a[0].dataset&&(f=b.extend(!0,{},a[0].dataset,f));var l=b.extend(!0,{},d.GetData(a[0]),f);l=d._convertData(l);for(var m in l)b.inArray(m,e)>-1||(b.isPlainObject(this.options[m])?b.extend(this.options[m],l[m]):this.options[m]=l[m]);return this},e.prototype.get=function(a){return this.options[a]},e.prototype.set=function(a,b){this.options[a]=b},e}),b.define("select2/core",["jquery","./options","./utils","./keys"],function(a,b,c,d){var e=function(a,d){null!=c.GetData(a[0],"select2")&&c.GetData(a[0],"select2").destroy(),this.$element=a,this.id=this._generateId(a),d=d||{},this.options=new b(d,a),e.__super__.constructor.call(this);var f=a.attr("tabindex")||0;c.StoreData(a[0],"old-tabindex",f),a.attr("tabindex","-1");var g=this.options.get("dataAdapter");this.dataAdapter=new g(a,this.options);var h=this.render();this._placeContainer(h);var i=this.options.get("selectionAdapter");this.selection=new i(a,this.options),this.$selection=this.selection.render(),this.selection.position(this.$selection,h);var j=this.options.get("dropdownAdapter");this.dropdown=new j(a,this.options),this.$dropdown=this.dropdown.render(),this.dropdown.position(this.$dropdown,h);var k=this.options.get("resultsAdapter");this.results=new k(a,this.options,this.dataAdapter),this.$results=this.results.render(),this.results.position(this.$results,this.$dropdown);var l=this;this._bindAdapters(),this._registerDomEvents(),this._registerDataEvents(),this._registerSelectionEvents(),this._registerDropdownEvents(),this._registerResultsEvents(),this._registerEvents(),this.dataAdapter.current(function(a){l.trigger("selection:update",{data:a})}),a.addClass("select2-hidden-accessible"),a.attr("aria-hidden","true"),this._syncAttributes(),c.StoreData(a[0],"select2",this),a.data("select2",this)};return c.Extend(e,c.Observable),e.prototype._generateId=function(a){var b="";return b=null!=a.attr("id")?a.attr("id"):null!=a.attr("name")?a.attr("name")+"-"+c.generateChars(2):c.generateChars(4),b=b.replace(/(:|\.|\[|\]|,)/g,""),b="select2-"+b},e.prototype._placeContainer=function(a){a.insertAfter(this.$element);var b=this._resolveWidth(this.$element,this.options.get("width"));null!=b&&a.css("width",b)},e.prototype._resolveWidth=function(a,b){var c=/^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;if("resolve"==b){var d=this._resolveWidth(a,"style");return null!=d?d:this._resolveWidth(a,"element")}if("element"==b){var e=a.outerWidth(!1);return e<=0?"auto":e+"px"}if("style"==b){var f=a.attr("style");if("string"!=typeof f)return null;for(var g=f.split(";"),h=0,i=g.length;h<i;h+=1){var j=g[h].replace(/\s/g,""),k=j.match(c);if(null!==k&&k.length>=1)return k[1]}return null}return b},e.prototype._bindAdapters=function(){this.dataAdapter.bind(this,this.$container),this.selection.bind(this,this.$container),this.dropdown.bind(this,this.$container),this.results.bind(this,this.$container)},e.prototype._registerDomEvents=function(){var b=this;this.$element.on("change.select2",function(){b.dataAdapter.current(function(a){b.trigger("selection:update",{data:a})})}),this.$element.on("focus.select2",function(a){b.trigger("focus",a)}),this._syncA=c.bind(this._syncAttributes,this),this._syncS=c.bind(this._syncSubtree,this),this.$element[0].attachEvent&&this.$element[0].attachEvent("onpropertychange",this._syncA);var d=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver;null!=d?(this._observer=new d(function(c){a.each(c,b._syncA),a.each(c,b._syncS)}),this._observer.observe(this.$element[0],{attributes:!0,childList:!0,subtree:!1})):this.$element[0].addEventListener&&(this.$element[0].addEventListener("DOMAttrModified",b._syncA,!1),this.$element[0].addEventListener("DOMNodeInserted",b._syncS,!1),this.$element[0].addEventListener("DOMNodeRemoved",b._syncS,!1))},e.prototype._registerDataEvents=function(){var a=this;this.dataAdapter.on("*",function(b,c){a.trigger(b,c)})},e.prototype._registerSelectionEvents=function(){var b=this,c=["toggle","focus"];this.selection.on("toggle",function(){b.toggleDropdown()}),this.selection.on("focus",function(a){b.focus(a)}),this.selection.on("*",function(d,e){-1===a.inArray(d,c)&&b.trigger(d,e)})},e.prototype._registerDropdownEvents=function(){var a=this;this.dropdown.on("*",function(b,c){a.trigger(b,c)})},e.prototype._registerResultsEvents=function(){var a=this;this.results.on("*",function(b,c){a.trigger(b,c)})},e.prototype._registerEvents=function(){var a=this;this.on("open",function(){a.$container.addClass("select2-container--open")}),this.on("close",function(){a.$container.removeClass("select2-container--open")}),this.on("enable",function(){a.$container.removeClass("select2-container--disabled")}),this.on("disable",function(){a.$container.addClass("select2-container--disabled")}),this.on("blur",function(){a.$container.removeClass("select2-container--focus")}),this.on("query",function(b){a.isOpen()||a.trigger("open",{}),this.dataAdapter.query(b,function(c){a.trigger("results:all",{data:c,query:b})})}),this.on("query:append",function(b){this.dataAdapter.query(b,function(c){a.trigger("results:append",{data:c,query:b})})}),this.on("keypress",function(b){var c=b.which;a.isOpen()?c===d.ESC||c===d.TAB||c===d.UP&&b.altKey?(a.close(),b.preventDefault()):c===d.ENTER?(a.trigger("results:select",{}),b.preventDefault()):c===d.SPACE&&b.ctrlKey?(a.trigger("results:toggle",{}),b.preventDefault()):c===d.UP?(a.trigger("results:previous",{}),b.preventDefault()):c===d.DOWN&&(a.trigger("results:next",{}),b.preventDefault()):(c===d.ENTER||c===d.SPACE||c===d.DOWN&&b.altKey)&&(a.open(),b.preventDefault())})},e.prototype._syncAttributes=function(){this.options.set("disabled",this.$element.prop("disabled")),this.options.get("disabled")?(this.isOpen()&&this.close(),this.trigger("disable",{})):this.trigger("enable",{})},e.prototype._syncSubtree=function(a,b){var c=!1,d=this;if(!a||!a.target||"OPTION"===a.target.nodeName||"OPTGROUP"===a.target.nodeName){if(b)if(b.addedNodes&&b.addedNodes.length>0)for(var e=0;e<b.addedNodes.length;e++){var f=b.addedNodes[e];f.selected&&(c=!0)}else b.removedNodes&&b.removedNodes.length>0&&(c=!0);else c=!0;c&&this.dataAdapter.current(function(a){d.trigger("selection:update",{data:a})})}},e.prototype.trigger=function(a,b){var c=e.__super__.trigger,d={open:"opening",close:"closing",select:"selecting",unselect:"unselecting",clear:"clearing"};if(void 0===b&&(b={}),a in d){var f=d[a],g={prevented:!1,name:a,args:b};if(c.call(this,f,g),g.prevented)return void(b.prevented=!0)}c.call(this,a,b)},e.prototype.toggleDropdown=function(){this.options.get("disabled")||(this.isOpen()?this.close():this.open())},e.prototype.open=function(){this.isOpen()||this.trigger("query",{})},e.prototype.close=function(){this.isOpen()&&this.trigger("close",{})},e.prototype.isOpen=function(){return this.$container.hasClass("select2-container--open")},e.prototype.hasFocus=function(){return this.$container.hasClass("select2-container--focus")},e.prototype.focus=function(a){this.hasFocus()||(this.$container.addClass("select2-container--focus"),this.trigger("focus",{}))},e.prototype.enable=function(a){this.options.get("debug")&&window.console&&console.warn&&console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'),null!=a&&0!==a.length||(a=[!0]);var b=!a[0];this.$element.prop("disabled",b)},e.prototype.data=function(){this.options.get("debug")&&arguments.length>0&&window.console&&console.warn&&console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');var a=[];return this.dataAdapter.current(function(b){a=b}),a},e.prototype.val=function(b){if(this.options.get("debug")&&window.console&&console.warn&&console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'),null==b||0===b.length)return this.$element.val();var c=b[0];a.isArray(c)&&(c=a.map(c,function(a){return a.toString()})),this.$element.val(c).trigger("change")},e.prototype.destroy=function(){this.$container.remove(),this.$element[0].detachEvent&&this.$element[0].detachEvent("onpropertychange",this._syncA),null!=this._observer?(this._observer.disconnect(),this._observer=null):this.$element[0].removeEventListener&&(this.$element[0].removeEventListener("DOMAttrModified",this._syncA,!1),this.$element[0].removeEventListener("DOMNodeInserted",this._syncS,!1),this.$element[0].removeEventListener("DOMNodeRemoved",this._syncS,!1)),this._syncA=null,this._syncS=null,this.$element.off(".select2"),this.$element.attr("tabindex",c.GetData(this.$element[0],"old-tabindex")),this.$element.removeClass("select2-hidden-accessible"),this.$element.attr("aria-hidden","false"),c.RemoveData(this.$element[0]),this.$element.removeData("select2"),this.dataAdapter.destroy(),this.selection.destroy(),this.dropdown.destroy(),this.results.destroy(),this.dataAdapter=null,this.selection=null,this.dropdown=null,this.results=null},e.prototype.render=function(){var b=a('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');return b.attr("dir",this.options.get("dir")),this.$container=b,this.$container.addClass("select2-container--"+this.options.get("theme")),c.StoreData(b[0],"element",this.$element),b},e}),b.define("select2/compat/utils",["jquery"],function(a){function b(b,c,d){var e,f,g=[];e=a.trim(b.attr("class")),e&&(e=""+e,a(e.split(/\s+/)).each(function(){0===this.indexOf("select2-")&&g.push(this)})),e=a.trim(c.attr("class")),e&&(e=""+e,a(e.split(/\s+/)).each(function(){0!==this.indexOf("select2-")&&null!=(f=d(this))&&g.push(f)})),b.attr("class",g.join(" "))}return{syncCssClasses:b}}),b.define("select2/compat/containerCss",["jquery","./utils"],function(a,b){function c(a){return null}function d(){}return d.prototype.render=function(d){var e=d.call(this),f=this.options.get("containerCssClass")||"";a.isFunction(f)&&(f=f(this.$element));var g=this.options.get("adaptContainerCssClass");if(g=g||c,-1!==f.indexOf(":all:")){f=f.replace(":all:","");var h=g;g=function(a){var b=h(a);return null!=b?b+" "+a:a}}var i=this.options.get("containerCss")||{};return a.isFunction(i)&&(i=i(this.$element)),b.syncCssClasses(e,this.$element,g),e.css(i),e.addClass(f),e},d}),b.define("select2/compat/dropdownCss",["jquery","./utils"],function(a,b){function c(a){return null}function d(){}return d.prototype.render=function(d){var e=d.call(this),f=this.options.get("dropdownCssClass")||"";a.isFunction(f)&&(f=f(this.$element));var g=this.options.get("adaptDropdownCssClass");if(g=g||c,-1!==f.indexOf(":all:")){f=f.replace(":all:","");var h=g;g=function(a){var b=h(a);return null!=b?b+" "+a:a}}var i=this.options.get("dropdownCss")||{};return a.isFunction(i)&&(i=i(this.$element)),b.syncCssClasses(e,this.$element,g),e.css(i),e.addClass(f),e},d}),b.define("select2/compat/initSelection",["jquery"],function(a){function b(a,b,c){c.get("debug")&&window.console&&console.warn&&console.warn("Select2: The `initSelection` option has been deprecated in favor of a custom data adapter that overrides the `current` method. This method is now called multiple times instead of a single time when the instance is initialized. Support will be removed for the `initSelection` option in future versions of Select2"),this.initSelection=c.get("initSelection"),this._isInitialized=!1,a.call(this,b,c)}return b.prototype.current=function(b,c){var d=this;if(this._isInitialized)return void b.call(this,c);this.initSelection.call(null,this.$element,function(b){d._isInitialized=!0,a.isArray(b)||(b=[b]),c(b)})},b}),b.define("select2/compat/inputData",["jquery","../utils"],function(a,b){function c(a,b,c){this._currentData=[],this._valueSeparator=c.get("valueSeparator")||",","hidden"===b.prop("type")&&c.get("debug")&&console&&console.warn&&console.warn("Select2: Using a hidden input with Select2 is no longer supported and may stop working in the future. It is recommended to use a `<select>` element instead."),a.call(this,b,c)}return c.prototype.current=function(b,c){function d(b,c){var e=[];return b.selected||-1!==a.inArray(b.id,c)?(b.selected=!0,e.push(b)):b.selected=!1,b.children&&e.push.apply(e,d(b.children,c)),e}for(var e=[],f=0;f<this._currentData.length;f++){var g=this._currentData[f];e.push.apply(e,d(g,this.$element.val().split(this._valueSeparator)))}c(e)},c.prototype.select=function(b,c){if(this.options.get("multiple")){var d=this.$element.val();d+=this._valueSeparator+c.id,this.$element.val(d),this.$element.trigger("change")}else this.current(function(b){a.map(b,function(a){a.selected=!1})}),this.$element.val(c.id),this.$element.trigger("change")},c.prototype.unselect=function(a,b){var c=this;b.selected=!1,this.current(function(a){for(var d=[],e=0;e<a.length;e++){var f=a[e];b.id!=f.id&&d.push(f.id)}c.$element.val(d.join(c._valueSeparator)),c.$element.trigger("change")})},c.prototype.query=function(a,b,c){for(var d=[],e=0;e<this._currentData.length;e++){var f=this._currentData[e],g=this.matches(b,f);null!==g&&d.push(g)}c({results:d})},c.prototype.addOptions=function(c,d){var e=a.map(d,function(a){return b.GetData(a[0],"data")});this._currentData.push.apply(this._currentData,e)},c}),b.define("select2/compat/matcher",["jquery"],function(a){function b(b){function c(c,d){var e=a.extend(!0,{},d);if(null==c.term||""===a.trim(c.term))return e;if(d.children){for(var f=d.children.length-1;f>=0;f--){var g=d.children[f];b(c.term,g.text,g)||e.children.splice(f,1)}if(e.children.length>0)return e}return b(c.term,d.text,d)?e:null}return c}return b}),b.define("select2/compat/query",[],function(){function a(a,b,c){c.get("debug")&&window.console&&console.warn&&console.warn("Select2: The `query` option has been deprecated in favor of a custom data adapter that overrides the `query` method. Support will be removed for the `query` option in future versions of Select2."),a.call(this,b,c)}return a.prototype.query=function(a,b,c){b.callback=c,this.options.get("query").call(null,b)},a}),b.define("select2/dropdown/attachContainer",[],function(){function a(a,b,c){a.call(this,b,c)}return a.prototype.position=function(a,b,c){c.find(".dropdown-wrapper").append(b),b.addClass("select2-dropdown--below"),c.addClass("select2-container--below")},a}),b.define("select2/dropdown/stopPropagation",[],function(){function a(){}return a.prototype.bind=function(a,b,c){a.call(this,b,c);var d=["blur","change","click","dblclick","focus","focusin","focusout","input","keydown","keyup","keypress","mousedown","mouseenter","mouseleave","mousemove","mouseover","mouseup","search","touchend","touchstart"];this.$dropdown.on(d.join(" "),function(a){a.stopPropagation()})},a}),b.define("select2/selection/stopPropagation",[],function(){function a(){}return a.prototype.bind=function(a,b,c){a.call(this,b,c);var d=["blur","change","click","dblclick","focus","focusin","focusout","input","keydown","keyup","keypress","mousedown","mouseenter","mouseleave","mousemove","mouseover","mouseup","search","touchend","touchstart"];this.$selection.on(d.join(" "),function(a){a.stopPropagation()})},a}),function(c){"function"==typeof b.define&&b.define.amd?b.define("jquery-mousewheel",["jquery"],c):"object"==typeof exports?module.exports=c:c(a)}(function(a){function b(b){var g=b||window.event,h=i.call(arguments,1),j=0,l=0,m=0,n=0,o=0,p=0;if(b=a.event.fix(g),b.type="mousewheel","detail"in g&&(m=-1*g.detail),"wheelDelta"in g&&(m=g.wheelDelta),"wheelDeltaY"in g&&(m=g.wheelDeltaY),"wheelDeltaX"in g&&(l=-1*g.wheelDeltaX),"axis"in g&&g.axis===g.HORIZONTAL_AXIS&&(l=-1*m,m=0),j=0===m?l:m,"deltaY"in g&&(m=-1*g.deltaY,j=m),"deltaX"in g&&(l=g.deltaX,0===m&&(j=-1*l)),0!==m||0!==l){if(1===g.deltaMode){var q=a.data(this,"mousewheel-line-height");j*=q,m*=q,l*=q}else if(2===g.deltaMode){var r=a.data(this,"mousewheel-page-height");j*=r,m*=r,l*=r}if(n=Math.max(Math.abs(m),Math.abs(l)),(!f||n<f)&&(f=n,d(g,n)&&(f/=40)),d(g,n)&&(j/=40,l/=40,m/=40),j=Math[j>=1?"floor":"ceil"](j/f),l=Math[l>=1?"floor":"ceil"](l/f),m=Math[m>=1?"floor":"ceil"](m/f),k.settings.normalizeOffset&&this.getBoundingClientRect){var s=this.getBoundingClientRect();o=b.clientX-s.left,p=b.clientY-s.top}return b.deltaX=l,b.deltaY=m,b.deltaFactor=f,b.offsetX=o,b.offsetY=p,b.deltaMode=0,h.unshift(b,j,l,m),e&&clearTimeout(e),e=setTimeout(c,200),(a.event.dispatch||a.event.handle).apply(this,h)}}function c(){f=null}function d(a,b){return k.settings.adjustOldDeltas&&"mousewheel"===a.type&&b%120==0}var e,f,g=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],h="onwheel"in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],i=Array.prototype.slice;if(a.event.fixHooks)for(var j=g.length;j;)a.event.fixHooks[g[--j]]=a.event.mouseHooks;var k=a.event.special.mousewheel={version:"3.1.12",setup:function(){if(this.addEventListener)for(var c=h.length;c;)this.addEventListener(h[--c],b,!1);else this.onmousewheel=b;a.data(this,"mousewheel-line-height",k.getLineHeight(this)),a.data(this,"mousewheel-page-height",k.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var c=h.length;c;)this.removeEventListener(h[--c],b,!1);else this.onmousewheel=null;a.removeData(this,"mousewheel-line-height"),a.removeData(this,"mousewheel-page-height")},getLineHeight:function(b){var c=a(b),d=c["offsetParent"in a.fn?"offsetParent":"parent"]();return d.length||(d=a("body")),parseInt(d.css("fontSize"),10)||parseInt(c.css("fontSize"),10)||16},getPageHeight:function(b){return a(b).height()},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};a.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})}),b.define("jquery.select2",["jquery","jquery-mousewheel","./select2/core","./select2/defaults","./select2/utils"],function(a,b,c,d,e){if(null==a.fn.select2){var f=["open","close","destroy"];a.fn.select2=function(b){if("object"==typeof(b=b||{}))return this.each(function(){var d=a.extend(!0,{},b);new c(a(this),d)}),this;if("string"==typeof b){var d,g=Array.prototype.slice.call(arguments,1);return this.each(function(){var a=e.GetData(this,"select2");null==a&&window.console&&console.error&&console.error("The select2('"+b+"') method was called on an element that is not using Select2."),d=a[b].apply(a,g)}),a.inArray(b,f)>-1?this:d}throw new Error("Invalid arguments for Select2: "+b)}}return null==a.fn.select2.defaults&&(a.fn.select2.defaults=d),c}),{define:b.define,require:b.require}}(),c=b.require("jquery.select2");return a.fn.select2.amd=b,c});
/**
 * Super simple wysiwyg editor v0.8.11
 * https://summernote.org
 *
 * Copyright 2013- Alan Hong. and other contributors
 * summernote may be freely distributed under the MIT license.
 *
 * Date: 2018-11-24T12:13Z
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('jquery')) :
  typeof define === 'function' && define.amd ? define(['jquery'], factory) :
  (factory(global.jQuery));
}(this, (function ($$1) { 'use strict';

  $$1 = $$1 && $$1.hasOwnProperty('default') ? $$1['default'] : $$1;

  var Renderer = /** @class */ (function () {
      function Renderer(markup, children, options, callback) {
          this.markup = markup;
          this.children = children;
          this.options = options;
          this.callback = callback;
      }
      Renderer.prototype.render = function ($parent) {
          var $node = $$1(this.markup);
          if (this.options && this.options.contents) {
              $node.html(this.options.contents);
          }
          if (this.options && this.options.className) {
              $node.addClass(this.options.className);
          }
          if (this.options && this.options.data) {
              $$1.each(this.options.data, function (k, v) {
                  $node.attr('data-' + k, v);
              });
          }
          if (this.options && this.options.click) {
              $node.on('click', this.options.click);
          }
          if (this.children) {
              var $container_1 = $node.find('.note-children-container');
              this.children.forEach(function (child) {
                  child.render($container_1.length ? $container_1 : $node);
              });
          }
          if (this.callback) {
              this.callback($node, this.options);
          }
          if (this.options && this.options.callback) {
              this.options.callback($node);
          }
          if ($parent) {
              $parent.append($node);
          }
          return $node;
      };
      return Renderer;
  }());
  var renderer = {
      create: function (markup, callback) {
          return function () {
              var options = typeof arguments[1] === 'object' ? arguments[1] : arguments[0];
              var children = $$1.isArray(arguments[0]) ? arguments[0] : [];
              if (options && options.children) {
                  children = options.children;
              }
              return new Renderer(markup, children, options, callback);
          };
      }
  };

  var editor = renderer.create('<div class="note-editor note-frame panel panel-default"/>');
  var toolbar = renderer.create('<div class="note-toolbar panel-heading" role="toolbar"></div></div>');
  var editingArea = renderer.create('<div class="note-editing-area"/>');
  var codable = renderer.create('<textarea class="note-codable" role="textbox" aria-multiline="true"/>');
  var editable = renderer.create('<div class="note-editable" contentEditable="true" role="textbox" aria-multiline="true"/>');
  var statusbar = renderer.create([
      '<output class="note-status-output" aria-live="polite"/>',
      '<div class="note-statusbar" role="status">',
      '  <div class="note-resizebar" role="seperator" aria-orientation="horizontal" aria-label="Resize">',
      '    <div class="note-icon-bar"/>',
      '    <div class="note-icon-bar"/>',
      '    <div class="note-icon-bar"/>',
      '  </div>',
      '</div>'
  ].join(''));
  var airEditor = renderer.create('<div class="note-editor"/>');
  var airEditable = renderer.create([
      '<div class="note-editable" contentEditable="true" role="textbox" aria-multiline="true"/>',
      '<output class="note-status-output" aria-live="polite"/>'
  ].join(''));
  var buttonGroup = renderer.create('<div class="note-btn-group btn-group">');
  var dropdown = renderer.create('<ul class="dropdown-menu" role="list">', function ($node, options) {
      var markup = $$1.isArray(options.items) ? options.items.map(function (item) {
          var value = (typeof item === 'string') ? item : (item.value || '');
          var content = options.template ? options.template(item) : item;
          var option = (typeof item === 'object') ? item.option : undefined;
          var dataValue = 'data-value="' + value + '"';
          var dataOption = (option !== undefined) ? ' data-option="' + option + '"' : '';
          return '<li role="listitem" aria-label="' + item + '"><a href="#" ' + (dataValue + dataOption) + '>' + content + '</a></li>';
      }).join('') : options.items;
      $node.html(markup).attr({ 'aria-label': options.title });
  });
  var dropdownButtonContents = function (contents, options) {
      return contents + ' ' + icon(options.icons.caret, 'span');
  };
  var dropdownCheck = renderer.create('<ul class="dropdown-menu note-check" role="list">', function ($node, options) {
      var markup = $$1.isArray(options.items) ? options.items.map(function (item) {
          var value = (typeof item === 'string') ? item : (item.value || '');
          var content = options.template ? options.template(item) : item;
          return '<li role="listitem" aria-label="' + item + '"><a href="#" data-value="' + value + '">' + icon(options.checkClassName) + ' ' + content + '</a></li>';
      }).join('') : options.items;
      $node.html(markup).attr({ 'aria-label': options.title });
  });
  var palette = renderer.create('<div class="note-color-palette"/>', function ($node, options) {
      var contents = [];
      for (var row = 0, rowSize = options.colors.length; row < rowSize; row++) {
          var eventName = options.eventName;
          var colors = options.colors[row];
          var colorsName = options.colorsName[row];
          var buttons = [];
          for (var col = 0, colSize = colors.length; col < colSize; col++) {
              var color = colors[col];
              var colorName = colorsName[col];
              buttons.push([
                  '<button type="button" class="note-color-btn"',
                  'style="background-color:', color, '" ',
                  'data-event="', eventName, '" ',
                  'data-value="', color, '" ',
                  'title="', colorName, '" ',
                  'aria-label="', colorName, '" ',
                  'data-toggle="button" tabindex="-1"></button>'
              ].join(''));
          }
          contents.push('<div class="note-color-row">' + buttons.join('') + '</div>');
      }
      $node.html(contents.join(''));
      if (options.tooltip) {
          $node.find('.note-color-btn').tooltip({
              container: options.container,
              trigger: 'hover',
              placement: 'bottom'
          });
      }
  });
  var dialog = renderer.create('<div class="modal" aria-hidden="false" tabindex="-1" role="dialog"/>', function ($node, options) {
      if (options.fade) {
          $node.addClass('fade');
      }
      $node.attr({
          'aria-label': options.title
      });
      $node.html([
          '<div class="modal-dialog">',
          '  <div class="modal-content">',
          (options.title
              ? '    <div class="modal-header">' +
                  '      <button type="button" class="close" data-dismiss="modal" aria-label="Close" aria-hidden="true">&times;</button>' +
                  '      <h4 class="modal-title">' + options.title + '</h4>' +
                  '    </div>' : ''),
          '    <div class="modal-body">' + options.body + '</div>',
          (options.footer
              ? '    <div class="modal-footer">' + options.footer + '</div>' : ''),
          '  </div>',
          '</div>'
      ].join(''));
  });
  var popover = renderer.create([
      '<div class="note-popover popover in">',
      '  <div class="arrow"/>',
      '  <div class="popover-content note-children-container"/>',
      '</div>'
  ].join(''), function ($node, options) {
      var direction = typeof options.direction !== 'undefined' ? options.direction : 'bottom';
      $node.addClass(direction);
      if (options.hideArrow) {
          $node.find('.arrow').hide();
      }
  });
  var checkbox = renderer.create('<div class="checkbox"></div>', function ($node, options) {
      $node.html([
          '<label' + (options.id ? ' for="' + options.id + '"' : '') + '>',
          ' <input role="checkbox" type="checkbox"' + (options.id ? ' id="' + options.id + '"' : ''),
          (options.checked ? ' checked' : ''),
          ' aria-checked="' + (options.checked ? 'true' : 'false') + '"/>',
          (options.text ? options.text : ''),
          '</label>'
      ].join(''));
  });
  var icon = function (iconClassName, tagName) {
      tagName = tagName || 'i';
      return '<' + tagName + ' class="' + iconClassName + '"/>';
  };
  var ui = {
      editor: editor,
      toolbar: toolbar,
      editingArea: editingArea,
      codable: codable,
      editable: editable,
      statusbar: statusbar,
      airEditor: airEditor,
      airEditable: airEditable,
      buttonGroup: buttonGroup,
      dropdown: dropdown,
      dropdownButtonContents: dropdownButtonContents,
      dropdownCheck: dropdownCheck,
      palette: palette,
      dialog: dialog,
      popover: popover,
      checkbox: checkbox,
      icon: icon,
      options: {},
      button: function ($node, options) {
          return renderer.create('<button type="button" class="note-btn btn btn-default btn-sm" role="button" tabindex="-1">', function ($node, options) {
              if (options && options.tooltip) {
                  $node.attr({
                      title: options.tooltip,
                      'aria-label': options.tooltip
                  }).tooltip({
                      container: (options.container !== undefined) ? options.container : 'body',
                      trigger: 'hover',
                      placement: 'bottom'
                  });
              }
          })($node, options);
      },
      toggleBtn: function ($btn, isEnable) {
          $btn.toggleClass('disabled', !isEnable);
          $btn.attr('disabled', !isEnable);
      },
      toggleBtnActive: function ($btn, isActive) {
          $btn.toggleClass('active', isActive);
      },
      onDialogShown: function ($dialog, handler) {
          $dialog.one('shown.bs.modal', handler);
      },
      onDialogHidden: function ($dialog, handler) {
          $dialog.one('hidden.bs.modal', handler);
      },
      showDialog: function ($dialog) {
          $dialog.modal('show');
      },
      hideDialog: function ($dialog) {
          $dialog.modal('hide');
      },
      createLayout: function ($note, options) {
          var $editor = (options.airMode ? ui.airEditor([
              ui.editingArea([
                  ui.airEditable()
              ])
          ]) : ui.editor([
              ui.toolbar(),
              ui.editingArea([
                  ui.codable(),
                  ui.editable()
              ]),
              ui.statusbar()
          ])).render();
          $editor.insertAfter($note);
          return {
              note: $note,
              editor: $editor,
              toolbar: $editor.find('.note-toolbar'),
              editingArea: $editor.find('.note-editing-area'),
              editable: $editor.find('.note-editable'),
              codable: $editor.find('.note-codable'),
              statusbar: $editor.find('.note-statusbar')
          };
      },
      removeLayout: function ($note, layoutInfo) {
          $note.html(layoutInfo.editable.html());
          layoutInfo.editor.remove();
          $note.show();
      }
  };

  /**
   * @class core.func
   *
   * func utils (for high-order func's arg)
   *
   * @singleton
   * @alternateClassName func
   */
  function eq(itemA) {
      return function (itemB) {
          return itemA === itemB;
      };
  }
  function eq2(itemA, itemB) {
      return itemA === itemB;
  }
  function peq2(propName) {
      return function (itemA, itemB) {
          return itemA[propName] === itemB[propName];
      };
  }
  function ok() {
      return true;
  }
  function fail() {
      return false;
  }
  function not(f) {
      return function () {
          return !f.apply(f, arguments);
      };
  }
  function and(fA, fB) {
      return function (item) {
          return fA(item) && fB(item);
      };
  }
  function self(a) {
      return a;
  }
  function invoke(obj, method) {
      return function () {
          return obj[method].apply(obj, arguments);
      };
  }
  var idCounter = 0;
  /**
   * generate a globally-unique id
   *
   * @param {String} [prefix]
   */
  function uniqueId(prefix) {
      var id = ++idCounter + '';
      return prefix ? prefix + id : id;
  }
  /**
   * returns bnd (bounds) from rect
   *
   * - IE Compatibility Issue: http://goo.gl/sRLOAo
   * - Scroll Issue: http://goo.gl/sNjUc
   *
   * @param {Rect} rect
   * @return {Object} bounds
   * @return {Number} bounds.top
   * @return {Number} bounds.left
   * @return {Number} bounds.width
   * @return {Number} bounds.height
   */
  function rect2bnd(rect) {
      var $document = $(document);
      return {
          top: rect.top + $document.scrollTop(),
          left: rect.left + $document.scrollLeft(),
          width: rect.right - rect.left,
          height: rect.bottom - rect.top
      };
  }
  /**
   * returns a copy of the object where the keys have become the values and the values the keys.
   * @param {Object} obj
   * @return {Object}
   */
  function invertObject(obj) {
      var inverted = {};
      for (var key in obj) {
          if (obj.hasOwnProperty(key)) {
              inverted[obj[key]] = key;
          }
      }
      return inverted;
  }
  /**
   * @param {String} namespace
   * @param {String} [prefix]
   * @return {String}
   */
  function namespaceToCamel(namespace, prefix) {
      prefix = prefix || '';
      return prefix + namespace.split('.').map(function (name) {
          return name.substring(0, 1).toUpperCase() + name.substring(1);
      }).join('');
  }
  /**
   * Returns a function, that, as long as it continues to be invoked, will not
   * be triggered. The function will be called after it stops being called for
   * N milliseconds. If `immediate` is passed, trigger the function on the
   * leading edge, instead of the trailing.
   * @param {Function} func
   * @param {Number} wait
   * @param {Boolean} immediate
   * @return {Function}
   */
  function debounce(func, wait, immediate) {
      var timeout;
      return function () {
          var context = this;
          var args = arguments;
          var later = function () {
              timeout = null;
              if (!immediate) {
                  func.apply(context, args);
              }
          };
          var callNow = immediate && !timeout;
          clearTimeout(timeout);
          timeout = setTimeout(later, wait);
          if (callNow) {
              func.apply(context, args);
          }
      };
  }
  var func = {
      eq: eq,
      eq2: eq2,
      peq2: peq2,
      ok: ok,
      fail: fail,
      self: self,
      not: not,
      and: and,
      invoke: invoke,
      uniqueId: uniqueId,
      rect2bnd: rect2bnd,
      invertObject: invertObject,
      namespaceToCamel: namespaceToCamel,
      debounce: debounce
  };

  /**
   * returns the first item of an array.
   *
   * @param {Array} array
   */
  function head(array) {
      return array[0];
  }
  /**
   * returns the last item of an array.
   *
   * @param {Array} array
   */
  function last(array) {
      return array[array.length - 1];
  }
  /**
   * returns everything but the last entry of the array.
   *
   * @param {Array} array
   */
  function initial(array) {
      return array.slice(0, array.length - 1);
  }
  /**
   * returns the rest of the items in an array.
   *
   * @param {Array} array
   */
  function tail(array) {
      return array.slice(1);
  }
  /**
   * returns item of array
   */
  function find(array, pred) {
      for (var idx = 0, len = array.length; idx < len; idx++) {
          var item = array[idx];
          if (pred(item)) {
              return item;
          }
      }
  }
  /**
   * returns true if all of the values in the array pass the predicate truth test.
   */
  function all(array, pred) {
      for (var idx = 0, len = array.length; idx < len; idx++) {
          if (!pred(array[idx])) {
              return false;
          }
      }
      return true;
  }
  /**
   * returns index of item
   */
  function indexOf(array, item) {
      return $$1.inArray(item, array);
  }
  /**
   * returns true if the value is present in the list.
   */
  function contains(array, item) {
      return indexOf(array, item) !== -1;
  }
  /**
   * get sum from a list
   *
   * @param {Array} array - array
   * @param {Function} fn - iterator
   */
  function sum(array, fn) {
      fn = fn || func.self;
      return array.reduce(function (memo, v) {
          return memo + fn(v);
      }, 0);
  }
  /**
   * returns a copy of the collection with array type.
   * @param {Collection} collection - collection eg) node.childNodes, ...
   */
  function from(collection) {
      var result = [];
      var length = collection.length;
      var idx = -1;
      while (++idx < length) {
          result[idx] = collection[idx];
      }
      return result;
  }
  /**
   * returns whether list is empty or not
   */
  function isEmpty(array) {
      return !array || !array.length;
  }
  /**
   * cluster elements by predicate function.
   *
   * @param {Array} array - array
   * @param {Function} fn - predicate function for cluster rule
   * @param {Array[]}
   */
  function clusterBy(array, fn) {
      if (!array.length) {
          return [];
      }
      var aTail = tail(array);
      return aTail.reduce(function (memo, v) {
          var aLast = last(memo);
          if (fn(last(aLast), v)) {
              aLast[aLast.length] = v;
          }
          else {
              memo[memo.length] = [v];
          }
          return memo;
      }, [[head(array)]]);
  }
  /**
   * returns a copy of the array with all false values removed
   *
   * @param {Array} array - array
   * @param {Function} fn - predicate function for cluster rule
   */
  function compact(array) {
      var aResult = [];
      for (var idx = 0, len = array.length; idx < len; idx++) {
          if (array[idx]) {
              aResult.push(array[idx]);
          }
      }
      return aResult;
  }
  /**
   * produces a duplicate-free version of the array
   *
   * @param {Array} array
   */
  function unique(array) {
      var results = [];
      for (var idx = 0, len = array.length; idx < len; idx++) {
          if (!contains(results, array[idx])) {
              results.push(array[idx]);
          }
      }
      return results;
  }
  /**
   * returns next item.
   * @param {Array} array
   */
  function next(array, item) {
      var idx = indexOf(array, item);
      if (idx === -1) {
          return null;
      }
      return array[idx + 1];
  }
  /**
   * returns prev item.
   * @param {Array} array
   */
  function prev(array, item) {
      var idx = indexOf(array, item);
      if (idx === -1) {
          return null;
      }
      return array[idx - 1];
  }
  /**
   * @class core.list
   *
   * list utils
   *
   * @singleton
   * @alternateClassName list
   */
  var lists = {
      head: head,
      last: last,
      initial: initial,
      tail: tail,
      prev: prev,
      next: next,
      find: find,
      contains: contains,
      all: all,
      sum: sum,
      from: from,
      isEmpty: isEmpty,
      clusterBy: clusterBy,
      compact: compact,
      unique: unique
  };

  var isSupportAmd = typeof define === 'function' && define.amd; // eslint-disable-line
  /**
   * returns whether font is installed or not.
   *
   * @param {String} fontName
   * @return {Boolean}
   */
  function isFontInstalled(fontName) {
      var testFontName = fontName === 'Comic Sans MS' ? 'Courier New' : 'Comic Sans MS';
      var $tester = $$1('<div>').css({
          position: 'absolute',
          left: '-9999px',
          top: '-9999px',
          fontSize: '200px'
      }).text('mmmmmmmmmwwwwwww').appendTo(document.body);
      var originalWidth = $tester.css('fontFamily', testFontName).width();
      var width = $tester.css('fontFamily', fontName + ',' + testFontName).width();
      $tester.remove();
      return originalWidth !== width;
  }
  var userAgent = navigator.userAgent;
  var isMSIE = /MSIE|Trident/i.test(userAgent);
  var browserVersion;
  if (isMSIE) {
      var matches = /MSIE (\d+[.]\d+)/.exec(userAgent);
      if (matches) {
          browserVersion = parseFloat(matches[1]);
      }
      matches = /Trident\/.*rv:([0-9]{1,}[.0-9]{0,})/.exec(userAgent);
      if (matches) {
          browserVersion = parseFloat(matches[1]);
      }
  }
  var isEdge = /Edge\/\d+/.test(userAgent);
  var hasCodeMirror = !!window.CodeMirror;
  if (!hasCodeMirror && isSupportAmd) {
      // Webpack
      if (typeof __webpack_require__ === 'function') { // eslint-disable-line
          try {
              // If CodeMirror can't be resolved, `require.resolve` will throw an
              // exception and `hasCodeMirror` won't be set to `true`.
              require.resolve('codemirror');
              hasCodeMirror = true;
          }
          catch (e) {
              // do nothing
          }
      }
      else if (typeof require !== 'undefined') {
          // Browserify
          if (typeof require.resolve !== 'undefined') {
              try {
                  // If CodeMirror can't be resolved, `require.resolve` will throw an
                  // exception and `hasCodeMirror` won't be set to `true`.
                  require.resolve('codemirror');
                  hasCodeMirror = true;
              }
              catch (e) {
                  // do nothing
              }
              // Almond/Require
          }
          else if (typeof require.specified !== 'undefined') {
              hasCodeMirror = require.specified('codemirror');
          }
      }
  }
  var isSupportTouch = (('ontouchstart' in window) ||
      (navigator.MaxTouchPoints > 0) ||
      (navigator.msMaxTouchPoints > 0));
  // [workaround] IE doesn't have input events for contentEditable
  // - see: https://goo.gl/4bfIvA
  var inputEventName = (isMSIE || isEdge) ? 'DOMCharacterDataModified DOMSubtreeModified DOMNodeInserted' : 'input';
  /**
   * @class core.env
   *
   * Object which check platform and agent
   *
   * @singleton
   * @alternateClassName env
   */
  var env = {
      isMac: navigator.appVersion.indexOf('Mac') > -1,
      isMSIE: isMSIE,
      isEdge: isEdge,
      isFF: !isEdge && /firefox/i.test(userAgent),
      isPhantom: /PhantomJS/i.test(userAgent),
      isWebkit: !isEdge && /webkit/i.test(userAgent),
      isChrome: !isEdge && /chrome/i.test(userAgent),
      isSafari: !isEdge && /safari/i.test(userAgent),
      browserVersion: browserVersion,
      jqueryVersion: parseFloat($$1.fn.jquery),
      isSupportAmd: isSupportAmd,
      isSupportTouch: isSupportTouch,
      hasCodeMirror: hasCodeMirror,
      isFontInstalled: isFontInstalled,
      isW3CRangeSupport: !!document.createRange,
      inputEventName: inputEventName
  };

  var NBSP_CHAR = String.fromCharCode(160);
  var ZERO_WIDTH_NBSP_CHAR = '\ufeff';
  /**
   * @method isEditable
   *
   * returns whether node is `note-editable` or not.
   *
   * @param {Node} node
   * @return {Boolean}
   */
  function isEditable(node) {
      return node && $$1(node).hasClass('note-editable');
  }
  /**
   * @method isControlSizing
   *
   * returns whether node is `note-control-sizing` or not.
   *
   * @param {Node} node
   * @return {Boolean}
   */
  function isControlSizing(node) {
      return node && $$1(node).hasClass('note-control-sizing');
  }
  /**
   * @method makePredByNodeName
   *
   * returns predicate which judge whether nodeName is same
   *
   * @param {String} nodeName
   * @return {Function}
   */
  function makePredByNodeName(nodeName) {
      nodeName = nodeName.toUpperCase();
      return function (node) {
          return node && node.nodeName.toUpperCase() === nodeName;
      };
  }
  /**
   * @method isText
   *
   *
   *
   * @param {Node} node
   * @return {Boolean} true if node's type is text(3)
   */
  function isText(node) {
      return node && node.nodeType === 3;
  }
  /**
   * @method isElement
   *
   *
   *
   * @param {Node} node
   * @return {Boolean} true if node's type is element(1)
   */
  function isElement(node) {
      return node && node.nodeType === 1;
  }
  /**
   * ex) br, col, embed, hr, img, input, ...
   * @see http://www.w3.org/html/wg/drafts/html/master/syntax.html#void-elements
   */
  function isVoid(node) {
      return node && /^BR|^IMG|^HR|^IFRAME|^BUTTON|^INPUT|^VIDEO|^EMBED/.test(node.nodeName.toUpperCase());
  }
  function isPara(node) {
      if (isEditable(node)) {
          return false;
      }
      // Chrome(v31.0), FF(v25.0.1) use DIV for paragraph
      return node && /^DIV|^P|^LI|^H[1-7]/.test(node.nodeName.toUpperCase());
  }
  function isHeading(node) {
      return node && /^H[1-7]/.test(node.nodeName.toUpperCase());
  }
  var isPre = makePredByNodeName('PRE');
  var isLi = makePredByNodeName('LI');
  function isPurePara(node) {
      return isPara(node) && !isLi(node);
  }
  var isTable = makePredByNodeName('TABLE');
  var isData = makePredByNodeName('DATA');
  function isInline(node) {
      return !isBodyContainer(node) &&
          !isList(node) &&
          !isHr(node) &&
          !isPara(node) &&
          !isTable(node) &&
          !isBlockquote(node) &&
          !isData(node);
  }
  function isList(node) {
      return node && /^UL|^OL/.test(node.nodeName.toUpperCase());
  }
  var isHr = makePredByNodeName('HR');
  function isCell(node) {
      return node && /^TD|^TH/.test(node.nodeName.toUpperCase());
  }
  var isBlockquote = makePredByNodeName('BLOCKQUOTE');
  function isBodyContainer(node) {
      return isCell(node) || isBlockquote(node) || isEditable(node);
  }
  var isAnchor = makePredByNodeName('A');
  function isParaInline(node) {
      return isInline(node) && !!ancestor(node, isPara);
  }
  function isBodyInline(node) {
      return isInline(node) && !ancestor(node, isPara);
  }
  var isBody = makePredByNodeName('BODY');
  /**
   * returns whether nodeB is closest sibling of nodeA
   *
   * @param {Node} nodeA
   * @param {Node} nodeB
   * @return {Boolean}
   */
  function isClosestSibling(nodeA, nodeB) {
      return nodeA.nextSibling === nodeB ||
          nodeA.previousSibling === nodeB;
  }
  /**
   * returns array of closest siblings with node
   *
   * @param {Node} node
   * @param {function} [pred] - predicate function
   * @return {Node[]}
   */
  function withClosestSiblings(node, pred) {
      pred = pred || func.ok;
      var siblings = [];
      if (node.previousSibling && pred(node.previousSibling)) {
          siblings.push(node.previousSibling);
      }
      siblings.push(node);
      if (node.nextSibling && pred(node.nextSibling)) {
          siblings.push(node.nextSibling);
      }
      return siblings;
  }
  /**
   * blank HTML for cursor position
   * - [workaround] old IE only works with &nbsp;
   * - [workaround] IE11 and other browser works with bogus br
   */
  var blankHTML = env.isMSIE && env.browserVersion < 11 ? '&nbsp;' : '<br>';
  /**
   * @method nodeLength
   *
   * returns #text's text size or element's childNodes size
   *
   * @param {Node} node
   */
  function nodeLength(node) {
      if (isText(node)) {
          return node.nodeValue.length;
      }
      if (node) {
          return node.childNodes.length;
      }
      return 0;
  }
  /**
   * returns whether node is empty or not.
   *
   * @param {Node} node
   * @return {Boolean}
   */
  function isEmpty$1(node) {
      var len = nodeLength(node);
      if (len === 0) {
          return true;
      }
      else if (!isText(node) && len === 1 && node.innerHTML === blankHTML) {
          // ex) <p><br></p>, <span><br></span>
          return true;
      }
      else if (lists.all(node.childNodes, isText) && node.innerHTML === '') {
          // ex) <p></p>, <span></span>
          return true;
      }
      return false;
  }
  /**
   * padding blankHTML if node is empty (for cursor position)
   */
  function paddingBlankHTML(node) {
      if (!isVoid(node) && !nodeLength(node)) {
          node.innerHTML = blankHTML;
      }
  }
  /**
   * find nearest ancestor predicate hit
   *
   * @param {Node} node
   * @param {Function} pred - predicate function
   */
  function ancestor(node, pred) {
      while (node) {
          if (pred(node)) {
              return node;
          }
          if (isEditable(node)) {
              break;
          }
          node = node.parentNode;
      }
      return null;
  }
  /**
   * find nearest ancestor only single child blood line and predicate hit
   *
   * @param {Node} node
   * @param {Function} pred - predicate function
   */
  function singleChildAncestor(node, pred) {
      node = node.parentNode;
      while (node) {
          if (nodeLength(node) !== 1) {
              break;
          }
          if (pred(node)) {
              return node;
          }
          if (isEditable(node)) {
              break;
          }
          node = node.parentNode;
      }
      return null;
  }
  /**
   * returns new array of ancestor nodes (until predicate hit).
   *
   * @param {Node} node
   * @param {Function} [optional] pred - predicate function
   */
  function listAncestor(node, pred) {
      pred = pred || func.fail;
      var ancestors = [];
      ancestor(node, function (el) {
          if (!isEditable(el)) {
              ancestors.push(el);
          }
          return pred(el);
      });
      return ancestors;
  }
  /**
   * find farthest ancestor predicate hit
   */
  function lastAncestor(node, pred) {
      var ancestors = listAncestor(node);
      return lists.last(ancestors.filter(pred));
  }
  /**
   * returns common ancestor node between two nodes.
   *
   * @param {Node} nodeA
   * @param {Node} nodeB
   */
  function commonAncestor(nodeA, nodeB) {
      var ancestors = listAncestor(nodeA);
      for (var n = nodeB; n; n = n.parentNode) {
          if ($$1.inArray(n, ancestors) > -1) {
              return n;
          }
      }
      return null; // difference document area
  }
  /**
   * listing all previous siblings (until predicate hit).
   *
   * @param {Node} node
   * @param {Function} [optional] pred - predicate function
   */
  function listPrev(node, pred) {
      pred = pred || func.fail;
      var nodes = [];
      while (node) {
          if (pred(node)) {
              break;
          }
          nodes.push(node);
          node = node.previousSibling;
      }
      return nodes;
  }
  /**
   * listing next siblings (until predicate hit).
   *
   * @param {Node} node
   * @param {Function} [pred] - predicate function
   */
  function listNext(node, pred) {
      pred = pred || func.fail;
      var nodes = [];
      while (node) {
          if (pred(node)) {
              break;
          }
          nodes.push(node);
          node = node.nextSibling;
      }
      return nodes;
  }
  /**
   * listing descendant nodes
   *
   * @param {Node} node
   * @param {Function} [pred] - predicate function
   */
  function listDescendant(node, pred) {
      var descendants = [];
      pred = pred || func.ok;
      // start DFS(depth first search) with node
      (function fnWalk(current) {
          if (node !== current && pred(current)) {
              descendants.push(current);
          }
          for (var idx = 0, len = current.childNodes.length; idx < len; idx++) {
              fnWalk(current.childNodes[idx]);
          }
      })(node);
      return descendants;
  }
  /**
   * wrap node with new tag.
   *
   * @param {Node} node
   * @param {Node} tagName of wrapper
   * @return {Node} - wrapper
   */
  function wrap(node, wrapperName) {
      var parent = node.parentNode;
      var wrapper = $$1('<' + wrapperName + '>')[0];
      parent.insertBefore(wrapper, node);
      wrapper.appendChild(node);
      return wrapper;
  }
  /**
   * insert node after preceding
   *
   * @param {Node} node
   * @param {Node} preceding - predicate function
   */
  function insertAfter(node, preceding) {
      var next = preceding.nextSibling;
      var parent = preceding.parentNode;
      if (next) {
          parent.insertBefore(node, next);
      }
      else {
          parent.appendChild(node);
      }
      return node;
  }
  /**
   * append elements.
   *
   * @param {Node} node
   * @param {Collection} aChild
   */
  function appendChildNodes(node, aChild) {
      $$1.each(aChild, function (idx, child) {
          node.appendChild(child);
      });
      return node;
  }
  /**
   * returns whether boundaryPoint is left edge or not.
   *
   * @param {BoundaryPoint} point
   * @return {Boolean}
   */
  function isLeftEdgePoint(point) {
      return point.offset === 0;
  }
  /**
   * returns whether boundaryPoint is right edge or not.
   *
   * @param {BoundaryPoint} point
   * @return {Boolean}
   */
  function isRightEdgePoint(point) {
      return point.offset === nodeLength(point.node);
  }
  /**
   * returns whether boundaryPoint is edge or not.
   *
   * @param {BoundaryPoint} point
   * @return {Boolean}
   */
  function isEdgePoint(point) {
      return isLeftEdgePoint(point) || isRightEdgePoint(point);
  }
  /**
   * returns whether node is left edge of ancestor or not.
   *
   * @param {Node} node
   * @param {Node} ancestor
   * @return {Boolean}
   */
  function isLeftEdgeOf(node, ancestor) {
      while (node && node !== ancestor) {
          if (position(node) !== 0) {
              return false;
          }
          node = node.parentNode;
      }
      return true;
  }
  /**
   * returns whether node is right edge of ancestor or not.
   *
   * @param {Node} node
   * @param {Node} ancestor
   * @return {Boolean}
   */
  function isRightEdgeOf(node, ancestor) {
      if (!ancestor) {
          return false;
      }
      while (node && node !== ancestor) {
          if (position(node) !== nodeLength(node.parentNode) - 1) {
              return false;
          }
          node = node.parentNode;
      }
      return true;
  }
  /**
   * returns whether point is left edge of ancestor or not.
   * @param {BoundaryPoint} point
   * @param {Node} ancestor
   * @return {Boolean}
   */
  function isLeftEdgePointOf(point, ancestor) {
      return isLeftEdgePoint(point) && isLeftEdgeOf(point.node, ancestor);
  }
  /**
   * returns whether point is right edge of ancestor or not.
   * @param {BoundaryPoint} point
   * @param {Node} ancestor
   * @return {Boolean}
   */
  function isRightEdgePointOf(point, ancestor) {
      return isRightEdgePoint(point) && isRightEdgeOf(point.node, ancestor);
  }
  /**
   * returns offset from parent.
   *
   * @param {Node} node
   */
  function position(node) {
      var offset = 0;
      while ((node = node.previousSibling)) {
          offset += 1;
      }
      return offset;
  }
  function hasChildren(node) {
      return !!(node && node.childNodes && node.childNodes.length);
  }
  /**
   * returns previous boundaryPoint
   *
   * @param {BoundaryPoint} point
   * @param {Boolean} isSkipInnerOffset
   * @return {BoundaryPoint}
   */
  function prevPoint(point, isSkipInnerOffset) {
      var node;
      var offset;
      if (point.offset === 0) {
          if (isEditable(point.node)) {
              return null;
          }
          node = point.node.parentNode;
          offset = position(point.node);
      }
      else if (hasChildren(point.node)) {
          node = point.node.childNodes[point.offset - 1];
          offset = nodeLength(node);
      }
      else {
          node = point.node;
          offset = isSkipInnerOffset ? 0 : point.offset - 1;
      }
      return {
          node: node,
          offset: offset
      };
  }
  /**
   * returns next boundaryPoint
   *
   * @param {BoundaryPoint} point
   * @param {Boolean} isSkipInnerOffset
   * @return {BoundaryPoint}
   */
  function nextPoint(point, isSkipInnerOffset) {
      var node, offset;
      if (nodeLength(point.node) === point.offset) {
          if (isEditable(point.node)) {
              return null;
          }
          node = point.node.parentNode;
          offset = position(point.node) + 1;
      }
      else if (hasChildren(point.node)) {
          node = point.node.childNodes[point.offset];
          offset = 0;
      }
      else {
          node = point.node;
          offset = isSkipInnerOffset ? nodeLength(point.node) : point.offset + 1;
      }
      return {
          node: node,
          offset: offset
      };
  }
  /**
   * returns whether pointA and pointB is same or not.
   *
   * @param {BoundaryPoint} pointA
   * @param {BoundaryPoint} pointB
   * @return {Boolean}
   */
  function isSamePoint(pointA, pointB) {
      return pointA.node === pointB.node && pointA.offset === pointB.offset;
  }
  /**
   * returns whether point is visible (can set cursor) or not.
   *
   * @param {BoundaryPoint} point
   * @return {Boolean}
   */
  function isVisiblePoint(point) {
      if (isText(point.node) || !hasChildren(point.node) || isEmpty$1(point.node)) {
          return true;
      }
      var leftNode = point.node.childNodes[point.offset - 1];
      var rightNode = point.node.childNodes[point.offset];
      if ((!leftNode || isVoid(leftNode)) && (!rightNode || isVoid(rightNode))) {
          return true;
      }
      return false;
  }
  /**
   * @method prevPointUtil
   *
   * @param {BoundaryPoint} point
   * @param {Function} pred
   * @return {BoundaryPoint}
   */
  function prevPointUntil(point, pred) {
      while (point) {
          if (pred(point)) {
              return point;
          }
          point = prevPoint(point);
      }
      return null;
  }
  /**
   * @method nextPointUntil
   *
   * @param {BoundaryPoint} point
   * @param {Function} pred
   * @return {BoundaryPoint}
   */
  function nextPointUntil(point, pred) {
      while (point) {
          if (pred(point)) {
              return point;
          }
          point = nextPoint(point);
      }
      return null;
  }
  /**
   * returns whether point has character or not.
   *
   * @param {Point} point
   * @return {Boolean}
   */
  function isCharPoint(point) {
      if (!isText(point.node)) {
          return false;
      }
      var ch = point.node.nodeValue.charAt(point.offset - 1);
      return ch && (ch !== ' ' && ch !== NBSP_CHAR);
  }
  /**
   * @method walkPoint
   *
   * @param {BoundaryPoint} startPoint
   * @param {BoundaryPoint} endPoint
   * @param {Function} handler
   * @param {Boolean} isSkipInnerOffset
   */
  function walkPoint(startPoint, endPoint, handler, isSkipInnerOffset) {
      var point = startPoint;
      while (point) {
          handler(point);
          if (isSamePoint(point, endPoint)) {
              break;
          }
          var isSkipOffset = isSkipInnerOffset &&
              startPoint.node !== point.node &&
              endPoint.node !== point.node;
          point = nextPoint(point, isSkipOffset);
      }
  }
  /**
   * @method makeOffsetPath
   *
   * return offsetPath(array of offset) from ancestor
   *
   * @param {Node} ancestor - ancestor node
   * @param {Node} node
   */
  function makeOffsetPath(ancestor, node) {
      var ancestors = listAncestor(node, func.eq(ancestor));
      return ancestors.map(position).reverse();
  }
  /**
   * @method fromOffsetPath
   *
   * return element from offsetPath(array of offset)
   *
   * @param {Node} ancestor - ancestor node
   * @param {array} offsets - offsetPath
   */
  function fromOffsetPath(ancestor, offsets) {
      var current = ancestor;
      for (var i = 0, len = offsets.length; i < len; i++) {
          if (current.childNodes.length <= offsets[i]) {
              current = current.childNodes[current.childNodes.length - 1];
          }
          else {
              current = current.childNodes[offsets[i]];
          }
      }
      return current;
  }
  /**
   * @method splitNode
   *
   * split element or #text
   *
   * @param {BoundaryPoint} point
   * @param {Object} [options]
   * @param {Boolean} [options.isSkipPaddingBlankHTML] - default: false
   * @param {Boolean} [options.isNotSplitEdgePoint] - default: false
   * @param {Boolean} [options.isDiscardEmptySplits] - default: false
   * @return {Node} right node of boundaryPoint
   */
  function splitNode(point, options) {
      var isSkipPaddingBlankHTML = options && options.isSkipPaddingBlankHTML;
      var isNotSplitEdgePoint = options && options.isNotSplitEdgePoint;
      var isDiscardEmptySplits = options && options.isDiscardEmptySplits;
      if (isDiscardEmptySplits) {
          isSkipPaddingBlankHTML = true;
      }
      // edge case
      if (isEdgePoint(point) && (isText(point.node) || isNotSplitEdgePoint)) {
          if (isLeftEdgePoint(point)) {
              return point.node;
          }
          else if (isRightEdgePoint(point)) {
              return point.node.nextSibling;
          }
      }
      // split #text
      if (isText(point.node)) {
          return point.node.splitText(point.offset);
      }
      else {
          var childNode = point.node.childNodes[point.offset];
          var clone = insertAfter(point.node.cloneNode(false), point.node);
          appendChildNodes(clone, listNext(childNode));
          if (!isSkipPaddingBlankHTML) {
              paddingBlankHTML(point.node);
              paddingBlankHTML(clone);
          }
          if (isDiscardEmptySplits) {
              if (isEmpty$1(point.node)) {
                  remove(point.node);
              }
              if (isEmpty$1(clone)) {
                  remove(clone);
                  return point.node.nextSibling;
              }
          }
          return clone;
      }
  }
  /**
   * @method splitTree
   *
   * split tree by point
   *
   * @param {Node} root - split root
   * @param {BoundaryPoint} point
   * @param {Object} [options]
   * @param {Boolean} [options.isSkipPaddingBlankHTML] - default: false
   * @param {Boolean} [options.isNotSplitEdgePoint] - default: false
   * @return {Node} right node of boundaryPoint
   */
  function splitTree(root, point, options) {
      // ex) [#text, <span>, <p>]
      var ancestors = listAncestor(point.node, func.eq(root));
      if (!ancestors.length) {
          return null;
      }
      else if (ancestors.length === 1) {
          return splitNode(point, options);
      }
      return ancestors.reduce(function (node, parent) {
          if (node === point.node) {
              node = splitNode(point, options);
          }
          return splitNode({
              node: parent,
              offset: node ? position(node) : nodeLength(parent)
          }, options);
      });
  }
  /**
   * split point
   *
   * @param {Point} point
   * @param {Boolean} isInline
   * @return {Object}
   */
  function splitPoint(point, isInline) {
      // find splitRoot, container
      //  - inline: splitRoot is a child of paragraph
      //  - block: splitRoot is a child of bodyContainer
      var pred = isInline ? isPara : isBodyContainer;
      var ancestors = listAncestor(point.node, pred);
      var topAncestor = lists.last(ancestors) || point.node;
      var splitRoot, container;
      if (pred(topAncestor)) {
          splitRoot = ancestors[ancestors.length - 2];
          container = topAncestor;
      }
      else {
          splitRoot = topAncestor;
          container = splitRoot.parentNode;
      }
      // if splitRoot is exists, split with splitTree
      var pivot = splitRoot && splitTree(splitRoot, point, {
          isSkipPaddingBlankHTML: isInline,
          isNotSplitEdgePoint: isInline
      });
      // if container is point.node, find pivot with point.offset
      if (!pivot && container === point.node) {
          pivot = point.node.childNodes[point.offset];
      }
      return {
          rightNode: pivot,
          container: container
      };
  }
  function create(nodeName) {
      return document.createElement(nodeName);
  }
  function createText(text) {
      return document.createTextNode(text);
  }
  /**
   * @method remove
   *
   * remove node, (isRemoveChild: remove child or not)
   *
   * @param {Node} node
   * @param {Boolean} isRemoveChild
   */
  function remove(node, isRemoveChild) {
      if (!node || !node.parentNode) {
          return;
      }
      if (node.removeNode) {
          return node.removeNode(isRemoveChild);
      }
      var parent = node.parentNode;
      if (!isRemoveChild) {
          var nodes = [];
          for (var i = 0, len = node.childNodes.length; i < len; i++) {
              nodes.push(node.childNodes[i]);
          }
          for (var i = 0, len = nodes.length; i < len; i++) {
              parent.insertBefore(nodes[i], node);
          }
      }
      parent.removeChild(node);
  }
  /**
   * @method removeWhile
   *
   * @param {Node} node
   * @param {Function} pred
   */
  function removeWhile(node, pred) {
      while (node) {
          if (isEditable(node) || !pred(node)) {
              break;
          }
          var parent = node.parentNode;
          remove(node);
          node = parent;
      }
  }
  /**
   * @method replace
   *
   * replace node with provided nodeName
   *
   * @param {Node} node
   * @param {String} nodeName
   * @return {Node} - new node
   */
  function replace(node, nodeName) {
      if (node.nodeName.toUpperCase() === nodeName.toUpperCase()) {
          return node;
      }
      var newNode = create(nodeName);
      if (node.style.cssText) {
          newNode.style.cssText = node.style.cssText;
      }
      appendChildNodes(newNode, lists.from(node.childNodes));
      insertAfter(newNode, node);
      remove(node);
      return newNode;
  }
  var isTextarea = makePredByNodeName('TEXTAREA');
  /**
   * @param {jQuery} $node
   * @param {Boolean} [stripLinebreaks] - default: false
   */
  function value($node, stripLinebreaks) {
      var val = isTextarea($node[0]) ? $node.val() : $node.html();
      if (stripLinebreaks) {
          return val.replace(/[\n\r]/g, '');
      }
      return val;
  }
  /**
   * @method html
   *
   * get the HTML contents of node
   *
   * @param {jQuery} $node
   * @param {Boolean} [isNewlineOnBlock]
   */
  function html($node, isNewlineOnBlock) {
      var markup = value($node);
      if (isNewlineOnBlock) {
          var regexTag = /<(\/?)(\b(?!!)[^>\s]*)(.*?)(\s*\/?>)/g;
          markup = markup.replace(regexTag, function (match, endSlash, name) {
              name = name.toUpperCase();
              var isEndOfInlineContainer = /^DIV|^TD|^TH|^P|^LI|^H[1-7]/.test(name) &&
                  !!endSlash;
              var isBlockNode = /^BLOCKQUOTE|^TABLE|^TBODY|^TR|^HR|^UL|^OL/.test(name);
              return match + ((isEndOfInlineContainer || isBlockNode) ? '\n' : '');
          });
          markup = $$1.trim(markup);
      }
      return markup;
  }
  function posFromPlaceholder(placeholder) {
      var $placeholder = $$1(placeholder);
      var pos = $placeholder.offset();
      var height = $placeholder.outerHeight(true); // include margin
      return {
          left: pos.left,
          top: pos.top + height
      };
  }
  function attachEvents($node, events) {
      Object.keys(events).forEach(function (key) {
          $node.on(key, events[key]);
      });
  }
  function detachEvents($node, events) {
      Object.keys(events).forEach(function (key) {
          $node.off(key, events[key]);
      });
  }
  /**
   * @method isCustomStyleTag
   *
   * assert if a node contains a "note-styletag" class,
   * which implies that's a custom-made style tag node
   *
   * @param {Node} an HTML DOM node
   */
  function isCustomStyleTag(node) {
      return node && !isText(node) && lists.contains(node.classList, 'note-styletag');
  }
  var dom = {
      /** @property {String} NBSP_CHAR */
      NBSP_CHAR: NBSP_CHAR,
      /** @property {String} ZERO_WIDTH_NBSP_CHAR */
      ZERO_WIDTH_NBSP_CHAR: ZERO_WIDTH_NBSP_CHAR,
      /** @property {String} blank */
      blank: blankHTML,
      /** @property {String} emptyPara */
      emptyPara: "<p>" + blankHTML + "</p>",
      makePredByNodeName: makePredByNodeName,
      isEditable: isEditable,
      isControlSizing: isControlSizing,
      isText: isText,
      isElement: isElement,
      isVoid: isVoid,
      isPara: isPara,
      isPurePara: isPurePara,
      isHeading: isHeading,
      isInline: isInline,
      isBlock: func.not(isInline),
      isBodyInline: isBodyInline,
      isBody: isBody,
      isParaInline: isParaInline,
      isPre: isPre,
      isList: isList,
      isTable: isTable,
      isData: isData,
      isCell: isCell,
      isBlockquote: isBlockquote,
      isBodyContainer: isBodyContainer,
      isAnchor: isAnchor,
      isDiv: makePredByNodeName('DIV'),
      isLi: isLi,
      isBR: makePredByNodeName('BR'),
      isSpan: makePredByNodeName('SPAN'),
      isB: makePredByNodeName('B'),
      isU: makePredByNodeName('U'),
      isS: makePredByNodeName('S'),
      isI: makePredByNodeName('I'),
      isImg: makePredByNodeName('IMG'),
      isTextarea: isTextarea,
      isEmpty: isEmpty$1,
      isEmptyAnchor: func.and(isAnchor, isEmpty$1),
      isClosestSibling: isClosestSibling,
      withClosestSiblings: withClosestSiblings,
      nodeLength: nodeLength,
      isLeftEdgePoint: isLeftEdgePoint,
      isRightEdgePoint: isRightEdgePoint,
      isEdgePoint: isEdgePoint,
      isLeftEdgeOf: isLeftEdgeOf,
      isRightEdgeOf: isRightEdgeOf,
      isLeftEdgePointOf: isLeftEdgePointOf,
      isRightEdgePointOf: isRightEdgePointOf,
      prevPoint: prevPoint,
      nextPoint: nextPoint,
      isSamePoint: isSamePoint,
      isVisiblePoint: isVisiblePoint,
      prevPointUntil: prevPointUntil,
      nextPointUntil: nextPointUntil,
      isCharPoint: isCharPoint,
      walkPoint: walkPoint,
      ancestor: ancestor,
      singleChildAncestor: singleChildAncestor,
      listAncestor: listAncestor,
      lastAncestor: lastAncestor,
      listNext: listNext,
      listPrev: listPrev,
      listDescendant: listDescendant,
      commonAncestor: commonAncestor,
      wrap: wrap,
      insertAfter: insertAfter,
      appendChildNodes: appendChildNodes,
      position: position,
      hasChildren: hasChildren,
      makeOffsetPath: makeOffsetPath,
      fromOffsetPath: fromOffsetPath,
      splitTree: splitTree,
      splitPoint: splitPoint,
      create: create,
      createText: createText,
      remove: remove,
      removeWhile: removeWhile,
      replace: replace,
      html: html,
      value: value,
      posFromPlaceholder: posFromPlaceholder,
      attachEvents: attachEvents,
      detachEvents: detachEvents,
      isCustomStyleTag: isCustomStyleTag
  };

  /**
   * return boundaryPoint from TextRange, inspired by Andy Na's HuskyRange.js
   *
   * @param {TextRange} textRange
   * @param {Boolean} isStart
   * @return {BoundaryPoint}
   *
   * @see http://msdn.microsoft.com/en-us/library/ie/ms535872(v=vs.85).aspx
   */
  function textRangeToPoint(textRange, isStart) {
      var container = textRange.parentElement();
      var offset;
      var tester = document.body.createTextRange();
      var prevContainer;
      var childNodes = lists.from(container.childNodes);
      for (offset = 0; offset < childNodes.length; offset++) {
          if (dom.isText(childNodes[offset])) {
              continue;
          }
          tester.moveToElementText(childNodes[offset]);
          if (tester.compareEndPoints('StartToStart', textRange) >= 0) {
              break;
          }
          prevContainer = childNodes[offset];
      }
      if (offset !== 0 && dom.isText(childNodes[offset - 1])) {
          var textRangeStart = document.body.createTextRange();
          var curTextNode = null;
          textRangeStart.moveToElementText(prevContainer || container);
          textRangeStart.collapse(!prevContainer);
          curTextNode = prevContainer ? prevContainer.nextSibling : container.firstChild;
          var pointTester = textRange.duplicate();
          pointTester.setEndPoint('StartToStart', textRangeStart);
          var textCount = pointTester.text.replace(/[\r\n]/g, '').length;
          while (textCount > curTextNode.nodeValue.length && curTextNode.nextSibling) {
              textCount -= curTextNode.nodeValue.length;
              curTextNode = curTextNode.nextSibling;
          }
          // [workaround] enforce IE to re-reference curTextNode, hack
          var dummy = curTextNode.nodeValue; // eslint-disable-line
          if (isStart && curTextNode.nextSibling && dom.isText(curTextNode.nextSibling) &&
              textCount === curTextNode.nodeValue.length) {
              textCount -= curTextNode.nodeValue.length;
              curTextNode = curTextNode.nextSibling;
          }
          container = curTextNode;
          offset = textCount;
      }
      return {
          cont: container,
          offset: offset
      };
  }
  /**
   * return TextRange from boundary point (inspired by google closure-library)
   * @param {BoundaryPoint} point
   * @return {TextRange}
   */
  function pointToTextRange(point) {
      var textRangeInfo = function (container, offset) {
          var node, isCollapseToStart;
          if (dom.isText(container)) {
              var prevTextNodes = dom.listPrev(container, func.not(dom.isText));
              var prevContainer = lists.last(prevTextNodes).previousSibling;
              node = prevContainer || container.parentNode;
              offset += lists.sum(lists.tail(prevTextNodes), dom.nodeLength);
              isCollapseToStart = !prevContainer;
          }
          else {
              node = container.childNodes[offset] || container;
              if (dom.isText(node)) {
                  return textRangeInfo(node, 0);
              }
              offset = 0;
              isCollapseToStart = false;
          }
          return {
              node: node,
              collapseToStart: isCollapseToStart,
              offset: offset
          };
      };
      var textRange = document.body.createTextRange();
      var info = textRangeInfo(point.node, point.offset);
      textRange.moveToElementText(info.node);
      textRange.collapse(info.collapseToStart);
      textRange.moveStart('character', info.offset);
      return textRange;
  }
  /**
     * Wrapped Range
     *
     * @constructor
     * @param {Node} sc - start container
     * @param {Number} so - start offset
     * @param {Node} ec - end container
     * @param {Number} eo - end offset
     */
  var WrappedRange = /** @class */ (function () {
      function WrappedRange(sc, so, ec, eo) {
          this.sc = sc;
          this.so = so;
          this.ec = ec;
          this.eo = eo;
          // isOnEditable: judge whether range is on editable or not
          this.isOnEditable = this.makeIsOn(dom.isEditable);
          // isOnList: judge whether range is on list node or not
          this.isOnList = this.makeIsOn(dom.isList);
          // isOnAnchor: judge whether range is on anchor node or not
          this.isOnAnchor = this.makeIsOn(dom.isAnchor);
          // isOnCell: judge whether range is on cell node or not
          this.isOnCell = this.makeIsOn(dom.isCell);
          // isOnData: judge whether range is on data node or not
          this.isOnData = this.makeIsOn(dom.isData);
      }
      // nativeRange: get nativeRange from sc, so, ec, eo
      WrappedRange.prototype.nativeRange = function () {
          if (env.isW3CRangeSupport) {
              var w3cRange = document.createRange();
              w3cRange.setStart(this.sc, this.so);
              w3cRange.setEnd(this.ec, this.eo);
              return w3cRange;
          }
          else {
              var textRange = pointToTextRange({
                  node: this.sc,
                  offset: this.so
              });
              textRange.setEndPoint('EndToEnd', pointToTextRange({
                  node: this.ec,
                  offset: this.eo
              }));
              return textRange;
          }
      };
      WrappedRange.prototype.getPoints = function () {
          return {
              sc: this.sc,
              so: this.so,
              ec: this.ec,
              eo: this.eo
          };
      };
      WrappedRange.prototype.getStartPoint = function () {
          return {
              node: this.sc,
              offset: this.so
          };
      };
      WrappedRange.prototype.getEndPoint = function () {
          return {
              node: this.ec,
              offset: this.eo
          };
      };
      /**
       * select update visible range
       */
      WrappedRange.prototype.select = function () {
          var nativeRng = this.nativeRange();
          if (env.isW3CRangeSupport) {
              var selection = document.getSelection();
              if (selection.rangeCount > 0) {
                  selection.removeAllRanges();
              }
              selection.addRange(nativeRng);
          }
          else {
              nativeRng.select();
          }
          return this;
      };
      /**
       * Moves the scrollbar to start container(sc) of current range
       *
       * @return {WrappedRange}
       */
      WrappedRange.prototype.scrollIntoView = function (container) {
          var height = $$1(container).height();
          if (container.scrollTop + height < this.sc.offsetTop) {
              container.scrollTop += Math.abs(container.scrollTop + height - this.sc.offsetTop);
          }
          return this;
      };
      /**
       * @return {WrappedRange}
       */
      WrappedRange.prototype.normalize = function () {
          /**
           * @param {BoundaryPoint} point
           * @param {Boolean} isLeftToRight
           * @return {BoundaryPoint}
           */
          var getVisiblePoint = function (point, isLeftToRight) {
              if ((dom.isVisiblePoint(point) && !dom.isEdgePoint(point)) ||
                  (dom.isVisiblePoint(point) && dom.isRightEdgePoint(point) && !isLeftToRight) ||
                  (dom.isVisiblePoint(point) && dom.isLeftEdgePoint(point) && isLeftToRight) ||
                  (dom.isVisiblePoint(point) && dom.isBlock(point.node) && dom.isEmpty(point.node))) {
                  return point;
              }
              // point on block's edge
              var block = dom.ancestor(point.node, dom.isBlock);
              if (((dom.isLeftEdgePointOf(point, block) || dom.isVoid(dom.prevPoint(point).node)) && !isLeftToRight) ||
                  ((dom.isRightEdgePointOf(point, block) || dom.isVoid(dom.nextPoint(point).node)) && isLeftToRight)) {
                  // returns point already on visible point
                  if (dom.isVisiblePoint(point)) {
                      return point;
                  }
                  // reverse direction
                  isLeftToRight = !isLeftToRight;
              }
              var nextPoint = isLeftToRight ? dom.nextPointUntil(dom.nextPoint(point), dom.isVisiblePoint)
                  : dom.prevPointUntil(dom.prevPoint(point), dom.isVisiblePoint);
              return nextPoint || point;
          };
          var endPoint = getVisiblePoint(this.getEndPoint(), false);
          var startPoint = this.isCollapsed() ? endPoint : getVisiblePoint(this.getStartPoint(), true);
          return new WrappedRange(startPoint.node, startPoint.offset, endPoint.node, endPoint.offset);
      };
      /**
       * returns matched nodes on range
       *
       * @param {Function} [pred] - predicate function
       * @param {Object} [options]
       * @param {Boolean} [options.includeAncestor]
       * @param {Boolean} [options.fullyContains]
       * @return {Node[]}
       */
      WrappedRange.prototype.nodes = function (pred, options) {
          pred = pred || func.ok;
          var includeAncestor = options && options.includeAncestor;
          var fullyContains = options && options.fullyContains;
          // TODO compare points and sort
          var startPoint = this.getStartPoint();
          var endPoint = this.getEndPoint();
          var nodes = [];
          var leftEdgeNodes = [];
          dom.walkPoint(startPoint, endPoint, function (point) {
              if (dom.isEditable(point.node)) {
                  return;
              }
              var node;
              if (fullyContains) {
                  if (dom.isLeftEdgePoint(point)) {
                      leftEdgeNodes.push(point.node);
                  }
                  if (dom.isRightEdgePoint(point) && lists.contains(leftEdgeNodes, point.node)) {
                      node = point.node;
                  }
              }
              else if (includeAncestor) {
                  node = dom.ancestor(point.node, pred);
              }
              else {
                  node = point.node;
              }
              if (node && pred(node)) {
                  nodes.push(node);
              }
          }, true);
          return lists.unique(nodes);
      };
      /**
       * returns commonAncestor of range
       * @return {Element} - commonAncestor
       */
      WrappedRange.prototype.commonAncestor = function () {
          return dom.commonAncestor(this.sc, this.ec);
      };
      /**
       * returns expanded range by pred
       *
       * @param {Function} pred - predicate function
       * @return {WrappedRange}
       */
      WrappedRange.prototype.expand = function (pred) {
          var startAncestor = dom.ancestor(this.sc, pred);
          var endAncestor = dom.ancestor(this.ec, pred);
          if (!startAncestor && !endAncestor) {
              return new WrappedRange(this.sc, this.so, this.ec, this.eo);
          }
          var boundaryPoints = this.getPoints();
          if (startAncestor) {
              boundaryPoints.sc = startAncestor;
              boundaryPoints.so = 0;
          }
          if (endAncestor) {
              boundaryPoints.ec = endAncestor;
              boundaryPoints.eo = dom.nodeLength(endAncestor);
          }
          return new WrappedRange(boundaryPoints.sc, boundaryPoints.so, boundaryPoints.ec, boundaryPoints.eo);
      };
      /**
       * @param {Boolean} isCollapseToStart
       * @return {WrappedRange}
       */
      WrappedRange.prototype.collapse = function (isCollapseToStart) {
          if (isCollapseToStart) {
              return new WrappedRange(this.sc, this.so, this.sc, this.so);
          }
          else {
              return new WrappedRange(this.ec, this.eo, this.ec, this.eo);
          }
      };
      /**
       * splitText on range
       */
      WrappedRange.prototype.splitText = function () {
          var isSameContainer = this.sc === this.ec;
          var boundaryPoints = this.getPoints();
          if (dom.isText(this.ec) && !dom.isEdgePoint(this.getEndPoint())) {
              this.ec.splitText(this.eo);
          }
          if (dom.isText(this.sc) && !dom.isEdgePoint(this.getStartPoint())) {
              boundaryPoints.sc = this.sc.splitText(this.so);
              boundaryPoints.so = 0;
              if (isSameContainer) {
                  boundaryPoints.ec = boundaryPoints.sc;
                  boundaryPoints.eo = this.eo - this.so;
              }
          }
          return new WrappedRange(boundaryPoints.sc, boundaryPoints.so, boundaryPoints.ec, boundaryPoints.eo);
      };
      /**
       * delete contents on range
       * @return {WrappedRange}
       */
      WrappedRange.prototype.deleteContents = function () {
          if (this.isCollapsed()) {
              return this;
          }
          var rng = this.splitText();
          var nodes = rng.nodes(null, {
              fullyContains: true
          });
          // find new cursor point
          var point = dom.prevPointUntil(rng.getStartPoint(), function (point) {
              return !lists.contains(nodes, point.node);
          });
          var emptyParents = [];
          $$1.each(nodes, function (idx, node) {
              // find empty parents
              var parent = node.parentNode;
              if (point.node !== parent && dom.nodeLength(parent) === 1) {
                  emptyParents.push(parent);
              }
              dom.remove(node, false);
          });
          // remove empty parents
          $$1.each(emptyParents, function (idx, node) {
              dom.remove(node, false);
          });
          return new WrappedRange(point.node, point.offset, point.node, point.offset).normalize();
      };
      /**
       * makeIsOn: return isOn(pred) function
       */
      WrappedRange.prototype.makeIsOn = function (pred) {
          return function () {
              var ancestor = dom.ancestor(this.sc, pred);
              return !!ancestor && (ancestor === dom.ancestor(this.ec, pred));
          };
      };
      /**
       * @param {Function} pred
       * @return {Boolean}
       */
      WrappedRange.prototype.isLeftEdgeOf = function (pred) {
          if (!dom.isLeftEdgePoint(this.getStartPoint())) {
              return false;
          }
          var node = dom.ancestor(this.sc, pred);
          return node && dom.isLeftEdgeOf(this.sc, node);
      };
      /**
       * returns whether range was collapsed or not
       */
      WrappedRange.prototype.isCollapsed = function () {
          return this.sc === this.ec && this.so === this.eo;
      };
      /**
       * wrap inline nodes which children of body with paragraph
       *
       * @return {WrappedRange}
       */
      WrappedRange.prototype.wrapBodyInlineWithPara = function () {
          if (dom.isBodyContainer(this.sc) && dom.isEmpty(this.sc)) {
              this.sc.innerHTML = dom.emptyPara;
              return new WrappedRange(this.sc.firstChild, 0, this.sc.firstChild, 0);
          }
          /**
           * [workaround] firefox often create range on not visible point. so normalize here.
           *  - firefox: |<p>text</p>|
           *  - chrome: <p>|text|</p>
           */
          var rng = this.normalize();
          if (dom.isParaInline(this.sc) || dom.isPara(this.sc)) {
              return rng;
          }
          // find inline top ancestor
          var topAncestor;
          if (dom.isInline(rng.sc)) {
              var ancestors = dom.listAncestor(rng.sc, func.not(dom.isInline));
              topAncestor = lists.last(ancestors);
              if (!dom.isInline(topAncestor)) {
                  topAncestor = ancestors[ancestors.length - 2] || rng.sc.childNodes[rng.so];
              }
          }
          else {
              topAncestor = rng.sc.childNodes[rng.so > 0 ? rng.so - 1 : 0];
          }
          // siblings not in paragraph
          var inlineSiblings = dom.listPrev(topAncestor, dom.isParaInline).reverse();
          inlineSiblings = inlineSiblings.concat(dom.listNext(topAncestor.nextSibling, dom.isParaInline));
          // wrap with paragraph
          if (inlineSiblings.length) {
              var para = dom.wrap(lists.head(inlineSiblings), 'p');
              dom.appendChildNodes(para, lists.tail(inlineSiblings));
          }
          return this.normalize();
      };
      /**
       * insert node at current cursor
       *
       * @param {Node} node
       * @return {Node}
       */
      WrappedRange.prototype.insertNode = function (node) {
          var rng = this.wrapBodyInlineWithPara().deleteContents();
          var info = dom.splitPoint(rng.getStartPoint(), dom.isInline(node));
          if (info.rightNode) {
              info.rightNode.parentNode.insertBefore(node, info.rightNode);
          }
          else {
              info.container.appendChild(node);
          }
          return node;
      };
      /**
       * insert html at current cursor
       */
      WrappedRange.prototype.pasteHTML = function (markup) {
          var contentsContainer = $$1('<div></div>').html(markup)[0];
          var childNodes = lists.from(contentsContainer.childNodes);
          var rng = this.wrapBodyInlineWithPara().deleteContents();
          if (rng.so > 0) {
              childNodes = childNodes.reverse();
          }
          childNodes = childNodes.map(function (childNode) {
              return rng.insertNode(childNode);
          });
          if (rng.so > 0) {
              childNodes = childNodes.reverse();
          }
          return childNodes;
      };
      /**
       * returns text in range
       *
       * @return {String}
       */
      WrappedRange.prototype.toString = function () {
          var nativeRng = this.nativeRange();
          return env.isW3CRangeSupport ? nativeRng.toString() : nativeRng.text;
      };
      /**
       * returns range for word before cursor
       *
       * @param {Boolean} [findAfter] - find after cursor, default: false
       * @return {WrappedRange}
       */
      WrappedRange.prototype.getWordRange = function (findAfter) {
          var endPoint = this.getEndPoint();
          if (!dom.isCharPoint(endPoint)) {
              return this;
          }
          var startPoint = dom.prevPointUntil(endPoint, function (point) {
              return !dom.isCharPoint(point);
          });
          if (findAfter) {
              endPoint = dom.nextPointUntil(endPoint, function (point) {
                  return !dom.isCharPoint(point);
              });
          }
          return new WrappedRange(startPoint.node, startPoint.offset, endPoint.node, endPoint.offset);
      };
      /**
       * create offsetPath bookmark
       *
       * @param {Node} editable
       */
      WrappedRange.prototype.bookmark = function (editable) {
          return {
              s: {
                  path: dom.makeOffsetPath(editable, this.sc),
                  offset: this.so
              },
              e: {
                  path: dom.makeOffsetPath(editable, this.ec),
                  offset: this.eo
              }
          };
      };
      /**
       * create offsetPath bookmark base on paragraph
       *
       * @param {Node[]} paras
       */
      WrappedRange.prototype.paraBookmark = function (paras) {
          return {
              s: {
                  path: lists.tail(dom.makeOffsetPath(lists.head(paras), this.sc)),
                  offset: this.so
              },
              e: {
                  path: lists.tail(dom.makeOffsetPath(lists.last(paras), this.ec)),
                  offset: this.eo
              }
          };
      };
      /**
       * getClientRects
       * @return {Rect[]}
       */
      WrappedRange.prototype.getClientRects = function () {
          var nativeRng = this.nativeRange();
          return nativeRng.getClientRects();
      };
      return WrappedRange;
  }());
  /**
   * Data structure
   *  * BoundaryPoint: a point of dom tree
   *  * BoundaryPoints: two boundaryPoints corresponding to the start and the end of the Range
   *
   * See to http://www.w3.org/TR/DOM-Level-2-Traversal-Range/ranges.html#Level-2-Range-Position
   */
  var range = {
      /**
       * create Range Object From arguments or Browser Selection
       *
       * @param {Node} sc - start container
       * @param {Number} so - start offset
       * @param {Node} ec - end container
       * @param {Number} eo - end offset
       * @return {WrappedRange}
       */
      create: function (sc, so, ec, eo) {
          if (arguments.length === 4) {
              return new WrappedRange(sc, so, ec, eo);
          }
          else if (arguments.length === 2) { // collapsed
              ec = sc;
              eo = so;
              return new WrappedRange(sc, so, ec, eo);
          }
          else {
              var wrappedRange = this.createFromSelection();
              if (!wrappedRange && arguments.length === 1) {
                  wrappedRange = this.createFromNode(arguments[0]);
                  return wrappedRange.collapse(dom.emptyPara === arguments[0].innerHTML);
              }
              return wrappedRange;
          }
      },
      createFromSelection: function () {
          var sc, so, ec, eo;
          if (env.isW3CRangeSupport) {
              var selection = document.getSelection();
              if (!selection || selection.rangeCount === 0) {
                  return null;
              }
              else if (dom.isBody(selection.anchorNode)) {
                  // Firefox: returns entire body as range on initialization.
                  // We won't never need it.
                  return null;
              }
              var nativeRng = selection.getRangeAt(0);
              sc = nativeRng.startContainer;
              so = nativeRng.startOffset;
              ec = nativeRng.endContainer;
              eo = nativeRng.endOffset;
          }
          else { // IE8: TextRange
              var textRange = document.selection.createRange();
              var textRangeEnd = textRange.duplicate();
              textRangeEnd.collapse(false);
              var textRangeStart = textRange;
              textRangeStart.collapse(true);
              var startPoint = textRangeToPoint(textRangeStart, true);
              var endPoint = textRangeToPoint(textRangeEnd, false);
              // same visible point case: range was collapsed.
              if (dom.isText(startPoint.node) && dom.isLeftEdgePoint(startPoint) &&
                  dom.isTextNode(endPoint.node) && dom.isRightEdgePoint(endPoint) &&
                  endPoint.node.nextSibling === startPoint.node) {
                  startPoint = endPoint;
              }
              sc = startPoint.cont;
              so = startPoint.offset;
              ec = endPoint.cont;
              eo = endPoint.offset;
          }
          return new WrappedRange(sc, so, ec, eo);
      },
      /**
       * @method
       *
       * create WrappedRange from node
       *
       * @param {Node} node
       * @return {WrappedRange}
       */
      createFromNode: function (node) {
          var sc = node;
          var so = 0;
          var ec = node;
          var eo = dom.nodeLength(ec);
          // browsers can't target a picture or void node
          if (dom.isVoid(sc)) {
              so = dom.listPrev(sc).length - 1;
              sc = sc.parentNode;
          }
          if (dom.isBR(ec)) {
              eo = dom.listPrev(ec).length - 1;
              ec = ec.parentNode;
          }
          else if (dom.isVoid(ec)) {
              eo = dom.listPrev(ec).length;
              ec = ec.parentNode;
          }
          return this.create(sc, so, ec, eo);
      },
      /**
       * create WrappedRange from node after position
       *
       * @param {Node} node
       * @return {WrappedRange}
       */
      createFromNodeBefore: function (node) {
          return this.createFromNode(node).collapse(true);
      },
      /**
       * create WrappedRange from node after position
       *
       * @param {Node} node
       * @return {WrappedRange}
       */
      createFromNodeAfter: function (node) {
          return this.createFromNode(node).collapse();
      },
      /**
       * @method
       *
       * create WrappedRange from bookmark
       *
       * @param {Node} editable
       * @param {Object} bookmark
       * @return {WrappedRange}
       */
      createFromBookmark: function (editable, bookmark) {
          var sc = dom.fromOffsetPath(editable, bookmark.s.path);
          var so = bookmark.s.offset;
          var ec = dom.fromOffsetPath(editable, bookmark.e.path);
          var eo = bookmark.e.offset;
          return new WrappedRange(sc, so, ec, eo);
      },
      /**
       * @method
       *
       * create WrappedRange from paraBookmark
       *
       * @param {Object} bookmark
       * @param {Node[]} paras
       * @return {WrappedRange}
       */
      createFromParaBookmark: function (bookmark, paras) {
          var so = bookmark.s.offset;
          var eo = bookmark.e.offset;
          var sc = dom.fromOffsetPath(lists.head(paras), bookmark.s.path);
          var ec = dom.fromOffsetPath(lists.last(paras), bookmark.e.path);
          return new WrappedRange(sc, so, ec, eo);
      }
  };

  $$1.summernote = $$1.summernote || {
      lang: {}
  };
  $$1.extend($$1.summernote.lang, {
      'en-US': {
          font: {
              bold: 'Bold',
              italic: 'Italic',
              underline: 'Underline',
              clear: 'Remove Font Style',
              height: 'Line Height',
              name: 'Font Family',
              strikethrough: 'Strikethrough',
              subscript: 'Subscript',
              superscript: 'Superscript',
              size: 'Font Size'
          },
          image: {
              image: 'Picture',
              insert: 'Insert Image',
              resizeFull: 'Resize Full',
              resizeHalf: 'Resize Half',
              resizeQuarter: 'Resize Quarter',
              floatLeft: 'Float Left',
              floatRight: 'Float Right',
              floatNone: 'Float None',
              shapeRounded: 'Shape: Rounded',
              shapeCircle: 'Shape: Circle',
              shapeThumbnail: 'Shape: Thumbnail',
              shapeNone: 'Shape: None',
              dragImageHere: 'Drag image or text here',
              dropImage: 'Drop image or Text',
              selectFromFiles: 'Select from files',
              maximumFileSize: 'Maximum file size',
              maximumFileSizeError: 'Maximum file size exceeded.',
              url: 'Image URL',
              remove: 'Remove Image',
              original: 'Original'
          },
          video: {
              video: 'Video',
              videoLink: 'Video Link',
              insert: 'Insert Video',
              url: 'Video URL',
              providers: '(YouTube, Vimeo, Vine, Instagram, DailyMotion or Youku)'
          },
          link: {
              link: 'Link',
              insert: 'Insert Link',
              unlink: 'Unlink',
              edit: 'Edit',
              textToDisplay: 'Text to display',
              url: 'To what URL should this link go?',
              openInNewWindow: 'Open in new window'
          },
          table: {
              table: 'Table',
              addRowAbove: 'Add row above',
              addRowBelow: 'Add row below',
              addColLeft: 'Add column left',
              addColRight: 'Add column right',
              delRow: 'Delete row',
              delCol: 'Delete column',
              delTable: 'Delete table'
          },
          hr: {
              insert: 'Insert Horizontal Rule'
          },
          style: {
              style: 'Style',
              p: 'Normal',
              blockquote: 'Quote',
              pre: 'Code',
              h1: 'Header 1',
              h2: 'Header 2',
              h3: 'Header 3',
              h4: 'Header 4',
              h5: 'Header 5',
              h6: 'Header 6'
          },
          lists: {
              unordered: 'Unordered list',
              ordered: 'Ordered list'
          },
          options: {
              help: 'Help',
              fullscreen: 'Full Screen',
              codeview: 'Code View'
          },
          paragraph: {
              paragraph: 'Paragraph',
              outdent: 'Outdent',
              indent: 'Indent',
              left: 'Align left',
              center: 'Align center',
              right: 'Align right',
              justify: 'Justify full'
          },
          color: {
              recent: 'Recent Color',
              more: 'More Color',
              background: 'Background Color',
              foreground: 'Foreground Color',
              transparent: 'Transparent',
              setTransparent: 'Set transparent',
              reset: 'Reset',
              resetToDefault: 'Reset to default',
              cpSelect: 'Select'
          },
          shortcut: {
              shortcuts: 'Keyboard shortcuts',
              close: 'Close',
              textFormatting: 'Text formatting',
              action: 'Action',
              paragraphFormatting: 'Paragraph formatting',
              documentStyle: 'Document Style',
              extraKeys: 'Extra keys'
          },
          help: {
              'insertParagraph': 'Insert Paragraph',
              'undo': 'Undoes the last command',
              'redo': 'Redoes the last command',
              'tab': 'Tab',
              'untab': 'Untab',
              'bold': 'Set a bold style',
              'italic': 'Set a italic style',
              'underline': 'Set a underline style',
              'strikethrough': 'Set a strikethrough style',
              'removeFormat': 'Clean a style',
              'justifyLeft': 'Set left align',
              'justifyCenter': 'Set center align',
              'justifyRight': 'Set right align',
              'justifyFull': 'Set full align',
              'insertUnorderedList': 'Toggle unordered list',
              'insertOrderedList': 'Toggle ordered list',
              'outdent': 'Outdent on current paragraph',
              'indent': 'Indent on current paragraph',
              'formatPara': 'Change current block\'s format as a paragraph(P tag)',
              'formatH1': 'Change current block\'s format as H1',
              'formatH2': 'Change current block\'s format as H2',
              'formatH3': 'Change current block\'s format as H3',
              'formatH4': 'Change current block\'s format as H4',
              'formatH5': 'Change current block\'s format as H5',
              'formatH6': 'Change current block\'s format as H6',
              'insertHorizontalRule': 'Insert horizontal rule',
              'linkDialog.show': 'Show Link Dialog'
          },
          history: {
              undo: 'Undo',
              redo: 'Redo'
          },
          specialChar: {
              specialChar: 'SPECIAL CHARACTERS',
              select: 'Select Special characters'
          }
      }
  });

  var KEY_MAP = {
      'BACKSPACE': 8,
      'TAB': 9,
      'ENTER': 13,
      'SPACE': 32,
      'DELETE': 46,
      // Arrow
      'LEFT': 37,
      'UP': 38,
      'RIGHT': 39,
      'DOWN': 40,
      // Number: 0-9
      'NUM0': 48,
      'NUM1': 49,
      'NUM2': 50,
      'NUM3': 51,
      'NUM4': 52,
      'NUM5': 53,
      'NUM6': 54,
      'NUM7': 55,
      'NUM8': 56,
      // Alphabet: a-z
      'B': 66,
      'E': 69,
      'I': 73,
      'J': 74,
      'K': 75,
      'L': 76,
      'R': 82,
      'S': 83,
      'U': 85,
      'V': 86,
      'Y': 89,
      'Z': 90,
      'SLASH': 191,
      'LEFTBRACKET': 219,
      'BACKSLASH': 220,
      'RIGHTBRACKET': 221
  };
  /**
   * @class core.key
   *
   * Object for keycodes.
   *
   * @singleton
   * @alternateClassName key
   */
  var key = {
      /**
       * @method isEdit
       *
       * @param {Number} keyCode
       * @return {Boolean}
       */
      isEdit: function (keyCode) {
          return lists.contains([
              KEY_MAP.BACKSPACE,
              KEY_MAP.TAB,
              KEY_MAP.ENTER,
              KEY_MAP.SPACE,
              KEY_MAP.DELETE
          ], keyCode);
      },
      /**
       * @method isMove
       *
       * @param {Number} keyCode
       * @return {Boolean}
       */
      isMove: function (keyCode) {
          return lists.contains([
              KEY_MAP.LEFT,
              KEY_MAP.UP,
              KEY_MAP.RIGHT,
              KEY_MAP.DOWN
          ], keyCode);
      },
      /**
       * @property {Object} nameFromCode
       * @property {String} nameFromCode.8 "BACKSPACE"
       */
      nameFromCode: func.invertObject(KEY_MAP),
      code: KEY_MAP
  };

  /**
   * @method readFileAsDataURL
   *
   * read contents of file as representing URL
   *
   * @param {File} file
   * @return {Promise} - then: dataUrl
   */
  function readFileAsDataURL(file) {
      return $$1.Deferred(function (deferred) {
          $$1.extend(new FileReader(), {
              onload: function (e) {
                  var dataURL = e.target.result;
                  deferred.resolve(dataURL);
              },
              onerror: function (err) {
                  deferred.reject(err);
              }
          }).readAsDataURL(file);
      }).promise();
  }
  /**
   * @method createImage
   *
   * create `<image>` from url string
   *
   * @param {String} url
   * @return {Promise} - then: $image
   */
  function createImage(url) {
      return $$1.Deferred(function (deferred) {
          var $img = $$1('<img>');
          $img.one('load', function () {
              $img.off('error abort');
              deferred.resolve($img);
          }).one('error abort', function () {
              $img.off('load').detach();
              deferred.reject($img);
          }).css({
              display: 'none'
          }).appendTo(document.body).attr('src', url);
      }).promise();
  }

  var History = /** @class */ (function () {
      function History($editable) {
          this.stack = [];
          this.stackOffset = -1;
          this.$editable = $editable;
          this.editable = $editable[0];
      }
      History.prototype.makeSnapshot = function () {
          var rng = range.create(this.editable);
          var emptyBookmark = { s: { path: [], offset: 0 }, e: { path: [], offset: 0 } };
          return {
              contents: this.$editable.html(),
              bookmark: (rng ? rng.bookmark(this.editable) : emptyBookmark)
          };
      };
      History.prototype.applySnapshot = function (snapshot) {
          if (snapshot.contents !== null) {
              this.$editable.html(snapshot.contents);
          }
          if (snapshot.bookmark !== null) {
              range.createFromBookmark(this.editable, snapshot.bookmark).select();
          }
      };
      /**
      * @method rewind
      * Rewinds the history stack back to the first snapshot taken.
      * Leaves the stack intact, so that "Redo" can still be used.
      */
      History.prototype.rewind = function () {
          // Create snap shot if not yet recorded
          if (this.$editable.html() !== this.stack[this.stackOffset].contents) {
              this.recordUndo();
          }
          // Return to the first available snapshot.
          this.stackOffset = 0;
          // Apply that snapshot.
          this.applySnapshot(this.stack[this.stackOffset]);
      };
      /**
      *  @method commit
      *  Resets history stack, but keeps current editor's content.
      */
      History.prototype.commit = function () {
          // Clear the stack.
          this.stack = [];
          // Restore stackOffset to its original value.
          this.stackOffset = -1;
          // Record our first snapshot (of nothing).
          this.recordUndo();
      };
      /**
      * @method reset
      * Resets the history stack completely; reverting to an empty editor.
      */
      History.prototype.reset = function () {
          // Clear the stack.
          this.stack = [];
          // Restore stackOffset to its original value.
          this.stackOffset = -1;
          // Clear the editable area.
          this.$editable.html('');
          // Record our first snapshot (of nothing).
          this.recordUndo();
      };
      /**
       * undo
       */
      History.prototype.undo = function () {
          // Create snap shot if not yet recorded
          if (this.$editable.html() !== this.stack[this.stackOffset].contents) {
              this.recordUndo();
          }
          if (this.stackOffset > 0) {
              this.stackOffset--;
              this.applySnapshot(this.stack[this.stackOffset]);
          }
      };
      /**
       * redo
       */
      History.prototype.redo = function () {
          if (this.stack.length - 1 > this.stackOffset) {
              this.stackOffset++;
              this.applySnapshot(this.stack[this.stackOffset]);
          }
      };
      /**
       * recorded undo
       */
      History.prototype.recordUndo = function () {
          this.stackOffset++;
          // Wash out stack after stackOffset
          if (this.stack.length > this.stackOffset) {
              this.stack = this.stack.slice(0, this.stackOffset);
          }
          // Create new snapshot and push it to the end
          this.stack.push(this.makeSnapshot());
      };
      return History;
  }());

  var Style = /** @class */ (function () {
      function Style() {
      }
      /**
       * @method jQueryCSS
       *
       * [workaround] for old jQuery
       * passing an array of style properties to .css()
       * will result in an object of property-value pairs.
       * (compability with version < 1.9)
       *
       * @private
       * @param  {jQuery} $obj
       * @param  {Array} propertyNames - An array of one or more CSS properties.
       * @return {Object}
       */
      Style.prototype.jQueryCSS = function ($obj, propertyNames) {
          if (env.jqueryVersion < 1.9) {
              var result_1 = {};
              $$1.each(propertyNames, function (idx, propertyName) {
                  result_1[propertyName] = $obj.css(propertyName);
              });
              return result_1;
          }
          return $obj.css(propertyNames);
      };
      /**
       * returns style object from node
       *
       * @param {jQuery} $node
       * @return {Object}
       */
      Style.prototype.fromNode = function ($node) {
          var properties = ['font-family', 'font-size', 'text-align', 'list-style-type', 'line-height'];
          var styleInfo = this.jQueryCSS($node, properties) || {};
          styleInfo['font-size'] = parseInt(styleInfo['font-size'], 10);
          return styleInfo;
      };
      /**
       * paragraph level style
       *
       * @param {WrappedRange} rng
       * @param {Object} styleInfo
       */
      Style.prototype.stylePara = function (rng, styleInfo) {
          $$1.each(rng.nodes(dom.isPara, {
              includeAncestor: true
          }), function (idx, para) {
              $$1(para).css(styleInfo);
          });
      };
      /**
       * insert and returns styleNodes on range.
       *
       * @param {WrappedRange} rng
       * @param {Object} [options] - options for styleNodes
       * @param {String} [options.nodeName] - default: `SPAN`
       * @param {Boolean} [options.expandClosestSibling] - default: `false`
       * @param {Boolean} [options.onlyPartialContains] - default: `false`
       * @return {Node[]}
       */
      Style.prototype.styleNodes = function (rng, options) {
          rng = rng.splitText();
          var nodeName = (options && options.nodeName) || 'SPAN';
          var expandClosestSibling = !!(options && options.expandClosestSibling);
          var onlyPartialContains = !!(options && options.onlyPartialContains);
          if (rng.isCollapsed()) {
              return [rng.insertNode(dom.create(nodeName))];
          }
          var pred = dom.makePredByNodeName(nodeName);
          var nodes = rng.nodes(dom.isText, {
              fullyContains: true
          }).map(function (text) {
              return dom.singleChildAncestor(text, pred) || dom.wrap(text, nodeName);
          });
          if (expandClosestSibling) {
              if (onlyPartialContains) {
                  var nodesInRange_1 = rng.nodes();
                  // compose with partial contains predication
                  pred = func.and(pred, function (node) {
                      return lists.contains(nodesInRange_1, node);
                  });
              }
              return nodes.map(function (node) {
                  var siblings = dom.withClosestSiblings(node, pred);
                  var head = lists.head(siblings);
                  var tails = lists.tail(siblings);
                  $$1.each(tails, function (idx, elem) {
                      dom.appendChildNodes(head, elem.childNodes);
                      dom.remove(elem);
                  });
                  return lists.head(siblings);
              });
          }
          else {
              return nodes;
          }
      };
      /**
       * get current style on cursor
       *
       * @param {WrappedRange} rng
       * @return {Object} - object contains style properties.
       */
      Style.prototype.current = function (rng) {
          var $cont = $$1(!dom.isElement(rng.sc) ? rng.sc.parentNode : rng.sc);
          var styleInfo = this.fromNode($cont);
          // document.queryCommandState for toggle state
          // [workaround] prevent Firefox nsresult: "0x80004005 (NS_ERROR_FAILURE)"
          try {
              styleInfo = $$1.extend(styleInfo, {
                  'font-bold': document.queryCommandState('bold') ? 'bold' : 'normal',
                  'font-italic': document.queryCommandState('italic') ? 'italic' : 'normal',
                  'font-underline': document.queryCommandState('underline') ? 'underline' : 'normal',
                  'font-subscript': document.queryCommandState('subscript') ? 'subscript' : 'normal',
                  'font-superscript': document.queryCommandState('superscript') ? 'superscript' : 'normal',
                  'font-strikethrough': document.queryCommandState('strikethrough') ? 'strikethrough' : 'normal',
                  'font-family': document.queryCommandValue('fontname') || styleInfo['font-family']
              });
          }
          catch (e) { }
          // list-style-type to list-style(unordered, ordered)
          if (!rng.isOnList()) {
              styleInfo['list-style'] = 'none';
          }
          else {
              var orderedTypes = ['circle', 'disc', 'disc-leading-zero', 'square'];
              var isUnordered = $$1.inArray(styleInfo['list-style-type'], orderedTypes) > -1;
              styleInfo['list-style'] = isUnordered ? 'unordered' : 'ordered';
          }
          var para = dom.ancestor(rng.sc, dom.isPara);
          if (para && para.style['line-height']) {
              styleInfo['line-height'] = para.style.lineHeight;
          }
          else {
              var lineHeight = parseInt(styleInfo['line-height'], 10) / parseInt(styleInfo['font-size'], 10);
              styleInfo['line-height'] = lineHeight.toFixed(1);
          }
          styleInfo.anchor = rng.isOnAnchor() && dom.ancestor(rng.sc, dom.isAnchor);
          styleInfo.ancestors = dom.listAncestor(rng.sc, dom.isEditable);
          styleInfo.range = rng;
          return styleInfo;
      };
      return Style;
  }());

  var Bullet = /** @class */ (function () {
      function Bullet() {
      }
      /**
       * toggle ordered list
       */
      Bullet.prototype.insertOrderedList = function (editable) {
          this.toggleList('OL', editable);
      };
      /**
       * toggle unordered list
       */
      Bullet.prototype.insertUnorderedList = function (editable) {
          this.toggleList('UL', editable);
      };
      /**
       * indent
       */
      Bullet.prototype.indent = function (editable) {
          var _this = this;
          var rng = range.create(editable).wrapBodyInlineWithPara();
          var paras = rng.nodes(dom.isPara, { includeAncestor: true });
          var clustereds = lists.clusterBy(paras, func.peq2('parentNode'));
          $$1.each(clustereds, function (idx, paras) {
              var head = lists.head(paras);
              if (dom.isLi(head)) {
                  var previousList_1 = _this.findList(head.previousSibling);
                  if (previousList_1) {
                      paras
                          .map(function (para) { return previousList_1.appendChild(para); });
                  }
                  else {
                      _this.wrapList(paras, head.parentNode.nodeName);
                      paras
                          .map(function (para) { return para.parentNode; })
                          .map(function (para) { return _this.appendToPrevious(para); });
                  }
              }
              else {
                  $$1.each(paras, function (idx, para) {
                      $$1(para).css('marginLeft', function (idx, val) {
                          return (parseInt(val, 10) || 0) + 25;
                      });
                  });
              }
          });
          rng.select();
      };
      /**
       * outdent
       */
      Bullet.prototype.outdent = function (editable) {
          var _this = this;
          var rng = range.create(editable).wrapBodyInlineWithPara();
          var paras = rng.nodes(dom.isPara, { includeAncestor: true });
          var clustereds = lists.clusterBy(paras, func.peq2('parentNode'));
          $$1.each(clustereds, function (idx, paras) {
              var head = lists.head(paras);
              if (dom.isLi(head)) {
                  _this.releaseList([paras]);
              }
              else {
                  $$1.each(paras, function (idx, para) {
                      $$1(para).css('marginLeft', function (idx, val) {
                          val = (parseInt(val, 10) || 0);
                          return val > 25 ? val - 25 : '';
                      });
                  });
              }
          });
          rng.select();
      };
      /**
       * toggle list
       *
       * @param {String} listName - OL or UL
       */
      Bullet.prototype.toggleList = function (listName, editable) {
          var _this = this;
          var rng = range.create(editable).wrapBodyInlineWithPara();
          var paras = rng.nodes(dom.isPara, { includeAncestor: true });
          var bookmark = rng.paraBookmark(paras);
          var clustereds = lists.clusterBy(paras, func.peq2('parentNode'));
          // paragraph to list
          if (lists.find(paras, dom.isPurePara)) {
              var wrappedParas_1 = [];
              $$1.each(clustereds, function (idx, paras) {
                  wrappedParas_1 = wrappedParas_1.concat(_this.wrapList(paras, listName));
              });
              paras = wrappedParas_1;
              // list to paragraph or change list style
          }
          else {
              var diffLists = rng.nodes(dom.isList, {
                  includeAncestor: true
              }).filter(function (listNode) {
                  return !$$1.nodeName(listNode, listName);
              });
              if (diffLists.length) {
                  $$1.each(diffLists, function (idx, listNode) {
                      dom.replace(listNode, listName);
                  });
              }
              else {
                  paras = this.releaseList(clustereds, true);
              }
          }
          range.createFromParaBookmark(bookmark, paras).select();
      };
      /**
       * @param {Node[]} paras
       * @param {String} listName
       * @return {Node[]}
       */
      Bullet.prototype.wrapList = function (paras, listName) {
          var head = lists.head(paras);
          var last = lists.last(paras);
          var prevList = dom.isList(head.previousSibling) && head.previousSibling;
          var nextList = dom.isList(last.nextSibling) && last.nextSibling;
          var listNode = prevList || dom.insertAfter(dom.create(listName || 'UL'), last);
          // P to LI
          paras = paras.map(function (para) {
              return dom.isPurePara(para) ? dom.replace(para, 'LI') : para;
          });
          // append to list(<ul>, <ol>)
          dom.appendChildNodes(listNode, paras);
          if (nextList) {
              dom.appendChildNodes(listNode, lists.from(nextList.childNodes));
              dom.remove(nextList);
          }
          return paras;
      };
      /**
       * @method releaseList
       *
       * @param {Array[]} clustereds
       * @param {Boolean} isEscapseToBody
       * @return {Node[]}
       */
      Bullet.prototype.releaseList = function (clustereds, isEscapseToBody) {
          var _this = this;
          var releasedParas = [];
          $$1.each(clustereds, function (idx, paras) {
              var head = lists.head(paras);
              var last = lists.last(paras);
              var headList = isEscapseToBody ? dom.lastAncestor(head, dom.isList) : head.parentNode;
              var parentItem = headList.parentNode;
              if (headList.parentNode.nodeName === 'LI') {
                  paras.map(function (para) {
                      var newList = _this.findNextSiblings(para);
                      if (parentItem.nextSibling) {
                          parentItem.parentNode.insertBefore(para, parentItem.nextSibling);
                      }
                      else {
                          parentItem.parentNode.appendChild(para);
                      }
                      if (newList.length) {
                          _this.wrapList(newList, headList.nodeName);
                          para.appendChild(newList[0].parentNode);
                      }
                  });
                  if (headList.children.length === 0) {
                      parentItem.removeChild(headList);
                  }
                  if (parentItem.childNodes.length === 0) {
                      parentItem.parentNode.removeChild(parentItem);
                  }
              }
              else {
                  var lastList = headList.childNodes.length > 1 ? dom.splitTree(headList, {
                      node: last.parentNode,
                      offset: dom.position(last) + 1
                  }, {
                      isSkipPaddingBlankHTML: true
                  }) : null;
                  var middleList = dom.splitTree(headList, {
                      node: head.parentNode,
                      offset: dom.position(head)
                  }, {
                      isSkipPaddingBlankHTML: true
                  });
                  paras = isEscapseToBody ? dom.listDescendant(middleList, dom.isLi)
                      : lists.from(middleList.childNodes).filter(dom.isLi);
                  // LI to P
                  if (isEscapseToBody || !dom.isList(headList.parentNode)) {
                      paras = paras.map(function (para) {
                          return dom.replace(para, 'P');
                      });
                  }
                  $$1.each(lists.from(paras).reverse(), function (idx, para) {
                      dom.insertAfter(para, headList);
                  });
                  // remove empty lists
                  var rootLists = lists.compact([headList, middleList, lastList]);
                  $$1.each(rootLists, function (idx, rootList) {
                      var listNodes = [rootList].concat(dom.listDescendant(rootList, dom.isList));
                      $$1.each(listNodes.reverse(), function (idx, listNode) {
                          if (!dom.nodeLength(listNode)) {
                              dom.remove(listNode, true);
                          }
                      });
                  });
              }
              releasedParas = releasedParas.concat(paras);
          });
          return releasedParas;
      };
      /**
       * @method appendToPrevious
       *
       * Appends list to previous list item, if
       * none exist it wraps the list in a new list item.
       *
       * @param {HTMLNode} ListItem
       * @return {HTMLNode}
       */
      Bullet.prototype.appendToPrevious = function (node) {
          return node.previousSibling
              ? dom.appendChildNodes(node.previousSibling, [node])
              : this.wrapList([node], 'LI');
      };
      /**
       * @method findList
       *
       * Finds an existing list in list item
       *
       * @param {HTMLNode} ListItem
       * @return {Array[]}
       */
      Bullet.prototype.findList = function (node) {
          return node
              ? lists.find(node.children, function (child) { return ['OL', 'UL'].indexOf(child.nodeName) > -1; })
              : null;
      };
      /**
       * @method findNextSiblings
       *
       * Finds all list item siblings that follow it
       *
       * @param {HTMLNode} ListItem
       * @return {HTMLNode}
       */
      Bullet.prototype.findNextSiblings = function (node) {
          var siblings = [];
          while (node.nextSibling) {
              siblings.push(node.nextSibling);
              node = node.nextSibling;
          }
          return siblings;
      };
      return Bullet;
  }());

  /**
   * @class editing.Typing
   *
   * Typing
   *
   */
  var Typing = /** @class */ (function () {
      function Typing(context) {
          // a Bullet instance to toggle lists off
          this.bullet = new Bullet();
          this.options = context.options;
      }
      /**
       * insert tab
       *
       * @param {WrappedRange} rng
       * @param {Number} tabsize
       */
      Typing.prototype.insertTab = function (rng, tabsize) {
          var tab = dom.createText(new Array(tabsize + 1).join(dom.NBSP_CHAR));
          rng = rng.deleteContents();
          rng.insertNode(tab, true);
          rng = range.create(tab, tabsize);
          rng.select();
      };
      /**
       * insert paragraph
       *
       * @param {jQuery} $editable
       * @param {WrappedRange} rng Can be used in unit tests to "mock" the range
       *
       * blockquoteBreakingLevel
       *   0 - No break, the new paragraph remains inside the quote
       *   1 - Break the first blockquote in the ancestors list
       *   2 - Break all blockquotes, so that the new paragraph is not quoted (this is the default)
       */
      Typing.prototype.insertParagraph = function (editable, rng) {
          rng = rng || range.create(editable);
          // deleteContents on range.
          rng = rng.deleteContents();
          // Wrap range if it needs to be wrapped by paragraph
          rng = rng.wrapBodyInlineWithPara();
          // finding paragraph
          var splitRoot = dom.ancestor(rng.sc, dom.isPara);
          var nextPara;
          // on paragraph: split paragraph
          if (splitRoot) {
              // if it is an empty line with li
              if (dom.isEmpty(splitRoot) && dom.isLi(splitRoot)) {
                  // toogle UL/OL and escape
                  this.bullet.toggleList(splitRoot.parentNode.nodeName);
                  return;
              }
              else {
                  var blockquote = null;
                  if (this.options.blockquoteBreakingLevel === 1) {
                      blockquote = dom.ancestor(splitRoot, dom.isBlockquote);
                  }
                  else if (this.options.blockquoteBreakingLevel === 2) {
                      blockquote = dom.lastAncestor(splitRoot, dom.isBlockquote);
                  }
                  if (blockquote) {
                      // We're inside a blockquote and options ask us to break it
                      nextPara = $$1(dom.emptyPara)[0];
                      // If the split is right before a <br>, remove it so that there's no "empty line"
                      // after the split in the new blockquote created
                      if (dom.isRightEdgePoint(rng.getStartPoint()) && dom.isBR(rng.sc.nextSibling)) {
                          $$1(rng.sc.nextSibling).remove();
                      }
                      var split = dom.splitTree(blockquote, rng.getStartPoint(), { isDiscardEmptySplits: true });
                      if (split) {
                          split.parentNode.insertBefore(nextPara, split);
                      }
                      else {
                          dom.insertAfter(nextPara, blockquote); // There's no split if we were at the end of the blockquote
                      }
                  }
                  else {
                      nextPara = dom.splitTree(splitRoot, rng.getStartPoint());
                      // not a blockquote, just insert the paragraph
                      var emptyAnchors = dom.listDescendant(splitRoot, dom.isEmptyAnchor);
                      emptyAnchors = emptyAnchors.concat(dom.listDescendant(nextPara, dom.isEmptyAnchor));
                      $$1.each(emptyAnchors, function (idx, anchor) {
                          dom.remove(anchor);
                      });
                      // replace empty heading, pre or custom-made styleTag with P tag
                      if ((dom.isHeading(nextPara) || dom.isPre(nextPara) || dom.isCustomStyleTag(nextPara)) && dom.isEmpty(nextPara)) {
                          nextPara = dom.replace(nextPara, 'p');
                      }
                  }
              }
              // no paragraph: insert empty paragraph
          }
          else {
              var next = rng.sc.childNodes[rng.so];
              nextPara = $$1(dom.emptyPara)[0];
              if (next) {
                  rng.sc.insertBefore(nextPara, next);
              }
              else {
                  rng.sc.appendChild(nextPara);
              }
          }
          range.create(nextPara, 0).normalize().select().scrollIntoView(editable);
      };
      return Typing;
  }());

  /**
   * @class Create a virtual table to create what actions to do in change.
   * @param {object} startPoint Cell selected to apply change.
   * @param {enum} where  Where change will be applied Row or Col. Use enum: TableResultAction.where
   * @param {enum} action Action to be applied. Use enum: TableResultAction.requestAction
   * @param {object} domTable Dom element of table to make changes.
   */
  var TableResultAction = function (startPoint, where, action, domTable) {
      var _startPoint = { 'colPos': 0, 'rowPos': 0 };
      var _virtualTable = [];
      var _actionCellList = [];
      /// ///////////////////////////////////////////
      // Private functions
      /// ///////////////////////////////////////////
      /**
       * Set the startPoint of action.
       */
      function setStartPoint() {
          if (!startPoint || !startPoint.tagName || (startPoint.tagName.toLowerCase() !== 'td' && startPoint.tagName.toLowerCase() !== 'th')) {
              console.error('Impossible to identify start Cell point.', startPoint);
              return;
          }
          _startPoint.colPos = startPoint.cellIndex;
          if (!startPoint.parentElement || !startPoint.parentElement.tagName || startPoint.parentElement.tagName.toLowerCase() !== 'tr') {
              console.error('Impossible to identify start Row point.', startPoint);
              return;
          }
          _startPoint.rowPos = startPoint.parentElement.rowIndex;
      }
      /**
       * Define virtual table position info object.
       *
       * @param {int} rowIndex Index position in line of virtual table.
       * @param {int} cellIndex Index position in column of virtual table.
       * @param {object} baseRow Row affected by this position.
       * @param {object} baseCell Cell affected by this position.
       * @param {bool} isSpan Inform if it is an span cell/row.
       */
      function setVirtualTablePosition(rowIndex, cellIndex, baseRow, baseCell, isRowSpan, isColSpan, isVirtualCell) {
          var objPosition = {
              'baseRow': baseRow,
              'baseCell': baseCell,
              'isRowSpan': isRowSpan,
              'isColSpan': isColSpan,
              'isVirtual': isVirtualCell
          };
          if (!_virtualTable[rowIndex]) {
              _virtualTable[rowIndex] = [];
          }
          _virtualTable[rowIndex][cellIndex] = objPosition;
      }
      /**
       * Create action cell object.
       *
       * @param {object} virtualTableCellObj Object of specific position on virtual table.
       * @param {enum} resultAction Action to be applied in that item.
       */
      function getActionCell(virtualTableCellObj, resultAction, virtualRowPosition, virtualColPosition) {
          return {
              'baseCell': virtualTableCellObj.baseCell,
              'action': resultAction,
              'virtualTable': {
                  'rowIndex': virtualRowPosition,
                  'cellIndex': virtualColPosition
              }
          };
      }
      /**
       * Recover free index of row to append Cell.
       *
       * @param {int} rowIndex Index of row to find free space.
       * @param {int} cellIndex Index of cell to find free space in table.
       */
      function recoverCellIndex(rowIndex, cellIndex) {
          if (!_virtualTable[rowIndex]) {
              return cellIndex;
          }
          if (!_virtualTable[rowIndex][cellIndex]) {
              return cellIndex;
          }
          var newCellIndex = cellIndex;
          while (_virtualTable[rowIndex][newCellIndex]) {
              newCellIndex++;
              if (!_virtualTable[rowIndex][newCellIndex]) {
                  return newCellIndex;
              }
          }
      }
      /**
       * Recover info about row and cell and add information to virtual table.
       *
       * @param {object} row Row to recover information.
       * @param {object} cell Cell to recover information.
       */
      function addCellInfoToVirtual(row, cell) {
          var cellIndex = recoverCellIndex(row.rowIndex, cell.cellIndex);
          var cellHasColspan = (cell.colSpan > 1);
          var cellHasRowspan = (cell.rowSpan > 1);
          var isThisSelectedCell = (row.rowIndex === _startPoint.rowPos && cell.cellIndex === _startPoint.colPos);
          setVirtualTablePosition(row.rowIndex, cellIndex, row, cell, cellHasRowspan, cellHasColspan, false);
          // Add span rows to virtual Table.
          var rowspanNumber = cell.attributes.rowSpan ? parseInt(cell.attributes.rowSpan.value, 10) : 0;
          if (rowspanNumber > 1) {
              for (var rp = 1; rp < rowspanNumber; rp++) {
                  var rowspanIndex = row.rowIndex + rp;
                  adjustStartPoint(rowspanIndex, cellIndex, cell, isThisSelectedCell);
                  setVirtualTablePosition(rowspanIndex, cellIndex, row, cell, true, cellHasColspan, true);
              }
          }
          // Add span cols to virtual table.
          var colspanNumber = cell.attributes.colSpan ? parseInt(cell.attributes.colSpan.value, 10) : 0;
          if (colspanNumber > 1) {
              for (var cp = 1; cp < colspanNumber; cp++) {
                  var cellspanIndex = recoverCellIndex(row.rowIndex, (cellIndex + cp));
                  adjustStartPoint(row.rowIndex, cellspanIndex, cell, isThisSelectedCell);
                  setVirtualTablePosition(row.rowIndex, cellspanIndex, row, cell, cellHasRowspan, true, true);
              }
          }
      }
      /**
       * Process validation and adjust of start point if needed
       *
       * @param {int} rowIndex
       * @param {int} cellIndex
       * @param {object} cell
       * @param {bool} isSelectedCell
       */
      function adjustStartPoint(rowIndex, cellIndex, cell, isSelectedCell) {
          if (rowIndex === _startPoint.rowPos && _startPoint.colPos >= cell.cellIndex && cell.cellIndex <= cellIndex && !isSelectedCell) {
              _startPoint.colPos++;
          }
      }
      /**
       * Create virtual table of cells with all cells, including span cells.
       */
      function createVirtualTable() {
          var rows = domTable.rows;
          for (var rowIndex = 0; rowIndex < rows.length; rowIndex++) {
              var cells = rows[rowIndex].cells;
              for (var cellIndex = 0; cellIndex < cells.length; cellIndex++) {
                  addCellInfoToVirtual(rows[rowIndex], cells[cellIndex]);
              }
          }
      }
      /**
       * Get action to be applied on the cell.
       *
       * @param {object} cell virtual table cell to apply action
       */
      function getDeleteResultActionToCell(cell) {
          switch (where) {
              case TableResultAction.where.Column:
                  if (cell.isColSpan) {
                      return TableResultAction.resultAction.SubtractSpanCount;
                  }
                  break;
              case TableResultAction.where.Row:
                  if (!cell.isVirtual && cell.isRowSpan) {
                      return TableResultAction.resultAction.AddCell;
                  }
                  else if (cell.isRowSpan) {
                      return TableResultAction.resultAction.SubtractSpanCount;
                  }
                  break;
          }
          return TableResultAction.resultAction.RemoveCell;
      }
      /**
       * Get action to be applied on the cell.
       *
       * @param {object} cell virtual table cell to apply action
       */
      function getAddResultActionToCell(cell) {
          switch (where) {
              case TableResultAction.where.Column:
                  if (cell.isColSpan) {
                      return TableResultAction.resultAction.SumSpanCount;
                  }
                  else if (cell.isRowSpan && cell.isVirtual) {
                      return TableResultAction.resultAction.Ignore;
                  }
                  break;
              case TableResultAction.where.Row:
                  if (cell.isRowSpan) {
                      return TableResultAction.resultAction.SumSpanCount;
                  }
                  else if (cell.isColSpan && cell.isVirtual) {
                      return TableResultAction.resultAction.Ignore;
                  }
                  break;
          }
          return TableResultAction.resultAction.AddCell;
      }
      function init() {
          setStartPoint();
          createVirtualTable();
      }
      /// ///////////////////////////////////////////
      // Public functions
      /// ///////////////////////////////////////////
      /**
       * Recover array os what to do in table.
       */
      this.getActionList = function () {
          var fixedRow = (where === TableResultAction.where.Row) ? _startPoint.rowPos : -1;
          var fixedCol = (where === TableResultAction.where.Column) ? _startPoint.colPos : -1;
          var actualPosition = 0;
          var canContinue = true;
          while (canContinue) {
              var rowPosition = (fixedRow >= 0) ? fixedRow : actualPosition;
              var colPosition = (fixedCol >= 0) ? fixedCol : actualPosition;
              var row = _virtualTable[rowPosition];
              if (!row) {
                  canContinue = false;
                  return _actionCellList;
              }
              var cell = row[colPosition];
              if (!cell) {
                  canContinue = false;
                  return _actionCellList;
              }
              // Define action to be applied in this cell
              var resultAction = TableResultAction.resultAction.Ignore;
              switch (action) {
                  case TableResultAction.requestAction.Add:
                      resultAction = getAddResultActionToCell(cell);
                      break;
                  case TableResultAction.requestAction.Delete:
                      resultAction = getDeleteResultActionToCell(cell);
                      break;
              }
              _actionCellList.push(getActionCell(cell, resultAction, rowPosition, colPosition));
              actualPosition++;
          }
          return _actionCellList;
      };
      init();
  };
  /**
  *
  * Where action occours enum.
  */
  TableResultAction.where = { 'Row': 0, 'Column': 1 };
  /**
  *
  * Requested action to apply enum.
  */
  TableResultAction.requestAction = { 'Add': 0, 'Delete': 1 };
  /**
  *
  * Result action to be executed enum.
  */
  TableResultAction.resultAction = { 'Ignore': 0, 'SubtractSpanCount': 1, 'RemoveCell': 2, 'AddCell': 3, 'SumSpanCount': 4 };
  /**
   *
   * @class editing.Table
   *
   * Table
   *
   */
  var Table = /** @class */ (function () {
      function Table() {
      }
      /**
       * handle tab key
       *
       * @param {WrappedRange} rng
       * @param {Boolean} isShift
       */
      Table.prototype.tab = function (rng, isShift) {
          var cell = dom.ancestor(rng.commonAncestor(), dom.isCell);
          var table = dom.ancestor(cell, dom.isTable);
          var cells = dom.listDescendant(table, dom.isCell);
          var nextCell = lists[isShift ? 'prev' : 'next'](cells, cell);
          if (nextCell) {
              range.create(nextCell, 0).select();
          }
      };
      /**
       * Add a new row
       *
       * @param {WrappedRange} rng
       * @param {String} position (top/bottom)
       * @return {Node}
       */
      Table.prototype.addRow = function (rng, position) {
          var cell = dom.ancestor(rng.commonAncestor(), dom.isCell);
          var currentTr = $$1(cell).closest('tr');
          var trAttributes = this.recoverAttributes(currentTr);
          var html = $$1('<tr' + trAttributes + '></tr>');
          var vTable = new TableResultAction(cell, TableResultAction.where.Row, TableResultAction.requestAction.Add, $$1(currentTr).closest('table')[0]);
          var actions = vTable.getActionList();
          for (var idCell = 0; idCell < actions.length; idCell++) {
              var currentCell = actions[idCell];
              var tdAttributes = this.recoverAttributes(currentCell.baseCell);
              switch (currentCell.action) {
                  case TableResultAction.resultAction.AddCell:
                      html.append('<td' + tdAttributes + '>' + dom.blank + '</td>');
                      break;
                  case TableResultAction.resultAction.SumSpanCount:
                      if (position === 'top') {
                          var baseCellTr = currentCell.baseCell.parent;
                          var isTopFromRowSpan = (!baseCellTr ? 0 : currentCell.baseCell.closest('tr').rowIndex) <= currentTr[0].rowIndex;
                          if (isTopFromRowSpan) {
                              var newTd = $$1('<div></div>').append($$1('<td' + tdAttributes + '>' + dom.blank + '</td>').removeAttr('rowspan')).html();
                              html.append(newTd);
                              break;
                          }
                      }
                      var rowspanNumber = parseInt(currentCell.baseCell.rowSpan, 10);
                      rowspanNumber++;
                      currentCell.baseCell.setAttribute('rowSpan', rowspanNumber);
                      break;
              }
          }
          if (position === 'top') {
              currentTr.before(html);
          }
          else {
              var cellHasRowspan = (cell.rowSpan > 1);
              if (cellHasRowspan) {
                  var lastTrIndex = currentTr[0].rowIndex + (cell.rowSpan - 2);
                  $$1($$1(currentTr).parent().find('tr')[lastTrIndex]).after($$1(html));
                  return;
              }
              currentTr.after(html);
          }
      };
      /**
       * Add a new col
       *
       * @param {WrappedRange} rng
       * @param {String} position (left/right)
       * @return {Node}
       */
      Table.prototype.addCol = function (rng, position) {
          var cell = dom.ancestor(rng.commonAncestor(), dom.isCell);
          var row = $$1(cell).closest('tr');
          var rowsGroup = $$1(row).siblings();
          rowsGroup.push(row);
          var vTable = new TableResultAction(cell, TableResultAction.where.Column, TableResultAction.requestAction.Add, $$1(row).closest('table')[0]);
          var actions = vTable.getActionList();
          for (var actionIndex = 0; actionIndex < actions.length; actionIndex++) {
              var currentCell = actions[actionIndex];
              var tdAttributes = this.recoverAttributes(currentCell.baseCell);
              switch (currentCell.action) {
                  case TableResultAction.resultAction.AddCell:
                      if (position === 'right') {
                          $$1(currentCell.baseCell).after('<td' + tdAttributes + '>' + dom.blank + '</td>');
                      }
                      else {
                          $$1(currentCell.baseCell).before('<td' + tdAttributes + '>' + dom.blank + '</td>');
                      }
                      break;
                  case TableResultAction.resultAction.SumSpanCount:
                      if (position === 'right') {
                          var colspanNumber = parseInt(currentCell.baseCell.colSpan, 10);
                          colspanNumber++;
                          currentCell.baseCell.setAttribute('colSpan', colspanNumber);
                      }
                      else {
                          $$1(currentCell.baseCell).before('<td' + tdAttributes + '>' + dom.blank + '</td>');
                      }
                      break;
              }
          }
      };
      /*
      * Copy attributes from element.
      *
      * @param {object} Element to recover attributes.
      * @return {string} Copied string elements.
      */
      Table.prototype.recoverAttributes = function (el) {
          var resultStr = '';
          if (!el) {
              return resultStr;
          }
          var attrList = el.attributes || [];
          for (var i = 0; i < attrList.length; i++) {
              if (attrList[i].name.toLowerCase() === 'id') {
                  continue;
              }
              if (attrList[i].specified) {
                  resultStr += ' ' + attrList[i].name + '=\'' + attrList[i].value + '\'';
              }
          }
          return resultStr;
      };
      /**
       * Delete current row
       *
       * @param {WrappedRange} rng
       * @return {Node}
       */
      Table.prototype.deleteRow = function (rng) {
          var cell = dom.ancestor(rng.commonAncestor(), dom.isCell);
          var row = $$1(cell).closest('tr');
          var cellPos = row.children('td, th').index($$1(cell));
          var rowPos = row[0].rowIndex;
          var vTable = new TableResultAction(cell, TableResultAction.where.Row, TableResultAction.requestAction.Delete, $$1(row).closest('table')[0]);
          var actions = vTable.getActionList();
          for (var actionIndex = 0; actionIndex < actions.length; actionIndex++) {
              if (!actions[actionIndex]) {
                  continue;
              }
              var baseCell = actions[actionIndex].baseCell;
              var virtualPosition = actions[actionIndex].virtualTable;
              var hasRowspan = (baseCell.rowSpan && baseCell.rowSpan > 1);
              var rowspanNumber = (hasRowspan) ? parseInt(baseCell.rowSpan, 10) : 0;
              switch (actions[actionIndex].action) {
                  case TableResultAction.resultAction.Ignore:
                      continue;
                  case TableResultAction.resultAction.AddCell:
                      var nextRow = row.next('tr')[0];
                      if (!nextRow) {
                          continue;
                      }
                      var cloneRow = row[0].cells[cellPos];
                      if (hasRowspan) {
                          if (rowspanNumber > 2) {
                              rowspanNumber--;
                              nextRow.insertBefore(cloneRow, nextRow.cells[cellPos]);
                              nextRow.cells[cellPos].setAttribute('rowSpan', rowspanNumber);
                              nextRow.cells[cellPos].innerHTML = '';
                          }
                          else if (rowspanNumber === 2) {
                              nextRow.insertBefore(cloneRow, nextRow.cells[cellPos]);
                              nextRow.cells[cellPos].removeAttribute('rowSpan');
                              nextRow.cells[cellPos].innerHTML = '';
                          }
                      }
                      continue;
                  case TableResultAction.resultAction.SubtractSpanCount:
                      if (hasRowspan) {
                          if (rowspanNumber > 2) {
                              rowspanNumber--;
                              baseCell.setAttribute('rowSpan', rowspanNumber);
                              if (virtualPosition.rowIndex !== rowPos && baseCell.cellIndex === cellPos) {
                                  baseCell.innerHTML = '';
                              }
                          }
                          else if (rowspanNumber === 2) {
                              baseCell.removeAttribute('rowSpan');
                              if (virtualPosition.rowIndex !== rowPos && baseCell.cellIndex === cellPos) {
                                  baseCell.innerHTML = '';
                              }
                          }
                      }
                      continue;
                  case TableResultAction.resultAction.RemoveCell:
                      // Do not need remove cell because row will be deleted.
                      continue;
              }
          }
          row.remove();
      };
      /**
       * Delete current col
       *
       * @param {WrappedRange} rng
       * @return {Node}
       */
      Table.prototype.deleteCol = function (rng) {
          var cell = dom.ancestor(rng.commonAncestor(), dom.isCell);
          var row = $$1(cell).closest('tr');
          var cellPos = row.children('td, th').index($$1(cell));
          var vTable = new TableResultAction(cell, TableResultAction.where.Column, TableResultAction.requestAction.Delete, $$1(row).closest('table')[0]);
          var actions = vTable.getActionList();
          for (var actionIndex = 0; actionIndex < actions.length; actionIndex++) {
              if (!actions[actionIndex]) {
                  continue;
              }
              switch (actions[actionIndex].action) {
                  case TableResultAction.resultAction.Ignore:
                      continue;
                  case TableResultAction.resultAction.SubtractSpanCount:
                      var baseCell = actions[actionIndex].baseCell;
                      var hasColspan = (baseCell.colSpan && baseCell.colSpan > 1);
                      if (hasColspan) {
                          var colspanNumber = (baseCell.colSpan) ? parseInt(baseCell.colSpan, 10) : 0;
                          if (colspanNumber > 2) {
                              colspanNumber--;
                              baseCell.setAttribute('colSpan', colspanNumber);
                              if (baseCell.cellIndex === cellPos) {
                                  baseCell.innerHTML = '';
                              }
                          }
                          else if (colspanNumber === 2) {
                              baseCell.removeAttribute('colSpan');
                              if (baseCell.cellIndex === cellPos) {
                                  baseCell.innerHTML = '';
                              }
                          }
                      }
                      continue;
                  case TableResultAction.resultAction.RemoveCell:
                      dom.remove(actions[actionIndex].baseCell, true);
                      continue;
              }
          }
      };
      /**
       * create empty table element
       *
       * @param {Number} rowCount
       * @param {Number} colCount
       * @return {Node}
       */
      Table.prototype.createTable = function (colCount, rowCount, options) {
          var tds = [];
          var tdHTML;
          for (var idxCol = 0; idxCol < colCount; idxCol++) {
              tds.push('<td>' + dom.blank + '</td>');
          }
          tdHTML = tds.join('');
          var trs = [];
          var trHTML;
          for (var idxRow = 0; idxRow < rowCount; idxRow++) {
              trs.push('<tr>' + tdHTML + '</tr>');
          }
          trHTML = trs.join('');
          var $table = $$1('<table>' + trHTML + '</table>');
          if (options && options.tableClassName) {
              $table.addClass(options.tableClassName);
          }
          return $table[0];
      };
      /**
       * Delete current table
       *
       * @param {WrappedRange} rng
       * @return {Node}
       */
      Table.prototype.deleteTable = function (rng) {
          var cell = dom.ancestor(rng.commonAncestor(), dom.isCell);
          $$1(cell).closest('table').remove();
      };
      return Table;
  }());

  var KEY_BOGUS = 'bogus';
  /**
   * @class Editor
   */
  var Editor = /** @class */ (function () {
      function Editor(context) {
          var _this = this;
          this.context = context;
          this.$note = context.layoutInfo.note;
          this.$editor = context.layoutInfo.editor;
          this.$editable = context.layoutInfo.editable;
          this.options = context.options;
          this.lang = this.options.langInfo;
          this.editable = this.$editable[0];
          this.lastRange = null;
          this.style = new Style();
          this.table = new Table();
          this.typing = new Typing(context);
          this.bullet = new Bullet();
          this.history = new History(this.$editable);
          this.context.memo('help.undo', this.lang.help.undo);
          this.context.memo('help.redo', this.lang.help.redo);
          this.context.memo('help.tab', this.lang.help.tab);
          this.context.memo('help.untab', this.lang.help.untab);
          this.context.memo('help.insertParagraph', this.lang.help.insertParagraph);
          this.context.memo('help.insertOrderedList', this.lang.help.insertOrderedList);
          this.context.memo('help.insertUnorderedList', this.lang.help.insertUnorderedList);
          this.context.memo('help.indent', this.lang.help.indent);
          this.context.memo('help.outdent', this.lang.help.outdent);
          this.context.memo('help.formatPara', this.lang.help.formatPara);
          this.context.memo('help.insertHorizontalRule', this.lang.help.insertHorizontalRule);
          this.context.memo('help.fontName', this.lang.help.fontName);
          // native commands(with execCommand), generate function for execCommand
          var commands = [
              'bold', 'italic', 'underline', 'strikethrough', 'superscript', 'subscript',
              'justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull',
              'formatBlock', 'removeFormat', 'backColor'
          ];
          for (var idx = 0, len = commands.length; idx < len; idx++) {
              this[commands[idx]] = (function (sCmd) {
                  return function (value) {
                      _this.beforeCommand();
                      document.execCommand(sCmd, false, value);
                      _this.afterCommand(true);
                  };
              })(commands[idx]);
              this.context.memo('help.' + commands[idx], this.lang.help[commands[idx]]);
          }
          this.fontName = this.wrapCommand(function (value) {
              return _this.fontStyling('font-family', "\'" + value + "\'");
          });
          this.fontSize = this.wrapCommand(function (value) {
              return _this.fontStyling('font-size', value + 'px');
          });
          for (var idx = 1; idx <= 6; idx++) {
              this['formatH' + idx] = (function (idx) {
                  return function () {
                      _this.formatBlock('H' + idx);
                  };
              })(idx);
              this.context.memo('help.formatH' + idx, this.lang.help['formatH' + idx]);
          }
          this.insertParagraph = this.wrapCommand(function () {
              _this.typing.insertParagraph(_this.editable);
          });
          this.insertOrderedList = this.wrapCommand(function () {
              _this.bullet.insertOrderedList(_this.editable);
          });
          this.insertUnorderedList = this.wrapCommand(function () {
              _this.bullet.insertUnorderedList(_this.editable);
          });
          this.indent = this.wrapCommand(function () {
              _this.bullet.indent(_this.editable);
          });
          this.outdent = this.wrapCommand(function () {
              _this.bullet.outdent(_this.editable);
          });
          /**
           * insertNode
           * insert node
           * @param {Node} node
           */
          this.insertNode = this.wrapCommand(function (node) {
              if (_this.isLimited($$1(node).text().length)) {
                  return;
              }
              var rng = _this.createRange();
              rng.insertNode(node);
              range.createFromNodeAfter(node).select();
          });
          /**
           * insert text
           * @param {String} text
           */
          this.insertText = this.wrapCommand(function (text) {
              if (_this.isLimited(text.length)) {
                  return;
              }
              var rng = _this.createRange();
              var textNode = rng.insertNode(dom.createText(text));
              range.create(textNode, dom.nodeLength(textNode)).select();
          });
          /**
           * paste HTML
           * @param {String} markup
           */
          this.pasteHTML = this.wrapCommand(function (markup) {
              if (_this.isLimited(markup.length)) {
                  return;
              }
              var contents = _this.createRange().pasteHTML(markup);
              range.createFromNodeAfter(lists.last(contents)).select();
          });
          /**
           * formatBlock
           *
           * @param {String} tagName
           */
          this.formatBlock = this.wrapCommand(function (tagName, $target) {
              var onApplyCustomStyle = _this.options.callbacks.onApplyCustomStyle;
              if (onApplyCustomStyle) {
                  onApplyCustomStyle.call(_this, $target, _this.context, _this.onFormatBlock);
              }
              else {
                  _this.onFormatBlock(tagName, $target);
              }
          });
          /**
           * insert horizontal rule
           */
          this.insertHorizontalRule = this.wrapCommand(function () {
              var hrNode = _this.createRange().insertNode(dom.create('HR'));
              if (hrNode.nextSibling) {
                  range.create(hrNode.nextSibling, 0).normalize().select();
              }
          });
          /**
           * lineHeight
           * @param {String} value
           */
          this.lineHeight = this.wrapCommand(function (value) {
              _this.style.stylePara(_this.createRange(), {
                  lineHeight: value
              });
          });
          /**
           * create link (command)
           *
           * @param {Object} linkInfo
           */
          this.createLink = this.wrapCommand(function (linkInfo) {
              var linkUrl = linkInfo.url;
              var linkText = linkInfo.text;
              var isNewWindow = linkInfo.isNewWindow;
              var rng = linkInfo.range || _this.createRange();
              var additionalTextLength = linkText.length - rng.toString().length;
              if (additionalTextLength > 0 && _this.isLimited(additionalTextLength)) {
                  return;
              }
              var isTextChanged = rng.toString() !== linkText;
              // handle spaced urls from input
              if (typeof linkUrl === 'string') {
                  linkUrl = linkUrl.trim();
              }
              if (_this.options.onCreateLink) {
                  linkUrl = _this.options.onCreateLink(linkUrl);
              }
              else {
                  // if url is not relative,
                  if (!/^\.?\/(.*)/.test(linkUrl)) {
                      // if url doesn't match an URL schema, set http:// as default
                      linkUrl = /^[A-Za-z][A-Za-z0-9+-.]*\:[\/\/]?/.test(linkUrl)
                          ? linkUrl : 'http://' + linkUrl;
                  }
              }
              var anchors = [];
              if (isTextChanged) {
                  rng = rng.deleteContents();
                  var anchor = rng.insertNode($$1('<A>' + linkText + '</A>')[0]);
                  anchors.push(anchor);
              }
              else {
                  anchors = _this.style.styleNodes(rng, {
                      nodeName: 'A',
                      expandClosestSibling: true,
                      onlyPartialContains: true
                  });
              }
              $$1.each(anchors, function (idx, anchor) {
                  $$1(anchor).attr('href', linkUrl);
                  if (isNewWindow) {
                      $$1(anchor).attr('target', '_blank');
                  }
                  else {
                      $$1(anchor).removeAttr('target');
                  }
              });
              var startRange = range.createFromNodeBefore(lists.head(anchors));
              var startPoint = startRange.getStartPoint();
              var endRange = range.createFromNodeAfter(lists.last(anchors));
              var endPoint = endRange.getEndPoint();
              range.create(startPoint.node, startPoint.offset, endPoint.node, endPoint.offset).select();
          });
          /**
           * setting color
           *
           * @param {Object} sObjColor  color code
           * @param {String} sObjColor.foreColor foreground color
           * @param {String} sObjColor.backColor background color
           */
          this.color = this.wrapCommand(function (colorInfo) {
              var foreColor = colorInfo.foreColor;
              var backColor = colorInfo.backColor;
              if (foreColor) {
                  document.execCommand('foreColor', false, foreColor);
              }
              if (backColor) {
                  document.execCommand('backColor', false, backColor);
              }
          });
          /**
           * Set foreground color
           *
           * @param {String} colorCode foreground color code
           */
          this.foreColor = this.wrapCommand(function (colorInfo) {
              document.execCommand('styleWithCSS', false, true);
              document.execCommand('foreColor', false, colorInfo);
          });
          /**
           * insert Table
           *
           * @param {String} dimension of table (ex : "5x5")
           */
          this.insertTable = this.wrapCommand(function (dim) {
              var dimension = dim.split('x');
              var rng = _this.createRange().deleteContents();
              rng.insertNode(_this.table.createTable(dimension[0], dimension[1], _this.options));
          });
          /**
           * remove media object and Figure Elements if media object is img with Figure.
           */
          this.removeMedia = this.wrapCommand(function () {
              var $target = $$1(_this.restoreTarget()).parent();
              if ($target.parent('figure').length) {
                  $target.parent('figure').remove();
              }
              else {
                  $target = $$1(_this.restoreTarget()).detach();
              }
              _this.context.triggerEvent('media.delete', $target, _this.$editable);
          });
          /**
           * float me
           *
           * @param {String} value
           */
          this.floatMe = this.wrapCommand(function (value) {
              var $target = $$1(_this.restoreTarget());
              $target.toggleClass('note-float-left', value === 'left');
              $target.toggleClass('note-float-right', value === 'right');
              $target.css('float', value);
          });
          /**
           * resize overlay element
           * @param {String} value
           */
          this.resize = this.wrapCommand(function (value) {
              var $target = $$1(_this.restoreTarget());
              $target.css({
                  width: value * 100 + '%',
                  height: ''
              });
          });
      }
      Editor.prototype.initialize = function () {
          var _this = this;
          // bind custom events
          this.$editable.on('keydown', function (event) {
              if (event.keyCode === key.code.ENTER) {
                  _this.context.triggerEvent('enter', event);
              }
              _this.context.triggerEvent('keydown', event);
              if (!event.isDefaultPrevented()) {
                  if (_this.options.shortcuts) {
                      _this.handleKeyMap(event);
                  }
                  else {
                      _this.preventDefaultEditableShortCuts(event);
                  }
              }
              if (_this.isLimited(1, event)) {
                  return false;
              }
          }).on('keyup', function (event) {
              _this.context.triggerEvent('keyup', event);
          }).on('focus', function (event) {
              _this.context.triggerEvent('focus', event);
          }).on('blur', function (event) {
              _this.context.triggerEvent('blur', event);
          }).on('mousedown', function (event) {
              _this.context.triggerEvent('mousedown', event);
          }).on('mouseup', function (event) {
              _this.context.triggerEvent('mouseup', event);
          }).on('scroll', function (event) {
              _this.context.triggerEvent('scroll', event);
          }).on('paste', function (event) {
              _this.context.triggerEvent('paste', event);
          });
          // init content before set event
          this.$editable.html(dom.html(this.$note) || dom.emptyPara);
          this.$editable.on(env.inputEventName, func.debounce(function () {
              _this.context.triggerEvent('change', _this.$editable.html());
          }, 10));
          this.$editor.on('focusin', function (event) {
              _this.context.triggerEvent('focusin', event);
          }).on('focusout', function (event) {
              _this.context.triggerEvent('focusout', event);
          });
          if (!this.options.airMode) {
              if (this.options.width) {
                  this.$editor.outerWidth(this.options.width);
              }
              if (this.options.height) {
                  this.$editable.outerHeight(this.options.height);
              }
              if (this.options.maxHeight) {
                  this.$editable.css('max-height', this.options.maxHeight);
              }
              if (this.options.minHeight) {
                  this.$editable.css('min-height', this.options.minHeight);
              }
          }
          this.history.recordUndo();
      };
      Editor.prototype.destroy = function () {
          this.$editable.off();
      };
      Editor.prototype.handleKeyMap = function (event) {
          var keyMap = this.options.keyMap[env.isMac ? 'mac' : 'pc'];
          var keys = [];
          if (event.metaKey) {
              keys.push('CMD');
          }
          if (event.ctrlKey && !event.altKey) {
              keys.push('CTRL');
          }
          if (event.shiftKey) {
              keys.push('SHIFT');
          }
          var keyName = key.nameFromCode[event.keyCode];
          if (keyName) {
              keys.push(keyName);
          }
          var eventName = keyMap[keys.join('+')];
          if (eventName) {
              if (this.context.invoke(eventName) !== false) {
                  event.preventDefault();
              }
          }
          else if (key.isEdit(event.keyCode)) {
              this.afterCommand();
          }
      };
      Editor.prototype.preventDefaultEditableShortCuts = function (event) {
          // B(Bold, 66) / I(Italic, 73) / U(Underline, 85)
          if ((event.ctrlKey || event.metaKey) &&
              lists.contains([66, 73, 85], event.keyCode)) {
              event.preventDefault();
          }
      };
      Editor.prototype.isLimited = function (pad, event) {
          pad = pad || 0;
          if (typeof event !== 'undefined') {
              if (key.isMove(event.keyCode) ||
                  (event.ctrlKey || event.metaKey) ||
                  lists.contains([key.code.BACKSPACE, key.code.DELETE], event.keyCode)) {
                  return false;
              }
          }
          if (this.options.maxTextLength > 0) {
              if ((this.$editable.text().length + pad) >= this.options.maxTextLength) {
                  return true;
              }
          }
          return false;
      };
      /**
       * create range
       * @return {WrappedRange}
       */
      Editor.prototype.createRange = function () {
          this.focus();
          return range.create(this.editable);
      };
      /**
       * saveRange
       *
       * save current range
       *
       * @param {Boolean} [thenCollapse=false]
       */
      Editor.prototype.saveRange = function (thenCollapse) {
          this.lastRange = this.createRange();
          if (thenCollapse) {
              this.lastRange.collapse().select();
          }
      };
      /**
       * restoreRange
       *
       * restore lately range
       */
      Editor.prototype.restoreRange = function () {
          if (this.lastRange) {
              this.lastRange.select();
              this.focus();
          }
      };
      Editor.prototype.saveTarget = function (node) {
          this.$editable.data('target', node);
      };
      Editor.prototype.clearTarget = function () {
          this.$editable.removeData('target');
      };
      Editor.prototype.restoreTarget = function () {
          return this.$editable.data('target');
      };
      /**
       * currentStyle
       *
       * current style
       * @return {Object|Boolean} unfocus
       */
      Editor.prototype.currentStyle = function () {
          var rng = range.create();
          if (rng) {
              rng = rng.normalize();
          }
          return rng ? this.style.current(rng) : this.style.fromNode(this.$editable);
      };
      /**
       * style from node
       *
       * @param {jQuery} $node
       * @return {Object}
       */
      Editor.prototype.styleFromNode = function ($node) {
          return this.style.fromNode($node);
      };
      /**
       * undo
       */
      Editor.prototype.undo = function () {
          this.context.triggerEvent('before.command', this.$editable.html());
          this.history.undo();
          this.context.triggerEvent('change', this.$editable.html());
      };
      /*
      * commit
      */
      Editor.prototype.commit = function () {
          this.context.triggerEvent('before.command', this.$editable.html());
          this.history.commit();
          this.context.triggerEvent('change', this.$editable.html());
      };
      /**
       * redo
       */
      Editor.prototype.redo = function () {
          this.context.triggerEvent('before.command', this.$editable.html());
          this.history.redo();
          this.context.triggerEvent('change', this.$editable.html());
      };
      /**
       * before command
       */
      Editor.prototype.beforeCommand = function () {
          this.context.triggerEvent('before.command', this.$editable.html());
          // keep focus on editable before command execution
          this.focus();
      };
      /**
       * after command
       * @param {Boolean} isPreventTrigger
       */
      Editor.prototype.afterCommand = function (isPreventTrigger) {
          this.normalizeContent();
          this.history.recordUndo();
          if (!isPreventTrigger) {
              this.context.triggerEvent('change', this.$editable.html());
          }
      };
      /**
       * handle tab key
       */
      Editor.prototype.tab = function () {
          var rng = this.createRange();
          if (rng.isCollapsed() && rng.isOnCell()) {
              this.table.tab(rng);
          }
          else {
              if (this.options.tabSize === 0) {
                  return false;
              }
              if (!this.isLimited(this.options.tabSize)) {
                  this.beforeCommand();
                  this.typing.insertTab(rng, this.options.tabSize);
                  this.afterCommand();
              }
          }
      };
      /**
       * handle shift+tab key
       */
      Editor.prototype.untab = function () {
          var rng = this.createRange();
          if (rng.isCollapsed() && rng.isOnCell()) {
              this.table.tab(rng, true);
          }
          else {
              if (this.options.tabSize === 0) {
                  return false;
              }
          }
      };
      /**
       * run given function between beforeCommand and afterCommand
       */
      Editor.prototype.wrapCommand = function (fn) {
          return function () {
              this.beforeCommand();
              fn.apply(this, arguments);
              this.afterCommand();
          };
      };
      /**
       * insert image
       *
       * @param {String} src
       * @param {String|Function} param
       * @return {Promise}
       */
      Editor.prototype.insertImage = function (src, param) {
          var _this = this;
          return createImage(src, param).then(function ($image) {
              _this.beforeCommand();
              if (typeof param === 'function') {
                  param($image);
              }
              else {
                  if (typeof param === 'string') {
                      $image.attr('data-filename', param);
                  }
                  $image.css('width', Math.min(_this.$editable.width(), $image.width()));
              }
              $image.show();
              range.create(_this.editable).insertNode($image[0]);
              range.createFromNodeAfter($image[0]).select();
              _this.afterCommand();
          }).fail(function (e) {
              _this.context.triggerEvent('image.upload.error', e);
          });
      };
      /**
       * insertImages
       * @param {File[]} files
       */
      Editor.prototype.insertImagesAsDataURL = function (files) {
          var _this = this;
          $$1.each(files, function (idx, file) {
              var filename = file.name;
              if (_this.options.maximumImageFileSize && _this.options.maximumImageFileSize < file.size) {
                  _this.context.triggerEvent('image.upload.error', _this.lang.image.maximumFileSizeError);
              }
              else {
                  readFileAsDataURL(file).then(function (dataURL) {
                      return _this.insertImage(dataURL, filename);
                  }).fail(function () {
                      _this.context.triggerEvent('image.upload.error');
                  });
              }
          });
      };
      /**
       * return selected plain text
       * @return {String} text
       */
      Editor.prototype.getSelectedText = function () {
          var rng = this.createRange();
          // if range on anchor, expand range with anchor
          if (rng.isOnAnchor()) {
              rng = range.createFromNode(dom.ancestor(rng.sc, dom.isAnchor));
          }
          return rng.toString();
      };
      Editor.prototype.onFormatBlock = function (tagName, $target) {
          // [workaround] for MSIE, IE need `<`
          tagName = env.isMSIE ? '<' + tagName + '>' : tagName;
          document.execCommand('FormatBlock', false, tagName);
          // support custom class
          if ($target && $target.length) {
              var className = $target[0].className || '';
              if (className) {
                  var currentRange = this.createRange();
                  var $parent = $$1([currentRange.sc, currentRange.ec]).closest(tagName);
                  $parent.addClass(className);
              }
          }
      };
      Editor.prototype.formatPara = function () {
          this.formatBlock('P');
      };
      Editor.prototype.fontStyling = function (target, value) {
          var rng = this.createRange();
          if (rng) {
              var spans = this.style.styleNodes(rng);
              $$1(spans).css(target, value);
              // [workaround] added styled bogus span for style
              //  - also bogus character needed for cursor position
              if (rng.isCollapsed()) {
                  var firstSpan = lists.head(spans);
                  if (firstSpan && !dom.nodeLength(firstSpan)) {
                      firstSpan.innerHTML = dom.ZERO_WIDTH_NBSP_CHAR;
                      range.createFromNodeAfter(firstSpan.firstChild).select();
                      this.$editable.data(KEY_BOGUS, firstSpan);
                  }
              }
          }
      };
      /**
       * unlink
       *
       * @type command
       */
      Editor.prototype.unlink = function () {
          var rng = this.createRange();
          if (rng.isOnAnchor()) {
              var anchor = dom.ancestor(rng.sc, dom.isAnchor);
              rng = range.createFromNode(anchor);
              rng.select();
              this.beforeCommand();
              document.execCommand('unlink');
              this.afterCommand();
          }
      };
      /**
       * returns link info
       *
       * @return {Object}
       * @return {WrappedRange} return.range
       * @return {String} return.text
       * @return {Boolean} [return.isNewWindow=true]
       * @return {String} [return.url=""]
       */
      Editor.prototype.getLinkInfo = function () {
          var rng = this.createRange().expand(dom.isAnchor);
          // Get the first anchor on range(for edit).
          var $anchor = $$1(lists.head(rng.nodes(dom.isAnchor)));
          var linkInfo = {
              range: rng,
              text: rng.toString(),
              url: $anchor.length ? $anchor.attr('href') : ''
          };
          // When anchor exists,
          if ($anchor.length) {
              // Set isNewWindow by checking its target.
              linkInfo.isNewWindow = $anchor.attr('target') === '_blank';
          }
          return linkInfo;
      };
      Editor.prototype.addRow = function (position) {
          var rng = this.createRange(this.$editable);
          if (rng.isCollapsed() && rng.isOnCell()) {
              this.beforeCommand();
              this.table.addRow(rng, position);
              this.afterCommand();
          }
      };
      Editor.prototype.addCol = function (position) {
          var rng = this.createRange(this.$editable);
          if (rng.isCollapsed() && rng.isOnCell()) {
              this.beforeCommand();
              this.table.addCol(rng, position);
              this.afterCommand();
          }
      };
      Editor.prototype.deleteRow = function () {
          var rng = this.createRange(this.$editable);
          if (rng.isCollapsed() && rng.isOnCell()) {
              this.beforeCommand();
              this.table.deleteRow(rng);
              this.afterCommand();
          }
      };
      Editor.prototype.deleteCol = function () {
          var rng = this.createRange(this.$editable);
          if (rng.isCollapsed() && rng.isOnCell()) {
              this.beforeCommand();
              this.table.deleteCol(rng);
              this.afterCommand();
          }
      };
      Editor.prototype.deleteTable = function () {
          var rng = this.createRange(this.$editable);
          if (rng.isCollapsed() && rng.isOnCell()) {
              this.beforeCommand();
              this.table.deleteTable(rng);
              this.afterCommand();
          }
      };
      /**
       * @param {Position} pos
       * @param {jQuery} $target - target element
       * @param {Boolean} [bKeepRatio] - keep ratio
       */
      Editor.prototype.resizeTo = function (pos, $target, bKeepRatio) {
          var imageSize;
          if (bKeepRatio) {
              var newRatio = pos.y / pos.x;
              var ratio = $target.data('ratio');
              imageSize = {
                  width: ratio > newRatio ? pos.x : pos.y / ratio,
                  height: ratio > newRatio ? pos.x * ratio : pos.y
              };
          }
          else {
              imageSize = {
                  width: pos.x,
                  height: pos.y
              };
          }
          $target.css(imageSize);
      };
      /**
       * returns whether editable area has focus or not.
       */
      Editor.prototype.hasFocus = function () {
          return this.$editable.is(':focus');
      };
      /**
       * set focus
       */
      Editor.prototype.focus = function () {
          // [workaround] Screen will move when page is scolled in IE.
          //  - do focus when not focused
          if (!this.hasFocus()) {
              this.$editable.focus();
          }
      };
      /**
       * returns whether contents is empty or not.
       * @return {Boolean}
       */
      Editor.prototype.isEmpty = function () {
          return dom.isEmpty(this.$editable[0]) || dom.emptyPara === this.$editable.html();
      };
      /**
       * Removes all contents and restores the editable instance to an _emptyPara_.
       */
      Editor.prototype.empty = function () {
          this.context.invoke('code', dom.emptyPara);
      };
      /**
       * normalize content
       */
      Editor.prototype.normalizeContent = function () {
          this.$editable[0].normalize();
      };
      return Editor;
  }());

  var Clipboard = /** @class */ (function () {
      function Clipboard(context) {
          this.context = context;
          this.$editable = context.layoutInfo.editable;
      }
      Clipboard.prototype.initialize = function () {
          this.$editable.on('paste', this.pasteByEvent.bind(this));
      };
      /**
       * paste by clipboard event
       *
       * @param {Event} event
       */
      Clipboard.prototype.pasteByEvent = function (event) {
          var clipboardData = event.originalEvent.clipboardData;
          if (clipboardData && clipboardData.items && clipboardData.items.length) {
              // paste img file
              var item = clipboardData.items.length > 1 ? clipboardData.items[1] : lists.head(clipboardData.items);
              if (item.kind === 'file' && item.type.indexOf('image/') !== -1) {
                  this.context.invoke('editor.insertImagesOrCallback', [item.getAsFile()]);
              }
              this.context.invoke('editor.afterCommand');
          }
      };
      return Clipboard;
  }());

  var Dropzone = /** @class */ (function () {
      function Dropzone(context) {
          this.context = context;
          this.$eventListener = $$1(document);
          this.$editor = context.layoutInfo.editor;
          this.$editable = context.layoutInfo.editable;
          this.options = context.options;
          this.lang = this.options.langInfo;
          this.documentEventHandlers = {};
          this.$dropzone = $$1([
              '<div class="note-dropzone">',
              '  <div class="note-dropzone-message"/>',
              '</div>'
          ].join('')).prependTo(this.$editor);
      }
      /**
       * attach Drag and Drop Events
       */
      Dropzone.prototype.initialize = function () {
          if (this.options.disableDragAndDrop) {
              // prevent default drop event
              this.documentEventHandlers.onDrop = function (e) {
                  e.preventDefault();
              };
              // do not consider outside of dropzone
              this.$eventListener = this.$dropzone;
              this.$eventListener.on('drop', this.documentEventHandlers.onDrop);
          }
          else {
              this.attachDragAndDropEvent();
          }
      };
      /**
       * attach Drag and Drop Events
       */
      Dropzone.prototype.attachDragAndDropEvent = function () {
          var _this = this;
          var collection = $$1();
          var $dropzoneMessage = this.$dropzone.find('.note-dropzone-message');
          this.documentEventHandlers.onDragenter = function (e) {
              var isCodeview = _this.context.invoke('codeview.isActivated');
              var hasEditorSize = _this.$editor.width() > 0 && _this.$editor.height() > 0;
              if (!isCodeview && !collection.length && hasEditorSize) {
                  _this.$editor.addClass('dragover');
                  _this.$dropzone.width(_this.$editor.width());
                  _this.$dropzone.height(_this.$editor.height());
                  $dropzoneMessage.text(_this.lang.image.dragImageHere);
              }
              collection = collection.add(e.target);
          };
          this.documentEventHandlers.onDragleave = function (e) {
              collection = collection.not(e.target);
              if (!collection.length) {
                  _this.$editor.removeClass('dragover');
              }
          };
          this.documentEventHandlers.onDrop = function () {
              collection = $$1();
              _this.$editor.removeClass('dragover');
          };
          // show dropzone on dragenter when dragging a object to document
          // -but only if the editor is visible, i.e. has a positive width and height
          this.$eventListener.on('dragenter', this.documentEventHandlers.onDragenter)
              .on('dragleave', this.documentEventHandlers.onDragleave)
              .on('drop', this.documentEventHandlers.onDrop);
          // change dropzone's message on hover.
          this.$dropzone.on('dragenter', function () {
              _this.$dropzone.addClass('hover');
              $dropzoneMessage.text(_this.lang.image.dropImage);
          }).on('dragleave', function () {
              _this.$dropzone.removeClass('hover');
              $dropzoneMessage.text(_this.lang.image.dragImageHere);
          });
          // attach dropImage
          this.$dropzone.on('drop', function (event) {
              var dataTransfer = event.originalEvent.dataTransfer;
              // stop the browser from opening the dropped content
              event.preventDefault();
              if (dataTransfer && dataTransfer.files && dataTransfer.files.length) {
                  _this.$editable.focus();
                  _this.context.invoke('editor.insertImagesOrCallback', dataTransfer.files);
              }
              else {
                  $$1.each(dataTransfer.types, function (idx, type) {
                      var content = dataTransfer.getData(type);
                      if (type.toLowerCase().indexOf('text') > -1) {
                          _this.context.invoke('editor.pasteHTML', content);
                      }
                      else {
                          $$1(content).each(function (idx, item) {
                              _this.context.invoke('editor.insertNode', item);
                          });
                      }
                  });
              }
          }).on('dragover', false); // prevent default dragover event
      };
      Dropzone.prototype.destroy = function () {
          var _this = this;
          Object.keys(this.documentEventHandlers).forEach(function (key) {
              _this.$eventListener.off(key.substr(2).toLowerCase(), _this.documentEventHandlers[key]);
          });
          this.documentEventHandlers = {};
      };
      return Dropzone;
  }());

  var CodeMirror;
  if (env.hasCodeMirror) {
      if (env.isSupportAmd) {
          require(['codemirror'], function (cm) {
              CodeMirror = cm;
          });
      }
      else {
          CodeMirror = window.CodeMirror;
      }
  }
  /**
   * @class Codeview
   */
  var CodeView = /** @class */ (function () {
      function CodeView(context) {
          this.context = context;
          this.$editor = context.layoutInfo.editor;
          this.$editable = context.layoutInfo.editable;
          this.$codable = context.layoutInfo.codable;
          this.options = context.options;
      }
      CodeView.prototype.sync = function () {
          var isCodeview = this.isActivated();
          if (isCodeview && env.hasCodeMirror) {
              this.$codable.data('cmEditor').save();
          }
      };
      /**
       * @return {Boolean}
       */
      CodeView.prototype.isActivated = function () {
          return this.$editor.hasClass('codeview');
      };
      /**
       * toggle codeview
       */
      CodeView.prototype.toggle = function () {
          if (this.isActivated()) {
              this.deactivate();
          }
          else {
              this.activate();
          }
          this.context.triggerEvent('codeview.toggled');
      };
      /**
       * activate code view
       */
      CodeView.prototype.activate = function () {
          var _this = this;
          this.$codable.val(dom.html(this.$editable, this.options.prettifyHtml));
          this.$codable.height(this.$editable.height());
          this.context.invoke('toolbar.updateCodeview', true);
          this.$editor.addClass('codeview');
          this.$codable.focus();
          // activate CodeMirror as codable
          if (env.hasCodeMirror) {
              var cmEditor_1 = CodeMirror.fromTextArea(this.$codable[0], this.options.codemirror);
              // CodeMirror TernServer
              if (this.options.codemirror.tern) {
                  var server_1 = new CodeMirror.TernServer(this.options.codemirror.tern);
                  cmEditor_1.ternServer = server_1;
                  cmEditor_1.on('cursorActivity', function (cm) {
                      server_1.updateArgHints(cm);
                  });
              }
              cmEditor_1.on('blur', function (event) {
                  _this.context.triggerEvent('blur.codeview', cmEditor_1.getValue(), event);
              });
              // CodeMirror hasn't Padding.
              cmEditor_1.setSize(null, this.$editable.outerHeight());
              this.$codable.data('cmEditor', cmEditor_1);
          }
          else {
              this.$codable.on('blur', function (event) {
                  _this.context.triggerEvent('blur.codeview', _this.$codable.val(), event);
              });
          }
      };
      /**
       * deactivate code view
       */
      CodeView.prototype.deactivate = function () {
          // deactivate CodeMirror as codable
          if (env.hasCodeMirror) {
              var cmEditor = this.$codable.data('cmEditor');
              this.$codable.val(cmEditor.getValue());
              cmEditor.toTextArea();
          }
          var value = dom.value(this.$codable, this.options.prettifyHtml) || dom.emptyPara;
          var isChange = this.$editable.html() !== value;
          this.$editable.html(value);
          this.$editable.height(this.options.height ? this.$codable.height() : 'auto');
          this.$editor.removeClass('codeview');
          if (isChange) {
              this.context.triggerEvent('change', this.$editable.html(), this.$editable);
          }
          this.$editable.focus();
          this.context.invoke('toolbar.updateCodeview', false);
      };
      CodeView.prototype.destroy = function () {
          if (this.isActivated()) {
              this.deactivate();
          }
      };
      return CodeView;
  }());

  var EDITABLE_PADDING = 24;
  var Statusbar = /** @class */ (function () {
      function Statusbar(context) {
          this.$document = $$1(document);
          this.$statusbar = context.layoutInfo.statusbar;
          this.$editable = context.layoutInfo.editable;
          this.options = context.options;
      }
      Statusbar.prototype.initialize = function () {
          var _this = this;
          if (this.options.airMode || this.options.disableResizeEditor) {
              this.destroy();
              return;
          }
          this.$statusbar.on('mousedown', function (event) {
              event.preventDefault();
              event.stopPropagation();
              var editableTop = _this.$editable.offset().top - _this.$document.scrollTop();
              var onMouseMove = function (event) {
                  var height = event.clientY - (editableTop + EDITABLE_PADDING);
                  height = (_this.options.minheight > 0) ? Math.max(height, _this.options.minheight) : height;
                  height = (_this.options.maxHeight > 0) ? Math.min(height, _this.options.maxHeight) : height;
                  _this.$editable.height(height);
              };
              _this.$document.on('mousemove', onMouseMove).one('mouseup', function () {
                  _this.$document.off('mousemove', onMouseMove);
              });
          });
      };
      Statusbar.prototype.destroy = function () {
          this.$statusbar.off();
          this.$statusbar.addClass('locked');
      };
      return Statusbar;
  }());

  var Fullscreen = /** @class */ (function () {
      function Fullscreen(context) {
          var _this = this;
          this.context = context;
          this.$editor = context.layoutInfo.editor;
          this.$toolbar = context.layoutInfo.toolbar;
          this.$editable = context.layoutInfo.editable;
          this.$codable = context.layoutInfo.codable;
          this.$window = $$1(window);
          this.$scrollbar = $$1('html, body');
          this.onResize = function () {
              _this.resizeTo({
                  h: _this.$window.height() - _this.$toolbar.outerHeight()
              });
          };
      }
      Fullscreen.prototype.resizeTo = function (size) {
          this.$editable.css('height', size.h);
          this.$codable.css('height', size.h);
          if (this.$codable.data('cmeditor')) {
              this.$codable.data('cmeditor').setsize(null, size.h);
          }
      };
      /**
       * toggle fullscreen
       */
      Fullscreen.prototype.toggle = function () {
          this.$editor.toggleClass('fullscreen');
          if (this.isFullscreen()) {
              this.$editable.data('orgHeight', this.$editable.css('height'));
              this.$editable.data('orgMaxHeight', this.$editable.css('maxHeight'));
              this.$editable.css('maxHeight', '');
              this.$window.on('resize', this.onResize).trigger('resize');
              this.$scrollbar.css('overflow', 'hidden');
          }
          else {
              this.$window.off('resize', this.onResize);
              this.resizeTo({ h: this.$editable.data('orgHeight') });
              this.$editable.css('maxHeight', this.$editable.css('orgMaxHeight'));
              this.$scrollbar.css('overflow', 'visible');
          }
          this.context.invoke('toolbar.updateFullscreen', this.isFullscreen());
      };
      Fullscreen.prototype.isFullscreen = function () {
          return this.$editor.hasClass('fullscreen');
      };
      return Fullscreen;
  }());

  var Handle = /** @class */ (function () {
      function Handle(context) {
          var _this = this;
          this.context = context;
          this.$document = $$1(document);
          this.$editingArea = context.layoutInfo.editingArea;
          this.options = context.options;
          this.lang = this.options.langInfo;
          this.events = {
              'summernote.mousedown': function (we, e) {
                  if (_this.update(e.target)) {
                      e.preventDefault();
                  }
              },
              'summernote.keyup summernote.scroll summernote.change summernote.dialog.shown': function () {
                  _this.update();
              },
              'summernote.disable': function () {
                  _this.hide();
              },
              'summernote.codeview.toggled': function () {
                  _this.update();
              }
          };
      }
      Handle.prototype.initialize = function () {
          var _this = this;
          this.$handle = $$1([
              '<div class="note-handle">',
              '<div class="note-control-selection">',
              '<div class="note-control-selection-bg"></div>',
              '<div class="note-control-holder note-control-nw"></div>',
              '<div class="note-control-holder note-control-ne"></div>',
              '<div class="note-control-holder note-control-sw"></div>',
              '<div class="',
              (this.options.disableResizeImage ? 'note-control-holder' : 'note-control-sizing'),
              ' note-control-se"></div>',
              (this.options.disableResizeImage ? '' : '<div class="note-control-selection-info"></div>'),
              '</div>',
              '</div>'
          ].join('')).prependTo(this.$editingArea);
          this.$handle.on('mousedown', function (event) {
              if (dom.isControlSizing(event.target)) {
                  event.preventDefault();
                  event.stopPropagation();
                  var $target_1 = _this.$handle.find('.note-control-selection').data('target');
                  var posStart_1 = $target_1.offset();
                  var scrollTop_1 = _this.$document.scrollTop();
                  var onMouseMove_1 = function (event) {
                      _this.context.invoke('editor.resizeTo', {
                          x: event.clientX - posStart_1.left,
                          y: event.clientY - (posStart_1.top - scrollTop_1)
                      }, $target_1, !event.shiftKey);
                      _this.update($target_1[0]);
                  };
                  _this.$document
                      .on('mousemove', onMouseMove_1)
                      .one('mouseup', function (e) {
                      e.preventDefault();
                      _this.$document.off('mousemove', onMouseMove_1);
                      _this.context.invoke('editor.afterCommand');
                  });
                  if (!$target_1.data('ratio')) { // original ratio.
                      $target_1.data('ratio', $target_1.height() / $target_1.width());
                  }
              }
          });
          // Listen for scrolling on the handle overlay.
          this.$handle.on('wheel', function (e) {
              e.preventDefault();
              _this.update();
          });
      };
      Handle.prototype.destroy = function () {
          this.$handle.remove();
      };
      Handle.prototype.update = function (target) {
          if (this.context.isDisabled()) {
              return false;
          }
          var isImage = dom.isImg(target);
          var $selection = this.$handle.find('.note-control-selection');
          this.context.invoke('imagePopover.update', target);
          if (isImage) {
              var $image = $$1(target);
              var position = $image.position();
              var pos = {
                  left: position.left + parseInt($image.css('marginLeft'), 10),
                  top: position.top + parseInt($image.css('marginTop'), 10)
              };
              // exclude margin
              var imageSize = {
                  w: $image.outerWidth(false),
                  h: $image.outerHeight(false)
              };
              $selection.css({
                  display: 'block',
                  left: pos.left,
                  top: pos.top,
                  width: imageSize.w,
                  height: imageSize.h
              }).data('target', $image); // save current image element.
              var origImageObj = new Image();
              origImageObj.src = $image.attr('src');
              var sizingText = imageSize.w + 'x' + imageSize.h + ' (' + this.lang.image.original + ': ' + origImageObj.width + 'x' + origImageObj.height + ')';
              $selection.find('.note-control-selection-info').text(sizingText);
              this.context.invoke('editor.saveTarget', target);
          }
          else {
              this.hide();
          }
          return isImage;
      };
      /**
       * hide
       *
       * @param {jQuery} $handle
       */
      Handle.prototype.hide = function () {
          this.context.invoke('editor.clearTarget');
          this.$handle.children().hide();
      };
      return Handle;
  }());

  var defaultScheme = 'http://';
  var linkPattern = /^([A-Za-z][A-Za-z0-9+-.]*\:[\/]{2}|mailto:[A-Z0-9._%+-]+@)?(www\.)?(.+)$/i;
  var AutoLink = /** @class */ (function () {
      function AutoLink(context) {
          var _this = this;
          this.context = context;
          this.events = {
              'summernote.keyup': function (we, e) {
                  if (!e.isDefaultPrevented()) {
                      _this.handleKeyup(e);
                  }
              },
              'summernote.keydown': function (we, e) {
                  _this.handleKeydown(e);
              }
          };
      }
      AutoLink.prototype.initialize = function () {
          this.lastWordRange = null;
      };
      AutoLink.prototype.destroy = function () {
          this.lastWordRange = null;
      };
      AutoLink.prototype.replace = function () {
          if (!this.lastWordRange) {
              return;
          }
          var keyword = this.lastWordRange.toString();
          var match = keyword.match(linkPattern);
          if (match && (match[1] || match[2])) {
              var link = match[1] ? keyword : defaultScheme + keyword;
              var node = $$1('<a />').html(keyword).attr('href', link)[0];
              if (this.context.options.linkTargetBlank) {
                  $$1(node).attr('target', '_blank');
              }
              this.lastWordRange.insertNode(node);
              this.lastWordRange = null;
              this.context.invoke('editor.focus');
          }
      };
      AutoLink.prototype.handleKeydown = function (e) {
          if (lists.contains([key.code.ENTER, key.code.SPACE], e.keyCode)) {
              var wordRange = this.context.invoke('editor.createRange').getWordRange();
              this.lastWordRange = wordRange;
          }
      };
      AutoLink.prototype.handleKeyup = function (e) {
          if (lists.contains([key.code.ENTER, key.code.SPACE], e.keyCode)) {
              this.replace();
          }
      };
      return AutoLink;
  }());

  /**
   * textarea auto sync.
   */
  var AutoSync = /** @class */ (function () {
      function AutoSync(context) {
          var _this = this;
          this.$note = context.layoutInfo.note;
          this.events = {
              'summernote.change': function () {
                  _this.$note.val(context.invoke('code'));
              }
          };
      }
      AutoSync.prototype.shouldInitialize = function () {
          return dom.isTextarea(this.$note[0]);
      };
      return AutoSync;
  }());

  var Placeholder = /** @class */ (function () {
      function Placeholder(context) {
          var _this = this;
          this.context = context;
          this.$editingArea = context.layoutInfo.editingArea;
          this.options = context.options;
          this.events = {
              'summernote.init summernote.change': function () {
                  _this.update();
              },
              'summernote.codeview.toggled': function () {
                  _this.update();
              }
          };
      }
      Placeholder.prototype.shouldInitialize = function () {
          return !!this.options.placeholder;
      };
      Placeholder.prototype.initialize = function () {
          var _this = this;
          this.$placeholder = $$1('<div class="note-placeholder">');
          this.$placeholder.on('click', function () {
              _this.context.invoke('focus');
          }).html(this.options.placeholder).prependTo(this.$editingArea);
          this.update();
      };
      Placeholder.prototype.destroy = function () {
          this.$placeholder.remove();
      };
      Placeholder.prototype.update = function () {
          var isShow = !this.context.invoke('codeview.isActivated') && this.context.invoke('editor.isEmpty');
          this.$placeholder.toggle(isShow);
      };
      return Placeholder;
  }());

  var Buttons = /** @class */ (function () {
      function Buttons(context) {
          this.ui = $$1.summernote.ui;
          this.context = context;
          this.$toolbar = context.layoutInfo.toolbar;
          this.options = context.options;
          this.lang = this.options.langInfo;
          this.invertedKeyMap = func.invertObject(this.options.keyMap[env.isMac ? 'mac' : 'pc']);
      }
      Buttons.prototype.representShortcut = function (editorMethod) {
          var shortcut = this.invertedKeyMap[editorMethod];
          if (!this.options.shortcuts || !shortcut) {
              return '';
          }
          if (env.isMac) {
              shortcut = shortcut.replace('CMD', '⌘').replace('SHIFT', '⇧');
          }
          shortcut = shortcut.replace('BACKSLASH', '\\')
              .replace('SLASH', '/')
              .replace('LEFTBRACKET', '[')
              .replace('RIGHTBRACKET', ']');
          return ' (' + shortcut + ')';
      };
      Buttons.prototype.button = function (o) {
          if (!this.options.tooltip && o.tooltip) {
              delete o.tooltip;
          }
          o.container = this.options.container;
          return this.ui.button(o);
      };
      Buttons.prototype.initialize = function () {
          this.addToolbarButtons();
          this.addImagePopoverButtons();
          this.addLinkPopoverButtons();
          this.addTablePopoverButtons();
          this.fontInstalledMap = {};
      };
      Buttons.prototype.destroy = function () {
          delete this.fontInstalledMap;
      };
      Buttons.prototype.isFontInstalled = function (name) {
          if (!this.fontInstalledMap.hasOwnProperty(name)) {
              this.fontInstalledMap[name] = env.isFontInstalled(name) ||
                  lists.contains(this.options.fontNamesIgnoreCheck, name);
          }
          return this.fontInstalledMap[name];
      };
      Buttons.prototype.isFontDeservedToAdd = function (name) {
          var genericFamilies = ['sans-serif', 'serif', 'monospace', 'cursive', 'fantasy'];
          name = name.toLowerCase();
          return ((name !== '') && this.isFontInstalled(name) && ($$1.inArray(name, genericFamilies) === -1));
      };
      Buttons.prototype.colorPalette = function (className, tooltip, backColor, foreColor) {
          var _this = this;
          return this.ui.buttonGroup({
              className: 'note-color ' + className,
              children: [
                  this.button({
                      className: 'note-current-color-button',
                      contents: this.ui.icon(this.options.icons.font + ' note-recent-color'),
                      tooltip: tooltip,
                      click: function (e) {
                          var $button = $$1(e.currentTarget);
                          if (backColor && foreColor) {
                              _this.context.invoke('editor.color', {
                                  backColor: $button.attr('data-backColor'),
                                  foreColor: $button.attr('data-foreColor')
                              });
                          }
                          else if (backColor) {
                              _this.context.invoke('editor.color', {
                                  backColor: $button.attr('data-backColor')
                              });
                          }
                          else if (foreColor) {
                              _this.context.invoke('editor.color', {
                                  foreColor: $button.attr('data-foreColor')
                              });
                          }
                      },
                      callback: function ($button) {
                          var $recentColor = $button.find('.note-recent-color');
                          if (backColor) {
                              $recentColor.css('background-color', '#FFFF00');
                              $button.attr('data-backColor', '#FFFF00');
                          }
                          if (!foreColor) {
                              $recentColor.css('color', 'transparent');
                          }
                      }
                  }),
                  this.button({
                      className: 'dropdown-toggle',
                      contents: this.ui.dropdownButtonContents('', this.options),
                      tooltip: this.lang.color.more,
                      data: {
                          toggle: 'dropdown'
                      }
                  }),
                  this.ui.dropdown({
                      items: (backColor ? [
                          '<div class="note-palette">',
                          '  <div class="note-palette-title">' + this.lang.color.background + '</div>',
                          '  <div>',
                          '    <button type="button" class="note-color-reset btn btn-light" data-event="backColor" data-value="inherit">',
                          this.lang.color.transparent,
                          '    </button>',
                          '  </div>',
                          '  <div class="note-holder" data-event="backColor"/>',
                          '  <div>',
                          '    <button type="button" class="note-color-select btn" data-event="openPalette" data-value="backColorPicker">',
                          this.lang.color.cpSelect,
                          '    </button>',
                          '    <input type="color" id="backColorPicker" class="note-btn note-color-select-btn" value="#FFFF00" data-event="backColorPalette">',
                          '  </div>',
                          '  <div class="note-holder-custom" id="backColorPalette" data-event="backColor"/>',
                          '</div>'
                      ].join('') : '') +
                          (foreColor ? [
                              '<div class="note-palette">',
                              '  <div class="note-palette-title">' + this.lang.color.foreground + '</div>',
                              '  <div>',
                              '    <button type="button" class="note-color-reset btn btn-light" data-event="removeFormat" data-value="foreColor">',
                              this.lang.color.resetToDefault,
                              '    </button>',
                              '  </div>',
                              '  <div class="note-holder" data-event="foreColor"/>',
                              '  <div>',
                              '    <button type="button" class="note-color-select btn" data-event="openPalette" data-value="foreColorPicker">',
                              this.lang.color.cpSelect,
                              '    </button>',
                              '    <input type="color" id="foreColorPicker" class="note-btn note-color-select-btn" value="#000000" data-event="foreColorPalette">',
                              '  <div class="note-holder-custom" id="foreColorPalette" data-event="foreColor"/>',
                              '</div>'
                          ].join('') : ''),
                      callback: function ($dropdown) {
                          $dropdown.find('.note-holder').each(function (idx, item) {
                              var $holder = $$1(item);
                              $holder.append(_this.ui.palette({
                                  colors: _this.options.colors,
                                  colorsName: _this.options.colorsName,
                                  eventName: $holder.data('event'),
                                  container: _this.options.container,
                                  tooltip: _this.options.tooltip
                              }).render());
                          });
                          /* TODO: do we have to record recent custom colors within cookies? */
                          var customColors = [
                              ['#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF']
                          ];
                          $dropdown.find('.note-holder-custom').each(function (idx, item) {
                              var $holder = $$1(item);
                              $holder.append(_this.ui.palette({
                                  colors: customColors,
                                  colorsName: customColors,
                                  eventName: $holder.data('event'),
                                  container: _this.options.container,
                                  tooltip: _this.options.tooltip
                              }).render());
                          });
                          $dropdown.find('input[type=color]').each(function (idx, item) {
                              $$1(item).change(function () {
                                  var $chip = $dropdown.find('#' + $$1(this).data('event')).find('.note-color-btn').first();
                                  var color = this.value.toUpperCase();
                                  $chip.css('background-color', color)
                                      .attr('aria-label', color)
                                      .attr('data-value', color)
                                      .attr('data-original-title', color);
                                  $chip.click();
                              });
                          });
                      },
                      click: function (event) {
                          event.stopPropagation();
                          var $parent = $$1('.' + className);
                          var $button = $$1(event.target);
                          var eventName = $button.data('event');
                          var value = $button.attr('data-value');
                          if (eventName === 'openPalette') {
                              var $picker = $parent.find('#' + value);
                              var $palette = $$1($parent.find('#' + $picker.data('event')).find('.note-color-row')[0]);
                              // Shift palette chips
                              var $chip = $palette.find('.note-color-btn').last().detach();
                              // Set chip attributes
                              var color = $picker.val();
                              $chip.css('background-color', color)
                                  .attr('aria-label', color)
                                  .attr('data-value', color)
                                  .attr('data-original-title', color);
                              $palette.prepend($chip);
                              $picker.click();
                          }
                          else if (lists.contains(['backColor', 'foreColor'], eventName)) {
                              var key = eventName === 'backColor' ? 'background-color' : 'color';
                              var $color = $button.closest('.note-color').find('.note-recent-color');
                              var $currentButton = $button.closest('.note-color').find('.note-current-color-button');
                              $color.css(key, value);
                              $currentButton.attr('data-' + eventName, value);
                              _this.context.invoke('editor.' + eventName, value);
                          }
                      }
                  })
              ]
          }).render();
      };
      Buttons.prototype.addToolbarButtons = function () {
          var _this = this;
          this.context.memo('button.style', function () {
              return _this.ui.buttonGroup([
                  _this.button({
                      className: 'dropdown-toggle',
                      contents: _this.ui.dropdownButtonContents(_this.ui.icon(_this.options.icons.magic), _this.options),
                      tooltip: _this.lang.style.style,
                      data: {
                          toggle: 'dropdown'
                      }
                  }),
                  _this.ui.dropdown({
                      className: 'dropdown-style',
                      items: _this.options.styleTags,
                      title: _this.lang.style.style,
                      template: function (item) {
                          if (typeof item === 'string') {
                              item = { tag: item, title: (_this.lang.style.hasOwnProperty(item) ? _this.lang.style[item] : item) };
                          }
                          var tag = item.tag;
                          var title = item.title;
                          var style = item.style ? ' style="' + item.style + '" ' : '';
                          var className = item.className ? ' class="' + item.className + '"' : '';
                          return '<' + tag + style + className + '>' + title + '</' + tag + '>';
                      },
                      click: _this.context.createInvokeHandler('editor.formatBlock')
                  })
              ]).render();
          });
          var _loop_1 = function (styleIdx, styleLen) {
              var item = this_1.options.styleTags[styleIdx];
              this_1.context.memo('button.style.' + item, function () {
                  return _this.button({
                      className: 'note-btn-style-' + item,
                      contents: '<div data-value="' + item + '">' + item.toUpperCase() + '</div>',
                      tooltip: _this.lang.style[item],
                      click: _this.context.createInvokeHandler('editor.formatBlock')
                  }).render();
              });
          };
          var this_1 = this;
          for (var styleIdx = 0, styleLen = this.options.styleTags.length; styleIdx < styleLen; styleIdx++) {
              _loop_1(styleIdx, styleLen);
          }
          this.context.memo('button.bold', function () {
              return _this.button({
                  className: 'note-btn-bold',
                  contents: _this.ui.icon(_this.options.icons.bold),
                  tooltip: _this.lang.font.bold + _this.representShortcut('bold'),
                  click: _this.context.createInvokeHandlerAndUpdateState('editor.bold')
              }).render();
          });
          this.context.memo('button.italic', function () {
              return _this.button({
                  className: 'note-btn-italic',
                  contents: _this.ui.icon(_this.options.icons.italic),
                  tooltip: _this.lang.font.italic + _this.representShortcut('italic'),
                  click: _this.context.createInvokeHandlerAndUpdateState('editor.italic')
              }).render();
          });
          this.context.memo('button.underline', function () {
              return _this.button({
                  className: 'note-btn-underline',
                  contents: _this.ui.icon(_this.options.icons.underline),
                  tooltip: _this.lang.font.underline + _this.representShortcut('underline'),
                  click: _this.context.createInvokeHandlerAndUpdateState('editor.underline')
              }).render();
          });
          this.context.memo('button.clear', function () {
              return _this.button({
                  contents: _this.ui.icon(_this.options.icons.eraser),
                  tooltip: _this.lang.font.clear + _this.representShortcut('removeFormat'),
                  click: _this.context.createInvokeHandler('editor.removeFormat')
              }).render();
          });
          this.context.memo('button.strikethrough', function () {
              return _this.button({
                  className: 'note-btn-strikethrough',
                  contents: _this.ui.icon(_this.options.icons.strikethrough),
                  tooltip: _this.lang.font.strikethrough + _this.representShortcut('strikethrough'),
                  click: _this.context.createInvokeHandlerAndUpdateState('editor.strikethrough')
              }).render();
          });
          this.context.memo('button.superscript', function () {
              return _this.button({
                  className: 'note-btn-superscript',
                  contents: _this.ui.icon(_this.options.icons.superscript),
                  tooltip: _this.lang.font.superscript,
                  click: _this.context.createInvokeHandlerAndUpdateState('editor.superscript')
              }).render();
          });
          this.context.memo('button.subscript', function () {
              return _this.button({
                  className: 'note-btn-subscript',
                  contents: _this.ui.icon(_this.options.icons.subscript),
                  tooltip: _this.lang.font.subscript,
                  click: _this.context.createInvokeHandlerAndUpdateState('editor.subscript')
              }).render();
          });
          this.context.memo('button.fontname', function () {
              var styleInfo = _this.context.invoke('editor.currentStyle');
              // Add 'default' fonts into the fontnames array if not exist
              $$1.each(styleInfo['font-family'].split(','), function (idx, fontname) {
                  fontname = fontname.trim().replace(/['"]+/g, '');
                  if (_this.isFontDeservedToAdd(fontname)) {
                      if ($$1.inArray(fontname, _this.options.fontNames) === -1) {
                          _this.options.fontNames.push(fontname);
                      }
                  }
              });
              return _this.ui.buttonGroup([
                  _this.button({
                      className: 'dropdown-toggle',
                      contents: _this.ui.dropdownButtonContents('<span class="note-current-fontname"/>', _this.options),
                      tooltip: _this.lang.font.name,
                      data: {
                          toggle: 'dropdown'
                      }
                  }),
                  _this.ui.dropdownCheck({
                      className: 'dropdown-fontname',
                      checkClassName: _this.options.icons.menuCheck,
                      items: _this.options.fontNames.filter(_this.isFontInstalled.bind(_this)),
                      title: _this.lang.font.name,
                      template: function (item) {
                          return '<span style="font-family: \'' + item + '\'">' + item + '</span>';
                      },
                      click: _this.context.createInvokeHandlerAndUpdateState('editor.fontName')
                  })
              ]).render();
          });
          this.context.memo('button.fontsize', function () {
              return _this.ui.buttonGroup([
                  _this.button({
                      className: 'dropdown-toggle',
                      contents: _this.ui.dropdownButtonContents('<span class="note-current-fontsize"/>', _this.options),
                      tooltip: _this.lang.font.size,
                      data: {
                          toggle: 'dropdown'
                      }
                  }),
                  _this.ui.dropdownCheck({
                      className: 'dropdown-fontsize',
                      checkClassName: _this.options.icons.menuCheck,
                      items: _this.options.fontSizes,
                      title: _this.lang.font.size,
                      click: _this.context.createInvokeHandlerAndUpdateState('editor.fontSize')
                  })
              ]).render();
          });
          this.context.memo('button.color', function () {
              return _this.colorPalette('note-color-all', _this.lang.color.recent, true, true);
          });
          this.context.memo('button.forecolor', function () {
              return _this.colorPalette('note-color-fore', _this.lang.color.foreground, false, true);
          });
          this.context.memo('button.backcolor', function () {
              return _this.colorPalette('note-color-back', _this.lang.color.background, true, false);
          });
          this.context.memo('button.ul', function () {
              return _this.button({
                  contents: _this.ui.icon(_this.options.icons.unorderedlist),
                  tooltip: _this.lang.lists.unordered + _this.representShortcut('insertUnorderedList'),
                  click: _this.context.createInvokeHandler('editor.insertUnorderedList')
              }).render();
          });
          this.context.memo('button.ol', function () {
              return _this.button({
                  contents: _this.ui.icon(_this.options.icons.orderedlist),
                  tooltip: _this.lang.lists.ordered + _this.representShortcut('insertOrderedList'),
                  click: _this.context.createInvokeHandler('editor.insertOrderedList')
              }).render();
          });
          var justifyLeft = this.button({
              contents: this.ui.icon(this.options.icons.alignLeft),
              tooltip: this.lang.paragraph.left + this.representShortcut('justifyLeft'),
              click: this.context.createInvokeHandler('editor.justifyLeft')
          });
          var justifyCenter = this.button({
              contents: this.ui.icon(this.options.icons.alignCenter),
              tooltip: this.lang.paragraph.center + this.representShortcut('justifyCenter'),
              click: this.context.createInvokeHandler('editor.justifyCenter')
          });
          var justifyRight = this.button({
              contents: this.ui.icon(this.options.icons.alignRight),
              tooltip: this.lang.paragraph.right + this.representShortcut('justifyRight'),
              click: this.context.createInvokeHandler('editor.justifyRight')
          });
          var justifyFull = this.button({
              contents: this.ui.icon(this.options.icons.alignJustify),
              tooltip: this.lang.paragraph.justify + this.representShortcut('justifyFull'),
              click: this.context.createInvokeHandler('editor.justifyFull')
          });
          var outdent = this.button({
              contents: this.ui.icon(this.options.icons.outdent),
              tooltip: this.lang.paragraph.outdent + this.representShortcut('outdent'),
              click: this.context.createInvokeHandler('editor.outdent')
          });
          var indent = this.button({
              contents: this.ui.icon(this.options.icons.indent),
              tooltip: this.lang.paragraph.indent + this.representShortcut('indent'),
              click: this.context.createInvokeHandler('editor.indent')
          });
          this.context.memo('button.justifyLeft', func.invoke(justifyLeft, 'render'));
          this.context.memo('button.justifyCenter', func.invoke(justifyCenter, 'render'));
          this.context.memo('button.justifyRight', func.invoke(justifyRight, 'render'));
          this.context.memo('button.justifyFull', func.invoke(justifyFull, 'render'));
          this.context.memo('button.outdent', func.invoke(outdent, 'render'));
          this.context.memo('button.indent', func.invoke(indent, 'render'));
          this.context.memo('button.paragraph', function () {
              return _this.ui.buttonGroup([
                  _this.button({
                      className: 'dropdown-toggle',
                      contents: _this.ui.dropdownButtonContents(_this.ui.icon(_this.options.icons.alignLeft), _this.options),
                      tooltip: _this.lang.paragraph.paragraph,
                      data: {
                          toggle: 'dropdown'
                      }
                  }),
                  _this.ui.dropdown([
                      _this.ui.buttonGroup({
                          className: 'note-align',
                          children: [justifyLeft, justifyCenter, justifyRight, justifyFull]
                      }),
                      _this.ui.buttonGroup({
                          className: 'note-list',
                          children: [outdent, indent]
                      })
                  ])
              ]).render();
          });
          this.context.memo('button.height', function () {
              return _this.ui.buttonGroup([
                  _this.button({
                      className: 'dropdown-toggle',
                      contents: _this.ui.dropdownButtonContents(_this.ui.icon(_this.options.icons.textHeight), _this.options),
                      tooltip: _this.lang.font.height,
                      data: {
                          toggle: 'dropdown'
                      }
                  }),
                  _this.ui.dropdownCheck({
                      items: _this.options.lineHeights,
                      checkClassName: _this.options.icons.menuCheck,
                      className: 'dropdown-line-height',
                      title: _this.lang.font.height,
                      click: _this.context.createInvokeHandler('editor.lineHeight')
                  })
              ]).render();
          });
          this.context.memo('button.table', function () {
              return _this.ui.buttonGroup([
                  _this.button({
                      className: 'dropdown-toggle',
                      contents: _this.ui.dropdownButtonContents(_this.ui.icon(_this.options.icons.table), _this.options),
                      tooltip: _this.lang.table.table,
                      data: {
                          toggle: 'dropdown'
                      }
                  }),
                  _this.ui.dropdown({
                      title: _this.lang.table.table,
                      className: 'note-table',
                      items: [
                          '<div class="note-dimension-picker">',
                          '  <div class="note-dimension-picker-mousecatcher" data-event="insertTable" data-value="1x1"/>',
                          '  <div class="note-dimension-picker-highlighted"/>',
                          '  <div class="note-dimension-picker-unhighlighted"/>',
                          '</div>',
                          '<div class="note-dimension-display">1 x 1</div>'
                      ].join('')
                  })
              ], {
                  callback: function ($node) {
                      var $catcher = $node.find('.note-dimension-picker-mousecatcher');
                      $catcher.css({
                          width: _this.options.insertTableMaxSize.col + 'em',
                          height: _this.options.insertTableMaxSize.row + 'em'
                      }).mousedown(_this.context.createInvokeHandler('editor.insertTable'))
                          .on('mousemove', _this.tableMoveHandler.bind(_this));
                  }
              }).render();
          });
          this.context.memo('button.link', function () {
              return _this.button({
                  contents: _this.ui.icon(_this.options.icons.link),
                  tooltip: _this.lang.link.link + _this.representShortcut('linkDialog.show'),
                  click: _this.context.createInvokeHandler('linkDialog.show')
              }).render();
          });
          this.context.memo('button.picture', function () {
              return _this.button({
                  contents: _this.ui.icon(_this.options.icons.picture),
                  tooltip: _this.lang.image.image,
                  click: _this.context.createInvokeHandler('imageDialog.show')
              }).render();
          });
          this.context.memo('button.video', function () {
              return _this.button({
                  contents: _this.ui.icon(_this.options.icons.video),
                  tooltip: _this.lang.video.video,
                  click: _this.context.createInvokeHandler('videoDialog.show')
              }).render();
          });
          this.context.memo('button.hr', function () {
              return _this.button({
                  contents: _this.ui.icon(_this.options.icons.minus),
                  tooltip: _this.lang.hr.insert + _this.representShortcut('insertHorizontalRule'),
                  click: _this.context.createInvokeHandler('editor.insertHorizontalRule')
              }).render();
          });
          this.context.memo('button.fullscreen', function () {
              return _this.button({
                  className: 'btn-fullscreen',
                  contents: _this.ui.icon(_this.options.icons.arrowsAlt),
                  tooltip: _this.lang.options.fullscreen,
                  click: _this.context.createInvokeHandler('fullscreen.toggle')
              }).render();
          });
          this.context.memo('button.codeview', function () {
              return _this.button({
                  className: 'btn-codeview',
                  contents: _this.ui.icon(_this.options.icons.code),
                  tooltip: _this.lang.options.codeview,
                  click: _this.context.createInvokeHandler('codeview.toggle')
              }).render();
          });
          this.context.memo('button.redo', function () {
              return _this.button({
                  contents: _this.ui.icon(_this.options.icons.redo),
                  tooltip: _this.lang.history.redo + _this.representShortcut('redo'),
                  click: _this.context.createInvokeHandler('editor.redo')
              }).render();
          });
          this.context.memo('button.undo', function () {
              return _this.button({
                  contents: _this.ui.icon(_this.options.icons.undo),
                  tooltip: _this.lang.history.undo + _this.representShortcut('undo'),
                  click: _this.context.createInvokeHandler('editor.undo')
              }).render();
          });
          this.context.memo('button.help', function () {
              return _this.button({
                  contents: _this.ui.icon(_this.options.icons.question),
                  tooltip: _this.lang.options.help,
                  click: _this.context.createInvokeHandler('helpDialog.show')
              }).render();
          });
      };
      /**
       * image : [
       *   ['imagesize', ['imageSize100', 'imageSize50', 'imageSize25']],
       *   ['float', ['floatLeft', 'floatRight', 'floatNone' ]],
       *   ['remove', ['removeMedia']]
       * ],
       */
      Buttons.prototype.addImagePopoverButtons = function () {
          var _this = this;
          // Image Size Buttons
          this.context.memo('button.imageSize100', function () {
              return _this.button({
                  contents: '<span class="note-fontsize-10">100%</span>',
                  tooltip: _this.lang.image.resizeFull,
                  click: _this.context.createInvokeHandler('editor.resize', '1')
              }).render();
          });
          this.context.memo('button.imageSize50', function () {
              return _this.button({
                  contents: '<span class="note-fontsize-10">50%</span>',
                  tooltip: _this.lang.image.resizeHalf,
                  click: _this.context.createInvokeHandler('editor.resize', '0.5')
              }).render();
          });
          this.context.memo('button.imageSize25', function () {
              return _this.button({
                  contents: '<span class="note-fontsize-10">25%</span>',
                  tooltip: _this.lang.image.resizeQuarter,
                  click: _this.context.createInvokeHandler('editor.resize', '0.25')
              }).render();
          });
          // Float Buttons
          this.context.memo('button.floatLeft', function () {
              return _this.button({
                  contents: _this.ui.icon(_this.options.icons.alignLeft),
                  tooltip: _this.lang.image.floatLeft,
                  click: _this.context.createInvokeHandler('editor.floatMe', 'left')
              }).render();
          });
          this.context.memo('button.floatRight', function () {
              return _this.button({
                  contents: _this.ui.icon(_this.options.icons.alignRight),
                  tooltip: _this.lang.image.floatRight,
                  click: _this.context.createInvokeHandler('editor.floatMe', 'right')
              }).render();
          });
          this.context.memo('button.floatNone', function () {
              return _this.button({
                  contents: _this.ui.icon(_this.options.icons.alignJustify),
                  tooltip: _this.lang.image.floatNone,
                  click: _this.context.createInvokeHandler('editor.floatMe', 'none')
              }).render();
          });
          // Remove Buttons
          this.context.memo('button.removeMedia', function () {
              return _this.button({
                  contents: _this.ui.icon(_this.options.icons.trash),
                  tooltip: _this.lang.image.remove,
                  click: _this.context.createInvokeHandler('editor.removeMedia')
              }).render();
          });
      };
      Buttons.prototype.addLinkPopoverButtons = function () {
          var _this = this;
          this.context.memo('button.linkDialogShow', function () {
              return _this.button({
                  contents: _this.ui.icon(_this.options.icons.link),
                  tooltip: _this.lang.link.edit,
                  click: _this.context.createInvokeHandler('linkDialog.show')
              }).render();
          });
          this.context.memo('button.unlink', function () {
              return _this.button({
                  contents: _this.ui.icon(_this.options.icons.unlink),
                  tooltip: _this.lang.link.unlink,
                  click: _this.context.createInvokeHandler('editor.unlink')
              }).render();
          });
      };
      /**
       * table : [
       *  ['add', ['addRowDown', 'addRowUp', 'addColLeft', 'addColRight']],
       *  ['delete', ['deleteRow', 'deleteCol', 'deleteTable']]
       * ],
       */
      Buttons.prototype.addTablePopoverButtons = function () {
          var _this = this;
          this.context.memo('button.addRowUp', function () {
              return _this.button({
                  className: 'btn-md',
                  contents: _this.ui.icon(_this.options.icons.rowAbove),
                  tooltip: _this.lang.table.addRowAbove,
                  click: _this.context.createInvokeHandler('editor.addRow', 'top')
              }).render();
          });
          this.context.memo('button.addRowDown', function () {
              return _this.button({
                  className: 'btn-md',
                  contents: _this.ui.icon(_this.options.icons.rowBelow),
                  tooltip: _this.lang.table.addRowBelow,
                  click: _this.context.createInvokeHandler('editor.addRow', 'bottom')
              }).render();
          });
          this.context.memo('button.addColLeft', function () {
              return _this.button({
                  className: 'btn-md',
                  contents: _this.ui.icon(_this.options.icons.colBefore),
                  tooltip: _this.lang.table.addColLeft,
                  click: _this.context.createInvokeHandler('editor.addCol', 'left')
              }).render();
          });
          this.context.memo('button.addColRight', function () {
              return _this.button({
                  className: 'btn-md',
                  contents: _this.ui.icon(_this.options.icons.colAfter),
                  tooltip: _this.lang.table.addColRight,
                  click: _this.context.createInvokeHandler('editor.addCol', 'right')
              }).render();
          });
          this.context.memo('button.deleteRow', function () {
              return _this.button({
                  className: 'btn-md',
                  contents: _this.ui.icon(_this.options.icons.rowRemove),
                  tooltip: _this.lang.table.delRow,
                  click: _this.context.createInvokeHandler('editor.deleteRow')
              }).render();
          });
          this.context.memo('button.deleteCol', function () {
              return _this.button({
                  className: 'btn-md',
                  contents: _this.ui.icon(_this.options.icons.colRemove),
                  tooltip: _this.lang.table.delCol,
                  click: _this.context.createInvokeHandler('editor.deleteCol')
              }).render();
          });
          this.context.memo('button.deleteTable', function () {
              return _this.button({
                  className: 'btn-md',
                  contents: _this.ui.icon(_this.options.icons.trash),
                  tooltip: _this.lang.table.delTable,
                  click: _this.context.createInvokeHandler('editor.deleteTable')
              }).render();
          });
      };
      Buttons.prototype.build = function ($container, groups) {
          for (var groupIdx = 0, groupLen = groups.length; groupIdx < groupLen; groupIdx++) {
              var group = groups[groupIdx];
              var groupName = $$1.isArray(group) ? group[0] : group;
              var buttons = $$1.isArray(group) ? ((group.length === 1) ? [group[0]] : group[1]) : [group];
              var $group = this.ui.buttonGroup({
                  className: 'note-' + groupName
              }).render();
              for (var idx = 0, len = buttons.length; idx < len; idx++) {
                  var btn = this.context.memo('button.' + buttons[idx]);
                  if (btn) {
                      $group.append(typeof btn === 'function' ? btn(this.context) : btn);
                  }
              }
              $group.appendTo($container);
          }
      };
      /**
       * @param {jQuery} [$container]
       */
      Buttons.prototype.updateCurrentStyle = function ($container) {
          var _this = this;
          var $cont = $container || this.$toolbar;
          var styleInfo = this.context.invoke('editor.currentStyle');
          this.updateBtnStates($cont, {
              '.note-btn-bold': function () {
                  return styleInfo['font-bold'] === 'bold';
              },
              '.note-btn-italic': function () {
                  return styleInfo['font-italic'] === 'italic';
              },
              '.note-btn-underline': function () {
                  return styleInfo['font-underline'] === 'underline';
              },
              '.note-btn-subscript': function () {
                  return styleInfo['font-subscript'] === 'subscript';
              },
              '.note-btn-superscript': function () {
                  return styleInfo['font-superscript'] === 'superscript';
              },
              '.note-btn-strikethrough': function () {
                  return styleInfo['font-strikethrough'] === 'strikethrough';
              }
          });
          if (styleInfo['font-family']) {
              var fontNames = styleInfo['font-family'].split(',').map(function (name) {
                  return name.replace(/[\'\"]/g, '')
                      .replace(/\s+$/, '')
                      .replace(/^\s+/, '');
              });
              var fontName_1 = lists.find(fontNames, this.isFontInstalled.bind(this));
              $cont.find('.dropdown-fontname a').each(function (idx, item) {
                  var $item = $$1(item);
                  // always compare string to avoid creating another func.
                  var isChecked = ($item.data('value') + '') === (fontName_1 + '');
                  $item.toggleClass('checked', isChecked);
              });
              $cont.find('.note-current-fontname').text(fontName_1).css('font-family', fontName_1);
          }
          if (styleInfo['font-size']) {
              var fontSize_1 = styleInfo['font-size'];
              $cont.find('.dropdown-fontsize a').each(function (idx, item) {
                  var $item = $$1(item);
                  // always compare with string to avoid creating another func.
                  var isChecked = ($item.data('value') + '') === (fontSize_1 + '');
                  $item.toggleClass('checked', isChecked);
              });
              $cont.find('.note-current-fontsize').text(fontSize_1);
          }
          if (styleInfo['line-height']) {
              var lineHeight_1 = styleInfo['line-height'];
              $cont.find('.dropdown-line-height li a').each(function (idx, item) {
                  // always compare with string to avoid creating another func.
                  var isChecked = ($$1(item).data('value') + '') === (lineHeight_1 + '');
                  _this.className = isChecked ? 'checked' : '';
              });
          }
      };
      Buttons.prototype.updateBtnStates = function ($container, infos) {
          var _this = this;
          $$1.each(infos, function (selector, pred) {
              _this.ui.toggleBtnActive($container.find(selector), pred());
          });
      };
      Buttons.prototype.tableMoveHandler = function (event) {
          var PX_PER_EM = 18;
          var $picker = $$1(event.target.parentNode); // target is mousecatcher
          var $dimensionDisplay = $picker.next();
          var $catcher = $picker.find('.note-dimension-picker-mousecatcher');
          var $highlighted = $picker.find('.note-dimension-picker-highlighted');
          var $unhighlighted = $picker.find('.note-dimension-picker-unhighlighted');
          var posOffset;
          // HTML5 with jQuery - e.offsetX is undefined in Firefox
          if (event.offsetX === undefined) {
              var posCatcher = $$1(event.target).offset();
              posOffset = {
                  x: event.pageX - posCatcher.left,
                  y: event.pageY - posCatcher.top
              };
          }
          else {
              posOffset = {
                  x: event.offsetX,
                  y: event.offsetY
              };
          }
          var dim = {
              c: Math.ceil(posOffset.x / PX_PER_EM) || 1,
              r: Math.ceil(posOffset.y / PX_PER_EM) || 1
          };
          $highlighted.css({ width: dim.c + 'em', height: dim.r + 'em' });
          $catcher.data('value', dim.c + 'x' + dim.r);
          if (dim.c > 3 && dim.c < this.options.insertTableMaxSize.col) {
              $unhighlighted.css({ width: dim.c + 1 + 'em' });
          }
          if (dim.r > 3 && dim.r < this.options.insertTableMaxSize.row) {
              $unhighlighted.css({ height: dim.r + 1 + 'em' });
          }
          $dimensionDisplay.html(dim.c + ' x ' + dim.r);
      };
      return Buttons;
  }());

  var Toolbar = /** @class */ (function () {
      function Toolbar(context) {
          this.context = context;
          this.$window = $$1(window);
          this.$document = $$1(document);
          this.ui = $$1.summernote.ui;
          this.$note = context.layoutInfo.note;
          this.$editor = context.layoutInfo.editor;
          this.$toolbar = context.layoutInfo.toolbar;
          this.options = context.options;
          this.followScroll = this.followScroll.bind(this);
      }
      Toolbar.prototype.shouldInitialize = function () {
          return !this.options.airMode;
      };
      Toolbar.prototype.initialize = function () {
          var _this = this;
          this.options.toolbar = this.options.toolbar || [];
          if (!this.options.toolbar.length) {
              this.$toolbar.hide();
          }
          else {
              this.context.invoke('buttons.build', this.$toolbar, this.options.toolbar);
          }
          if (this.options.toolbarContainer) {
              this.$toolbar.appendTo(this.options.toolbarContainer);
          }
          this.changeContainer(false);
          this.$note.on('summernote.keyup summernote.mouseup summernote.change', function () {
              _this.context.invoke('buttons.updateCurrentStyle');
          });
          this.context.invoke('buttons.updateCurrentStyle');
          if (this.options.followingToolbar) {
              this.$window.on('scroll resize', this.followScroll);
          }
      };
      Toolbar.prototype.destroy = function () {
          this.$toolbar.children().remove();
          if (this.options.followingToolbar) {
              this.$window.off('scroll resize', this.followScroll);
          }
      };
      Toolbar.prototype.followScroll = function () {
          if (this.$editor.hasClass('fullscreen')) {
              return false;
          }
          var $toolbarWrapper = this.$toolbar.parent('.note-toolbar-wrapper');
          var editorHeight = this.$editor.outerHeight();
          var editorWidth = this.$editor.width();
          var toolbarHeight = this.$toolbar.height();
          $toolbarWrapper.css({
              height: toolbarHeight
          });
          // check if the web app is currently using another static bar
          var otherBarHeight = 0;
          if (this.options.otherStaticBar) {
              otherBarHeight = $$1(this.options.otherStaticBar).outerHeight();
          }
          var currentOffset = this.$document.scrollTop();
          var editorOffsetTop = this.$editor.offset().top;
          var editorOffsetBottom = editorOffsetTop + editorHeight;
          var activateOffset = editorOffsetTop - otherBarHeight;
          var deactivateOffsetBottom = editorOffsetBottom - otherBarHeight - toolbarHeight;
          if ((currentOffset > activateOffset) && (currentOffset < deactivateOffsetBottom)) {
              this.$toolbar.css({
                  position: 'fixed',
                  top: otherBarHeight,
                  width: editorWidth
              });
          }
          else {
              this.$toolbar.css({
                  position: 'relative',
                  top: 0,
                  width: '100%'
              });
          }
      };
      Toolbar.prototype.changeContainer = function (isFullscreen) {
          if (isFullscreen) {
              this.$toolbar.prependTo(this.$editor);
          }
          else {
              if (this.options.toolbarContainer) {
                  this.$toolbar.appendTo(this.options.toolbarContainer);
              }
          }
      };
      Toolbar.prototype.updateFullscreen = function (isFullscreen) {
          this.ui.toggleBtnActive(this.$toolbar.find('.btn-fullscreen'), isFullscreen);
          this.changeContainer(isFullscreen);
      };
      Toolbar.prototype.updateCodeview = function (isCodeview) {
          this.ui.toggleBtnActive(this.$toolbar.find('.btn-codeview'), isCodeview);
          if (isCodeview) {
              this.deactivate();
          }
          else {
              this.activate();
          }
      };
      Toolbar.prototype.activate = function (isIncludeCodeview) {
          var $btn = this.$toolbar.find('button');
          if (!isIncludeCodeview) {
              $btn = $btn.not('.btn-codeview');
          }
          this.ui.toggleBtn($btn, true);
      };
      Toolbar.prototype.deactivate = function (isIncludeCodeview) {
          var $btn = this.$toolbar.find('button');
          if (!isIncludeCodeview) {
              $btn = $btn.not('.btn-codeview');
          }
          this.ui.toggleBtn($btn, false);
      };
      return Toolbar;
  }());

  var LinkDialog = /** @class */ (function () {
      function LinkDialog(context) {
          this.context = context;
          this.ui = $$1.summernote.ui;
          this.$body = $$1(document.body);
          this.$editor = context.layoutInfo.editor;
          this.options = context.options;
          this.lang = this.options.langInfo;
          context.memo('help.linkDialog.show', this.options.langInfo.help['linkDialog.show']);
      }
      LinkDialog.prototype.initialize = function () {
          var $container = this.options.dialogsInBody ? this.$body : this.$editor;
          var body = [
              '<div class="form-group note-form-group">',
              "<label class=\"note-form-label\">" + this.lang.link.textToDisplay + "</label>",
              '<input class="note-link-text form-control note-form-control note-input" type="text" />',
              '</div>',
              '<div class="form-group note-form-group">',
              "<label class=\"note-form-label\">" + this.lang.link.url + "</label>",
              '<input class="note-link-url form-control note-form-control note-input" type="text" value="http://" />',
              '</div>',
              !this.options.disableLinkTarget
                  ? $$1('<div/>').append(this.ui.checkbox({
                      className: 'sn-checkbox-open-in-new-window',
                      text: this.lang.link.openInNewWindow,
                      checked: true
                  }).render()).html()
                  : ''
          ].join('');
          var buttonClass = 'btn btn-primary note-btn note-btn-primary note-link-btn';
          var footer = "<input type=\"button\" href=\"#\" class=\"" + buttonClass + "\" value=\"" + this.lang.link.insert + "\" disabled>";
          this.$dialog = this.ui.dialog({
              className: 'link-dialog',
              title: this.lang.link.insert,
              fade: this.options.dialogsFade,
              body: body,
              footer: footer
          }).render().appendTo($container);
      };
      LinkDialog.prototype.destroy = function () {
          this.ui.hideDialog(this.$dialog);
          this.$dialog.remove();
      };
      LinkDialog.prototype.bindEnterKey = function ($input, $btn) {
          $input.on('keypress', function (event) {
              if (event.keyCode === key.code.ENTER) {
                  event.preventDefault();
                  $btn.trigger('click');
              }
          });
      };
      /**
       * toggle update button
       */
      LinkDialog.prototype.toggleLinkBtn = function ($linkBtn, $linkText, $linkUrl) {
          this.ui.toggleBtn($linkBtn, $linkText.val() && $linkUrl.val());
      };
      /**
       * Show link dialog and set event handlers on dialog controls.
       *
       * @param {Object} linkInfo
       * @return {Promise}
       */
      LinkDialog.prototype.showLinkDialog = function (linkInfo) {
          var _this = this;
          return $$1.Deferred(function (deferred) {
              var $linkText = _this.$dialog.find('.note-link-text');
              var $linkUrl = _this.$dialog.find('.note-link-url');
              var $linkBtn = _this.$dialog.find('.note-link-btn');
              var $openInNewWindow = _this.$dialog
                  .find('.sn-checkbox-open-in-new-window input[type=checkbox]');
              _this.ui.onDialogShown(_this.$dialog, function () {
                  _this.context.triggerEvent('dialog.shown');
                  // if no url was given, copy text to url
                  if (!linkInfo.url) {
                      linkInfo.url = linkInfo.text;
                  }
                  $linkText.val(linkInfo.text);
                  var handleLinkTextUpdate = function () {
                      _this.toggleLinkBtn($linkBtn, $linkText, $linkUrl);
                      // if linktext was modified by keyup,
                      // stop cloning text from linkUrl
                      linkInfo.text = $linkText.val();
                  };
                  $linkText.on('input', handleLinkTextUpdate).on('paste', function () {
                      setTimeout(handleLinkTextUpdate, 0);
                  });
                  var handleLinkUrlUpdate = function () {
                      _this.toggleLinkBtn($linkBtn, $linkText, $linkUrl);
                      // display same link on `Text to display` input
                      // when create a new link
                      if (!linkInfo.text) {
                          $linkText.val($linkUrl.val());
                      }
                  };
                  $linkUrl.on('input', handleLinkUrlUpdate).on('paste', function () {
                      setTimeout(handleLinkUrlUpdate, 0);
                  }).val(linkInfo.url);
                  if (!env.isSupportTouch) {
                      $linkUrl.trigger('focus');
                  }
                  _this.toggleLinkBtn($linkBtn, $linkText, $linkUrl);
                  _this.bindEnterKey($linkUrl, $linkBtn);
                  _this.bindEnterKey($linkText, $linkBtn);
                  var isNewWindowChecked = linkInfo.isNewWindow !== undefined
                      ? linkInfo.isNewWindow : _this.context.options.linkTargetBlank;
                  $openInNewWindow.prop('checked', isNewWindowChecked);
                  $linkBtn.one('click', function (event) {
                      event.preventDefault();
                      deferred.resolve({
                          range: linkInfo.range,
                          url: $linkUrl.val(),
                          text: $linkText.val(),
                          isNewWindow: $openInNewWindow.is(':checked')
                      });
                      _this.ui.hideDialog(_this.$dialog);
                  });
              });
              _this.ui.onDialogHidden(_this.$dialog, function () {
                  // detach events
                  $linkText.off('input paste keypress');
                  $linkUrl.off('input paste keypress');
                  $linkBtn.off('click');
                  if (deferred.state() === 'pending') {
                      deferred.reject();
                  }
              });
              _this.ui.showDialog(_this.$dialog);
          }).promise();
      };
      /**
       * @param {Object} layoutInfo
       */
      LinkDialog.prototype.show = function () {
          var _this = this;
          var linkInfo = this.context.invoke('editor.getLinkInfo');
          this.context.invoke('editor.saveRange');
          this.showLinkDialog(linkInfo).then(function (linkInfo) {
              _this.context.invoke('editor.restoreRange');
              _this.context.invoke('editor.createLink', linkInfo);
          }).fail(function () {
              _this.context.invoke('editor.restoreRange');
          });
      };
      return LinkDialog;
  }());

  var LinkPopover = /** @class */ (function () {
      function LinkPopover(context) {
          var _this = this;
          this.context = context;
          this.ui = $$1.summernote.ui;
          this.options = context.options;
          this.events = {
              'summernote.keyup summernote.mouseup summernote.change summernote.scroll': function () {
                  _this.update();
              },
              'summernote.disable summernote.dialog.shown': function () {
                  _this.hide();
              }
          };
      }
      LinkPopover.prototype.shouldInitialize = function () {
          return !lists.isEmpty(this.options.popover.link);
      };
      LinkPopover.prototype.initialize = function () {
          this.$popover = this.ui.popover({
              className: 'note-link-popover',
              callback: function ($node) {
                  var $content = $node.find('.popover-content,.note-popover-content');
                  $content.prepend('<span><a target="_blank"></a>&nbsp;</span>');
              }
          }).render().appendTo(this.options.container);
          var $content = this.$popover.find('.popover-content,.note-popover-content');
          this.context.invoke('buttons.build', $content, this.options.popover.link);
      };
      LinkPopover.prototype.destroy = function () {
          this.$popover.remove();
      };
      LinkPopover.prototype.update = function () {
          // Prevent focusing on editable when invoke('code') is executed
          if (!this.context.invoke('editor.hasFocus')) {
              this.hide();
              return;
          }
          var rng = this.context.invoke('editor.createRange');
          if (rng.isCollapsed() && rng.isOnAnchor()) {
              var anchor = dom.ancestor(rng.sc, dom.isAnchor);
              var href = $$1(anchor).attr('href');
              this.$popover.find('a').attr('href', href).html(href);
              var pos = dom.posFromPlaceholder(anchor);
              this.$popover.css({
                  display: 'block',
                  left: pos.left,
                  top: pos.top
              });
          }
          else {
              this.hide();
          }
      };
      LinkPopover.prototype.hide = function () {
          this.$popover.hide();
      };
      return LinkPopover;
  }());

  var ImageDialog = /** @class */ (function () {
      function ImageDialog(context) {
          this.context = context;
          this.ui = $$1.summernote.ui;
          this.$body = $$1(document.body);
          this.$editor = context.layoutInfo.editor;
          this.options = context.options;
          this.lang = this.options.langInfo;
      }
      ImageDialog.prototype.initialize = function () {
          var $container = this.options.dialogsInBody ? this.$body : this.$editor;
          var imageLimitation = '';
          if (this.options.maximumImageFileSize) {
              var unit = Math.floor(Math.log(this.options.maximumImageFileSize) / Math.log(1024));
              var readableSize = (this.options.maximumImageFileSize / Math.pow(1024, unit)).toFixed(2) * 1 +
                  ' ' + ' KMGTP'[unit] + 'B';
              imageLimitation = "<small>" + (this.lang.image.maximumFileSize + ' : ' + readableSize) + "</small>";
          }
          var body = [
              '<div class="form-group note-form-group note-group-select-from-files">',
              '<label class="note-form-label">' + this.lang.image.selectFromFiles + '</label>',
              '<input class="note-image-input note-form-control note-input" ',
              ' type="file" name="files" accept="image/*" multiple="multiple" />',
              imageLimitation,
              '</div>',
              '<div class="form-group note-group-image-url" style="overflow:auto;">',
              '<label class="note-form-label">' + this.lang.image.url + '</label>',
              '<input class="note-image-url form-control note-form-control note-input ',
              ' col-md-12" type="text" />',
              '</div>'
          ].join('');
          var buttonClass = 'btn btn-primary note-btn note-btn-primary note-image-btn';
          var footer = "<input type=\"button\" href=\"#\" class=\"" + buttonClass + "\" value=\"" + this.lang.image.insert + "\" disabled>";
          this.$dialog = this.ui.dialog({
              title: this.lang.image.insert,
              fade: this.options.dialogsFade,
              body: body,
              footer: footer
          }).render().appendTo($container);
      };
      ImageDialog.prototype.destroy = function () {
          this.ui.hideDialog(this.$dialog);
          this.$dialog.remove();
      };
      ImageDialog.prototype.bindEnterKey = function ($input, $btn) {
          $input.on('keypress', function (event) {
              if (event.keyCode === key.code.ENTER) {
                  event.preventDefault();
                  $btn.trigger('click');
              }
          });
      };
      ImageDialog.prototype.show = function () {
          var _this = this;
          this.context.invoke('editor.saveRange');
          this.showImageDialog().then(function (data) {
              // [workaround] hide dialog before restore range for IE range focus
              _this.ui.hideDialog(_this.$dialog);
              _this.context.invoke('editor.restoreRange');
              if (typeof data === 'string') { // image url
                  // If onImageLinkInsert set,
                  if (_this.options.callbacks.onImageLinkInsert) {
                      _this.context.triggerEvent('image.link.insert', data);
                  }
                  else {
                      _this.context.invoke('editor.insertImage', data);
                  }
              }
              else { // array of files
                  // If onImageUpload set,
                  if (_this.options.callbacks.onImageUpload) {
                      _this.context.triggerEvent('image.upload', data);
                  }
                  else {
                      // else insert Image as dataURL
                      _this.context.invoke('editor.insertImagesAsDataURL', data);
                  }
              }
          }).fail(function () {
              _this.context.invoke('editor.restoreRange');
          });
      };
      /**
       * show image dialog
       *
       * @param {jQuery} $dialog
       * @return {Promise}
       */
      ImageDialog.prototype.showImageDialog = function () {
          var _this = this;
          return $$1.Deferred(function (deferred) {
              var $imageInput = _this.$dialog.find('.note-image-input');
              var $imageUrl = _this.$dialog.find('.note-image-url');
              var $imageBtn = _this.$dialog.find('.note-image-btn');
              _this.ui.onDialogShown(_this.$dialog, function () {
                  _this.context.triggerEvent('dialog.shown');
                  // Cloning imageInput to clear element.
                  $imageInput.replaceWith($imageInput.clone().on('change', function (event) {
                      deferred.resolve(event.target.files || event.target.value);
                  }).val(''));
                  $imageBtn.click(function (event) {
                      event.preventDefault();
                      deferred.resolve($imageUrl.val());
                  });
                  $imageUrl.on('keyup paste', function () {
                      var url = $imageUrl.val();
                      _this.ui.toggleBtn($imageBtn, url);
                  }).val('');
                  if (!env.isSupportTouch) {
                      $imageUrl.trigger('focus');
                  }
                  _this.bindEnterKey($imageUrl, $imageBtn);
              });
              _this.ui.onDialogHidden(_this.$dialog, function () {
                  $imageInput.off('change');
                  $imageUrl.off('keyup paste keypress');
                  $imageBtn.off('click');
                  if (deferred.state() === 'pending') {
                      deferred.reject();
                  }
              });
              _this.ui.showDialog(_this.$dialog);
          });
      };
      return ImageDialog;
  }());

  /**
   * Image popover module
   *  mouse events that show/hide popover will be handled by Handle.js.
   *  Handle.js will receive the events and invoke 'imagePopover.update'.
   */
  var ImagePopover = /** @class */ (function () {
      function ImagePopover(context) {
          var _this = this;
          this.context = context;
          this.ui = $$1.summernote.ui;
          this.editable = context.layoutInfo.editable[0];
          this.options = context.options;
          this.events = {
              'summernote.disable': function () {
                  _this.hide();
              }
          };
      }
      ImagePopover.prototype.shouldInitialize = function () {
          return !lists.isEmpty(this.options.popover.image);
      };
      ImagePopover.prototype.initialize = function () {
          this.$popover = this.ui.popover({
              className: 'note-image-popover'
          }).render().appendTo(this.options.container);
          var $content = this.$popover.find('.popover-content,.note-popover-content');
          this.context.invoke('buttons.build', $content, this.options.popover.image);
      };
      ImagePopover.prototype.destroy = function () {
          this.$popover.remove();
      };
      ImagePopover.prototype.update = function (target) {
          if (dom.isImg(target)) {
              var pos = dom.posFromPlaceholder(target);
              var posEditor = dom.posFromPlaceholder(this.editable);
              this.$popover.css({
                  display: 'block',
                  left: this.options.popatmouse ? event.pageX - 20 : pos.left,
                  top: this.options.popatmouse ? event.pageY : Math.min(pos.top, posEditor.top)
              });
          }
          else {
              this.hide();
          }
      };
      ImagePopover.prototype.hide = function () {
          this.$popover.hide();
      };
      return ImagePopover;
  }());

  var TablePopover = /** @class */ (function () {
      function TablePopover(context) {
          var _this = this;
          this.context = context;
          this.ui = $$1.summernote.ui;
          this.options = context.options;
          this.events = {
              'summernote.mousedown': function (we, e) {
                  _this.update(e.target);
              },
              'summernote.keyup summernote.scroll summernote.change': function () {
                  _this.update();
              },
              'summernote.disable': function () {
                  _this.hide();
              }
          };
      }
      TablePopover.prototype.shouldInitialize = function () {
          return !lists.isEmpty(this.options.popover.table);
      };
      TablePopover.prototype.initialize = function () {
          this.$popover = this.ui.popover({
              className: 'note-table-popover'
          }).render().appendTo(this.options.container);
          var $content = this.$popover.find('.popover-content,.note-popover-content');
          this.context.invoke('buttons.build', $content, this.options.popover.table);
          // [workaround] Disable Firefox's default table editor
          if (env.isFF) {
              document.execCommand('enableInlineTableEditing', false, false);
          }
      };
      TablePopover.prototype.destroy = function () {
          this.$popover.remove();
      };
      TablePopover.prototype.update = function (target) {
          if (this.context.isDisabled()) {
              return false;
          }
          var isCell = dom.isCell(target);
          if (isCell) {
              var pos = dom.posFromPlaceholder(target);
              this.$popover.css({
                  display: 'block',
                  left: pos.left,
                  top: pos.top
              });
          }
          else {
              this.hide();
          }
          return isCell;
      };
      TablePopover.prototype.hide = function () {
          this.$popover.hide();
      };
      return TablePopover;
  }());

  var VideoDialog = /** @class */ (function () {
      function VideoDialog(context) {
          this.context = context;
          this.ui = $$1.summernote.ui;
          this.$body = $$1(document.body);
          this.$editor = context.layoutInfo.editor;
          this.options = context.options;
          this.lang = this.options.langInfo;
      }
      VideoDialog.prototype.initialize = function () {
          var $container = this.options.dialogsInBody ? this.$body : this.$editor;
          var body = [
              '<div class="form-group note-form-group row-fluid">',
              "<label class=\"note-form-label\">" + this.lang.video.url + " <small class=\"text-muted\">" + this.lang.video.providers + "</small></label>",
              '<input class="note-video-url form-control note-form-control note-input" type="text" />',
              '</div>'
          ].join('');
          var buttonClass = 'btn btn-primary note-btn note-btn-primary note-video-btn';
          var footer = "<input type=\"button\" href=\"#\" class=\"" + buttonClass + "\" value=\"" + this.lang.video.insert + "\" disabled>";
          this.$dialog = this.ui.dialog({
              title: this.lang.video.insert,
              fade: this.options.dialogsFade,
              body: body,
              footer: footer
          }).render().appendTo($container);
      };
      VideoDialog.prototype.destroy = function () {
          this.ui.hideDialog(this.$dialog);
          this.$dialog.remove();
      };
      VideoDialog.prototype.bindEnterKey = function ($input, $btn) {
          $input.on('keypress', function (event) {
              if (event.keyCode === key.code.ENTER) {
                  event.preventDefault();
                  $btn.trigger('click');
              }
          });
      };
      VideoDialog.prototype.createVideoNode = function (url) {
          // video url patterns(youtube, instagram, vimeo, dailymotion, youku, mp4, ogg, webm)
          var ytRegExp = /\/\/(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w|-]{11})(?:(?:[\?&]t=)(\S+))?$/;
          var ytRegExpForStart = /^(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?$/;
          var ytMatch = url.match(ytRegExp);
          var igRegExp = /(?:www\.|\/\/)instagram\.com\/p\/(.[a-zA-Z0-9_-]*)/;
          var igMatch = url.match(igRegExp);
          var vRegExp = /\/\/vine\.co\/v\/([a-zA-Z0-9]+)/;
          var vMatch = url.match(vRegExp);
          var vimRegExp = /\/\/(player\.)?vimeo\.com\/([a-z]*\/)*(\d+)[?]?.*/;
          var vimMatch = url.match(vimRegExp);
          var dmRegExp = /.+dailymotion.com\/(video|hub)\/([^_]+)[^#]*(#video=([^_&]+))?/;
          var dmMatch = url.match(dmRegExp);
          var youkuRegExp = /\/\/v\.youku\.com\/v_show\/id_(\w+)=*\.html/;
          var youkuMatch = url.match(youkuRegExp);
          var qqRegExp = /\/\/v\.qq\.com.*?vid=(.+)/;
          var qqMatch = url.match(qqRegExp);
          var qqRegExp2 = /\/\/v\.qq\.com\/x?\/?(page|cover).*?\/([^\/]+)\.html\??.*/;
          var qqMatch2 = url.match(qqRegExp2);
          var mp4RegExp = /^.+.(mp4|m4v)$/;
          var mp4Match = url.match(mp4RegExp);
          var oggRegExp = /^.+.(ogg|ogv)$/;
          var oggMatch = url.match(oggRegExp);
          var webmRegExp = /^.+.(webm)$/;
          var webmMatch = url.match(webmRegExp);
          var $video;
          if (ytMatch && ytMatch[1].length === 11) {
              var youtubeId = ytMatch[1];
              var start = 0;
              if (typeof ytMatch[2] !== 'undefined') {
                  var ytMatchForStart = ytMatch[2].match(ytRegExpForStart);
                  if (ytMatchForStart) {
                      for (var n = [3600, 60, 1], i = 0, r = n.length; i < r; i++) {
                          start += (typeof ytMatchForStart[i + 1] !== 'undefined' ? n[i] * parseInt(ytMatchForStart[i + 1], 10) : 0);
                      }
                  }
              }
              $video = $$1('<iframe>')
                  .attr('frameborder', 0)
                  .attr('src', '//www.youtube.com/embed/' + youtubeId + (start > 0 ? '?start=' + start : ''))
                  .attr('width', '640').attr('height', '360');
          }
          else if (igMatch && igMatch[0].length) {
              $video = $$1('<iframe>')
                  .attr('frameborder', 0)
                  .attr('src', 'https://instagram.com/p/' + igMatch[1] + '/embed/')
                  .attr('width', '612').attr('height', '710')
                  .attr('scrolling', 'no')
                  .attr('allowtransparency', 'true');
          }
          else if (vMatch && vMatch[0].length) {
              $video = $$1('<iframe>')
                  .attr('frameborder', 0)
                  .attr('src', vMatch[0] + '/embed/simple')
                  .attr('width', '600').attr('height', '600')
                  .attr('class', 'vine-embed');
          }
          else if (vimMatch && vimMatch[3].length) {
              $video = $$1('<iframe webkitallowfullscreen mozallowfullscreen allowfullscreen>')
                  .attr('frameborder', 0)
                  .attr('src', '//player.vimeo.com/video/' + vimMatch[3])
                  .attr('width', '640').attr('height', '360');
          }
          else if (dmMatch && dmMatch[2].length) {
              $video = $$1('<iframe>')
                  .attr('frameborder', 0)
                  .attr('src', '//www.dailymotion.com/embed/video/' + dmMatch[2])
                  .attr('width', '640').attr('height', '360');
          }
          else if (youkuMatch && youkuMatch[1].length) {
              $video = $$1('<iframe webkitallowfullscreen mozallowfullscreen allowfullscreen>')
                  .attr('frameborder', 0)
                  .attr('height', '498')
                  .attr('width', '510')
                  .attr('src', '//player.youku.com/embed/' + youkuMatch[1]);
          }
          else if ((qqMatch && qqMatch[1].length) || (qqMatch2 && qqMatch2[2].length)) {
              var vid = ((qqMatch && qqMatch[1].length) ? qqMatch[1] : qqMatch2[2]);
              $video = $$1('<iframe webkitallowfullscreen mozallowfullscreen allowfullscreen>')
                  .attr('frameborder', 0)
                  .attr('height', '310')
                  .attr('width', '500')
                  .attr('src', 'http://v.qq.com/iframe/player.html?vid=' + vid + '&amp;auto=0');
          }
          else if (mp4Match || oggMatch || webmMatch) {
              $video = $$1('<video controls>')
                  .attr('src', url)
                  .attr('width', '640').attr('height', '360');
          }
          else {
              // this is not a known video link. Now what, Cat? Now what?
              return false;
          }
          $video.addClass('note-video-clip');
          return $video[0];
      };
      VideoDialog.prototype.show = function () {
          var _this = this;
          var text = this.context.invoke('editor.getSelectedText');
          this.context.invoke('editor.saveRange');
          this.showVideoDialog(text).then(function (url) {
              // [workaround] hide dialog before restore range for IE range focus
              _this.ui.hideDialog(_this.$dialog);
              _this.context.invoke('editor.restoreRange');
              // build node
              var $node = _this.createVideoNode(url);
              if ($node) {
                  // insert video node
                  _this.context.invoke('editor.insertNode', $node);
              }
          }).fail(function () {
              _this.context.invoke('editor.restoreRange');
          });
      };
      /**
       * show image dialog
       *
       * @param {jQuery} $dialog
       * @return {Promise}
       */
      VideoDialog.prototype.showVideoDialog = function (text) {
          var _this = this;
          return $$1.Deferred(function (deferred) {
              var $videoUrl = _this.$dialog.find('.note-video-url');
              var $videoBtn = _this.$dialog.find('.note-video-btn');
              _this.ui.onDialogShown(_this.$dialog, function () {
                  _this.context.triggerEvent('dialog.shown');
                  $videoUrl.val(text).on('input', function () {
                      _this.ui.toggleBtn($videoBtn, $videoUrl.val());
                  });
                  if (!env.isSupportTouch) {
                      $videoUrl.trigger('focus');
                  }
                  $videoBtn.click(function (event) {
                      event.preventDefault();
                      deferred.resolve($videoUrl.val());
                  });
                  _this.bindEnterKey($videoUrl, $videoBtn);
              });
              _this.ui.onDialogHidden(_this.$dialog, function () {
                  $videoUrl.off('input');
                  $videoBtn.off('click');
                  if (deferred.state() === 'pending') {
                      deferred.reject();
                  }
              });
              _this.ui.showDialog(_this.$dialog);
          });
      };
      return VideoDialog;
  }());

  var HelpDialog = /** @class */ (function () {
      function HelpDialog(context) {
          this.context = context;
          this.ui = $$1.summernote.ui;
          this.$body = $$1(document.body);
          this.$editor = context.layoutInfo.editor;
          this.options = context.options;
          this.lang = this.options.langInfo;
      }
      HelpDialog.prototype.initialize = function () {
          var $container = this.options.dialogsInBody ? this.$body : this.$editor;
          var body = [
              '<p class="text-center">',
              '<a href="http://summernote.org/" target="_blank">Summernote 0.8.11</a> · ',
              '<a href="https://github.com/summernote/summernote" target="_blank">Project</a> · ',
              '<a href="https://github.com/summernote/summernote/issues" target="_blank">Issues</a>',
              '</p>'
          ].join('');
          this.$dialog = this.ui.dialog({
              title: this.lang.options.help,
              fade: this.options.dialogsFade,
              body: this.createShortcutList(),
              footer: body,
              callback: function ($node) {
                  $node.find('.modal-body,.note-modal-body').css({
                      'max-height': 300,
                      'overflow': 'scroll'
                  });
              }
          }).render().appendTo($container);
      };
      HelpDialog.prototype.destroy = function () {
          this.ui.hideDialog(this.$dialog);
          this.$dialog.remove();
      };
      HelpDialog.prototype.createShortcutList = function () {
          var _this = this;
          var keyMap = this.options.keyMap[env.isMac ? 'mac' : 'pc'];
          return Object.keys(keyMap).map(function (key) {
              var command = keyMap[key];
              var $row = $$1('<div><div class="help-list-item"/></div>');
              $row.append($$1('<label><kbd>' + key + '</kdb></label>').css({
                  'width': 180,
                  'margin-right': 10
              })).append($$1('<span/>').html(_this.context.memo('help.' + command) || command));
              return $row.html();
          }).join('');
      };
      /**
       * show help dialog
       *
       * @return {Promise}
       */
      HelpDialog.prototype.showHelpDialog = function () {
          var _this = this;
          return $$1.Deferred(function (deferred) {
              _this.ui.onDialogShown(_this.$dialog, function () {
                  _this.context.triggerEvent('dialog.shown');
                  deferred.resolve();
              });
              _this.ui.showDialog(_this.$dialog);
          }).promise();
      };
      HelpDialog.prototype.show = function () {
          var _this = this;
          this.context.invoke('editor.saveRange');
          this.showHelpDialog().then(function () {
              _this.context.invoke('editor.restoreRange');
          });
      };
      return HelpDialog;
  }());

  var AIR_MODE_POPOVER_X_OFFSET = 20;
  var AirPopover = /** @class */ (function () {
      function AirPopover(context) {
          var _this = this;
          this.context = context;
          this.ui = $$1.summernote.ui;
          this.options = context.options;
          this.events = {
              'summernote.keyup summernote.mouseup summernote.scroll': function () {
                  _this.update();
              },
              'summernote.disable summernote.change summernote.dialog.shown': function () {
                  _this.hide();
              },
              'summernote.focusout': function (we, e) {
                  // [workaround] Firefox doesn't support relatedTarget on focusout
                  //  - Ignore hide action on focus out in FF.
                  if (env.isFF) {
                      return;
                  }
                  if (!e.relatedTarget || !dom.ancestor(e.relatedTarget, func.eq(_this.$popover[0]))) {
                      _this.hide();
                  }
              }
          };
      }
      AirPopover.prototype.shouldInitialize = function () {
          return this.options.airMode && !lists.isEmpty(this.options.popover.air);
      };
      AirPopover.prototype.initialize = function () {
          this.$popover = this.ui.popover({
              className: 'note-air-popover'
          }).render().appendTo(this.options.container);
          var $content = this.$popover.find('.popover-content');
          this.context.invoke('buttons.build', $content, this.options.popover.air);
      };
      AirPopover.prototype.destroy = function () {
          this.$popover.remove();
      };
      AirPopover.prototype.update = function () {
          var styleInfo = this.context.invoke('editor.currentStyle');
          if (styleInfo.range && !styleInfo.range.isCollapsed()) {
              var rect = lists.last(styleInfo.range.getClientRects());
              if (rect) {
                  var bnd = func.rect2bnd(rect);
                  this.$popover.css({
                      display: 'block',
                      left: Math.max(bnd.left + bnd.width / 2, 0) - AIR_MODE_POPOVER_X_OFFSET,
                      top: bnd.top + bnd.height
                  });
                  this.context.invoke('buttons.updateCurrentStyle', this.$popover);
              }
          }
          else {
              this.hide();
          }
      };
      AirPopover.prototype.hide = function () {
          this.$popover.hide();
      };
      return AirPopover;
  }());

  var POPOVER_DIST = 5;
  var HintPopover = /** @class */ (function () {
      function HintPopover(context) {
          var _this = this;
          this.context = context;
          this.ui = $$1.summernote.ui;
          this.$editable = context.layoutInfo.editable;
          this.options = context.options;
          this.hint = this.options.hint || [];
          this.direction = this.options.hintDirection || 'bottom';
          this.hints = $$1.isArray(this.hint) ? this.hint : [this.hint];
          this.events = {
              'summernote.keyup': function (we, e) {
                  if (!e.isDefaultPrevented()) {
                      _this.handleKeyup(e);
                  }
              },
              'summernote.keydown': function (we, e) {
                  _this.handleKeydown(e);
              },
              'summernote.disable summernote.dialog.shown': function () {
                  _this.hide();
              }
          };
      }
      HintPopover.prototype.shouldInitialize = function () {
          return this.hints.length > 0;
      };
      HintPopover.prototype.initialize = function () {
          var _this = this;
          this.lastWordRange = null;
          this.$popover = this.ui.popover({
              className: 'note-hint-popover',
              hideArrow: true,
              direction: ''
          }).render().appendTo(this.options.container);
          this.$popover.hide();
          this.$content = this.$popover.find('.popover-content,.note-popover-content');
          this.$content.on('click', '.note-hint-item', function (e) {
              _this.$content.find('.active').removeClass('active');
              $$1(e.currentTarget).addClass('active');
              _this.replace();
          });
      };
      HintPopover.prototype.destroy = function () {
          this.$popover.remove();
      };
      HintPopover.prototype.selectItem = function ($item) {
          this.$content.find('.active').removeClass('active');
          $item.addClass('active');
          this.$content[0].scrollTop = $item[0].offsetTop - (this.$content.innerHeight() / 2);
      };
      HintPopover.prototype.moveDown = function () {
          var $current = this.$content.find('.note-hint-item.active');
          var $next = $current.next();
          if ($next.length) {
              this.selectItem($next);
          }
          else {
              var $nextGroup = $current.parent().next();
              if (!$nextGroup.length) {
                  $nextGroup = this.$content.find('.note-hint-group').first();
              }
              this.selectItem($nextGroup.find('.note-hint-item').first());
          }
      };
      HintPopover.prototype.moveUp = function () {
          var $current = this.$content.find('.note-hint-item.active');
          var $prev = $current.prev();
          if ($prev.length) {
              this.selectItem($prev);
          }
          else {
              var $prevGroup = $current.parent().prev();
              if (!$prevGroup.length) {
                  $prevGroup = this.$content.find('.note-hint-group').last();
              }
              this.selectItem($prevGroup.find('.note-hint-item').last());
          }
      };
      HintPopover.prototype.replace = function () {
          var $item = this.$content.find('.note-hint-item.active');
          if ($item.length) {
              var node = this.nodeFromItem($item);
              // XXX: consider to move codes to editor for recording redo/undo.
              this.lastWordRange.insertNode(node);
              range.createFromNode(node).collapse().select();
              this.lastWordRange = null;
              this.hide();
              this.context.triggerEvent('change', this.$editable.html(), this.$editable[0]);
              this.context.invoke('editor.focus');
          }
      };
      HintPopover.prototype.nodeFromItem = function ($item) {
          var hint = this.hints[$item.data('index')];
          var item = $item.data('item');
          var node = hint.content ? hint.content(item) : item;
          if (typeof node === 'string') {
              node = dom.createText(node);
          }
          return node;
      };
      HintPopover.prototype.createItemTemplates = function (hintIdx, items) {
          var hint = this.hints[hintIdx];
          return items.map(function (item, idx) {
              var $item = $$1('<div class="note-hint-item"/>');
              $item.append(hint.template ? hint.template(item) : item + '');
              $item.data({
                  'index': hintIdx,
                  'item': item
              });
              return $item;
          });
      };
      HintPopover.prototype.handleKeydown = function (e) {
          if (!this.$popover.is(':visible')) {
              return;
          }
          if (e.keyCode === key.code.ENTER) {
              e.preventDefault();
              this.replace();
          }
          else if (e.keyCode === key.code.UP) {
              e.preventDefault();
              this.moveUp();
          }
          else if (e.keyCode === key.code.DOWN) {
              e.preventDefault();
              this.moveDown();
          }
      };
      HintPopover.prototype.searchKeyword = function (index, keyword, callback) {
          var hint = this.hints[index];
          if (hint && hint.match.test(keyword) && hint.search) {
              var matches = hint.match.exec(keyword);
              hint.search(matches[1], callback);
          }
          else {
              callback();
          }
      };
      HintPopover.prototype.createGroup = function (idx, keyword) {
          var _this = this;
          var $group = $$1('<div class="note-hint-group note-hint-group-' + idx + '"/>');
          this.searchKeyword(idx, keyword, function (items) {
              items = items || [];
              if (items.length) {
                  $group.html(_this.createItemTemplates(idx, items));
                  _this.show();
              }
          });
          return $group;
      };
      HintPopover.prototype.handleKeyup = function (e) {
          var _this = this;
          if (!lists.contains([key.code.ENTER, key.code.UP, key.code.DOWN], e.keyCode)) {
              var wordRange = this.context.invoke('editor.createRange').getWordRange();
              var keyword_1 = wordRange.toString();
              if (this.hints.length && keyword_1) {
                  this.$content.empty();
                  var bnd = func.rect2bnd(lists.last(wordRange.getClientRects()));
                  if (bnd) {
                      this.$popover.hide();
                      this.lastWordRange = wordRange;
                      this.hints.forEach(function (hint, idx) {
                          if (hint.match.test(keyword_1)) {
                              _this.createGroup(idx, keyword_1).appendTo(_this.$content);
                          }
                      });
                      // select first .note-hint-item
                      this.$content.find('.note-hint-item:first').addClass('active');
                      // set position for popover after group is created
                      if (this.direction === 'top') {
                          this.$popover.css({
                              left: bnd.left,
                              top: bnd.top - this.$popover.outerHeight() - POPOVER_DIST
                          });
                      }
                      else {
                          this.$popover.css({
                              left: bnd.left,
                              top: bnd.top + bnd.height + POPOVER_DIST
                          });
                      }
                  }
              }
              else {
                  this.hide();
              }
          }
      };
      HintPopover.prototype.show = function () {
          this.$popover.show();
      };
      HintPopover.prototype.hide = function () {
          this.$popover.hide();
      };
      return HintPopover;
  }());

  var Context = /** @class */ (function () {
      /**
       * @param {jQuery} $note
       * @param {Object} options
       */
      function Context($note, options) {
          this.ui = $$1.summernote.ui;
          this.$note = $note;
          this.memos = {};
          this.modules = {};
          this.layoutInfo = {};
          this.options = options;
          this.initialize();
      }
      /**
       * create layout and initialize modules and other resources
       */
      Context.prototype.initialize = function () {
          this.layoutInfo = this.ui.createLayout(this.$note, this.options);
          this._initialize();
          this.$note.hide();
          return this;
      };
      /**
       * destroy modules and other resources and remove layout
       */
      Context.prototype.destroy = function () {
          this._destroy();
          this.$note.removeData('summernote');
          this.ui.removeLayout(this.$note, this.layoutInfo);
      };
      /**
       * destory modules and other resources and initialize it again
       */
      Context.prototype.reset = function () {
          var disabled = this.isDisabled();
          this.code(dom.emptyPara);
          this._destroy();
          this._initialize();
          if (disabled) {
              this.disable();
          }
      };
      Context.prototype._initialize = function () {
          var _this = this;
          // add optional buttons
          var buttons = $$1.extend({}, this.options.buttons);
          Object.keys(buttons).forEach(function (key) {
              _this.memo('button.' + key, buttons[key]);
          });
          var modules = $$1.extend({}, this.options.modules, $$1.summernote.plugins || {});
          // add and initialize modules
          Object.keys(modules).forEach(function (key) {
              _this.module(key, modules[key], true);
          });
          Object.keys(this.modules).forEach(function (key) {
              _this.initializeModule(key);
          });
      };
      Context.prototype._destroy = function () {
          var _this = this;
          // destroy modules with reversed order
          Object.keys(this.modules).reverse().forEach(function (key) {
              _this.removeModule(key);
          });
          Object.keys(this.memos).forEach(function (key) {
              _this.removeMemo(key);
          });
          // trigger custom onDestroy callback
          this.triggerEvent('destroy', this);
      };
      Context.prototype.code = function (html) {
          var isActivated = this.invoke('codeview.isActivated');
          if (html === undefined) {
              this.invoke('codeview.sync');
              return isActivated ? this.layoutInfo.codable.val() : this.layoutInfo.editable.html();
          }
          else {
              if (isActivated) {
                  this.layoutInfo.codable.val(html);
              }
              else {
                  this.layoutInfo.editable.html(html);
              }
              this.$note.val(html);
              this.triggerEvent('change', html);
          }
      };
      Context.prototype.isDisabled = function () {
          return this.layoutInfo.editable.attr('contenteditable') === 'false';
      };
      Context.prototype.enable = function () {
          this.layoutInfo.editable.attr('contenteditable', true);
          this.invoke('toolbar.activate', true);
          this.triggerEvent('disable', false);
      };
      Context.prototype.disable = function () {
          // close codeview if codeview is opend
          if (this.invoke('codeview.isActivated')) {
              this.invoke('codeview.deactivate');
          }
          this.layoutInfo.editable.attr('contenteditable', false);
          this.invoke('toolbar.deactivate', true);
          this.triggerEvent('disable', true);
      };
      Context.prototype.triggerEvent = function () {
          var namespace = lists.head(arguments);
          var args = lists.tail(lists.from(arguments));
          var callback = this.options.callbacks[func.namespaceToCamel(namespace, 'on')];
          if (callback) {
              callback.apply(this.$note[0], args);
          }
          this.$note.trigger('summernote.' + namespace, args);
      };
      Context.prototype.initializeModule = function (key) {
          var module = this.modules[key];
          module.shouldInitialize = module.shouldInitialize || func.ok;
          if (!module.shouldInitialize()) {
              return;
          }
          // initialize module
          if (module.initialize) {
              module.initialize();
          }
          // attach events
          if (module.events) {
              dom.attachEvents(this.$note, module.events);
          }
      };
      Context.prototype.module = function (key, ModuleClass, withoutIntialize) {
          if (arguments.length === 1) {
              return this.modules[key];
          }
          this.modules[key] = new ModuleClass(this);
          if (!withoutIntialize) {
              this.initializeModule(key);
          }
      };
      Context.prototype.removeModule = function (key) {
          var module = this.modules[key];
          if (module.shouldInitialize()) {
              if (module.events) {
                  dom.detachEvents(this.$note, module.events);
              }
              if (module.destroy) {
                  module.destroy();
              }
          }
          delete this.modules[key];
      };
      Context.prototype.memo = function (key, obj) {
          if (arguments.length === 1) {
              return this.memos[key];
          }
          this.memos[key] = obj;
      };
      Context.prototype.removeMemo = function (key) {
          if (this.memos[key] && this.memos[key].destroy) {
              this.memos[key].destroy();
          }
          delete this.memos[key];
      };
      /**
       * Some buttons need to change their visual style immediately once they get pressed
       */
      Context.prototype.createInvokeHandlerAndUpdateState = function (namespace, value) {
          var _this = this;
          return function (event) {
              _this.createInvokeHandler(namespace, value)(event);
              _this.invoke('buttons.updateCurrentStyle');
          };
      };
      Context.prototype.createInvokeHandler = function (namespace, value) {
          var _this = this;
          return function (event) {
              event.preventDefault();
              var $target = $$1(event.target);
              _this.invoke(namespace, value || $target.closest('[data-value]').data('value'), $target);
          };
      };
      Context.prototype.invoke = function () {
          var namespace = lists.head(arguments);
          var args = lists.tail(lists.from(arguments));
          var splits = namespace.split('.');
          var hasSeparator = splits.length > 1;
          var moduleName = hasSeparator && lists.head(splits);
          var methodName = hasSeparator ? lists.last(splits) : lists.head(splits);
          var module = this.modules[moduleName || 'editor'];
          if (!moduleName && this[methodName]) {
              return this[methodName].apply(this, args);
          }
          else if (module && module[methodName] && module.shouldInitialize()) {
              return module[methodName].apply(module, args);
          }
      };
      return Context;
  }());

  $$1.fn.extend({
      /**
       * Summernote API
       *
       * @param {Object|String}
       * @return {this}
       */
      summernote: function () {
          var type = $$1.type(lists.head(arguments));
          var isExternalAPICalled = type === 'string';
          var hasInitOptions = type === 'object';
          var options = $$1.extend({}, $$1.summernote.options, hasInitOptions ? lists.head(arguments) : {});
          // Update options
          options.langInfo = $$1.extend(true, {}, $$1.summernote.lang['en-US'], $$1.summernote.lang[options.lang]);
          options.icons = $$1.extend(true, {}, $$1.summernote.options.icons, options.icons);
          options.tooltip = options.tooltip === 'auto' ? !env.isSupportTouch : options.tooltip;
          this.each(function (idx, note) {
              var $note = $$1(note);
              if (!$note.data('summernote')) {
                  var context = new Context($note, options);
                  $note.data('summernote', context);
                  $note.data('summernote').triggerEvent('init', context.layoutInfo);
              }
          });
          var $note = this.first();
          if ($note.length) {
              var context = $note.data('summernote');
              if (isExternalAPICalled) {
                  return context.invoke.apply(context, lists.from(arguments));
              }
              else if (options.focus) {
                  context.invoke('editor.focus');
              }
          }
          return this;
      }
  });

  $$1.summernote = $$1.extend($$1.summernote, {
      version: '0.8.11',
      ui: ui,
      dom: dom,
      range: range,
      plugins: {},
      options: {
          modules: {
              'editor': Editor,
              'clipboard': Clipboard,
              'dropzone': Dropzone,
              'codeview': CodeView,
              'statusbar': Statusbar,
              'fullscreen': Fullscreen,
              'handle': Handle,
              // FIXME: HintPopover must be front of autolink
              //  - Script error about range when Enter key is pressed on hint popover
              'hintPopover': HintPopover,
              'autoLink': AutoLink,
              'autoSync': AutoSync,
              'placeholder': Placeholder,
              'buttons': Buttons,
              'toolbar': Toolbar,
              'linkDialog': LinkDialog,
              'linkPopover': LinkPopover,
              'imageDialog': ImageDialog,
              'imagePopover': ImagePopover,
              'tablePopover': TablePopover,
              'videoDialog': VideoDialog,
              'helpDialog': HelpDialog,
              'airPopover': AirPopover
          },
          buttons: {},
          lang: 'en-US',
          followingToolbar: true,
          otherStaticBar: '',
          // toolbar
          toolbar: [
              ['style', ['style']],
              ['font', ['bold', 'underline', 'clear']],
              ['fontname', ['fontname']],
              ['color', ['color']],
              ['para', ['ul', 'ol', 'paragraph']],
              ['table', ['table']],
              ['insert', ['link', 'picture', 'video']],
              ['view', ['fullscreen', 'codeview', 'help']]
          ],
          // popover
          popatmouse: true,
          popover: {
              image: [
                  ['imagesize', ['imageSize100', 'imageSize50', 'imageSize25']],
                  ['float', ['floatLeft', 'floatRight', 'floatNone']],
                  ['remove', ['removeMedia']]
              ],
              link: [
                  ['link', ['linkDialogShow', 'unlink']]
              ],
              table: [
                  ['add', ['addRowDown', 'addRowUp', 'addColLeft', 'addColRight']],
                  ['delete', ['deleteRow', 'deleteCol', 'deleteTable']]
              ],
              air: [
                  ['color', ['color']],
                  ['font', ['bold', 'underline', 'clear']],
                  ['para', ['ul', 'paragraph']],
                  ['table', ['table']],
                  ['insert', ['link', 'picture']]
              ]
          },
          // air mode: inline editor
          airMode: false,
          width: null,
          height: null,
          linkTargetBlank: true,
          focus: false,
          tabSize: 4,
          styleWithSpan: true,
          shortcuts: true,
          textareaAutoSync: true,
          hintDirection: 'bottom',
          tooltip: 'auto',
          container: 'body',
          maxTextLength: 0,
          blockquoteBreakingLevel: 2,
          styleTags: ['p', 'blockquote', 'pre', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
          fontNames: [
              'Arial', 'Arial Black', 'Comic Sans MS', 'Courier New',
              'Helvetica Neue', 'Helvetica', 'Impact', 'Lucida Grande',
              'Tahoma', 'Times New Roman', 'Verdana'
          ],
          fontSizes: ['8', '9', '10', '11', '12', '14', '18', '24', '36'],
          // pallete colors(n x n)
          colors: [
              ['#000000', '#424242', '#636363', '#9C9C94', '#CEC6CE', '#EFEFEF', '#F7F7F7', '#FFFFFF'],
              ['#FF0000', '#FF9C00', '#FFFF00', '#00FF00', '#00FFFF', '#0000FF', '#9C00FF', '#FF00FF'],
              ['#F7C6CE', '#FFE7CE', '#FFEFC6', '#D6EFD6', '#CEDEE7', '#CEE7F7', '#D6D6E7', '#E7D6DE'],
              ['#E79C9C', '#FFC69C', '#FFE79C', '#B5D6A5', '#A5C6CE', '#9CC6EF', '#B5A5D6', '#D6A5BD'],
              ['#E76363', '#F7AD6B', '#FFD663', '#94BD7B', '#73A5AD', '#6BADDE', '#8C7BC6', '#C67BA5'],
              ['#CE0000', '#E79439', '#EFC631', '#6BA54A', '#4A7B8C', '#3984C6', '#634AA5', '#A54A7B'],
              ['#9C0000', '#B56308', '#BD9400', '#397B21', '#104A5A', '#085294', '#311873', '#731842'],
              ['#630000', '#7B3900', '#846300', '#295218', '#083139', '#003163', '#21104A', '#4A1031']
          ],
          // http://chir.ag/projects/name-that-color/
          colorsName: [
              ['Black', 'Tundora', 'Dove Gray', 'Star Dust', 'Pale Slate', 'Gallery', 'Alabaster', 'White'],
              ['Red', 'Orange Peel', 'Yellow', 'Green', 'Cyan', 'Blue', 'Electric Violet', 'Magenta'],
              ['Azalea', 'Karry', 'Egg White', 'Zanah', 'Botticelli', 'Tropical Blue', 'Mischka', 'Twilight'],
              ['Tonys Pink', 'Peach Orange', 'Cream Brulee', 'Sprout', 'Casper', 'Perano', 'Cold Purple', 'Careys Pink'],
              ['Mandy', 'Rajah', 'Dandelion', 'Olivine', 'Gulf Stream', 'Viking', 'Blue Marguerite', 'Puce'],
              ['Guardsman Red', 'Fire Bush', 'Golden Dream', 'Chelsea Cucumber', 'Smalt Blue', 'Boston Blue', 'Butterfly Bush', 'Cadillac'],
              ['Sangria', 'Mai Tai', 'Buddha Gold', 'Forest Green', 'Eden', 'Venice Blue', 'Meteorite', 'Claret'],
              ['Rosewood', 'Cinnamon', 'Olive', 'Parsley', 'Tiber', 'Midnight Blue', 'Valentino', 'Loulou']
          ],
          lineHeights: ['1.0', '1.2', '1.4', '1.5', '1.6', '1.8', '2.0', '3.0'],
          tableClassName: 'table table-bordered',
          insertTableMaxSize: {
              col: 10,
              row: 10
          },
          dialogsInBody: false,
          dialogsFade: false,
          maximumImageFileSize: null,
          callbacks: {
              onInit: null,
              onFocus: null,
              onBlur: null,
              onBlurCodeview: null,
              onEnter: null,
              onKeyup: null,
              onKeydown: null,
              onImageUpload: null,
              onImageUploadError: null,
              onImageLinkInsert: null
          },
          codemirror: {
              mode: 'text/html',
              htmlMode: true,
              lineNumbers: true
          },
          keyMap: {
              pc: {
                  'ENTER': 'insertParagraph',
                  'CTRL+Z': 'undo',
                  'CTRL+Y': 'redo',
                  'TAB': 'tab',
                  'SHIFT+TAB': 'untab',
                  'CTRL+B': 'bold',
                  'CTRL+I': 'italic',
                  'CTRL+U': 'underline',
                  'CTRL+SHIFT+S': 'strikethrough',
                  'CTRL+BACKSLASH': 'removeFormat',
                  'CTRL+SHIFT+L': 'justifyLeft',
                  'CTRL+SHIFT+E': 'justifyCenter',
                  'CTRL+SHIFT+R': 'justifyRight',
                  'CTRL+SHIFT+J': 'justifyFull',
                  'CTRL+SHIFT+NUM7': 'insertUnorderedList',
                  'CTRL+SHIFT+NUM8': 'insertOrderedList',
                  'CTRL+LEFTBRACKET': 'outdent',
                  'CTRL+RIGHTBRACKET': 'indent',
                  'CTRL+NUM0': 'formatPara',
                  'CTRL+NUM1': 'formatH1',
                  'CTRL+NUM2': 'formatH2',
                  'CTRL+NUM3': 'formatH3',
                  'CTRL+NUM4': 'formatH4',
                  'CTRL+NUM5': 'formatH5',
                  'CTRL+NUM6': 'formatH6',
                  'CTRL+ENTER': 'insertHorizontalRule',
                  'CTRL+K': 'linkDialog.show'
              },
              mac: {
                  'ENTER': 'insertParagraph',
                  'CMD+Z': 'undo',
                  'CMD+SHIFT+Z': 'redo',
                  'TAB': 'tab',
                  'SHIFT+TAB': 'untab',
                  'CMD+B': 'bold',
                  'CMD+I': 'italic',
                  'CMD+U': 'underline',
                  'CMD+SHIFT+S': 'strikethrough',
                  'CMD+BACKSLASH': 'removeFormat',
                  'CMD+SHIFT+L': 'justifyLeft',
                  'CMD+SHIFT+E': 'justifyCenter',
                  'CMD+SHIFT+R': 'justifyRight',
                  'CMD+SHIFT+J': 'justifyFull',
                  'CMD+SHIFT+NUM7': 'insertUnorderedList',
                  'CMD+SHIFT+NUM8': 'insertOrderedList',
                  'CMD+LEFTBRACKET': 'outdent',
                  'CMD+RIGHTBRACKET': 'indent',
                  'CMD+NUM0': 'formatPara',
                  'CMD+NUM1': 'formatH1',
                  'CMD+NUM2': 'formatH2',
                  'CMD+NUM3': 'formatH3',
                  'CMD+NUM4': 'formatH4',
                  'CMD+NUM5': 'formatH5',
                  'CMD+NUM6': 'formatH6',
                  'CMD+ENTER': 'insertHorizontalRule',
                  'CMD+K': 'linkDialog.show'
              }
          },
          icons: {
              'align': 'note-icon-align',
              'alignCenter': 'note-icon-align-center',
              'alignJustify': 'note-icon-align-justify',
              'alignLeft': 'note-icon-align-left',
              'alignRight': 'note-icon-align-right',
              'rowBelow': 'note-icon-row-below',
              'colBefore': 'note-icon-col-before',
              'colAfter': 'note-icon-col-after',
              'rowAbove': 'note-icon-row-above',
              'rowRemove': 'note-icon-row-remove',
              'colRemove': 'note-icon-col-remove',
              'indent': 'note-icon-align-indent',
              'outdent': 'note-icon-align-outdent',
              'arrowsAlt': 'note-icon-arrows-alt',
              'bold': 'note-icon-bold',
              'caret': 'note-icon-caret',
              'circle': 'note-icon-circle',
              'close': 'note-icon-close',
              'code': 'note-icon-code',
              'eraser': 'note-icon-eraser',
              'font': 'note-icon-font',
              'frame': 'note-icon-frame',
              'italic': 'note-icon-italic',
              'link': 'note-icon-link',
              'unlink': 'note-icon-chain-broken',
              'magic': 'note-icon-magic',
              'menuCheck': 'note-icon-menu-check',
              'minus': 'note-icon-minus',
              'orderedlist': 'note-icon-orderedlist',
              'pencil': 'note-icon-pencil',
              'picture': 'note-icon-picture',
              'question': 'note-icon-question',
              'redo': 'note-icon-redo',
              'square': 'note-icon-square',
              'strikethrough': 'note-icon-strikethrough',
              'subscript': 'note-icon-subscript',
              'superscript': 'note-icon-superscript',
              'table': 'note-icon-table',
              'textHeight': 'note-icon-text-height',
              'trash': 'note-icon-trash',
              'underline': 'note-icon-underline',
              'undo': 'note-icon-undo',
              'unorderedlist': 'note-icon-unorderedlist',
              'video': 'note-icon-video'
          }
      }
  });

})));
//# sourceMappingURL=summernote.js.map

!function(t,e,s,i){function o(e,o){this.w=t(s),this.el=t(e),(o=o||a).rootClass!==i&&"dd"!==o.rootClass&&(o.listClass=o.listClass?o.listClass:o.rootClass+"-list",o.itemClass=o.itemClass?o.itemClass:o.rootClass+"-item",o.dragClass=o.dragClass?o.dragClass:o.rootClass+"-dragel",o.handleClass=o.handleClass?o.handleClass:o.rootClass+"-handle",o.collapsedClass=o.collapsedClass?o.collapsedClass:o.rootClass+"-collapsed",o.placeClass=o.placeClass?o.placeClass:o.rootClass+"-placeholder",o.noDragClass=o.noDragClass?o.noDragClass:o.rootClass+"-nodrag",o.noChildrenClass=o.noChildrenClass?o.noChildrenClass:o.rootClass+"-nochildren",o.emptyClass=o.emptyClass?o.emptyClass:o.rootClass+"-empty"),this.options=t.extend({},a,o),this.options.json!==i&&this._build(),this.init()}var n="ontouchstart"in s,l=function(){var t=s.createElement("div"),i=s.documentElement;if(!("pointerEvents"in t.style))return!1;t.style.pointerEvents="auto",t.style.pointerEvents="x",i.appendChild(t);var o=e.getComputedStyle&&"auto"===e.getComputedStyle(t,"").pointerEvents;return i.removeChild(t),!!o}(),a={contentCallback:function(t){return t.content?t.content:t.id},listNodeName:"ol",itemNodeName:"li",handleNodeName:"div",contentNodeName:"span",rootClass:"dd",listClass:"dd-list",itemClass:"dd-item",dragClass:"dd-dragel",handleClass:"dd-handle",contentClass:"dd-content",collapsedClass:"dd-collapsed",placeClass:"dd-placeholder",noDragClass:"dd-nodrag",noChildrenClass:"dd-nochildren",emptyClass:"dd-empty",expandBtnHTML:'<button class="dd-expand" data-action="expand" type="button">Expand</button>',collapseBtnHTML:'<button class="dd-collapse" data-action="collapse" type="button">Collapse</button>',group:0,maxDepth:5,threshold:20,fixedDepth:!1,fixed:!1,includeContent:!1,scroll:!1,scrollSensitivity:1,scrollSpeed:5,scrollTriggers:{top:40,left:40,right:-40,bottom:-40},effect:{animation:"none",time:"slow"},callback:function(t,e,s){},onDragStart:function(t,e,s){},beforeDragStop:function(t,e,s){},listRenderer:function(t,e){var s="<"+e.listNodeName+' class="'+e.listClass+'">';return s+=t,s+="</"+e.listNodeName+">"},itemRenderer:function(e,s,i,o,n){var l=t.map(e,function(t,e){return" "+e+'="'+t+'"'}).join(" "),a="<"+o.itemNodeName+l+">";return a+="<"+o.handleNodeName+' class="'+o.handleClass+'">',a+="<"+o.contentNodeName+' class="'+o.contentClass+'">',a+=s,a+="</"+o.contentNodeName+">",a+="</"+o.handleNodeName+">",a+=i,a+="</"+o.itemNodeName+">"}};o.prototype={init:function(){var s=this;s.reset(),s.el.data("nestable-group",this.options.group),s.placeEl=t('<div class="'+s.options.placeClass+'"/>');var i=this.el.find(s.options.itemNodeName);t.each(i,function(e,i){var o=t(i),n=o.parent();s.setParent(o),n.hasClass(s.options.collapsedClass)&&s.collapseItem(n.parent())}),i.length||this.appendEmptyElement(this.el),s.el.on("click","button",function(e){if(!s.dragEl){var i=t(e.currentTarget),o=i.data("action"),n=i.parents(s.options.itemNodeName).eq(0);"collapse"===o&&s.collapseItem(n),"expand"===o&&s.expandItem(n)}});var o=function(e){var i=t(e.target);if(!i.hasClass(s.options.handleClass)){if(i.closest("."+s.options.noDragClass).length)return;i=i.closest("."+s.options.handleClass)}i.length&&!s.dragEl&&(s.isTouch=/^touch/.test(e.type),s.isTouch&&1!==e.touches.length||(e.preventDefault(),s.dragStart(e.touches?e.touches[0]:e)))},l=function(t){s.dragEl&&(t.preventDefault(),s.dragMove(t.touches?t.touches[0]:t))},a=function(t){s.dragEl&&(t.preventDefault(),s.dragStop(t.touches?t.changedTouches[0]:t))};n&&(s.el[0].addEventListener("touchstart",o,!1),e.addEventListener("touchmove",l,!1),e.addEventListener("touchend",a,!1),e.addEventListener("touchcancel",a,!1)),s.el.on("mousedown",o),s.w.on("mousemove",l),s.w.on("mouseup",a);s.el.bind("destroy-nestable",function(){n&&(s.el[0].removeEventListener("touchstart",o,!1),e.removeEventListener("touchmove",l,!1),e.removeEventListener("touchend",a,!1),e.removeEventListener("touchcancel",a,!1)),s.el.off("mousedown",o),s.w.off("mousemove",l),s.w.off("mouseup",a),s.el.off("click"),s.el.unbind("destroy-nestable"),s.el.data("nestable",null)})},destroy:function(){this.el.trigger("destroy-nestable")},add:function(e){var s="."+this.options.listClass,o=t(this.el).children(s);e.parent_id!==i&&(o=o.find('[data-id="'+e.parent_id+'"]'),delete e.parent_id,0===o.children(s).length&&(o=o.append(this.options.listRenderer("",this.options))),o=o.find(s+":first"),this.setParent(o.parent())),o.append(this._buildItem(e,this.options))},replace:function(t){var e=this._buildItem(t,this.options);this._getItemById(t.id).replaceWith(e)},removeItem:function(e){var s=this.options,i=this.el;(e=e||this).remove();var o="."+s.listClass+" ."+s.listClass+":not(:has(*))";t(i).find(o).remove();t(i).find('[data-action="expand"], [data-action="collapse"]').each(function(){0===t(this).siblings("."+s.listClass).length&&t(this).remove()})},remove:function(t,e){var s=this.options,i=this,o=this._getItemById(t),n=s.effect.animation||"fade",l=s.effect.time||"slow";"fade"===n?o.fadeOut(l,function(){i.removeItem(o)}):this.removeItem(o),e&&e()},removeAll:function(e){function s(){l.each(function(){i.removeItem(t(this))}),n.show(),e&&e()}var i=this,o=this.options,n=i.el.find(o.listNodeName).first(),l=n.children(o.itemNodeName),a=o.effect.animation||"fade",r=o.effect.time||"slow";"fade"===a?n.fadeOut(r,s):s()},_getItemById:function(e){return t(this.el).children("."+this.options.listClass).find('[data-id="'+e+'"]')},_build:function(){var e=this.options.json;"string"==typeof e&&(e=JSON.parse(e)),t(this.el).html(this._buildList(e,this.options))},_buildList:function(e,s){if(!e)return"";var i="",o=this;return t.each(e,function(t,e){i+=o._buildItem(e,s)}),s.listRenderer(i,s)},_buildItem:function(e,s){function i(t){var e={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"};return t+"".replace(/[&<>"']/g,function(t){return e[t]})}function o(t){var e={};for(var s in t)e[t[s]]=t[s];return e}var n=function(e){delete(e=t.extend({},e)).children,delete e.classes,delete e.content;var s={};return t.each(e,function(t,e){"object"==typeof e&&(e=JSON.stringify(e)),s["data-"+t]=i(e)}),s}(e);n.class=function(e,s){var i=e.classes||{};"string"==typeof i&&(i=[i]);var n=o(i);return n[s.itemClass]=s.itemClass,t.map(n,function(t){return t}).join(" ")}(e,s);var l=s.contentCallback(e),a=this._buildList(e.children,s),r=t(s.itemRenderer(n,l,a,s,e));return this.setParent(r),r[0].outerHTML},serialize:function(){var e=this,s=function(i){var o=[];return i.children(e.options.itemNodeName).each(function(){var i=t(this),n=t.extend({},i.data()),l=i.children(e.options.listNodeName);if(e.options.includeContent){var a=i.find("."+e.options.contentClass).html();a&&(n.content=a)}l.length&&(n.children=s(l)),o.push(n)}),o};return s(e.el.find(e.options.listNodeName).first())},asNestedSet:function(){function e(i,l,a){var r,d,h=a+1;return t(i).children(o.listNodeName).children(o.itemNodeName).length>0&&(l++,t(i).children(o.listNodeName).children(o.itemNodeName).each(function(){h=e(t(this),l,h)}),l--),r=t(i).attr("data-id"),s(r)&&(r=parseInt(r)),d=t(i).parent(o.listNodeName).parent(o.itemNodeName).attr("data-id")||"",s(d)&&(r=parseInt(d)),r&&n.push({id:r,parent_id:d,depth:l,lft:a,rgt:h}),a=h+1}function s(e){return t.isNumeric(e)&&Math.floor(e)==e}var i=this,o=i.options,n=[],l=1;return i.el.find(o.listNodeName).first().children(o.itemNodeName).each(function(){l=e(this,0,l)}),n=n.sort(function(t,e){return t.lft-e.lft})},returnOptions:function(){return this.options},serialise:function(){return this.serialize()},toHierarchy:function(e){function s(e){var o=(t(e).attr(i.attribute||"id")||"").match(i.expression||/(.+)[-=_](.+)/);if(o){var n={id:o[2]};return t(e).children(i.listType).children(i.items).length>0&&(n.children=[],t(e).children(i.listType).children(i.items).each(function(){var t=s(this);n.children.push(t)})),n}}var i=t.extend({},this.options,e),o=[];return t(this.element).children(i.items).each(function(){var t=s(this);o.push(t)}),o},toArray:function(){function e(n,l,a){var r,d,h=a+1;return n.children(s.options.listNodeName).children(s.options.itemNodeName).length>0&&(l++,n.children(s.options.listNodeName).children(s.options.itemNodeName).each(function(){h=e(t(this),l,h)}),l--),r=n.data().id,d=l===i+1?s.rootID:n.parent(s.options.listNodeName).parent(s.options.itemNodeName).data().id,r&&o.push({id:r,parent_id:d,depth:l,left:a,right:h}),a=h+1}var s=t.extend({},this.options,this),i=s.startDepthCount||0,o=[],n=2,l=this;return l.el.find(l.options.listNodeName).first().children(l.options.itemNodeName).each(function(){n=e(t(this),i+1,n)}),o=o.sort(function(t,e){return t.left-e.left})},reset:function(){this.mouse={offsetX:0,offsetY:0,startX:0,startY:0,lastX:0,lastY:0,nowX:0,nowY:0,distX:0,distY:0,dirAx:0,dirX:0,dirY:0,lastDirX:0,lastDirY:0,distAxX:0,distAxY:0},this.isTouch=!1,this.moving=!1,this.dragEl=null,this.dragRootEl=null,this.dragDepth=0,this.hasNewRoot=!1,this.pointEl=null},expandItem:function(t){t.removeClass(this.options.collapsedClass)},collapseItem:function(t){t.children(this.options.listNodeName).length&&t.addClass(this.options.collapsedClass)},expandAll:function(){var e=this;e.el.find(e.options.itemNodeName).each(function(){e.expandItem(t(this))})},collapseAll:function(){var e=this;e.el.find(e.options.itemNodeName).each(function(){e.collapseItem(t(this))})},setParent:function(e){e.is(this.options.itemNodeName)&&e.children(this.options.listNodeName).length&&(e.children("[data-action]").remove(),e.prepend(t(this.options.expandBtnHTML)),e.prepend(t(this.options.collapseBtnHTML)))},unsetParent:function(t){t.removeClass(this.options.collapsedClass),t.children("[data-action]").remove(),t.children(this.options.listNodeName).remove()},dragStart:function(e){var i=this.mouse,o=t(e.target).closest(this.options.itemNodeName),n={top:e.pageY,left:e.pageX},l=this.options.onDragStart.call(this,this.el,o,n);if(void 0===l||!1!==l){this.placeEl.css("height",o.height()),i.offsetX=e.pageX-o.offset().left,i.offsetY=e.pageY-o.offset().top,i.startX=i.lastX=e.pageX,i.startY=i.lastY=e.pageY,this.dragRootEl=this.el,this.dragEl=t(s.createElement(this.options.listNodeName)).addClass(this.options.listClass+" "+this.options.dragClass),this.dragEl.css("width",o.outerWidth()),this.setIndexOfItem(o),o.after(this.placeEl),o[0].parentNode.removeChild(o[0]),o.appendTo(this.dragEl),t(s.body).append(this.dragEl),this.dragEl.css({left:e.pageX-i.offsetX,top:e.pageY-i.offsetY});var a,r,d=this.dragEl.find(this.options.itemNodeName);for(a=0;a<d.length;a++)(r=t(d[a]).parents(this.options.listNodeName).length)>this.dragDepth&&(this.dragDepth=r)}},createSubLevel:function(e,s){var i=t("<"+this.options.listNodeName+"/>").addClass(this.options.listClass);return s&&i.append(s),e.append(i),this.setParent(e),i},setIndexOfItem:function(e,s){(s=s||[]).unshift(e.index()),t(e[0].parentNode)[0]!==this.dragRootEl[0]?this.setIndexOfItem(t(e[0].parentNode),s):this.dragEl.data("indexOfItem",s)},restoreItemAtIndex:function(e,s){for(var i=this.el,o=s.length-1,n=0;n<s.length;n++){if(o===parseInt(n))return void function(e,i){0===s[o]?t(e).prepend(i.clone(!0)):t(e.children[s[o]-1]).after(i.clone(!0))}(i,e);var l=i[0]?i[0]:i,a=l.children[s[n]];i=a||this.createSubLevel(t(l))}},dragStop:function(t){var e={top:t.pageY,left:t.pageX},s=this.dragEl.data("indexOfItem"),i=this.dragEl.children(this.options.itemNodeName).first();i[0].parentNode.removeChild(i[0]),this.dragEl.remove();var o=this.options.beforeDragStop.call(this,this.el,i,this.placeEl.parent());if(void 0!==o&&!1===o){var n=this.placeEl.parent();return this.placeEl.remove(),n.children().length||this.unsetParent(n.parent()),this.restoreItemAtIndex(i,s),void this.reset()}this.placeEl.replaceWith(i),this.hasNewRoot?(!0===this.options.fixed?this.restoreItemAtIndex(i,s):this.el.trigger("lostItem"),this.dragRootEl.trigger("gainedItem")):this.dragRootEl.trigger("change"),this.options.callback.call(this,this.dragRootEl,i,e),this.reset()},dragMove:function(i){var o,n,a,r=this.options,d=this.mouse;this.dragEl.css({left:i.pageX-d.offsetX,top:i.pageY-d.offsetY}),d.lastX=d.nowX,d.lastY=d.nowY,d.nowX=i.pageX,d.nowY=i.pageY,d.distX=d.nowX-d.lastX,d.distY=d.nowY-d.lastY,d.lastDirX=d.dirX,d.lastDirY=d.dirY,d.dirX=0===d.distX?0:d.distX>0?1:-1,d.dirY=0===d.distY?0:d.distY>0?1:-1;var h=Math.abs(d.distX)>Math.abs(d.distY)?1:0;if(!d.moving)return d.dirAx=h,void(d.moving=!0);if(r.scroll)if(void 0!==e.jQuery.fn.scrollParent){var c=!1,p=this.el.scrollParent()[0];p!==s&&"HTML"!==p.tagName?(r.scrollTriggers.bottom+p.offsetHeight-i.pageY<r.scrollSensitivity?p.scrollTop=c=p.scrollTop+r.scrollSpeed:i.pageY-r.scrollTriggers.top<r.scrollSensitivity&&(p.scrollTop=c=p.scrollTop-r.scrollSpeed),r.scrollTriggers.right+p.offsetWidth-i.pageX<r.scrollSensitivity?p.scrollLeft=c=p.scrollLeft+r.scrollSpeed:i.pageX-r.scrollTriggers.left<r.scrollSensitivity&&(p.scrollLeft=c=p.scrollLeft-r.scrollSpeed)):(i.pageY-t(s).scrollTop()<r.scrollSensitivity?c=t(s).scrollTop(t(s).scrollTop()-r.scrollSpeed):t(e).height()-(i.pageY-t(s).scrollTop())<r.scrollSensitivity&&(c=t(s).scrollTop(t(s).scrollTop()+r.scrollSpeed)),i.pageX-t(s).scrollLeft()<r.scrollSensitivity?c=t(s).scrollLeft(t(s).scrollLeft()-r.scrollSpeed):t(e).width()-(i.pageX-t(s).scrollLeft())<r.scrollSensitivity&&(c=t(s).scrollLeft(t(s).scrollLeft()+r.scrollSpeed)))}else console.warn("To use scrolling you need to have scrollParent() function, check documentation for more information");this.scrollTimer&&clearTimeout(this.scrollTimer),r.scroll&&c&&(this.scrollTimer=setTimeout(function(){t(e).trigger(i)},10)),d.dirAx!==h?(d.distAxX=0,d.distAxY=0):(d.distAxX+=Math.abs(d.distX),0!==d.dirX&&d.dirX!==d.lastDirX&&(d.distAxX=0),d.distAxY+=Math.abs(d.distY),0!==d.dirY&&d.dirY!==d.lastDirY&&(d.distAxY=0)),d.dirAx=h,d.dirAx&&d.distAxX>=r.threshold&&(d.distAxX=0,a=this.placeEl.prev(r.itemNodeName),d.distX>0&&a.length&&!a.hasClass(r.collapsedClass)&&!a.hasClass(r.noChildrenClass)&&(o=a.find(r.listNodeName).last(),this.placeEl.parents(r.listNodeName).length+this.dragDepth<=r.maxDepth&&(o.length?(o=a.children(r.listNodeName).last()).append(this.placeEl):this.createSubLevel(a,this.placeEl))),d.distX<0&&(this.placeEl.next(r.itemNodeName).length||(n=this.placeEl.parent(),this.placeEl.closest(r.itemNodeName).after(this.placeEl),n.children().length||this.unsetParent(n.parent()))));var f=!1;if(l||(this.dragEl[0].style.visibility="hidden"),this.pointEl=t(s.elementFromPoint(i.pageX-s.body.scrollLeft,i.pageY-(e.pageYOffset||s.documentElement.scrollTop))),l||(this.dragEl[0].style.visibility="visible"),this.pointEl.hasClass(r.handleClass)&&(this.pointEl=this.pointEl.closest(r.itemNodeName)),this.pointEl.hasClass(r.emptyClass))f=!0;else if(!this.pointEl.length||!this.pointEl.hasClass(r.itemClass))return;var u=this.pointEl.closest("."+r.rootClass),m=this.dragRootEl.data("nestable-id")!==u.data("nestable-id");if(!d.dirAx||m||f){if(m&&r.group!==u.data("nestable-group"))return;if(this.options.fixedDepth&&this.dragDepth+1!==this.pointEl.parents(r.listNodeName).length)return;if(this.dragDepth-1+this.pointEl.parents(r.listNodeName).length>r.maxDepth)return;var g=i.pageY<this.pointEl.offset().top+this.pointEl.height()/2;n=this.placeEl.parent(),f?((o=t(s.createElement(r.listNodeName)).addClass(r.listClass)).append(this.placeEl),this.pointEl.replaceWith(o)):g?this.pointEl.before(this.placeEl):this.pointEl.after(this.placeEl),n.children().length||this.unsetParent(n.parent()),this.dragRootEl.find(r.itemNodeName).length||this.appendEmptyElement(this.dragRootEl),this.dragRootEl=u,m&&(this.hasNewRoot=this.el[0]!==this.dragRootEl[0])}},appendEmptyElement:function(t){t.append('<div class="'+this.options.emptyClass+'"/>')}},t.fn.nestable=function(s){var i=this,n=this,l=arguments;return"Nestable"in e||(e.Nestable={},Nestable.counter=0),i.each(function(){var e=t(this).data("nestable");if(e){if("string"==typeof s&&"function"==typeof e[s])if(l.length>1){for(var i=[],a=1;a<l.length;a++)i.push(l[a]);n=e[s].apply(e,i)}else n=e[s]()}else Nestable.counter++,t(this).data("nestable",new o(this,s)),t(this).data("nestable-id",Nestable.counter)}),n||i}}(window.jQuery||window.Zepto,window,document);
+function ($) {
    'use strict';
    $.fn.customFileUpload =  function (options) {
        return this.each(function() {
            var el = $(this);
            el.options = options;
            el.validImageTypes = el.options.accepts || [];   //['image/gif', 'image/jpeg', 'image/png']
            el.me = el;
            el.multiple = el.attr('multiple');
            el.filedrag = $(el.data('filedrag'));
            el.defaultText = el.filedrag.find('.inputText').text();
            el.preview = $(el.data('preview'));
            el.inputText = el.filedrag.find('.inputText');
            el.init = function () {

                // showAvailableFile
                var availables = el.data('files');
                if(availables.length > 0){
                    for (var i = 0, f; f = availables[i]; i++) {
                        var div = $('<div class="preview-item"></div>');
                        var img = $('<img src="'+f+'" class="thumbnail">');
                        img.height(100);
                        el.preview.append(div.append(img))
                    }
                }

                if (window.File && window.FileList && window.FileReader) {
                    // file select
                    el.on("change", $.proxy(FileSelectHandler, this));

                    // is XHR2 available?
                    var xhr = new XMLHttpRequest();
                    if (xhr.upload) {
                        // file drop
                        var dragArea = $('<div class="dragArea"><div class="inputText">Drop files here</div></div>')
                        dragArea.prependTo(el.filedrag);
                        el.inputText = el.filedrag.find('.inputText');
                        el.defaultText = el.filedrag.find('.inputText').text();
                        el.filedrag.addClass('filedrag');
                        el.closest('label').addClass('btn-file');

                        el.filedrag.on("dragover", $.proxy(FileDragHover, this));
                        el.filedrag.on("dragleave",$.proxy(FileDragHover, this));
                        dragArea.on("drop", $.proxy(changeFile, this));
                    }
                }
            };



// file drag hover
            function FileDragHover(e) {
                e.stopPropagation();
                e.preventDefault();
                el.inputText.text(el.defaultText);
                if (e.type == "dragover") {
                    el.filedrag.addClass('hover');
                }else {
                    el.filedrag.removeClass('hover');
                }
            }


            function changeFile(e) {
                el.filedrag.removeClass('hover');
                e.stopPropagation();
                e.preventDefault();
                el[0].files = e.target.files || e.originalEvent.dataTransfer.files;
                el.trigger('change');
                $(e.target).removeClass('hover');
            }
// file selection
            function FileSelectHandler(e) {

                // cancel event and hover styling
                FileDragHover(e);

                // fetch FileList object
                var files = e.target.files || e.originalEvent.dataTransfer.files;
                var amount = el.multiple?30:1;
                if (checkAmount(files,amount)){
                    el.inputText.text(el.defaultText);
                    // process all File objects
                    if (fileValidation(files, el.validImageTypes)) {
                        console.log('validate success');
                        showFiles(files, el.preview);
                        if (files.length > 1)
                            el.inputText.text(files.length + ' files');
                        if (files.length === 1)
                            el.inputText.text(files[0].name);
                    }else {
                        el.filedrag.addClass('hover');
                        el.inputText.text('File format was invalid');
                        el.val('');
                        console.log('validate failed');
                        el.preview.empty();
                        setTimeout(function () {
                            el.filedrag.removeClass('hover');
                        }, 2000)
                    }
                }else {
                    el.filedrag.addClass('hover');
                    el.inputText.text('Amount of files was invalid');
                    el.val('');
                    el.preview.empty();
                    setTimeout(function () {
                        el.filedrag.removeClass('hover');
                    }, 2000)
                }

            }

            function fileValidation(files, validImageTypes){
                var res = true;
                if (validImageTypes.length>0){
                    for (var i = 0, f; f = files[i]; i++) {
                        if(!validImageTypes.includes(f.type))
                            res = false
                    }
                }
                return res;

            }

            function checkAmount(files, amount){
                amount = amount?amount:1;
                return files.length <= amount
            }

            function showFiles(files, preview) {
                if (preview.length == 1){
                    preview.empty();
                    for (var i = 0, f; f = files[i]; i++) {
                        readAndPreview(f,preview)
                    }
                }
            }
            function readAndPreview(file,preview) {

                // Make sure `file.name` matches our extensions criteria
                if ( /\.(jpe?g|png|gif)$/i.test(file.name) ) {
                    var reader = new FileReader();

                    reader.addEventListener("load", function () {
                        var image = new Image();
                        image.height = 100;
                        image.title = file.name;
                        image.src = this.result;
                        image.className = 'thumbnail';
                        var div = '<div class="preview-item"></div>';
                        div = $(div).append(image);
                        preview.append( div );
                    }, false);

                    reader.readAsDataURL(file);
                }

            }

            el.init();

            function _change(e) {
                var self = this;
                var $el = self.$element, isDragDrop = arguments.length > 1, isAjaxUpload = self.isAjaxUpload,
                    tfiles = [], files = isDragDrop ? arguments[1] : $el.get(0).files;
                self.reader = null;
                if (isAjaxUpload) {
                    $.each(files, function (vKey, vFile) {
                        self._filterDuplicate(vFile, tfiles, fileIds);
                    });
                } else {
                    if (e.target && e.target.files === undefined) {
                        files = e.target.value ? [{name: e.target.value.replace(/^.+\\/, '')}] : [];
                    } else {
                        files = e.target.files || {};
                    }
                    tfiles = files;
                }
                if ($h.isEmpty(tfiles) || tfiles.length === 0) {
                    if (!isAjaxUpload) {
                        self.clear();
                    }
                    self._raise('fileselectnone');
                    return;
                }
            }
        });
    };
}(jQuery);





(function(a) {
    if (typeof define === "function" && define.amd) {
        define([ "jquery" ], a);
    } else {
        a(jQuery);
    }
})(function(a) {
    a.ui = a.ui || {};
    var b = a.ui.version = "1.12.1";
    (function() {
        var b, c = Math.max, d = Math.abs, e = /left|center|right/, f = /top|center|bottom/, g = /[\+\-]\d+(\.[\d]+)?%?/, h = /^\w+/, i = /%$/, j = a.fn.pos;
        function k(a, b, c) {
            return [ parseFloat(a[0]) * (i.test(a[0]) ? b / 100 : 1), parseFloat(a[1]) * (i.test(a[1]) ? c / 100 : 1) ];
        }
        function l(b, c) {
            return parseInt(a.css(b, c), 10) || 0;
        }
        function m(b) {
            var c = b[0];
            if (c.nodeType === 9) {
                return {
                    width: b.width(),
                    height: b.height(),
                    offset: {
                        top: 0,
                        left: 0
                    }
                };
            }
            if (a.isWindow(c)) {
                return {
                    width: b.width(),
                    height: b.height(),
                    offset: {
                        top: b.scrollTop(),
                        left: b.scrollLeft()
                    }
                };
            }
            if (c.preventDefault) {
                return {
                    width: 0,
                    height: 0,
                    offset: {
                        top: c.pageY,
                        left: c.pageX
                    }
                };
            }
            return {
                width: b.outerWidth(),
                height: b.outerHeight(),
                offset: b.offset()
            };
        }
        a.pos = {
            scrollbarWidth: function() {
                if (b !== undefined) {
                    return b;
                }
                var c, d, e = a("<div " + "style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'>" + "<div style='height:100px;width:auto;'></div></div>"), f = e.children()[0];
                a("body").append(e);
                c = f.offsetWidth;
                e.css("overflow", "scroll");
                d = f.offsetWidth;
                if (c === d) {
                    d = e[0].clientWidth;
                }
                e.remove();
                return b = c - d;
            },
            getScrollInfo: function(b) {
                var c = b.isWindow || b.isDocument ? "" : b.element.css("overflow-x"), d = b.isWindow || b.isDocument ? "" : b.element.css("overflow-y"), e = c === "scroll" || c === "auto" && b.width < b.element[0].scrollWidth, f = d === "scroll" || d === "auto" && b.height < b.element[0].scrollHeight;
                return {
                    width: f ? a.pos.scrollbarWidth() : 0,
                    height: e ? a.pos.scrollbarWidth() : 0
                };
            },
            getWithinInfo: function(b) {
                var c = a(b || window), d = a.isWindow(c[0]), e = !!c[0] && c[0].nodeType === 9, f = !d && !e;
                return {
                    element: c,
                    isWindow: d,
                    isDocument: e,
                    offset: f ? a(b).offset() : {
                        left: 0,
                        top: 0
                    },
                    scrollLeft: c.scrollLeft(),
                    scrollTop: c.scrollTop(),
                    width: c.outerWidth(),
                    height: c.outerHeight()
                };
            }
        };
        a.fn.pos = function(b) {
            if (!b || !b.of) {
                return j.apply(this, arguments);
            }
            b = a.extend({}, b);
            var i, n, o, p, q, r, s = a(b.of), t = a.pos.getWithinInfo(b.within), u = a.pos.getScrollInfo(t), v = (b.collision || "flip").split(" "), w = {};
            r = m(s);
            if (s[0].preventDefault) {
                b.at = "left top";
            }
            n = r.width;
            o = r.height;
            p = r.offset;
            q = a.extend({}, p);
            a.each([ "my", "at" ], function() {
                var a = (b[this] || "").split(" "), c, d;
                if (a.length === 1) {
                    a = e.test(a[0]) ? a.concat([ "center" ]) : f.test(a[0]) ? [ "center" ].concat(a) : [ "center", "center" ];
                }
                a[0] = e.test(a[0]) ? a[0] : "center";
                a[1] = f.test(a[1]) ? a[1] : "center";
                c = g.exec(a[0]);
                d = g.exec(a[1]);
                w[this] = [ c ? c[0] : 0, d ? d[0] : 0 ];
                b[this] = [ h.exec(a[0])[0], h.exec(a[1])[0] ];
            });
            if (v.length === 1) {
                v[1] = v[0];
            }
            if (b.at[0] === "right") {
                q.left += n;
            } else if (b.at[0] === "center") {
                q.left += n / 2;
            }
            if (b.at[1] === "bottom") {
                q.top += o;
            } else if (b.at[1] === "center") {
                q.top += o / 2;
            }
            i = k(w.at, n, o);
            q.left += i[0];
            q.top += i[1];
            return this.each(function() {
                var e, f, g = a(this), h = g.outerWidth(), j = g.outerHeight(), m = l(this, "marginLeft"), r = l(this, "marginTop"), x = h + m + l(this, "marginRight") + u.width, y = j + r + l(this, "marginBottom") + u.height, z = a.extend({}, q), A = k(w.my, g.outerWidth(), g.outerHeight());
                if (b.my[0] === "right") {
                    z.left -= h;
                } else if (b.my[0] === "center") {
                    z.left -= h / 2;
                }
                if (b.my[1] === "bottom") {
                    z.top -= j;
                } else if (b.my[1] === "center") {
                    z.top -= j / 2;
                }
                z.left += A[0];
                z.top += A[1];
                e = {
                    marginLeft: m,
                    marginTop: r
                };
                a.each([ "left", "top" ], function(c, d) {
                    if (a.ui.pos[v[c]]) {
                        a.ui.pos[v[c]][d](z, {
                            targetWidth: n,
                            targetHeight: o,
                            elemWidth: h,
                            elemHeight: j,
                            collisionPosition: e,
                            collisionWidth: x,
                            collisionHeight: y,
                            offset: [ i[0] + A[0], i[1] + A[1] ],
                            my: b.my,
                            at: b.at,
                            within: t,
                            elem: g
                        });
                    }
                });
                if (b.using) {
                    f = function(a) {
                        var e = p.left - z.left, f = e + n - h, i = p.top - z.top, k = i + o - j, l = {
                            target: {
                                element: s,
                                left: p.left,
                                top: p.top,
                                width: n,
                                height: o
                            },
                            element: {
                                element: g,
                                left: z.left,
                                top: z.top,
                                width: h,
                                height: j
                            },
                            horizontal: f < 0 ? "left" : e > 0 ? "right" : "center",
                            vertical: k < 0 ? "top" : i > 0 ? "bottom" : "middle"
                        };
                        if (n < h && d(e + f) < n) {
                            l.horizontal = "center";
                        }
                        if (o < j && d(i + k) < o) {
                            l.vertical = "middle";
                        }
                        if (c(d(e), d(f)) > c(d(i), d(k))) {
                            l.important = "horizontal";
                        } else {
                            l.important = "vertical";
                        }
                        b.using.call(this, a, l);
                    };
                }
                g.offset(a.extend(z, {
                    using: f
                }));
            });
        };
        a.ui.pos = {
            _trigger: function(a, b, c, d) {
                if (b.elem) {
                    b.elem.trigger({
                        type: c,
                        position: a,
                        positionData: b,
                        triggered: d
                    });
                }
            },
            fit: {
                left: function(b, d) {
                    a.ui.pos._trigger(b, d, "posCollide", "fitLeft");
                    var e = d.within, f = e.isWindow ? e.scrollLeft : e.offset.left, g = e.width, h = b.left - d.collisionPosition.marginLeft, i = f - h, j = h + d.collisionWidth - g - f, k;
                    if (d.collisionWidth > g) {
                        if (i > 0 && j <= 0) {
                            k = b.left + i + d.collisionWidth - g - f;
                            b.left += i - k;
                        } else if (j > 0 && i <= 0) {
                            b.left = f;
                        } else {
                            if (i > j) {
                                b.left = f + g - d.collisionWidth;
                            } else {
                                b.left = f;
                            }
                        }
                    } else if (i > 0) {
                        b.left += i;
                    } else if (j > 0) {
                        b.left -= j;
                    } else {
                        b.left = c(b.left - h, b.left);
                    }
                    a.ui.pos._trigger(b, d, "posCollided", "fitLeft");
                },
                top: function(b, d) {
                    a.ui.pos._trigger(b, d, "posCollide", "fitTop");
                    var e = d.within, f = e.isWindow ? e.scrollTop : e.offset.top, g = d.within.height, h = b.top - d.collisionPosition.marginTop, i = f - h, j = h + d.collisionHeight - g - f, k;
                    if (d.collisionHeight > g) {
                        if (i > 0 && j <= 0) {
                            k = b.top + i + d.collisionHeight - g - f;
                            b.top += i - k;
                        } else if (j > 0 && i <= 0) {
                            b.top = f;
                        } else {
                            if (i > j) {
                                b.top = f + g - d.collisionHeight;
                            } else {
                                b.top = f;
                            }
                        }
                    } else if (i > 0) {
                        b.top += i;
                    } else if (j > 0) {
                        b.top -= j;
                    } else {
                        b.top = c(b.top - h, b.top);
                    }
                    a.ui.pos._trigger(b, d, "posCollided", "fitTop");
                }
            },
            flip: {
                left: function(b, c) {
                    a.ui.pos._trigger(b, c, "posCollide", "flipLeft");
                    var e = c.within, f = e.offset.left + e.scrollLeft, g = e.width, h = e.isWindow ? e.scrollLeft : e.offset.left, i = b.left - c.collisionPosition.marginLeft, j = i - h, k = i + c.collisionWidth - g - h, l = c.my[0] === "left" ? -c.elemWidth : c.my[0] === "right" ? c.elemWidth : 0, m = c.at[0] === "left" ? c.targetWidth : c.at[0] === "right" ? -c.targetWidth : 0, n = -2 * c.offset[0], o, p;
                    if (j < 0) {
                        o = b.left + l + m + n + c.collisionWidth - g - f;
                        if (o < 0 || o < d(j)) {
                            b.left += l + m + n;
                        }
                    } else if (k > 0) {
                        p = b.left - c.collisionPosition.marginLeft + l + m + n - h;
                        if (p > 0 || d(p) < k) {
                            b.left += l + m + n;
                        }
                    }
                    a.ui.pos._trigger(b, c, "posCollided", "flipLeft");
                },
                top: function(b, c) {
                    a.ui.pos._trigger(b, c, "posCollide", "flipTop");
                    var e = c.within, f = e.offset.top + e.scrollTop, g = e.height, h = e.isWindow ? e.scrollTop : e.offset.top, i = b.top - c.collisionPosition.marginTop, j = i - h, k = i + c.collisionHeight - g - h, l = c.my[1] === "top", m = l ? -c.elemHeight : c.my[1] === "bottom" ? c.elemHeight : 0, n = c.at[1] === "top" ? c.targetHeight : c.at[1] === "bottom" ? -c.targetHeight : 0, o = -2 * c.offset[1], p, q;
                    if (j < 0) {
                        q = b.top + m + n + o + c.collisionHeight - g - f;
                        if (q < 0 || q < d(j)) {
                            b.top += m + n + o;
                        }
                    } else if (k > 0) {
                        p = b.top - c.collisionPosition.marginTop + m + n + o - h;
                        if (p > 0 || d(p) < k) {
                            b.top += m + n + o;
                        }
                    }
                    a.ui.pos._trigger(b, c, "posCollided", "flipTop");
                }
            },
            flipfit: {
                left: function() {
                    a.ui.pos.flip.left.apply(this, arguments);
                    a.ui.pos.fit.left.apply(this, arguments);
                },
                top: function() {
                    a.ui.pos.flip.top.apply(this, arguments);
                    a.ui.pos.fit.top.apply(this, arguments);
                }
            }
        };
        (function() {
            var b, c, d, e, f, g = document.getElementsByTagName("body")[0], h = document.createElement("div");
            b = document.createElement(g ? "div" : "body");
            d = {
                visibility: "hidden",
                width: 0,
                height: 0,
                border: 0,
                margin: 0,
                background: "none"
            };
            if (g) {
                a.extend(d, {
                    position: "absolute",
                    left: "-1000px",
                    top: "-1000px"
                });
            }
            for (f in d) {
                b.style[f] = d[f];
            }
            b.appendChild(h);
            c = g || document.documentElement;
            c.insertBefore(b, c.firstChild);
            h.style.cssText = "position: absolute; left: 10.7432222px;";
            e = a(h).offset().left;
            a.support.offsetFractions = e > 10 && e < 11;
            b.innerHTML = "";
            c.removeChild(b);
        })();
    })();
    var c = a.ui.position;
});

(function(a) {
    "use strict";
    if (typeof define === "function" && define.amd) {
        define([ "jquery" ], a);
    } else if (window.jQuery && !window.jQuery.fn.iconpicker) {
        a(window.jQuery);
    }
})(function(a) {
    "use strict";
    var b = {
        isEmpty: function(a) {
            return a === false || a === "" || a === null || a === undefined;
        },
        isEmptyObject: function(a) {
            return this.isEmpty(a) === true || a.length === 0;
        },
        isElement: function(b) {
            return a(b).length > 0;
        },
        isString: function(a) {
            return typeof a === "string" || a instanceof String;
        },
        isArray: function(b) {
            return a.isArray(b);
        },
        inArray: function(b, c) {
            return a.inArray(b, c) !== -1;
        },
        throwError: function(a) {
            throw "Font Awesome Icon Picker Exception: " + a;
        }
    };
    var c = function(d, e) {
        this._id = c._idCounter++;
        this.element = a(d).addClass("iconpicker-element");
        this._trigger("iconpickerCreate");
        this.options = a.extend({}, c.defaultOptions, this.element.data(), e);
        this.options.templates = a.extend({}, c.defaultOptions.templates, this.options.templates);
        this.options.originalPlacement = this.options.placement;
        this.container = b.isElement(this.options.container) ? a(this.options.container) : false;
        if (this.container === false) {
            if (this.element.is(".dropdown-toggle")) {
                this.container = a("~ .dropdown-menu:first", this.element);
            } else {
                this.container = this.element.is("input,textarea,button,.btn") ? this.element.parent() : this.element;
            }
        }
        this.container.addClass("iconpicker-container");
        if (this.isDropdownMenu()) {
            this.options.templates.search = false;
            this.options.templates.buttons = false;
            this.options.placement = "inline";
        }
        this.input = this.element.is("input,textarea") ? this.element.addClass("iconpicker-input") : false;
        if (this.input === false) {
            this.input = this.container.find(this.options.input);
            if (!this.input.is("input,textarea")) {
                this.input = false;
            }
        }
        this.component = this.isDropdownMenu() ? this.container.parent().find(this.options.component) : this.container.find(this.options.component);
        if (this.component.length === 0) {
            this.component = false;
        } else {
            this.component.find("i").addClass("iconpicker-component");
        }
        this._createPopover();
        this._createIconpicker();
        if (this.getAcceptButton().length === 0) {
            this.options.mustAccept = false;
        }
        if (this.isInputGroup()) {
            this.container.parent().append(this.popover);
        } else {
            this.container.append(this.popover);
        }
        this._bindElementEvents();
        this._bindWindowEvents();
        this.update(this.options.selected);
        if (this.isInline()) {
            this.show();
        }
        this._trigger("iconpickerCreated");
    };
    c._idCounter = 0;
    c.defaultOptions = {
        title: false,
        selected: false,
        defaultValue: false,
        placement: "bottom",
        collision: "none",
        animation: true,
        hideOnSelect: false,
        showFooter: false,
        searchInFooter: false,
        mustAccept: false,
        selectedCustomClass: "bg-primary",
        icons: [],
        fullClassFormatter: function(a) {
            return "fa " + a;
        },
        input: "input,.iconpicker-input",
        inputSearch: false,
        container: false,
        component: ".input-group-addon,.iconpicker-component",
        templates: {
            popover: '<div class="iconpicker-popover popover"><div class="arrow"></div>' + '<div class="popover-title"></div><div class="popover-content"></div></div>',
            footer: '<div class="popover-footer"></div>',
            buttons: '<button class="iconpicker-btn iconpicker-btn-cancel btn btn-default btn-sm">Cancel</button>' + ' <button class="iconpicker-btn iconpicker-btn-accept btn btn-primary btn-sm">Accept</button>',
            search: '<input type="search" class="form-control iconpicker-search" placeholder="Type to filter" />',
            iconpicker: '<div class="iconpicker"><div class="iconpicker-items"></div></div>',
            iconpickerItem: '<a role="button" href="#" class="iconpicker-item"><i></i></a>'
        }
    };
    c.batch = function(b, c) {
        var d = Array.prototype.slice.call(arguments, 2);
        return a(b).each(function() {
            var b = a(this).data("iconpicker");
            if (!!b) {
                b[c].apply(b, d);
            }
        });
    };
    c.prototype = {
        constructor: c,
        options: {},
        _id: 0,
        _trigger: function(b, c) {
            c = c || {};
            this.element.trigger(a.extend({
                type: b,
                iconpickerInstance: this
            }, c));
        },
        _createPopover: function() {
            this.popover = a(this.options.templates.popover);
            var c = this.popover.find(".popover-title");
            if (!!this.options.title) {
                c.append(a('<div class="popover-title-text">' + this.options.title + "</div>"));
            }
            if (this.hasSeparatedSearchInput() && !this.options.searchInFooter) {
                c.append(this.options.templates.search);
            } else if (!this.options.title) {
                c.remove();
            }
            if (this.options.showFooter && !b.isEmpty(this.options.templates.footer)) {
                var d = a(this.options.templates.footer);
                if (this.hasSeparatedSearchInput() && this.options.searchInFooter) {
                    d.append(a(this.options.templates.search));
                }
                if (!b.isEmpty(this.options.templates.buttons)) {
                    d.append(a(this.options.templates.buttons));
                }
                this.popover.append(d);
            }
            if (this.options.animation === true) {
                this.popover.addClass("fade");
            }
            return this.popover;
        },
        _createIconpicker: function() {
            var b = this;
            this.iconpicker = a(this.options.templates.iconpicker);
            var c = function(c) {
                var d = a(this);
                if (d.is("i")) {
                    d = d.parent();
                }
                b._trigger("iconpickerSelect", {
                    iconpickerItem: d,
                    iconpickerValue: b.iconpickerValue
                });
                if (b.options.mustAccept === false) {
                    b.update(d.data("iconpickerValue"));
                    b._trigger("iconpickerSelected", {
                        iconpickerItem: this,
                        iconpickerValue: b.iconpickerValue
                    });
                } else {
                    b.update(d.data("iconpickerValue"), true);
                }
                if (b.options.hideOnSelect && b.options.mustAccept === false) {
                    b.hide();
                }
                c.preventDefault();
                return false;
            };
            for (var d in this.options.icons) {
                if (typeof this.options.icons[d] === "string") {
                    var e = a(this.options.templates.iconpickerItem);
                    e.find("i").addClass(this.options.fullClassFormatter(this.options.icons[d]));
                    e.data("iconpickerValue", this.options.icons[d]).on("click.iconpicker", c);
                    this.iconpicker.find(".iconpicker-items").append(e.attr("title", "." + this.options.icons[d]));
                }
            }
            this.popover.find(".popover-content").append(this.iconpicker);
            return this.iconpicker;
        },
        _isEventInsideIconpicker: function(b) {
            var c = a(b.target);
            if ((!c.hasClass("iconpicker-element") || c.hasClass("iconpicker-element") && !c.is(this.element)) && c.parents(".iconpicker-popover").length === 0) {
                return false;
            }
            return true;
        },
        _bindElementEvents: function() {
            var c = this;
            this.getSearchInput().on("keyup.iconpicker", function() {
                c.filter(a(this).val().toLowerCase());
            });
            this.getAcceptButton().on("click.iconpicker", function() {
                var a = c.iconpicker.find(".iconpicker-selected").get(0);
                c.update(c.iconpickerValue);
                c._trigger("iconpickerSelected", {
                    iconpickerItem: a,
                    iconpickerValue: c.iconpickerValue
                });
                if (!c.isInline()) {
                    c.hide();
                }
            });
            this.getCancelButton().on("click.iconpicker", function() {
                if (!c.isInline()) {
                    c.hide();
                }
            });
            this.element.on("focus.iconpicker", function(a) {
                c.show();
                a.stopPropagation();
            });
            if (this.hasComponent()) {
                this.component.on("click.iconpicker", function() {
                    c.toggle();
                });
            }
            if (this.hasInput()) {
                this.input.on("keyup.iconpicker", function(d) {
                    if (!b.inArray(d.keyCode, [ 38, 40, 37, 39, 16, 17, 18, 9, 8, 91, 93, 20, 46, 186, 190, 46, 78, 188, 44, 86 ])) {
                        c.update();
                    } else {
                        c._updateFormGroupStatus(c.getValid(this.value) !== false);
                    }
                    if (c.options.inputSearch === true) {
                        c.filter(a(this).val().toLowerCase());
                    }
                });
            }
        },
        _bindWindowEvents: function() {
            var b = a(window.document);
            var c = this;
            var d = ".iconpicker.inst" + this._id;
            a(window).on("resize.iconpicker" + d + " orientationchange.iconpicker" + d, function(a) {
                if (c.popover.hasClass("in")) {
                    c.updatePlacement();
                }
            });
            if (!c.isInline()) {
                b.on("mouseup" + d, function(a) {
                    if (!c._isEventInsideIconpicker(a) && !c.isInline()) {
                        c.hide();
                    }
                    a.stopPropagation();
                    a.preventDefault();
                    return false;
                });
            }
            return false;
        },
        _unbindElementEvents: function() {
            this.popover.off(".iconpicker");
            this.element.off(".iconpicker");
            if (this.hasInput()) {
                this.input.off(".iconpicker");
            }
            if (this.hasComponent()) {
                this.component.off(".iconpicker");
            }
            if (this.hasContainer()) {
                this.container.off(".iconpicker");
            }
        },
        _unbindWindowEvents: function() {
            a(window).off(".iconpicker.inst" + this._id);
            a(window.document).off(".iconpicker.inst" + this._id);
        },
        updatePlacement: function(b, c) {
            b = b || this.options.placement;
            this.options.placement = b;
            c = c || this.options.collision;
            c = c === true ? "flip" : c;
            var d = {
                at: "right bottom",
                my: "right top",
                of: this.hasInput() && !this.isInputGroup() ? this.input : this.container,
                collision: c === true ? "flip" : c,
                within: window
            };
            this.popover.removeClass("inline topLeftCorner topLeft top topRight topRightCorner " + "rightTop right rightBottom bottomRight bottomRightCorner " + "bottom bottomLeft bottomLeftCorner leftBottom left leftTop");
            if (typeof b === "object") {
                return this.popover.pos(a.extend({}, d, b));
            }
            switch (b) {
              case "inline":
                {
                    d = false;
                }
                break;

              case "topLeftCorner":
                {
                    d.my = "right bottom";
                    d.at = "left top";
                }
                break;

              case "topLeft":
                {
                    d.my = "left bottom";
                    d.at = "left top";
                }
                break;

              case "top":
                {
                    d.my = "center bottom";
                    d.at = "center top";
                }
                break;

              case "topRight":
                {
                    d.my = "right bottom";
                    d.at = "right top";
                }
                break;

              case "topRightCorner":
                {
                    d.my = "left bottom";
                    d.at = "right top";
                }
                break;

              case "rightTop":
                {
                    d.my = "left bottom";
                    d.at = "right center";
                }
                break;

              case "right":
                {
                    d.my = "left center";
                    d.at = "right center";
                }
                break;

              case "rightBottom":
                {
                    d.my = "left top";
                    d.at = "right center";
                }
                break;

              case "bottomRightCorner":
                {
                    d.my = "left top";
                    d.at = "right bottom";
                }
                break;

              case "bottomRight":
                {
                    d.my = "right top";
                    d.at = "right bottom";
                }
                break;

              case "bottom":
                {
                    d.my = "center top";
                    d.at = "center bottom";
                }
                break;

              case "bottomLeft":
                {
                    d.my = "left top";
                    d.at = "left bottom";
                }
                break;

              case "bottomLeftCorner":
                {
                    d.my = "right top";
                    d.at = "left bottom";
                }
                break;

              case "leftBottom":
                {
                    d.my = "right top";
                    d.at = "left center";
                }
                break;

              case "left":
                {
                    d.my = "right center";
                    d.at = "left center";
                }
                break;

              case "leftTop":
                {
                    d.my = "right bottom";
                    d.at = "left center";
                }
                break;

              default:
                {
                    return false;
                }
                break;
            }
            this.popover.css({
                display: this.options.placement === "inline" ? "" : "block"
            });
            if (d !== false) {
                this.popover.pos(d).css("maxWidth", a(window).width() - this.container.offset().left - 5);
            } else {
                this.popover.css({
                    top: "auto",
                    right: "auto",
                    bottom: "auto",
                    left: "auto",
                    maxWidth: "none"
                });
            }
            this.popover.addClass(this.options.placement);
            return true;
        },
        _updateComponents: function() {
            this.iconpicker.find(".iconpicker-item.iconpicker-selected").removeClass("iconpicker-selected " + this.options.selectedCustomClass);
            if (this.iconpickerValue) {
                this.iconpicker.find("." + this.options.fullClassFormatter(this.iconpickerValue).replace(/ /g, ".")).parent().addClass("iconpicker-selected " + this.options.selectedCustomClass);
            }
            if (this.hasComponent()) {
                var a = this.component.find("i");
                if (a.length > 0) {
                    a.attr("class", this.options.fullClassFormatter(this.iconpickerValue));
                } else {
                    this.component.html(this.getHtml());
                }
            }
        },
        _updateFormGroupStatus: function(a) {
            if (this.hasInput()) {
                if (a !== false) {
                    this.input.parents(".form-group:first").removeClass("has-error");
                } else {
                    this.input.parents(".form-group:first").addClass("has-error");
                }
                return true;
            }
            return false;
        },
        getValid: function(c) {
            if (!b.isString(c)) {
                c = "";
            }
            var d = c === "";
            c = a.trim(c);
            if (b.inArray(c, this.options.icons) || d) {
                return c;
            }
            return false;
        },
        setValue: function(a) {
            var b = this.getValid(a);
            if (b !== false) {
                this.iconpickerValue = b;
                this._trigger("iconpickerSetValue", {
                    iconpickerValue: b
                });
                return this.iconpickerValue;
            } else {
                this._trigger("iconpickerInvalid", {
                    iconpickerValue: a
                });
                return false;
            }
        },
        getHtml: function() {
            return '<i class="' + this.options.fullClassFormatter(this.iconpickerValue) + '"></i>';
        },
        setSourceValue: function(a) {
            a = this.setValue(a);
            if (a !== false && a !== "") {
                if (this.hasInput()) {
                    this.input.val(this.iconpickerValue);
                } else {
                    this.element.data("iconpickerValue", this.iconpickerValue);
                }
                this._trigger("iconpickerSetSourceValue", {
                    iconpickerValue: a
                });
            }
            return a;
        },
        getSourceValue: function(a) {
            a = a || this.options.defaultValue;
            var b = a;
            if (this.hasInput()) {
                b = this.input.val();
            } else {
                b = this.element.data("iconpickerValue");
            }
            if (b === undefined || b === "" || b === null || b === false) {
                b = a;
            }
            return b;
        },
        hasInput: function() {
            return this.input !== false;
        },
        isInputSearch: function() {
            return this.hasInput() && this.options.inputSearch === true;
        },
        isInputGroup: function() {
            return this.container.is(".input-group");
        },
        isDropdownMenu: function() {
            return this.container.is(".dropdown-menu");
        },
        hasSeparatedSearchInput: function() {
            return this.options.templates.search !== false && !this.isInputSearch();
        },
        hasComponent: function() {
            return this.component !== false;
        },
        hasContainer: function() {
            return this.container !== false;
        },
        getAcceptButton: function() {
            return this.popover.find(".iconpicker-btn-accept");
        },
        getCancelButton: function() {
            return this.popover.find(".iconpicker-btn-cancel");
        },
        getSearchInput: function() {
            return this.popover.find(".iconpicker-search");
        },
        filter: function(c) {
            if (b.isEmpty(c)) {
                this.iconpicker.find(".iconpicker-item").show();
                return a(false);
            } else {
                var d = [];
                this.iconpicker.find(".iconpicker-item").each(function() {
                    var b = a(this);
                    var e = b.attr("title").toLowerCase();
                    var f = false;
                    try {
                        f = new RegExp(c, "g");
                    } catch (a) {
                        f = false;
                    }
                    if (f !== false && e.match(f)) {
                        d.push(b);
                        b.show();
                    } else {
                        b.hide();
                    }
                });
                return d;
            }
        },
        show: function() {
            if (this.popover.hasClass("in")) {
                return false;
            }
            a.iconpicker.batch(a(".iconpicker-popover.in:not(.inline)").not(this.popover), "hide");
            this._trigger("iconpickerShow");
            this.updatePlacement();
            this.popover.addClass("in");
            setTimeout(a.proxy(function() {
                this.popover.css("display", this.isInline() ? "" : "block");
                this._trigger("iconpickerShown");
            }, this), this.options.animation ? 300 : 1);
        },
        hide: function() {
            if (!this.popover.hasClass("in")) {
                return false;
            }
            this._trigger("iconpickerHide");
            this.popover.removeClass("in");
            setTimeout(a.proxy(function() {
                this.popover.css("display", "none");
                this.getSearchInput().val("");
                this.filter("");
                this._trigger("iconpickerHidden");
            }, this), this.options.animation ? 300 : 1);
        },
        toggle: function() {
            if (this.popover.is(":visible")) {
                this.hide();
            } else {
                this.show(true);
            }
        },
        update: function(a, b) {
            a = a ? a : this.getSourceValue(this.iconpickerValue);
            this._trigger("iconpickerUpdate");
            if (b === true) {
                a = this.setValue(a);
            } else {
                a = this.setSourceValue(a);
                this._updateFormGroupStatus(a !== false);
            }
            if (a !== false) {
                this._updateComponents();
            }
            this._trigger("iconpickerUpdated");
            return a;
        },
        destroy: function() {
            this._trigger("iconpickerDestroy");
            this.element.removeData("iconpicker").removeData("iconpickerValue").removeClass("iconpicker-element");
            this._unbindElementEvents();
            this._unbindWindowEvents();
            a(this.popover).remove();
            this._trigger("iconpickerDestroyed");
        },
        disable: function() {
            if (this.hasInput()) {
                this.input.prop("disabled", true);
                return true;
            }
            return false;
        },
        enable: function() {
            if (this.hasInput()) {
                this.input.prop("disabled", false);
                return true;
            }
            return false;
        },
        isDisabled: function() {
            if (this.hasInput()) {
                return this.input.prop("disabled") === true;
            }
            return false;
        },
        isInline: function() {
            return this.options.placement === "inline" || this.popover.hasClass("inline");
        }
    };
    a.iconpicker = c;
    a.fn.iconpicker = function(b) {
        return this.each(function() {
            var d = a(this);
            if (!d.data("iconpicker")) {
                d.data("iconpicker", new c(this, typeof b === "object" ? b : {}));
            }
        });
    };
    c.defaultOptions.icons = [ "fa-500px", "fa-address-book", "fa-address-book-o", "fa-address-card", "fa-address-card-o", "fa-adjust", "fa-adn", "fa-align-center", "fa-align-justify", "fa-align-left", "fa-align-right", "fa-amazon", "fa-ambulance", "fa-american-sign-language-interpreting", "fa-anchor", "fa-android", "fa-angellist", "fa-angle-double-down", "fa-angle-double-left", "fa-angle-double-right", "fa-angle-double-up", "fa-angle-down", "fa-angle-left", "fa-angle-right", "fa-angle-up", "fa-apple", "fa-archive", "fa-area-chart", "fa-arrow-circle-down", "fa-arrow-circle-left", "fa-arrow-circle-o-down", "fa-arrow-circle-o-left", "fa-arrow-circle-o-right", "fa-arrow-circle-o-up", "fa-arrow-circle-right", "fa-arrow-circle-up", "fa-arrow-down", "fa-arrow-left", "fa-arrow-right", "fa-arrow-up", "fa-arrows", "fa-arrows-alt", "fa-arrows-h", "fa-arrows-v", "fa-asl-interpreting", "fa-assistive-listening-systems", "fa-asterisk", "fa-at", "fa-audio-description", "fa-automobile", "fa-backward", "fa-balance-scale", "fa-ban", "fa-bandcamp", "fa-bank", "fa-bar-chart", "fa-bar-chart-o", "fa-barcode", "fa-bars", "fa-bath", "fa-bathtub", "fa-battery", "fa-battery-0", "fa-battery-1", "fa-battery-2", "fa-battery-3", "fa-battery-4", "fa-battery-empty", "fa-battery-full", "fa-battery-half", "fa-battery-quarter", "fa-battery-three-quarters", "fa-bed", "fa-beer", "fa-behance", "fa-behance-square", "fa-bell", "fa-bell-o", "fa-bell-slash", "fa-bell-slash-o", "fa-bicycle", "fa-binoculars", "fa-birthday-cake", "fa-bitbucket", "fa-bitbucket-square", "fa-bitcoin", "fa-black-tie", "fa-blind", "fa-bluetooth", "fa-bluetooth-b", "fa-bold", "fa-bolt", "fa-bomb", "fa-book", "fa-bookmark", "fa-bookmark-o", "fa-braille", "fa-briefcase", "fa-btc", "fa-bug", "fa-building", "fa-building-o", "fa-bullhorn", "fa-bullseye", "fa-bus", "fa-buysellads", "fa-cab", "fa-calculator", "fa-calendar", "fa-calendar-check-o", "fa-calendar-minus-o", "fa-calendar-o", "fa-calendar-plus-o", "fa-calendar-times-o", "fa-camera", "fa-camera-retro", "fa-car", "fa-caret-down", "fa-caret-left", "fa-caret-right", "fa-caret-square-o-down", "fa-caret-square-o-left", "fa-caret-square-o-right", "fa-caret-square-o-up", "fa-caret-up", "fa-cart-arrow-down", "fa-cart-plus", "fa-cc", "fa-cc-amex", "fa-cc-diners-club", "fa-cc-discover", "fa-cc-jcb", "fa-cc-mastercard", "fa-cc-paypal", "fa-cc-stripe", "fa-cc-visa", "fa-certificate", "fa-chain", "fa-chain-broken", "fa-check", "fa-check-circle", "fa-check-circle-o", "fa-check-square", "fa-check-square-o", "fa-chevron-circle-down", "fa-chevron-circle-left", "fa-chevron-circle-right", "fa-chevron-circle-up", "fa-chevron-down", "fa-chevron-left", "fa-chevron-right", "fa-chevron-up", "fa-child", "fa-chrome", "fa-circle", "fa-circle-o", "fa-circle-o-notch", "fa-circle-thin", "fa-clipboard", "fa-clock-o", "fa-clone", "fa-close", "fa-cloud", "fa-cloud-download", "fa-cloud-upload", "fa-cny", "fa-code", "fa-code-fork", "fa-codepen", "fa-codiepie", "fa-coffee", "fa-cog", "fa-cogs", "fa-columns", "fa-comment", "fa-comment-o", "fa-commenting", "fa-commenting-o", "fa-comments", "fa-comments-o", "fa-compass", "fa-compress", "fa-connectdevelop", "fa-contao", "fa-copy", "fa-copyright", "fa-creative-commons", "fa-credit-card", "fa-credit-card-alt", "fa-crop", "fa-crosshairs", "fa-css3", "fa-cube", "fa-cubes", "fa-cut", "fa-cutlery", "fa-dashboard", "fa-dashcube", "fa-database", "fa-deaf", "fa-deafness", "fa-dedent", "fa-delicious", "fa-desktop", "fa-deviantart", "fa-diamond", "fa-digg", "fa-dollar", "fa-dot-circle-o", "fa-download", "fa-dribbble", "fa-drivers-license", "fa-drivers-license-o", "fa-dropbox", "fa-drupal", "fa-edge", "fa-edit", "fa-eercast", "fa-eject", "fa-ellipsis-h", "fa-ellipsis-v", "fa-empire", "fa-envelope", "fa-envelope-o", "fa-envelope-open", "fa-envelope-open-o", "fa-envelope-square", "fa-envira", "fa-eraser", "fa-etsy", "fa-eur", "fa-euro", "fa-exchange", "fa-exclamation", "fa-exclamation-circle", "fa-exclamation-triangle", "fa-expand", "fa-expeditedssl", "fa-external-link", "fa-external-link-square", "fa-eye", "fa-eye-slash", "fa-eyedropper", "fa-fa", "fa-facebook", "fa-facebook-f", "fa-facebook-official", "fa-facebook-square", "fa-fast-backward", "fa-fast-forward", "fa-fax", "fa-feed", "fa-female", "fa-fighter-jet", "fa-file", "fa-file-archive-o", "fa-file-audio-o", "fa-file-code-o", "fa-file-excel-o", "fa-file-image-o", "fa-file-movie-o", "fa-file-o", "fa-file-pdf-o", "fa-file-photo-o", "fa-file-picture-o", "fa-file-powerpoint-o", "fa-file-sound-o", "fa-file-text", "fa-file-text-o", "fa-file-video-o", "fa-file-word-o", "fa-file-zip-o", "fa-files-o", "fa-film", "fa-filter", "fa-fire", "fa-fire-extinguisher", "fa-firefox", "fa-first-order", "fa-flag", "fa-flag-checkered", "fa-flag-o", "fa-flash", "fa-flask", "fa-flickr", "fa-floppy-o", "fa-folder", "fa-folder-o", "fa-folder-open", "fa-folder-open-o", "fa-font", "fa-font-awesome", "fa-fonticons", "fa-fort-awesome", "fa-forumbee", "fa-forward", "fa-foursquare", "fa-free-code-camp", "fa-frown-o", "fa-futbol-o", "fa-gamepad", "fa-gavel", "fa-gbp", "fa-ge", "fa-gear", "fa-gears", "fa-genderless", "fa-get-pocket", "fa-gg", "fa-gg-circle", "fa-gift", "fa-git", "fa-git-square", "fa-github", "fa-github-alt", "fa-github-square", "fa-gitlab", "fa-gittip", "fa-glass", "fa-glide", "fa-glide-g", "fa-globe", "fa-google", "fa-google-plus", "fa-google-plus-circle", "fa-google-plus-official", "fa-google-plus-square", "fa-google-wallet", "fa-graduation-cap", "fa-gratipay", "fa-grav", "fa-group", "fa-h-square", "fa-hacker-news", "fa-hand-grab-o", "fa-hand-lizard-o", "fa-hand-o-down", "fa-hand-o-left", "fa-hand-o-right", "fa-hand-o-up", "fa-hand-paper-o", "fa-hand-peace-o", "fa-hand-pointer-o", "fa-hand-rock-o", "fa-hand-scissors-o", "fa-hand-spock-o", "fa-hand-stop-o", "fa-handshake-o", "fa-hard-of-hearing", "fa-hashtag", "fa-hdd-o", "fa-header", "fa-headphones", "fa-heart", "fa-heart-o", "fa-heartbeat", "fa-history", "fa-home", "fa-hospital-o", "fa-hotel", "fa-hourglass", "fa-hourglass-1", "fa-hourglass-2", "fa-hourglass-3", "fa-hourglass-end", "fa-hourglass-half", "fa-hourglass-o", "fa-hourglass-start", "fa-houzz", "fa-html5", "fa-i-cursor", "fa-id-badge", "fa-id-card", "fa-id-card-o", "fa-ils", "fa-image", "fa-imdb", "fa-inbox", "fa-indent", "fa-industry", "fa-info", "fa-info-circle", "fa-inr", "fa-instagram", "fa-institution", "fa-internet-explorer", "fa-intersex", "fa-ioxhost", "fa-italic", "fa-joomla", "fa-jpy", "fa-jsfiddle", "fa-key", "fa-keyboard-o", "fa-krw", "fa-language", "fa-laptop", "fa-lastfm", "fa-lastfm-square", "fa-leaf", "fa-leanpub", "fa-legal", "fa-lemon-o", "fa-level-down", "fa-level-up", "fa-life-bouy", "fa-life-buoy", "fa-life-ring", "fa-life-saver", "fa-lightbulb-o", "fa-line-chart", "fa-link", "fa-linkedin", "fa-linkedin-square", "fa-linode", "fa-linux", "fa-list", "fa-list-alt", "fa-list-ol", "fa-list-ul", "fa-location-arrow", "fa-lock", "fa-long-arrow-down", "fa-long-arrow-left", "fa-long-arrow-right", "fa-long-arrow-up", "fa-low-vision", "fa-magic", "fa-magnet", "fa-mail-forward", "fa-mail-reply", "fa-mail-reply-all", "fa-male", "fa-map", "fa-map-marker", "fa-map-o", "fa-map-pin", "fa-map-signs", "fa-mars", "fa-mars-double", "fa-mars-stroke", "fa-mars-stroke-h", "fa-mars-stroke-v", "fa-maxcdn", "fa-meanpath", "fa-medium", "fa-medkit", "fa-meetup", "fa-meh-o", "fa-mercury", "fa-microchip", "fa-microphone", "fa-microphone-slash", "fa-minus", "fa-minus-circle", "fa-minus-square", "fa-minus-square-o", "fa-mixcloud", "fa-mobile", "fa-mobile-phone", "fa-modx", "fa-money", "fa-moon-o", "fa-mortar-board", "fa-motorcycle", "fa-mouse-pointer", "fa-music", "fa-navicon", "fa-neuter", "fa-newspaper-o", "fa-object-group", "fa-object-ungroup", "fa-odnoklassniki", "fa-odnoklassniki-square", "fa-opencart", "fa-openid", "fa-opera", "fa-optin-monster", "fa-outdent", "fa-pagelines", "fa-paint-brush", "fa-paper-plane", "fa-paper-plane-o", "fa-paperclip", "fa-paragraph", "fa-paste", "fa-pause", "fa-pause-circle", "fa-pause-circle-o", "fa-paw", "fa-paypal", "fa-pencil", "fa-pencil-square", "fa-pencil-square-o", "fa-percent", "fa-phone", "fa-phone-square", "fa-photo", "fa-picture-o", "fa-pie-chart", "fa-pied-piper", "fa-pied-piper-alt", "fa-pied-piper-pp", "fa-pinterest", "fa-pinterest-p", "fa-pinterest-square", "fa-plane", "fa-play", "fa-play-circle", "fa-play-circle-o", "fa-plug", "fa-plus", "fa-plus-circle", "fa-plus-square", "fa-plus-square-o", "fa-podcast", "fa-power-off", "fa-print", "fa-product-hunt", "fa-puzzle-piece", "fa-qq", "fa-qrcode", "fa-question", "fa-question-circle", "fa-question-circle-o", "fa-quora", "fa-quote-left", "fa-quote-right", "fa-ra", "fa-random", "fa-ravelry", "fa-rebel", "fa-recycle", "fa-reddit", "fa-reddit-alien", "fa-reddit-square", "fa-refresh", "fa-registered", "fa-remove", "fa-renren", "fa-reorder", "fa-repeat", "fa-reply", "fa-reply-all", "fa-resistance", "fa-retweet", "fa-rmb", "fa-road", "fa-rocket", "fa-rotate-left", "fa-rotate-right", "fa-rouble", "fa-rss", "fa-rss-square", "fa-rub", "fa-ruble", "fa-rupee", "fa-s15", "fa-safari", "fa-save", "fa-scissors", "fa-scribd", "fa-search", "fa-search-minus", "fa-search-plus", "fa-sellsy", "fa-send", "fa-send-o", "fa-server", "fa-share", "fa-share-alt", "fa-share-alt-square", "fa-share-square", "fa-share-square-o", "fa-shekel", "fa-sheqel", "fa-shield", "fa-ship", "fa-shirtsinbulk", "fa-shopping-bag", "fa-shopping-basket", "fa-shopping-cart", "fa-shower", "fa-sign-in", "fa-sign-language", "fa-sign-out", "fa-signal", "fa-signing", "fa-simplybuilt", "fa-sitemap", "fa-skyatlas", "fa-skype", "fa-slack", "fa-sliders", "fa-slideshare", "fa-smile-o", "fa-snapchat", "fa-snapchat-ghost", "fa-snapchat-square", "fa-snowflake-o", "fa-soccer-ball-o", "fa-sort", "fa-sort-alpha-asc", "fa-sort-alpha-desc", "fa-sort-amount-asc", "fa-sort-amount-desc", "fa-sort-asc", "fa-sort-desc", "fa-sort-down", "fa-sort-numeric-asc", "fa-sort-numeric-desc", "fa-sort-up", "fa-soundcloud", "fa-space-shuttle", "fa-spinner", "fa-spoon", "fa-spotify", "fa-square", "fa-square-o", "fa-stack-exchange", "fa-stack-overflow", "fa-star", "fa-star-half", "fa-star-half-empty", "fa-star-half-full", "fa-star-half-o", "fa-star-o", "fa-steam", "fa-steam-square", "fa-step-backward", "fa-step-forward", "fa-stethoscope", "fa-sticky-note", "fa-sticky-note-o", "fa-stop", "fa-stop-circle", "fa-stop-circle-o", "fa-street-view", "fa-strikethrough", "fa-stumbleupon", "fa-stumbleupon-circle", "fa-subscript", "fa-subway", "fa-suitcase", "fa-sun-o", "fa-superpowers", "fa-superscript", "fa-support", "fa-table", "fa-tablet", "fa-tachometer", "fa-tag", "fa-tags", "fa-tasks", "fa-taxi", "fa-telegram", "fa-television", "fa-tencent-weibo", "fa-terminal", "fa-text-height", "fa-text-width", "fa-th", "fa-th-large", "fa-th-list", "fa-themeisle", "fa-thermometer", "fa-thermometer-0", "fa-thermometer-1", "fa-thermometer-2", "fa-thermometer-3", "fa-thermometer-4", "fa-thermometer-empty", "fa-thermometer-full", "fa-thermometer-half", "fa-thermometer-quarter", "fa-thermometer-three-quarters", "fa-thumb-tack", "fa-thumbs-down", "fa-thumbs-o-down", "fa-thumbs-o-up", "fa-thumbs-up", "fa-ticket", "fa-times", "fa-times-circle", "fa-times-circle-o", "fa-times-rectangle", "fa-times-rectangle-o", "fa-tint", "fa-toggle-down", "fa-toggle-left", "fa-toggle-off", "fa-toggle-on", "fa-toggle-right", "fa-toggle-up", "fa-trademark", "fa-train", "fa-transgender", "fa-transgender-alt", "fa-trash", "fa-trash-o", "fa-tree", "fa-trello", "fa-tripadvisor", "fa-trophy", "fa-truck", "fa-try", "fa-tty", "fa-tumblr", "fa-tumblr-square", "fa-turkish-lira", "fa-tv", "fa-twitch", "fa-twitter", "fa-twitter-square", "fa-umbrella", "fa-underline", "fa-undo", "fa-universal-access", "fa-university", "fa-unlink", "fa-unlock", "fa-unlock-alt", "fa-unsorted", "fa-upload", "fa-usb", "fa-usd", "fa-user", "fa-user-circle", "fa-user-circle-o", "fa-user-md", "fa-user-o", "fa-user-plus", "fa-user-secret", "fa-user-times", "fa-users", "fa-vcard", "fa-vcard-o", "fa-venus", "fa-venus-double", "fa-venus-mars", "fa-viacoin", "fa-viadeo", "fa-viadeo-square", "fa-video-camera", "fa-vimeo", "fa-vimeo-square", "fa-vine", "fa-vk", "fa-volume-control-phone", "fa-volume-down", "fa-volume-off", "fa-volume-up", "fa-warning", "fa-wechat", "fa-weibo", "fa-weixin", "fa-whatsapp", "fa-wheelchair", "fa-wheelchair-alt", "fa-wifi", "fa-wikipedia-w", "fa-window-close", "fa-window-close-o", "fa-window-maximize", "fa-window-minimize", "fa-window-restore", "fa-windows", "fa-won", "fa-wordpress", "fa-wpbeginner", "fa-wpexplorer", "fa-wpforms", "fa-wrench", "fa-xing", "fa-xing-square", "fa-y-combinator", "fa-y-combinator-square", "fa-yahoo", "fa-yc", "fa-yc-square", "fa-yelp", "fa-yen", "fa-yoast", "fa-youtube", "fa-youtube-play", "fa-youtube-square" ];
});
/*!
 * Bootstrap Colorpicker v2.5.2
 * https://itsjavi.com/bootstrap-colorpicker/
 */
!function(a,b){"function"==typeof define&&define.amd?define(["jquery"],function(a){return b(a)}):"object"==typeof exports?module.exports=b(require("jquery")):jQuery&&!jQuery.fn.colorpicker&&b(jQuery)}(this,function(a){"use strict";var b=function(c,d,e,f,g){this.fallbackValue=e?"string"==typeof e?this.parse(e):e:null,this.fallbackFormat=f?f:"rgba",this.hexNumberSignPrefix=g===!0,this.value=this.fallbackValue,this.origFormat=null,this.predefinedColors=d?d:{},this.colors=a.extend({},b.webColors,this.predefinedColors),c&&("undefined"!=typeof c.h?this.value=c:this.setColor(String(c))),this.value||(this.value={h:0,s:0,b:0,a:1})};b.webColors={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgrey:"d3d3d3",lightgreen:"90ee90",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"778899",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"00ff00",limegreen:"32cd32",linen:"faf0e6",magenta:"ff00ff",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370d8",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"d87093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",red:"ff0000",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"ffffff",whitesmoke:"f5f5f5",yellow:"ffff00",yellowgreen:"9acd32",transparent:"transparent"},b.prototype={constructor:b,colors:{},predefinedColors:{},getValue:function(){return this.value},setValue:function(a){this.value=a},_sanitizeNumber:function(a){return"number"==typeof a?a:isNaN(a)||null===a||""===a||void 0===a?1:""===a?0:"undefined"!=typeof a.toLowerCase?(a.match(/^\./)&&(a="0"+a),Math.ceil(100*parseFloat(a))/100):1},isTransparent:function(a){return!(!a||!("string"==typeof a||a instanceof String))&&(a=a.toLowerCase().trim(),"transparent"===a||a.match(/#?00000000/)||a.match(/(rgba|hsla)\(0,0,0,0?\.?0\)/))},rgbaIsTransparent:function(a){return 0===a.r&&0===a.g&&0===a.b&&0===a.a},setColor:function(a){if(a=a.toLowerCase().trim()){if(this.isTransparent(a))return this.value={h:0,s:0,b:0,a:0},!0;var b=this.parse(a);b?(this.value=this.value={h:b.h,s:b.s,b:b.b,a:b.a},this.origFormat||(this.origFormat=b.format)):this.fallbackValue&&(this.value=this.fallbackValue)}return!1},setHue:function(a){this.value.h=1-a},setSaturation:function(a){this.value.s=a},setBrightness:function(a){this.value.b=1-a},setAlpha:function(a){this.value.a=Math.round(parseInt(100*(1-a),10)/100*100)/100},toRGB:function(a,b,c,d){0===arguments.length&&(a=this.value.h,b=this.value.s,c=this.value.b,d=this.value.a),a*=360;var e,f,g,h,i;return a=a%360/60,i=c*b,h=i*(1-Math.abs(a%2-1)),e=f=g=c-i,a=~~a,e+=[i,h,0,0,h,i][a],f+=[h,i,i,h,0,0][a],g+=[0,0,h,i,i,h][a],{r:Math.round(255*e),g:Math.round(255*f),b:Math.round(255*g),a:d}},toHex:function(a,b,c,d,e){arguments.length<=1&&(b=this.value.h,c=this.value.s,d=this.value.b,e=this.value.a);var f="#",g=this.toRGB(b,c,d,e);if(this.rgbaIsTransparent(g))return"transparent";a||(f=this.hexNumberSignPrefix?"#":"");var h=f+((1<<24)+(parseInt(g.r)<<16)+(parseInt(g.g)<<8)+parseInt(g.b)).toString(16).slice(1);return h},toHSL:function(a,b,c,d){0===arguments.length&&(a=this.value.h,b=this.value.s,c=this.value.b,d=this.value.a);var e=a,f=(2-b)*c,g=b*c;return g/=f>0&&f<=1?f:2-f,f/=2,g>1&&(g=1),{h:isNaN(e)?0:e,s:isNaN(g)?0:g,l:isNaN(f)?0:f,a:isNaN(d)?0:d}},toAlias:function(a,b,c,d){var e,f=0===arguments.length?this.toHex(!0):this.toHex(!0,a,b,c,d),g="alias"===this.origFormat?f:this.toString(!1,this.origFormat);for(var h in this.colors)if(e=this.colors[h].toLowerCase().trim(),e===f||e===g)return h;return!1},RGBtoHSB:function(a,b,c,d){a/=255,b/=255,c/=255;var e,f,g,h;return g=Math.max(a,b,c),h=g-Math.min(a,b,c),e=0===h?null:g===a?(b-c)/h:g===b?(c-a)/h+2:(a-b)/h+4,e=(e+360)%6*60/360,f=0===h?0:h/g,{h:this._sanitizeNumber(e),s:f,b:g,a:this._sanitizeNumber(d)}},HueToRGB:function(a,b,c){return c<0?c+=1:c>1&&(c-=1),6*c<1?a+(b-a)*c*6:2*c<1?b:3*c<2?a+(b-a)*(2/3-c)*6:a},HSLtoRGB:function(a,b,c,d){b<0&&(b=0);var e;e=c<=.5?c*(1+b):c+b-c*b;var f=2*c-e,g=a+1/3,h=a,i=a-1/3,j=Math.round(255*this.HueToRGB(f,e,g)),k=Math.round(255*this.HueToRGB(f,e,h)),l=Math.round(255*this.HueToRGB(f,e,i));return[j,k,l,this._sanitizeNumber(d)]},parse:function(b){if("string"!=typeof b)return this.fallbackValue;if(0===arguments.length)return!1;var c,d,e=this,f=!1,g="undefined"!=typeof this.colors[b];return g&&(b=this.colors[b].toLowerCase().trim()),a.each(this.stringParsers,function(a,h){var i=h.re.exec(b);return c=i&&h.parse.apply(e,[i]),!c||(f={},d=g?"alias":h.format?h.format:e.getValidFallbackFormat(),f=d.match(/hsla?/)?e.RGBtoHSB.apply(e,e.HSLtoRGB.apply(e,c)):e.RGBtoHSB.apply(e,c),f instanceof Object&&(f.format=d),!1)}),f},getValidFallbackFormat:function(){var a=["rgba","rgb","hex","hsla","hsl"];return this.origFormat&&a.indexOf(this.origFormat)!==-1?this.origFormat:this.fallbackFormat&&a.indexOf(this.fallbackFormat)!==-1?this.fallbackFormat:"rgba"},toString:function(a,c,d){c=c||this.origFormat||this.fallbackFormat,d=d||!1;var e=!1;switch(c){case"rgb":return e=this.toRGB(),this.rgbaIsTransparent(e)?"transparent":"rgb("+e.r+","+e.g+","+e.b+")";case"rgba":return e=this.toRGB(),"rgba("+e.r+","+e.g+","+e.b+","+e.a+")";case"hsl":return e=this.toHSL(),"hsl("+Math.round(360*e.h)+","+Math.round(100*e.s)+"%,"+Math.round(100*e.l)+"%)";case"hsla":return e=this.toHSL(),"hsla("+Math.round(360*e.h)+","+Math.round(100*e.s)+"%,"+Math.round(100*e.l)+"%,"+e.a+")";case"hex":return this.toHex(a);case"alias":return e=this.toAlias(),e===!1?this.toString(a,this.getValidFallbackFormat()):d&&!(e in b.webColors)&&e in this.predefinedColors?this.predefinedColors[e]:e;default:return e}},stringParsers:[{re:/rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*?\)/,format:"rgb",parse:function(a){return[a[1],a[2],a[3],1]}},{re:/rgb\(\s*(\d*(?:\.\d+)?)\%\s*,\s*(\d*(?:\.\d+)?)\%\s*,\s*(\d*(?:\.\d+)?)\%\s*?\)/,format:"rgb",parse:function(a){return[2.55*a[1],2.55*a[2],2.55*a[3],1]}},{re:/rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d*(?:\.\d+)?)\s*)?\)/,format:"rgba",parse:function(a){return[a[1],a[2],a[3],a[4]]}},{re:/rgba\(\s*(\d*(?:\.\d+)?)\%\s*,\s*(\d*(?:\.\d+)?)\%\s*,\s*(\d*(?:\.\d+)?)\%\s*(?:,\s*(\d*(?:\.\d+)?)\s*)?\)/,format:"rgba",parse:function(a){return[2.55*a[1],2.55*a[2],2.55*a[3],a[4]]}},{re:/hsl\(\s*(\d*(?:\.\d+)?)\s*,\s*(\d*(?:\.\d+)?)\%\s*,\s*(\d*(?:\.\d+)?)\%\s*?\)/,format:"hsl",parse:function(a){return[a[1]/360,a[2]/100,a[3]/100,a[4]]}},{re:/hsla\(\s*(\d*(?:\.\d+)?)\s*,\s*(\d*(?:\.\d+)?)\%\s*,\s*(\d*(?:\.\d+)?)\%\s*(?:,\s*(\d*(?:\.\d+)?)\s*)?\)/,format:"hsla",parse:function(a){return[a[1]/360,a[2]/100,a[3]/100,a[4]]}},{re:/#?([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/,format:"hex",parse:function(a){return[parseInt(a[1],16),parseInt(a[2],16),parseInt(a[3],16),1]}},{re:/#?([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/,format:"hex",parse:function(a){return[parseInt(a[1]+a[1],16),parseInt(a[2]+a[2],16),parseInt(a[3]+a[3],16),1]}}],colorNameToHex:function(a){return"undefined"!=typeof this.colors[a.toLowerCase()]&&this.colors[a.toLowerCase()]}};var c={horizontal:!1,inline:!1,color:!1,format:!1,input:"input",container:!1,component:".add-on, .input-group-addon",fallbackColor:!1,fallbackFormat:"hex",hexNumberSignPrefix:!0,sliders:{saturation:{maxLeft:100,maxTop:100,callLeft:"setSaturation",callTop:"setBrightness"},hue:{maxLeft:0,maxTop:100,callLeft:!1,callTop:"setHue"},alpha:{maxLeft:0,maxTop:100,callLeft:!1,callTop:"setAlpha"}},slidersHorz:{saturation:{maxLeft:100,maxTop:100,callLeft:"setSaturation",callTop:"setBrightness"},hue:{maxLeft:100,maxTop:0,callLeft:"setHue",callTop:!1},alpha:{maxLeft:100,maxTop:0,callLeft:"setAlpha",callTop:!1}},template:'<div class="colorpicker dropdown-menu"><div class="colorpicker-saturation"><i><b></b></i></div><div class="colorpicker-hue"><i></i></div><div class="colorpicker-alpha"><i></i></div><div class="colorpicker-color"><div /></div><div class="colorpicker-selectors"></div></div>',align:"right",customClass:null,colorSelectors:null},d=function(b,d){this.element=a(b).addClass("colorpicker-element"),this.options=a.extend(!0,{},c,this.element.data(),d),this.component=this.options.component,this.component=this.component!==!1&&this.element.find(this.component),this.component&&0===this.component.length&&(this.component=!1),this.container=this.options.container===!0?this.element:this.options.container,this.container=this.container!==!1&&a(this.container),this.input=this.element.is("input")?this.element:!!this.options.input&&this.element.find(this.options.input),this.input&&0===this.input.length&&(this.input=!1),this.color=this.createColor(this.options.color!==!1?this.options.color:this.getValue()),this.format=this.options.format!==!1?this.options.format:this.color.origFormat,this.options.color!==!1&&(this.updateInput(this.color),this.updateData(this.color)),this.disabled=!1;var e=this.picker=a(this.options.template);if(this.options.customClass&&e.addClass(this.options.customClass),this.options.inline?e.addClass("colorpicker-inline colorpicker-visible"):e.addClass("colorpicker-hidden"),this.options.horizontal&&e.addClass("colorpicker-horizontal"),["rgba","hsla","alias"].indexOf(this.format)===-1&&this.options.format!==!1&&"transparent"!==this.getValue()||e.addClass("colorpicker-with-alpha"),"right"===this.options.align&&e.addClass("colorpicker-right"),this.options.inline===!0&&e.addClass("colorpicker-no-arrow"),this.options.colorSelectors){var f=this,g=f.picker.find(".colorpicker-selectors");g.length>0&&(a.each(this.options.colorSelectors,function(b,c){var d=a("<i />").addClass("colorpicker-selectors-color").css("background-color",c).data("class",b).data("alias",b);d.on("mousedown.colorpicker touchstart.colorpicker",function(b){b.preventDefault(),f.setValue("alias"===f.format?a(this).data("alias"):a(this).css("background-color"))}),g.append(d)}),g.show().addClass("colorpicker-visible"))}e.on("mousedown.colorpicker touchstart.colorpicker",a.proxy(function(a){a.target===a.currentTarget&&a.preventDefault()},this)),e.find(".colorpicker-saturation, .colorpicker-hue, .colorpicker-alpha").on("mousedown.colorpicker touchstart.colorpicker",a.proxy(this.mousedown,this)),e.appendTo(this.container?this.container:a("body")),this.input!==!1&&(this.input.on({"keyup.colorpicker":a.proxy(this.keyup,this)}),this.input.on({"input.colorpicker":a.proxy(this.change,this)}),this.component===!1&&this.element.on({"focus.colorpicker":a.proxy(this.show,this)}),this.options.inline===!1&&this.element.on({"focusout.colorpicker":a.proxy(this.hide,this)})),this.component!==!1&&this.component.on({"click.colorpicker":a.proxy(this.show,this)}),this.input===!1&&this.component===!1&&this.element.on({"click.colorpicker":a.proxy(this.show,this)}),this.input!==!1&&this.component!==!1&&"color"===this.input.attr("type")&&this.input.on({"click.colorpicker":a.proxy(this.show,this),"focus.colorpicker":a.proxy(this.show,this)}),this.update(),a(a.proxy(function(){this.element.trigger("create")},this))};d.Color=b,d.prototype={constructor:d,destroy:function(){this.picker.remove(),this.element.removeData("colorpicker","color").off(".colorpicker"),this.input!==!1&&this.input.off(".colorpicker"),this.component!==!1&&this.component.off(".colorpicker"),this.element.removeClass("colorpicker-element"),this.element.trigger({type:"destroy"})},reposition:function(){if(this.options.inline!==!1||this.options.container)return!1;var a=this.container&&this.container[0]!==window.document.body?"position":"offset",b=this.component||this.element,c=b[a]();"right"===this.options.align&&(c.left-=this.picker.outerWidth()-b.outerWidth()),this.picker.css({top:c.top+b.outerHeight(),left:c.left})},show:function(b){this.isDisabled()||(this.picker.addClass("colorpicker-visible").removeClass("colorpicker-hidden"),this.reposition(),a(window).on("resize.colorpicker",a.proxy(this.reposition,this)),!b||this.hasInput()&&"color"!==this.input.attr("type")||b.stopPropagation&&b.preventDefault&&(b.stopPropagation(),b.preventDefault()),!this.component&&this.input||this.options.inline!==!1||a(window.document).on({"mousedown.colorpicker":a.proxy(this.hide,this)}),this.element.trigger({type:"showPicker",color:this.color}))},hide:function(b){return("undefined"==typeof b||!b.target||!(a(b.currentTarget).parents(".colorpicker").length>0||a(b.target).parents(".colorpicker").length>0))&&(this.picker.addClass("colorpicker-hidden").removeClass("colorpicker-visible"),a(window).off("resize.colorpicker",this.reposition),a(window.document).off({"mousedown.colorpicker":this.hide}),this.update(),void this.element.trigger({type:"hidePicker",color:this.color}))},updateData:function(a){return a=a||this.color.toString(!1,this.format),this.element.data("color",a),a},updateInput:function(a){return a=a||this.color.toString(!1,this.format),this.input!==!1&&(this.input.prop("value",a),this.input.trigger("change")),a},updatePicker:function(a){"undefined"!=typeof a&&(this.color=this.createColor(a));var b=this.options.horizontal===!1?this.options.sliders:this.options.slidersHorz,c=this.picker.find("i");if(0!==c.length)return this.options.horizontal===!1?(b=this.options.sliders,c.eq(1).css("top",b.hue.maxTop*(1-this.color.value.h)).end().eq(2).css("top",b.alpha.maxTop*(1-this.color.value.a))):(b=this.options.slidersHorz,c.eq(1).css("left",b.hue.maxLeft*(1-this.color.value.h)).end().eq(2).css("left",b.alpha.maxLeft*(1-this.color.value.a))),c.eq(0).css({top:b.saturation.maxTop-this.color.value.b*b.saturation.maxTop,left:this.color.value.s*b.saturation.maxLeft}),this.picker.find(".colorpicker-saturation").css("backgroundColor",this.color.toHex(!0,this.color.value.h,1,1,1)),this.picker.find(".colorpicker-alpha").css("backgroundColor",this.color.toHex(!0)),this.picker.find(".colorpicker-color, .colorpicker-color div").css("backgroundColor",this.color.toString(!0,this.format)),a},updateComponent:function(a){var b;if(b="undefined"!=typeof a?this.createColor(a):this.color,this.component!==!1){var c=this.component.find("i").eq(0);c.length>0?c.css({backgroundColor:b.toString(!0,this.format)}):this.component.css({backgroundColor:b.toString(!0,this.format)})}return b.toString(!1,this.format)},update:function(a){var b;return this.getValue(!1)===!1&&a!==!0||(b=this.updateComponent(),this.updateInput(b),this.updateData(b),this.updatePicker()),b},setValue:function(a){this.color=this.createColor(a),this.update(!0),this.element.trigger({type:"changeColor",color:this.color,value:a})},createColor:function(a){return new b(a?a:null,this.options.colorSelectors,this.options.fallbackColor?this.options.fallbackColor:this.color,this.options.fallbackFormat,this.options.hexNumberSignPrefix)},getValue:function(a){a="undefined"==typeof a?this.options.fallbackColor:a;var b;return b=this.hasInput()?this.input.val():this.element.data("color"),void 0!==b&&""!==b&&null!==b||(b=a),b},hasInput:function(){return this.input!==!1},isDisabled:function(){return this.disabled},disable:function(){return this.hasInput()&&this.input.prop("disabled",!0),this.disabled=!0,this.element.trigger({type:"disable",color:this.color,value:this.getValue()}),!0},enable:function(){return this.hasInput()&&this.input.prop("disabled",!1),this.disabled=!1,this.element.trigger({type:"enable",color:this.color,value:this.getValue()}),!0},currentSlider:null,mousePointer:{left:0,top:0},mousedown:function(b){!b.pageX&&!b.pageY&&b.originalEvent&&b.originalEvent.touches&&(b.pageX=b.originalEvent.touches[0].pageX,b.pageY=b.originalEvent.touches[0].pageY),b.stopPropagation(),b.preventDefault();var c=a(b.target),d=c.closest("div"),e=this.options.horizontal?this.options.slidersHorz:this.options.sliders;if(!d.is(".colorpicker")){if(d.is(".colorpicker-saturation"))this.currentSlider=a.extend({},e.saturation);else if(d.is(".colorpicker-hue"))this.currentSlider=a.extend({},e.hue);else{if(!d.is(".colorpicker-alpha"))return!1;this.currentSlider=a.extend({},e.alpha)}var f=d.offset();this.currentSlider.guide=d.find("i")[0].style,this.currentSlider.left=b.pageX-f.left,this.currentSlider.top=b.pageY-f.top,this.mousePointer={left:b.pageX,top:b.pageY},a(window.document).on({"mousemove.colorpicker":a.proxy(this.mousemove,this),"touchmove.colorpicker":a.proxy(this.mousemove,this),"mouseup.colorpicker":a.proxy(this.mouseup,this),"touchend.colorpicker":a.proxy(this.mouseup,this)}).trigger("mousemove")}return!1},mousemove:function(a){!a.pageX&&!a.pageY&&a.originalEvent&&a.originalEvent.touches&&(a.pageX=a.originalEvent.touches[0].pageX,a.pageY=a.originalEvent.touches[0].pageY),a.stopPropagation(),a.preventDefault();var b=Math.max(0,Math.min(this.currentSlider.maxLeft,this.currentSlider.left+((a.pageX||this.mousePointer.left)-this.mousePointer.left))),c=Math.max(0,Math.min(this.currentSlider.maxTop,this.currentSlider.top+((a.pageY||this.mousePointer.top)-this.mousePointer.top)));return this.currentSlider.guide.left=b+"px",this.currentSlider.guide.top=c+"px",this.currentSlider.callLeft&&this.color[this.currentSlider.callLeft].call(this.color,b/this.currentSlider.maxLeft),this.currentSlider.callTop&&this.color[this.currentSlider.callTop].call(this.color,c/this.currentSlider.maxTop),this.options.format!==!1||"setAlpha"!==this.currentSlider.callTop&&"setAlpha"!==this.currentSlider.callLeft||(1!==this.color.value.a?(this.format="rgba",this.color.origFormat="rgba"):(this.format="hex",this.color.origFormat="hex")),this.update(!0),this.element.trigger({type:"changeColor",color:this.color}),!1},mouseup:function(b){return b.stopPropagation(),b.preventDefault(),a(window.document).off({"mousemove.colorpicker":this.mousemove,"touchmove.colorpicker":this.mousemove,"mouseup.colorpicker":this.mouseup,"touchend.colorpicker":this.mouseup}),!1},change:function(a){this.color=this.createColor(this.input.val()),this.color.origFormat&&this.options.format===!1&&(this.format=this.color.origFormat),this.getValue(!1)!==!1&&(this.updateData(),this.updateComponent(),this.updatePicker()),this.element.trigger({type:"changeColor",color:this.color,value:this.input.val()})},keyup:function(a){38===a.keyCode?(this.color.value.a<1&&(this.color.value.a=Math.round(100*(this.color.value.a+.01))/100),this.update(!0)):40===a.keyCode&&(this.color.value.a>0&&(this.color.value.a=Math.round(100*(this.color.value.a-.01))/100),this.update(!0)),this.element.trigger({type:"changeColor",color:this.color,value:this.input.val()})}},a.colorpicker=d,a.fn.colorpicker=function(b){var c=Array.prototype.slice.call(arguments,1),e=1===this.length,f=null,g=this.each(function(){var e=a(this),g=e.data("colorpicker"),h="object"==typeof b?b:{};g||(g=new d(this,h),e.data("colorpicker",g)),"string"==typeof b?a.isFunction(g[b])?f=g[b].apply(g,c):(c.length&&(g[b]=c[0]),f=g[b]):f=e});return e?f:g},a.fn.colorpicker.constructor=d});
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.moment=t()}(this,function(){"use strict";var e,i;function c(){return e.apply(null,arguments)}function o(e){return e instanceof Array||"[object Array]"===Object.prototype.toString.call(e)}function u(e){return null!=e&&"[object Object]"===Object.prototype.toString.call(e)}function l(e){return void 0===e}function h(e){return"number"==typeof e||"[object Number]"===Object.prototype.toString.call(e)}function d(e){return e instanceof Date||"[object Date]"===Object.prototype.toString.call(e)}function f(e,t){var n,s=[];for(n=0;n<e.length;++n)s.push(t(e[n],n));return s}function m(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function _(e,t){for(var n in t)m(t,n)&&(e[n]=t[n]);return m(t,"toString")&&(e.toString=t.toString),m(t,"valueOf")&&(e.valueOf=t.valueOf),e}function y(e,t,n,s){return Tt(e,t,n,s,!0).utc()}function g(e){return null==e._pf&&(e._pf={empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],meridiem:null,rfc2822:!1,weekdayMismatch:!1}),e._pf}function v(e){if(null==e._isValid){var t=g(e),n=i.call(t.parsedDateParts,function(e){return null!=e}),s=!isNaN(e._d.getTime())&&t.overflow<0&&!t.empty&&!t.invalidMonth&&!t.invalidWeekday&&!t.weekdayMismatch&&!t.nullInput&&!t.invalidFormat&&!t.userInvalidated&&(!t.meridiem||t.meridiem&&n);if(e._strict&&(s=s&&0===t.charsLeftOver&&0===t.unusedTokens.length&&void 0===t.bigHour),null!=Object.isFrozen&&Object.isFrozen(e))return s;e._isValid=s}return e._isValid}function p(e){var t=y(NaN);return null!=e?_(g(t),e):g(t).userInvalidated=!0,t}i=Array.prototype.some?Array.prototype.some:function(e){for(var t=Object(this),n=t.length>>>0,s=0;s<n;s++)if(s in t&&e.call(this,t[s],s,t))return!0;return!1};var r=c.momentProperties=[];function w(e,t){var n,s,i;if(l(t._isAMomentObject)||(e._isAMomentObject=t._isAMomentObject),l(t._i)||(e._i=t._i),l(t._f)||(e._f=t._f),l(t._l)||(e._l=t._l),l(t._strict)||(e._strict=t._strict),l(t._tzm)||(e._tzm=t._tzm),l(t._isUTC)||(e._isUTC=t._isUTC),l(t._offset)||(e._offset=t._offset),l(t._pf)||(e._pf=g(t)),l(t._locale)||(e._locale=t._locale),0<r.length)for(n=0;n<r.length;n++)l(i=t[s=r[n]])||(e[s]=i);return e}var t=!1;function M(e){w(this,e),this._d=new Date(null!=e._d?e._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),!1===t&&(t=!0,c.updateOffset(this),t=!1)}function k(e){return e instanceof M||null!=e&&null!=e._isAMomentObject}function S(e){return e<0?Math.ceil(e)||0:Math.floor(e)}function D(e){var t=+e,n=0;return 0!==t&&isFinite(t)&&(n=S(t)),n}function a(e,t,n){var s,i=Math.min(e.length,t.length),r=Math.abs(e.length-t.length),a=0;for(s=0;s<i;s++)(n&&e[s]!==t[s]||!n&&D(e[s])!==D(t[s]))&&a++;return a+r}function Y(e){!1===c.suppressDeprecationWarnings&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+e)}function n(i,r){var a=!0;return _(function(){if(null!=c.deprecationHandler&&c.deprecationHandler(null,i),a){for(var e,t=[],n=0;n<arguments.length;n++){if(e="","object"==typeof arguments[n]){for(var s in e+="\n["+n+"] ",arguments[0])e+=s+": "+arguments[0][s]+", ";e=e.slice(0,-2)}else e=arguments[n];t.push(e)}Y(i+"\nArguments: "+Array.prototype.slice.call(t).join("")+"\n"+(new Error).stack),a=!1}return r.apply(this,arguments)},r)}var s,O={};function T(e,t){null!=c.deprecationHandler&&c.deprecationHandler(e,t),O[e]||(Y(t),O[e]=!0)}function b(e){return e instanceof Function||"[object Function]"===Object.prototype.toString.call(e)}function x(e,t){var n,s=_({},e);for(n in t)m(t,n)&&(u(e[n])&&u(t[n])?(s[n]={},_(s[n],e[n]),_(s[n],t[n])):null!=t[n]?s[n]=t[n]:delete s[n]);for(n in e)m(e,n)&&!m(t,n)&&u(e[n])&&(s[n]=_({},s[n]));return s}function P(e){null!=e&&this.set(e)}c.suppressDeprecationWarnings=!1,c.deprecationHandler=null,s=Object.keys?Object.keys:function(e){var t,n=[];for(t in e)m(e,t)&&n.push(t);return n};var W={};function C(e,t){var n=e.toLowerCase();W[n]=W[n+"s"]=W[t]=e}function H(e){return"string"==typeof e?W[e]||W[e.toLowerCase()]:void 0}function R(e){var t,n,s={};for(n in e)m(e,n)&&(t=H(n))&&(s[t]=e[n]);return s}var U={};function F(e,t){U[e]=t}function L(e,t,n){var s=""+Math.abs(e),i=t-s.length;return(0<=e?n?"+":"":"-")+Math.pow(10,Math.max(0,i)).toString().substr(1)+s}var N=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,G=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,V={},E={};function I(e,t,n,s){var i=s;"string"==typeof s&&(i=function(){return this[s]()}),e&&(E[e]=i),t&&(E[t[0]]=function(){return L(i.apply(this,arguments),t[1],t[2])}),n&&(E[n]=function(){return this.localeData().ordinal(i.apply(this,arguments),e)})}function A(e,t){return e.isValid()?(t=j(t,e.localeData()),V[t]=V[t]||function(s){var e,i,t,r=s.match(N);for(e=0,i=r.length;e<i;e++)E[r[e]]?r[e]=E[r[e]]:r[e]=(t=r[e]).match(/\[[\s\S]/)?t.replace(/^\[|\]$/g,""):t.replace(/\\/g,"");return function(e){var t,n="";for(t=0;t<i;t++)n+=b(r[t])?r[t].call(e,s):r[t];return n}}(t),V[t](e)):e.localeData().invalidDate()}function j(e,t){var n=5;function s(e){return t.longDateFormat(e)||e}for(G.lastIndex=0;0<=n&&G.test(e);)e=e.replace(G,s),G.lastIndex=0,n-=1;return e}var Z=/\d/,z=/\d\d/,$=/\d{3}/,q=/\d{4}/,J=/[+-]?\d{6}/,B=/\d\d?/,Q=/\d\d\d\d?/,X=/\d\d\d\d\d\d?/,K=/\d{1,3}/,ee=/\d{1,4}/,te=/[+-]?\d{1,6}/,ne=/\d+/,se=/[+-]?\d+/,ie=/Z|[+-]\d\d:?\d\d/gi,re=/Z|[+-]\d\d(?::?\d\d)?/gi,ae=/[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,oe={};function ue(e,n,s){oe[e]=b(n)?n:function(e,t){return e&&s?s:n}}function le(e,t){return m(oe,e)?oe[e](t._strict,t._locale):new RegExp(he(e.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(e,t,n,s,i){return t||n||s||i})))}function he(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var de={};function ce(e,n){var t,s=n;for("string"==typeof e&&(e=[e]),h(n)&&(s=function(e,t){t[n]=D(e)}),t=0;t<e.length;t++)de[e[t]]=s}function fe(e,i){ce(e,function(e,t,n,s){n._w=n._w||{},i(e,n._w,n,s)})}var me=0,_e=1,ye=2,ge=3,ve=4,pe=5,we=6,Me=7,ke=8;function Se(e){return De(e)?366:365}function De(e){return e%4==0&&e%100!=0||e%400==0}I("Y",0,0,function(){var e=this.year();return e<=9999?""+e:"+"+e}),I(0,["YY",2],0,function(){return this.year()%100}),I(0,["YYYY",4],0,"year"),I(0,["YYYYY",5],0,"year"),I(0,["YYYYYY",6,!0],0,"year"),C("year","y"),F("year",1),ue("Y",se),ue("YY",B,z),ue("YYYY",ee,q),ue("YYYYY",te,J),ue("YYYYYY",te,J),ce(["YYYYY","YYYYYY"],me),ce("YYYY",function(e,t){t[me]=2===e.length?c.parseTwoDigitYear(e):D(e)}),ce("YY",function(e,t){t[me]=c.parseTwoDigitYear(e)}),ce("Y",function(e,t){t[me]=parseInt(e,10)}),c.parseTwoDigitYear=function(e){return D(e)+(68<D(e)?1900:2e3)};var Ye,Oe=Te("FullYear",!0);function Te(t,n){return function(e){return null!=e?(xe(this,t,e),c.updateOffset(this,n),this):be(this,t)}}function be(e,t){return e.isValid()?e._d["get"+(e._isUTC?"UTC":"")+t]():NaN}function xe(e,t,n){e.isValid()&&!isNaN(n)&&("FullYear"===t&&De(e.year())&&1===e.month()&&29===e.date()?e._d["set"+(e._isUTC?"UTC":"")+t](n,e.month(),Pe(n,e.month())):e._d["set"+(e._isUTC?"UTC":"")+t](n))}function Pe(e,t){if(isNaN(e)||isNaN(t))return NaN;var n,s=(t%(n=12)+n)%n;return e+=(t-s)/12,1===s?De(e)?29:28:31-s%7%2}Ye=Array.prototype.indexOf?Array.prototype.indexOf:function(e){var t;for(t=0;t<this.length;++t)if(this[t]===e)return t;return-1},I("M",["MM",2],"Mo",function(){return this.month()+1}),I("MMM",0,0,function(e){return this.localeData().monthsShort(this,e)}),I("MMMM",0,0,function(e){return this.localeData().months(this,e)}),C("month","M"),F("month",8),ue("M",B),ue("MM",B,z),ue("MMM",function(e,t){return t.monthsShortRegex(e)}),ue("MMMM",function(e,t){return t.monthsRegex(e)}),ce(["M","MM"],function(e,t){t[_e]=D(e)-1}),ce(["MMM","MMMM"],function(e,t,n,s){var i=n._locale.monthsParse(e,s,n._strict);null!=i?t[_e]=i:g(n).invalidMonth=e});var We=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,Ce="January_February_March_April_May_June_July_August_September_October_November_December".split("_");var He="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");function Re(e,t){var n;if(!e.isValid())return e;if("string"==typeof t)if(/^\d+$/.test(t))t=D(t);else if(!h(t=e.localeData().monthsParse(t)))return e;return n=Math.min(e.date(),Pe(e.year(),t)),e._d["set"+(e._isUTC?"UTC":"")+"Month"](t,n),e}function Ue(e){return null!=e?(Re(this,e),c.updateOffset(this,!0),this):be(this,"Month")}var Fe=ae;var Le=ae;function Ne(){function e(e,t){return t.length-e.length}var t,n,s=[],i=[],r=[];for(t=0;t<12;t++)n=y([2e3,t]),s.push(this.monthsShort(n,"")),i.push(this.months(n,"")),r.push(this.months(n,"")),r.push(this.monthsShort(n,""));for(s.sort(e),i.sort(e),r.sort(e),t=0;t<12;t++)s[t]=he(s[t]),i[t]=he(i[t]);for(t=0;t<24;t++)r[t]=he(r[t]);this._monthsRegex=new RegExp("^("+r.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+i.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+s.join("|")+")","i")}function Ge(e){var t;if(e<100&&0<=e){var n=Array.prototype.slice.call(arguments);n[0]=e+400,t=new Date(Date.UTC.apply(null,n)),isFinite(t.getUTCFullYear())&&t.setUTCFullYear(e)}else t=new Date(Date.UTC.apply(null,arguments));return t}function Ve(e,t,n){var s=7+t-n;return-((7+Ge(e,0,s).getUTCDay()-t)%7)+s-1}function Ee(e,t,n,s,i){var r,a,o=1+7*(t-1)+(7+n-s)%7+Ve(e,s,i);return a=o<=0?Se(r=e-1)+o:o>Se(e)?(r=e+1,o-Se(e)):(r=e,o),{year:r,dayOfYear:a}}function Ie(e,t,n){var s,i,r=Ve(e.year(),t,n),a=Math.floor((e.dayOfYear()-r-1)/7)+1;return a<1?s=a+Ae(i=e.year()-1,t,n):a>Ae(e.year(),t,n)?(s=a-Ae(e.year(),t,n),i=e.year()+1):(i=e.year(),s=a),{week:s,year:i}}function Ae(e,t,n){var s=Ve(e,t,n),i=Ve(e+1,t,n);return(Se(e)-s+i)/7}I("w",["ww",2],"wo","week"),I("W",["WW",2],"Wo","isoWeek"),C("week","w"),C("isoWeek","W"),F("week",5),F("isoWeek",5),ue("w",B),ue("ww",B,z),ue("W",B),ue("WW",B,z),fe(["w","ww","W","WW"],function(e,t,n,s){t[s.substr(0,1)]=D(e)});function je(e,t){return e.slice(t,7).concat(e.slice(0,t))}I("d",0,"do","day"),I("dd",0,0,function(e){return this.localeData().weekdaysMin(this,e)}),I("ddd",0,0,function(e){return this.localeData().weekdaysShort(this,e)}),I("dddd",0,0,function(e){return this.localeData().weekdays(this,e)}),I("e",0,0,"weekday"),I("E",0,0,"isoWeekday"),C("day","d"),C("weekday","e"),C("isoWeekday","E"),F("day",11),F("weekday",11),F("isoWeekday",11),ue("d",B),ue("e",B),ue("E",B),ue("dd",function(e,t){return t.weekdaysMinRegex(e)}),ue("ddd",function(e,t){return t.weekdaysShortRegex(e)}),ue("dddd",function(e,t){return t.weekdaysRegex(e)}),fe(["dd","ddd","dddd"],function(e,t,n,s){var i=n._locale.weekdaysParse(e,s,n._strict);null!=i?t.d=i:g(n).invalidWeekday=e}),fe(["d","e","E"],function(e,t,n,s){t[s]=D(e)});var Ze="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_");var ze="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_");var $e="Su_Mo_Tu_We_Th_Fr_Sa".split("_");var qe=ae;var Je=ae;var Be=ae;function Qe(){function e(e,t){return t.length-e.length}var t,n,s,i,r,a=[],o=[],u=[],l=[];for(t=0;t<7;t++)n=y([2e3,1]).day(t),s=this.weekdaysMin(n,""),i=this.weekdaysShort(n,""),r=this.weekdays(n,""),a.push(s),o.push(i),u.push(r),l.push(s),l.push(i),l.push(r);for(a.sort(e),o.sort(e),u.sort(e),l.sort(e),t=0;t<7;t++)o[t]=he(o[t]),u[t]=he(u[t]),l[t]=he(l[t]);this._weekdaysRegex=new RegExp("^("+l.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+u.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+o.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+a.join("|")+")","i")}function Xe(){return this.hours()%12||12}function Ke(e,t){I(e,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),t)})}function et(e,t){return t._meridiemParse}I("H",["HH",2],0,"hour"),I("h",["hh",2],0,Xe),I("k",["kk",2],0,function(){return this.hours()||24}),I("hmm",0,0,function(){return""+Xe.apply(this)+L(this.minutes(),2)}),I("hmmss",0,0,function(){return""+Xe.apply(this)+L(this.minutes(),2)+L(this.seconds(),2)}),I("Hmm",0,0,function(){return""+this.hours()+L(this.minutes(),2)}),I("Hmmss",0,0,function(){return""+this.hours()+L(this.minutes(),2)+L(this.seconds(),2)}),Ke("a",!0),Ke("A",!1),C("hour","h"),F("hour",13),ue("a",et),ue("A",et),ue("H",B),ue("h",B),ue("k",B),ue("HH",B,z),ue("hh",B,z),ue("kk",B,z),ue("hmm",Q),ue("hmmss",X),ue("Hmm",Q),ue("Hmmss",X),ce(["H","HH"],ge),ce(["k","kk"],function(e,t,n){var s=D(e);t[ge]=24===s?0:s}),ce(["a","A"],function(e,t,n){n._isPm=n._locale.isPM(e),n._meridiem=e}),ce(["h","hh"],function(e,t,n){t[ge]=D(e),g(n).bigHour=!0}),ce("hmm",function(e,t,n){var s=e.length-2;t[ge]=D(e.substr(0,s)),t[ve]=D(e.substr(s)),g(n).bigHour=!0}),ce("hmmss",function(e,t,n){var s=e.length-4,i=e.length-2;t[ge]=D(e.substr(0,s)),t[ve]=D(e.substr(s,2)),t[pe]=D(e.substr(i)),g(n).bigHour=!0}),ce("Hmm",function(e,t,n){var s=e.length-2;t[ge]=D(e.substr(0,s)),t[ve]=D(e.substr(s))}),ce("Hmmss",function(e,t,n){var s=e.length-4,i=e.length-2;t[ge]=D(e.substr(0,s)),t[ve]=D(e.substr(s,2)),t[pe]=D(e.substr(i))});var tt,nt=Te("Hours",!0),st={calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},longDateFormat:{LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},invalidDate:"Invalid date",ordinal:"%d",dayOfMonthOrdinalParse:/\d{1,2}/,relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},months:Ce,monthsShort:He,week:{dow:0,doy:6},weekdays:Ze,weekdaysMin:$e,weekdaysShort:ze,meridiemParse:/[ap]\.?m?\.?/i},it={},rt={};function at(e){return e?e.toLowerCase().replace("_","-"):e}function ot(e){var t=null;if(!it[e]&&"undefined"!=typeof module&&module&&module.exports)try{t=tt._abbr,require("./locale/"+e),ut(t)}catch(e){}return it[e]}function ut(e,t){var n;return e&&((n=l(t)?ht(e):lt(e,t))?tt=n:"undefined"!=typeof console&&console.warn&&console.warn("Locale "+e+" not found. Did you forget to load it?")),tt._abbr}function lt(e,t){if(null===t)return delete it[e],null;var n,s=st;if(t.abbr=e,null!=it[e])T("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),s=it[e]._config;else if(null!=t.parentLocale)if(null!=it[t.parentLocale])s=it[t.parentLocale]._config;else{if(null==(n=ot(t.parentLocale)))return rt[t.parentLocale]||(rt[t.parentLocale]=[]),rt[t.parentLocale].push({name:e,config:t}),null;s=n._config}return it[e]=new P(x(s,t)),rt[e]&&rt[e].forEach(function(e){lt(e.name,e.config)}),ut(e),it[e]}function ht(e){var t;if(e&&e._locale&&e._locale._abbr&&(e=e._locale._abbr),!e)return tt;if(!o(e)){if(t=ot(e))return t;e=[e]}return function(e){for(var t,n,s,i,r=0;r<e.length;){for(t=(i=at(e[r]).split("-")).length,n=(n=at(e[r+1]))?n.split("-"):null;0<t;){if(s=ot(i.slice(0,t).join("-")))return s;if(n&&n.length>=t&&a(i,n,!0)>=t-1)break;t--}r++}return tt}(e)}function dt(e){var t,n=e._a;return n&&-2===g(e).overflow&&(t=n[_e]<0||11<n[_e]?_e:n[ye]<1||n[ye]>Pe(n[me],n[_e])?ye:n[ge]<0||24<n[ge]||24===n[ge]&&(0!==n[ve]||0!==n[pe]||0!==n[we])?ge:n[ve]<0||59<n[ve]?ve:n[pe]<0||59<n[pe]?pe:n[we]<0||999<n[we]?we:-1,g(e)._overflowDayOfYear&&(t<me||ye<t)&&(t=ye),g(e)._overflowWeeks&&-1===t&&(t=Me),g(e)._overflowWeekday&&-1===t&&(t=ke),g(e).overflow=t),e}function ct(e,t,n){return null!=e?e:null!=t?t:n}function ft(e){var t,n,s,i,r,a=[];if(!e._d){var o,u;for(o=e,u=new Date(c.now()),s=o._useUTC?[u.getUTCFullYear(),u.getUTCMonth(),u.getUTCDate()]:[u.getFullYear(),u.getMonth(),u.getDate()],e._w&&null==e._a[ye]&&null==e._a[_e]&&function(e){var t,n,s,i,r,a,o,u;if(null!=(t=e._w).GG||null!=t.W||null!=t.E)r=1,a=4,n=ct(t.GG,e._a[me],Ie(bt(),1,4).year),s=ct(t.W,1),((i=ct(t.E,1))<1||7<i)&&(u=!0);else{r=e._locale._week.dow,a=e._locale._week.doy;var l=Ie(bt(),r,a);n=ct(t.gg,e._a[me],l.year),s=ct(t.w,l.week),null!=t.d?((i=t.d)<0||6<i)&&(u=!0):null!=t.e?(i=t.e+r,(t.e<0||6<t.e)&&(u=!0)):i=r}s<1||s>Ae(n,r,a)?g(e)._overflowWeeks=!0:null!=u?g(e)._overflowWeekday=!0:(o=Ee(n,s,i,r,a),e._a[me]=o.year,e._dayOfYear=o.dayOfYear)}(e),null!=e._dayOfYear&&(r=ct(e._a[me],s[me]),(e._dayOfYear>Se(r)||0===e._dayOfYear)&&(g(e)._overflowDayOfYear=!0),n=Ge(r,0,e._dayOfYear),e._a[_e]=n.getUTCMonth(),e._a[ye]=n.getUTCDate()),t=0;t<3&&null==e._a[t];++t)e._a[t]=a[t]=s[t];for(;t<7;t++)e._a[t]=a[t]=null==e._a[t]?2===t?1:0:e._a[t];24===e._a[ge]&&0===e._a[ve]&&0===e._a[pe]&&0===e._a[we]&&(e._nextDay=!0,e._a[ge]=0),e._d=(e._useUTC?Ge:function(e,t,n,s,i,r,a){var o;return e<100&&0<=e?(o=new Date(e+400,t,n,s,i,r,a),isFinite(o.getFullYear())&&o.setFullYear(e)):o=new Date(e,t,n,s,i,r,a),o}).apply(null,a),i=e._useUTC?e._d.getUTCDay():e._d.getDay(),null!=e._tzm&&e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),e._nextDay&&(e._a[ge]=24),e._w&&void 0!==e._w.d&&e._w.d!==i&&(g(e).weekdayMismatch=!0)}}var mt=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,_t=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,yt=/Z|[+-]\d\d(?::?\d\d)?/,gt=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/]],vt=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],pt=/^\/?Date\((\-?\d+)/i;function wt(e){var t,n,s,i,r,a,o=e._i,u=mt.exec(o)||_t.exec(o);if(u){for(g(e).iso=!0,t=0,n=gt.length;t<n;t++)if(gt[t][1].exec(u[1])){i=gt[t][0],s=!1!==gt[t][2];break}if(null==i)return void(e._isValid=!1);if(u[3]){for(t=0,n=vt.length;t<n;t++)if(vt[t][1].exec(u[3])){r=(u[2]||" ")+vt[t][0];break}if(null==r)return void(e._isValid=!1)}if(!s&&null!=r)return void(e._isValid=!1);if(u[4]){if(!yt.exec(u[4]))return void(e._isValid=!1);a="Z"}e._f=i+(r||"")+(a||""),Yt(e)}else e._isValid=!1}var Mt=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;function kt(e,t,n,s,i,r){var a=[function(e){var t=parseInt(e,10);{if(t<=49)return 2e3+t;if(t<=999)return 1900+t}return t}(e),He.indexOf(t),parseInt(n,10),parseInt(s,10),parseInt(i,10)];return r&&a.push(parseInt(r,10)),a}var St={UT:0,GMT:0,EDT:-240,EST:-300,CDT:-300,CST:-360,MDT:-360,MST:-420,PDT:-420,PST:-480};function Dt(e){var t,n,s,i=Mt.exec(e._i.replace(/\([^)]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").replace(/^\s\s*/,"").replace(/\s\s*$/,""));if(i){var r=kt(i[4],i[3],i[2],i[5],i[6],i[7]);if(t=i[1],n=r,s=e,t&&ze.indexOf(t)!==new Date(n[0],n[1],n[2]).getDay()&&(g(s).weekdayMismatch=!0,!(s._isValid=!1)))return;e._a=r,e._tzm=function(e,t,n){if(e)return St[e];if(t)return 0;var s=parseInt(n,10),i=s%100;return(s-i)/100*60+i}(i[8],i[9],i[10]),e._d=Ge.apply(null,e._a),e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),g(e).rfc2822=!0}else e._isValid=!1}function Yt(e){if(e._f!==c.ISO_8601)if(e._f!==c.RFC_2822){e._a=[],g(e).empty=!0;var t,n,s,i,r,a,o,u,l=""+e._i,h=l.length,d=0;for(s=j(e._f,e._locale).match(N)||[],t=0;t<s.length;t++)i=s[t],(n=(l.match(le(i,e))||[])[0])&&(0<(r=l.substr(0,l.indexOf(n))).length&&g(e).unusedInput.push(r),l=l.slice(l.indexOf(n)+n.length),d+=n.length),E[i]?(n?g(e).empty=!1:g(e).unusedTokens.push(i),a=i,u=e,null!=(o=n)&&m(de,a)&&de[a](o,u._a,u,a)):e._strict&&!n&&g(e).unusedTokens.push(i);g(e).charsLeftOver=h-d,0<l.length&&g(e).unusedInput.push(l),e._a[ge]<=12&&!0===g(e).bigHour&&0<e._a[ge]&&(g(e).bigHour=void 0),g(e).parsedDateParts=e._a.slice(0),g(e).meridiem=e._meridiem,e._a[ge]=function(e,t,n){var s;if(null==n)return t;return null!=e.meridiemHour?e.meridiemHour(t,n):(null!=e.isPM&&((s=e.isPM(n))&&t<12&&(t+=12),s||12!==t||(t=0)),t)}(e._locale,e._a[ge],e._meridiem),ft(e),dt(e)}else Dt(e);else wt(e)}function Ot(e){var t,n,s,i,r=e._i,a=e._f;return e._locale=e._locale||ht(e._l),null===r||void 0===a&&""===r?p({nullInput:!0}):("string"==typeof r&&(e._i=r=e._locale.preparse(r)),k(r)?new M(dt(r)):(d(r)?e._d=r:o(a)?function(e){var t,n,s,i,r;if(0===e._f.length)return g(e).invalidFormat=!0,e._d=new Date(NaN);for(i=0;i<e._f.length;i++)r=0,t=w({},e),null!=e._useUTC&&(t._useUTC=e._useUTC),t._f=e._f[i],Yt(t),v(t)&&(r+=g(t).charsLeftOver,r+=10*g(t).unusedTokens.length,g(t).score=r,(null==s||r<s)&&(s=r,n=t));_(e,n||t)}(e):a?Yt(e):l(n=(t=e)._i)?t._d=new Date(c.now()):d(n)?t._d=new Date(n.valueOf()):"string"==typeof n?(s=t,null===(i=pt.exec(s._i))?(wt(s),!1===s._isValid&&(delete s._isValid,Dt(s),!1===s._isValid&&(delete s._isValid,c.createFromInputFallback(s)))):s._d=new Date(+i[1])):o(n)?(t._a=f(n.slice(0),function(e){return parseInt(e,10)}),ft(t)):u(n)?function(e){if(!e._d){var t=R(e._i);e._a=f([t.year,t.month,t.day||t.date,t.hour,t.minute,t.second,t.millisecond],function(e){return e&&parseInt(e,10)}),ft(e)}}(t):h(n)?t._d=new Date(n):c.createFromInputFallback(t),v(e)||(e._d=null),e))}function Tt(e,t,n,s,i){var r,a={};return!0!==n&&!1!==n||(s=n,n=void 0),(u(e)&&function(e){if(Object.getOwnPropertyNames)return 0===Object.getOwnPropertyNames(e).length;var t;for(t in e)if(e.hasOwnProperty(t))return!1;return!0}(e)||o(e)&&0===e.length)&&(e=void 0),a._isAMomentObject=!0,a._useUTC=a._isUTC=i,a._l=n,a._i=e,a._f=t,a._strict=s,(r=new M(dt(Ot(a))))._nextDay&&(r.add(1,"d"),r._nextDay=void 0),r}function bt(e,t,n,s){return Tt(e,t,n,s,!1)}c.createFromInputFallback=n("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(e){e._d=new Date(e._i+(e._useUTC?" UTC":""))}),c.ISO_8601=function(){},c.RFC_2822=function(){};var xt=n("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=bt.apply(null,arguments);return this.isValid()&&e.isValid()?e<this?this:e:p()}),Pt=n("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=bt.apply(null,arguments);return this.isValid()&&e.isValid()?this<e?this:e:p()});function Wt(e,t){var n,s;if(1===t.length&&o(t[0])&&(t=t[0]),!t.length)return bt();for(n=t[0],s=1;s<t.length;++s)t[s].isValid()&&!t[s][e](n)||(n=t[s]);return n}var Ct=["year","quarter","month","week","day","hour","minute","second","millisecond"];function Ht(e){var t=R(e),n=t.year||0,s=t.quarter||0,i=t.month||0,r=t.week||t.isoWeek||0,a=t.day||0,o=t.hour||0,u=t.minute||0,l=t.second||0,h=t.millisecond||0;this._isValid=function(e){for(var t in e)if(-1===Ye.call(Ct,t)||null!=e[t]&&isNaN(e[t]))return!1;for(var n=!1,s=0;s<Ct.length;++s)if(e[Ct[s]]){if(n)return!1;parseFloat(e[Ct[s]])!==D(e[Ct[s]])&&(n=!0)}return!0}(t),this._milliseconds=+h+1e3*l+6e4*u+1e3*o*60*60,this._days=+a+7*r,this._months=+i+3*s+12*n,this._data={},this._locale=ht(),this._bubble()}function Rt(e){return e instanceof Ht}function Ut(e){return e<0?-1*Math.round(-1*e):Math.round(e)}function Ft(e,n){I(e,0,0,function(){var e=this.utcOffset(),t="+";return e<0&&(e=-e,t="-"),t+L(~~(e/60),2)+n+L(~~e%60,2)})}Ft("Z",":"),Ft("ZZ",""),ue("Z",re),ue("ZZ",re),ce(["Z","ZZ"],function(e,t,n){n._useUTC=!0,n._tzm=Nt(re,e)});var Lt=/([\+\-]|\d\d)/gi;function Nt(e,t){var n=(t||"").match(e);if(null===n)return null;var s=((n[n.length-1]||[])+"").match(Lt)||["-",0,0],i=60*s[1]+D(s[2]);return 0===i?0:"+"===s[0]?i:-i}function Gt(e,t){var n,s;return t._isUTC?(n=t.clone(),s=(k(e)||d(e)?e.valueOf():bt(e).valueOf())-n.valueOf(),n._d.setTime(n._d.valueOf()+s),c.updateOffset(n,!1),n):bt(e).local()}function Vt(e){return 15*-Math.round(e._d.getTimezoneOffset()/15)}function Et(){return!!this.isValid()&&(this._isUTC&&0===this._offset)}c.updateOffset=function(){};var It=/^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,At=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;function jt(e,t){var n,s,i,r=e,a=null;return Rt(e)?r={ms:e._milliseconds,d:e._days,M:e._months}:h(e)?(r={},t?r[t]=e:r.milliseconds=e):(a=It.exec(e))?(n="-"===a[1]?-1:1,r={y:0,d:D(a[ye])*n,h:D(a[ge])*n,m:D(a[ve])*n,s:D(a[pe])*n,ms:D(Ut(1e3*a[we]))*n}):(a=At.exec(e))?(n="-"===a[1]?-1:1,r={y:Zt(a[2],n),M:Zt(a[3],n),w:Zt(a[4],n),d:Zt(a[5],n),h:Zt(a[6],n),m:Zt(a[7],n),s:Zt(a[8],n)}):null==r?r={}:"object"==typeof r&&("from"in r||"to"in r)&&(i=function(e,t){var n;if(!e.isValid()||!t.isValid())return{milliseconds:0,months:0};t=Gt(t,e),e.isBefore(t)?n=zt(e,t):((n=zt(t,e)).milliseconds=-n.milliseconds,n.months=-n.months);return n}(bt(r.from),bt(r.to)),(r={}).ms=i.milliseconds,r.M=i.months),s=new Ht(r),Rt(e)&&m(e,"_locale")&&(s._locale=e._locale),s}function Zt(e,t){var n=e&&parseFloat(e.replace(",","."));return(isNaN(n)?0:n)*t}function zt(e,t){var n={};return n.months=t.month()-e.month()+12*(t.year()-e.year()),e.clone().add(n.months,"M").isAfter(t)&&--n.months,n.milliseconds=+t-+e.clone().add(n.months,"M"),n}function $t(s,i){return function(e,t){var n;return null===t||isNaN(+t)||(T(i,"moment()."+i+"(period, number) is deprecated. Please use moment()."+i+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),n=e,e=t,t=n),qt(this,jt(e="string"==typeof e?+e:e,t),s),this}}function qt(e,t,n,s){var i=t._milliseconds,r=Ut(t._days),a=Ut(t._months);e.isValid()&&(s=null==s||s,a&&Re(e,be(e,"Month")+a*n),r&&xe(e,"Date",be(e,"Date")+r*n),i&&e._d.setTime(e._d.valueOf()+i*n),s&&c.updateOffset(e,r||a))}jt.fn=Ht.prototype,jt.invalid=function(){return jt(NaN)};var Jt=$t(1,"add"),Bt=$t(-1,"subtract");function Qt(e,t){var n=12*(t.year()-e.year())+(t.month()-e.month()),s=e.clone().add(n,"months");return-(n+(t-s<0?(t-s)/(s-e.clone().add(n-1,"months")):(t-s)/(e.clone().add(n+1,"months")-s)))||0}function Xt(e){var t;return void 0===e?this._locale._abbr:(null!=(t=ht(e))&&(this._locale=t),this)}c.defaultFormat="YYYY-MM-DDTHH:mm:ssZ",c.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";var Kt=n("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(e){return void 0===e?this.localeData():this.locale(e)});function en(){return this._locale}var tn=126227808e5;function nn(e,t){return(e%t+t)%t}function sn(e,t,n){return e<100&&0<=e?new Date(e+400,t,n)-tn:new Date(e,t,n).valueOf()}function rn(e,t,n){return e<100&&0<=e?Date.UTC(e+400,t,n)-tn:Date.UTC(e,t,n)}function an(e,t){I(0,[e,e.length],0,t)}function on(e,t,n,s,i){var r;return null==e?Ie(this,s,i).year:((r=Ae(e,s,i))<t&&(t=r),function(e,t,n,s,i){var r=Ee(e,t,n,s,i),a=Ge(r.year,0,r.dayOfYear);return this.year(a.getUTCFullYear()),this.month(a.getUTCMonth()),this.date(a.getUTCDate()),this}.call(this,e,t,n,s,i))}I(0,["gg",2],0,function(){return this.weekYear()%100}),I(0,["GG",2],0,function(){return this.isoWeekYear()%100}),an("gggg","weekYear"),an("ggggg","weekYear"),an("GGGG","isoWeekYear"),an("GGGGG","isoWeekYear"),C("weekYear","gg"),C("isoWeekYear","GG"),F("weekYear",1),F("isoWeekYear",1),ue("G",se),ue("g",se),ue("GG",B,z),ue("gg",B,z),ue("GGGG",ee,q),ue("gggg",ee,q),ue("GGGGG",te,J),ue("ggggg",te,J),fe(["gggg","ggggg","GGGG","GGGGG"],function(e,t,n,s){t[s.substr(0,2)]=D(e)}),fe(["gg","GG"],function(e,t,n,s){t[s]=c.parseTwoDigitYear(e)}),I("Q",0,"Qo","quarter"),C("quarter","Q"),F("quarter",7),ue("Q",Z),ce("Q",function(e,t){t[_e]=3*(D(e)-1)}),I("D",["DD",2],"Do","date"),C("date","D"),F("date",9),ue("D",B),ue("DD",B,z),ue("Do",function(e,t){return e?t._dayOfMonthOrdinalParse||t._ordinalParse:t._dayOfMonthOrdinalParseLenient}),ce(["D","DD"],ye),ce("Do",function(e,t){t[ye]=D(e.match(B)[0])});var un=Te("Date",!0);I("DDD",["DDDD",3],"DDDo","dayOfYear"),C("dayOfYear","DDD"),F("dayOfYear",4),ue("DDD",K),ue("DDDD",$),ce(["DDD","DDDD"],function(e,t,n){n._dayOfYear=D(e)}),I("m",["mm",2],0,"minute"),C("minute","m"),F("minute",14),ue("m",B),ue("mm",B,z),ce(["m","mm"],ve);var ln=Te("Minutes",!1);I("s",["ss",2],0,"second"),C("second","s"),F("second",15),ue("s",B),ue("ss",B,z),ce(["s","ss"],pe);var hn,dn=Te("Seconds",!1);for(I("S",0,0,function(){return~~(this.millisecond()/100)}),I(0,["SS",2],0,function(){return~~(this.millisecond()/10)}),I(0,["SSS",3],0,"millisecond"),I(0,["SSSS",4],0,function(){return 10*this.millisecond()}),I(0,["SSSSS",5],0,function(){return 100*this.millisecond()}),I(0,["SSSSSS",6],0,function(){return 1e3*this.millisecond()}),I(0,["SSSSSSS",7],0,function(){return 1e4*this.millisecond()}),I(0,["SSSSSSSS",8],0,function(){return 1e5*this.millisecond()}),I(0,["SSSSSSSSS",9],0,function(){return 1e6*this.millisecond()}),C("millisecond","ms"),F("millisecond",16),ue("S",K,Z),ue("SS",K,z),ue("SSS",K,$),hn="SSSS";hn.length<=9;hn+="S")ue(hn,ne);function cn(e,t){t[we]=D(1e3*("0."+e))}for(hn="S";hn.length<=9;hn+="S")ce(hn,cn);var fn=Te("Milliseconds",!1);I("z",0,0,"zoneAbbr"),I("zz",0,0,"zoneName");var mn=M.prototype;function _n(e){return e}mn.add=Jt,mn.calendar=function(e,t){var n=e||bt(),s=Gt(n,this).startOf("day"),i=c.calendarFormat(this,s)||"sameElse",r=t&&(b(t[i])?t[i].call(this,n):t[i]);return this.format(r||this.localeData().calendar(i,this,bt(n)))},mn.clone=function(){return new M(this)},mn.diff=function(e,t,n){var s,i,r;if(!this.isValid())return NaN;if(!(s=Gt(e,this)).isValid())return NaN;switch(i=6e4*(s.utcOffset()-this.utcOffset()),t=H(t)){case"year":r=Qt(this,s)/12;break;case"month":r=Qt(this,s);break;case"quarter":r=Qt(this,s)/3;break;case"second":r=(this-s)/1e3;break;case"minute":r=(this-s)/6e4;break;case"hour":r=(this-s)/36e5;break;case"day":r=(this-s-i)/864e5;break;case"week":r=(this-s-i)/6048e5;break;default:r=this-s}return n?r:S(r)},mn.endOf=function(e){var t;if(void 0===(e=H(e))||"millisecond"===e||!this.isValid())return this;var n=this._isUTC?rn:sn;switch(e){case"year":t=n(this.year()+1,0,1)-1;break;case"quarter":t=n(this.year(),this.month()-this.month()%3+3,1)-1;break;case"month":t=n(this.year(),this.month()+1,1)-1;break;case"week":t=n(this.year(),this.month(),this.date()-this.weekday()+7)-1;break;case"isoWeek":t=n(this.year(),this.month(),this.date()-(this.isoWeekday()-1)+7)-1;break;case"day":case"date":t=n(this.year(),this.month(),this.date()+1)-1;break;case"hour":t=this._d.valueOf(),t+=36e5-nn(t+(this._isUTC?0:6e4*this.utcOffset()),36e5)-1;break;case"minute":t=this._d.valueOf(),t+=6e4-nn(t,6e4)-1;break;case"second":t=this._d.valueOf(),t+=1e3-nn(t,1e3)-1;break}return this._d.setTime(t),c.updateOffset(this,!0),this},mn.format=function(e){e||(e=this.isUtc()?c.defaultFormatUtc:c.defaultFormat);var t=A(this,e);return this.localeData().postformat(t)},mn.from=function(e,t){return this.isValid()&&(k(e)&&e.isValid()||bt(e).isValid())?jt({to:this,from:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()},mn.fromNow=function(e){return this.from(bt(),e)},mn.to=function(e,t){return this.isValid()&&(k(e)&&e.isValid()||bt(e).isValid())?jt({from:this,to:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()},mn.toNow=function(e){return this.to(bt(),e)},mn.get=function(e){return b(this[e=H(e)])?this[e]():this},mn.invalidAt=function(){return g(this).overflow},mn.isAfter=function(e,t){var n=k(e)?e:bt(e);return!(!this.isValid()||!n.isValid())&&("millisecond"===(t=H(t)||"millisecond")?this.valueOf()>n.valueOf():n.valueOf()<this.clone().startOf(t).valueOf())},mn.isBefore=function(e,t){var n=k(e)?e:bt(e);return!(!this.isValid()||!n.isValid())&&("millisecond"===(t=H(t)||"millisecond")?this.valueOf()<n.valueOf():this.clone().endOf(t).valueOf()<n.valueOf())},mn.isBetween=function(e,t,n,s){var i=k(e)?e:bt(e),r=k(t)?t:bt(t);return!!(this.isValid()&&i.isValid()&&r.isValid())&&("("===(s=s||"()")[0]?this.isAfter(i,n):!this.isBefore(i,n))&&(")"===s[1]?this.isBefore(r,n):!this.isAfter(r,n))},mn.isSame=function(e,t){var n,s=k(e)?e:bt(e);return!(!this.isValid()||!s.isValid())&&("millisecond"===(t=H(t)||"millisecond")?this.valueOf()===s.valueOf():(n=s.valueOf(),this.clone().startOf(t).valueOf()<=n&&n<=this.clone().endOf(t).valueOf()))},mn.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)},mn.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)},mn.isValid=function(){return v(this)},mn.lang=Kt,mn.locale=Xt,mn.localeData=en,mn.max=Pt,mn.min=xt,mn.parsingFlags=function(){return _({},g(this))},mn.set=function(e,t){if("object"==typeof e)for(var n=function(e){var t=[];for(var n in e)t.push({unit:n,priority:U[n]});return t.sort(function(e,t){return e.priority-t.priority}),t}(e=R(e)),s=0;s<n.length;s++)this[n[s].unit](e[n[s].unit]);else if(b(this[e=H(e)]))return this[e](t);return this},mn.startOf=function(e){var t;if(void 0===(e=H(e))||"millisecond"===e||!this.isValid())return this;var n=this._isUTC?rn:sn;switch(e){case"year":t=n(this.year(),0,1);break;case"quarter":t=n(this.year(),this.month()-this.month()%3,1);break;case"month":t=n(this.year(),this.month(),1);break;case"week":t=n(this.year(),this.month(),this.date()-this.weekday());break;case"isoWeek":t=n(this.year(),this.month(),this.date()-(this.isoWeekday()-1));break;case"day":case"date":t=n(this.year(),this.month(),this.date());break;case"hour":t=this._d.valueOf(),t-=nn(t+(this._isUTC?0:6e4*this.utcOffset()),36e5);break;case"minute":t=this._d.valueOf(),t-=nn(t,6e4);break;case"second":t=this._d.valueOf(),t-=nn(t,1e3);break}return this._d.setTime(t),c.updateOffset(this,!0),this},mn.subtract=Bt,mn.toArray=function(){var e=this;return[e.year(),e.month(),e.date(),e.hour(),e.minute(),e.second(),e.millisecond()]},mn.toObject=function(){var e=this;return{years:e.year(),months:e.month(),date:e.date(),hours:e.hours(),minutes:e.minutes(),seconds:e.seconds(),milliseconds:e.milliseconds()}},mn.toDate=function(){return new Date(this.valueOf())},mn.toISOString=function(e){if(!this.isValid())return null;var t=!0!==e,n=t?this.clone().utc():this;return n.year()<0||9999<n.year()?A(n,t?"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"):b(Date.prototype.toISOString)?t?this.toDate().toISOString():new Date(this.valueOf()+60*this.utcOffset()*1e3).toISOString().replace("Z",A(n,"Z")):A(n,t?"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYY-MM-DD[T]HH:mm:ss.SSSZ")},mn.inspect=function(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var e="moment",t="";this.isLocal()||(e=0===this.utcOffset()?"moment.utc":"moment.parseZone",t="Z");var n="["+e+'("]',s=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY",i=t+'[")]';return this.format(n+s+"-MM-DD[T]HH:mm:ss.SSS"+i)},mn.toJSON=function(){return this.isValid()?this.toISOString():null},mn.toString=function(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")},mn.unix=function(){return Math.floor(this.valueOf()/1e3)},mn.valueOf=function(){return this._d.valueOf()-6e4*(this._offset||0)},mn.creationData=function(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}},mn.year=Oe,mn.isLeapYear=function(){return De(this.year())},mn.weekYear=function(e){return on.call(this,e,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy)},mn.isoWeekYear=function(e){return on.call(this,e,this.isoWeek(),this.isoWeekday(),1,4)},mn.quarter=mn.quarters=function(e){return null==e?Math.ceil((this.month()+1)/3):this.month(3*(e-1)+this.month()%3)},mn.month=Ue,mn.daysInMonth=function(){return Pe(this.year(),this.month())},mn.week=mn.weeks=function(e){var t=this.localeData().week(this);return null==e?t:this.add(7*(e-t),"d")},mn.isoWeek=mn.isoWeeks=function(e){var t=Ie(this,1,4).week;return null==e?t:this.add(7*(e-t),"d")},mn.weeksInYear=function(){var e=this.localeData()._week;return Ae(this.year(),e.dow,e.doy)},mn.isoWeeksInYear=function(){return Ae(this.year(),1,4)},mn.date=un,mn.day=mn.days=function(e){if(!this.isValid())return null!=e?this:NaN;var t,n,s=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=e?(t=e,n=this.localeData(),e="string"!=typeof t?t:isNaN(t)?"number"==typeof(t=n.weekdaysParse(t))?t:null:parseInt(t,10),this.add(e-s,"d")):s},mn.weekday=function(e){if(!this.isValid())return null!=e?this:NaN;var t=(this.day()+7-this.localeData()._week.dow)%7;return null==e?t:this.add(e-t,"d")},mn.isoWeekday=function(e){if(!this.isValid())return null!=e?this:NaN;if(null==e)return this.day()||7;var t,n,s=(t=e,n=this.localeData(),"string"==typeof t?n.weekdaysParse(t)%7||7:isNaN(t)?null:t);return this.day(this.day()%7?s:s-7)},mn.dayOfYear=function(e){var t=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return null==e?t:this.add(e-t,"d")},mn.hour=mn.hours=nt,mn.minute=mn.minutes=ln,mn.second=mn.seconds=dn,mn.millisecond=mn.milliseconds=fn,mn.utcOffset=function(e,t,n){var s,i=this._offset||0;if(!this.isValid())return null!=e?this:NaN;if(null==e)return this._isUTC?i:Vt(this);if("string"==typeof e){if(null===(e=Nt(re,e)))return this}else Math.abs(e)<16&&!n&&(e*=60);return!this._isUTC&&t&&(s=Vt(this)),this._offset=e,this._isUTC=!0,null!=s&&this.add(s,"m"),i!==e&&(!t||this._changeInProgress?qt(this,jt(e-i,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,c.updateOffset(this,!0),this._changeInProgress=null)),this},mn.utc=function(e){return this.utcOffset(0,e)},mn.local=function(e){return this._isUTC&&(this.utcOffset(0,e),this._isUTC=!1,e&&this.subtract(Vt(this),"m")),this},mn.parseZone=function(){if(null!=this._tzm)this.utcOffset(this._tzm,!1,!0);else if("string"==typeof this._i){var e=Nt(ie,this._i);null!=e?this.utcOffset(e):this.utcOffset(0,!0)}return this},mn.hasAlignedHourOffset=function(e){return!!this.isValid()&&(e=e?bt(e).utcOffset():0,(this.utcOffset()-e)%60==0)},mn.isDST=function(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()},mn.isLocal=function(){return!!this.isValid()&&!this._isUTC},mn.isUtcOffset=function(){return!!this.isValid()&&this._isUTC},mn.isUtc=Et,mn.isUTC=Et,mn.zoneAbbr=function(){return this._isUTC?"UTC":""},mn.zoneName=function(){return this._isUTC?"Coordinated Universal Time":""},mn.dates=n("dates accessor is deprecated. Use date instead.",un),mn.months=n("months accessor is deprecated. Use month instead",Ue),mn.years=n("years accessor is deprecated. Use year instead",Oe),mn.zone=n("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",function(e,t){return null!=e?("string"!=typeof e&&(e=-e),this.utcOffset(e,t),this):-this.utcOffset()}),mn.isDSTShifted=n("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",function(){if(!l(this._isDSTShifted))return this._isDSTShifted;var e={};if(w(e,this),(e=Ot(e))._a){var t=e._isUTC?y(e._a):bt(e._a);this._isDSTShifted=this.isValid()&&0<a(e._a,t.toArray())}else this._isDSTShifted=!1;return this._isDSTShifted});var yn=P.prototype;function gn(e,t,n,s){var i=ht(),r=y().set(s,t);return i[n](r,e)}function vn(e,t,n){if(h(e)&&(t=e,e=void 0),e=e||"",null!=t)return gn(e,t,n,"month");var s,i=[];for(s=0;s<12;s++)i[s]=gn(e,s,n,"month");return i}function pn(e,t,n,s){t=("boolean"==typeof e?h(t)&&(n=t,t=void 0):(t=e,e=!1,h(n=t)&&(n=t,t=void 0)),t||"");var i,r=ht(),a=e?r._week.dow:0;if(null!=n)return gn(t,(n+a)%7,s,"day");var o=[];for(i=0;i<7;i++)o[i]=gn(t,(i+a)%7,s,"day");return o}yn.calendar=function(e,t,n){var s=this._calendar[e]||this._calendar.sameElse;return b(s)?s.call(t,n):s},yn.longDateFormat=function(e){var t=this._longDateFormat[e],n=this._longDateFormat[e.toUpperCase()];return t||!n?t:(this._longDateFormat[e]=n.replace(/MMMM|MM|DD|dddd/g,function(e){return e.slice(1)}),this._longDateFormat[e])},yn.invalidDate=function(){return this._invalidDate},yn.ordinal=function(e){return this._ordinal.replace("%d",e)},yn.preparse=_n,yn.postformat=_n,yn.relativeTime=function(e,t,n,s){var i=this._relativeTime[n];return b(i)?i(e,t,n,s):i.replace(/%d/i,e)},yn.pastFuture=function(e,t){var n=this._relativeTime[0<e?"future":"past"];return b(n)?n(t):n.replace(/%s/i,t)},yn.set=function(e){var t,n;for(n in e)b(t=e[n])?this[n]=t:this["_"+n]=t;this._config=e,this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)},yn.months=function(e,t){return e?o(this._months)?this._months[e.month()]:this._months[(this._months.isFormat||We).test(t)?"format":"standalone"][e.month()]:o(this._months)?this._months:this._months.standalone},yn.monthsShort=function(e,t){return e?o(this._monthsShort)?this._monthsShort[e.month()]:this._monthsShort[We.test(t)?"format":"standalone"][e.month()]:o(this._monthsShort)?this._monthsShort:this._monthsShort.standalone},yn.monthsParse=function(e,t,n){var s,i,r;if(this._monthsParseExact)return function(e,t,n){var s,i,r,a=e.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],s=0;s<12;++s)r=y([2e3,s]),this._shortMonthsParse[s]=this.monthsShort(r,"").toLocaleLowerCase(),this._longMonthsParse[s]=this.months(r,"").toLocaleLowerCase();return n?"MMM"===t?-1!==(i=Ye.call(this._shortMonthsParse,a))?i:null:-1!==(i=Ye.call(this._longMonthsParse,a))?i:null:"MMM"===t?-1!==(i=Ye.call(this._shortMonthsParse,a))?i:-1!==(i=Ye.call(this._longMonthsParse,a))?i:null:-1!==(i=Ye.call(this._longMonthsParse,a))?i:-1!==(i=Ye.call(this._shortMonthsParse,a))?i:null}.call(this,e,t,n);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),s=0;s<12;s++){if(i=y([2e3,s]),n&&!this._longMonthsParse[s]&&(this._longMonthsParse[s]=new RegExp("^"+this.months(i,"").replace(".","")+"$","i"),this._shortMonthsParse[s]=new RegExp("^"+this.monthsShort(i,"").replace(".","")+"$","i")),n||this._monthsParse[s]||(r="^"+this.months(i,"")+"|^"+this.monthsShort(i,""),this._monthsParse[s]=new RegExp(r.replace(".",""),"i")),n&&"MMMM"===t&&this._longMonthsParse[s].test(e))return s;if(n&&"MMM"===t&&this._shortMonthsParse[s].test(e))return s;if(!n&&this._monthsParse[s].test(e))return s}},yn.monthsRegex=function(e){return this._monthsParseExact?(m(this,"_monthsRegex")||Ne.call(this),e?this._monthsStrictRegex:this._monthsRegex):(m(this,"_monthsRegex")||(this._monthsRegex=Le),this._monthsStrictRegex&&e?this._monthsStrictRegex:this._monthsRegex)},yn.monthsShortRegex=function(e){return this._monthsParseExact?(m(this,"_monthsRegex")||Ne.call(this),e?this._monthsShortStrictRegex:this._monthsShortRegex):(m(this,"_monthsShortRegex")||(this._monthsShortRegex=Fe),this._monthsShortStrictRegex&&e?this._monthsShortStrictRegex:this._monthsShortRegex)},yn.week=function(e){return Ie(e,this._week.dow,this._week.doy).week},yn.firstDayOfYear=function(){return this._week.doy},yn.firstDayOfWeek=function(){return this._week.dow},yn.weekdays=function(e,t){var n=o(this._weekdays)?this._weekdays:this._weekdays[e&&!0!==e&&this._weekdays.isFormat.test(t)?"format":"standalone"];return!0===e?je(n,this._week.dow):e?n[e.day()]:n},yn.weekdaysMin=function(e){return!0===e?je(this._weekdaysMin,this._week.dow):e?this._weekdaysMin[e.day()]:this._weekdaysMin},yn.weekdaysShort=function(e){return!0===e?je(this._weekdaysShort,this._week.dow):e?this._weekdaysShort[e.day()]:this._weekdaysShort},yn.weekdaysParse=function(e,t,n){var s,i,r;if(this._weekdaysParseExact)return function(e,t,n){var s,i,r,a=e.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],s=0;s<7;++s)r=y([2e3,1]).day(s),this._minWeekdaysParse[s]=this.weekdaysMin(r,"").toLocaleLowerCase(),this._shortWeekdaysParse[s]=this.weekdaysShort(r,"").toLocaleLowerCase(),this._weekdaysParse[s]=this.weekdays(r,"").toLocaleLowerCase();return n?"dddd"===t?-1!==(i=Ye.call(this._weekdaysParse,a))?i:null:"ddd"===t?-1!==(i=Ye.call(this._shortWeekdaysParse,a))?i:null:-1!==(i=Ye.call(this._minWeekdaysParse,a))?i:null:"dddd"===t?-1!==(i=Ye.call(this._weekdaysParse,a))?i:-1!==(i=Ye.call(this._shortWeekdaysParse,a))?i:-1!==(i=Ye.call(this._minWeekdaysParse,a))?i:null:"ddd"===t?-1!==(i=Ye.call(this._shortWeekdaysParse,a))?i:-1!==(i=Ye.call(this._weekdaysParse,a))?i:-1!==(i=Ye.call(this._minWeekdaysParse,a))?i:null:-1!==(i=Ye.call(this._minWeekdaysParse,a))?i:-1!==(i=Ye.call(this._weekdaysParse,a))?i:-1!==(i=Ye.call(this._shortWeekdaysParse,a))?i:null}.call(this,e,t,n);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),s=0;s<7;s++){if(i=y([2e3,1]).day(s),n&&!this._fullWeekdaysParse[s]&&(this._fullWeekdaysParse[s]=new RegExp("^"+this.weekdays(i,"").replace(".","\\.?")+"$","i"),this._shortWeekdaysParse[s]=new RegExp("^"+this.weekdaysShort(i,"").replace(".","\\.?")+"$","i"),this._minWeekdaysParse[s]=new RegExp("^"+this.weekdaysMin(i,"").replace(".","\\.?")+"$","i")),this._weekdaysParse[s]||(r="^"+this.weekdays(i,"")+"|^"+this.weekdaysShort(i,"")+"|^"+this.weekdaysMin(i,""),this._weekdaysParse[s]=new RegExp(r.replace(".",""),"i")),n&&"dddd"===t&&this._fullWeekdaysParse[s].test(e))return s;if(n&&"ddd"===t&&this._shortWeekdaysParse[s].test(e))return s;if(n&&"dd"===t&&this._minWeekdaysParse[s].test(e))return s;if(!n&&this._weekdaysParse[s].test(e))return s}},yn.weekdaysRegex=function(e){return this._weekdaysParseExact?(m(this,"_weekdaysRegex")||Qe.call(this),e?this._weekdaysStrictRegex:this._weekdaysRegex):(m(this,"_weekdaysRegex")||(this._weekdaysRegex=qe),this._weekdaysStrictRegex&&e?this._weekdaysStrictRegex:this._weekdaysRegex)},yn.weekdaysShortRegex=function(e){return this._weekdaysParseExact?(m(this,"_weekdaysRegex")||Qe.call(this),e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(m(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=Je),this._weekdaysShortStrictRegex&&e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)},yn.weekdaysMinRegex=function(e){return this._weekdaysParseExact?(m(this,"_weekdaysRegex")||Qe.call(this),e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(m(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=Be),this._weekdaysMinStrictRegex&&e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)},yn.isPM=function(e){return"p"===(e+"").toLowerCase().charAt(0)},yn.meridiem=function(e,t,n){return 11<e?n?"pm":"PM":n?"am":"AM"},ut("en",{dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(e){var t=e%10;return e+(1===D(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th")}}),c.lang=n("moment.lang is deprecated. Use moment.locale instead.",ut),c.langData=n("moment.langData is deprecated. Use moment.localeData instead.",ht);var wn=Math.abs;function Mn(e,t,n,s){var i=jt(t,n);return e._milliseconds+=s*i._milliseconds,e._days+=s*i._days,e._months+=s*i._months,e._bubble()}function kn(e){return e<0?Math.floor(e):Math.ceil(e)}function Sn(e){return 4800*e/146097}function Dn(e){return 146097*e/4800}function Yn(e){return function(){return this.as(e)}}var On=Yn("ms"),Tn=Yn("s"),bn=Yn("m"),xn=Yn("h"),Pn=Yn("d"),Wn=Yn("w"),Cn=Yn("M"),Hn=Yn("Q"),Rn=Yn("y");function Un(e){return function(){return this.isValid()?this._data[e]:NaN}}var Fn=Un("milliseconds"),Ln=Un("seconds"),Nn=Un("minutes"),Gn=Un("hours"),Vn=Un("days"),En=Un("months"),In=Un("years");var An=Math.round,jn={ss:44,s:45,m:45,h:22,d:26,M:11};var Zn=Math.abs;function zn(e){return(0<e)-(e<0)||+e}function $n(){if(!this.isValid())return this.localeData().invalidDate();var e,t,n=Zn(this._milliseconds)/1e3,s=Zn(this._days),i=Zn(this._months);t=S((e=S(n/60))/60),n%=60,e%=60;var r=S(i/12),a=i%=12,o=s,u=t,l=e,h=n?n.toFixed(3).replace(/\.?0+$/,""):"",d=this.asSeconds();if(!d)return"P0D";var c=d<0?"-":"",f=zn(this._months)!==zn(d)?"-":"",m=zn(this._days)!==zn(d)?"-":"",_=zn(this._milliseconds)!==zn(d)?"-":"";return c+"P"+(r?f+r+"Y":"")+(a?f+a+"M":"")+(o?m+o+"D":"")+(u||l||h?"T":"")+(u?_+u+"H":"")+(l?_+l+"M":"")+(h?_+h+"S":"")}var qn=Ht.prototype;return qn.isValid=function(){return this._isValid},qn.abs=function(){var e=this._data;return this._milliseconds=wn(this._milliseconds),this._days=wn(this._days),this._months=wn(this._months),e.milliseconds=wn(e.milliseconds),e.seconds=wn(e.seconds),e.minutes=wn(e.minutes),e.hours=wn(e.hours),e.months=wn(e.months),e.years=wn(e.years),this},qn.add=function(e,t){return Mn(this,e,t,1)},qn.subtract=function(e,t){return Mn(this,e,t,-1)},qn.as=function(e){if(!this.isValid())return NaN;var t,n,s=this._milliseconds;if("month"===(e=H(e))||"quarter"===e||"year"===e)switch(t=this._days+s/864e5,n=this._months+Sn(t),e){case"month":return n;case"quarter":return n/3;case"year":return n/12}else switch(t=this._days+Math.round(Dn(this._months)),e){case"week":return t/7+s/6048e5;case"day":return t+s/864e5;case"hour":return 24*t+s/36e5;case"minute":return 1440*t+s/6e4;case"second":return 86400*t+s/1e3;case"millisecond":return Math.floor(864e5*t)+s;default:throw new Error("Unknown unit "+e)}},qn.asMilliseconds=On,qn.asSeconds=Tn,qn.asMinutes=bn,qn.asHours=xn,qn.asDays=Pn,qn.asWeeks=Wn,qn.asMonths=Cn,qn.asQuarters=Hn,qn.asYears=Rn,qn.valueOf=function(){return this.isValid()?this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*D(this._months/12):NaN},qn._bubble=function(){var e,t,n,s,i,r=this._milliseconds,a=this._days,o=this._months,u=this._data;return 0<=r&&0<=a&&0<=o||r<=0&&a<=0&&o<=0||(r+=864e5*kn(Dn(o)+a),o=a=0),u.milliseconds=r%1e3,e=S(r/1e3),u.seconds=e%60,t=S(e/60),u.minutes=t%60,n=S(t/60),u.hours=n%24,o+=i=S(Sn(a+=S(n/24))),a-=kn(Dn(i)),s=S(o/12),o%=12,u.days=a,u.months=o,u.years=s,this},qn.clone=function(){return jt(this)},qn.get=function(e){return e=H(e),this.isValid()?this[e+"s"]():NaN},qn.milliseconds=Fn,qn.seconds=Ln,qn.minutes=Nn,qn.hours=Gn,qn.days=Vn,qn.weeks=function(){return S(this.days()/7)},qn.months=En,qn.years=In,qn.humanize=function(e){if(!this.isValid())return this.localeData().invalidDate();var t,n,s,i,r,a,o,u,l,h,d,c=this.localeData(),f=(n=!e,s=c,i=jt(t=this).abs(),r=An(i.as("s")),a=An(i.as("m")),o=An(i.as("h")),u=An(i.as("d")),l=An(i.as("M")),h=An(i.as("y")),(d=r<=jn.ss&&["s",r]||r<jn.s&&["ss",r]||a<=1&&["m"]||a<jn.m&&["mm",a]||o<=1&&["h"]||o<jn.h&&["hh",o]||u<=1&&["d"]||u<jn.d&&["dd",u]||l<=1&&["M"]||l<jn.M&&["MM",l]||h<=1&&["y"]||["yy",h])[2]=n,d[3]=0<+t,d[4]=s,function(e,t,n,s,i){return i.relativeTime(t||1,!!n,e,s)}.apply(null,d));return e&&(f=c.pastFuture(+this,f)),c.postformat(f)},qn.toISOString=$n,qn.toString=$n,qn.toJSON=$n,qn.locale=Xt,qn.localeData=en,qn.toIsoString=n("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",$n),qn.lang=Kt,I("X",0,0,"unix"),I("x",0,0,"valueOf"),ue("x",se),ue("X",/[+-]?\d+(\.\d{1,3})?/),ce("X",function(e,t,n){n._d=new Date(1e3*parseFloat(e,10))}),ce("x",function(e,t,n){n._d=new Date(D(e))}),c.version="2.24.0",e=bt,c.fn=mn,c.min=function(){return Wt("isBefore",[].slice.call(arguments,0))},c.max=function(){return Wt("isAfter",[].slice.call(arguments,0))},c.now=function(){return Date.now?Date.now():+new Date},c.utc=y,c.unix=function(e){return bt(1e3*e)},c.months=function(e,t){return vn(e,t,"months")},c.isDate=d,c.locale=ut,c.invalid=p,c.duration=jt,c.isMoment=k,c.weekdays=function(e,t,n){return pn(e,t,n,"weekdays")},c.parseZone=function(){return bt.apply(null,arguments).parseZone()},c.localeData=ht,c.isDuration=Rt,c.monthsShort=function(e,t){return vn(e,t,"monthsShort")},c.weekdaysMin=function(e,t,n){return pn(e,t,n,"weekdaysMin")},c.defineLocale=lt,c.updateLocale=function(e,t){if(null!=t){var n,s,i=st;null!=(s=ot(e))&&(i=s._config),(n=new P(t=x(i,t))).parentLocale=it[e],it[e]=n,ut(e)}else null!=it[e]&&(null!=it[e].parentLocale?it[e]=it[e].parentLocale:null!=it[e]&&delete it[e]);return it[e]},c.locales=function(){return s(it)},c.weekdaysShort=function(e,t,n){return pn(e,t,n,"weekdaysShort")},c.normalizeUnits=H,c.relativeTimeRounding=function(e){return void 0===e?An:"function"==typeof e&&(An=e,!0)},c.relativeTimeThreshold=function(e,t){return void 0!==jn[e]&&(void 0===t?jn[e]:(jn[e]=t,"s"===e&&(jn.ss=t-1),!0))},c.calendarFormat=function(e,t){var n=e.diff(t,"days",!0);return n<-6?"sameElse":n<-1?"lastWeek":n<0?"lastDay":n<1?"sameDay":n<2?"nextDay":n<7?"nextWeek":"sameElse"},c.prototype=mn,c.HTML5_FMT={DATETIME_LOCAL:"YYYY-MM-DDTHH:mm",DATETIME_LOCAL_SECONDS:"YYYY-MM-DDTHH:mm:ss",DATETIME_LOCAL_MS:"YYYY-MM-DDTHH:mm:ss.SSS",DATE:"YYYY-MM-DD",TIME:"HH:mm",TIME_SECONDS:"HH:mm:ss",TIME_MS:"HH:mm:ss.SSS",WEEK:"GGGG-[W]WW",MONTH:"YYYY-MM"},c});
/**
* @version: 3.0.5
* @author: Dan Grossman http://www.dangrossman.info/
* @copyright: Copyright (c) 2012-2019 Dan Grossman. All rights reserved.
* @license: Licensed under the MIT license. See http://www.opensource.org/licenses/mit-license.php
* @website: http://www.daterangepicker.com/
*/
// Following the UMD template https://github.com/umdjs/umd/blob/master/templates/returnExportsGlobal.js
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Make globaly available as well
        define(['moment', 'jquery'], function (moment, jquery) {
            if (!jquery.fn) jquery.fn = {}; // webpack server rendering
            if (typeof moment !== 'function' && moment.default) moment = moment.default
            return factory(moment, jquery);
        });
    } else if (typeof module === 'object' && module.exports) {
        // Node / Browserify
        //isomorphic issue
        var jQuery = (typeof window != 'undefined') ? window.jQuery : undefined;
        if (!jQuery) {
            jQuery = require('jquery');
            if (!jQuery.fn) jQuery.fn = {};
        }
        var moment = (typeof window != 'undefined' && typeof window.moment != 'undefined') ? window.moment : require('moment');
        module.exports = factory(moment, jQuery);
    } else {
        // Browser globals
        root.daterangepicker = factory(root.moment, root.jQuery);
    }
}(this, function(moment, $) {
    var DateRangePicker = function(element, options, cb) {

        //default settings for options
        this.parentEl = 'body';
        this.element = $(element);
        this.startDate = moment().startOf('day');
        this.endDate = moment().endOf('day');
        this.minDate = false;
        this.maxDate = false;
        this.maxSpan = false;
        this.autoApply = false;
        this.singleDatePicker = false;
        this.showDropdowns = false;
        this.minYear = moment().subtract(100, 'year').format('YYYY');
        this.maxYear = moment().add(100, 'year').format('YYYY');
        this.showWeekNumbers = false;
        this.showISOWeekNumbers = false;
        this.showCustomRangeLabel = true;
        this.timePicker = false;
        this.timePicker24Hour = false;
        this.timePickerIncrement = 1;
        this.timePickerSeconds = false;
        this.linkedCalendars = true;
        this.autoUpdateInput = true;
        this.alwaysShowCalendars = false;
        this.ranges = {};

        this.opens = 'right';
        if (this.element.hasClass('pull-right'))
            this.opens = 'left';

        this.drops = 'down';
        if (this.element.hasClass('dropup'))
            this.drops = 'up';

        this.buttonClasses = 'btn btn-sm';
        this.applyButtonClasses = 'btn-primary';
        this.cancelButtonClasses = 'btn-default';

        this.locale = {
            direction: 'ltr',
            format: moment.localeData().longDateFormat('L'),
            separator: ' - ',
            applyLabel: 'Apply',
            cancelLabel: 'Cancel',
            weekLabel: 'W',
            customRangeLabel: 'Custom Range',
            daysOfWeek: moment.weekdaysMin(),
            monthNames: moment.monthsShort(),
            firstDay: moment.localeData().firstDayOfWeek()
        };

        this.callback = function() { };

        //some state information
        this.isShowing = false;
        this.leftCalendar = {};
        this.rightCalendar = {};

        //custom options from user
        if (typeof options !== 'object' || options === null)
            options = {};

        //allow setting options with data attributes
        //data-api options will be overwritten with custom javascript options
        options = $.extend(this.element.data(), options);

        //html template for the picker UI
        if (typeof options.template !== 'string' && !(options.template instanceof $))
            options.template =
            '<div class="daterangepicker">' +
                '<div class="ranges"></div>' +
                '<div class="drp-calendar left">' +
                    '<div class="calendar-table"></div>' +
                    '<div class="calendar-time"></div>' +
                '</div>' +
                '<div class="drp-calendar right">' +
                    '<div class="calendar-table"></div>' +
                    '<div class="calendar-time"></div>' +
                '</div>' +
                '<div class="drp-buttons">' +
                    '<span class="drp-selected"></span>' +
                    '<button class="cancelBtn" type="button"></button>' +
                    '<button class="applyBtn" disabled="disabled" type="button"></button> ' +
                '</div>' +
            '</div>';

        this.parentEl = (options.parentEl && $(options.parentEl).length) ? $(options.parentEl) : $(this.parentEl);
        this.container = $(options.template).appendTo(this.parentEl);

        //
        // handle all the possible options overriding defaults
        //

        if (typeof options.locale === 'object') {

            if (typeof options.locale.direction === 'string')
                this.locale.direction = options.locale.direction;

            if (typeof options.locale.format === 'string')
                this.locale.format = options.locale.format;

            if (typeof options.locale.separator === 'string')
                this.locale.separator = options.locale.separator;

            if (typeof options.locale.daysOfWeek === 'object')
                this.locale.daysOfWeek = options.locale.daysOfWeek.slice();

            if (typeof options.locale.monthNames === 'object')
              this.locale.monthNames = options.locale.monthNames.slice();

            if (typeof options.locale.firstDay === 'number')
              this.locale.firstDay = options.locale.firstDay;

            if (typeof options.locale.applyLabel === 'string')
              this.locale.applyLabel = options.locale.applyLabel;

            if (typeof options.locale.cancelLabel === 'string')
              this.locale.cancelLabel = options.locale.cancelLabel;

            if (typeof options.locale.weekLabel === 'string')
              this.locale.weekLabel = options.locale.weekLabel;

            if (typeof options.locale.customRangeLabel === 'string'){
                //Support unicode chars in the custom range name.
                var elem = document.createElement('textarea');
                elem.innerHTML = options.locale.customRangeLabel;
                var rangeHtml = elem.value;
                this.locale.customRangeLabel = rangeHtml;
            }
        }
        this.container.addClass(this.locale.direction);

        if (typeof options.startDate === 'string')
            this.startDate = moment(options.startDate, this.locale.format);

        if (typeof options.endDate === 'string')
            this.endDate = moment(options.endDate, this.locale.format);

        if (typeof options.minDate === 'string')
            this.minDate = moment(options.minDate, this.locale.format);

        if (typeof options.maxDate === 'string')
            this.maxDate = moment(options.maxDate, this.locale.format);

        if (typeof options.startDate === 'object')
            this.startDate = moment(options.startDate);

        if (typeof options.endDate === 'object')
            this.endDate = moment(options.endDate);

        if (typeof options.minDate === 'object')
            this.minDate = moment(options.minDate);

        if (typeof options.maxDate === 'object')
            this.maxDate = moment(options.maxDate);

        // sanity check for bad options
        if (this.minDate && this.startDate.isBefore(this.minDate))
            this.startDate = this.minDate.clone();

        // sanity check for bad options
        if (this.maxDate && this.endDate.isAfter(this.maxDate))
            this.endDate = this.maxDate.clone();

        if (typeof options.applyButtonClasses === 'string')
            this.applyButtonClasses = options.applyButtonClasses;

        if (typeof options.applyClass === 'string') //backwards compat
            this.applyButtonClasses = options.applyClass;

        if (typeof options.cancelButtonClasses === 'string')
            this.cancelButtonClasses = options.cancelButtonClasses;

        if (typeof options.cancelClass === 'string') //backwards compat
            this.cancelButtonClasses = options.cancelClass;

        if (typeof options.maxSpan === 'object')
            this.maxSpan = options.maxSpan;

        if (typeof options.dateLimit === 'object') //backwards compat
            this.maxSpan = options.dateLimit;

        if (typeof options.opens === 'string')
            this.opens = options.opens;

        if (typeof options.drops === 'string')
            this.drops = options.drops;

        if (typeof options.showWeekNumbers === 'boolean')
            this.showWeekNumbers = options.showWeekNumbers;

        if (typeof options.showISOWeekNumbers === 'boolean')
            this.showISOWeekNumbers = options.showISOWeekNumbers;

        if (typeof options.buttonClasses === 'string')
            this.buttonClasses = options.buttonClasses;

        if (typeof options.buttonClasses === 'object')
            this.buttonClasses = options.buttonClasses.join(' ');

        if (typeof options.showDropdowns === 'boolean')
            this.showDropdowns = options.showDropdowns;

        if (typeof options.minYear === 'number')
            this.minYear = options.minYear;

        if (typeof options.maxYear === 'number')
            this.maxYear = options.maxYear;

        if (typeof options.showCustomRangeLabel === 'boolean')
            this.showCustomRangeLabel = options.showCustomRangeLabel;

        if (typeof options.singleDatePicker === 'boolean') {
            this.singleDatePicker = options.singleDatePicker;
            if (this.singleDatePicker)
                this.endDate = this.startDate.clone();
        }

        if (typeof options.timePicker === 'boolean')
            this.timePicker = options.timePicker;

        if (typeof options.timePickerSeconds === 'boolean')
            this.timePickerSeconds = options.timePickerSeconds;

        if (typeof options.timePickerIncrement === 'number')
            this.timePickerIncrement = options.timePickerIncrement;

        if (typeof options.timePicker24Hour === 'boolean')
            this.timePicker24Hour = options.timePicker24Hour;

        if (typeof options.autoApply === 'boolean')
            this.autoApply = options.autoApply;

        if (typeof options.autoUpdateInput === 'boolean')
            this.autoUpdateInput = options.autoUpdateInput;

        if (typeof options.linkedCalendars === 'boolean')
            this.linkedCalendars = options.linkedCalendars;

        if (typeof options.isInvalidDate === 'function')
            this.isInvalidDate = options.isInvalidDate;

        if (typeof options.isCustomDate === 'function')
            this.isCustomDate = options.isCustomDate;

        if (typeof options.alwaysShowCalendars === 'boolean')
            this.alwaysShowCalendars = options.alwaysShowCalendars;

        // update day names order to firstDay
        if (this.locale.firstDay != 0) {
            var iterator = this.locale.firstDay;
            while (iterator > 0) {
                this.locale.daysOfWeek.push(this.locale.daysOfWeek.shift());
                iterator--;
            }
        }

        var start, end, range;

        //if no start/end dates set, check if an input element contains initial values
        if (typeof options.startDate === 'undefined' && typeof options.endDate === 'undefined') {
            if ($(this.element).is(':text')) {
                var val = $(this.element).val(),
                    split = val.split(this.locale.separator);

                start = end = null;

                if (split.length == 2) {
                    start = moment(split[0], this.locale.format);
                    end = moment(split[1], this.locale.format);
                } else if (this.singleDatePicker && val !== "") {
                    start = moment(val, this.locale.format);
                    end = moment(val, this.locale.format);
                }
                if (start !== null && end !== null) {
                    this.setStartDate(start);
                    this.setEndDate(end);
                }
            }
        }

        if (typeof options.ranges === 'object') {
            for (range in options.ranges) {

                if (typeof options.ranges[range][0] === 'string')
                    start = moment(options.ranges[range][0], this.locale.format);
                else
                    start = moment(options.ranges[range][0]);

                if (typeof options.ranges[range][1] === 'string')
                    end = moment(options.ranges[range][1], this.locale.format);
                else
                    end = moment(options.ranges[range][1]);

                // If the start or end date exceed those allowed by the minDate or maxSpan
                // options, shorten the range to the allowable period.
                if (this.minDate && start.isBefore(this.minDate))
                    start = this.minDate.clone();

                var maxDate = this.maxDate;
                if (this.maxSpan && maxDate && start.clone().add(this.maxSpan).isAfter(maxDate))
                    maxDate = start.clone().add(this.maxSpan);
                if (maxDate && end.isAfter(maxDate))
                    end = maxDate.clone();

                // If the end of the range is before the minimum or the start of the range is
                // after the maximum, don't display this range option at all.
                if ((this.minDate && end.isBefore(this.minDate, this.timepicker ? 'minute' : 'day'))
                  || (maxDate && start.isAfter(maxDate, this.timepicker ? 'minute' : 'day')))
                    continue;

                //Support unicode chars in the range names.
                var elem = document.createElement('textarea');
                elem.innerHTML = range;
                var rangeHtml = elem.value;

                this.ranges[rangeHtml] = [start, end];
            }

            var list = '<ul>';
            for (range in this.ranges) {
                list += '<li data-range-key="' + range + '">' + range + '</li>';
            }
            if (this.showCustomRangeLabel) {
                list += '<li data-range-key="' + this.locale.customRangeLabel + '">' + this.locale.customRangeLabel + '</li>';
            }
            list += '</ul>';
            this.container.find('.ranges').prepend(list);
        }

        if (typeof cb === 'function') {
            this.callback = cb;
        }

        if (!this.timePicker) {
            this.startDate = this.startDate.startOf('day');
            this.endDate = this.endDate.endOf('day');
            this.container.find('.calendar-time').hide();
        }

        //can't be used together for now
        if (this.timePicker && this.autoApply)
            this.autoApply = false;

        if (this.autoApply) {
            this.container.addClass('auto-apply');
        }

        if (typeof options.ranges === 'object')
            this.container.addClass('show-ranges');

        if (this.singleDatePicker) {
            this.container.addClass('single');
            this.container.find('.drp-calendar.left').addClass('single');
            this.container.find('.drp-calendar.left').show();
            this.container.find('.drp-calendar.right').hide();
            if (!this.timePicker) {
                this.container.addClass('auto-apply');
            }
        }

        if ((typeof options.ranges === 'undefined' && !this.singleDatePicker) || this.alwaysShowCalendars) {
            this.container.addClass('show-calendar');
        }

        this.container.addClass('opens' + this.opens);

        //apply CSS classes and labels to buttons
        this.container.find('.applyBtn, .cancelBtn').addClass(this.buttonClasses);
        if (this.applyButtonClasses.length)
            this.container.find('.applyBtn').addClass(this.applyButtonClasses);
        if (this.cancelButtonClasses.length)
            this.container.find('.cancelBtn').addClass(this.cancelButtonClasses);
        this.container.find('.applyBtn').html(this.locale.applyLabel);
        this.container.find('.cancelBtn').html(this.locale.cancelLabel);

        //
        // event listeners
        //

        this.container.find('.drp-calendar')
            .on('click.daterangepicker', '.prev', $.proxy(this.clickPrev, this))
            .on('click.daterangepicker', '.next', $.proxy(this.clickNext, this))
            .on('mousedown.daterangepicker', 'td.available', $.proxy(this.clickDate, this))
            .on('mouseenter.daterangepicker', 'td.available', $.proxy(this.hoverDate, this))
            .on('change.daterangepicker', 'select.yearselect', $.proxy(this.monthOrYearChanged, this))
            .on('change.daterangepicker', 'select.monthselect', $.proxy(this.monthOrYearChanged, this))
            .on('change.daterangepicker', 'select.hourselect,select.minuteselect,select.secondselect,select.ampmselect', $.proxy(this.timeChanged, this))

        this.container.find('.ranges')
            .on('click.daterangepicker', 'li', $.proxy(this.clickRange, this))

        this.container.find('.drp-buttons')
            .on('click.daterangepicker', 'button.applyBtn', $.proxy(this.clickApply, this))
            .on('click.daterangepicker', 'button.cancelBtn', $.proxy(this.clickCancel, this))

        if (this.element.is('input') || this.element.is('button')) {
            this.element.on({
                'click.daterangepicker': $.proxy(this.show, this),
                'focus.daterangepicker': $.proxy(this.show, this),
                'keyup.daterangepicker': $.proxy(this.elementChanged, this),
                'keydown.daterangepicker': $.proxy(this.keydown, this) //IE 11 compatibility
            });
        } else {
            this.element.on('click.daterangepicker', $.proxy(this.toggle, this));
            this.element.on('keydown.daterangepicker', $.proxy(this.toggle, this));
        }

        //
        // if attached to a text input, set the initial value
        //

        this.updateElement();

    };

    DateRangePicker.prototype = {

        constructor: DateRangePicker,

        setStartDate: function(startDate) {
            if (typeof startDate === 'string')
                this.startDate = moment(startDate, this.locale.format);

            if (typeof startDate === 'object')
                this.startDate = moment(startDate);

            if (!this.timePicker)
                this.startDate = this.startDate.startOf('day');

            if (this.timePicker && this.timePickerIncrement)
                this.startDate.minute(Math.round(this.startDate.minute() / this.timePickerIncrement) * this.timePickerIncrement);

            if (this.minDate && this.startDate.isBefore(this.minDate)) {
                this.startDate = this.minDate.clone();
                if (this.timePicker && this.timePickerIncrement)
                    this.startDate.minute(Math.round(this.startDate.minute() / this.timePickerIncrement) * this.timePickerIncrement);
            }

            if (this.maxDate && this.startDate.isAfter(this.maxDate)) {
                this.startDate = this.maxDate.clone();
                if (this.timePicker && this.timePickerIncrement)
                    this.startDate.minute(Math.floor(this.startDate.minute() / this.timePickerIncrement) * this.timePickerIncrement);
            }

            if (!this.isShowing)
                this.updateElement();

            this.updateMonthsInView();
        },

        setEndDate: function(endDate) {
            if (typeof endDate === 'string')
                this.endDate = moment(endDate, this.locale.format);

            if (typeof endDate === 'object')
                this.endDate = moment(endDate);

            if (!this.timePicker)
                this.endDate = this.endDate.endOf('day');

            if (this.timePicker && this.timePickerIncrement)
                this.endDate.minute(Math.round(this.endDate.minute() / this.timePickerIncrement) * this.timePickerIncrement);

            if (this.endDate.isBefore(this.startDate))
                this.endDate = this.startDate.clone();

            if (this.maxDate && this.endDate.isAfter(this.maxDate))
                this.endDate = this.maxDate.clone();

            if (this.maxSpan && this.startDate.clone().add(this.maxSpan).isBefore(this.endDate))
                this.endDate = this.startDate.clone().add(this.maxSpan);

            this.previousRightTime = this.endDate.clone();

            this.container.find('.drp-selected').html(this.startDate.format(this.locale.format) + this.locale.separator + this.endDate.format(this.locale.format));

            if (!this.isShowing)
                this.updateElement();

            this.updateMonthsInView();
        },

        isInvalidDate: function() {
            return false;
        },

        isCustomDate: function() {
            return false;
        },

        updateView: function() {
            if (this.timePicker) {
                this.renderTimePicker('left');
                this.renderTimePicker('right');
                if (!this.endDate) {
                    this.container.find('.right .calendar-time select').attr('disabled', 'disabled').addClass('disabled');
                } else {
                    this.container.find('.right .calendar-time select').removeAttr('disabled').removeClass('disabled');
                }
            }
            if (this.endDate)
                this.container.find('.drp-selected').html(this.startDate.format(this.locale.format) + this.locale.separator + this.endDate.format(this.locale.format));
            this.updateMonthsInView();
            this.updateCalendars();
            this.updateFormInputs();
        },

        updateMonthsInView: function() {
            if (this.endDate) {

                //if both dates are visible already, do nothing
                if (!this.singleDatePicker && this.leftCalendar.month && this.rightCalendar.month &&
                    (this.startDate.format('YYYY-MM') == this.leftCalendar.month.format('YYYY-MM') || this.startDate.format('YYYY-MM') == this.rightCalendar.month.format('YYYY-MM'))
                    &&
                    (this.endDate.format('YYYY-MM') == this.leftCalendar.month.format('YYYY-MM') || this.endDate.format('YYYY-MM') == this.rightCalendar.month.format('YYYY-MM'))
                    ) {
                    return;
                }

                this.leftCalendar.month = this.startDate.clone().date(2);
                if (!this.linkedCalendars && (this.endDate.month() != this.startDate.month() || this.endDate.year() != this.startDate.year())) {
                    this.rightCalendar.month = this.endDate.clone().date(2);
                } else {
                    this.rightCalendar.month = this.startDate.clone().date(2).add(1, 'month');
                }

            } else {
                if (this.leftCalendar.month.format('YYYY-MM') != this.startDate.format('YYYY-MM') && this.rightCalendar.month.format('YYYY-MM') != this.startDate.format('YYYY-MM')) {
                    this.leftCalendar.month = this.startDate.clone().date(2);
                    this.rightCalendar.month = this.startDate.clone().date(2).add(1, 'month');
                }
            }
            if (this.maxDate && this.linkedCalendars && !this.singleDatePicker && this.rightCalendar.month > this.maxDate) {
              this.rightCalendar.month = this.maxDate.clone().date(2);
              this.leftCalendar.month = this.maxDate.clone().date(2).subtract(1, 'month');
            }
        },

        updateCalendars: function() {

            if (this.timePicker) {
                var hour, minute, second;
                if (this.endDate) {
                    hour = parseInt(this.container.find('.left .hourselect').val(), 10);
                    minute = parseInt(this.container.find('.left .minuteselect').val(), 10);
                    if (isNaN(minute)) {
                        minute = parseInt(this.container.find('.left .minuteselect option:last').val(), 10);
                    }
                    second = this.timePickerSeconds ? parseInt(this.container.find('.left .secondselect').val(), 10) : 0;
                    if (!this.timePicker24Hour) {
                        var ampm = this.container.find('.left .ampmselect').val();
                        if (ampm === 'PM' && hour < 12)
                            hour += 12;
                        if (ampm === 'AM' && hour === 12)
                            hour = 0;
                    }
                } else {
                    hour = parseInt(this.container.find('.right .hourselect').val(), 10);
                    minute = parseInt(this.container.find('.right .minuteselect').val(), 10);
                    if (isNaN(minute)) {
                        minute = parseInt(this.container.find('.right .minuteselect option:last').val(), 10);
                    }
                    second = this.timePickerSeconds ? parseInt(this.container.find('.right .secondselect').val(), 10) : 0;
                    if (!this.timePicker24Hour) {
                        var ampm = this.container.find('.right .ampmselect').val();
                        if (ampm === 'PM' && hour < 12)
                            hour += 12;
                        if (ampm === 'AM' && hour === 12)
                            hour = 0;
                    }
                }
                this.leftCalendar.month.hour(hour).minute(minute).second(second);
                this.rightCalendar.month.hour(hour).minute(minute).second(second);
            }

            this.renderCalendar('left');
            this.renderCalendar('right');

            //highlight any predefined range matching the current start and end dates
            this.container.find('.ranges li').removeClass('active');
            if (this.endDate == null) return;

            this.calculateChosenLabel();
        },

        renderCalendar: function(side) {

            //
            // Build the matrix of dates that will populate the calendar
            //

            var calendar = side == 'left' ? this.leftCalendar : this.rightCalendar;
            var month = calendar.month.month();
            var year = calendar.month.year();
            var hour = calendar.month.hour();
            var minute = calendar.month.minute();
            var second = calendar.month.second();
            var daysInMonth = moment([year, month]).daysInMonth();
            var firstDay = moment([year, month, 1]);
            var lastDay = moment([year, month, daysInMonth]);
            var lastMonth = moment(firstDay).subtract(1, 'month').month();
            var lastYear = moment(firstDay).subtract(1, 'month').year();
            var daysInLastMonth = moment([lastYear, lastMonth]).daysInMonth();
            var dayOfWeek = firstDay.day();

            //initialize a 6 rows x 7 columns array for the calendar
            var calendar = [];
            calendar.firstDay = firstDay;
            calendar.lastDay = lastDay;

            for (var i = 0; i < 6; i++) {
                calendar[i] = [];
            }

            //populate the calendar with date objects
            var startDay = daysInLastMonth - dayOfWeek + this.locale.firstDay + 1;
            if (startDay > daysInLastMonth)
                startDay -= 7;

            if (dayOfWeek == this.locale.firstDay)
                startDay = daysInLastMonth - 6;

            var curDate = moment([lastYear, lastMonth, startDay, 12, minute, second]);

            var col, row;
            for (var i = 0, col = 0, row = 0; i < 42; i++, col++, curDate = moment(curDate).add(24, 'hour')) {
                if (i > 0 && col % 7 === 0) {
                    col = 0;
                    row++;
                }
                calendar[row][col] = curDate.clone().hour(hour).minute(minute).second(second);
                curDate.hour(12);

                if (this.minDate && calendar[row][col].format('YYYY-MM-DD') == this.minDate.format('YYYY-MM-DD') && calendar[row][col].isBefore(this.minDate) && side == 'left') {
                    calendar[row][col] = this.minDate.clone();
                }

                if (this.maxDate && calendar[row][col].format('YYYY-MM-DD') == this.maxDate.format('YYYY-MM-DD') && calendar[row][col].isAfter(this.maxDate) && side == 'right') {
                    calendar[row][col] = this.maxDate.clone();
                }

            }

            //make the calendar object available to hoverDate/clickDate
            if (side == 'left') {
                this.leftCalendar.calendar = calendar;
            } else {
                this.rightCalendar.calendar = calendar;
            }

            //
            // Display the calendar
            //

            var minDate = side == 'left' ? this.minDate : this.startDate;
            var maxDate = this.maxDate;
            var selected = side == 'left' ? this.startDate : this.endDate;
            var arrow = this.locale.direction == 'ltr' ? {left: 'chevron-left', right: 'chevron-right'} : {left: 'chevron-right', right: 'chevron-left'};

            var html = '<table class="table-condensed">';
            html += '<thead>';
            html += '<tr>';

            // add empty cell for week number
            if (this.showWeekNumbers || this.showISOWeekNumbers)
                html += '<th></th>';

            if ((!minDate || minDate.isBefore(calendar.firstDay)) && (!this.linkedCalendars || side == 'left')) {
                html += '<th class="prev available"><span></span></th>';
            } else {
                html += '<th></th>';
            }

            var dateHtml = this.locale.monthNames[calendar[1][1].month()] + calendar[1][1].format(" YYYY");

            if (this.showDropdowns) {
                var currentMonth = calendar[1][1].month();
                var currentYear = calendar[1][1].year();
                var maxYear = (maxDate && maxDate.year()) || (this.maxYear);
                var minYear = (minDate && minDate.year()) || (this.minYear);
                var inMinYear = currentYear == minYear;
                var inMaxYear = currentYear == maxYear;

                var monthHtml = '<select class="monthselect">';
                for (var m = 0; m < 12; m++) {
                    if ((!inMinYear || (minDate && m >= minDate.month())) && (!inMaxYear || (maxDate && m <= maxDate.month()))) {
                        monthHtml += "<option value='" + m + "'" +
                            (m === currentMonth ? " selected='selected'" : "") +
                            ">" + this.locale.monthNames[m] + "</option>";
                    } else {
                        monthHtml += "<option value='" + m + "'" +
                            (m === currentMonth ? " selected='selected'" : "") +
                            " disabled='disabled'>" + this.locale.monthNames[m] + "</option>";
                    }
                }
                monthHtml += "</select>";

                var yearHtml = '<select class="yearselect">';
                for (var y = minYear; y <= maxYear; y++) {
                    yearHtml += '<option value="' + y + '"' +
                        (y === currentYear ? ' selected="selected"' : '') +
                        '>' + y + '</option>';
                }
                yearHtml += '</select>';

                dateHtml = monthHtml + yearHtml;
            }

            html += '<th colspan="5" class="month">' + dateHtml + '</th>';
            if ((!maxDate || maxDate.isAfter(calendar.lastDay)) && (!this.linkedCalendars || side == 'right' || this.singleDatePicker)) {
                html += '<th class="next available"><span></span></th>';
            } else {
                html += '<th></th>';
            }

            html += '</tr>';
            html += '<tr>';

            // add week number label
            if (this.showWeekNumbers || this.showISOWeekNumbers)
                html += '<th class="week">' + this.locale.weekLabel + '</th>';

            $.each(this.locale.daysOfWeek, function(index, dayOfWeek) {
                html += '<th>' + dayOfWeek + '</th>';
            });

            html += '</tr>';
            html += '</thead>';
            html += '<tbody>';

            //adjust maxDate to reflect the maxSpan setting in order to
            //grey out end dates beyond the maxSpan
            if (this.endDate == null && this.maxSpan) {
                var maxLimit = this.startDate.clone().add(this.maxSpan).endOf('day');
                if (!maxDate || maxLimit.isBefore(maxDate)) {
                    maxDate = maxLimit;
                }
            }

            for (var row = 0; row < 6; row++) {
                html += '<tr>';

                // add week number
                if (this.showWeekNumbers)
                    html += '<td class="week">' + calendar[row][0].week() + '</td>';
                else if (this.showISOWeekNumbers)
                    html += '<td class="week">' + calendar[row][0].isoWeek() + '</td>';

                for (var col = 0; col < 7; col++) {

                    var classes = [];

                    //highlight today's date
                    if (calendar[row][col].isSame(new Date(), "day"))
                        classes.push('today');

                    //highlight weekends
                    if (calendar[row][col].isoWeekday() > 5)
                        classes.push('weekend');

                    //grey out the dates in other months displayed at beginning and end of this calendar
                    if (calendar[row][col].month() != calendar[1][1].month())
                        classes.push('off', 'ends');

                    //don't allow selection of dates before the minimum date
                    if (this.minDate && calendar[row][col].isBefore(this.minDate, 'day'))
                        classes.push('off', 'disabled');

                    //don't allow selection of dates after the maximum date
                    if (maxDate && calendar[row][col].isAfter(maxDate, 'day'))
                        classes.push('off', 'disabled');

                    //don't allow selection of date if a custom function decides it's invalid
                    if (this.isInvalidDate(calendar[row][col]))
                        classes.push('off', 'disabled');

                    //highlight the currently selected start date
                    if (calendar[row][col].format('YYYY-MM-DD') == this.startDate.format('YYYY-MM-DD'))
                        classes.push('active', 'start-date');

                    //highlight the currently selected end date
                    if (this.endDate != null && calendar[row][col].format('YYYY-MM-DD') == this.endDate.format('YYYY-MM-DD'))
                        classes.push('active', 'end-date');

                    //highlight dates in-between the selected dates
                    if (this.endDate != null && calendar[row][col] > this.startDate && calendar[row][col] < this.endDate)
                        classes.push('in-range');

                    //apply custom classes for this date
                    var isCustom = this.isCustomDate(calendar[row][col]);
                    if (isCustom !== false) {
                        if (typeof isCustom === 'string')
                            classes.push(isCustom);
                        else
                            Array.prototype.push.apply(classes, isCustom);
                    }

                    var cname = '', disabled = false;
                    for (var i = 0; i < classes.length; i++) {
                        cname += classes[i] + ' ';
                        if (classes[i] == 'disabled')
                            disabled = true;
                    }
                    if (!disabled)
                        cname += 'available';

                    html += '<td class="' + cname.replace(/^\s+|\s+$/g, '') + '" data-title="' + 'r' + row + 'c' + col + '">' + calendar[row][col].date() + '</td>';

                }
                html += '</tr>';
            }

            html += '</tbody>';
            html += '</table>';

            this.container.find('.drp-calendar.' + side + ' .calendar-table').html(html);

        },

        renderTimePicker: function(side) {

            // Don't bother updating the time picker if it's currently disabled
            // because an end date hasn't been clicked yet
            if (side == 'right' && !this.endDate) return;

            var html, selected, minDate, maxDate = this.maxDate;

            if (this.maxSpan && (!this.maxDate || this.startDate.clone().add(this.maxSpan).isBefore(this.maxDate)))
                maxDate = this.startDate.clone().add(this.maxSpan);

            if (side == 'left') {
                selected = this.startDate.clone();
                minDate = this.minDate;
            } else if (side == 'right') {
                selected = this.endDate.clone();
                minDate = this.startDate;

                //Preserve the time already selected
                var timeSelector = this.container.find('.drp-calendar.right .calendar-time');
                if (timeSelector.html() != '') {

                    selected.hour(!isNaN(selected.hour()) ? selected.hour() : timeSelector.find('.hourselect option:selected').val());
                    selected.minute(!isNaN(selected.minute()) ? selected.minute() : timeSelector.find('.minuteselect option:selected').val());
                    selected.second(!isNaN(selected.second()) ? selected.second() : timeSelector.find('.secondselect option:selected').val());

                    if (!this.timePicker24Hour) {
                        var ampm = timeSelector.find('.ampmselect option:selected').val();
                        if (ampm === 'PM' && selected.hour() < 12)
                            selected.hour(selected.hour() + 12);
                        if (ampm === 'AM' && selected.hour() === 12)
                            selected.hour(0);
                    }

                }

                if (selected.isBefore(this.startDate))
                    selected = this.startDate.clone();

                if (maxDate && selected.isAfter(maxDate))
                    selected = maxDate.clone();

            }

            //
            // hours
            //

            html = '<select class="hourselect">';

            var start = this.timePicker24Hour ? 0 : 1;
            var end = this.timePicker24Hour ? 23 : 12;

            for (var i = start; i <= end; i++) {
                var i_in_24 = i;
                if (!this.timePicker24Hour)
                    i_in_24 = selected.hour() >= 12 ? (i == 12 ? 12 : i + 12) : (i == 12 ? 0 : i);

                var time = selected.clone().hour(i_in_24);
                var disabled = false;
                if (minDate && time.minute(59).isBefore(minDate))
                    disabled = true;
                if (maxDate && time.minute(0).isAfter(maxDate))
                    disabled = true;

                if (i_in_24 == selected.hour() && !disabled) {
                    html += '<option value="' + i + '" selected="selected">' + i + '</option>';
                } else if (disabled) {
                    html += '<option value="' + i + '" disabled="disabled" class="disabled">' + i + '</option>';
                } else {
                    html += '<option value="' + i + '">' + i + '</option>';
                }
            }

            html += '</select> ';

            //
            // minutes
            //

            html += ': <select class="minuteselect">';

            for (var i = 0; i < 60; i += this.timePickerIncrement) {
                var padded = i < 10 ? '0' + i : i;
                var time = selected.clone().minute(i);

                var disabled = false;
                if (minDate && time.second(59).isBefore(minDate))
                    disabled = true;
                if (maxDate && time.second(0).isAfter(maxDate))
                    disabled = true;

                if (selected.minute() == i && !disabled) {
                    html += '<option value="' + i + '" selected="selected">' + padded + '</option>';
                } else if (disabled) {
                    html += '<option value="' + i + '" disabled="disabled" class="disabled">' + padded + '</option>';
                } else {
                    html += '<option value="' + i + '">' + padded + '</option>';
                }
            }

            html += '</select> ';

            //
            // seconds
            //

            if (this.timePickerSeconds) {
                html += ': <select class="secondselect">';

                for (var i = 0; i < 60; i++) {
                    var padded = i < 10 ? '0' + i : i;
                    var time = selected.clone().second(i);

                    var disabled = false;
                    if (minDate && time.isBefore(minDate))
                        disabled = true;
                    if (maxDate && time.isAfter(maxDate))
                        disabled = true;

                    if (selected.second() == i && !disabled) {
                        html += '<option value="' + i + '" selected="selected">' + padded + '</option>';
                    } else if (disabled) {
                        html += '<option value="' + i + '" disabled="disabled" class="disabled">' + padded + '</option>';
                    } else {
                        html += '<option value="' + i + '">' + padded + '</option>';
                    }
                }

                html += '</select> ';
            }

            //
            // AM/PM
            //

            if (!this.timePicker24Hour) {
                html += '<select class="ampmselect">';

                var am_html = '';
                var pm_html = '';

                if (minDate && selected.clone().hour(12).minute(0).second(0).isBefore(minDate))
                    am_html = ' disabled="disabled" class="disabled"';

                if (maxDate && selected.clone().hour(0).minute(0).second(0).isAfter(maxDate))
                    pm_html = ' disabled="disabled" class="disabled"';

                if (selected.hour() >= 12) {
                    html += '<option value="AM"' + am_html + '>AM</option><option value="PM" selected="selected"' + pm_html + '>PM</option>';
                } else {
                    html += '<option value="AM" selected="selected"' + am_html + '>AM</option><option value="PM"' + pm_html + '>PM</option>';
                }

                html += '</select>';
            }

            this.container.find('.drp-calendar.' + side + ' .calendar-time').html(html);

        },

        updateFormInputs: function() {

            if (this.singleDatePicker || (this.endDate && (this.startDate.isBefore(this.endDate) || this.startDate.isSame(this.endDate)))) {
                this.container.find('button.applyBtn').removeAttr('disabled');
            } else {
                this.container.find('button.applyBtn').attr('disabled', 'disabled');
            }

        },

        move: function() {
            var parentOffset = { top: 0, left: 0 },
                containerTop;
            var parentRightEdge = $(window).width();
            if (!this.parentEl.is('body')) {
                parentOffset = {
                    top: this.parentEl.offset().top - this.parentEl.scrollTop(),
                    left: this.parentEl.offset().left - this.parentEl.scrollLeft()
                };
                parentRightEdge = this.parentEl[0].clientWidth + this.parentEl.offset().left;
            }

            if (this.drops == 'up')
                containerTop = this.element.offset().top - this.container.outerHeight() - parentOffset.top;
            else
                containerTop = this.element.offset().top + this.element.outerHeight() - parentOffset.top;

            // Force the container to it's actual width
            this.container.css({
              top: 0,
              left: 0,
              right: 'auto'
            });
            var containerWidth = this.container.outerWidth();

            this.container[this.drops == 'up' ? 'addClass' : 'removeClass']('drop-up');

            if (this.opens == 'left') {
                var containerRight = parentRightEdge - this.element.offset().left - this.element.outerWidth();
                if (containerWidth + containerRight > $(window).width()) {
                    this.container.css({
                        top: containerTop,
                        right: 'auto',
                        left: 9
                    });
                } else {
                    this.container.css({
                        top: containerTop,
                        right: containerRight,
                        left: 'auto'
                    });
                }
            } else if (this.opens == 'center') {
                var containerLeft = this.element.offset().left - parentOffset.left + this.element.outerWidth() / 2
                                        - containerWidth / 2;
                if (containerLeft < 0) {
                    this.container.css({
                        top: containerTop,
                        right: 'auto',
                        left: 9
                    });
                } else if (containerLeft + containerWidth > $(window).width()) {
                    this.container.css({
                        top: containerTop,
                        left: 'auto',
                        right: 0
                    });
                } else {
                    this.container.css({
                        top: containerTop,
                        left: containerLeft,
                        right: 'auto'
                    });
                }
            } else {
                var containerLeft = this.element.offset().left - parentOffset.left;
                if (containerLeft + containerWidth > $(window).width()) {
                    this.container.css({
                        top: containerTop,
                        left: 'auto',
                        right: 0
                    });
                } else {
                    this.container.css({
                        top: containerTop,
                        left: containerLeft,
                        right: 'auto'
                    });
                }
            }
        },

        show: function(e) {
            if (this.isShowing) return;

            // Create a click proxy that is private to this instance of datepicker, for unbinding
            this._outsideClickProxy = $.proxy(function(e) { this.outsideClick(e); }, this);

            // Bind global datepicker mousedown for hiding and
            $(document)
              .on('mousedown.daterangepicker', this._outsideClickProxy)
              // also support mobile devices
              .on('touchend.daterangepicker', this._outsideClickProxy)
              // also explicitly play nice with Bootstrap dropdowns, which stopPropagation when clicking them
              .on('click.daterangepicker', '[data-toggle=dropdown]', this._outsideClickProxy)
              // and also close when focus changes to outside the picker (eg. tabbing between controls)
              .on('focusin.daterangepicker', this._outsideClickProxy);

            // Reposition the picker if the window is resized while it's open
            $(window).on('resize.daterangepicker', $.proxy(function(e) { this.move(e); }, this));

            this.oldStartDate = this.startDate.clone();
            this.oldEndDate = this.endDate.clone();
            this.previousRightTime = this.endDate.clone();

            this.updateView();
            this.container.show();
            this.move();
            this.element.trigger('show.daterangepicker', this);
            this.isShowing = true;
        },

        hide: function(e) {
            if (!this.isShowing) return;

            //incomplete date selection, revert to last values
            if (!this.endDate) {
                this.startDate = this.oldStartDate.clone();
                this.endDate = this.oldEndDate.clone();
            }

            //if a new date range was selected, invoke the user callback function
            if (!this.startDate.isSame(this.oldStartDate) || !this.endDate.isSame(this.oldEndDate))
                this.callback(this.startDate.clone(), this.endDate.clone(), this.chosenLabel);

            //if picker is attached to a text input, update it
            this.updateElement();

            $(document).off('.daterangepicker');
            $(window).off('.daterangepicker');
            this.container.hide();
            this.element.trigger('hide.daterangepicker', this);
            this.isShowing = false;
        },

        toggle: function(e) {
            if (this.isShowing) {
                this.hide();
            } else {
                this.show();
            }
        },

        outsideClick: function(e) {
            var target = $(e.target);
            // if the page is clicked anywhere except within the daterangerpicker/button
            // itself then call this.hide()
            if (
                // ie modal dialog fix
                e.type == "focusin" ||
                target.closest(this.element).length ||
                target.closest(this.container).length ||
                target.closest('.calendar-table').length
                ) return;
            this.hide();
            this.element.trigger('outsideClick.daterangepicker', this);
        },

        showCalendars: function() {
            this.container.addClass('show-calendar');
            this.move();
            this.element.trigger('showCalendar.daterangepicker', this);
        },

        hideCalendars: function() {
            this.container.removeClass('show-calendar');
            this.element.trigger('hideCalendar.daterangepicker', this);
        },

        clickRange: function(e) {
            var label = e.target.getAttribute('data-range-key');
            this.chosenLabel = label;
            if (label == this.locale.customRangeLabel) {
                this.showCalendars();
            } else {
                var dates = this.ranges[label];
                this.startDate = dates[0];
                this.endDate = dates[1];

                if (!this.timePicker) {
                    this.startDate.startOf('day');
                    this.endDate.endOf('day');
                }

                if (!this.alwaysShowCalendars)
                    this.hideCalendars();
                this.clickApply();
            }
        },

        clickPrev: function(e) {
            var cal = $(e.target).parents('.drp-calendar');
            if (cal.hasClass('left')) {
                this.leftCalendar.month.subtract(1, 'month');
                if (this.linkedCalendars)
                    this.rightCalendar.month.subtract(1, 'month');
            } else {
                this.rightCalendar.month.subtract(1, 'month');
            }
            this.updateCalendars();
        },

        clickNext: function(e) {
            var cal = $(e.target).parents('.drp-calendar');
            if (cal.hasClass('left')) {
                this.leftCalendar.month.add(1, 'month');
            } else {
                this.rightCalendar.month.add(1, 'month');
                if (this.linkedCalendars)
                    this.leftCalendar.month.add(1, 'month');
            }
            this.updateCalendars();
        },

        hoverDate: function(e) {

            //ignore dates that can't be selected
            if (!$(e.target).hasClass('available')) return;

            var title = $(e.target).attr('data-title');
            var row = title.substr(1, 1);
            var col = title.substr(3, 1);
            var cal = $(e.target).parents('.drp-calendar');
            var date = cal.hasClass('left') ? this.leftCalendar.calendar[row][col] : this.rightCalendar.calendar[row][col];

            //highlight the dates between the start date and the date being hovered as a potential end date
            var leftCalendar = this.leftCalendar;
            var rightCalendar = this.rightCalendar;
            var startDate = this.startDate;
            if (!this.endDate) {
                this.container.find('.drp-calendar tbody td').each(function(index, el) {

                    //skip week numbers, only look at dates
                    if ($(el).hasClass('week')) return;

                    var title = $(el).attr('data-title');
                    var row = title.substr(1, 1);
                    var col = title.substr(3, 1);
                    var cal = $(el).parents('.drp-calendar');
                    var dt = cal.hasClass('left') ? leftCalendar.calendar[row][col] : rightCalendar.calendar[row][col];

                    if ((dt.isAfter(startDate) && dt.isBefore(date)) || dt.isSame(date, 'day')) {
                        $(el).addClass('in-range');
                    } else {
                        $(el).removeClass('in-range');
                    }

                });
            }

        },

        clickDate: function(e) {

            if (!$(e.target).hasClass('available')) return;

            var title = $(e.target).attr('data-title');
            var row = title.substr(1, 1);
            var col = title.substr(3, 1);
            var cal = $(e.target).parents('.drp-calendar');
            var date = cal.hasClass('left') ? this.leftCalendar.calendar[row][col] : this.rightCalendar.calendar[row][col];

            //
            // this function needs to do a few things:
            // * alternate between selecting a start and end date for the range,
            // * if the time picker is enabled, apply the hour/minute/second from the select boxes to the clicked date
            // * if autoapply is enabled, and an end date was chosen, apply the selection
            // * if single date picker mode, and time picker isn't enabled, apply the selection immediately
            // * if one of the inputs above the calendars was focused, cancel that manual input
            //

            if (this.endDate || date.isBefore(this.startDate, 'day')) { //picking start
                if (this.timePicker) {
                    var hour = parseInt(this.container.find('.left .hourselect').val(), 10);
                    if (!this.timePicker24Hour) {
                        var ampm = this.container.find('.left .ampmselect').val();
                        if (ampm === 'PM' && hour < 12)
                            hour += 12;
                        if (ampm === 'AM' && hour === 12)
                            hour = 0;
                    }
                    var minute = parseInt(this.container.find('.left .minuteselect').val(), 10);
                    if (isNaN(minute)) {
                        minute = parseInt(this.container.find('.left .minuteselect option:last').val(), 10);
                    }
                    var second = this.timePickerSeconds ? parseInt(this.container.find('.left .secondselect').val(), 10) : 0;
                    date = date.clone().hour(hour).minute(minute).second(second);
                }
                this.endDate = null;
                this.setStartDate(date.clone());
            } else if (!this.endDate && date.isBefore(this.startDate)) {
                //special case: clicking the same date for start/end,
                //but the time of the end date is before the start date
                this.setEndDate(this.startDate.clone());
            } else { // picking end
                if (this.timePicker) {
                    var hour = parseInt(this.container.find('.right .hourselect').val(), 10);
                    if (!this.timePicker24Hour) {
                        var ampm = this.container.find('.right .ampmselect').val();
                        if (ampm === 'PM' && hour < 12)
                            hour += 12;
                        if (ampm === 'AM' && hour === 12)
                            hour = 0;
                    }
                    var minute = parseInt(this.container.find('.right .minuteselect').val(), 10);
                    if (isNaN(minute)) {
                        minute = parseInt(this.container.find('.right .minuteselect option:last').val(), 10);
                    }
                    var second = this.timePickerSeconds ? parseInt(this.container.find('.right .secondselect').val(), 10) : 0;
                    date = date.clone().hour(hour).minute(minute).second(second);
                }
                this.setEndDate(date.clone());
                if (this.autoApply) {
                  this.calculateChosenLabel();
                  this.clickApply();
                }
            }

            if (this.singleDatePicker) {
                this.setEndDate(this.startDate);
                if (!this.timePicker)
                    this.clickApply();
            }

            this.updateView();

            //This is to cancel the blur event handler if the mouse was in one of the inputs
            e.stopPropagation();

        },

        calculateChosenLabel: function () {
            var customRange = true;
            var i = 0;
            for (var range in this.ranges) {
              if (this.timePicker) {
                    var format = this.timePickerSeconds ? "YYYY-MM-DD HH:mm:ss" : "YYYY-MM-DD HH:mm";
                    //ignore times when comparing dates if time picker seconds is not enabled
                    if (this.startDate.format(format) == this.ranges[range][0].format(format) && this.endDate.format(format) == this.ranges[range][1].format(format)) {
                        customRange = false;
                        this.chosenLabel = this.container.find('.ranges li:eq(' + i + ')').addClass('active').attr('data-range-key');
                        break;
                    }
                } else {
                    //ignore times when comparing dates if time picker is not enabled
                    if (this.startDate.format('YYYY-MM-DD') == this.ranges[range][0].format('YYYY-MM-DD') && this.endDate.format('YYYY-MM-DD') == this.ranges[range][1].format('YYYY-MM-DD')) {
                        customRange = false;
                        this.chosenLabel = this.container.find('.ranges li:eq(' + i + ')').addClass('active').attr('data-range-key');
                        break;
                    }
                }
                i++;
            }
            if (customRange) {
                if (this.showCustomRangeLabel) {
                    this.chosenLabel = this.container.find('.ranges li:last').addClass('active').attr('data-range-key');
                } else {
                    this.chosenLabel = null;
                }
                this.showCalendars();
            }
        },

        clickApply: function(e) {
            this.hide();
            this.element.trigger('apply.daterangepicker', this);
        },

        clickCancel: function(e) {
            this.startDate = this.oldStartDate;
            this.endDate = this.oldEndDate;
            this.hide();
            this.element.trigger('cancel.daterangepicker', this);
        },

        monthOrYearChanged: function(e) {
            var isLeft = $(e.target).closest('.drp-calendar').hasClass('left'),
                leftOrRight = isLeft ? 'left' : 'right',
                cal = this.container.find('.drp-calendar.'+leftOrRight);

            // Month must be Number for new moment versions
            var month = parseInt(cal.find('.monthselect').val(), 10);
            var year = cal.find('.yearselect').val();

            if (!isLeft) {
                if (year < this.startDate.year() || (year == this.startDate.year() && month < this.startDate.month())) {
                    month = this.startDate.month();
                    year = this.startDate.year();
                }
            }

            if (this.minDate) {
                if (year < this.minDate.year() || (year == this.minDate.year() && month < this.minDate.month())) {
                    month = this.minDate.month();
                    year = this.minDate.year();
                }
            }

            if (this.maxDate) {
                if (year > this.maxDate.year() || (year == this.maxDate.year() && month > this.maxDate.month())) {
                    month = this.maxDate.month();
                    year = this.maxDate.year();
                }
            }

            if (isLeft) {
                this.leftCalendar.month.month(month).year(year);
                if (this.linkedCalendars)
                    this.rightCalendar.month = this.leftCalendar.month.clone().add(1, 'month');
            } else {
                this.rightCalendar.month.month(month).year(year);
                if (this.linkedCalendars)
                    this.leftCalendar.month = this.rightCalendar.month.clone().subtract(1, 'month');
            }
            this.updateCalendars();
        },

        timeChanged: function(e) {

            var cal = $(e.target).closest('.drp-calendar'),
                isLeft = cal.hasClass('left');

            var hour = parseInt(cal.find('.hourselect').val(), 10);
            var minute = parseInt(cal.find('.minuteselect').val(), 10);
            if (isNaN(minute)) {
                minute = parseInt(cal.find('.minuteselect option:last').val(), 10);
            }
            var second = this.timePickerSeconds ? parseInt(cal.find('.secondselect').val(), 10) : 0;

            if (!this.timePicker24Hour) {
                var ampm = cal.find('.ampmselect').val();
                if (ampm === 'PM' && hour < 12)
                    hour += 12;
                if (ampm === 'AM' && hour === 12)
                    hour = 0;
            }

            if (isLeft) {
                var start = this.startDate.clone();
                start.hour(hour);
                start.minute(minute);
                start.second(second);
                this.setStartDate(start);
                if (this.singleDatePicker) {
                    this.endDate = this.startDate.clone();
                } else if (this.endDate && this.endDate.format('YYYY-MM-DD') == start.format('YYYY-MM-DD') && this.endDate.isBefore(start)) {
                    this.setEndDate(start.clone());
                }
            } else if (this.endDate) {
                var end = this.endDate.clone();
                end.hour(hour);
                end.minute(minute);
                end.second(second);
                this.setEndDate(end);
            }

            //update the calendars so all clickable dates reflect the new time component
            this.updateCalendars();

            //update the form inputs above the calendars with the new time
            this.updateFormInputs();

            //re-render the time pickers because changing one selection can affect what's enabled in another
            this.renderTimePicker('left');
            this.renderTimePicker('right');

        },

        elementChanged: function() {
            if (!this.element.is('input')) return;
            if (!this.element.val().length) return;

            var dateString = this.element.val().split(this.locale.separator),
                start = null,
                end = null;

            if (dateString.length === 2) {
                start = moment(dateString[0], this.locale.format);
                end = moment(dateString[1], this.locale.format);
            }

            if (this.singleDatePicker || start === null || end === null) {
                start = moment(this.element.val(), this.locale.format);
                end = start;
            }

            if (!start.isValid() || !end.isValid()) return;

            this.setStartDate(start);
            this.setEndDate(end);
            this.updateView();
        },

        keydown: function(e) {
            //hide on tab or enter
            if ((e.keyCode === 9) || (e.keyCode === 13)) {
                this.hide();
            }

            //hide on esc and prevent propagation
            if (e.keyCode === 27) {
                e.preventDefault();
                e.stopPropagation();

                this.hide();
            }
        },

        updateElement: function() {
            if (this.element.is('input') && this.autoUpdateInput) {
                var newValue = this.startDate.format(this.locale.format);
                if (!this.singleDatePicker) {
                    newValue += this.locale.separator + this.endDate.format(this.locale.format);
                }
                if (newValue !== this.element.val()) {
                    this.element.val(newValue).trigger('change');
                }
            }
        },

        remove: function() {
            this.container.remove();
            this.element.off('.daterangepicker');
            this.element.removeData();
        }

    };

    $.fn.daterangepicker = function(options, callback) {
        var implementOptions = $.extend(true, {}, $.fn.daterangepicker.defaultOptions, options);
        this.each(function() {
            var el = $(this);
            if (el.data('daterangepicker'))
                el.data('daterangepicker').remove();
            el.data('daterangepicker', new DateRangePicker(el, implementOptions, callback));
        });
        return this;
    };

    return DateRangePicker;

}));
