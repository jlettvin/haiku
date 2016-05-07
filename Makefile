#!/usr/bin/env make

all:	index.js.hint haiku.js.hint
	jsdoc index.js haiku.js

index.js.hint:	index.js Makefile
	jshint $< > $@
	@cat $@

haiku.js.hint:	haiku.js Makefile
	jshint $< > $@
	@cat $@
