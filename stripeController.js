app.controller('stripeController', ['$scope',function ($scope) {

}]);
$scope.cancelHandler = function () {

    alert("you discard the card details");
};
$scope.createTokenHandler = function (code, body) {
        
    if (code !== 200) {
              alert(body.error.message);
              $scope.xhr = false;
          } else {
              $scope.$apply(function () {
                  var tokens = body;
                  $scope.updateCard =
                 {
                     tokenid: tokens.id,
                 };
                 paymentService.updateCardProcess($scope.updateCard).then(function (swalSuccess) 
                 {
                 },
                  function (swalError) {
                  }).finally(function () { 
                  });
              });
          }
      };