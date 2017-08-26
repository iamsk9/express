var q = require('q');

var moment = require('moment');

var db = require('../../mysqldb');

var emailer = require('../emailer');

var config = require('../../config/config');

var bcrypt = require('bcrypt-nodejs');

var utils  = require('../utils');

var request = require('request');

var SALT_WORK_FACTOR = 19204;

exports.addClient = function(req) {
	var addClientDeferred = q.defer();
	var insertUser = "INSERT INTO user (name, pass) VALUES (?,?)";

	db.getConnection().then(function(connection) {
				console.log("Inside");
				connection.query(insertUser, [req.name, req.password], function(err, result) {
						if(err) {
							addClientDeferred.reject(err);
							connection.release();
							return;
						}
						console.log(result);
						addClientDeferred.resolve(result);
						connection.release();
					});
				}, function(err) {
					addClientDeferred.reject(err);
					return;
				});
				return addClientDeferred.promise;
			}

			exports.getDetails = function() {
				var getDetailsCountDefer = q.defer();
				request('http://jsonplaceholder.typicode.com/posts', function (error, response, body) {
				    if (!error && response.statusCode == 200) {
								getDetailsCountDefer.resolve(body);
				     }
						 else {
						 		getDetailsCountDefer.reject(err);
						 }
				});
				return getDetailsCountDefer.promise;
			}
