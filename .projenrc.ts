import { awscdk, ReleasableCommits } from "projen";

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

project.github?.mergify?.addRule({
	name: "Add Blocking label on default PRs",
	actions: {
		label: {
			add: ["do-not-merge"],
		},
	},
	conditions: ["github.actor == 'Lorenzohidalgo'", "-label~=(do-not-merge)"],
});
project.github?.mergify?.addRule({
	name: "Auto Approve on admin PR",
	actions: {
		comment: {
			message:
				"@{{author}}, this PR was auto-approved.\nRemember to remove the do-not-merge once ready to merge",
		},
		review: { type: "APPROVE" },
	},
	conditions: ["github.actor == 'Lorenzohidalgo'", "label==(do-not-merge)"],
});

project.release!.publisher.publishToNpm({
	registry: "npm.pkg.github.com",
});

project.synth();
