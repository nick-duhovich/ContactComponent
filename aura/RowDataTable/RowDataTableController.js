({
    refresh : function(component, event, helper) {
        var toastMessageParams = event.getParams();
        var message = toastMessageParams.message;
        
        if (message.includes('Contact') && message.includes('was saved')) {
            $A.get('e.force:refreshView').fire();
        }
    },
    
    openPopup : function (component, event, helper) {
        var modalBody;
        var modalFooter;
        $A.createComponents([
            ["c:popupBody",{ contact: component.get("v.contact"), }],
            ["c:popupFooter",{ contact: component.get("v.contact"), }] 
        ],
                            function(components, status) {
                                if (status === "SUCCESS") {
                                    console.log("Send to popupBody");
                                    modalBody = components[0];
                                    modalFooter = components[1];
                                    component.find('overlayLib').showCustomModal({
                                        header: "Contact Information",
                                        body: modalBody,
                                        footer: modalFooter,
                                        showCloseButton: true,
                                        cssClass: "my-modal,my-custom-class,my-other-class"
                                    })/*.then(function (overlay) {
                                        //overlay.close();
                                        
                                        //component.set("v.overlayLib", overlay);
                                        //console.log("SET overlayLib::: " + component.get('v.overlayLib'));
                                        
                                        //setTimeout(function() {
                                        //    overlay.close();
                                        //}, 3000);
                                    })*/;
                                }
                            }
                           );
    }
})