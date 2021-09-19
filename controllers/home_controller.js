const User= require('../models/user');
const Post= require('../models/post');
module.exports.home = function(req, res)
{
    var id= req.cookies.user_id;
    if(id)
    {
        User.findById(id,function(err, user)
        {
                console.log('inside inside'+ id);
                console.log('inside inside'+ user);
                if(user)
                {
                        console.log('inside inside Om' + user);
                        Post.find({}).populate('user').exec(function(err,post)
                        {
                            console.log(post);
                            console.log(user);
                            return res.render('profilehome',{
                                    fname: user.fname,
                                    lname: user.lname,
                                    email: user.email,
                                    content: post
                            })

                        });
                }
                else
                {
                        return res.redirect('/user/signin');
                }
        })

    }
    else{
        return res.render('home');
    }
}

module.exports.thanks = function(req, res)
{
    return res.render('thanks');
}