const express = require('express');

//after installing cookie-parser by "npm install cookie-parser"
const cookieParser = require('cookie-parser');

const app = express();
const port = 8000;

// after downloading layouts using npm install express-ejs-layouts ,we require layouts

const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');

//used for session cookie
const session=require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport-local-strategy');
const MongoStore= require('connect-mongo')(session);

const sassMiddleware = require('node-sass-middleware');
app.use(sassMiddleware({
    src:'./assets/scss',
    dest:'./assets/css',
    debug:true,
    outputStyle:'expanded',
    prefix:'/css'
}));

app.use(express.urlencoded());
app.use(cookieParser());

const { urlencoded } = require('express');
app.use(express.static('./assets'));

//use the layouts
app.use(expressLayouts);
//extract styles and scripts from the subpages into the layouts
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);




//setting up the view engine as ejs
app.set('view engine','ejs');
app.set('views','./views');

//mongo-store is used to store session cookie in the db
app.use(session({
    name: 'codeial',
    //TODO change the secret name before deployment in production
    secret:'blahsomething',
    saveUninitialized: false,
    resave:false,
    cookie:{
        maxAge: (1000 * 60* 100)
    },
    store:new MongoStore(
        {
            mongooseConnection : db,
            autoRemove : 'disabled'
        },
        function(err)
        {
            console.log(err || 'connect-mongodb setup ok');
        }
    )
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(passport.setAuthenticatedUser);

//use express router

app.use('/', require('./routes/index'));

app.listen(port , function(err){
    
    if(err)
    {
       console.log(`Error in running the server: ${err}`);//by using interpolation method
    }

    console.log(`Server is running on the port : ${port} `);// ${ the value in this to be evaluated}

});

