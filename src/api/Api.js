
var axios = require('axios');

module.exports = {
  fetchTeamFeed: function () {
    var encodedURI = 'http://mobile-api.90min.com/api/partners/v1/feed/en/team/1?key=d1e5c21b';

    return axios.get(encodedURI)
      .then(function (response) {
        return response.data.data.feed;
      });
  },

  getPost: function () {
    var encodedURI = 'http://www.90min.com/hybrid/posts/5050407';

    return axios.get(encodedURI)
      .then(function (response) {
        return response.data;
      });
  }

};

