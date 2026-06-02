const fs = require('fs');

const file = 'c:/Project/Portfoli0/src/data/index.tsx';
let content = fs.readFileSync(file, 'utf8');

// The sequence of projects to shift
const projectsToShift = [
  "alliance-landing",
  "alliance-dao",
  "station-ui",
  "station-landing",
  "station-setup",
  "developer-landing",
  "wealth-tracker"
];

const newSequence = [
  "wealth-tracker",
  "alliance-landing",
  "alliance-dao",
  "station-ui",
  "station-landing",
  "station-setup",
  "developer-landing"
];

// we will just string replace `i: "target"` sequentially? No, replacing string could modify the wrong thing.
// What we can do is: find the position of each of these `i: "project"` within the file.
// Since they appear in sections (all.lg, all.md, all.sm), there are 3 sections where they appear in this order.
// Let's print out all occurrences of these names to be sure of order.

let lines = content.split('\n');

const orderMap = {
  "alliance-landing": "wealth-tracker",
  "alliance-dao": "alliance-landing",
  "station-ui": "alliance-dao",
  "station-landing": "station-ui",
  "station-setup": "station-landing",
  "developer-landing": "station-setup",
  "wealth-tracker": "developer-landing"
};

// We only want to replace `i: "some-project"`
let newLines = lines.map(line => {
  let mapped = line;
  for (let key of Object.keys(orderMap)) {
    if (line.includes(`i: "${key}"`)) {
       mapped = line.replace(`"${key}"`, `"${orderMap[key]}"`);
       break;
    }
  }
  return mapped;
});

fs.writeFileSync(file, newLines.join('\n'));
console.log("Replaced successfully!");

