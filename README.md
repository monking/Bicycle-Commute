# Bicycle Commute - Hack for LA 2014 May 31

## Concept

[concept gist](https://gist.github.com/monking/c0f68340eba759258d4b)

## Recommendations

[Dijkstra's algorithm - find shortest route](http://en.wikipedia.org/wiki/Dijkstra's_algorithm)


## Dev nodes

TechStack
- EmberJS front end - http://emberjs.com/guides

- Bower - management of 3rd party dependencies.
- Node - starting local service for dev and testing purpose.

Tools
- Ember CLI - http://iamstef.net/ember-cli/ - tools and generators for developing webapp.


#Common commands

*Starts a server on local host

ember server

*Generate code stubs

ember generate template (name)
ember generate view (name)
ember generate controller (name)
ember generate route (name)


* Compile distribution version --
ember build dist

--- Setup Instructions ---
1. Install your operating envionrment.
Install NodeJS - 0.10.26 (use nvm to manage versions)
Install Bower (with -g)
Install Ember-Cli (with -g)

2. Clone this repo

3. Install dependencies.
npm install
bower install

4. Check if build scripts work.
ember server
(at this point, you shoudl be able to open a server on local host)



## Recommendations

[Dijkstra's algorithm - find shortest route](http://en.wikipedia.org/wiki/Dijkstra's_algorithm)
[Ionic mobile web Framework](http://ionicframework.com/)
[ratchet mobile framework](http://goratchet.com/)
[FastClick - eliminate 300ms delay on touch](https://github.com/ftlabs/fastclick)
