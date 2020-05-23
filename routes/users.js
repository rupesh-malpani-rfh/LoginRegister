const express = require('express');
const config = require('config');
const jwt = require('jsonwebtoken');
const router = express.Router();
const bcrypt = require('bcryptjs');
const { check, validationResult } = require('express-validator');

const User = require('../models/User');

// @route     POST api/users
// @desc      Regiter a user
// @access    Public

router.post('/',
    [
        [
            check('fname', 'Please add first name')
                .not()
                .isEmpty(),
            check('lname', 'Please add last name')
                .not()
                .isEmpty(),
            check('email', 'Please include a valid email').isEmail(),
            check(
                'password',
                'Please enter a password with 6 or more characters',
            ).isLength({ min: 6 }),
        ],
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { fname, lname, email, password } = req.body;

        try {
            let user = await User.findOne({ email });

            if (user) {
                return res.status(400).json({ msg: 'User already exists' });
            }

            user = new User({
                fname,
                lname,
                email,
                password
            });

            const salt = await bcrypt.genSalt(10);

            user.password = await bcrypt.hash(password, salt);

            await user.save();

            const payload = {
                user: {
                    id: user.id
                }
            }

            jwt.sign(payload, config.get('jwtSecret'),
                {
                    expiresIn: 36000
                },
                (err, token) => {
                    if (err) throw err;
                    res.json({ token: token })
                }
            );
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error');
        }
    });

module.exports = router;