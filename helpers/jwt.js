//var { expressjwt: jwt } = require("express-jwt");
var { expressjwt: jwt } = require('express-jwt');
function authJwt(){
    const secret = process.env.secret;
    const api = process.env.API_URL;
     return jwt({
        secret,
        algorithms: ['HS256']
    }).unless({
        path: [
            `${api}/users/login`,
            `${api}/users`,
            `${api}/users/register`
            //{url: `${api}/products`, methods: ['GET', 'OPTIONS']}
        ]
    })
    
}
module.exports = authJwt;