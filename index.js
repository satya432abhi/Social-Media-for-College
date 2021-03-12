const express = require('express');
const app = express();
const port = 8000;

// after downloading layouts using npm install express-ejs-layouts ,we require layouts

const expressLayouts = require('express-ejs-layouts');

app.use(express.static('./assets'));

//use the layouts
app.use(expressLayouts);
//extract styles and scripts from the subpages into the layouts
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);

//use express router
app.use('/', require('./routes/index'));


//setting up the view engine as ejs
app.set('view engine','ejs');
app.set('views','./views');

app.listen(port , function(err){
    
    if(err)
    {
       console.log(`Error in running the server: ${err}`);//by using interpolation method
    }

    console.log(`Server is running on the port : ${port} `);// ${ the value in this to be evaluated}

});

