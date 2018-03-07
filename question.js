module.exports = isQuestion = statement => {
  const questionTags = ["why", "where", "what", "how", "whether", "does"];

  const words = statement.split(" ");
  let question = false;

  words.forEach(word => {
    if (word.trim().length != 0) {
      word = word.toLowerCase();
      if (questionTags.find(questionTag => word == questionTag)) {
        question = true;
      }
    }
  });

  return question;
};
