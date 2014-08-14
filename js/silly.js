var SILLY = (function(module) {
	module.DoIt = function(resultObject) { 
		resultObject.prepend('Yo Karen , hit the ball straigthter!' + '<br/>');
	};
	return module;
} (SILLY || {}));