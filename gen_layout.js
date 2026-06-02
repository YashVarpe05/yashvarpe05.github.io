const fs = require('fs');

const indexFile = "c:/Project/Portfoli0/src/data/index.tsx";
let text = fs.readFileSync(indexFile, 'utf8');

const projectSequence = [
  "lumiform",
  "wealth-tracker",
  "alliance-landing",
  "alliance-dao",
  "station-ui",
  "station-landing",
  "station-setup",
  "developer-landing"
];

// Helper to format item
const itemStr = (i, x, y, w, h) => `\t\t\t{\n\t\t\t\ti: "${i}",\n\t\t\t\tx: ${x},\n\t\t\t\ty: ${y},\n\t\t\t\tw: ${w},\n\t\t\t\th: ${h},\n\t\t\t\tisResizable: false,\n\t\t\t},`;

function generateLg() {
  let items = [
    itemStr("bio", 0, 0, 5, 4),
    itemStr("theme-toggle", 9, 1, 4, 3),
    itemStr("map", 5, 1, 3, 3),
    itemStr("text-marquee", 5, 0, 7, 1),
    itemStr("linkedin", 0, 4, 2, 2),
    itemStr("github", 0, 6, 2, 2),
    itemStr("codepen", 0, 8, 2, 2),
    itemStr("email", 2, 8, 4, 2),
    itemStr("my-stack", 2, 4, 4, 4),
    itemStr("jobs", 6, 4, 6, 7)
  ];
  
  let currentY = 11;
  let currentX = 0;
  
  for (let proj of projectSequence) {
    let w = 6;
    let h = 7;
    if (proj === "station-ui") h = 6;
    
    items.push(itemStr(proj, currentX, currentY, w, h));
    
    currentX += 6;
    if (currentX >= 12) {
      currentX = 0;
      currentY += 7; // Approx, RGL handles exact placement snapping anyway.
    }
  }
  return items.join("\n");
}

function generateMd() {
  let items = [
    itemStr("bio", 0, 0, 5, 6),
    itemStr("theme-toggle", 7, 1, 5, 5),
    itemStr("map", 8, 6, 2, 6),
    itemStr("text-marquee", 5, 0, 5, 1),
    itemStr("linkedin", 4, 6, 2, 3),
    itemStr("github", 6, 6, 2, 3),
    itemStr("codepen", 4, 8, 2, 3),
    itemStr("email", 6, 8, 2, 3),
    itemStr("my-stack", 0, 6, 4, 6),
    itemStr("jobs", 1, 12, 8, 10),
  ];
  let currentY = 22;
  let currentX = 0;
  for (let proj of projectSequence) {
    let w = 5;
    let h = 8;
    
    items.push(itemStr(proj, currentX, currentY, w, h));
    
    currentX += 5;
    if (currentX >= 10) {
      currentX = 0;
      currentY += 8;
    }
  }
  return items.join("\n");
}

function generateSm() {
  let items = [
    itemStr("theme-toggle", 0, 0, 4, 5),
    itemStr("jobs", 0, 5, 4, 16),
  ];
  
  let currentY = 21;
  let currentX = 0;
  for (let proj of projectSequence) {
    items.push(itemStr(proj, 0, currentY, 4, 10));
    currentY += 10;
  }
  
  // push remaining smaller items below projects
  items.push(itemStr("text-marquee", 0, currentY, 4, 1));
  items.push(itemStr("bio", 0, currentY+1, 4, 6));
  items.push(itemStr("my-stack", 0, currentY+7, 4, 6));
  items.push(itemStr("linkedin", 0, currentY+13, 2, 3));
  items.push(itemStr("github", 2, currentY+13, 2, 3));
  items.push(itemStr("codepen", 0, currentY+16, 2, 3));
  items.push(itemStr("email", 2, currentY+16, 2, 3));
  items.push(itemStr("map", 0, currentY+19, 4, 6));
  
  return items.join("\n");
}

const newLayoutSection = `\tall: {
\t\tlg: [
${generateLg()}
\t\t],
\t\tmd: [
${generateMd()}
\t\t],
\t\tsm: [
${generateSm()}
\t\t]
\t},`;

// Replace `all: { ... },\n\tabout: {`
const startIdx = text.indexOf("all: {");
const endIdx = text.indexOf("about: {");

const newText = text.substring(0, startIdx) + newLayoutSection + "\n\t" + text.substring(endIdx);
fs.writeFileSync(indexFile, newText);

console.log("Reconstructed layouts perfectly!");
