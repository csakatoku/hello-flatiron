var flatiron = require('flatiron'),
    plates = require('plates'),
    path = require('path'),
    app = flatiron.app;

app.config.file({ file: path.join(__dirname, 'config', 'config.json') });

app.use(flatiron.plugins.http);

// Custom plugin to say just hello world
var helloworld = require('./lib/plugins/helloworld.js');
app.use(helloworld);

app.router.get('/', function () {
    var html = '<html><h1 id="greet">Hello World</h1></html>';
    var data = { "greet": "こんにちは世界" };
    var output = plates.bind(html, data);

    app.hello("Flatiron");
    app.log.debug("request headers", this.req.headers);

    this.res.writeHead(200, { 'Content-Type': 'text/html;charset=UTF-8' });
    this.res.end(output);
});

app.router.get('/test/:name', function(name) {
    this.res.writeHead(200, { 'Content-Type': 'text/html;charset=UTF-8' });
    this.res.end('/test/' + name + '?_method=get');
});

app.router.post('/test/:name', function(name) {
    this.res.writeHead(200, { 'Content-Type': 'text/html;charset=UTF-8' });
    this.res.end('/test/' + name + '?_method=post');
});

app.router.get('/test', function() {
    this.res.writeHead(200, { 'Content-Type': 'text/html;charset=UTF-8' });
    this.res.end('/test');
});

app.start(3000);
