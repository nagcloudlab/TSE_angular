const { BehaviorSubject, zip } = require("rxjs");
const { filter, map, bufferCount } = require("rxjs/operators");

const oddStream = new BehaviorSubject(1);
let i = 0;
setInterval(() => {
  i++;
  if (i % 2 !== 0) oddStream.next(i);
}, 5000);

const evenStream = new BehaviorSubject(1);
let j = 0;
setInterval(() => {
  j++;
  if (j % 2 === 0) evenStream.next(j);
}, 1000);

zip(oddStream, evenStream).subscribe((x) => {
  console.log(x);
});
