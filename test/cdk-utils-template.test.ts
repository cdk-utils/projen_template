import { Testing } from "projen/lib/testing";
import { CDKUtilsTemplate } from "../src";

describe("CDKUtilsTemplate", () => {
	test("synthesizes with minimal options", () => {
		const project = new CDKUtilsTemplate({
			name: "@cdk-utils/test-construct",
			repositoryUrl: "https://github.com/cdk-utils/test-construct.git",
		});

		const snapshot = Testing.synth(project);

		// Verify package.json has the correct defaults
		expect(snapshot["package.json"]).toBeDefined();
		const pkg = snapshot["package.json"];
		expect(pkg.name).toBe("@cdk-utils/test-construct");
		expect(pkg.stability).toBe("experimental");
	});

	test("uses Biome and disables ESLint/Prettier", () => {
		const project = new CDKUtilsTemplate({
			name: "@cdk-utils/test-construct",
			repositoryUrl: "https://github.com/cdk-utils/test-construct.git",
		});

		const snapshot = Testing.synth(project);
		const pkg = snapshot["package.json"];

		// ESLint should NOT be in devDependencies
		expect(pkg.devDependencies["eslint"]).toBeUndefined();
		// Prettier should NOT be in devDependencies
		expect(pkg.devDependencies["prettier"]).toBeUndefined();
		// Biome SHOULD be in devDependencies
		expect(pkg.devDependencies["@biomejs/biome"]).toBeDefined();
	});

	test("sets CDK version as peer dependency with caret range", () => {
		const project = new CDKUtilsTemplate({
			name: "@cdk-utils/test-construct",
			repositoryUrl: "https://github.com/cdk-utils/test-construct.git",
			cdkVersion: "2.180.0",
		});

		const snapshot = Testing.synth(project);
		const pkg = snapshot["package.json"];

		expect(pkg.peerDependencies["aws-cdk-lib"]).toBe("^2.180.0");
	});

	test("uses default CDK version when not specified", () => {
		const project = new CDKUtilsTemplate({
			name: "@cdk-utils/test-construct",
			repositoryUrl: "https://github.com/cdk-utils/test-construct.git",
		});

		const snapshot = Testing.synth(project);
		const pkg = snapshot["package.json"];

		expect(pkg.peerDependencies["aws-cdk-lib"]).toBe("^2.160.0");
	});

	test("uses NPM as package manager", () => {
		const project = new CDKUtilsTemplate({
			name: "@cdk-utils/test-construct",
			repositoryUrl: "https://github.com/cdk-utils/test-construct.git",
		});

		const snapshot = Testing.synth(project);
		const buildWorkflow = snapshot[".github/workflows/build.yml"];

		// Workflows should use npm ci (not yarn install)
		expect(buildWorkflow).toContain("npm ci");
	});

	test("sets Node 24.x in CI workflows", () => {
		const project = new CDKUtilsTemplate({
			name: "@cdk-utils/test-construct",
			repositoryUrl: "https://github.com/cdk-utils/test-construct.git",
		});

		const snapshot = Testing.synth(project);
		const buildWorkflow = snapshot[".github/workflows/build.yml"];

		expect(buildWorkflow).toContain("node-version: 24.x");
	});

	test("enables compat (jsii-diff) checking", () => {
		const project = new CDKUtilsTemplate({
			name: "@cdk-utils/test-construct",
			repositoryUrl: "https://github.com/cdk-utils/test-construct.git",
		});

		const snapshot = Testing.synth(project);
		const pkg = snapshot["package.json"];

		expect(pkg.devDependencies["jsii-diff"]).toBeDefined();
	});

	test("enables docgen (jsii-docgen)", () => {
		const project = new CDKUtilsTemplate({
			name: "@cdk-utils/test-construct",
			repositoryUrl: "https://github.com/cdk-utils/test-construct.git",
		});

		const snapshot = Testing.synth(project);
		const pkg = snapshot["package.json"];

		expect(pkg.devDependencies["jsii-docgen"]).toBeDefined();
	});

	test("sets 80% coverage threshold", () => {
		const project = new CDKUtilsTemplate({
			name: "@cdk-utils/test-construct",
			repositoryUrl: "https://github.com/cdk-utils/test-construct.git",
		});

		const snapshot = Testing.synth(project);
		const pkg = snapshot["package.json"];

		expect(pkg.jest.coverageThreshold.global.branches).toBe(80);
		expect(pkg.jest.coverageThreshold.global.functions).toBe(80);
		expect(pkg.jest.coverageThreshold.global.lines).toBe(80);
		expect(pkg.jest.coverageThreshold.global.statements).toBe(80);
	});

	test("defaults to GitHub Packages registry", () => {
		const project = new CDKUtilsTemplate({
			name: "@cdk-utils/test-construct",
			repositoryUrl: "https://github.com/cdk-utils/test-construct.git",
		});

		const snapshot = Testing.synth(project);
		const pkg = snapshot["package.json"];

		expect(pkg.publishConfig?.registry).toContain("npm.pkg.github.com");
	});

	test("can switch to public npm with trusted publishing", () => {
		const project = new CDKUtilsTemplate({
			name: "@cdk-utils/test-construct",
			repositoryUrl: "https://github.com/cdk-utils/test-construct.git",
			useGitHubPackages: false,
		});

		const snapshot = Testing.synth(project);
		const pkg = snapshot["package.json"];

		// Should not point to GitHub Packages
		const registry = pkg.publishConfig?.registry ?? "";
		expect(registry).not.toContain("npm.pkg.github.com");
	});

	test("sets minMajorVersion to 1", () => {
		const project = new CDKUtilsTemplate({
			name: "@cdk-utils/test-construct",
			repositoryUrl: "https://github.com/cdk-utils/test-construct.git",
		});

		const snapshot = Testing.synth(project);
		const tasks = snapshot[".projen/tasks.json"];

		expect(tasks.tasks.release.env.MIN_MAJOR).toBe("1");
	});

	test("accepts additional peer dependencies", () => {
		const project = new CDKUtilsTemplate({
			name: "@cdk-utils/test-construct",
			repositoryUrl: "https://github.com/cdk-utils/test-construct.git",
			peerDeps: ["@aws-cdk/aws-lambda-python-alpha@^2.160.0-alpha.0"],
		});

		const snapshot = Testing.synth(project);
		const pkg = snapshot["package.json"];

		expect(
			pkg.peerDependencies["@aws-cdk/aws-lambda-python-alpha"],
		).toBeDefined();
	});

	test("includes mergify rules with default owner", () => {
		const project = new CDKUtilsTemplate({
			name: "@cdk-utils/test-construct",
			repositoryUrl: "https://github.com/cdk-utils/test-construct.git",
		});

		const snapshot = Testing.synth(project);
		const mergify = snapshot[".mergify.yml"];

		expect(mergify).toContain("do-not-merge");
		expect(mergify).toContain("author=Lorenzohidalgo");
	});

	test("allows customizing the github owner for mergify", () => {
		const project = new CDKUtilsTemplate({
			name: "@cdk-utils/test-construct",
			repositoryUrl: "https://github.com/cdk-utils/test-construct.git",
			githubOwner: "custom-user",
		});

		const snapshot = Testing.synth(project);
		const mergify = snapshot[".mergify.yml"];

		expect(mergify).toContain("author=custom-user");
	});
});
