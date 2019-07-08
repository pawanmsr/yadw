POS Tagging on Web
==================

Learning to deploy models on web  
Nothing special, individual practice work

Overview
--------

An API to host webpage with part of speech tagging application. It contains commands to handle timeout, limit memory usage, and restart server. The wabpage is mostly static with *ajax* flavoured *javascript* for POST request.

*Flask* and *SpaCy* for python backend  
*uWSGI* for hosting and *Supervisor* for process control

Requirements
------------

- python 3
- flask
- spacy
- uwsgi
- supervisor

Instructions
------------

To locally host the web app, simply enter `supervisord -c supervisor` on terminal active in repository directory. The defaut port is 9000 (see **main.ini** file for more info)