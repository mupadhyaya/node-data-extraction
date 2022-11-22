// run `node index.js` in the terminal

const dt = require('./data.json');

console.log(dt.entry);
dt.entry.forEach((d) => {
  console.log(d.resource.identifier[0].value);
});
