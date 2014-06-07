//--------------------------------------------------------------------------------------------
// Author: Thomas Green
// Company: Square Planet Design
// Description: 
//   A development playground for all the reusabled code I develop for my own personal 
//   projects.
// License:
//   MIT
//--------------------------------------------------------------------------------------------
// Module: spd
// File:   spd.js
// Description:
//  Contains the common tools used throughout the library. Right now its just a placeholder
//  obviously. The module will load in either a requirejs system or into a global namespace.
//--------------------------------------------------------------------------------------------

(function() {
  // Construtor
  var spd = function() {
    // TODO
  };
  
  // Static methods and properties
  spd.DESCRIPTION = "Common functionality for the spd library.";
  spd.NAME = "spd";
  
  spd.namespace = function(name, ns, defName) {
    if (!name) {
      return;
    }
    
    ns = ns || spd;
    defName = defName || "SPD";
    
    var rootNs = ns;
    var parts = name.split(".");
    if (parts[0] === defName) {
      // IGNORE the main namespace if provided
      parts.shift();
    }
    
    for(var i = 0, l = parts.length; i < l; i++) {
      var subname = parts[i];
      if(typeof ns[subname] !== 'undefined') {
          ns[subname] = {};
      }
      ns = ns[subname];
    }
    
    return rootNs;
  };
  
  // Instance methods and properties
  spd.prototype = {
  };
  
  
  if(define) {
    define(spd);
  } else {
    window.SPD = spd;
  }
});
