const User= require('../models/user');
module.exports.user = function(req, res)
{
        var id= req.cookies.user_id;
        console.log(id);
        if(id)
        {
                console.log('inside'+ id);
                
                User.findById(id,function(err, user)
                {
                        console.log('inside inside'+ id);
                        console.log('inside inside'+ user);
                        if(user)
                        {
                                console.log('inside inside Om' + user);
                                return res.render('profile',{
                                        fname: user.fname,
                                        lname: user.lname,
                                        email: user.email,
                                        id: user._id,
                                        create: user.createdAt,
                                        update: user.updatedAt
                                });
                        }
                        else
                        {
                                return res.redirect('/user/signin');
                        }
                })
        }
        else
        {
                return res.redirect('/user/signin');
        }
}
module.exports.signOut = function(req, res)
{
        console.log(req.cookies.user_id);
        res.clearCookie('user_id');
        res.redirect('/');
}
module.exports.del = function(req, res)
{
        console.log(req.query.id);
        User.findByIdAndDelete(req.query.id, function(err)
        {
                if(err)
                {
                console.log('error');
                return;
                }
                return res.redirect('/user/signout');
        })
        // var conf = window.confirm("Do you really want to loose socians Family: ");
        // if(conf)
        // {
        //         var conf1 = window.confirm("Seriously, You want to go away from socians Family: ");
        //         if(conf1)
        //         {
        //         }
        //         else
        //         {
        //                 return res.redirect('user/profile');
        //         }
        // }
        // else{
        //         return res.redirect('user/profile');
        // }
}
const Post = require('../models/post');
module.exports.post =  function(req, res)
{
        console.log(req.body);
        console.log(req.cookies);
        Post.create({
                content: req.body.content,
                user: req.cookies.user_id
        }, function(err, post)
        {
                if(err)
                {
                        console.log('post error')
                        return
                }
                return res.redirect('/');
        })
}