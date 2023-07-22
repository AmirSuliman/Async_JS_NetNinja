// Promise Example
const getSomething = () => {
  return new Promise(( resolve, reject ) => {
    // if Promise is successful
    resolve('Some data');

    // if Promise is unsuccessful 
    reject('Some error');
  });
}
// the "then" method is called on the promise and it works like if else statement for resolve & reject
/*
  getSomething().then((data) => {
    console.log(data); // output: "Some data"
  },(error) => {
    console.log(error); // output: "Some error"
  });
*/

// In the above method we had to pass two callbacks to the "then" method
// The above method is working fine but the following method is preferable for debugging and is used as a convention.

getSomething().then((data) => {
  console.log(data);
}).catch((error) => {
  console.log(error);
});