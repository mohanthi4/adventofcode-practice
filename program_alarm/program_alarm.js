// Find the input noun and verb that cause the program to produce the output 19690720.
//  What is 100 * noun + verb ? (For example, if noun = 12 and verb = 2, the answer would be 1202.)

const opertionToDo = (array, position, symbol) => {
  const storageIndex = array[position + 3];
  const index1Value = array[position + 1];
  const index2Value = array[position + 2];
  switch (symbol) {
    case "+" :
      array[storageIndex] = parseInt(array[index1Value]) + parseInt(array[index2Value]);
        return operation(array, position + 4)
    
    case "*" :
      array[storageIndex] = parseInt(array[index1Value]) * parseInt(array[index2Value]);
        return operation(array, position + 4)
    
  }
};

const operation = (instruction, position) => {
  // console.log(position)
  switch (instruction[position]) {
    case 1:
      return opertionToDo(instruction, position, "+");
            
    case 2:
      return opertionToDo(instruction, position, "*");
  }
  return instruction;
};

const input =
  "1,0,0,3,1,1,2,3,1,3,4,3,1,5,0,3,2,9,1,19,1,5,19,23,2,9,23,27,1,27,5,31,2,31,13,35,1,35,9,39,1,39,10,43,2,43,9,47,1,47,5,51,2,13,51,55,1,9,55,59,1,5,59,63,2,6,63,67,1,5,67,71,1,6,71,75,2,9,75,79,1,79,13,83,1,83,13,87,1,87,5,91,1,6,91,95,2,95,13,99,2,13,99,103,1,5,103,107,1,107,10,111,1,111,13,115,1,10,115,119,1,9,119,123,2,6,123,127,1,5,127,131,2,6,131,135,1,135,2,139,1,139,9,0,99,2,14,0,0";
const opcode = input.split(",").map((x) => parseInt(x));

for (let index1Value = 0; index1Value <= 99; index1Value++) {
  for (let index2Value = 0; index2Value <= 99; index2Value++) {
    let instructions = [...opcode];
    // console.log("before:",fakeInstruction)
    instructions[1] = index1Value;
    instructions[2] = index2Value;
    // console.log("after : 1", fakeInstruction);
    // console.log("after : 2",fakeInstruction);
    const data = operation(instructions, 0);
    
    if (data[0] === 19690720) {
      console.log(data);
      const noun = data[1];
      const verb = data[2];
      const result = 100 * noun + verb;
      console.log(result);
    }
    instructions = [...opcode];
  }
}
