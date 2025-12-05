import { awscdk, ReleasableCommits } from "projen";
import { JobPermission } from "projen/lib/github/workflows-model";

const project = new awscdk.AwsCdkConstructLibrary({
  author: "Lorenzo Hidalgo Gadea",
  authorAddress: "lorenzo@lhidalgo.dev",
  cdkVersion: "2.1.0",
  defaultReleaseBranch: "main",
  releasableCommits: ReleasableCommits.featuresAndFixes(),
  jsiiVersion: "~5.9.0",
  name: "projen_template",
  projenrcTs: true,
  repositoryUrl: "https://github.com/cdk-utils/projen_template.git",
  eslint: false,
  prettier: false,
  biome: true,
  stale: true,
  githubOptions: {
    pullRequestLintOptions: {
      semanticTitleOptions: {
        types: ["feat", "fix", "docs", "chore"],
      },
    },
  },
});

project.release!.publisher.publishToNpm({
  registry: "npm.pkg.github.com",
});

const autoApprove = project.github!.addWorkflow("admin-auto-approve");

autoApprove.on({
  pullRequestTarget: {},
  workflowDispatch: {
    inputs: {
      logLevel: {
        description: "Log level",
        required: true,
        default: "warning",
      },
      environment: {
        description: "Environment to deploy",
        required: false,
        default: "staging",
      },
    },
  },
});
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
        with: { labels: "do-not-merge" },
      },
      {
        uses: "hmarr/auto-approve-action@v4",
        with: { "review-message": "Auto approved PR" },
      },
    ],
  },
});

project.synth();
