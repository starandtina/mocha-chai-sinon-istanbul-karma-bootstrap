# Mocha + Chai + Sinon + Istanbul + Karma Bootstrap

# Introduction

This repo contains an example setup for testing your frontend JavaScript code with the tools below, and they have proven to be a great workflow for us so far. 

* [Mocha](http://mochajs.org/): a simple, flexible, fun javascript test framework for node.js & the browser, and support BDD, TDD, QUnit styles
* [Chai](http://chaijs.com/): a BDD / TDD assertion library for node and the browser that can be delightfully paired with any javascript testing framework
* [Sinon](http://sinonjs.org/): standalone test spies, stubs and mocks for JavaScript
No dependencies, works with any unit testing framework
* [Sinon-Chai](https://github.com/domenic/sinon-chai): extend Chai with assertions for the Sinon.JS mocking framework
* [Istanbul](http://gotwarlost.github.io/istanbul/): A amazing Javascript code coverage tool written in JS.
* [Karma](http://karma-runner.github.io): Spectacular Test Runner for JavaScript

# Install

    npm install -g grunt-cli
    npm install -g bower 
    npm install && bower install

# Run

    npm test

# Code Coverage Report

Open the code coverage report under the subdirectory `coverage`.

The tests are executed using [PhantomJS](http://phantomjs.org) and Chrome. It is easy to add [other browsers](http://karma-runner.github.io/0.10/config/browsers.html) as well.
