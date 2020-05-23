const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const config = require('config');
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');
const User = require('../models/User');
const Profile = require('../models/Profile');

// @route       GET api/profile
// @desc        Get profile
// @access      Private      
router.get('/',
    async (req, res) => {
        var decoded = jwt.verify(req.headers['x-auth-token'], config.get('jwtSecret'))
        try {
            const user = await User.findOne({ user: decoded._id });
            if (user) {
                res.json(user);
            } else {
                res.send("no");
            }

            // const contacts = await Contact.find({ user: req.user.id }).sort({ date: -1 });
            // res.json(contacts);
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error');
        }
    });


module.exports = router;