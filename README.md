# Fun with ASTs

This repo is a code companion of the Changing code with code blog that was posted in June of 2017 on ILM's Super Developer blog.  It contains code that shows how to:

* write a babel plugin
* run a babel plugin against javascript file(s) and emit tranformed javascript
* run a babel plugin against javascript file(s) and update them __in place__ (codemod)
* test a babel plugin
* write an eslint rule
* test an eslint rule
* apply local eslint rules against your codebase (without having to install via npm)

## How to get started

Pull down this repo and install the package dependecies either via `npm install` or `yarn install`.  A `yarn.lock` file is included in the repo so you're likely to have less problems with dependencies if you use yarn.

## Scripts

The following scripts can be run (either using `npm run SCRIPT` or `yarn run SCRIPT`) to see these tools in action:
* `test` - runs all test files (in babel and eslint folders)
* `lint` - runs eslint using local eslint rule against `eslint/src` directory
* `babel:codemod` - runs babel plugins against UPDATE THIS! to update src files _in place_, essentially using babel as a codemod utility
* `babel:transform` - runs babel plugins against UPDATE THIS source files and emits the altered javascript files to the `babel-dist` folder in project root