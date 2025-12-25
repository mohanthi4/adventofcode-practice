// Find the input noun and verb that cause the program to produce the output 19690720.
//  What is 100 * noun + verb ? (For example, if noun = 12 and verb = 2, the answer would be 1202.)\
import { chunk } from "jsr:@std/collections/chunk";

const parseInstructions = (program) => {
  const instruction = chunk(program, 10);
  const pro = instruction.map((x) =>
    x.map((y) => y.toString().padStart(10)).join("")
  ).join("\n");
  return pro;
};

const display = (program, opcode) => {
  console.log("opcode:", program[opcode]);
  console.log("current program:");
  console.log(parseInstructions(program));
};

const debuger = (array, opcode) => {
  console.clear();
  display(array, opcode);
  prompt();
};

const opertionToDo = (array, position, task) => {
  const [input1, input2, output] = array.slice(position + 1, position + 4);
  switch (task) {
    case "add":
      array[output] = parseInt(array[input1]) + parseInt(array[input2]);
      break;

    case "mul":
      array[output] = parseInt(array[input1]) * parseInt(array[input2]);
    }
  return programExecution(array, position + 4);
};

const programExecution = (instruction, position) => {
  debuger(instruction, position);
  switch (instruction[position]) {
    case 1:
      return opertionToDo(instruction, position, "add");

    case 2:
      return opertionToDo(instruction, position, "mul");
  }
  return instruction;
};

const passingValues = (program) => {
  for (let index1Value = 0; index1Value <= 99; index1Value++) {
    for (let index2Value = 0; index2Value <= 99; index2Value++) {
  let instructions = [...program];
  instructions[1] = index1Value;
  instructions[2] = index2Value;
  const data = programExecution(instructions, 0);

  if (data[0] === 19690720) {
    const noun = data[1];
    const verb = data[2];
    const result = 100 * noun + verb;
    console.log(result);
  }
  instructions = [...program];
    }
  }
};

const input = Deno.readTextFileSync("./input.txt");
const program = input.split(",").map((x) => parseInt(x));
passingValues(program);
