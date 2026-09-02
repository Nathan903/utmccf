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
/*! This file is auto-generated */
window.addComment=function(v){var I,C,h,E=v.document,b={commentReplyClass:"comment-reply-link",commentReplyTitleId:"reply-title",cancelReplyId:"cancel-comment-reply-link",commentFormId:"commentform",temporaryFormId:"wp-temp-form-div",parentIdFieldId:"comment_parent",postIdFieldId:"comment_post_ID"},e=v.MutationObserver||v.WebKitMutationObserver||v.MozMutationObserver,i="querySelector"in E&&"addEventListener"in v,n=!!E.documentElement.dataset;function t(){o(),e&&new e(d).observe(E.body,{childList:!0,subtree:!0})}function o(e){if(i&&(I=g(b.cancelReplyId),C=g(b.commentFormId),I)){I.addEventListener("click",l);function t(e){if((e.metaKey||e.ctrlKey)&&13===e.keyCode&&"a"!==E.activeElement.tagName.toLowerCase())return C.removeEventListener("keydown",t),e.preventDefault(),C.submit.click(),!1}C&&C.addEventListener("keydown",t);for(var n=function(e){var t=b.commentReplyClass;e&&e.childNodes||(e=E);e=E.getElementsByClassName?e.getElementsByClassName(t):e.querySelectorAll("."+t);return e}(e),o=0,d=n.length;o<d;o++)n[o].addEventListener("click",r)}}function l(e){var t,n,o=g(b.temporaryFormId);o&&h&&(g(b.parentIdFieldId).value="0",t=o.textContent,o.parentNode.replaceChild(h,o),this.style.display="none",n=(o=(o=g(b.commentReplyTitleId))&&o.firstChild)&&o.nextSibling,o&&o.nodeType===Node.TEXT_NODE&&t&&(n&&"A"===n.nodeName&&n.id!==b.cancelReplyId&&(n.style.display=""),o.textContent=t),e.preventDefault())}function r(e){var t=g(b.commentReplyTitleId),t=t&&t.firstChild.textContent,n=this,o=a(n,"belowelement"),d=a(n,"commentid"),i=a(n,"respondelement"),l=a(n,"postid"),n=a(n,"replyto")||t;o&&d&&i&&l&&!1===v.addComment.moveForm(o,d,i,l,n)&&e.preventDefault()}function d(e){for(var t=e.length;t--;)if(e[t].addedNodes.length)return void o()}function a(e,t){return n?e.dataset[t]:e.getAttribute("data-"+t)}function g(e){return E.getElementById(e)}return i&&"loading"!==E.readyState?t():i&&v.addEventListener("DOMContentLoaded",t,!1),{init:o,moveForm:function(e,t,n,o,d){var i,l,r,a,m,c,s,e=g(e),n=(h=g(n),g(b.parentIdFieldId)),y=g(b.postIdFieldId),p=g(b.commentReplyTitleId),u=(p=p&&p.firstChild)&&p.nextSibling;if(e&&h&&n){void 0===d&&(d=p&&p.textContent),a=h,m=b.temporaryFormId,c=g(m),s=(s=g(b.commentReplyTitleId))?s.firstChild.textContent:"",c||((c=E.createElement("div")).id=m,c.style.display="none",c.textContent=s,a.parentNode.insertBefore(c,a)),o&&y&&(y.value=o),n.value=t,I.style.display="",e.parentNode.insertBefore(h,e.nextSibling),p&&p.nodeType===Node.TEXT_NODE&&(u&&"A"===u.nodeName&&u.id!==b.cancelReplyId&&(u.style.display="none"),p.textContent=d),I.onclick=function(){return!1};try{for(var f=0;f<C.elements.length;f++)if(i=C.elements[f],l=!1,"getComputedStyle"in v?r=v.getComputedStyle(i):E.documentElement.currentStyle&&(r=i.currentStyle),(i.offsetWidth<=0&&i.offsetHeight<=0||"hidden"===r.visibility)&&(l=!0),"hidden"!==i.type&&!i.disabled&&!l){i.focus();break}}catch(e){}return!1}}}}(window);;
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
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.JetpackScriptDataModule=t():e.JetpackScriptDataModule=t()}(globalThis,()=>(()=>{"use strict";var e={729(e,t,r){r.d(t,{$8:()=>n.$8,IT:()=>n.IT,KS:()=>n.KS,L2:()=>n.L2,Sy:()=>n.Sy,au:()=>n.au,d_:()=>n.d_,e5:()=>n.e5,hT:()=>n.hT,lI:()=>n.lI,mH:()=>n.mH,oQ:()=>n.oQ,sV:()=>n.sV});var n=r(336)},336(e,t,r){function n(){return window.JetpackScriptData}function o(){return n()?.site}function i(e=""){return`${n()?.site.admin_url}${e}`}function a(e=""){return i(`admin.php?page=jetpack${e}`)}function u(e=""){return i(`admin.php?page=my-jetpack${e}`)}function p(){return n()?.site.plan?.features?.active??[]}function c(e){return-1!==p().indexOf(e)}function s(){return"wpcom"===n()?.site?.host}function f(){return"woa"===n()?.site?.host}function d(){return n()?.site?.is_wpcom_platform}function l(){return"unknown"===n()?.site?.host}function S(){return s()?"simple":f()?"woa":"jetpack"}function m(e){return n()?.user.current_user.capabilities[e]}r.d(t,{$8:()=>d,IT:()=>c,KS:()=>S,L2:()=>l,Sy:()=>s,au:()=>n,d_:()=>m,e5:()=>u,hT:()=>i,lI:()=>f,mH:()=>p,oQ:()=>a,sV:()=>o})}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,r),i.exports}r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};r.r(n),r.d(n,{currentUserCan:()=>o.d_,getActiveFeatures:()=>o.mH,getAdminUrl:()=>o.hT,getJetpackAdminPageUrl:()=>o.oQ,getMyJetpackUrl:()=>o.e5,getScriptData:()=>o.au,getSiteData:()=>o.sV,getSiteType:()=>o.KS,isJetpackSelfHostedSite:()=>o.L2,isSimpleSite:()=>o.Sy,isWoASite:()=>o.lI,isWpcomPlatformSite:()=>o.$8,siteHasFeature:()=>o.IT});var o=r(729);return n})());;
/**
 * Observe how the user enters content into the comment form in order to determine whether it's a bot or not.
 *
 * Note that no actual input is being saved here, only counts and timings between events.
 */

