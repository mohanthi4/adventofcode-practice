// Find the input noun and verb that cause the program to produce the output 19690720.
//  What is 100 * noun + verb ? (For example, if noun = 12 and verb = 2, the answer would be 1202.)

// const opertionToDo = (array, position, symbol) => {
//   const storageIndex = array[position + 3];
//   const index1Value = array[position + 1];
//   const index2Value = array[position + 2];
//   switch (symbol) {
//     case "+":
//       array[storageIndex] = parseInt(array[index1Value]) +
//         parseInt(array[index2Value]);
//       return operation(array, position + 4);

//     case "*":
//       array[storageIndex] = parseInt(array[index1Value]) *
//         parseInt(array[index2Value]);
//       return operation(array, position + 4);
//   }
// };

// Opcode 5 is jump-if-true: if the first parameter is non-zero,
//  it sets the instruction pointer to the value from the second parameter. Otherwise, it does nothing.

const parseInstr = (num) => {
  const data = num.toString();
  const v = data.length === 5 ? data : ("0").repeat(5 - data.length) + data;
  return v;
};

const operation = (instruction, position) => {
  // console.log("inst:", instruction[position]);
  if (!instruction[position]) {
    return instruction
  }
  const inst = parseInstr(instruction[position]);
  const opcode = parseInt(inst[inst.length - 1]);
  // console.log("code:",opcode);
  

  switch (opcode) {
    case 1:
      const positions = inst.split("").map(x => parseInt(x));
      // console.log("position:",positions);
      
      const storageIndex = positions[0] === 0 ? instruction[position + 3] : position + 3;
      const index1Value = positions[2] === 0 ? instruction[position + 1] : position + 1;
      const index2Value = positions[1] === 0 ? instruction[position + 2] : position + 2;
      // console.log("index1:", index1Value);
      instruction[storageIndex] = parseInt(instruction[index1Value]) +
        parseInt(instruction[index2Value]);
      // console.log("add:",instruction)
      return operation(instruction, position + 4);

    case 2:
      const positions2 = inst.split("").map(x => parseInt(x));
      // console.log("position:",positions);
      
      const storageIndex2 = positions2[0] === 0 ? instruction[position + 3]: position + 3 ;
      const index1Value2 = positions2[2] === 0 ? instruction[position + 1]: position + 1;
      const index2Value2 = positions2[1] === 0 ? instruction[position + 2] : position + 2;
      // console.log("index1:", index1Value);
      instruction[storageIndex2] = parseInt(instruction[index1Value2]) *
        parseInt(instruction[index2Value2]);
      return operation(instruction, position + 4);

    case 3:
      const positions3 = inst.split("").map(x => parseInt(x));

      const storage = positions3[2] === 0 ?instruction[position + 1] : position+1;
      instruction[storage] = 1;
      return operation(instruction, position + 2);

    case 4:
      const positions41 = inst.split("").map(x => parseInt(x));

      const retriver = positions41[2] === 0 ? instruction[position + 1] : position+1;
      const data = instruction[retriver];
      console.log("4:", data);
      return operation(instruction, position + 2);

    case 5:
      const positions4 = inst.split("").map(x => parseInt(x));

      const index1 = positions4[2] === 0 ? instruction[position + 1] : position + 1;
      // console.log(instruction[index1])
      if (instruction[index1] !== 0) {
        const pointer = positions4[1] === 0 ? instruction[instruction[position + 2]] : instruction[position + 2];
        // console.log(pointer);
        return operation(instruction, pointer);
      }
      // console.log("5:",position +3)
      return operation(instruction, position + 3);

    case 6:
      const positions5 = inst.split("").map(x => parseInt(x));

      const index2 = positions5[2] === 0 ? instruction[position + 1] : position + 1;
      // console.log(instruction[index2])
      if (instruction[index2] === 0) {
        const pointer2 = positions5[1] === 0 ? instruction[instruction[position + 2]] : instruction[position + 2];
        // console.log(pointer2);
        return operation(instruction, pointer2);
      }
      // console.log("6:", position +2)
      return operation(instruction, position + 3);

    case 7:
      const positions6 = inst.split("").map(x => parseInt(x));

      const index31 = positions6[1] === 0 ? instruction[position + 1] : position + 1;
      const index32 = positions6[2] === 0 ? instruction[position + 2] : position + 2;
      // console.log(instruction[index31])
      // console.log(instruction[index32])
      const pointer3 = positions6[0] === 0 ? instruction[position + 3] : position + 3;
      instruction[pointer3] = 0;
      if (instruction[index31] < instruction[index32]) {
        instruction[pointer3] = 1;
        
      }
        return operation(instruction, position + 4);

    case 8:
      const positions7 = inst.split("").map(x => parseInt(x));

      const index41 = positions7[1] === 0 ? instruction[position + 1] : position + 1;
      const index42 = positions7[2] === 0 ? instruction[position + 2] : position + 2;
      // console.log(instruction[index31])
      // console.log(instruction[index32])
      const pointer4 = positions7[0] === 0 ? instruction[position + 3] : position + 3;
      instruction[pointer4] = 0;
      if (instruction[index41] === instruction[index42]) {
        instruction[pointer4] = 1;
        
      }
        return operation(instruction, position + 4);
  }
  return instruction;
};

const input = "3,21,1008,21,8,20,1005,20,22,107,8,21,20,1006,20,31,1106,0,36,98,0,0,1002,21,125,20,4,20,1105,1,46,104,999,1105,1,46,1101,1000,1,20,4,20,1105,1,46,98,99";
const opcode1 = input.split(",").map((x) => parseInt(x));
// console.log(opcode);

const data = operation(opcode1, 0);
console.log(data);