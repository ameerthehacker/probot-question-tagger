const isQuestion = require("./question");

module.exports = robot => {
  robot.on("issues.opened", async context => {
    const issueTitle = context.payload.issue.title;
    const issueBody = context.payload.issue.body;
    const params = context.issue({ labels: ["question"] });

    console.log(context);

    if (isQuestion(issueTitle) || isQuestion(issueBody)) {
      return context.github.issues.addLabels(params);
    }
  });
};
