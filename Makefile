NPM:=$(shell if yarn --version >/dev/null 2>&1; then echo -n yarn; elif npm --version >/dev/null 2>&1; then echo -n npm; else echo -n yarn; fi)

.PHONY: all
all: dist/bundle.js

.PHONY: node_modules
node_modules: package.json
	$(NPM) install

.PHONY: dist/bundle.js
dist/bundle.js: node_modules
	$(NPM) run webpack

.PHONY: distclean
distclean:
	$(RM) -rf node_modules
