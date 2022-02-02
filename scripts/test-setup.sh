#!/bin/bash -e

# Author: Peter Logo
# Description: Installs project test framework and their
# dependencies.
#
# install test framework
echo "Installing test frameworks for project ..."
yarn add -D mocha chai chai-http nyc
echo "Done ..."

# install framework type defintions
echo "Installing type definitions ..."
yarn add -D @types/mocha @types/chai
echo "Done ..."