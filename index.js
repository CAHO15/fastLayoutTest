Draw.loadPlugin(function(ui) {
    mxResources.parse('myOrganicFlow=OrganicFlow');
    ui.actions.addAction('myOrganicFlow', function() {
        var e = ui.editor.graph;
        var layout = new mxFastOrganicLayout(e);
        layout.execute(e.getDefaultParent());
        console.log("sometest");
    }, null, null, "Ctrl+Shift+Q");

    ui.keyHandler.bindAction(81, !0, "myOrganicFlow", !0);
    ui.menubar.addMenu('My Menu', function(menu, parent) {
        ui.menus.addMenuItem(menu, 'myOrganicFlow');
    });
    ui.menubar.container.insertBefore(ui.menubar.container.lastChild,
    ui.menubar.container.lastChild.previousSibling.previousSibling);
});
