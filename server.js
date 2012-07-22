var flatiron = require('flatiron'),
    swig = require('swig'),
    connect = require('connect'),
    path = require('path'),
    app = flatiron.app;

app.config.file({ file: path.join(__dirname, 'config', 'config.json') });

app.use(flatiron.plugins.http, {
    before: [
        connect.static('public')
    ],

    after: []
});

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

app.router.get('/ko/simple_list', function () {
    var tmpl = swig.compileFile('ko/simple_list.html');
    var output = tmpl.render({});
    this.res.writeHead(200, { 'Content-Type': 'text/html;charset=UTF-8' });
    this.res.end(output);
});

app.router.get('/ko/better_list', function () {
    var tmpl = swig.compileFile('ko/better_list.html');
    var output = tmpl.render({});
    this.res.writeHead(200, { 'Content-Type': 'text/html;charset=UTF-8' });
    this.res.end(output);
});

app.router.get('/ko/paged_grid', function () {
    var tmpl = swig.compileFile('ko/paged_grid.html');
    var output = tmpl.render({});
    this.res.writeHead(200, { 'Content-Type': 'text/html;charset=UTF-8' });
    this.res.end(output);
});

app.router.get('/ko/contacts_editor', function () {
    var tmpl = swig.compileFile('ko/contacts_editor.html');
    var output = tmpl.render({});
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
