const PubSub = require('../helpers/pub_sub.js');
const ResultView = require('./result_view.js');

const MunroListView = function (container){
  this.container = container;
  // console.log(this.container);
};

MunroListView.prototype.bindEvents = function () {
  PubSub.subscribe('Munros:data-ready', (evt) => {
    const munros = evt.detail;
    // console.log(munros);
    this.render(munros);
  });
};

MunroListView.prototype.render = function (munros) {
  munros.forEach((munro) => {
    // console.log(munro);
    const resultView = new ResultView(this.container, munro);
    resultView.render();
  });
};

module.exports = MunroListView;
