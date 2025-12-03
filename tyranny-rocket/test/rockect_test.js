import {  totalFuelPart2 } from "../src/rockect.js";
import { assertEquals } from "@std/assert";

// Deno.test("module 1 : division by 3 and rounded", () => {
//   const input = 12;
//   assertEquals(roundedDivision(input), 4);
// });

// Deno.test("module 1 : fuel", () => {
//   const input = 12;
//   assertEquals(fuelRequirement(input), 2);
// });

// Deno.test("module 2 : division by 3 and rounded", () => {
//   const input = 14;
//   assertEquals(roundedDivision(input), 4);
// });

// Deno.test("module 2 : fuel", () => {
//   const input = 14;
//   assertEquals(fuelRequirement(input), 2);
// });

// Deno.test("module 3 : fuel", () => {
//   const input = 1969;
//   assertEquals(fuelRequirement(input), 654);
// });

// Deno.test("module 4 : fuel", () => {
//   const input = 100756;
//   assertEquals(fuelRequirement(input), 33583);
// });

// Deno.test("input data", () => {
//   const input = Deno.readTextFileSync("./data/input.txt");
//   assertEquals(totalFuelPart1(input), 3332538);
// });

// Deno.test("module 1 part2", () => {
//   const input = 14;
//   assertEquals(fuelRequirement2(input), 2);
// });

// Deno.test("module 2 part2", () => {
//   const input = 1969 ;
//   assertEquals(fuelRequirement2(input), 966);
// });

// Deno.test("module 3 part2", () => {
//   const input = 100756;
//   assertEquals(fuelRequirement2(input), 50346);
// });

Deno.test("input part2", () => {
  const input = Deno.readTextFileSync("./data/input.txt");
  assertEquals(totalFuelPart2(input), 4972784);
});
