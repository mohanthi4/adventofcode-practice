// //  the two adjacent matching digits are not part of a larger group of matching digits.
// 112233 meets these criteria because the digits never decrease and all repeated digits are exactly two digits long.
// 123444 no longer meets the criteria (the repeated 44 is part of a larger group of 444).
// 111122 meets the criteria (even though 1 is repeated more than twice, it still contains a double 22).

let numberOFTimes = 0;

// const i = 111122
for (let i = 240920; i <= 789857; i++) {
  const r = String(i);
  // console.log(r)
  const exp = /(\d)\1/g;
  const d = exp.test(r);
  // console.log(d)
  if (d) {
    // console.log(d);
   const s = r.split("");

    const q = s.reduce((count, current) => {
      const val = count[current] || 0;
      count[current] = val + 1;
      return count;
    }, {});

    const sw = Object.entries(q).filter(x => x[1] === 2);
    // console.log(sw);
    if (sw.length > 0) {
      
          const rq = r.split("");
          const we = r.split("").sort((a, b) => a - b);
          let w = true;
          for (let i = 0; i < rq.length; i++) {
            if (rq[i] !== we[i]) {
              w = false;
            }
          }
      if (w) {
            // console.log(i)
            numberOFTimes++;
          }
      
    }
  }
}
console.log(numberOFTimes);
