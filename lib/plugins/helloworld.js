var HelloWorldPlugin = exports;

HelloWorldPlugin.name = 'hello-world-plugin';

HelloWorldPlugin.attach =  function() {
    this.hello = function(name) {
        name = name || "World";
        console.log("Hello, " + name);
    };
};

HelloWorldPlugin.init =  function(done) {
    return done();
};
