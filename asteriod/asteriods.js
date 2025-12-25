const modes = {
  0: (instructions,postion) => instructions[postion],
  1: (instructions,position) => position
  
}

const opertions = (instructions, position, currentPosition, action) => {
  const storageIndex = modes[currentPosition[0]](instructions, position + 3);
  const parameter1 = modes[currentPosition[2]](instructions, position + 1);
  const parameter2 = modes[currentPosition[1]](instructions, position + 2);

  switch (action) {
    case "addition":
      instructions[storageIndex] = instructions[parameter1] + instructions[parameter2];
      break;

    case "multiplication":
      instructions[storageIndex] = instructions[parameter1] * instructions[parameter2];
      break;

    case "lessthan":
      instructions[storageIndex] = instructions[parameter1] < instructions[parameter2] ? 1 : 0;
      break;

    case "equals":
      instructions[storageIndex] = instructions[parameter1] === instructions[parameter2] ? 1 : 0;
    }
  return executeInstructions(instructions, position + 4);
}

const singleValuedOperations = (instructions, position, currentPosition, action, value = 1) => {
  const storage = modes[currentPosition[2]](instructions, position + 1);
  
  switch (action) {
    case "read": instructions[storage] = value; break;
    case "write": console.log("final value:", instructions[storage]); 
  }
  return executeInstructions(instructions, position + 2);
}

const jumpOperations = (instructions, position, currentPosition, action) => {
  const index1 = modes[currentPosition[2]](instructions, position + 1);
  const pointer = modes[currentPosition[1]](instructions, instructions[position + 2]);
  switch (action) {
    case "nonZero": if (instructions[index1] !== 0) {
      return executeInstructions(instructions, pointer);
    } break;
      
    case "zero": if (instructions[index1] === 0) {
      return executeInstructions(instructions, pointer);
    }
  }
  return executeInstructions(instructions, position + 3);
}

const executeInstructions = (instructions, position) => {
  const instruction = String(instructions[position]).padStart(5,"0");
  const opcode = parseInt(instruction.slice(3));
  const currentPosition = instruction.split("").map(x => parseInt(x));
  
  switch (opcode) {
    case 1:
      return opertions(instructions, position,currentPosition, "addition");

    case 2:
     return opertions(instructions, position,currentPosition, "multiplication");

    case 3:
      return singleValuedOperations(instructions, position, currentPosition,"read", 5);

    case 4:
      return singleValuedOperations(instructions, position, currentPosition,"write");

    case 5:
      return jumpOperations(instructions, position, currentPosition, "nonZero");

    case 6:
      return jumpOperations(instructions, position, currentPosition, "zero");

    case 7:
      return opertions(instructions, position,currentPosition, "lessthan");

    case 8:
      return opertions(instructions, position,currentPosition, "equals");
  }
  return instructions;
}

const input = Deno.readTextFileSync("./input.txt");
const instructions = input.split(",").map((x) => parseInt(x));
console.log(executeInstructions(instructions, 0));