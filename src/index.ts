import { awscdk, javascript, ReleasableCommits } from "projen";

/**
 * Configuration for publishing to PyPI.
 */
export interface PypiPublishConfig {
	/**
	 * The Python distribution name (e.g. `cdk-utils.lambda`).
	 */
	readonly distName: string;

	/**
	 * The Python module name (e.g. `cdk_utils_lambda`).
	 */
	readonly module: string;
}

/**
 * Configuration for publishing to NuGet.
 */
export interface NugetPublishConfig {
	/**
	 * The .NET namespace (e.g. `CdkUtils.Lambda`).
	 */
	readonly dotNetNamespace: string;

	/**
	 * The NuGet package ID (e.g. `CdkUtils.Lambda`).
	 */
	readonly packageId: string;
}

/**
 * Configuration for publishing to a Go module repository.
 */
export interface GoPublishConfig {
	/**
	 * The Go module name (e.g. `github.com/cdk-utils/lambda-go`).
	 */
	readonly moduleName: string;
}

/**
 * Configuration for publishing to Maven Central.
 */
export interface MavenPublishConfig {
	/**
	 * Maven group ID (e.g. `io.github.cdk-utils`).
	 */
	readonly mavenGroupId: string;

	/**
	 * Maven artifact ID (e.g. `lambda`).
	 */
	readonly mavenArtifactId: string;

	/**
	 * Java package (e.g. `io.github.cdkutils.lambda`).
	 */
	readonly javaPackage: string;
}

/**
 * Options for `CDKUtilsTemplate`.
 *
 * Consumers provide only the values unique to their package.
 * All cdk-utils org defaults (Biome, npm, Node 24, compat, docgen, coverage, etc.)
 * are baked in and cannot be overridden.
 */
export interface CDKUtilsTemplateOptions {
	/**
	 * The scoped package name (e.g. `@cdk-utils/lambda`).
	 */
	readonly name: string;

	/**
	 * Minimum CDK version to support.
	 * Set to the LOWEST version that has the APIs you need — not the latest.
	 * Bumping this is a BREAKING CHANGE for consumers.
	 *
	 * @default "2.160.0"
	 */
	readonly cdkVersion?: string;

	/**
	 * Git repository URL.
	 */
	readonly repositoryUrl: string;

	/**
	 * Package description.
	 */
	readonly description?: string;

	/**
	 * Keywords for npm discovery.
	 *
	 * @default ["aws", "cdk", "constructs"]
	 */
	readonly keywords?: string[];

	/**
	 * Publish to PyPI.
	 *
	 * @default - no Python publishing
	 */
	readonly publishToPypi?: PypiPublishConfig;

	/**
	 * Publish to NuGet.
	 *
	 * @default - no NuGet publishing
	 */
	readonly publishToNuget?: NugetPublishConfig;

	/**
	 * Publish to Go module repository.
	 *
	 * @default - no Go publishing
	 */
	readonly publishToGo?: GoPublishConfig;

	/**
	 * Publish to Maven Central.
	 *
	 * @default - no Maven publishing
	 */
	readonly publishToMaven?: MavenPublishConfig;

	/**
	 * Additional peer dependencies.
	 * Use for alpha CDK modules (e.g. `@aws-cdk/aws-lambda-python-alpha`).
	 *
	 * @default []
	 */
	readonly peerDeps?: string[];

	/**
	 * Additional dev dependencies.
	 *
	 * @default []
	 */
	readonly devDeps?: string[];

	/**
	 * Additional bundled dependencies.
	 *
	 * @default []
	 */
	readonly bundledDeps?: string[];

	/**
	 * Package stability level.
	 * Change to `stable` once the API is frozen (1.0+).
	 *
	 * @default "experimental"
	 */
	readonly stability?: string;

	/**
	 * Semantic title types for PR linting.
	 *
	 * @default ["feat", "fix", "docs", "chore", "ci"]
	 */
	readonly semanticTitleTypes?: string[];

