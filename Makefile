#!/usr/bin/env make

all:	index.js.hint haiku.js.hint index.css.lint
	jsdoc index.js haiku.js

.PHONY:
index.js.hint:	index.js Makefile
	jshint $< > $@
	@cat $@

.PHONY:
haiku.js.hint:	haiku.js Makefile
	jshint $< > $@
	@cat $@

.PHONY:
index.css.lint:	index.css Makefile
	csslint $< > $@
	@cat $@
