// Fuel required to launch a given module is based on its mass.
// Specifically, to find the fuel required for a module, take its mass, divide by three, round down, and subtract 2.

// For example:

// For a mass of 12, divide by 3 and round down to get 4, then subtract 2 to get 2.

// What is the sum of the fuel requirements for all of the modules on your spacecraft?


// // Part 2

// A module of mass 14 requires 2 fuel. 
// This fuel requires no further fuel (2 divided by 3 and rounded down is 0, which would call for a negative fuel),
//  so the total fuel required is still just 2.


// At first, a module of mass 1969 requires 654 fuel.Then, this fuel requires 216 more fuel(654 / 3 - 2).
//  216 then requires 70 more fuel, which requires 21 fuel, which requires 5 fuel, which requires no further fuel.
//   So, the total fuel required for a module of mass 1969 is 654 + 216 + 70 + 21 + 5 = 966.

export const roundedDivision = (mass) => {
  return Math.floor(mass / 3);
};

export const fuelRequirement = (mass) => {
  const roundedThirdPart = roundedDivision(mass);
  return roundedThirdPart - 2;
};

export const totalFuel = (mass) => {
  const data = mass.split("\n");
  return data.reduce((sum,current) => sum + fuelRequirement(parseInt(current)),0)
};
