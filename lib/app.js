const Hapi = require('hapi');
const server = new Hapi.Server();

server.connection({
    host: 'localhost',
    port: 4000
});

server.route({
    method: 'GET',
    path: '/',
    handler: function(request, reply) {
        reply('Hapi World Hallelujah!');
    }
});

server.start((err) => {
    if(err) {
        throw err;
    }
    console.log('Server Running at: ${server.info.uri}');
});