# Bicycle Commute - Hack for LA 2014 May 31

## Concept

[concept gist](https://gist.github.com/monking/c0f68340eba759258d4b)

## Dev nodes

TechStack
- EmberJS front end - http://emberjs.com/guides

Tools
- Ember CLI - http://iamstef.net/ember-cli/


## Common commands

Starts a server on local host

    ember server

Generate code stubs

    ember generate template (name)
    ember generate view (name)
    ember generate controller (name)
    ember generate route (name)

Compile distribution version

    ember build dist

Setup Instructions
1. Install your operating envionrment.
  - Install NodeJS - 0.10.26 (use nvm to manage versions)
  - Install Bower (with -g)
  - Install Ember-Cli (with -g)
2. Clone this repo
3. Install dependencies.
      npm install
      bower install

4. Check if build scripts work.

      ember server

(at this point, you should be able to open a server on local host)

## git deployment

Replace `/var/www/bikeplusplus` with your production git working copy.

`/var/log/bikeplusplus.log` must be writable by the git user on the production server.

In a bare git repository's `hooks/post-receive` file:

```
#!/bin/bash
cd /var/www/bikeplusplus

env -u GIT_DIR git fetch origin
env -u GIT_DIR git reset --hard origin/master

. /home/git/.nvm/nvm.sh
nvm use v0.11.12

npm install
killall ember &> /dev/null
npm start &> /var/log/bikeplusplus.log &

echo server started
```

## Recommendations

[Dijkstra's algorithm - find shortest route](http://en.wikipedia.org/wiki/Dijkstra's_algorithm)
[Ionic mobile web Framework](http://ionicframework.com/)
[ratchet mobile framework](http://goratchet.com/)
[FastClick - eliminate 300ms delay on touch](https://github.com/ftlabs/fastclick)
