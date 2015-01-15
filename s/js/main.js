// Generated by LiveScript 1.2.0
var x$;
x$ = angular.module('yslin', []);
x$.directive('lzload', function(){
  return {
    restrict: 'A',
    link: function(scope, e, attrs, ctrl){
      var des;
      des = $(e[0].parentNode.parentNode.parentNode);
      des.addClass('lz-hide');
      if (e.prop('tagName') === 'IMG') {
        return e.load(function(){
          des.addClass('lz-show');
          return scope.isotope.appended(des[0]);
        });
      } else {
        return scope.isotope.appended(e[0].parentNode.parentNode.parentNode);
      }
    }
  };
});
x$.factory('scrollr', function(){
  return {
    list: [],
    register: function(s, e, cb){
      return this.list.push([s, e, cb]);
    }
  };
});
x$.controller('main', function($scope, $interval, $timeout){
  var refresher;
  if (/windows phone|android|ipad|iphone|ipod/i.test(navigator.userAgent.toLowerCase())) {
    return;
  }
  $scope.skrollr = skrollr.init({
    forceHeight: false,
    smoothScrolling: false
  });
  $scope.totalheight = 0;
  $scope.refreshing = false;
  $scope.refresh = function(){
    if ($scope.refreshing) {
      clearTimeout($scope.refreshing);
    }
    return $scope.refreshing = setTimeout(function(){
      $scope.$apply(function(){
        return $scope.refreshing = null;
      });
      return $scope.skrollr.refresh();
    }, 500);
  };
  $(window).resize(function(){
    return $scope.refresh();
  });
  refresher = function(){
    var ta;
    ta = $('#tail-anchor').offset().top;
    if ($scope.totalheight !== ta) {
      $scope.totalheight = ta;
      return $scope.refresh();
    }
  };
  $timeout(refresher, 1000);
  return $interval(refresher, 5000);
});