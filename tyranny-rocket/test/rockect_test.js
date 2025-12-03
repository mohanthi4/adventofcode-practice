import { fuelRequirement, roundedDivision } from "../src/rockect.js";
import { assertEquals } from "@std/assert";

Deno.test("module 1 : division by 3 and rounded", () => {
  const input = 12;
  assertEquals(roundedDivision(input), 4);
});

Deno.test("module 1 : fuel", () => {
  const input = 12;
  assertEquals(fuelRequirement(input), 2);
});

Deno.test("module 2 : division by 3 and rounded", () => {
  const input = 14;
  assertEquals(roundedDivision(input), 4);
});

Deno.test("module 2 : fuel", () => {
  const input = 14;
  assertEquals(fuelRequirement(input), 2);
});

Deno.test("module 3 : fuel", () => {
  const input = 1969;
  assertEquals(fuelRequirement(input), 654);
});

Deno.test("module 4 : fuel", () => {
  const input = 100756;
  assertEquals(fuelRequirement(input), 33583);
});
