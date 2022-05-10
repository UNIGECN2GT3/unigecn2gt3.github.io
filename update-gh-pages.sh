#!/usr/bin/bash
cp dist/unigecn2-2022-gt3/browser/index.html dist/unigecn2-2022-gt3/browser/404.html
git subtree push --prefix dist/unigecn2-2022-gt3/browser/ origin gh-pages
