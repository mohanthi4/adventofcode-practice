const orbitsRelation = function(data) {
  const orbits = {};
  for (let index = 0; index < data.length; index++) {
    const relations = data[index];
    const orbit = relations.slice(relations.indexOf(")") + 1);
    const orbitTo = relations.slice(0, relations.indexOf(")"));
    orbits[orbit] = orbits[orbit] ? [orbits[orbit], orbitTo] : orbitTo;
  }
  return orbits;
}

const orbitDistance = function (orbitsObject,keyFrom) {
  const distanceObject = {};
    const count = [];
    let currentKey = orbitsObject[keyFrom];
    while (currentKey !== undefined) {
      count.push(currentKey);
      currentKey = orbitsObject[currentKey];
    }
    distanceObject[keyFrom] = count;
  return distanceObject;
}

const countTransfers = function (youDistance, sanDistance) {
  let count1 = 0;
  for (const val1 of youDistance) {
    let count2 = 0;
    for (const val2 of sanDistance) {
      if (val1 === val2) {
        return count1+count2;
      }
      count2++;
    }
    count1++
  }
  return false;
}

const parseDistance = (distance) => Object.values(distance).flat();

const totalOrbits = function (data) {
  const orbitsObject = orbitsRelation(data);
  const youDistance = orbitDistance(orbitsObject,"YOU");
  const sanDistance = orbitDistance(orbitsObject, "SAN");
  const minimumTransfers = countTransfers(parseDistance(youDistance),parseDistance(sanDistance))
  return minimumTransfers;
};

// const data = `COM)B
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
// K)YOU
// I)SAN`;

// const data = `A)B
// B)C
// SUN)A
// C)D`

const data = Deno.readTextFileSync("./input2.txt");
const parsedata = data.split("\n");
console.log(totalOrbits(parsedata));