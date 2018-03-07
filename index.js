const isQuestion = require("./question");

module.exports = robot => {
  robot.on("issues.opened", async context => {
    const issueTitle = context.payload.issue.title;
    const issueBody = context.payload.issue.body;
    const addLabelParams = context.issue({ labels: ["question"] });
    const replyParams = context.issue({
      body: "Hey! Thanks for the question someone will answer you soon."
    });

    console.log(context);

    if (isQuestion(issueTitle) || isQuestion(issueBody)) {
      return (
        context.github.issues.addLabels(addLabelParams) &&
        context.github.issues.createComment(replyParams)
      );
    }
  });
};
