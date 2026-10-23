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
!function(){var e=document.currentScript;function t(t){var n=document.createElement("script"),o=e||document.getElementsByTagName("script")[0];n.setAttribute("async",!0),n.setAttribute("src",t),o.parentNode.insertBefore(n,o)}function n(e,t){return Element.prototype.matches?e.matches(t):Element.prototype.msMatchesSelector?e.msMatchesSelector(t):void 0}function o(e,t){if(e.closest)return e.closest(t);var o=e;do{if(n(o,t))return o;o=o.parentElement||o.parentNode}while(null!==o&&1===o.nodeType);return null}function i(e,t){for(var n=0;n<e.length;n++)t(e[n],n,e)}var r,s=".sharing-hidden .inner",a="data-sharing-more-button-id";function c(e){this.button=e,this.pane=o(e,"div").querySelector(s),this.openedBy=null,this.recentlyOpenedByHover=!1,c.instances.push(this),this.pane.setAttribute(a,c.instances.length-1),this.attachHandlers()}if(c.instances=[],c.hoverOpenDelay=200,c.recentOpenDelay=400,c.hoverCloseDelay=300,c.instantiateOrReuse=function(e){var t=o(e,"div").querySelector(s),n=t&&t.getAttribute(a),i=c.instances[n];return i||new c(e)},c.getButtonInstanceFromPane=function(e){var t=e&&e.getAttribute(a);return c.instances[t]},c.closeAll=function(){for(var e=0;e<c.instances.length;e++)c.instances[e].close()},c.prototype.open=function(){var e,t,n=[0,0];function o(e){var t=e.getBoundingClientRect();return[t.left+(window.scrollX||window.pageXOffset||0),t.top+(window.scrollY||window.pageYOffset||0)]}function i(e,t){return parseInt(getComputedStyle(e).getPropertyValue(t)||0)}for(e=o(this.button),t=this.button.offsetParent||document.documentElement;t&&(t===document.body||t===document.documentElement)&&"static"===getComputedStyle(t).getPropertyValue("position");)t=t.parentNode;t&&t!==this.button&&1===t.nodeType&&(n=[(n=o(t))[0]+i(t,"border-left-width"),n[1]+i(t,"border-top-width")]);var r,s=e[0]-n[0]-i(this.button,"margin-left"),a=e[1]-n[1]-i(this.button,"margin-top");this.pane.style.left=s+"px",this.pane.style.top=a+this.button.offsetHeight+3+"px",(r=this.pane)&&r.style.removeProperty("display")},c.prototype.close=function(){var e;(e=this.pane)&&(e.style.display="none"),this.openedBy=null},c.prototype.toggle=function(){var e;(e=this.pane)&&"none"!==e.style.display?this.close():this.open()},c.prototype.nonHoverOpen=function(){clearTimeout(this.openTimer),clearTimeout(this.closeTimer),this.recentlyOpenedByHover?(this.recentlyOpenedByHover=!1,clearTimeout(this.hoverOpenTimer),this.open()):this.toggle()},c.prototype.resetCloseTimer=function(){clearTimeout(this.closeTimer),this.closeTimer=setTimeout(this.close.bind(this),c.hoverCloseDelay)},c.prototype.attachHandlers=function(){this.buttonClick=function(e){e.preventDefault(),e.stopPropagation(),this.openedBy="click",this.nonHoverOpen()}.bind(this),this.buttonKeydown=function(e){13!==e.keyCode&&32!==e.keyCode||(e.preventDefault(),e.stopPropagation(),this.openedBy="keydown",this.nonHoverOpen())}.bind(this),this.buttonEnter=function(){this.openedBy||(this.openTimer=setTimeout(function(){this.open(),this.openedBy="hover",this.recentlyOpenedByHover=!0,this.hoverOpenTimer=setTimeout(function(){this.recentlyOpenedByHover=!1}.bind(this),c.recentOpenDelay)}.bind(this),c.hoverOpenDelay)),clearTimeout(this.closeTimer)}.bind(this),this.buttonLeave=function(){"hover"===this.openedBy&&this.resetCloseTimer(),clearTimeout(this.openTimer)}.bind(this),this.paneEnter=function(){clearTimeout(this.closeTimer)}.bind(this),this.paneLeave=function(){"hover"===this.openedBy&&this.resetCloseTimer()}.bind(this),this.documentClick=function(){this.close()}.bind(this),this.button.addEventListener("click",this.buttonClick),this.button.addEventListener("keydown",this.buttonKeydown),document.addEventListener("click",this.documentClick),void 0===document.ontouchstart&&(this.button.addEventListener("mouseenter",this.buttonEnter),this.button.addEventListener("mouseleave",this.buttonLeave),this.pane.addEventListener("mouseenter",this.paneEnter),this.pane.addEventListener("mouseleave",this.paneLeave))},window.sharing_js_options&&window.sharing_js_options.counts){var u={done_urls:[],get_counts:function(){var e,n,o,i,r;if("undefined"!=typeof WPCOM_sharing_counts)for(e in WPCOM_sharing_counts)if(o=WPCOM_sharing_counts[e],void 0===u.done_urls[o]){for(i in n={pinterest:[window.location.protocol+"//api.pinterest.com/v1/urls/count.json?callback=WPCOMSharing.update_pinterest_count&url="+encodeURIComponent(e)]})if(document.querySelector("a[data-shared=sharing-"+i+"-"+o+"]")){for(;r=n[i].pop();)t(r);window.sharing_js_options.is_stats_active&&u.bump_sharing_count_stat(i)}u.done_urls[o]=!0}},update_pinterest_count:function(e){void 0!==e.count&&1*e.count>0&&u.inject_share_count("sharing-pinterest-"+WPCOM_sharing_counts[e.url],e.count)},inject_share_count:function(e,t){i(document.querySelectorAll("a[data-shared="+e+"] > span"),function(e){var n,o=e.querySelector(".share-count");(n=o)&&n.parentNode&&n.parentNode.removeChild(n);var i=document.createElement("span");i.className="share-count",i.textContent=u.format_count(t),e.appendChild(i)})},format_count:function(e){return e<1e3?e:e>=1e3&&e<1e4?String(e).substring(0,1)+"K+":"10K+"},bump_sharing_count_stat:function(e){(new Image).src=document.location.protocol+"//pixel.wp.com/g.gif?v=wpcom-no-pv&x_sharing-count-request="+e+"&r="+Math.random()}};window.WPCOMSharing=u}function d(e,t){e.setAttribute("jetpack-share-click-count",t)}function l(e){var t=e.getAttribute("jetpack-share-click-count");return null===t?0:parseInt(t,10)}function h(e,t){var n,o=new XMLHttpRequest;o.open("POST",e,!0),o.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8"),o.setRequestHeader("x-requested-with","XMLHttpRequest"),o.send((n=t,(encodeURIComponent("email-share-nonce")+"="+encodeURIComponent(n)).replace(/%20/g,"+")))}function p(){m()}function m(){window.WPCOMSharing&&window.WPCOMSharing.get_counts(),i(document.querySelectorAll(".sharedaddy a"),function(e){var t=e.getAttribute("href");t&&-1!==t.indexOf("share=")&&-1===t.indexOf("&nb=1")&&e.setAttribute("href",t+"&nb=1")}),i(document.querySelectorAll(".sharedaddy a.sharing-anchor"),function(e){c.instantiateOrReuse(e)}),void 0!==document.ontouchstart&&document.body.classList.add("jp-sharing-input-touch"),i(document.querySelectorAll(".sharedaddy ul"),function(e){"true"!==e.getAttribute("data-sharing-events-added")&&(e.setAttribute("data-sharing-events-added","true"),i(e.querySelectorAll("a.share-print"),function(e){e.addEventListener("click",function(t){t.preventDefault(),t.stopPropagation();var n=e.getAttribute("href")||"",i=function(){if(-1===n.indexOf("#print")){var e=(new Date).getTime();t=e,o=n,(i=document.createElement("iframe")).setAttribute("style","position:fixed; top:100; left:100; height:1px; width:1px; border:none;"),i.setAttribute("id","printFrame-"+t),i.setAttribute("name",i.getAttribute("id")),i.setAttribute("src",o),i.setAttribute("onload",'frames["printFrame-'+t+'"].focus();frames["printFrame-'+t+'"].print();'),document.body.appendChild(i)}else window.print();var t,o,i},r=o(e,s);if(r){var a=c.getButtonInstanceFromPane(r);a&&(a.close(),i())}else i()})}),i(e.querySelectorAll("a.share-press-this"),function(e){var t="wp-press-this-"+Math.random().toString(36).slice(2);e.addEventListener("click",function(n){n.preventDefault(),n.stopPropagation();var o="";if(window.getSelection?o=window.getSelection():document.getSelection?o=document.getSelection():document.selection&&(o=document.selection.createRange().text),o){var i=e.getAttribute("href");e.setAttribute("href",i+"&sel="+encodeURI(o))}window.open(e.getAttribute("href"),t,"toolbar=0,resizable=1,scrollbars=1,status=1,width=720,height=570")||(document.location.href=e.getAttribute("href"))})}),i(e.querySelectorAll("a.share-email"),function(t){d(t,0);var n,o,r=t.getAttribute("data-email-share-nonce"),s=t.getAttribute("data-email-share-track-url");r&&s&&(n=s,o=window.location.protocol+"//"+window.location.hostname+"/",0===String(n).indexOf(o))&&t.addEventListener("click",function(){var n;d(n=t,l(n)+1),l(t)>2&&function(e,t){var n=t.parentElement;if(n.classList.contains("sd-content")){i(n.querySelectorAll(".share-email-error"),function(e){e.parentElement.removeChild(e)});var o=document.createElement("div");o.className="share-email-error";var r=document.createElement("h6");r.className="share-email-error-title",r.innerText=e.getAttribute("data-email-share-error-title"),o.appendChild(r);var s=document.createElement("p");s.className="share-email-error-text",s.innerText=e.getAttribute("data-email-share-error-text"),o.appendChild(s),n.appendChild(o)}}(t,e),h(s,r)})}))}),i(document.querySelectorAll("li.share-email, li.share-custom a.sharing-anchor"),function(e){e.classList.add("share-service-visible")})}"loading"!==document.readyState?p():document.addEventListener("DOMContentLoaded",p),document.body.addEventListener("is.post-load",m);var f={};!0!==window.WPCOM_sharing_popups_bound&&(document.body.addEventListener("click",function(e){var t=e.target;if(t&&1===t.nodeType){var n=function(e){if("A"===e.nodeName)return e;var t=e.parentNode;return t&&"A"===t.nodeName?t:null}(t);if(n){var o=function(e){var t=window.WPCOM_sharing_popups;if(!t)return null;for(var n="share-",o=(e.getAttribute("class")||"").split(/\s+/),i=0;i<o.length;i++)if(0===o[i].indexOf(n)){var r=o[i].slice(6);if("string"==typeof t[r])return r}return null}(n);o&&(e.preventDefault(),r&&r.close(),r=window.open(n.getAttribute("href"),function(e){return"string"!=typeof f[e]&&(f[e]="wpcom"+e+"-"+Math.random().toString(36).slice(2)),f[e]}(o),window.WPCOM_sharing_popups[o]))}}}),window.WPCOM_sharing_popups_bound=!0)}();;
