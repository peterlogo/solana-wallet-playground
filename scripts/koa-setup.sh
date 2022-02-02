#!/bin/bash -e

# Author: Peter Logo
# Description: Installs Koajs web framework and its
# dependencies.
#
# install Koajs
echo "Installing Koa web framework for project ..."
yarn add koa koa-body koa-bunyan-logger koa-logger koa-router @koa/cors
echo "Koa successfully installed ..."

# install framework type defintions
echo "Installing type definitions ..."
yarn add -D @types/koa @types/koa-bunyan-logger @types/koa-logger
yarn add -D @types/koa__cors @types/koa-router
echo "Type definitions successfully installed ..."

