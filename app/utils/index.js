export function UserDisplayName(req){
    if(req.user){
        return req.user.displayName;
    }
    return '';
}

export function AuthGaurd(req, res, next){
    if(!req.isAuthenticated()){
        return res.redirect('/login');
    }
    next();
}

