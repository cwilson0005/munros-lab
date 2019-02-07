const PubSub = require('../helpers/pub_sub.js');

const ResultView = function (container, munro) {
  this.container = container;
  this.munro = munro;
};

ResultView.prototype.bindEvents = function () {
  PubSub.subscribe('Munros:data-ready', (evt) => {
    this.munro = evt.detail;
    this.render();
  });
};

ResultView.prototype.render = function () {
  const munroContainer = document.createElement('div');
  munroContainer.classList.add('munro');

  const name = this.createMunroHeading();
  munroContainer.appendChild(name);

  const munroList = this.createMunroList();
  munroContainer.appendChild(munroList);

  this.container.appendChild(munroContainer);

};

ResultView.prototype.createMunroHeading = function () {
  const name = document.createElement('h2');
  name.classList.add('munro-name');
  if (!this.munro.name) {
    name.textContent = 'Misc';
  }else {
    name.textContent = this.munro.name;
  }
  return name;
};

ResultView.prototype.createMunroList = function () {
  const munrosList = document.createElement('ul');
  munrosList.classList.add('munros');
  this.populateList(munrosList);
  return munrosList;
};

ResultView.prototype.populateList = function (list) {
  console.log(this.munro);
  const munroListMeaning = document.createElement('li');
  munroListMeaning.textContent = `meaning: ${this.munro.meaning}`;

  const munroListHeight = document.createElement('li');
  // const munroHeightIcon = document.createElement('img');
  // munroHeightIcon.src = '../public/images/small_mountain.png';
  munroListHeight.textContent = `height: ${this.munro.height}`;

  list.appendChild(munroListMeaning);
  list.appendChild(munroListHeight);
  // list.appendChild(munroHeightIcon);
};

module.exports = ResultView;
