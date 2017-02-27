howTo.factory('apiService',
  [function() {
    var apiService = {};

    apiService.url = 'https://na.api.pvp.net/api/lol/na/v1.3/stats/by-summoner/';
    apiService.key = '?api_key=79a3788f-6cd3-43b2-b32a-aa47ca5855b6';

    apiService.getCall = function(type, id) {
      var output = apiService.url + id + '/' + type + apiService.key;
      return output;
    }

    return apiService;
  }])
