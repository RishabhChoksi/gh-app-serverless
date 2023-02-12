const { Octokit } = require("@octokit/rest");
const { createAppAuth } = require("@octokit/auth-app");

interface authType {
  appId: string;
  installationId: string;
  privateKey: string;
}

interface commentType {
  owner: string;
  repo: string;
  issue_number: string;
  body: string;
}

const octokit = new Octokit({
  authStrategy: createAppAuth,
  auth: {
    appId: process.env.APP_ID,
    installationId: process.env.INSTALLATION_ID,
    privateKey: process.env.PRIVATE_KEY,
  } as authType,
});

function main(args: any) {
  if (args.action == "opened" && args.http.method.toLowerCase() == "post") {
    const createComment = async () => {
      await octokit.rest.issues.createComment({
        owner: process.env.OWNER,
        repo: args.repository.name,
        issue_number: args.number,
        body: process.env.COMMENT || "Hello World!",
      } as commentType);
    };

    console.log("Commenting..!");
    createComment();
  }

  return { body: "ok" };
}

exports.main = main;
