var flatiron = require('flatiron'),
    plates = require('plates'),
    path = require('path'),
    app = flatiron.app;

app.config.file({ file: path.join(__dirname, 'config', 'config.json') });

app.use(flatiron.plugins.http);

app.router.get('/', function () {
    var html = '<html><h1 id="greet">Hello World</h1></html>';
    var data = { "greet": "こんにちは世界" };
    var output = plates.bind(html, data);
    this.res.writeHead(200, { 'Content-Type': 'text/html;charset=UTF-8' });
    this.res.end(output);
});

app.start(3000);
