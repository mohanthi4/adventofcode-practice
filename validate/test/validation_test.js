import { validateCard } from "../src/validation.js";
import { assertEquals } from "@std/assert";

Deno.test("simple card ", () => {
  const input = "1234";
  assertEquals(validateCard(input), false);
});

Deno.test("own card ", () => {
  const input = "452687";
  assertEquals(validateCard(input), false);
});

Deno.test("large card valid ", () => {
  const input = "79927398713";
  assertEquals(validateCard(input), true);
});

Deno.test("large card invalid", () => {
  const input = "79927398710";
  assertEquals(validateCard(input), false);
});

Deno.test("large spaces card", () => {
  const input =  "7992 7398 713";
  assertEquals(validateCard(input), true);
});