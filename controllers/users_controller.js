const User = require('../models/user');

module.exports.profile = function(req,res)
{
    return res.render('user_profile',{
                        title: "User Profile",
                    });
    //checking cookies before rendering
    //so that without sign-in this page is not accessible
    // if(req.cookies.user_id){
    //     User.findById(req.cookies.user_id, function(err,user){
    //         if(user){
    //             return res.render('user_profile',{
    //                 title: "User Profile",
    //                 user: user
    //             })
    //         }
    //         return res.redirect('/users/sign-in');
    //     });
    // }
    // else{
    //     return res.redirect('/users/sign-in');
    // }
    
}
module.exports.Contact = function(req,res)
{
    return res.end('<h1>My Contacts</h1>');
}

//render the signUp page
module.exports.signUp= function(req,res)
{
    if(req.isAuthenticated())
    {
        return res.redirect('/users/profile');
    }
    return res.render('user_sign_up',{
        title:"Codeial|Sign Up"
    })
}

//render the signIn page
module.exports.signIn= function(req,res)
{
    if(req.isAuthenticated())
    {
        return res.redirect('/users/profile');
    }

    return res.render('user_sign_in',{
        title:"Codeial|Sign In"
    })
}

//get the sign-up data
module.exports.create = function(req,res){
    if(req.body.password!=req.body.confirm_password)
    {
        return res.redirect('back');
    }
    User.findOne({email:req.body.email},function(err,user){
        if(err){
            console.log('error in finding user in signing up');
            return;
        }
        if(!user){
            User.create(req.body,function(err,user){
                if(err){
                    console.log('error in creating user while signing up');
                    return;
                }
                return res.redirect('/users/sign-in');
            })
        }
            else{
                return res.redirect('back');
            }

    })
}

//sign in and create a session for the user
module.exports.createSession = function(req,res){
 // these are for manual authentication

    // //steps to authenticate
    // //find the user
    // User.findOne({email:req.body.email},function(err,user){
    //     if(err){
    //         console.log('error in creating user while signing In');
    //         return;
    //     }
    //      //handle user found
    //      if(user)
    //      {
    //          //handle passwords which doesn't match
    //          if(user.password!=req.body.password)
    //          {
    //              return res.redirect('back');
    //          }
    //          //handle session creation
    //          res.cookie('user_id',user.id);
    //          return res.render('user_profile',{
    //             title: "User Profile",
    //             user: user
    //         })
    //      }
    //      else{
    //           //handle user not found
    //           return res.redirect('back');
    //      }
    // })        

//for authentication using passport.js
    return res.redirect('/');
}

module.exports.destroySession = function(req,res){
    req.logout();//this funct is given to req using passport.js
    return res.redirect('/');
}