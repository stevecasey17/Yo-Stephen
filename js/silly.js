var SILLY = (function(module) {
	module.DoIt = function(resultObject) { 
		resultObject.prepend('Yo Stephen , hit the ball straigtht!' + '<br/>');
	};
	return module;
} (SILLY || {}));