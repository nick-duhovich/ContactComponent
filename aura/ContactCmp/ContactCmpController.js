({
    init: function(component, event, helper) {
        helper.getData(component);
    },
    
    searchContacts : function(component, event, helper) {
        var message = event.getParam("message");
        component.set("v.searchString", message);        
        helper.getData(component);
    }
})