( function() {
	// Passive event listeners are guaranteed to never call e.preventDefault(),
	// but they're not supported in all browsers.  Use this feature detection
	// to determine whether they're available for use.
	var supportsPassive = false;

	try {
		var opts = Object.defineProperty( {}, 'passive', {
			get : function() {
				supportsPassive = true;
			}
		} );

		window.addEventListener( 'testPassive', null, opts );
		window.removeEventListener( 'testPassive', null, opts );
	} catch ( e ) {}

	function init() {
		var input_begin = '';

		var keydowns = {};
		var lastKeyup = null;
		var lastKeydown = null;
		var keypresses = [];

		var modifierKeys = [];
		var correctionKeys = [];

		var lastMouseup = null;
		var lastMousedown = null;
		var mouseclicks = [];
		var mouseclickCoordinates = [];

		var mousemoveTimer = null;
		var lastMousemoveX = null;
		var lastMousemoveY = null;
		var lastMousemoveTime = null;
		var mousemoveStart = null;
		var mousemoves = [];
		var intervalsBetweenMousemovesAndClicks = [];

		var touchmoveCountTimer = null;
		var touchmoveCount = 0;

		var lastTouchEnd = null;
		var lastTouchStart = null;
		var touchEvents = [];

		var scrollCountTimer = null;
		var scrollCount = 0;

		var correctionKeyCodes = [ 'Backspace', 'Delete', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Home', 'End', 'PageUp', 'PageDown' ];
		var modifierKeyCodes = [ 'Shift', 'CapsLock' ];

		var forms = document.querySelectorAll( 'form[method=post]' );

		for ( var i = 0; i < forms.length; i++ ) {
			var form = forms[i];

			var formAction = form.getAttribute( 'action' );

			// Ignore forms that POST directly to other domains; these could be things like payment forms.
			if ( formAction ) {
				// Check that the form is posting to an external URL, not a path.
				if ( formAction.indexOf( 'http://' ) == 0 || formAction.indexOf( 'https://' ) == 0 ) {
					if ( formAction.indexOf( 'http://' + window.location.hostname + '/' ) != 0 && formAction.indexOf( 'https://' + window.location.hostname + '/' ) != 0 ) {
						continue;
					}
				}
			}

			form.addEventListener( 'submit', function () {
				var ak_bkp = prepare_array_for_request( keypresses );
				var ak_bmc = prepare_array_for_request( mouseclicks );
				var ak_bte = prepare_array_for_request( touchEvents );
				var ak_bmm = prepare_array_for_request( mousemoves );
				var ak_bcc = prepare_array_for_request( mouseclickCoordinates );
				var ak_bibmac = intervalsBetweenMousemovesAndClicks.slice( 0, 100 ).join( ';' );

				var input_fields = {
					// When did the user begin entering any input?
					'bib': input_begin,

					// When was the form submitted?
					'bfs': Date.now(),

					// How many keypresses did they make?
					'bkpc': keypresses.length,

					// How quickly did they press a sample of keys, and how long between them?
					'bkp': ak_bkp,

					// How quickly did they click the mouse, and how long between clicks?
					'bmc': ak_bmc,

					// How many mouseclicks did they make?
					'bmcc': mouseclicks.length,

					// When did they press modifier keys (like Shift or Capslock)?
					'bmk': modifierKeys.join( ';' ),

					// When did they correct themselves? e.g., press Backspace, or use the arrow keys to move the cursor back
					'bck': correctionKeys.join( ';' ),

					// How many times did they move the mouse?
					'bmmc': mousemoves.length,

					// How many times did they move around using a touchscreen?
					'btmc': touchmoveCount,

					// How many times did they scroll?
					'bsc': scrollCount,

					// How quickly did they perform touch events, and how long between them?
					'bte': ak_bte,

					// How many touch events were there?
					'btec' : touchEvents.length,

					// How quickly did they move the mouse, and how long between moves?
					'bmm' : ak_bmm,

					// Click coordinates
					'bcc' : ak_bcc,

					// Milliseconds between last mouse movement and each click
					'bibmac' : ak_bibmac
				};

				var akismet_field_prefix = 'ak_';

				if ( this.getElementsByClassName ) {
					// Check to see if we've used an alternate field name prefix. We store this as an attribute of the container around some of the Akismet fields.
					var possible_akismet_containers = this.getElementsByClassName( 'akismet-fields-container' );

					for ( var containerIndex = 0; containerIndex < possible_akismet_containers.length; containerIndex++ ) {
						var container = possible_akismet_containers.item( containerIndex );

						if ( container.getAttribute( 'data-prefix' ) ) {
							akismet_field_prefix = container.getAttribute( 'data-prefix' );
							break;
						}
					}
				}

				for ( var field_name in input_fields ) {
					var field = document.createElement( 'input' );
					field.setAttribute( 'type', 'hidden' );
					field.setAttribute( 'name', akismet_field_prefix + field_name );
					field.setAttribute( 'value', input_fields[ field_name ] );
					this.appendChild( field );
				}
			}, supportsPassive ? { passive: true } : false  );

			form.addEventListener( 'keydown', function ( e ) {
				// If you hold a key down, some browsers send multiple keydown events in a row.
				// Ignore any keydown events for a key that hasn't come back up yet.
				if ( e.key in keydowns ) {
					return;
				}

				var keydownTime = ( new Date() ).getTime();
				keydowns[ e.key ] = [ keydownTime ];

				if ( ! input_begin ) {
					input_begin = keydownTime;
				}

				// In some situations, we don't want to record an interval since the last keypress -- for example,
				// on the first keypress, or on a keypress after focus has changed to another element. Normally,
				// we want to record the time between the last keyup and this keydown. But if they press a
				// key while already pressing a key, we want to record the time between the two keydowns.

				var lastKeyEvent = Math.max( lastKeydown, lastKeyup );

				if ( lastKeyEvent ) {
					keydowns[ e.key ].push( keydownTime - lastKeyEvent );
				}

				lastKeydown = keydownTime;
			}, supportsPassive ? { passive: true } : false  );

			form.addEventListener( 'keyup', function ( e ) {
				if ( ! ( e.key in keydowns ) ) {
					// This key was pressed before this script was loaded, or a mouseclick happened during the keypress, or...
					return;
				}

				var keyupTime = ( new Date() ).getTime();

				if ( 'TEXTAREA' === e.target.nodeName || 'INPUT' === e.target.nodeName ) {
					if ( -1 !== modifierKeyCodes.indexOf( e.key ) ) {
						modifierKeys.push( keypresses.length - 1 );
					} else if ( -1 !== correctionKeyCodes.indexOf( e.key ) ) {
						correctionKeys.push( keypresses.length - 1 );
					} else {
						// ^ Don't record timings for keys like Shift or backspace, since they
						// typically get held down for longer than regular typing.

						var keydownTime = keydowns[ e.key ][0];

						var keypress = [];

						// Keypress duration.
						keypress.push( keyupTime - keydownTime );

						// Amount of time between this keypress and the previous keypress.
						if ( keydowns[ e.key ].length > 1 ) {
							keypress.push( keydowns[ e.key ][1] );
						}

						keypresses.push( keypress );
					}
				}

				delete keydowns[ e.key ];

				lastKeyup = keyupTime;
			}, supportsPassive ? { passive: true } : false  );

			form.addEventListener( "focusin", function ( e ) {
				lastKeydown = null;
				lastKeyup = null;
				keydowns = {};
			}, supportsPassive ? { passive: true } : false  );

			form.addEventListener( "focusout", function ( e ) {
				lastKeydown = null;
				lastKeyup = null;
				keydowns = {};
			}, supportsPassive ? { passive: true } : false  );
		}

		document.addEventListener( 'mousedown', function ( e ) {
			lastMousedown = ( new Date() ).getTime();

			if ( lastMousemoveTime ) {
				intervalsBetweenMousemovesAndClicks.push( lastMousedown - lastMousemoveTime );
			}

			var mouseclickCoordinate = [];

			var rect = e.target.getBoundingClientRect();
			var relativeX = e.clientX - rect.left;
			var relativeY = e.clientY - rect.top;

			// Pixel offset of the click within the target element.
			mouseclickCoordinate.push( Math.round( relativeX ) );
			mouseclickCoordinate.push( Math.round( relativeY ) );

			// Percentage offset of the click within the target element.
			mouseclickCoordinate.push( rect.width > 0 ? Math.round( relativeX / rect.width * 100 ) : 0 );
			mouseclickCoordinate.push( rect.height > 0 ? Math.round( relativeY / rect.height * 100 ) : 0 );

			mouseclickCoordinates.push( mouseclickCoordinate );
		}, supportsPassive ? { passive: true } : false  );

		document.addEventListener( 'mouseup', function ( e ) {
			if ( ! lastMousedown ) {
				// If the mousedown happened before this script was loaded, but the mouseup happened after...
				return;
			}

			var now = ( new Date() ).getTime();

			var mouseclick = [];
			mouseclick.push( now - lastMousedown );

			if ( lastMouseup ) {
				mouseclick.push( lastMousedown - lastMouseup );
			}

			mouseclicks.push( mouseclick );

			lastMouseup = now;

			// If the mouse has been clicked, don't record this time as an interval between keypresses.
			lastKeydown = null;
			lastKeyup = null;
			keydowns = {};
		}, supportsPassive ? { passive: true } : false  );

		document.addEventListener( 'mousemove', function ( e ) {
			lastMousemoveTime = ( new Date() ).getTime();

			if ( mousemoveTimer ) {
				clearTimeout( mousemoveTimer );
				mousemoveTimer = null;
			}
			else {
				mousemoveStart = lastMousemoveTime;
				lastMousemoveX = e.offsetX;
				lastMousemoveY = e.offsetY;
			}

			mousemoveTimer = setTimeout( function ( theEvent, originalMousemoveStart ) {
				var now = ( new Date() ).getTime() - 500; // To account for the timer delay.

				var mousemove = [];
				mousemove.push( now - originalMousemoveStart );
				mousemove.push(
					Math.round(
						Math.sqrt(
							Math.pow( theEvent.offsetX - lastMousemoveX, 2 ) +
							Math.pow( theEvent.offsetY - lastMousemoveY, 2 )
						)
					)
				);

				if ( mousemove[1] > 0 ) {
					// If there was no measurable distance, then it wasn't really a move.
					mousemoves.push( mousemove );
				}

				mousemoveStart = null;
				mousemoveTimer = null;
			}, 500, e, mousemoveStart );
		}, supportsPassive ? { passive: true } : false  );

		document.addEventListener( 'touchmove', function ( e ) {
			if ( touchmoveCountTimer ) {
				clearTimeout( touchmoveCountTimer );
			}

			touchmoveCountTimer = setTimeout( function () {
				touchmoveCount++;
			}, 500 );
		}, supportsPassive ? { passive: true } : false );

		document.addEventListener( 'touchstart', function ( e ) {
			lastTouchStart = ( new Date() ).getTime();
		}, supportsPassive ? { passive: true } : false );

		document.addEventListener( 'touchend', function ( e ) {
			if ( ! lastTouchStart ) {
				// If the touchstart happened before this script was loaded, but the touchend happened after...
				return;
			}

			var now = ( new Date() ).getTime();

			var touchEvent = [];
			touchEvent.push( now - lastTouchStart );

			if ( lastTouchEnd ) {
				touchEvent.push( lastTouchStart - lastTouchEnd );
			}

			touchEvents.push( touchEvent );

			lastTouchEnd = now;

			// Don't record this time as an interval between keypresses.
			lastKeydown = null;
			lastKeyup = null;
			keydowns = {};
		}, supportsPassive ? { passive: true } : false );

		document.addEventListener( 'scroll', function ( e ) {
			if ( scrollCountTimer ) {
				clearTimeout( scrollCountTimer );
			}

			scrollCountTimer = setTimeout( function () {
				scrollCount++;
			}, 500 );
		}, supportsPassive ? { passive: true } : false );
	}

	/**
	 * For the timing/coordinate data that is collected, don't send more than `limit` data points in the request.
	 * Choose a random slice and send those, with each batch separated by semicolons and the items in each batch
	 * separated by commas.
	 */
	function prepare_array_for_request( a, limit ) {
		if ( ! limit ) {
			limit = 100;
		}

		var rv = '';

		if ( a.length > 0 ) {
			var random_starting_point = Math.max( 0, Math.floor( Math.random() * a.length - limit ) );

			for ( var i = 0; i < limit && i < a.length; i++ ) {
				var entry = a[ random_starting_point + i ];
				rv += entry.join( ',' ) + ';';
			}
		}

		return rv;
	}

	if ( document.readyState !== 'loading' ) {
		init();
	} else {
		document.addEventListener( 'DOMContentLoaded', init );
	}
})();;
!function(){var e=document.currentScript;function t(t){var n=document.createElement("script"),o=e||document.getElementsByTagName("script")[0];n.setAttribute("async",!0),n.setAttribute("src",t),o.parentNode.insertBefore(n,o)}function n(e,t){return Element.prototype.matches?e.matches(t):Element.prototype.msMatchesSelector?e.msMatchesSelector(t):void 0}function o(e,t){if(e.closest)return e.closest(t);var o=e;do{if(n(o,t))return o;o=o.parentElement||o.parentNode}while(null!==o&&1===o.nodeType);return null}function i(e,t){for(var n=0;n<e.length;n++)t(e[n],n,e)}var r,s=".sharing-hidden .inner",a="data-sharing-more-button-id";function c(e){this.button=e,this.pane=o(e,"div").querySelector(s),this.openedBy=null,this.recentlyOpenedByHover=!1,c.instances.push(this),this.pane.setAttribute(a,c.instances.length-1),this.attachHandlers()}if(c.instances=[],c.hoverOpenDelay=200,c.recentOpenDelay=400,c.hoverCloseDelay=300,c.instantiateOrReuse=function(e){var t=o(e,"div").querySelector(s),n=t&&t.getAttribute(a),i=c.instances[n];return i||new c(e)},c.getButtonInstanceFromPane=function(e){var t=e&&e.getAttribute(a);return c.instances[t]},c.closeAll=function(){for(var e=0;e<c.instances.length;e++)c.instances[e].close()},c.prototype.open=function(){var e,t,n=[0,0];function o(e){var t=e.getBoundingClientRect();return[t.left+(window.scrollX||window.pageXOffset||0),t.top+(window.scrollY||window.pageYOffset||0)]}function i(e,t){return parseInt(getComputedStyle(e).getPropertyValue(t)||0)}for(e=o(this.button),t=this.button.offsetParent||document.documentElement;t&&(t===document.body||t===document.documentElement)&&"static"===getComputedStyle(t).getPropertyValue("position");)t=t.parentNode;t&&t!==this.button&&1===t.nodeType&&(n=[(n=o(t))[0]+i(t,"border-left-width"),n[1]+i(t,"border-top-width")]);var r,s=e[0]-n[0]-i(this.button,"margin-left"),a=e[1]-n[1]-i(this.button,"margin-top");this.pane.style.left=s+"px",this.pane.style.top=a+this.button.offsetHeight+3+"px",(r=this.pane)&&r.style.removeProperty("display")},c.prototype.close=function(){var e;(e=this.pane)&&(e.style.display="none"),this.openedBy=null},c.prototype.toggle=function(){var e;(e=this.pane)&&"none"!==e.style.display?this.close():this.open()},c.prototype.nonHoverOpen=function(){clearTimeout(this.openTimer),clearTimeout(this.closeTimer),this.recentlyOpenedByHover?(this.recentlyOpenedByHover=!1,clearTimeout(this.hoverOpenTimer),this.open()):this.toggle()},c.prototype.resetCloseTimer=function(){clearTimeout(this.closeTimer),this.closeTimer=setTimeout(this.close.bind(this),c.hoverCloseDelay)},c.prototype.attachHandlers=function(){this.buttonClick=function(e){e.preventDefault(),e.stopPropagation(),this.openedBy="click",this.nonHoverOpen()}.bind(this),this.buttonKeydown=function(e){13!==e.keyCode&&32!==e.keyCode||(e.preventDefault(),e.stopPropagation(),this.openedBy="keydown",this.nonHoverOpen())}.bind(this),this.buttonEnter=function(){this.openedBy||(this.openTimer=setTimeout(function(){this.open(),this.openedBy="hover",this.recentlyOpenedByHover=!0,this.hoverOpenTimer=setTimeout(function(){this.recentlyOpenedByHover=!1}.bind(this),c.recentOpenDelay)}.bind(this),c.hoverOpenDelay)),clearTimeout(this.closeTimer)}.bind(this),this.buttonLeave=function(){"hover"===this.openedBy&&this.resetCloseTimer(),clearTimeout(this.openTimer)}.bind(this),this.paneEnter=function(){clearTimeout(this.closeTimer)}.bind(this),this.paneLeave=function(){"hover"===this.openedBy&&this.resetCloseTimer()}.bind(this),this.documentClick=function(){this.close()}.bind(this),this.button.addEventListener("click",this.buttonClick),this.button.addEventListener("keydown",this.buttonKeydown),document.addEventListener("click",this.documentClick),void 0===document.ontouchstart&&(this.button.addEventListener("mouseenter",this.buttonEnter),this.button.addEventListener("mouseleave",this.buttonLeave),this.pane.addEventListener("mouseenter",this.paneEnter),this.pane.addEventListener("mouseleave",this.paneLeave))},window.sharing_js_options&&window.sharing_js_options.counts){var u={done_urls:[],get_counts:function(){var e,n,o,i,r;if("undefined"!=typeof WPCOM_sharing_counts)for(e in WPCOM_sharing_counts)if(o=WPCOM_sharing_counts[e],void 0===u.done_urls[o]){for(i in n={pinterest:[window.location.protocol+"//api.pinterest.com/v1/urls/count.json?callback=WPCOMSharing.update_pinterest_count&url="+encodeURIComponent(e)]})if(document.querySelector("a[data-shared=sharing-"+i+"-"+o+"]")){for(;r=n[i].pop();)t(r);window.sharing_js_options.is_stats_active&&u.bump_sharing_count_stat(i)}u.done_urls[o]=!0}},update_pinterest_count:function(e){void 0!==e.count&&1*e.count>0&&u.inject_share_count("sharing-pinterest-"+WPCOM_sharing_counts[e.url],e.count)},inject_share_count:function(e,t){i(document.querySelectorAll("a[data-shared="+e+"] > span"),function(e){var n,o=e.querySelector(".share-count");(n=o)&&n.parentNode&&n.parentNode.removeChild(n);var i=document.createElement("span");i.className="share-count",i.textContent=u.format_count(t),e.appendChild(i)})},format_count:function(e){return e<1e3?e:e>=1e3&&e<1e4?String(e).substring(0,1)+"K+":"10K+"},bump_sharing_count_stat:function(e){(new Image).src=document.location.protocol+"//pixel.wp.com/g.gif?v=wpcom-no-pv&x_sharing-count-request="+e+"&r="+Math.random()}};window.WPCOMSharing=u}function d(e,t){e.setAttribute("jetpack-share-click-count",t)}function l(e){var t=e.getAttribute("jetpack-share-click-count");return null===t?0:parseInt(t,10)}function h(e,t){var n,o=new XMLHttpRequest;o.open("POST",e,!0),o.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8"),o.setRequestHeader("x-requested-with","XMLHttpRequest"),o.send((n=t,(encodeURIComponent("email-share-nonce")+"="+encodeURIComponent(n)).replace(/%20/g,"+")))}function p(){m()}function m(){window.WPCOMSharing&&window.WPCOMSharing.get_counts(),i(document.querySelectorAll(".sharedaddy a"),function(e){var t=e.getAttribute("href");t&&-1!==t.indexOf("share=")&&-1===t.indexOf("&nb=1")&&e.setAttribute("href",t+"&nb=1")}),i(document.querySelectorAll(".sharedaddy a.sharing-anchor"),function(e){c.instantiateOrReuse(e)}),void 0!==document.ontouchstart&&document.body.classList.add("jp-sharing-input-touch"),i(document.querySelectorAll(".sharedaddy ul"),function(e){"true"!==e.getAttribute("data-sharing-events-added")&&(e.setAttribute("data-sharing-events-added","true"),i(e.querySelectorAll("a.share-print"),function(e){e.addEventListener("click",function(t){t.preventDefault(),t.stopPropagation();var n=e.getAttribute("href")||"",i=function(){if(-1===n.indexOf("#print")){var e=(new Date).getTime();t=e,o=n,(i=document.createElement("iframe")).setAttribute("style","position:fixed; top:100; left:100; height:1px; width:1px; border:none;"),i.setAttribute("id","printFrame-"+t),i.setAttribute("name",i.getAttribute("id")),i.setAttribute("src",o),i.setAttribute("onload",'frames["printFrame-'+t+'"].focus();frames["printFrame-'+t+'"].print();'),document.body.appendChild(i)}else window.print();var t,o,i},r=o(e,s);if(r){var a=c.getButtonInstanceFromPane(r);a&&(a.close(),i())}else i()})}),i(e.querySelectorAll("a.share-press-this"),function(e){var t="wp-press-this-"+Math.random().toString(36).slice(2);e.addEventListener("click",function(n){n.preventDefault(),n.stopPropagation();var o="";if(window.getSelection?o=window.getSelection():document.getSelection?o=document.getSelection():document.selection&&(o=document.selection.createRange().text),o){var i=e.getAttribute("href");e.setAttribute("href",i+"&sel="+encodeURI(o))}window.open(e.getAttribute("href"),t,"toolbar=0,resizable=1,scrollbars=1,status=1,width=720,height=570")||(document.location.href=e.getAttribute("href"))})}),i(e.querySelectorAll("a.share-email"),function(t){d(t,0);var n,o,r=t.getAttribute("data-email-share-nonce"),s=t.getAttribute("data-email-share-track-url");r&&s&&(n=s,o=window.location.protocol+"//"+window.location.hostname+"/",0===String(n).indexOf(o))&&t.addEventListener("click",function(){var n;d(n=t,l(n)+1),l(t)>2&&function(e,t){var n=t.parentElement;if(n.classList.contains("sd-content")){i(n.querySelectorAll(".share-email-error"),function(e){e.parentElement.removeChild(e)});var o=document.createElement("div");o.className="share-email-error";var r=document.createElement("h6");r.className="share-email-error-title",r.innerText=e.getAttribute("data-email-share-error-title"),o.appendChild(r);var s=document.createElement("p");s.className="share-email-error-text",s.innerText=e.getAttribute("data-email-share-error-text"),o.appendChild(s),n.appendChild(o)}}(t,e),h(s,r)})}))}),i(document.querySelectorAll("li.share-email, li.share-custom a.sharing-anchor"),function(e){e.classList.add("share-service-visible")})}"loading"!==document.readyState?p():document.addEventListener("DOMContentLoaded",p),document.body.addEventListener("is.post-load",m);var f={};!0!==window.WPCOM_sharing_popups_bound&&(document.body.addEventListener("click",function(e){var t=e.target;if(t&&1===t.nodeType){var n=function(e){if("A"===e.nodeName)return e;var t=e.parentNode;return t&&"A"===t.nodeName?t:null}(t);if(n){var o=function(e){var t=window.WPCOM_sharing_popups;if(!t)return null;for(var n="share-",o=(e.getAttribute("class")||"").split(/\s+/),i=0;i<o.length;i++)if(0===o[i].indexOf(n)){var r=o[i].slice(6);if("string"==typeof t[r])return r}return null}(n);o&&(e.preventDefault(),r&&r.close(),r=window.open(n.getAttribute("href"),function(e){return"string"!=typeof f[e]&&(f[e]="wpcom"+e+"-"+Math.random().toString(36).slice(2)),f[e]}(o),window.WPCOM_sharing_popups[o]))}}}),window.WPCOM_sharing_popups_bound=!0)}();;
