var frequency = 0;
var seconds;
var speed_of_light = 299792458;
var wavelength_ft = 1100 / frequency;
var wavelength_m = 335 / frequency;
var meters = 0;
var bass = 0;
var midrange = 0;
var seconds_to_degree = 0;
var treble = 0;
var degrees_of_cycle = 0;
var	seconds_to_degree = frequency / ( degrees_of_cycle / 360 );
var	pk_current = 1.414 * voltage;
var 	pk_voltage = 1.414 * current;
var	pk_root_mean_square = voltage * .707;
var	pk_pk_root_mean_square = voltage * .354;
var	time = 0;
var frequency = frequency / seconds;
var	cycle_degrees = 360;
var	pi = 3.1416;
var	radians = 2 * pi * frequency;
var	power = voltage * current;
var	power = (current * resistance) * resistance;
var	power = (current * current ) * resistance;
var	power = voltage * (voltage / resistance);
var	power = ( voltage * voltage ) / resistance;
var	voltage = current * resistance;
var	current = voltage / resistance;
var	resistance = voltage / current;
var range;



function frequency_conversion() {
  var frequency = document.getElementById("calculator").value;
  // note: using the same variable for input AND output is not good practice
  if (frequency >= 20 && frequency <= 200) frequency = "bass";
  else if (frequency >= 200 && frequency <= 3000) frequency = "midrange";
  else if (frequency >= 3000) frequency = "treble";
  else range = "out of range";
  // document.getElementById("range").innerHTML = frequency;
  alert('range of frequency is:' + frequency + '');
}

  function distance_light() {
    var seconds = document.getElementById("seconds").value;
    alert('The distance the light  has traveled is:' + speed_of_light * seconds + ' meters');
    }
 function frequency_to_wavelength() {
    var frequenc = document.getElementById("freq").value;
    alert('The wavelength with the given frequency is:' + speed_of_light / frequenc + 'meters a second');
    }

function wavelength_to_frequency() {
    var wavlgnth = document.getElementById("wavlng").value;
    alert('The frequency with the given wavelength is:' + speed_of_light / wavlgnth + '');
    }

function spdlight () {
 var frequent = document.getElementById("frequet").value;
  var wavlgnth = document.getElementById("wvlnth").value;
   alert('the speed of light is: ' +  frequent * wavlgnth + ' meters per second.'); 
}

function powerCnR () {
 var current = document.getElementById("current").value;
  var resistance = document.getElementById("resistance").value;
   alert('the power is ' + (current * resistance) * resistance + ''); 
}

function powerVnC () {
  var voltage = document.getElementById("volt").value;
  var current = document.getElementById("curre").value;
  alert('the power is ' + voltage * current + '');
}