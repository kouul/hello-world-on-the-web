Ext.onReady(function(){
    Ext.create('Ext.form.Panel', {
        title: 'Basic Form',
        renderTo: 'formContainer',
        bodyPadding: 5,
        width: 350,
    
        // Any configuration items here will be automatically passed along to
        // the Ext.form.Basic instance when it gets created.
    
        // The form will submit an AJAX request to this URL when submitted
        url: 'save-form.php',
    
        items: [{
            xtype: 'textfield',
            fieldLabel: 'Field',
            name: 'theField'
        }],
    
        buttons: [{
            text: 'Submit',
            handler: function() {
                // The getForm() method returns the Ext.form.Basic instance:
                var form = this.up('form').getForm();
                if (form.isValid()) {
                    // Submit the Ajax request and handle the response
                    form.submit({
                        success: function(form, action) {
                           Ext.Msg.alert('Success', action.result.message);
                        },
                        failure: function(form, action) {
                            Ext.Msg.alert('Failed', action.result ? action.result.message : 'No response');
                        }
                    });
                }
            }
        }]
    });
    Ext.create('Ext.Panel', {
        height: 500,
        width: 600,
        title: 'Panel 1',
        renderTo: 'panel1' 
    });
    Ext.create('Ext.Panel', {
        height: 500,
        width: 600,
        title: 'Panel 1',
        renderTo: 'panel2' 
    });
    Ext.create('Ext.Panel', {
        height: 500,
        width: 600,
        title: 'Panel 1',
        renderTo: 'panel3' 
    });
});