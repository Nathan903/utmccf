# UTMCCF Project Handbook (Agent Instructions)

This repository generates a static mirror of a WordPress site (`utmccf.wordpress.com`) for hosting on Cloudflare Pages (`utmccf.com`).

## 🚫 ABSOLUTE RULES
* **NEVER commit built HTML.** The live site is built automatically via a GitHub Actions CI/CD pipeline.
* **ONLY commit source scripts** (e.g., `clonewebsite.py`, `.css` files in `manually_made_extra_files`). 
* **NEVER use `git commit -am` or `git add .`** without verifying what is being staged to prevent polluting the repo with the `clean_utmccf.wordpress.com` directory.

## 💻 CORE WORKFLOW
* **Build Site Locally:** Run `python clonewebsite.py --downloadAgain` (Requires `wget` installed locally).
* **Test Local Build:** Start a local HTTP server in the output directory: `python test_website.py`

## 🏗️ ARCHITECTURE & KNOWN QUIRKS

### 1. Wget Query Params & Cloudflare MIME Types (The `@` Bug)
* **The Architecture:** `wget --restrict-file-names=windows` downloads the site and converts query parameters from `?` to `@` (e.g., `script.js?v=1` -> `script.js@v=1`).
* **The Constraint:** Cloudflare Pages relies strictly on file extensions for HTTP `Content-Type`. Files with `@` suffixes are served as `application/octet-stream`, which browsers reject for scripts/styles.
* **The Solution:** In `clonewebsite.py`, we strip `@` and trailing query params from asset URLs in HTML using a regex pass (`re.sub(r'(\.\w{2,5})@[^"\'\s>)]+', r'\1', text)`). 
* **Jetpack Bundles:** Jetpack combined bundles (`/_static/??...`) are handled via `build_jetpack_mapping()`, which deterministicly hashes and copies the raw `index.html@%3F...` bundles into clean `.css`/`.js` files.

### 2. Client-Side Translation (OpenCC-JS)
* **Implementation:** The site uses `opencc-js` to handle Simplified-to-Traditional Chinese translation entirely client-side.
* **Language Attribute Hack:** WordPress natively outputs `<html lang="en">`, which causes `opencc-js` to skip translation. We dynamically force `document.documentElement.lang = 'zh-CN';` before executing `HTMLDict.convert()`.
* **Instant Toggle:** We use `HTMLDict.restore()` to revert to Simplified Chinese instantly without a page reload.
* **Menu Binding:** Since WordPress renders multiple navigation menus (desktop/mobile), we use `document.querySelectorAll` to bind the translation click event to *all* `.simplified_to_traditional_translation a` elements.

### 3. CSS Gradient Underlines
* **Implementation:** `manually_made_extra_files/extra.css` uses a CSS gradient hack for menu item hover underlines.
* **Constraint:** For the 2-character "繁體" button, a percentage-based background width stretched the underline too far. 
* **Solution:** We use a strict `2em 3px` size specifically for `.simplified_to_traditional_translation > a:hover` because Chinese characters are exactly `1em` wide.
