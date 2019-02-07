const Munros = require('./models/munros.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const munrosList = document.querySelector('.list-of-munros');

  const munroTest = new Munros();
  munroTest.getData();
});
