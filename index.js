const express = require('express');
const app = express();
const port = 8000;


//use express router
app.use('/', require('./routes/index'));

app.listen(port , function(err){
    
    if(err)
    {
       console.log(`Error in running the server: ${err}`);//by using interpolation method
    }

    console.log(`Server is running on the port : ${port} `);// ${ the value in this to be evaluated}

});

