const fs = require('fs');
const fountainToHtml = require('./index.js');
// console.log(programmeScriptExample);

var sampleFountainText = `Title:
    _**BRICK & STEEL**_
    _**FULL RETIRED**_
Credit: Written by
Author: Stu Maschwitz
Source: Story by KTM
Draft date: 1/20/2012
Contact:
    Next Level Productions
    1588 Mission Dr.
    Solvang, CA 93463

.SNIPER SCOPE POV

They drink long and well from the beers.

[[It was supposed to be Vietnamese, right?]]

SANBORN
A good 'ole boy. You know, loves the Army, blood runs green. Country boy. Seems solid.

SANBORN
A good 'ole boy. You know, loves the Army, blood runs green. Country boy. Seems solid.

`;

const htmlPage = fountainToHtml(sampleFountainText);

fs.writeFileSync('./public/index.html', htmlPage);
