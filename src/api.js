const BASE_URL = 'https://thinkful-list-api.herokuapp.com/Shannon';

const getItems = function(){
  return fetch(`${BASE_URL}/items`);
};

const updateItem = function(id, updateData) {
  //let update = JSON.stringify(updateData);
  // console.log(updateData);
  const newObject = {
    name: updateData.name,
    checked: updateData.checked,
  };

  return fetch(
    `${BASE_URL}/items/${id}`,{
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newObject)
    }
  );
};

const deleteItem = function(id){

  return fetch(
    `${BASE_URL}/items/${id}`,{
      method: 'DELETE',
    }
  );
};



const createItem = function(name){
  let newItem = JSON.stringify({name});
  return fetch(`${BASE_URL}/items`,{
    method:'POST',
    headers: { 'Content-Type': 'application/json'},
    body: newItem
  });
};


export default {
  updateItem,
  getItems,
  deleteItem,
  createItem
};
