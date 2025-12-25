// COM)B
// B)C
// C)D
// D)E
// E)F
// B)G
// G)H
// D)I
// E)J
// J)K
// K)L

// D directly orbits C and indirectly orbits B and COM, a total of 3 orbits.
// L directly orbits K and indirectly orbits J, E, D, C, B, and COM, a total of 7 orbits.
// COM orbits nothing.
// The total number of direct and indirect orbits in this example is 42.

const orbitsRelation = function(data) {
  const orbits = {};
  for (let index = 0; index < data.length; index++) {
    const relations = data[index];
    const orbit = relations.slice(relations.indexOf(")") + 1);
    const orbitTo = relations.slice(0, relations.indexOf(")"));
    orbits[orbit] = orbitTo;
  }
  return orbits;
}

const orbitDistance = function (orbitsObject) {
  const distanceObject = {};
  for (const keys of Object.keys(orbitsObject)) {
    let count = 1;
    let currentKey = orbitsObject[keys];
    while (orbitsObject[currentKey] !== undefined) {
      count++;
      currentKey = orbitsObject[currentKey];
    }
    distanceObject[keys] = count;
  }
  return distanceObject;
}

const totalOrbits = function (data) {
  const orbitsObject = orbitsRelation(data);
  const distances = orbitDistance(orbitsObject);
  return Object.values(distances).reduce((sum, distance) => sum + distance);
};

// const data = `B)C
// C)D
// D)E
// E)F
// B)G
// COM)B
// G)H
// D)I
// E)J
// J)K
// K)L`;

// const data = `A)B
// B)C
// SUN)A
// C)D`

const data = Deno.readTextFileSync("./input.txt");
const parsedata = data.split("\n");
console.log(totalOrbits(parsedata));
