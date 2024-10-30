Draw.loadPlugin(function(ui) {
    ui.actions.addAction('myOrganicFlow', function() {
        var e = ui.editor.graph;
        var layout = new mxFastOrganicLayout(e);
        layout.execute(e.getDefaultParent());
    }, null, null, "Ctrl+Shift+Q");

    ui.keyHandler.bindAction(81, !0, "myOrganicFlow", !0);
});
