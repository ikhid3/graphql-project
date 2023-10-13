set -x

mkdir -p docs
npx depcruise src --include-only "^src" --config ./config/.dependency-cruiser.js --output-type html > docs/dependency-graph.html
npx depcruise src --include-only "^src" --config ./config/.dependency-cruiser.js --output-type dot | dot -T svg > docs/dependency-graph.svg