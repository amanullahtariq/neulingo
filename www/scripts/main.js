

(function(){ 
var helloApp = angular.module("HelloApp", ['ngRoute'])
    .config(function($routeProvider){
    
    $routeProvider.
      when('/', {
        templateUrl: assets.getView(1),
        controller: 'mainController'
      }).when('/dashboard', {
        templateUrl: assets.getView(2),
        controller: 'dashboardController'
      }).when('/settings', {
        templateUrl: assets.getView(4),
        controller: 'dashboardController'
      }).when('/shops', {
        templateUrl: assets.getView(3),
        controller: 'shopController'
      }).when('/jobdetail', {
        templateUrl: assets.getView(5),
        controller: 'shopController'
      }).when('/jobdetail2', {
        templateUrl: assets.getView(6),
        controller: 'shopController'
      });  
    
    });

helloApp.controller("mainController", [ '$scope','$location', function($scope,$location) {
  $scope.name = "Calvin Hobbes";
}]);
helloApp.controller("dashboardController", [ '$scope','$location', function($scope,$location) {
  $scope.go = function(){
    alert("mozi");
  }
}]);
helloApp.controller("shopController", [ '$scope','$location', function($scope,$location) {
  $scope.name = "Calvin Hobbes";
}]);
helloApp.controller("jobController", [ '$scope','$location', function($scope,$location) {
  $scope.name = "Calvin Hobbes";
}]);
helloApp.controller("job2Controller", [ '$scope','$location', function($scope,$location) {
  $scope.name = "Calvin Hobbes";
}]);

setTimeout(function(){

$('.morebutton').click(function(){
  var body = $("html, body");
  body.stop().animate({scrollTop:700}, '500', 'swing', function() { 
  });
});
},1000);

/***********************************************************/
/***********************************************************/
/*********************** TEMPLATES *************************/
/***********************************************************/
/***********************************************************/

var port = 8000;

helloApp.directive('navBar', function(){
      return {
        restrict: 'E',
        scope: false,
        templateUrl: 'http://localhost:' +  port + '/views/browser/templates/nav_bar.html'
      }
});
helloApp.directive('mainPageIntro', function(){
      return {
        restrict: 'E',
        scope: false,
        templateUrl: 'http://localhost:' +  port + '/views/browser/templates/main_page_intro.html'
      }
});

helloApp.directive('loginPopup', function(){
      return {
        restrict: 'E',
        scope: false,
        templateUrl: 'http://localhost:' +  port + '/views/browser/templates/login_popup.html'
      }
});

helloApp.directive('heroboard', function(){
      return {
        restrict: 'E',
        scope: false,
        templateUrl: 'http://localhost:' +  port + '/views/browser/templates/heroboard.html'
      }
});
helloApp.directive('navBarLoggedIn', function(){
      return {
        restrict: 'E',
        scope: false,
        templateUrl: 'http://localhost:' +  port + '/views/browser/templates/nav_bar_logged_in.html'
      }
});
helloApp.directive('recentJobs', function(){
      return {
        restrict: 'E',
        scope: false,
        templateUrl: 'http://localhost:' +  port + '/views/browser/templates/recent_jobs.html'
      }
});
helloApp.directive('userTypeSelectionCard', function(){
      return {
        restrict: 'E',
        scope: false,
        templateUrl: 'http://localhost:' +  port + '/views/browser/templates/user_type_selection_card.html'
      }
});


setTimeout(function(){
    Dropzone.autoDiscover = false;
    $("#dZUpload").dropzone({
        url: "hn_SimpeFileUploader.ashx",
        addRemoveLinks: true,
        success: function (file, response) {
            var imgName = response;
            file.previewElement.classList.add("dz-success");
            console.log("Successfully uploaded :" + imgName);
        },
        error: function (file, response) {
            file.previewElement.classList.add("dz-error");
        }
    });     

    $('.loginButton').click(function(){
      window.location = "http://localhost:8000/index.html#/dashboard";
      location.reload();
    });

},1000);

helloApp.directive('profile', function(){
      return {
        restrict: 'E',
        scope: false,
        templateUrl: 'http://localhost:' +  port + '/views/browser/templates/profile.html'
      }
});

helloApp.directive('score', function(){
      return {
        restrict: 'E',
        scope: false,
        templateUrl: 'http://localhost:' +  port + '/views/browser/templates/score.html'
      }
});

})();
