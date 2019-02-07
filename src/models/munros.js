const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const Munros = function () {
  this.data = null;
};

Munros.prototype.bindEvents = function () {
  
};

Munros.prototype.getData = function () {
  const url = "https://munroapi.herokuapp.com/munros";

  const request = new RequestHelper(url);
  console.log(request);
  request.get()
    .then((munros) => {
      console.log(munros);
      this.data = munros;
      PubSub.publish('Munros:data-ready', this.data);
    })
    .catch((err) => {
      PubSub.publish('Munros:error', err);
    });
};

module.exports = Munros;
