set -x

mkdir -p docs
npx depcruise src --include-only "^src" --config --output-type html > docs/dependency-graph.html
npx depcruise src --include-only "^src" --config --output-type dot | dot -T svg > docs/dependency-graph.svg