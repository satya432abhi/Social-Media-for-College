module.exports.profile = function(req,res)
{
    return res.render('users_profile');
}
module.exports.Contact = function(req,res)
{
    return res.end('<h1>My Contacts</h1>');
}