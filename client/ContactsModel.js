(function(ko, $, global, undefined) {
    "use strict";

    global.ContactsModel = function(contacts) {
        var self = this;

        self.contacts = ko.observableArray(ko.utils.arrayMap(contacts, function(x) {
            return {
                firstName: x.firstName,
                lastName: x.lastName,
                phones: ko.observableArray(x.phones)
            };
        }));

        self.addContact = function() {
            self.contacts.push({
                firstName: "",
                lastName: "",
                phones: ko.observableArray()
            });
        };

        self.removeContact = function(contact) {
            self.contacts.remove(contact);
        };

        self.addPhone = function(contact) {
            contact.phones.push({
                type: "",
                number: ""
            });
        };

        self.removePhone = function(phone) {
            $.each(self.contacts(), function() {
               this.phones.remove(phone);
            });
        };

        self.save = function() {
            self.lastSavedJson(JSON.stringify(ko.toJS(self.contacts), null, 2));
        };

        self.lastSavedJson = ko.observable("");
    };
}(ko, jQuery, this));
