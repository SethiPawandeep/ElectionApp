//#!/bin/env node
//  OpenShift sample Node application
var express = require('express');
var fs = require('fs');
var pgp = require('pg-promise')({});

var cn = {
    host: 'localhost',
    port: 5432,
    database: 'postgres',
    user: 'postgres',
    password: 'ips'
};
var DB = pgp(cn);


/**
 *  Define the sample application.
 */
var SampleApp = function () {
    "use strict";
    //  Scope.
    var self = this;


    /*  ================================================================  */
    /*  Helper functions.                                                 */
    /*  ================================================================  */

    /**
     *  Set up server IP address and port # using env variables/defaults.
     */
    self.setupVariables = function () {
        //  Set the environment variables we need.
        self.ipaddress = process.env.OPENSHIFT_NODEJS_IP;
        self.port = process.env.OPENSHIFT_NODEJS_PORT || 8080;

        if (typeof self.ipaddress === "undefined") {
            //  Log errors on OpenShift but continue w/ 127.0.0.1 - this
            //  allows us to run/test the app locally.
            console.warn('No OPENSHIFT_NODEJS_IP var, using 127.0.0.1');
            self.ipaddress = "127.0.0.1";
        }
    };


    /**
     *  Populate the cache.
     */
    self.populateCache = function () {
        if (typeof self.zcache === "undefined") {
            self.zcache = {
                'index.html': ''
            };
        }

        //  Local cache for static content.
        self.zcache['index.html'] = fs.readFileSync('./index.html');
    };


    /**
     *  Retrieve entry (content) from cache.
     *  @param {string} key  Key identifying content to retrieve from cache.
     */
    self.cache_get = function (key) {
        return self.zcache[key];
    };


    /**
     *  terminator === the termination handler
     *  Terminate server on receipt of the specified signal.
     *  @param {string} sig  Signal to terminate on.
     */
    self.terminator = function (sig) {
        if (typeof sig === "string") {
            console.log('%s: Received %s - terminating sample app ...',
                Date(Date.now()), sig);
            pgp.end();
            process.exit(1);
        }
        console.log('%s: Node server stopped.', Date(Date.now()));
    };


    /**
     *  Setup termination handlers (for exit and a list of signals).
     */
    self.setupTerminationHandlers = function () {
        //  Process on exit and signals.
        process.on('exit', function () {
            self.terminator();
        });

        // Removed 'SIGPIPE' from the list - bugz 852598.
        [
            'SIGHUP', 'SIGINT', 'SIGQUIT', 'SIGILL', 'SIGTRAP', 'SIGABRT',
            'SIGBUS', 'SIGFPE', 'SIGUSR1', 'SIGSEGV', 'SIGUSR2', 'SIGTERM'
        ].forEach(function (element, index, array) {
            process.on(element, function () {
                self.terminator(element);
            });
        });
    };


    /*  ================================================================  */
    /*  App server functions (main app logic here).                       */
    /*  ================================================================  */

    /**
     *  Create the routing table entries + handlers for the application.
     */
    self.createRoutes = function () {
        self.routes = {};

        self.routes['/asciimo'] = function (req, res) {
            var link = "http://pmindia.gov.in/wp-content/uploads/2014/06/High1.jpg";
            res.send("<html><body><img src='" + link + "'></body></html>");
        };

        self.routes['/'] = function (req, res) {
            res.setHeader('Content-Type', 'text/html');
            res.send(self.cache_get('index.html'));
        };
        self.routes['/candidate'] = function(req, res) {
            var link = "'https://lh3.googleusercontent.com/-UAu_0KbEMuHuMlccGwZtAo-bdM3Uo5Zr3RdEJUnDZsABV6tDUDe0ttdk-mtawAV6OY=w300'";
            DB.any('SELECT ' + link + ' as img_url, ca.*, co.constituency as constituency from candidate ca inner join constituency co on ca.constituency_id = co.constituency_id')
                .then(function(data){
                res.json(data);
            })
        }
        
           self.routes ['/citizen'] = function(req, res) {
            
            if(req.query.aadharNumber){
                console.log(req.query.aadharNumber);
            }
            DB.any('SELECT (first_name, last_name, enrollment_id1, enrollment_id2, enrollment_id3, UIDI) from citizen where UIDI = ?1', req.query.aadharNumber)
                .then(function(data){
                res.json(data);
            })
            
        
    }
           
//               
//        self.routes['/voter'] = function(req, res) {
//            
//            console.log(req.body);
////            DB.any('INSERT INTO VOTER (UIDI, enrollment_id1, enrollment_id2, enrollment_id3, first_name, last_name) values(uidi, enrollment_id1, enrollment_id2, enrollment_id3, first_name, last_name)')
////                .then(function(data){
//                res.json(data);
//            })
//            
//        }
        };

         
        
        


    /**
     *  Initialize the server (express) and create the routes and register
     *  the handlers.
     */
    self.initializeServer = function () {
        var r;
        self.createRoutes();
        self.app = express();

        //  Add handlers for the app (from the routes).
        for (r in self.routes) {
            if (self.routes.hasOwnProperty(r)) {
                self.app.get(r, self.routes[r]);
            }
        }
        self.app.use('/ui', express.static('../Election-UI/www'));
    };


    /**
     *  Initializes the sample application.
     */
    self.initialize = function () {
        self.setupVariables();
        self.populateCache();
        self.setupTerminationHandlers();

        // Create the express server and routes.
        self.initializeServer();
    };


    /**
     *  Start the server (starts up the sample application).
     */
    self.start = function () {
        //  Start the app on the specific interface (and port).
        self.app.listen(self.port, self.ipaddress, function () {
            console.log('%s: Node server started on %s:%d ...',
                Date(Date.now()), self.ipaddress, self.port);
        });
    };

}; /*  Sample Application.  */



/**
 *  main():  Main code.
 */
var zapp = new SampleApp();
zapp.initialize();
zapp.start();