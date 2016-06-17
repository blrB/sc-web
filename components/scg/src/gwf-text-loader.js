GwfTextLoader = {

    load: function (text, render) {
        var is_file_correct;
        is_file_correct = GwfObjectInfoReader.read(text.replace(
            "<?xml version=\"1.0\" encoding=\"windows-1251\"?>",
            "<?xml version=\"1.0\" encoding=\"utf-8\"?>"
        ));
        if (is_file_correct != false) {
            ScgObjectBuilder.buildObjects(GwfObjectInfoReader.objects_info);
            render.update();
        } else {
            GwfObjectInfoReader.printErrors();
        }
        return true;
    }
    
};
