#!/usr/bin/env make

all:	index.js.hint haiku.js.hint wiki.js.hint index.css.lint
	jsdoc index.js haiku.js wiki.js
	echo "Choose a javascript unit testing framework and use it."

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
