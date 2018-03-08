const pos = require("pos");

module.exports = isQuestion = statement => {
  const lex = new pos.Lexer().lex(statement);
  const tagger = new pos.Tagger();
  const taggedWords = tagger.tag(lex);
  const startWith = ["WRB", "WHP", "WP$", "WDT", "PRP", "MD", "PP$"];
  const endWith = [
    "VB",
    "VBD",
    "VBG",
    "VBN",
    "VBP",
    "VBZ",
    "TO",
    "DT",
    "NN",
    "NNP",
    "NNPS",
    "NNS",
    "JJ",
    "JJR",
    "JJS"
  ];
  let question = false;

  for (let i = 1; i < taggedWords.length; i++) {
    stmntHasStartTag = false;
    if (taggedWords[0] != "that") {
      stmntHasStartTag = startWith.find(tag => tag == taggedWords[i - 1][1]);
    }
    stmentHasEndTag = endWith.find(tag => tag == taggedWords[i][1]);

    if (stmntHasStartTag && stmentHasEndTag) {
      question = true;
      break;
    }
  }

  return question;
};
