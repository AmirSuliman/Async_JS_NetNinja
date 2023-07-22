const request = new XMLHttpRequest();

request.addEventListener('readystatechange', () => {
  // console.log(request.readyState); // this will output 1,2,3,4 states 
  /*
   * 1--> OPENED --> open() has been called
   * 2--> HEADERS_RECEIVED --> sed() has been called, and headers and status are available.
   * 3--> LOADING --> Downloading; responseTesxt holds partial data
   * 4--> DONE --> The operation is complete
  */
  // console.log(request); // this will output what is inside the request for all the four states

  if ( request.readyState === 4 && request.status === 200 ) {
    console.log(request.responseText);
  } else if (request.readyState === 4) {
    console.log('Could not fetch data.');
  }
});

request.open( 'GET', 'https://jsonplaceholder.typicode.com/todos/');

request.send();