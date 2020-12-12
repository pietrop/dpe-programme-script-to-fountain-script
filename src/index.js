const makeFountainFromDpeProgrammeScript = require('./dpe-to-fountain/index.js');
const fountainToHtml = require('./fountain-to-html/index.js');

function dpeToFountainHtml(programmeScript) {
  const fountainText = makeFountainFromDpeProgrammeScript(programmeScript);
  const htmlPage = fountainToHtml(fountainText);
  return htmlPage;
}

module.exports = dpeToFountainHtml;
module.exports.makeFountainFromDpeProgrammeScript = makeFountainFromDpeProgrammeScript;
module.exports.fountainToHtml = fountainToHtml;
