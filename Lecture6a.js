// fetching the data using fetch() method

fetch('Todos/amir.json').then(resolve => {
  return resolve.json();
}).then(data => {
  console.log("Promise one resolved: ", data);
  return fetch('Todos/amir1.json');
}).then(resopnse => {
  return resopnse.json();
}).then(data2 => {
  console.log("Promise two resolved: ", data2);
  return fetch('Todos/amir2.json');
}).then(resopnse => {
  return resopnse.json();
}).then(data3 => {
  console.log("Promise three resolved: ", data3)
}).catch(error => {
  console.log(error);
})