App Template
============

This is a template for development of a single-page HTML application.
It is a toy "To Do list" application serving as a reference for a
working toolchain and combination of libraries.


Toolchain/Features
------------------

* Build system: make & webpack
* Language: Typescript (with JSX)
* View: React
* State: Redux, persisted in local storage (via localForage)
* Stylesheets: SASS
* Code quality: tslint
* Autotests: jest, testcheck (with coverage report)
* Configured for Visual Studio Code

Requirements
------------

* GNU make
* yarn or npm in PATH

Building
--------

Run `make` to build.

Run `make dev-server` to run development server with hot reload.

Run `make distclean` to remove all build artifacts.

Run `make check` to run checks (build, lint, autotests) and
find coverage report in `coverage/remapped/html/index.html`.

Recommended VS Code Extensions
------------------------------

These will work well with projects built from this template:

* `tslint` - run tslint and show/auto-fix problems
* `typescript-hero` - find/add/autocomplete importable symbols
