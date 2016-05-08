#!/usr/bin/env make

all:	index.js.hint haiku.js.hint wiki.js.hint index.css.lint
	jsdoc index.js haiku.js wiki.js
	echo "Choose a javascript unit testing framework and use it."
	echo "  == Useful links =="
	echo " === Makefile ==="
	echo "https://www.gnu.org/software/make/manual/html_node/Automatic-Variables.html"
	echo " === javascript ==="
	echo "http://usejsdoc.org/"
	echo "http://codeutopia.net/eslint-quickstart/"
	echo " === css ==="
	echo "http://webdesign.about.com/od/css/qt/tipcssmulticlas.htm"
	echo "http://csslint.net/about.html"
	echo "https://css-tricks.com/centering-css-complete-guide/"
	echo ""

.PHONY:
index.js.hint:	index.js Makefile
	jshint $< > $@
	@cat $@

.PHONY:
haiku.js.hint:	haiku.js Makefile
	jshint $< > $@
	@cat $@

.PHONY:
wiki.js.hint:	wiki.js Makefile
	jshint $< > $@
	@cat $@

.PHONY:
index.css.lint:	index.css Makefile
	csslint $< > $@
	@cat $@
