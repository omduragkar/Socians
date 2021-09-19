const User= require('../models/user');
module.exports.signin= function(req,res)
{
    console.log(req.cookies.user_id);
    if(req.cookies.user_id)
    {
        return res.redirect('/user/profile');
    }
    else
    {
        res.render('signin');
    }
}
module.exports.signup= function(req,res)
{
    // console.log(req.body);
    console.log(req.cookies.user_id);
    if(req.cookies.user_id)
    {
        return res.redirect('/user/profile');
    }
    else
    {
        res.render('signup');
    }
}
module.exports.create= function(req,res)
{
    console.log(req.body);
    //Yet to be completed
    console.log()
    if(req.body.password != req.body.confirmpass)
    {
        return res.redirect('/user/signup');
    }
    User.findOne({email: req.body.email}, function(err, user)
    {
        if(err)
        {
            console.log('error in finding user');
            return;
        }
        if(!user)
        {
            User.create(req.body,function(err,user)
            {
                if(err)
                {
                    console.log('error in finding user in sign-up');
                    return;
                }
                return res.redirect('/user/signin');
            })
        }
        else{
            
            return res.redirect('/user/signup');
        }
    })
}
module.exports.createSession= function(req,res)
{
    User.findOne({email: req.body.email}, function(err, user)
    {
        if(err){console.log('error finding user');return}
        if(user)
        {
            if(req.body.password != user.password)
            {
                res.redirect('/user/signin');
            }
            else
            {
                res.cookie('user_id', user.id);
                return res.redirect('/');
            } 
            
        }
        else{
            res.redirect('/user/signup');
        }

    });  
}