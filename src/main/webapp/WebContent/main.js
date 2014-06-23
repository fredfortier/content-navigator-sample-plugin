require(["dojo/_base/lang", "sample-plugin/CustomAddContentDialog"],
    function (lang, CustomAddContentDialog) {
        var FOLDER = '{7B2F8322-59D2-4C86-BAC6-5082F8483770}'; //Replace by a valid folder id in your repository
        var ENTRY_TEMPLATE = '{B3760C26-F1BF-434C-8BA5-F1B2D9965DA4}'; //Replace by a valid entry template id in your repository

        var addContentDialog = new CustomAddContentDialog();
        lang.setObject('addDocument', function (repository, items) {
            var onCreate = function (item) {
                console.log('item created successfully', item);
            };

            repository.retrieveItem(FOLDER, function (folder) {
                console.log('using the folder', folder);
                repository.retrieveItem(ENTRY_TEMPLATE, function (template) {
                    console.log('using the entry template', template);
                    addContentDialog.showUsingTemplateItem(repository, folder, true, false, onCreate, false, template);
                });
            });
        });
    });