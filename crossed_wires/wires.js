import { distinct } from "jsr:@std/collections";


const instructions = (data, array, { x, y }) => {
  const val = parseInt(data[1]);
  switch (data[0]) {
    case "R":
      for (let i = 0; i <= val; i++) {
        array.push([x++, y]);
      }

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

const ins = "R8,U5,L5,D3";
const instru = ins.split(",").map((x) => x.split(""));
let arr = [];
let axixs = { x: 0, y: 0 };
for (let i = 0; i < instru.length; i++) {
  axixs = instructions(instru[i], arr, axixs);
  // console.log(axixs.x);
  // console.log(axixs.y);
}
// console.log(arr);

// console.log("..........");
const ins2 = "U7,R6,D4,L4";
const instru2 = ins2.split(",").map((x) => x.split(""));
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

// console.log(data1);
const ud = distinct(data1);
const ud2 = ud.slice(1);
const final = ud2.reduce((fin, cu) => fin !== undefined ? fin[0] < cu[0] ? fin[1] < cu[1] ? fin : cu : cu[1] < fin[1] ? cu : fin : cu);
console.log(final);
const distance = final[0] + final[1];
console.log(distance)