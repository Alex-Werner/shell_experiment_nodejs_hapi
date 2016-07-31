var PagesHandler = {
    hello:{
        handler:function(request, reply){
                return reply({'message':'Hello W0rld!'});
        }
    },
    terminal:{
        handler:function(request, reply){
            reply.file(process.cwd()+"/public/terminal.html");
            // reply.file('/public/terminal.html');
        }
    }
}
module.exports = PagesHandler;