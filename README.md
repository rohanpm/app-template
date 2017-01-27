App Template
============

Toolchain/Features
------------------

* Build system: make & webpack
* Language: Typescript (with JSX)
* View: React
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
