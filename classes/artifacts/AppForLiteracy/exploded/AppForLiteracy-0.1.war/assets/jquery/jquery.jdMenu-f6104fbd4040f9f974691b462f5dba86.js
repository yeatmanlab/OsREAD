//# sourceMappingURL=jquery.jdMenu.js.map
$(function(){$("ul.jd_menu").jdMenu()});
(function(b){function e(a){var d=b.data(b(a).parents().andSelf().filter("ul.jd_menu")[0],"jdMenuSettings");b("> li",a).bind("mouseenter.jdmenu mouseleave.jdmenu",function(a){b(this).toggleClass("jdm_hover");var c=b("> ul",this);if(1==c.length){clearTimeout(this.$jdTimer);var e=(a="mouseenter"==a.type)?f:g;this.$jdTimer=setTimeout(function(){e(c[0],d.onAnimate,d.isVertical)},a?d.showDelay:d.hideDelay)}}).bind("click.jdmenu",function(a){var c=b("> ul",this);if(1==c.length&&(1==d.disableLinks||b(this).hasClass("accessible")))return f(c,
d.onAnimate,d.isVertical),!1;a.target==this&&(c=b("> a",a.target).not(".accessible"),0<c.length&&(c=c[0],c.onclick?b(c).trigger("click"):window.open(c.href,c.target||"_self")));if(d.disableLinks||!d.disableLinks&&!b(this).parent().hasClass("jd_menu"))b(this).parent().jdMenuHide(),a.stopPropagation()}).find("> a").bind("focus.jdmenu blur.jdmenu",function(a){var c=b(this).parents("li:eq(0)");"focus"==a.type?c.addClass("jdm_hover"):c.removeClass("jdm_hover")}).filter(".accessible").bind("click.jdmenu",
function(a){a.preventDefault()})}function f(a,d,f){a=b(a);if(!a.is(":visible")){a.bgiframe();var c=a.parent();a.trigger("jdMenuShow").positionBy({target:c[0],targetPos:!0!==f&&c.parent().hasClass("jd_menu")?3:1,elementPos:0,hideAfterPosition:!0});a.hasClass("jdm_events")||(a.addClass("jdm_events"),e(a));c.addClass("jdm_active").siblings("li").find("> ul:eq(0):visible").each(function(){g(this)});void 0===d?a.show():d.apply(a[0],[!0])}}function g(a,d){a=b(a);b(".bgiframe",a).remove();a.filter(":not(.jd_menu)").find("> li > ul:eq(0):visible").each(function(){g(this)}).end();
void 0===d?a.hide():d.apply(a[0],[!1]);a.trigger("jdMenuHide").parents("li:eq(0)").removeClass("jdm_active jdm_hover").end().find("> li").removeClass("jdm_active jdm_hover")}b.fn.jdMenu=function(a){a=b.extend({showDelay:200,hideDelay:500,disableLinks:!0},a);b.isFunction(a.onAnimate)||(a.onAnimate=void 0);return this.filter("ul.jd_menu").each(function(){b.data(this,"jdMenuSettings",b.extend({isVertical:b(this).hasClass("jd_menu_vertical")},a));e(this)})};b.fn.jdMenuUnbind=function(){b("ul.jdm_events",
this).unbind(".jdmenu").find("> a").unbind(".jdmenu")};b.fn.jdMenuHide=function(){return this.filter("ul").each(function(){g(this)})};b(window).bind("click.jdmenu",function(){b("ul.jd_menu ul:visible").jdMenuHide()})})(jQuery);