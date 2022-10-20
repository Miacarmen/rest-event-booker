const jwt = require('jsonwebtoken');

const secret = 'shhh';
const expiration = '2h';

module.exports = {
    // function for our authenticated routes
    authMiddleware: function ({ req, res }) {
        let token = req.body.token || req.headers.authorization

        if(req.headers.authorization) {
            token = token.split(' ').pop().trim();
        }

        if(!token) {
            return req;
        }
        // if token can be verified, add decoded u ser's data to the request
        try {
            const { data } = jwt.verify(token, secret, { maxAge: expiration });
            req.user = data;
        } catch(err) {
            res.status(500).json({ message: 'Invalid  token' });
        }
        return req;
    },
    signToken: function ({ email, _id }) {
        const payload = { email, _id };

        return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
    },
};