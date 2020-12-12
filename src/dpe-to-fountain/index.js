/**
 *
 * @param {*} params
 * https://fountain.io/syntax#section-titlepage
 * > Values can be inline with the key or they can be indented on a newline below the key (as shown with Contact above). Indenting is 3 or more spaces, or a tab. The indenting pattern allows multiple values for the same key (multiple authors, multiple address lines).
 */
function makeTitle({ title, credit, author, source, draftDate, contact }) {
  const result = `Title: ${title}\n`;

  if (credit) {
    result += `Credit: ${credit}\n`;
  }
  if (author) {
    result += `Author: ${author}\n`;
  }
  if (source) {
    result += `Source: ${source}\n`;
  }
  if (draftDate) {
    result += `Draft date: ${draftDate}\n`;
  }
  if (contact) {
    result += `Contact: ${contact}\n`;
  }
  return result;
}

/**
 *
 * @param {*} text
 * > A Scene Heading is any line that has a blank line following it, and either begins with INT or EXT or similar (full list below). A Scene Heading always has at least one blank line preceding it.
 *
 * Power user: You can "force" a Scene Heading by starting the line with a single period.
 */
function makeSceneHeading(text) {
  return `.${text.toUpperCase()}\n`;
}

/**
 *
 * @param {*} text
 * > Action, or scene description, is any paragraph that doesn't meet criteria for another element (e.g. Scene Heading, Character, Dialogue, etc.). Fountain respects your line-by-line decision to single or double-space, taking every carriage return as intentional.
 * https://fountain.io/syntax#section-action
 */

function makeAction(text) {
  return `${text}\n`;
}

/**
 *
 * @param {*} text
 * >[[It was supposed to be Vietnamese, right?]]
 * https://fountain.io/syntax#section-notes
 */
function makeNotes(text) {
  return `[[${text}]]\n`;
}

/**
 * 
 * 
 ```
 SANBORN
A good 'ole boy. You know, loves the Army, blood runs green. Country boy. Seems solid.
```
* https://fountain.io/syntax#section-dialogue
 */
function makeDiagloue({ speaker, text }) {
  return `${speaker.toUpperCase()}
${text}\n`;
}

function makeFountainFromDpeProgrammeScript(dpeProgrammeScript) {
  const { title, events } = dpeProgrammeScript;
  const fountainTitle = makeTitle({ title });

  const body = events
    // .filter((event) => {
    //   return event.type !== 'insert-point';
    // })
    .map((event) => {
      switch (event.type) {
        case 'title':
          // code block
          return makeSceneHeading(event.text);
          break;
        case 'paper-cut':
          // code block
          const { speaker, words } = event;
          const text = words
            .map((word) => {
              return word.text;
            })
            .join('');
          return makeDiagloue({ speaker, text });
          break;
        case 'voice-over':
          // code block
          return makeAction(event.text);
          break;
        case 'note':
          // code block
          return makeNotes(event.text);
          break;
        default:
          // code block
          break;
      }
    })
    .join('\n');

  return `${fountainTitle}

${body}`;
}

module.exports = makeFountainFromDpeProgrammeScript;
