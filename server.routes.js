var Pages = reqRoot('handlers/pagesHandler.js');
var Command = reqRoot('handlers/commandHandler.js');
var Authentication = reqRoot('handlers/authHandler.js');

exports.endpoints = [
    /* Says Hello World */
    {method: 'GET', path:'/', config:Pages.hello},

    /* Display terminal */
    {method : 'GET', path:'/term', config:Pages.terminal},
    /* Respond to command */
    
    {method : 'POST', path:'/term_cmd', config:Command.termCommand},
    /*** Authentification ***/
    {method: 'POST', path:'/auth/register', config:Authentication.register}
];