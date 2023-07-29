// Create web server, listen on port 8080

// Import Express module
const express = require('express');

// Create Express application
const app = express();

// Import body-parser module
const bodyParser = require('body-parser');

// Import Mongoose module
const mongoose = require('mongoose');

// Import Comment model
const Comment = require('./models/comment');

// Import Post model
const Post = require('./models/post');

// Import User model
const User = require('./models/user');

// Import Passport module
const passport = require('passport');

// Import Local Strategy module
const LocalStrategy = require('passport-local');

// Import Passport Local Mongoose module
const passportLocalMongoose = require('passport-local-mongoose');

// Import Method Override module
const methodOverride = require('method-override');

// Import Express Session module
const expressSession = require('express-session');

// Import Connect Flash module
const flash = require('connect-flash');

// Import Moment module
const moment = require('moment'); 
