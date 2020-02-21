document.addEventListener('DOMontentLoaded', () => {

  const formSubmit = document.querySelector('#new-film-form');
  formSubmit.addEventListener('submit', handleFromSubmit);

});


const handleFormSubmit = function () {
  event.preventDefault();

  const list= document.querySelector('#film-lists');
  const newListItem = document.createElemet('li');

  const filmName = documetn.createElemet('h2');
  filmName.textContent = event.target.filme_name.value;

  list.appendChild(newListItem)
};

// const createListItem = function(element, content, ) {
//
// }
