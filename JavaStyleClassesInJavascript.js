// A simple function for defining simple classes
function defineClass(constructor, // Initialization
			methods,  // Instance methods
			statics) // Class properties

{
	if(methods) {
	// Copy methods to the prototype
	for(var m in methods)
		constructor.prototype[m] = methods[m];
	}
	if(statics){
	// Copy static properties to the constructor
		for(var s in statics)
			constructor[s] = statics[s];
	}
	
	return constructor;
}

// This is a simple variant of our Range class
var SimpleRange = 
	defineClass(
		function(f,t) { this.f = f; this.t = t; },
		{
			inclused: function(x) {
				return this.f <= x && x <= this.t;
			},
			toString: function(x) {
				return this.f + "..." + this.t;
			}
		},
		{
			upto: function(t) {
				return new SimpleRange(0, t);
			}
		}
	);
