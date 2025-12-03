let numberOFTimes = 0;

for (let i = 240920; i < 789857; i++) {
  const r = String(i);
  // console.log(r)
  const exp = /(\d)\1/g;
  const d = exp.test(r);
  // console.log(d)
  if (d) {
    const rq = r.split("")
     const we = r.split("").sort((a,b) => a-b)
    let w = true;
    for (let i = 0; i < rq.length; i++) {
      if (rq[i] !== we[i]) {
        w = false;
      }
    }
    if (w) {
      numberOFTimes++;
    }
  }
}
console.log(numberOFTimes);
