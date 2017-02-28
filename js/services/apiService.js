howTo.factory('apiService',
  [function() {
    var apiService = {};

    var baseUrl = 'https://na.api.pvp.net/api/lol/';
    var key = '?api_key=79a3788f-6cd3-43b2-b32a-aa47ca5855b6';

    apiService.getChampionID = function(name) {

    }

    apiService.getPlayerID = function(name) {
      var call = baseUrl + 'na/v1.4/summoner/by-name/' + name + key;
      var req = new XMLHttpRequest();
      req.open('GET', call, true);
      return req;
    }

    apiService.getCall = function(type, id) {
      var output = apiService.url + id + '/' + type + apiService.key;
      return output;
    }

    return apiService;
  }])
