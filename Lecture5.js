// How to request data one after another - sequencetialy
const getTodos = (resourse, callback) => {
  const request = new XMLHttpRequest();

  request.addEventListener('readystatechange', () => {
    if (request.status === 200 && request.readyState === 4) {
    const data = JSON.parse(request.responseText);
    callback(undefined, data);
    }else if (request.readyState === 4) {
      callback('could not find the data.', undefined);
    }
  });
  
  request.open('GET', resourse);
  request.send();
}

// asyn working like below is called "call back hell". 
// This work fine but it is not a good way doing things asynchronously.
// The best of doing it is promises.
getTodos('./Todos/amir.json', (err, data) => {
  if (data) {
    console.log(data);
    getTodos('./Todos/amir1.json', (err, data) => {
      if (data) {
        console.log(data);
        getTodos('./Todos/amir2.json', (err, data) => {
          if (data) {
            console.log(data);
          }
        });
      }
    });
  }
});