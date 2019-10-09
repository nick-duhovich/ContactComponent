({
    closePopup: function(component, event, helper) {
        component.find("overlayLib").notifyClose();
    },
    
    viewRecord : function (component, event, helper) {
        var navEvt = $A.get("e.force:navigateToSObject");
        navEvt.setParams({
            "recordId": component.get('v.contact.Id'),
            "slideDevName": "related"
        });
        navEvt.fire();
    },
    
    editRecord : function(component, event, helper) {
        
        /*var overlayLib = component.get("v.overlayLib");
        console.log("GET overlayLib::: " + component.get('v.overlayLib'));
        overlayLib[0].close();*/
        
        var editRecordEvent = $A.get("e.force:editRecord");
        editRecordEvent.setParams({
            "recordId": component.get("v.contact.Id")
        });
        editRecordEvent.fire();
        //component.find("overlayLib").notifyClose();
    }
})