#Activity 2
Web Dev't Boilerplate Setup using Express (The other way!)

##Setup Steps
* ```$ node --version && npm --version && git --version && heroku --version```
* ```$ set path=%PATH%;yoursublimepath; && subl --version```
* ```$ git clone https://github.com/clydeatuic/webdevatuic.git reponame```. Note: reponame format ```lastname-MMDDYY```
* ```$ cd reponame```
* Create new github repository. Follow the reponame format e.g. ```Balaman-030217```.
* ```$ git add .```
* ```$ git commit -m "any message here"```
* ```$ git remote add reponame https://github.com/yourgithub-username/reponame.git```
* ```$ git push -u reponame master```
* ```$ heroku login```
* ```$ heroku create reponame```
* ```$ git push -u heroku master```
* ```$ heroku open```

##Development Steps
* ```$ git add . && git commit -m "any message here"```
* ```$ git push -u reponame master```
* ```$ node server.js```

##Deploy Steps
* ```$ git push -u heroku master && heroku open```
