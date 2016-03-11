

var frequency = 0;
var seconds = 0;
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

//int main() 
//
//	float power = 0, current = 0, voltage = 0, resistance = 0; 
//char choice = 0;
//
//	var light_distance = speed_of_light * seconds;
//    var speed_of_light / seconds = meters;
//	wavelength_ft = 1100 / frequency;
//	wavelength_m = 335 / frequency;
 
//function frequency_conversion(frequency) { 
//	if (frequency >=20 && frequency <= 200 )
//		alert("frequency = bass");
//	if else (frequency >= 200 && frequency <= 3000)
//	alert("frequency = midrange");
//	if else (frequency >= 3000)
//	alert("frequency = treble");
//    else 
//        alert ("out of range");
//        
//        }
//function frequency_conversion() {
//    var frequency = document.getElementById("frequncy_conversions").value;
//    // note: using the same variable for input AND output is not good practice
//    if (frequency >= 20 && frequency <= 200) frequency = "bass";
//    else if (frequency >= 200 && frequency <= 3000) frequency = "midrange";
//    else if (frequency >= 3000) frequency = "treble";
//    else range = "out of range";
//    document.getElementById("range").innerHTML = frequency;
//    alert('range of frequency is:' + frequency + '');
//}
//
//    function distance_light() {
//        var seconds = document.getElementById("light_coordinate").value
// return  var dist_coordinate = speed_of_light * seconds;
//        alert(dist_coordinate);
//}

// var dist_coordinate = speed_of_light * seconds;

function frequency_conversion() {
  var frequency = document.getElementById("frequncy_conversions").value;
  // note: using the same variable for input AND output is not good practice
  if (frequency >= 20 && frequency <= 200) frequency = "bass";
  else if (frequency >= 200 && frequency <= 3000) frequency = "midrange";
  else if (frequency >= 3000) frequency = "treble";
  else range = "out of range";
  document.getElementById("range").innerHTML = frequency;
  alert('range of frequency is:' + frequency + '');
}

  function distance_light() {
    var seconds = document.getElementById("light_coordinate").value
    alert('The distance the light  has traveled is:' + speed_of_light * seconds + ' meters');
    }

  var Choice = prompt("choose from one of the following: 1 for frequency to sound wave, 2 for to enter the number of seconds light has traveled and find how far it has reached in the allotted time, 3 for power conversion using current and resistance, 4 for power conversion using voltage and resistance, 5 for current using voltsge snd resistance, 6 for wavelength in feet from a frequency, 7 for wavelength in meters from a frequency.");


if (Choice === 1){
 var frequency = prompt ('Enter the frequency');
   alert(frequency_conversion);
}

if else (Choice === 2) {
    var seconds = prompt('Enter the number of seconds the light has traveled.');
    alert(distance_light);
    
}
if else (Choice === 3) {
    var current = prompt('Enter the current');
    var resistance = prompt('Enter the resistance');
    var power = (current * current) * resistance;
    alert('the power is ' + power + '');
}
if else (Choice === 4) {
    var voltage = prompt('Enter the voltage');
    var resistance = prompt('Enter the resistance');
    var power = (voltage * voltage) / resistance;
    alert('the power is ' + power + '');
}

if else (Choice === 5) {
    var voltage = prompt('Enter the voltage');
    var resistance = prompt('Enter the resistance');
    var current = voltage / resistance;
    alert('The current is ' + current + '');
}
if else (Choice === 6) {
    var frequency = prompt('Enter the frequency');
    var wavelength_ft = 1100 / frequency;
    alert('The wavelength of the frequency in feet is:' + wavelength_ft + '');
}
if else (Choice === 7) {
    var frequency = prompt('Enter the frequency');
    var wavelength_m = 335 / frequency;
    alert('the wavelength of the frequency in meters is:' + wavelength_m + '');
}
else (Choice === Error) {
alert('You did not enter an appropriate choice' );
}
  
 