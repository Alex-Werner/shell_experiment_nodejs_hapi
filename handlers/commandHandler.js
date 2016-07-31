var CommandHandler = {
    termCommand:{
        handler:function(request, reply){
            var payload = request.payload;
            if(payload && payload.command){
                var cmd = payload.command;

                const spawn = require('child_process').spawn;
                const bat = spawn('cmd', ['/c',cmd]);
                var data = null;
                
                bat.on('data',function(_data){
                 // data =+_data;
                    console.log('data');

                    // console.log("StdOut",data.toString('utf8'));
                    // console.log("StdOut",data);
                });
                bat.stdin.on('data',function(_data){
                    console.log('stdinData');
                });bat.stdout.on('data',function(_data){
                    data = _data.toString('utf8');
                    console.log(_data);
                    console.log(_data.toString());
                    console.log(_data.toString('utf8'));
                });
                // bat.stderr.on('data',function(data){
                //     console.log("STDERR",data);
                // });
                bat.on('exit',function(code){
                    console.log('Fini avec code', code);
                    console.log("Data généré :", data);
                    // data.replace(/[\r]/g, '');
                    return reply({resCmd:data});

                });
                
            //     bat.stdout.on('data', (data) => {
            //         console.log(data);
            // });
            //
            //     bat.stderr.on('data', (data) => {
            //         console.log(data);
            // });
            //
            //     bat.on('exit', (code) => {
            //         console.log(`Child exited with code ${code}`);
            // });
            //    
                console.log("Asked for command ",cmd);
            }
            
            // return reply({'message':'Hello W0rld!'});
        }
    }
};
module.exports =CommandHandler;