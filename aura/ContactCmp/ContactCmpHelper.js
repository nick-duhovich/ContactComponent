({
    getData : function(component) {
        var searchString = component.get("v.searchString");
        //console.log("SearchString in getData: " + searchString);
        
        var action = component.get('c.getContacts');
        //console.log("ACTION: " + action);
        
        action.setParams({filterValue : searchString, maxRecordsLimit : component.get('v.maxRecordsLimit')});
        
        action.setCallback(this, $A.getCallback(function (response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                component.set('v.mydata', response.getReturnValue());
            } else if (state === "ERROR") {
                var errors = response.getError();
                console.error(errors);
            }
        }));
        $A.enqueueAction(action);
    }
})