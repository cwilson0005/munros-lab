const Munros = require('./models/munros.js');
const ResultView = require('./views/result_view.js');
const MunroListView = require('./views/munro_list_view.js');
const ErrorView = require('./views/error_view.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');
  const munros = new Munros();
  munros.getData();

  const munroListContainer = document.querySelector('.list-of-munros');
  const munroListView = new MunroListView(munroListContainer);
  munroListView.bindEvents();

  const errorView = new ErrorView(munroListContainer);
  errorView.bindEvents();
  // const munrosContainer = document.querySelector('.list-of-munros');
  // const munrosView = new ResultView(munrosContainer);
  // munrosView.bindEvents();
});
