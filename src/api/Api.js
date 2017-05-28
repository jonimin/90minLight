
var axios = require('axios');

module.exports = {
  fetchTeamFeed: function (teamId) {
    var encodedURI = `http://mobile-api.90min.com/api/partners/v1/feed/en/team/${teamId}?key=d1e5c21b`;

    return axios.get(encodedURI)
      .then(function (response) {
        return response.data.data.feed;
      });
  },

  getLegues: function () {
    var encodedURI = 'http://mobile-api.90min.com/api/v8/leagues/en';

    return axios.get(encodedURI)
      .then(function (response) {
        console.log(response.data.data.leagues[0].teams);
        return response.data.data.leagues[0].teams;
      });
  }

};

