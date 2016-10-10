angular.module('MainCtrl', []).controller('MainController', function($scope,$timeout,$window) {
	var start = Date.parse(new Date("December 31, 2016 23:59:50"));
	var deadline = Date.parse(new Date("January 1, 2017 00:00:00"));
	$scope.counter = deadline;
	$scope.deadl = start;
	$scope.days = "0";
	$scope.hours = "00";
	$scope.minutes = "00";
	$scope.seconds = "00";
	var stopped;
	$scope.countdown = function() {
	    stopped = $timeout(function() {
	    	$scope.IsHidden = true;
            $scope.ShowHide = function () {
                $scope.IsHidden = $scope.IsHidden ? false : true;
            }
	     	$scope.counter = $scope.counter-1000;
	     	var d2 = $scope.counter - $scope.deadl;
	     	$scope.days = Math.floor(d2 / (1000 * 60 * 60 * 24));
	     	$scope.hours = Math.floor((d2 / (1000 * 60 * 60)) % 24);
			$scope.hours = ("0" + $scope.hours).slice(-2);
			$scope.minutes = Math.floor((d2 / 1000 / 60) % 60);
			$scope.minutes = ("0" + $scope.minutes).slice(-2);
			$scope.seconds = Math.floor((d2 / 1000) % 60);
			$scope.seconds = ("0" + $scope.seconds).slice(-2);
	     	$scope.countdown();
	     	if($scope.counter == $scope.deadl){
	     		$scope.stop();
	     		$window.alert("HAPPY NEW YEAR!");
	     	}   
	    }, 1000);
	};  
	$scope.stop = function(){
	   $timeout.cancel(stopped);
	} 
});