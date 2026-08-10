# @cdk-utils/projen_template

A projen project template for cdk-utils CDK construct libraries. Extends `AwsCdkConstructLibrary` with all org-standard defaults baked in, so new repos only specify what's unique.

## Installation

```bash
npm install @cdk-utils/projen_template projen
```

> **Note:** This package is published privately to GitHub Packages (for cdk-utils org developers only).
> End consumers of published `@cdk-utils/*` construct libraries do **not** need this configuration.
>
> For cdk-utils developers, configure your `.npmrc`:
>
> ```
> @cdk-utils:registry=https://npm.pkg.github.com
> //npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
> ```
>
> This only affects the `projen_template` dev dependency — it does not interfere with
> public `@cdk-utils/*` packages on npmjs.com since those are resolved at install-time
> by end consumers who don't have this `.npmrc` entry.

## Usage

Create a `.projenrc.ts` in your new construct library repo:

```ts
import { CDKUtilsTemplate } from "@cdk-utils/projen_template";

const project = new CDKUtilsTemplate({
  name: "@cdk-utils/lambda",
  repositoryUrl: "https://github.com/cdk-utils/lambda.git",
  description: "CDK constructs for AWS Lambda best practices",
  cdkVersion: "2.160.0",
});

project.synth();
```

Then run:

```bash
npx projen
```

## What's Included

The template locks in all cdk-utils org standards — you get a fully configured project with zero boilerplate:

| Feature | Configuration |
|---------|---------------|
| **Linting** | Biome (no ESLint/Prettier) |
| **Package Manager** | npm |
| **Node.js (CI)** | 24.x |
| **jsii** | ~5.9.0 |
| **API Compat** | `jsii-diff` against last published version |
| **API Docs** | Auto-generated `API.md` via `jsii-docgen` |
| **Test Coverage** | 80% threshold (branches/functions/lines/statements) |
| **Versioning** | `minMajorVersion: 1`, conventional commits, feat/fix releases |
| **Stability** | `experimental` by default |
| **Mergify** | Auto-label + auto-approve rules |
| **Stale PRs** | Enabled |

## Options

### Required

| Option | Type | Description |
|--------|------|-------------|
| `name` | `string` | Scoped package name (e.g. `@cdk-utils/lambda`) |
| `repositoryUrl` | `string` | Git repository URL |

### Optional

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `cdkVersion` | `string` | `"2.160.0"` | Minimum CDK version. Set to the **lowest** that has the APIs you need — bumping is a breaking change. |
| `description` | `string` | — | Package description |
| `keywords` | `string[]` | `["aws", "cdk", "constructs"]` | npm keywords |
| `stability` | `string` | `"experimental"` | Package stability (`experimental` or `stable`) |
| `useGitHubPackages` | `boolean` | `true` | Publish to GitHub Packages (`true`) or public npm (`false`) |
| `githubOwner` | `string` | `"Lorenzohidalgo"` | GitHub username for mergify auto-approve rules |
| `semanticTitleTypes` | `string[]` | `["feat", "fix", "docs", "chore", "ci"]` | Allowed PR title prefixes |
| `peerDeps` | `string[]` | `[]` | Additional peer dependencies |
| `devDeps` | `string[]` | `[]` | Additional dev dependencies |
| `bundledDeps` | `string[]` | `[]` | Additional bundled dependencies |

### Multi-language Publishing

| Option | Type | Description |
|--------|------|-------------|
| `publishToPypi` | `PypiPublishConfig` | `{ distName, module }` |
| `publishToNuget` | `NugetPublishConfig` | `{ dotNetNamespace, packageId }` |
| `publishToGo` | `GoPublishConfig` | `{ moduleName }` |
| `publishToMaven` | `MavenPublishConfig` | `{ mavenGroupId, mavenArtifactId, javaPackage }` |

## Examples

### Minimal (GitHub Packages only)

```ts
import { CDKUtilsTemplate } from "@cdk-utils/projen_template";

const project = new CDKUtilsTemplate({
  name: "@cdk-utils/queues",
  repositoryUrl: "https://github.com/cdk-utils/queues.git",
});

project.synth();
```

### With multi-language publishing (public npm)

```ts
import { CDKUtilsTemplate } from "@cdk-utils/projen_template";

const project = new CDKUtilsTemplate({
  name: "@cdk-utils/lambda",
  repositoryUrl: "https://github.com/cdk-utils/lambda.git",
  description: "CDK constructs for AWS Lambda best practices",
  cdkVersion: "2.170.0",
  useGitHubPackages: false,
  publishToPypi: {
    distName: "cdk-utils.lambda",
    module: "cdk_utils_lambda",
  },
  publishToNuget: {
    dotNetNamespace: "CdkUtils.Lambda",
    packageId: "CdkUtils.Lambda",
  },
  publishToGo: {
    moduleName: "github.com/cdk-utils/lambda-go",
  },
});

project.synth();
```

### With additional dependencies

```ts
import { CDKUtilsTemplate } from "@cdk-utils/projen_template";

const project = new CDKUtilsTemplate({
  name: "@cdk-utils/lambda",
  repositoryUrl: "https://github.com/cdk-utils/lambda.git",
  cdkVersion: "2.160.0",
  peerDeps: ["@aws-cdk/aws-lambda-python-alpha@^2.160.0-alpha.0"],
  bundledDeps: ["@aws-sdk/client-lambda"],
});

project.synth();
```

## Peer Dependencies

This package requires `projen` as a peer dependency. It will be installed alongside your project's projen version.

## License

Apache-2.0
