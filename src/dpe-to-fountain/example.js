/**
 *
 */
const makeFountainFromDpeProgrammeScript = require('./index.js');
const programmeScriptExample = require('../../sample/dpe-programme-script.json');

const fountainText = makeFountainFromDpeProgrammeScript(programmeScriptExample);
console.log(fountainText);

fs.writeFileSync('./public/index.fountain', fountainText);
