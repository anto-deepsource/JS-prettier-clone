run_spec(
  {
    dirname: __dirname,
    snippets: ["({}) = x;"],
  },
  ["babel", "babel-ts", "acorn", "espree", "meriyah"]
);
