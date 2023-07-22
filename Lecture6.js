// How to request data one after another - sequencetialy
const getTodos = (resourse) => {
  // using promises
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
      if (request.status === 200 && request.readyState === 4) {
        const data = JSON.parse(request.responseText);
        resolve(data);
      }else if (request.readyState === 4) {
        reject( "data is not available");
      }
    });
    
    request.open('GET', resourse);
    request.send();
  });
}

getTodos('./Todos/amir.json').then( data => {
  console.log("Promise 1 resolved: " , data);
  return getTodos('./Todos/amir1.json');
}).then( data => {
  console.log("Promise 2 resolved: ", data);
  return getTodos('./Todos/amir2.json');
}).then( data => {
  console.log("Promise 3 resolved: ", data);
}).catch( error => {
  console.log("Error occured: ", error);
});
