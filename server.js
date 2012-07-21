var flatiron = require('flatiron'),
    swig = require('swig'),
    path = require('path'),
    app = flatiron.app;

app.config.file({ file: path.join(__dirname, 'config', 'config.json') });

app.use(flatiron.plugins.http);

swig.init({
    root: __dirname + '/views',
    cache: false
});

// Custom plugin to say just hello world
var helloworld = require('./lib/plugins/helloworld.js');
app.use(helloworld);

app.router.get('/', function () {
    var tmpl = swig.compileFile('top.html');
    var data = { "greet": "こんにちは世界" };
    var output = tmpl.render(data);

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
