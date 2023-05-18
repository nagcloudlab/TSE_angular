const { BehaviorSubject } = require("rxjs");
const { filter, map, bufferCount } = require("rxjs/operators");

const stream = new BehaviorSubject(1);
setInterval(() => {
  stream.next(stream.value + 1);
}, 1000);

stream
  .pipe(filter((value) => value % 2 === 0))
  .pipe(map((value) => value * 2))
  .pipe(bufferCount(2))
  .subscribe({
    next: (value) => console.log(value),
  });
