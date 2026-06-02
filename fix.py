import re

with open("c:/Project/Portfoli0/src/data/index.tsx", "r") as f:
    text = f.read()

# We only care about replacing the sequence inside 'all: { ... }'.
# To be safe, we capture the section for `all: { ... },`
start_marker = "all: {"
end_marker = "about: {"
start_idx = text.find(start_marker)
end_idx = text.find(end_marker)

all_text = text[start_idx:end_idx]

# Map old index to new name
replacements = {
    'i: "alliance-landing"': 'i: "X_wealth-tracker"',
    'i: "alliance-dao"': 'i: "X_alliance-landing"',
    'i: "station-ui"': 'i: "X_alliance-dao"',
    'i: "station-landing"': 'i: "X_station-ui"',
    'i: "station-setup"': 'i: "X_station-landing"',
    'i: "developer-landing"': 'i: "X_station-setup"',
    'i: "wealth-tracker"': 'i: "X_developer-landing"'
}

for old, newp in replacements.items():
    all_text = all_text.replace(old, newp)

all_text = all_text.replace('i: "X_', 'i: "')

final_text = text[:start_idx] + all_text + text[end_idx:]

with open("c:/Project/Portfoli0/src/data/index.tsx", "w") as f:
    f.write(final_text)

print("success")
