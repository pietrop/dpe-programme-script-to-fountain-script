// from https://github.com/brudil/timothy/blob/master/src/parser.ts
// converted from typescript using
// https://www.typescriptlang.org/play?#code/KYDwDg9gTgLgBMAdgVwLZwCoQNZLgbwCg44BhACwEMpKBjGYKOAXjgHJaqb7G2AaYpgCWMADbAACpQDmwFuxgjxU2f0EBlWkmAAJYJQAmQxNPlsAzlsS79Rk2pKbtAOTQAjRmcsv3vASQwaRHMRIQhEMxggkMVwhzgAESFKUQhpZDlWNiMUtIz4qSgkGHJgRVoUszBqYtLylPiAQXowiKy6WMR40mLGYAMzKwYig3j1YBbwrwnOsYBPRAgwEPMvBaWV+OcIBjNFhi2d4ABJRFFjTPZ9k7OL+IAhcOA56gGstyeXqFH-OBVge5FSjYKoyAFA7DxAAyF0B+hBWXO1jhwPiAFFUGAqCszMBMdihOZ4gAxAAaZgAZiAHhBRAZjjAUkJaABVRAGRhIy5sD50hlM1nszl3X6POlsjlQLlmXkGCXC6zxfnnQWS6VZEQC+VSkWCMX0xkqmW0g0Cml0410pWG5lmTUq+La9XsZBCnWK37qMDnGDDLzekTDbriSjWJhZWghsNjRns15CABeniy5ljBnjSag8QA6uQRMBzNUtOH2AB3PMMQt0PyEAC+hEIoEgsDgxmGFOrmBwSASlEZBEEMDmYGAAC4u7gIgAfOCpqDGaQAbkHoBg47nC+X9cItHCqbgRVkIAAspQwOP8HAANowbuIddRBcAXXHACVgNI0eA4LX5EQSFeWCTgAdBgSiSGCL5wAA9AAegAFPBAD8o6KGIwBTrQIwiFOlDICU0BXuYT5IVOFLQKgfZTuYEDIFAWhTtc5hTgYNAUjALFsfA6YMCxfYYbuiCMvQ1GMEIBaYUsczztI5AwAAlAAOqO8nQdIQioAIgiAXewFONYeiGM+45wYhKGKQAVPgAAMfAAMy1gA+kh8lIcho7uW2U6rt5qZTkIinQcA8lXsBcBPvJwEANTyVOCHmcByEAISKdF8nyfBaXQUIvw6SB+k2EZJhQdB8FwBZADEmUxRV5WqVpAFAUgoHRKE4QlQh7nEo0CRonA7kYAA8nA9xQo0pAANJToNLIYLFpCzZgw2jeNE1KcBU7RUtymxfFo4AHx1dV9UNo1ulkh1iHEoFpJTo0GDHoN6hTgA4q+jTHuokX9WlJ3aU1iDAUkuTpMAl1Xo0AC0ABaFmOU+UVXtZkMAJxQ9DP2OYpkNsPJT4WRlimwS5bnmYgyWKYgMUZVeinmIp6gIydZ0gYUtRlMyKSXYp1WKelAAk0ENdeAPAc0nSXVl0i5aLPRCX0BiXShh0E8d7nlQAPITgMxRZanC3lzXjJMiCXRVMXq6rwEE0L-26eo6zLISSujopzAU8wMVHdbf0s812wMC7ilXvgABMtYU1e1Nq+ZT5hxHSEpVHAu237gMBzcXIle5wfx5H0e0-TjNRS5Odx+H+fpfrdsgY81hfIrJnwbBgWWXFlmBfJgvS6dIu6f8KLYB1bv4HZfC1oLMu6TCyIQh1BDh5PveG4DGJYpQKzZ45U6WfgACM9m1lOWNWQfDk76fh+ORlaXwdvu9n0fJ-74fF8vw51-V2nwH6sqzJOhcLe+9ay7wcshZg0VQFOWAbFKBjlgHgOivAveICrIOXStVUucDgHH2AVA1SPdv76gAdYIBKDd4VyQhAqKFDoEoNgVZcOyCE7UOYbQjB0UsGMLoU-PB3CCFTxAn-VUCowZNxQmw0+LDIFSOYQw4BzDEFRUkTAm+JdCayJwSo+hX8+61xNMI7OUClH4LUVw0etYBE12avqIx3CTH8LMRo+OVjv6GKbg-aRNCpEcPUfBTxri9HNRIWImCd8EFUKQaozBGU5HV2sYDL0PphglUpmHceuiV7AVIFGRgw8qY7ypkvb+6g0wZjySZRSUBKY7ygJk0WuZ8xVmLMPGAUU4oEDHrWNSmk6zLkIBSV0Js4DiBAIweClh5xgDXLOR8Jh5IDhIEUGAdEIiTKENMwQJBgJFG9NWeCh5QCnjAMBD49dXh8HYJTfme9Ka4y2XAHZwA9laAOR+I5Z5gKplDOmb4iZGCXLYHc+SDynkvOAG8o8xysk5P0GGJ8gL7kkG2bs0Q+zDknk+eWJpRYAXsFxluBsgzEDDNvJOf5EysIbJmRueZF44BkqQOYccoY5iLjgKgMohg+yUBZYgOYP5FlwAAG7UFnPReQozxnrOmZFQsPpIUfJOfKwMjB5K-BIEIeQ5h6LAXECYEoGqRkXCNZRGAnAjXVFgOYI1DAQAwFNVyo1IBnX6qNQYZAKRbV3lWKwK8T5+kkEEvuTljIeK8qFQBXAcwHzzmKrGzcghfysHwLWQNcBsXiH6kISGkMFn-mRc6HVtArxCADb3Eg0FoIMvAnAaosgHlCApP1DF0LRZgXQv8J8wFKwwHglydKkbkVms4JKi4DzkWPNRei95mKwBZI7coSCgLrl7yRZO5FXyAx9tbZ8lVvo1UTs3UUYVjBzAQvksuDdcByJMHgiAeQtk4AgH1fIEd5A9VIGkCUdlD6NbPv1b+qKXsC3XqtTAX1HK+ycCvCAbt07Xm7pOZGOFeK2C4y3Qq6CylKZ60vUeoNe54DRvkOB8wSMnwEc3Y+VA8EQXXsnT2iAUIIClkYKQDeF6qMoueWi15bB2CAscgSqjTb+rRvzdxjlXLw1XmjU+Uj1AINXj3t2mjdGr0MfrNe7TG7BKKBQMATTJBtyTqrbOKwchShFWkOYRtzbELvrHdYYC77FVzqyQVQydhpARUHaB5Fdr4CsHfSphTU4ZyhdDuWo9Yn4JBeAsYDkIBBoUnggJ9gCykrMFYAl-V37yBwEhnAUOkmGOtgc-BUNlB5AJbc0hr5lnHIoFQB4KA6Uyvlek-2ELXKrzReMwxoLtXVxgr4xChr3hrDNd8FARF+Hyu6evYy4IwEwDIHMOQeCAXlvDjHOwKbwBHLWZ8-EcrQXxxBaNdew7M3WuMHHNVuAEW4Cug5BSC4BhrvIssYNkzR79PGAyIN0zyLzNDAVvZ-qVXoOFdYFyVzsP3PHOAhDkYHWh0kBW+YNbG2tuXiHCOccHBegjH4Ay1cj3YcUbG-s6C+0pwa31vihZv2AfhAM8Dh5oPK3VqiKGGIrQ7OTrizD81cPjUufq7OlH-PghtUQBjnbDKfW4829thle3idy8F3ES5F2oPi7C89yL1Pos-gW3pjnQOjPc4rTBatORUigzgG4VItBsCrGK5wagHQz2XKtezeoohVg-LgE7vIwAoeOdh854AiPxfI8+RH0GSvYsOdC6pxLQoUtpYy7jOA2WQvU6z-lkoRWSudeveZtjbAiitmGH2BcN6oAQHQCUOQHxfRt9e2AS5NEM1yGsP0FXda8cMtKOe13dBsClleMLhjcWosRUxxu7Hav8ea6J+wD1KRHIp4yI5JAowLd-Z+-byd6-1vq4J1rnfyRneH+PwJtnVGyNvup3Zbt+74KlR5pAjBMmGKaCSKE9M9C9dNa9W9fqB9VgJ9F9PAVgMjT9A1cgX9OAf9BAxAIDEDKTYbJApTcjODSAxfBzPLL9cvQ6ayKvLrK-PHbbKTS-O-BrQPISOoTmUQHtAsPtILejLra9JCdgVgjvYPNgRgjdYnA-YAM7fgine1S7Vcb7HTS3RbKjHnNfVXa-TfQnfbDgLgP3LMfXSnQ3GDLPdTVnFQjQycHHLQhg-gnQyQh-SPRyDwdSLoJQ5FXfUQKnI3c3QQuvIQWSGAATccLwuAfw8QdiEI17IUD7awL7NQ-DUTBzLwmg5bTQ+g2-bfbIT1UQffJw0GFwj8YwF-SwyddQydMI4vXwhTQQqIDIOAccDsEPW3crQHQzM-JbH8e3czc9E2aPMXUdeHC4BPTgJPZVGYVoNPdI6wjfOwobO-UWY2ToDwg3ZfDwjkaZcgHw0w7tMvcgb7Nna9dorncono6tKkAYpzYYqXJHJDLJC6aYqwplOYrI-bUWMkfvIccQHY8gfrBFOQmZULL-U-dnISG3EHc42cR2FYK42PG4+PaXKFPdGEwkJ4y-DIm-Lfd4+2VEm1QE3443I4q3cEjou3B5czJiOE8XOPUYrbBra4dEwLTE7QxY3SDOIw+Qkwv41TUE4463Mks4ik6tM5Z4V4akoYyXREu4mXT5UUhuJkrHFk+Y3bbfULayJ8CjFgHLdgaCATfw+U14Iotw6InkT4I05-Q4souAE41o8-YUutMEV3CEBfTVBze40WAeOeLg1MftC4fzI9OgrEhwicZqL0+EPkkkznO0-7B06UNwF06PD06eWEb03tP06wAMmYl42wt48cUWGecECM4kydW0yEh5IM1k7fUWcWVoTkmZaUYk0HZZVZAgFXawy7VXMAqAc9OjS5arcNH8QlAZIZToR0nsiFQQGVGlOZHueSC8QcH1fMu8XsRkf1TTAcnlelNCH42ZONJcG07CGc-c9lPCAiHshNEwIcusIVFsqACIFbClac-DbcJsaAeAS8K1KfNNIAA
//export
var Token;
(function (Token) {
  Token['Character'] = 'character';
  Token['TitlePage'] = 'titlePage';
  Token['SceneHeading'] = 'sceneHeading';
  Token['SceneNumber'] = 'sceneNumber';
  Token['Transition'] = 'transition';
  Token['Dialogue'] = 'dialogue';
  Token['Parenthetical'] = 'parenthetical';
  Token['Action'] = 'action';
  Token['Centered'] = 'centered';
  Token['Section'] = 'section';
  Token['Synopsis'] = 'synopsis';
  Token['Note'] = 'note';
  Token['NoteInline'] = 'noteInline';
  Token['Boneyard'] = 'boneyard';
  Token['PageBreak'] = 'pageBreak';
  Token['LineBreak'] = 'lineBreak';
  Token['Emphasis'] = 'emphasis';
  Token['FX'] = 'fx';
  Token['BoldItalicUnderline'] = 'boldItalicUnderline';
  Token['BoldUnderline'] = 'boldUnderline';
  Token['ItalicUnderline'] = 'italicUnderline';
  Token['BoldItalic'] = 'boldItalic';
  Token['Bold'] = 'bold';
  Token['Italic'] = 'italic';
  Token['Underline'] = 'underline';
  Token['Splitter'] = 'splitter';
  Token['Cleaner'] = 'cleaner';
  Token['Standardizer'] = 'standardizer';
  Token['Whitespacer'] = 'whitespacer';
})(Token || (Token = {}));
const regexMap = {
  [Token.TitlePage]: /^((?:title|credit|author[s]?|format|source|notes|draft|draft date|date|contact|series|copyright)\:)/gim,
  [Token.SceneHeading]: /^((?:\*{0,3}_?)?(?:(?:int|ext|est|i\/e)[. ]).+)|^(?:\.(?!\.+))(.+)/i,
  [Token.SceneHeading]: /( *#(.+)# *)/,
  [Token.Transition]: /^((?:FADE (?:TO BLACK|OUT)|CUT TO BLACK)\.|.+ TO\:)|^(?:> *)(.+)/,
  [Token.FX]: /^((F\/X|ATMOS|GRAMS). (.+))/,
  [Token.Dialogue]: /^([A-Z*_]+[0-9A-Z (._\-')]*)(\^?)?(?:\n(?!\n+))([\s\S]+)/,
  [Token.Parenthetical]: /^(\(.+\))$/,
  [Token.Action]: /^(.+)/g,
  [Token.Centered]: /^(?:> *)(.+)(?: *<)(\n.+)*/g,
  [Token.Section]: /^(#+)(?: *)(.*)/,
  [Token.Synopsis]: /^(?:\=(?!\=+) *)(.*)/,
  [Token.Note]: /^(?:\[{2}(?!\[+))(.+)(?:\]{2}(?!\[+))$/,
  [Token.NoteInline]: /(?:\[{2}(?!\[+))([\s\S]+?)(?:\]{2}(?!\[+))/g,
  [Token.Boneyard]: /(^\/\*|^\*\/)$/g,
  [Token.PageBreak]: /^\={3,}$/,
  [Token.LineBreak]: /^ {2}$/,
  [Token.Emphasis]: /(_|\*{1,3}|_\*{1,3}|\*{1,3}_)(.+)(_|\*{1,3}|_\*{1,3}|\*{1,3}_)/g,
  [Token.BoldItalicUnderline]: /(_{1}\*{3}(?=.+\*{3}_{1})|\*{3}_{1}(?=.+_{1}\*{3}))(.+?)(\*{3}_{1}|_{1}\*{3})/g,
  [Token.BoldUnderline]: /(_{1}\*{2}(?=.+\*{2}_{1})|\*{2}_{1}(?=.+_{1}\*{2}))(.+?)(\*{2}_{1}|_{1}\*{2})/g,
  [Token.ItalicUnderline]: /(?:_{1}\*{1}(?=.+\*{1}_{1})|\*{1}_{1}(?=.+_{1}\*{1}))(.+?)(\*{1}_{1}|_{1}\*{1})/g,
  [Token.BoldItalic]: /(\*{3}(?=.+\*{3}))(.+?)(\*{3})/g,
  [Token.Bold]: /(\*{2}(?=.+\*{2}))(.+?)(\*{2})/g,
  [Token.Italic]: /(\*{1}(?=.+\*{1}))(.+?)(\*{1})/g,
  [Token.Underline]: /(_{1}(?=.+_{1}))(.+?)(_{1})/g,
  [Token.Splitter]: /\n{2,}/g,
  [Token.Cleaner]: /^\n+|\n+$/,
  [Token.Standardizer]: /\r\n|\r/g,
  [Token.Whitespacer]: /^\t+|^ {3,}/gm,
};
function lexer(script) {
  return script
    .replace(regexMap.boneyard, '\n$1\n')
    .replace(regexMap.standardizer, '\n')
    .replace(regexMap[Token.Cleaner], '')
    .replace(regexMap.whitespacer, '');
}
function tokenize(script) {
  var src = lexer(script).split(regexMap.splitter),
    i = src.length,
    line,
    match,
    parts,
    text,
    meta,
    x,
    xlen,
    dual,
    tokens = [];
  const metadata = {};
  while (i--) {
    line = src[i];
    // title page
    if (regexMap[Token.TitlePage].test(line)) {
      match = line.replace(regexMap[Token.TitlePage], '\n$1').split(regexMap.splitter).reverse();
      for (x = 0, xlen = match.length; x < xlen; x++) {
        parts = match[x].replace(regexMap.cleaner, '').split(/\:\n*/);
        const key = parts[0].trim().toLowerCase().replace(' ', '_');
        if (key) {
          metadata[key] = parts[1].trim();
        }
      }
      continue;
    }
    // scene headings
    if ((match = line.match(regexMap[Token.SceneHeading]))) {
      text = match[1] || match[2];
      if (text.indexOf('  ') !== text.length - 2) {
        if ((meta = text.match(regexMap.scene_number))) {
          meta = meta[2];
          text = text.replace(regexMap.scene_number, '');
        }
        tokens.push({
          type: 'scene_heading',
          text: text,
          scene_number: meta || undefined,
        });
      }
      continue;
    }
    // centered
    if ((match = line.match(regexMap.centered))) {
      tokens.push({ type: 'centered', text: match[0].replace(/>|</g, '') });
      continue;
    }
    // transitions
    if ((match = line.match(regexMap.transition))) {
      tokens.push({ type: 'transition', text: match[1] || match[2] });
      continue;
    }
    // dialogue blocks - characters, parentheticals and dialogue
    if ((match = line.match(regexMap.dialogue))) {
      if (match[1].indexOf('  ') !== match[1].length - 2) {
        // we're iterating from the bottom up, so we need to push these backwards
        if (match[2]) {
          tokens.push({ type: 'dual_dialogue_end' });
        }
        tokens.push({ type: 'dialogue_end' });
        parts = match[3].split(/(\(.+\))(?:\n+)/).reverse();
        for (x = 0, xlen = parts.length; x < xlen; x++) {
          text = parts[x];
          if (text.length > 0) {
            tokens.push({
              type: regexMap.parenthetical.test(text) ? 'parenthetical' : 'dialogue',
              text: text,
            });
          }
        }
        tokens.push({ type: 'character', text: match[1].trim() });
        tokens.push({
          type: 'dialogue_begin',
          dual: match[2] ? 'right' : dual ? 'left' : undefined,
        });
        if (dual) {
          tokens.push({ type: 'dual_dialogue_begin' });
        }
        dual = match[2] ? true : false;
        continue;
      }
    }
    // section
    if ((match = line.match(regexMap.section))) {
      tokens.push({
        type: Token.Section,
        text: match[2],
        depth: match[1].length,
      });
      continue;
    }
    // fx
    if ((match = line.match(regexMap[Token.FX]))) {
      tokens.push({ type: Token.FX, style: match[2], text: match[3] });
      continue;
    }
    // synopsis
    if ((match = line.match(regexMap.synopsis))) {
      tokens.push({ type: Token.Synopsis, text: match[1] });
      continue;
    }
    // notes
    if ((match = line.match(regexMap.note))) {
      tokens.push({ type: Token.Note, text: match[1] });
      continue;
    }
    // boneyard
    if ((match = line.match(regexMap.boneyard))) {
      tokens.push({
        type: match[0][0] === '/' ? 'boneyard_begin' : 'boneyard_end',
      });
      continue;
    }
    // page breaks
    if (regexMap[Token.PageBreak].test(line)) {
      tokens.push({ type: Token.PageBreak });
      continue;
    }
    // line breaks
    if (regexMap[Token.LineBreak].test(line)) {
      tokens.push({ type: Token.LineBreak });
      continue;
    }
    tokens.push({ type: Token.Action, text: line });
  }
  return { tokens: tokens.reverse(), metadata };
}
function parse(script) {
  return tokenize(script);
}
module.exports = { parse, Token };