	/**
	 * Whether to publish to GitHub Packages or public npm.
	 * When true, uses `https://npm.pkg.github.com`.
	 * When false, uses public npmjs.com with trusted publishing.
	 *
	 * @default true
	 */
	readonly useGitHubPackages?: boolean;

	/**
	 * GitHub username of the repo admin (for mergify auto-approve rules).
	 *
	 * @default "Lorenzohidalgo"
	 */
	readonly githubOwner?: string;
}

/**
 * A projen template for cdk-utils CDK construct libraries.
 *
 * Bakes in all cdk-utils org standards:
 * - Biome for linting/formatting (no ESLint/Prettier)
 * - npm as package manager with Node 24.x in CI
 * - jsii ~5.9.0 for multi-language publishing
 * - API compat checks via jsii-diff
 * - Auto-generated API.md via jsii-docgen
 * - 80% test coverage threshold
 * - Conventional commits with feat/fix releases only
 * - minMajorVersion: 1 for clean semver
 * - Mergify rules for admin auto-approve workflow
 */
export class CDKUtilsTemplate extends awscdk.AwsCdkConstructLibrary {
	constructor(options: CDKUtilsTemplateOptions) {
		const useGitHubPackages = options.useGitHubPackages ?? true;
		const githubOwner = options.githubOwner ?? "Lorenzohidalgo";

		super({
			// === Identity (from consumer) ===
			name: options.name,
			repositoryUrl: options.repositoryUrl,
			description: options.description,
			keywords: options.keywords ?? ["aws", "cdk", "constructs"],

			// === Org defaults (fixed) ===
			author: "CDK Utils",
			authorAddress: "info@lhidalgo.dev",
			authorOrganization: true,
			copyrightOwner: "LHidalgo.dev",
			license: "Apache-2.0",
			projenrcTs: true,

			// === CDK & Peer Dependencies ===
			cdkVersion: options.cdkVersion ?? "2.160.0",

			// === Package Manager & Node ===
			packageManager: javascript.NodePackageManager.NPM,
			workflowNodeVersion: "24.x",

			// === Linting & Formatting — Biome only ===
			eslint: false,
			prettier: false,
			biome: true,

			// === jsii & Publishing ===
			jsiiVersion: "~5.9.0",
			...(useGitHubPackages
				? { npmRegistryUrl: "https://npm.pkg.github.com" }
				: {
						releaseToNpm: true,
						npmAccess: javascript.NpmAccess.PUBLIC,
						npmProvenance: true,
					}),
			publishToPypi: options.publishToPypi,
			publishToNuget: options.publishToNuget,
			publishToGo: options.publishToGo,
			publishToMaven: options.publishToMaven,

			// === Versioning & Release ===
			defaultReleaseBranch: "main",
			minMajorVersion: 1,
			releasableCommits: ReleasableCommits.featuresAndFixes(),
			stability: options.stability ?? "experimental",

			// === API Quality ===
			compat: true,
			docgen: true,

			// === CI & GitHub ===
			stale: true,
			githubOptions: {
				pullRequestLintOptions: {
					semanticTitleOptions: {
						types: options.semanticTitleTypes ?? [
							"feat",
							"fix",
							"docs",
							"chore",
							"ci",
						],
					},
				},
			},

			// === Testing ===
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

			// === Dependencies (from consumer) ===
			peerDeps: [...(options.peerDeps ?? []), "projen"],
			devDeps: options.devDeps,
			bundledDeps: options.bundledDeps,
		});

		// === Mergify Rules (org standard) ===
		this.github?.mergify?.addRule({
			name: "Add Blocking label on default PRs",
			actions: {
				label: {
					add: ["do-not-merge"],
				},
			},
			conditions: [
				`author=${githubOwner}`,
				"-label~=(do-not-merge)",
				"-label~=(merge)",
			],
		});

		this.github?.mergify?.addRule({
			name: "Auto Approve on admin PR",
			actions: {
				comment: {
					message:
						"@{{author}}, this PR was auto-approved.\nRemember to remove the do-not-merge once ready to merge",
				},
				review: { type: "APPROVE" },
			},
			conditions: [`author=${githubOwner}`, "label=do-not-merge"],
		});
	}
}
