import { distinct } from "jsr:@std/collections";

const instructions = (data, array, { x, y }) => {
  // console.log(data)
  const val = parseInt(data.slice(1));
  // console.log(val)
  switch (data[0]) {
    case "R":
      for (let i = 0; i <= val; i++) {
        array.push([x++, y]);
      }
      // console.log(array)
      return { x: array[array.length - 1][0], y: array[array.length - 1][1] };

    case "U":
      for (let i = 0; i <= val; i++) {
        array.push([x, y++]);
      }
      return { x: array[array.length - 1][0], y: array[array.length - 1][1] };

    case "L":
      for (let i = 0; i <= val; i++) {
        array.push([x--, y]);
      }
      return { x: array[array.length - 1][0], y: array[array.length - 1][1] };

    case "D":
      for (let i = 0; i <= val; i++) {
        array.push([x, y--]);
      }
      return { x: array[array.length - 1][0], y: array[array.length - 1][1] };
  }
};

const ins = "R75,D30,R83,U83,L12,D49,R71,U7,L72";
const instru = ins.split(",");
// console.log(instru)
let arr = [];
let axixs = { x: 0, y: 0 };
for (let i = 0; i < instru.length; i++) {
  axixs = instructions(instru[i], arr, axixs);
  // console.log(axixs.x);
  // console.log(axixs.y);
}
// console.log(arr);

// console.log("..........");
const ins2 = "U62,R66,U55,R34,D71,R55,D58,R83";
const instru2 = ins2.split(",");
// console.log(instru2)
let arr2 = [];
let axixs2 = { x: 0, y: 0 };
for (let i = 0; i < instru2.length; i++) {
  axixs2 = instructions(instru2[i], arr2, axixs2);
  // console.log(axixs2.x);
  // console.log(axixs2.y);
}
// console.log(arr2);

const data1 = arr.map((x) => {
  for (let i = 0; i < arr2.length; i++) {
    if (x[0] === arr2[i][0]) { if (x[1] === arr2[i][1]) return arr2[i]; }
  }
});

console.log(data1);
const ud = distinct(data1);
const ud2 = ud.slice(1);
console.log(ud2);
const final = ud2.reduce((fin, cu) => {
  if (cu !== undefined) {
    // const finData = Math.abs(fin[0]) + Math.abs(fin[1]);
    const cuData = Math.abs(cu[0]) + Math.abs(cu[1]);
    // console.log("fi",fin);
    // console.log("cu",cuData);
    return (fin < cuData) ? fin : cuData;
  }
  return fin;
}, Infinity);
console.log(final);
