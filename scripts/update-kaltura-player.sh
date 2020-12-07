#!/bin/sh
git clone https://github.com/kaltura/kaltura-player-js.git
git checkout master
yarn install
repoName=$(npx -c 'echo "$npm_package_name"')
git commit --allow-empty -m "Trigger Build Canary from $repoName"
git push https://$1@github.com/kaltura/kaltura-player-js "master" > /dev/null 2>&1
