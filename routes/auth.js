const express = require('express');
const router = express.Router();
const passport = require('passport');
const User = require('../models/User');

// Signup route
router.post('/signup', (req, res, next) => {
    User.register(new User({ username: req.body.username, email: req.body.email }), req.body.password, (err, user) => {
        if (err) {
            console.error('Error signing up:', err);
            return res.redirect('/signup'); // Redirect to signup page on error
        }
        passport.authenticate('local')(req, res, () => {
            res.redirect('/'); // Redirect to home page after signup
        });
    });
});


// Login route
router.post('/login', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/login',
  failureFlash: true
}));

// Logout route
router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

// Google OAuth authentication routes
router.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
router.get('/auth/google/callback', passport.authenticate('google', { successRedirect: '/', failureRedirect: '/login' }));


module.exports = router;


