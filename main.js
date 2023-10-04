// @ts-check

import { createAppAuth } from "@octokit/auth-app";

import { main } from "./lib/main.js";
import request from "./lib/request.js";

/*
if (!process.env.GITHUB_REPOSITORY) {
  throw new Error("GITHUB_REPOSITORY missing, must be set to '<owner>/<repo>'");
}

if (!process.env.GITHUB_REPOSITORY_OWNER) {
  throw new Error("GITHUB_REPOSITORY_OWNER missing, must be set to '<owner>'");
}
*/

const appId = "";
const privateKey = `private key`;
const owner = "org";
const repositories = "repo";

main(
  appId,
  privateKey,
  owner,
  repositories,
  null,
  createAppAuth,
  request.defaults({
    baseUrl: process.env["GITHUB_API_URL"],
  })
).catch((error) => {
  console.error(error);
});
