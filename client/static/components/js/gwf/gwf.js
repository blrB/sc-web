GWFiComponent = {
    formats: ['format_gwf', 'format_gwfi'],
    factory: function(sandbox) {
        return new GWFiViewer(sandbox);
    }
};

var GWFiViewer = function(sandbox){
    this.sandbox = sandbox;
    this.container = '#' + sandbox.container;
    this.editor = new SCg.Editor();

    this.receiveData = function(data) {
        var dfd = new jQuery.Deferred();
        $(this.container).width(400).height(400);
        ScgObjectBuilder.scene = this.editor.scene;
        GwfTextLoader.load(data, this.editor.render);
        this.editor.scene.clearSelection();
        this.editor.leaveSelectAndZoomTool();
        dfd.resolve();
        return dfd.promise();
    };

    this.editor.init(
        {
            sandbox: sandbox,
            containerId: sandbox.container
        }
    );

    this.sandbox.eventDataAppend = $.proxy(this.receiveData, this);
    this.sandbox.updateContent();
};

SCWeb.core.ComponentManager.appendComponentInitialize(GWFiComponent);
