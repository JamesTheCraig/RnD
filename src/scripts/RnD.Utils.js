
var RnD = RnD || {};

RnD.Utilities = {
    randRGB: function(r,g,b) {
       // r,g,b = any value between 0 & 256
       var rgbMath = [ 
                Math.floor( Math.random() * (r) ), 
                Math.floor( Math.random() * (g) ), 
                Math.floor( Math.random() * (b) ) ].join(','),
            rgbVal = [ 'rgb(', rgbMath ,')'].join('');
        return rgbVal;
    }
};