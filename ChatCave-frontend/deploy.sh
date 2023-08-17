#!/usr/bin/env sh
set -e
npm bulid
cd dist

echo > .nojekyll
git init
git checkout -B main
git add -A
git commit -m 'deploy'

#git push -f https://github.com/fredjuma007/ChatCave.git main:gh-pages

cd -