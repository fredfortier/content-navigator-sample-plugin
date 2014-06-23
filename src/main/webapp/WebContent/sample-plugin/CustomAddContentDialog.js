define([ "dojo/_base/declare", "ecm/widgets/dialog/AddContentItemDialog" ],
    function (declare, AddContentItemDialog) {
        return declare('CustomAddContentItemDialog', [AddContentItemDialog], {
            postCreate: function () {
                this.inherited(arguments);
                console.log('overriding the postCreate function');
            }
        });
    });