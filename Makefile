NPM:=$(shell if yarn --version >/dev/null 2>&1; then echo -n yarn; elif npm --version >/dev/null 2>&1; then echo -n npm; else echo -n yarn; fi)

.PHONY: all
all: dist/bundle.js

.PHONY: node_modules
node_modules: package.json
	$(NPM) install $(INSTALL_ARGS)

.PHONY: dist/bundle.js
dist/bundle.js: node_modules
	$(NPM) run webpack -- $(WEBPACK_ARGS)

.PHONY: dev-server
dev-server: node_modules
	$(NPM) run dev-server -- $(DEV_SERVER_ARGS)

.PHONY: check
check: dist/bundle.js lint test

.PHONY: lint
lint: node_modules
	$(NPM) run tslint -- "src/**/*.tsx" "src/**/*.ts" $(LINT_ARGS)

.PHONY: test
test: node_modules
	$(NPM) test -- $(TEST_ARGS)

.PHONY: distclean
distclean:
	$(RM) -rf node_modules
