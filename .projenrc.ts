import { awscdk } from "projen";
import { JobPermission } from "projen/lib/github/workflows-model";

const project = new awscdk.AwsCdkConstructLibrary({
  author: "Lorenzo Hidalgo Gadea",
  authorAddress: "lorenzo@lhidalgo.dev",
  cdkVersion: "2.1.0",
  defaultReleaseBranch: "main",
  jsiiVersion: "~5.9.0",
  name: "projen_template",
  projenrcTs: true,
  repositoryUrl: "https://github.com/cdk-utils/projen_template.git",

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});

const autoApprove = project.github!.addWorkflow("admin-auto-approve");

autoApprove.on({ pullRequestTarget: {} });
autoApprove.addJobs({
  autoApprove: {
    runsOn: ["ubuntu-latest"],
    permissions: {
      pullRequests: JobPermission.WRITE,
    },
    if: "github.actor == 'Lorenzohidalgo'",
    steps: [
      {
        uses: "actions-ecosystem/action-add-labels@v1",
        with: { "labels": "do-not-merge" },
      },
      {
        uses: "hmarr/auto-approve-action@v4",
        with: { "review-message": "Auto approved PR" },
      },
    ],
  },
});

project.synth();
