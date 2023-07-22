const getTodos = (callback) => {
  const request = new XMLHttpRequest();

  request.addEventListener('readystatechange', () => {
    if ( request.readyState === 4 && request.status === 200 ) {
      callback(undefined, request.responseText);
    } else if (request.readyState === 4) {
      callback('Could not found the data.', undefined);
    }
  });

  request.open( 'GET', 'https://jsonplaceholder.typicode.com/todos/');
  request.send();
}

getTodos((err, data) => {
  console.log('Call back fired.');
  if (err) {
    console.log(err);
  } else if (data) {
    console.log(data);
  }
});

