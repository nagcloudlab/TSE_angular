const { Observable } = require("rxjs");

// Unicast-Stream
const observable = Observable.create((observer) => {
  console.log(".....");
  const rn = Math.random();
  observer.next(rn);
});

// subscription 1
observable.subscribe((data) => {
  console.log("subscriber-1 : " + data); // 0.24957144215097515 (random number)
});

// subscription 2
observable.subscribe((data) => {
  console.log("subscriber-2 : " + data); // 0.004617340049055896 (random number)
});
