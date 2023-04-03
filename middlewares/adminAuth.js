function adminAuth(req,res,next){
    if(req.session.user !== undefined){
        next()
    }else{
        res.redirect('/admin/articles')
    }
}
module.exports = adminAuth