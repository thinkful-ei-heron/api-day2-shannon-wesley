
const BASE_URL = 'https://thinkful-list-api.herokuapp.com/Shannon';

const getItems = function(){
  fetch(`${BASE_URL}/items`)
    .then(resp => Promise.resolve(resp));
};

export default {
  getItems
};
