angular.module("lightSpeedMeasureApp",[]).controller('light_speed', function($scope) {
    $scope.distance_lightm = function() {
    var speed_of_light = 299793465;
    var seconds = document.getElementById("seconds").value;
    alert('The distance the light  has traveled is:' + speed_of_light * seconds + ' meters');
    }
});