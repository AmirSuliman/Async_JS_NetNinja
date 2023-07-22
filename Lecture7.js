// fetch api

/*
  fetching data using XMLHttpRequest() method is 
  an old way of fetching data form an api.
  Now a days we use fetch() mthod to fetch data form api.
*/

fetch('Todos/amir.json').then( resolve => {
  /* 
    this resolve.json() is again a promise so we
    need to again use the then() method to fetch an api data.
   */
  return resolve.json(); 
}).then(data => {
  console.log(data);
}).catch(err => {
  console.log(err);
})