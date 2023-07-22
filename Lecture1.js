console.log(1);
console.log(2);
console.log(3);

// This asyn function will be called 2s latter
setTimeout(() => {
  console.log('callback function fired.')
}, 2000);

console.log(4);
console.log(5);

// asyn output here: --> callback function fired.