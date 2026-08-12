import { awscdk, javascript, ReleasableCommits } from "projen";

const project = new awscdk.AwsCdkConstructLibrary({
	author: "CDK Utils",
	authorAddress: "info@lhidalgo.dev",
	authorOrganization: true,
	copyrightOwner: "LHidalgo.dev",
	cdkVersion: "2.1.0",
	defaultReleaseBranch: "main",
	releasableCommits: ReleasableCommits.featuresAndFixes(),
	jsiiVersion: "~5.9.0",
	name: "@cdk-utils/projen_template",
	projenrcTs: true,
	repositoryUrl: "https://github.com/cdk-utils/projen_template.git",
	packageManager: javascript.NodePackageManager.NPM,
	workflowNodeVersion: "24.x",
	eslint: false,
	prettier: false,
	biome: true,
	stale: true,
	stability: "experimental",
	minMajorVersion: 1,
	compat: true,
	docgen: true,
	githubOptions: {
		pullRequestLintOptions: {
			semanticTitleOptions: {
				types: ["feat", "fix", "docs", "chore", "ci"],
			},
		},
	},
	jestOptions: {
		jestConfig: {
			coverageThreshold: {
				branches: 80,
				functions: 80,
				lines: 80,
				statements: 80,
			},
		},
	},
	npmRegistryUrl: "https://npm.pkg.github.com",
	peerDeps: ["projen@>=0.99.0"],
	peerDependencyOptions: {
		pinnedDevDependency: false,
	},
	devDeps: ["projen@^0.101.31"],
});

project.github?.mergify?.addRule({
	name: "Add Blocking label on default PRs",
	actions: {
		label: {
			add: ["do-not-merge"],
		},
	},
	conditions: [
		"author=Lorenzohidalgo",
		"-label~=(do-not-merge)",
		"-label~=(merge)",
	],
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
	conditions: ["author=Lorenzohidalgo", "label=do-not-merge"],
});

project.synth();
