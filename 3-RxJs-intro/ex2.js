const { Subject } = require("rxjs");

// Multicast-Stream
const observable = new Subject();
let i = 0;
let interval = setInterval(() => {
  i++;
  if (i === 10) {
    observable.complete();
    clearInterval(interval);
    return;
  }
  // if (i === 5) {
  //   const err = new Error("error");
  //   observable.error(err);
  //  clearInterval(interval);
  //  return;
  // }
  observable.next(i);
}, 1000);

// // subscription 1
// observable.subscribe({
//   next: (data) => {
//     console.log("subscriber-1 : " + data);
//   },
//   error: (err) => {
//     console.log("subscriber-1 :" + err);
//   },
//   complete: () => {
//     console.log("subscriber-1 : complete");
//   },
// });

setTimeout(() => {
  // subscription 2
  observable.subscribe({
    next: (data) => {
      console.log("subscriber-2 : " + data);
    },
    error: (err) => {
      console.log("subscriber-2 :" + err);
    },
    complete: () => {
      console.log("subscriber-2 : complete");
    },
  });
}, 11 * 000);
