document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const formSubmit = document.querySelector('#new-film-form');
  formSubmit.addEventListener('submit', handleFormSubmit);

  const deleteAllButton = document.querySelector('#delete-all')
  deleteAllButton.addEventListener('click', handleDeleteAll);
});


const handleFormSubmit = function () {
  event.preventDefault();

  const list = document.querySelector('#film-list');
  const newListItem = document.createElement('li');

  const filmName = document.createElement('h2');
  filmName.textContent = event.target.film_name.value;
  newListItem.appendChild(filmName);

  const genre = document.createElement('h4');
  genre.textContent = event.target.genre.value;
  newListItem.appendChild(genre);

  const director = document.createElement('h4');
  director.textContent = event.target.director.value;
  newListItem.appendChild(director);

  list.appendChild(newListItem);

  form = document.querySelector('#new-film-form');
    form.reset()
};

const handleDeleteAll = function (evt) {
  const filmList = document.querySelector('#film-list');
  filmList.innerHTML = '';
}
// const createListItem = function(element, content, ) {
//
// }
