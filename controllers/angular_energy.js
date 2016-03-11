
   angular.module("energyConversionApp",[])
       .controller('energyCntrl1', function($scope) {
    $scope.frequency_conversion= function() {
  var frequency = document.getElementById("calculator").value;
  // note: using the same variable for input AND output is not good practice
  if (frequency >= 20 && frequency <= 200) frequency = "bass";
  else if (frequency >= 200 && frequency <= 3000) frequency = "midrange";
  else if (frequency >= 3000) frequency = "treble";
  else frequency = "out of range";
  // document.getElementById("range").innerHTML = frequency;
  alert('range of frequency is: ' + frequency + '');
        };
    })
   .controller('light_speed', function($scope) {
    $scope.distance_lightm = function() {
    var speed_of_light = 299793465;
    var seconds = document.getElementById("seconds").value;
    alert('The distance the light  has traveled is: ' + speed_of_light * seconds + ' meters');
    };
})
    .controller('freq_wav', function($scope) {
    $scope.frequency_to_wavelength = function() {
    var speed_of_light = 2999792458;
    var frequenc = document.getElementById("freq").value;
    alert('The wavelength with the given frequency is: ' + speed_of_light / frequenc + ' meters a second');
    };
   })
   
    .controller('wav_2freq', function($scope) {
    $scope.wavelength_to_frequency = function() {
        var speed_of_light = 2999792458;
        var wavlgnth = document.getElementById("wavlng").value;
    alert('The frequency with the given wavelength is: ' + speed_of_light / wavlgnth + ' ');
    };

   })
   
   .controller('speed_light', function($scope) {
    $scope.spdlight = function () {
 var frequent = document.getElementById("frequet").value;
  var wavlgnth = document.getElementById("wvlnth").value;
   alert('the speed of light is: ' +  frequent * wavlgnth + ' meters per second.'); 
    };
   })
   
   .controller('CRpower', function($scope) {
    $scope.powerCnR = function () {
 var current = document.getElementById("current").value;
  var resistance = document.getElementById("resistance").value;
   alert('the power is: ' + (current * resistance) * resistance + ''); 
};
   })
   
   .controller('PowerCV', function($scope) {
    $scope.power_volts = function () {
        var voltage = document.getElementById("volt").value;
  var current = document.getElementById("curre").value;
  alert('the power is: ' + voltage * current + '');
};
   });