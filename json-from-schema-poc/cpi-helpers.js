exports.helpers = function () {
var myHelpers = {
  gender: function() {
    // Use dummyjson random to ensure the seeded random number generator is used 
	return dummyjson.utils.randomArrayItem(['male', 'female']);
  },
  maritalStatus: function() {
    // Use dummyjson random to ensure the seeded random number generator is used 
	return dummyjson.utils.randomArrayItem(['Married', 'Single', 'Divorced']);
  },
  formOfAddress: function() {
    // Use dummyjson random to ensure the seeded random number generator is used 
	return dummyjson.utils.randomArrayItem(['Mr', 'Ms', 'Mrs']);
  },
  languages: function() {
    // Use dummyjson random to ensure the seeded random number generator is used 
	return dummyjson.utils.randomArrayItem(['EN', 'FR', 'CH']);
  },
  fullName: function(options) {
    // You must always forward the options argument to built-in helpers 
    return dummyjson.helpers.firstName(options) + ' ' + dummyjson.helpers.lastName(options);
  }
}
};
  function getHelpers(){
    return myHelpers;
  }


