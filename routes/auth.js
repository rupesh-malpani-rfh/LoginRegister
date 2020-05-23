const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const config = require('config');
const bcrypt = require('bcryptjs');
const { check, validationResult } = require('express-validator');

const User = require('../models/User');

router.post('/',
    [
        check('email', 'Please include a valid email').isEmail(),
        check('password', 'Password is required').exists()
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { email, password } = req.body;

        try {
            let user = await User.findOne({ email });

            if (!user) {
                return res.status(400).json({ msg: 'Invalid Credentials - User does not exists' });
            }

            const isPswdMatch = await bcrypt.compare(password, user.password);

            if (!isPswdMatch) {
                return res.status(400).json({ msg: 'Invalid Credentials - Incorrect Password' });
            }

            const payload = {
                user: {
                    id: user.id,
                    fname: user.fname,
                    lname: user.lname,
                    email: user.email
                }
            }

            jwt.sign(payload, config.get('jwtSecret'),
                {
                    expiresIn: 36000
                },
                (err, token) => {
                    if (err) throw err;
                    res.json({ token: token })      // we are getting the token here
                });
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error');
        }
    });

module.exports = router;