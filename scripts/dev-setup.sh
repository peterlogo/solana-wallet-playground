#!/bin/bash -e

# Author: Peter Logo
# Description: Installs project development dependencies.
#
#
# install typescript
echo "Installing typescript and its dependencies ..."
yarn add -D typescript ts-node
touch tsconfig.json
echo "Typescript successfully installed ..."

# install node type definitions
echo "Installing node type definitions ..."
yarn add -D @types/node
echo "Node type definitions successfully installed ..."

# install code formatter: prettier
echo "Installing prettier and its dependencies ..."
yarn add -D prettier
touch .prettierrc
echo "Eslint successfully installed ..."

# install nodemon
echo "Installing nodemon and its dependencies ..."
yarn add -D nodemon
touch nodemon.json
echo "Nodemon successfully installed ..."

# install concurrently
echo "Installing concurrently and its dependencies ..."
yarn add -D concurrently
echo "Concurrently successfully installed ..."

# install linter: eslint
echo "Installing eslint and its dependencies ..."
yarn add -D eslint eslint-config-prettier eslint-plugin-prettier
touch .eslintignore .eslintrc
echo "Eslint successfully installed ..."

# install eslint type defintions
echo "Installing eslint type definitions ..."
yarn add -D @typescript-eslint/eslint-plugin @typescript-eslint/parser
echo " Eslint type definitions successfully installed ..."

# install documentation: typedoc
echo "Installing typedoc and its dependencies ..."
yarn add -D typedoc
touch typedoc.json
echo "Typedoc successfully installed ..."

# installing supporting packages
echo "Installing packages ..."
yarn add axios lodash dotenv
yarn add -D @types/lodash
echo "Packages successfully installed ..."