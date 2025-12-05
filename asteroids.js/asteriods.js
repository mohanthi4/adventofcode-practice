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

const parseInstr = (num) => {
  const data = num.toString();
  const v = data.length === 5 ? data : ("0").repeat(5 - data.length) + data;
  return v;
};

const operation = (instruction, position) => {
  // console.log("inst:",instruction[position]);
  const inst = parseInstr(instruction[position]);
  const opcode = parseInt(inst[inst.length - 1]);
  // console.log("code:",opcode);
  

  switch (opcode) {
    case 1:
      const positions = inst.split("").map(x => parseInt(x));
      // console.log("position:",positions);
      
      const storageIndex = positions[0] === 0 ? instruction[position + 3]: position + 3 ;
      const index1Value = positions[2] === 0 ? instruction[position + 1]: position + 1;
      const index2Value = positions[1] === 0 ? instruction[position + 2] : position + 2;
      // console.log("index1:", index1Value);
      instruction[storageIndex] = parseInt(instruction[index1Value]) +
        parseInt(instruction[index2Value]);
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
      const positions4 = inst.split("").map(x => parseInt(x));

      const retriver = positions4[2] === 0 ? instruction[position + 1] : position+1;
      const data = instruction[retriver];
      console.log("4:", data);
      return operation(instruction, position + 2);
  }
  return instruction;
};

const input = "3,225,1,225,6,6,1100,1,238,225,104,0,1102,68,5,225,1101,71,12,225,1,117,166,224,1001,224,-100,224,4,224,102,8,223,223,101,2,224,224,1,223,224,223,1001,66,36,224,101,-87,224,224,4,224,102,8,223,223,101,2,224,224,1,223,224,223,1101,26,51,225,1102,11,61,224,1001,224,-671,224,4,224,1002,223,8,223,1001,224,5,224,1,223,224,223,1101,59,77,224,101,-136,224,224,4,224,1002,223,8,223,1001,224,1,224,1,223,224,223,1101,11,36,225,1102,31,16,225,102,24,217,224,1001,224,-1656,224,4,224,102,8,223,223,1001,224,1,224,1,224,223,223,101,60,169,224,1001,224,-147,224,4,224,102,8,223,223,101,2,224,224,1,223,224,223,1102,38,69,225,1101,87,42,225,2,17,14,224,101,-355,224,224,4,224,102,8,223,223,1001,224,2,224,1,224,223,223,1002,113,89,224,101,-979,224,224,4,224,1002,223,8,223,1001,224,7,224,1,224,223,223,1102,69,59,225,4,223,99,0,0,0,677,0,0,0,0,0,0,0,0,0,0,0,1105,0,99999,1105,227,247,1105,1,99999,1005,227,99999,1005,0,256,1105,1,99999,1106,227,99999,1106,0,265,1105,1,99999,1006,0,99999,1006,227,274,1105,1,99999,1105,1,280,1105,1,99999,1,225,225,225,1101,294,0,0,105,1,0,1105,1,99999,1106,0,300,1105,1,99999,1,225,225,225,1101,314,0,0,106,0,0,1105,1,99999,7,677,677,224,1002,223,2,223,1006,224,329,1001,223,1,223,1007,226,226,224,1002,223,2,223,1006,224,344,1001,223,1,223,1108,226,677,224, 102, 2, 223, 223, 1005, 224, 359, 1001, 223, 1, 223, 1107, 226, 677, 224, 1002, 223, 2, 223, 1006, 224, 374, 101, 1, 223, 223, 1107, 677, 226, 224, 1002, 223, 2, 223, 1006, 224, 389, 101, 1, 223, 223, 7, 226, 677, 224, 1002, 223, 2, 223, 1005, 224, 404, 101, 1, 223, 223, 1008, 677, 226, 224, 102, 2, 223, 223, 1005, 224, 419, 101, 1, 223, 223, 1008, 226, 226, 224, 102, 2, 223, 223, 1006, 224, 434, 101, 1, 223, 223, 107, 226, 226, 224, 1002, 223, 2, 223, 1005, 224, 449, 1001, 223, 1, 223, 108, 226, 677, 224, 102, 2, 223, 223, 1005, 224, 464, 101, 1, 223, 223, 1108, 677, 226, 224, 102, 2, 223, 223, 1005, 224, 479, 101, 1, 223, 223, 1007, 226, 677, 224, 102, 2, 223, 223, 1006, 224, 494, 101, 1, 223, 223, 107, 677, 677, 224, 102, 2, 223, 223, 1005, 224, 509, 101, 1, 223, 223, 108, 677, 677, 224, 102, 2, 223, 223, 1006, 224, 524, 1001, 223, 1, 223, 8, 226, 677, 224, 102, 2, 223, 223, 1005, 224, 539, 101, 1, 223, 223, 107, 677, 226, 224, 102, 2, 223, 223, 1005, 224, 554, 1001, 223, 1, 223, 8, 226, 226, 224, 102, 2, 223, 223, 1006, 224, 569, 1001, 223, 1, 223, 7, 677, 226, 224, 1002, 223, 2, 223, 1005, 224, 584, 1001, 223, 1, 223, 1108, 226, 226, 224, 102, 2, 223, 223, 1005, 224, 599, 1001, 223, 1, 223, 1107, 677, 677, 224, 1002, 223, 2, 223, 1006, 224, 614, 1001, 223, 1, 223, 1007, 677, 677, 224, 1002, 223, 2, 223, 1006, 224, 629, 1001, 223, 1, 223, 108, 226, 226, 224, 102, 2, 223, 223, 1005, 224, 644, 1001, 223, 1, 223, 8, 677, 226, 224, 1002, 223, 2, 223, 1005, 224, 659, 1001, 223, 1, 223, 1008, 677, 677, 224, 1002, 223, 2, 223, 1006, 224, 674, 1001, 223, 1, 223, 4, 223, 99, 226";
const opcode = input.split(",").map((x) => parseInt(x));
// console.log(opcode);

const data = operation(opcode, 0);
console.log(data);