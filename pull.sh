#!/usr/bin/env bash

cd `dirname $0`

git pull origin master
npm install
npm run build
