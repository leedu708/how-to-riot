howTo.controller('ApiCtrl',
  ['$scope', 'apiService',
  function($scope, apiService) {

    $scope.test = function(type, id) {
      var req = new XMLHttpRequest();
      req.open('GET', apiService.getCall(type, id), true);
      req.onload = function(e) {
        if (req.readyState === 4) {
          if (req.status === 200) {
            console.log(req.responseText);
          } else {
            console.error(req.statusText);
          }
        }
      }

      req.onerror = function(e) {
        console.error(req.statusText);
      };
      req.send(null);
    }

    $scope.test2 = function() {
      var req = apiService.getPlayerID('leedu');
      req.onload = function(e) {
        if (req.readyState === 4) {
          if (req.status === 200) {
            console.log(req.responseText);
          } else {
            console.error(req.statusText);
          }
        }
      }

      req.onerror = function(e) {
        console.error(req.statusText);
      };
      req.send(null);
    }

  }])
