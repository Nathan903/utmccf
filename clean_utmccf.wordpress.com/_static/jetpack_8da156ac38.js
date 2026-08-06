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
