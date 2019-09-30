const BASE_URL = 'https://thinkful-list-api.herokuapp.com/Shannon';

const apiFetch = function(...args) {
  let error;
  return fetch(...args)
    .then(res => {
      if(!res.ok){
        error = {code:res.status};
      }
      return res.json();
    })
    .then(data => {
      if(error){
        error.message = data.message;
        return Promise.reject(error);
      }
      return data;
    });
};

const getItems = function(){
  return apiFetch(`${BASE_URL}/items`);
};

const updateItem = function(id, updateData) {
  //let update = JSON.stringify(updateData);
  // console.log(updateData);
  const newObject = {
    name: updateData.name,
    checked: updateData.checked,
  };

  return apiFetch(
    `${BASE_URL}/items/${id}`,{
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newObject)
    });
  //    .catch(err => console.log(err.message)));
};

const deleteItem = function(id){

  return apiFetch(
    `${BASE_URL}/items/${id}`,{
      method: 'DELETE',
    }
  );
};



const createItem = function(name){
  let newItem = JSON.stringify({name});
  return apiFetch(`${BASE_URL}/items`,{
    method:'POST',
    headers: { 'Content-Type': 'application/json'},
    body: newItem
  });
};


export default {
  apiFetch,
  updateItem,
  getItems,
  deleteItem,
  createItem
};
