const fs = require('fs');

const text = fs.readFileSync("c:/Project/Portfoli0/src/data/index.tsx", "utf8");

// We only care about replacing the sequence inside 'all: { ... }'.
const start_idx = text.indexOf("all: {");
const end_idx = text.indexOf("about: {");

let all_text = text.substring(start_idx, end_idx);

const replacements = {
    'i: "alliance-landing"': 'i: "X_wealth-tracker"',
    'i: "alliance-dao"': 'i: "X_alliance-landing"',
    'i: "station-ui"': 'i: "X_alliance-dao"',
    'i: "station-landing"': 'i: "X_station-ui"',
    'i: "station-setup"': 'i: "X_station-landing"',
    'i: "developer-landing"': 'i: "X_station-setup"',
    'i: "wealth-tracker"': 'i: "X_developer-landing"'
};

for (const [old_str, new_str] of Object.entries(replacements)) {
    all_text = all_text.split(old_str).join(new_str);
}

all_text = all_text.split('i: "X_').join('i: "');

const final_text = text.substring(0, start_idx) + all_text + text.substring(end_idx);

fs.writeFileSync("c:/Project/Portfoli0/src/data/index.tsx", final_text);

console.log("success");
