// Fuel required to launch a given module is based on its mass.
// Specifically, to find the fuel required for a module, take its mass, divide by three, round down, and subtract 2.

// For example:

// For a mass of 12, divide by 3 and round down to get 4, then subtract 2 to get 2.

export const roundedDivision = (mass) => {
  return Math.floor(mass / 3);
};

export const fuelRequirement = (mass) => {
  const roundedThirdPart = roundedDivision(mass);
  return roundedThirdPart - 2;
};
