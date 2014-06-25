define([ "dojo/_base/declare", "dojo/dom-construct", "ecm/widgets/dialog/AddContentItemDialog" ],
    function (declare, domConstruct, AddContentItemDialog) {
        return declare('CustomAddContentItemDialog', [AddContentItemDialog], {
            postCreate: function () {
                this.inherited(arguments);
                console.log('overriding the postCreate function');
                domConstruct.place('<h1>Hello World!</h1>', this.domNode, 'first');
            }
        });
    });