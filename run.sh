#!/bin/bash

# PATH=$PATH:$(dirname $(realpath -s "$0"))/nodeLinux/bin
PATH=$(dirname $(realpath -s "$0"))/nodeLinux/bin:$PATH

cd ./mainApp/
npm i && npm run start
