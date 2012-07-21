(function(ko, global, undefined) {
    "use strict";

    global.SimpleListModel = function(items) {
        this.items = ko.observableArray(items);
        this.itemToAdd = ko.observable("");
        this.addItem = function() {
            if (this.itemToAdd() !== "") {
                this.items.push(this.itemToAdd());
                this.itemToAdd("");
            }
        }.bind(this);
    };
}(ko, this));
