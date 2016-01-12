# Change Log
All notable changes to this project will be documented in this file.

## [0.2.2] - 2016-01-11
## Added
- A workaround to make sure an element is visible before continuing in end to end tests

## Fixes
- Race condition on static assets building in end to end tests

## [0.2.1] - 2016-01-10
## Added
- Bash script `bin/test` to automatically start web driver and test

## [0.2.0] - 2016-01-10
### Added
- E2E testing

## Fixed
- Leaving behind .tpl files in the generated project

## [0.1.0] - 2016-01-08
### Added
- Testing

## [0.0.2] - 2015-12-22
## Removed
- The prompt asking for a project name. Instead of running `yo phoenix-react` run `yo phoenix-react my-project-name` where `my-project-name` is the desired name of the project.

## Fixed
- Atom names not being converted to snake case
