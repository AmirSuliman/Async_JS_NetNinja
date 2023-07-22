// async & await
// async returns a Promise and await works like a "then" method

const getTodos = async () => {
  const response = await fetch('Todos/amir.json');
  // json() method is asynchronous and returns a promise in itself
  // so therefore we use the await key word to chain on this promise
  const data = await response.json();
  return data;
}

// here we use the then method because the getTodes retruns a Promise
getTodos()
  .then(data => {console.log(data)})
  .catch(error => console.log("error occured:", error)); 


// the above code is like the alternative of the following code

// fetch('Todos/amir.json').then( resolve => {
// return resolve.json(); 
// }).then(data => {
//   console.log(data);
// }).catch(err => {
//   console.log(err);
// })