// Generated by LiveScript 1.3.1
var x$;
x$ = angular.module('yslin');
x$.controller('young', function($scope, $timeout){
  console.log('ok2');
  $scope.tab = 1;
  $scope.tgltab = function(it){
    return $scope.tab = it;
  };
  $scope.tomenu = function(tab){
    $(document.body).animate({
      scrollTop: $(".avatar .ib.p1").offset().top - 100
    });
    $('#small-avatars').removeClass('active');
    return $scope.tgltab(tab);
  };
  $scope.sb = function(){
    return $(document.body).animate({
      scrollTop: 2500
    });
  };
  $scope.navToggle = null;
  $scope.saToggle = false;
  $scope.saToggle = false;
  if (/windows phone|android|ipad|iphone|ipod/i.test(navigator.userAgent.toLowerCase())) {
    $('#small-avatars').hide();
    return;
  }
  return $(window).scroll(function(){
    var t, h, a;
    t = $(window).scrollTop();
    h = $(window).height();
    a = $('#yng-c-sep2').offset().top;
    if (t + h * 1.5 <= a && $scope.saToggle) {
      $scope.$apply(function(){
        return $scope.saToggle = false;
      });
      $('#small-avatars').removeClass('active');
    }
    if (t + h * 1.5 >= a && !$scope.saToggle) {
      $scope.$apply(function(){
        return $scope.saToggle = true;
      });
      $('#small-avatars').addClass('active');
    }
    if (t + h * 0.5 <= a && $scope.saToggle2) {
      $scope.$apply(function(){
        return $scope.saToggle2 = false;
      });
      $('#small-avatars').removeClass('hide');
    }
    if (t + h * 0.5 >= a && !$scope.saToggle2) {
      $scope.$apply(function(){
        return $scope.saToggle2 = true;
      });
      return $('#small-avatars').addClass('hide');
    }
  });
});