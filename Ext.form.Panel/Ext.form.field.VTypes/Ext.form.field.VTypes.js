/*
 *  The preceding code can be added anywhere in the code, inside the init function of a
	Controller, inside the launch function of app.js, or even in a separate JavaScript file
	(recommended) where you can put all your custom Vtypes.
	
	The VType is a singleton class that contains a set of commonly
	used field validation functions and provides a mechanism to
	create reusable custom field validations. 
 */
Ext.apply(Ext.form.field.VTypes, {
    customPass: function(val, field) {
        return /^((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{6,20})/.test(val);
    },
    customPassText: 'Not a valid password. Length must be at least 6 characters and maximum of 20. Password must contain one digit, one letter lowercase, one letter uppercase, one special symbol @#$% and between 6 and 20 characters.'
});