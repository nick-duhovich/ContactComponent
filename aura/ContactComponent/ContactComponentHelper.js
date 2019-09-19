({
    getData : function(component) {
        component.set('v.mycolumns', [
            {label: 'Contact Name', fieldName: 'Name', type: 'text'},
            {label: 'Phone', fieldName: 'Phone', type: 'phone'},
            {label: 'Email', fieldName: 'Email', type: 'email'},
        ]);
            
        let action = component.get('c.filteringContacts');
        let filterValue = component.find('filter').get('v.value');
            
        action.setParams({filterValue: filterValue});
        action.setCallback(this, function(response) {
            var state = response.getState();
            
            if (state === 'SUCCESS') {
            	component.set('v.mydata', response.getReturnValue());
            }
        });
        $A.enqueueAction(action);
    }
})