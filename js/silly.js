var SILLY = (function(module) {
	module.DoIt = function(resultObject) { 
		resultObject.prepend('Yo Stephen!' + Date()+'<br/>');
	};
	return module;
} (SILLY || {}));