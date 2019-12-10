const router = require('express').Router();

const authCheck = (req, res, next) => {
    if (!req.user) {
        //if user is not logged in
        res.redirect('auth/login');
    } else {
        //if logged in continue
        next();
    }
}

router.get('/', authCheck, (req, res) => {
    res.redirect('/dashboard/' + req.user.id);
})

module.exports = router;