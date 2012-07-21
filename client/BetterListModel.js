(function(ko, global, undefined) {
    "use strict";

    global.BetterListModel = function(items) {
        this.itemToAdd = ko.observable("");

        this.allItems = ko.observableArray(items);

        this.selectedItems = ko.observableArray([]);

        this.addItem = function() {
            var item = this.itemToAdd();
            if (item.length < 1 ||
                this.allItems.indexOf(item) >= 0) {
                return;
            }

            this.allItems.push(item);
            this.itemToAdd("");
        };

        this.removeSelected = function() {
            this.allItems.removeAll(this.selectedItems());
            this.selectedItems([]);
        };

        this.sortItems = function() {
            this.allItems.sort();
        };
    };
}(ko, this));
