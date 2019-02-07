const PubSub = require('../helpers/pub_sub.js');

const ResultView = function (container, munro) {
  this.container = container;
  this.munro = munro;
};

ResultView.prototype.bindEvents = function () {
  PubSub.subscribe('Munros:data-ready', (evt) => {
    const munro = evt.detail;
    this.render(munro);
  });
};

ResultView.prototype.render = function () {
  const munroContainer = document.createElement('div');
  munroContainer.classList.add('munro');

  const name = this.createMunroHeading();
  munroContainer.appendChild(name);

  const munrosList = this.createMunroList();
  munroContainer.appendChild(munrosList);

  this.container.appendChild(munrosList);



  // for (let munro of data){
  //   this.container.innerHTML = '';
  //   const munroName = document.createElement('p');
  //   munroName.textContent = `name: ${munro.name} | meaning: ${munro.meaning} | height: ${munro.height}`;
  //   this.container.appendChild(munroName);
  // }
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
  // console.log(this.container);
  this.container.forEach((munro) => {
    const munroListItem = document.createElement('li');
    munroListItem.textContent = munro.name;
    list.appendChild(munroListItem);
  });
};

module.exports = ResultView;
