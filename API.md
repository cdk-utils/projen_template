# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CDKUtilsTemplate <a name="CDKUtilsTemplate" id="@cdk-utils/projen_template.CDKUtilsTemplate"></a>

A projen template for cdk-utils CDK construct libraries.

Bakes in all cdk-utils org standards:
- Biome for linting/formatting (no ESLint/Prettier)
- npm as package manager with Node 24.x in CI
- jsii ~5.9.0 for multi-language publishing
- API compat checks via jsii-diff
- Auto-generated API.md via jsii-docgen
- 80% test coverage threshold
- Conventional commits with feat/fix releases only
- minMajorVersion: 1 for clean semver
- Mergify rules for admin auto-approve workflow

#### Initializers <a name="Initializers" id="@cdk-utils/projen_template.CDKUtilsTemplate.Initializer"></a>

```typescript
import { CDKUtilsTemplate } from '@cdk-utils/projen_template'

new CDKUtilsTemplate(options: CDKUtilsTemplateOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk-utils/projen_template.CDKUtilsTemplate.Initializer.parameter.options">options</a></code> | <code><a href="#@cdk-utils/projen_template.CDKUtilsTemplateOptions">CDKUtilsTemplateOptions</a></code> | *No description.* |

---

##### `options`<sup>Required</sup> <a name="options" id="@cdk-utils/projen_template.CDKUtilsTemplate.Initializer.parameter.options"></a>

- *Type:* <a href="#@cdk-utils/projen_template.CDKUtilsTemplateOptions">CDKUtilsTemplateOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk-utils/projen_template.CDKUtilsTemplate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdk-utils/projen_template.CDKUtilsTemplate.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdk-utils/projen_template.CDKUtilsTemplate.addExcludeFromCleanup">addExcludeFromCleanup</a></code> | Exclude the matching files from pre-synth cleanup. |
| <code><a href="#@cdk-utils/projen_template.CDKUtilsTemplate.addGitIgnore">addGitIgnore</a></code> | Adds a .gitignore pattern. |
| <code><a href="#@cdk-utils/projen_template.CDKUtilsTemplate.addPackageIgnore">addPackageIgnore</a></code> | Adds patterns to be ignored by npm. |
| <code><a href="#@cdk-utils/projen_template.CDKUtilsTemplate.addTask">addTask</a></code> | Adds a new task to this project. |
| <code><a href="#@cdk-utils/projen_template.CDKUtilsTemplate.annotateGenerated">annotateGenerated</a></code> | Marks the provided file(s) as being generated. |
| <code><a href="#@cdk-utils/projen_template.CDKUtilsTemplate.postSynthesize">postSynthesize</a></code> | Called after all components are synthesized. |
| <code><a href="#@cdk-utils/projen_template.CDKUtilsTemplate.preSynthesize">preSynthesize</a></code> | Called before all components are synthesized. |
| <code><a href="#@cdk-utils/projen_template.CDKUtilsTemplate.removeTask">removeTask</a></code> | Removes a task from a project. |
| <code><a href="#@cdk-utils/projen_template.CDKUtilsTemplate.runTaskCommand">runTaskCommand</a></code> | Returns the shell command to execute in order to run a task. |
| <code><a href="#@cdk-utils/projen_template.CDKUtilsTemplate.synth">synth</a></code> | Synthesize all project files into `outdir`. |
| <code><a href="#@cdk-utils/projen_template.CDKUtilsTemplate.tryFindFile">tryFindFile</a></code> | Finds a file at the specified relative path within this project and all its subprojects. |
| <code><a href="#@cdk-utils/projen_template.CDKUtilsTemplate.tryFindObjectFile">tryFindObjectFile</a></code> | Finds an object file (like JsonFile, YamlFile, etc.) by name. |
| <code><a href="#@cdk-utils/projen_template.CDKUtilsTemplate.tryRemoveFile">tryRemoveFile</a></code> | Finds a file at the specified relative path within this project and removes it. |
| <code><a href="#@cdk-utils/projen_template.CDKUtilsTemplate.addBins">addBins</a></code> | *No description.* |
| <code><a href="#@cdk-utils/projen_template.CDKUtilsTemplate.addBundledDeps">addBundledDeps</a></code> | Defines bundled dependencies. |
| <code><a href="#@cdk-utils/projen_template.CDKUtilsTemplate.addDeps">addDeps</a></code> | Defines normal dependencies. |
| <code><a href="#@cdk-utils/projen_template.CDKUtilsTemplate.addDevDeps">addDevDeps</a></code> | Defines development/test dependencies. |
| <code><a href="#@cdk-utils/projen_template.CDKUtilsTemplate.addFields">addFields</a></code> | Directly set fields in `package.json`. |
| <code><a href="#@cdk-utils/projen_template.CDKUtilsTemplate.addKeywords">addKeywords</a></code> | Adds keywords to package.json (deduplicated). |
| <code><a href="#@cdk-utils/projen_template.CDKUtilsTemplate.addPeerDeps">addPeerDeps</a></code> | Defines peer dependencies. |
| <code><a href="#@cdk-utils/projen_template.CDKUtilsTemplate.addScripts">addScripts</a></code> | Replaces the contents of multiple npm package.json scripts. |
| <code><a href="#@cdk-utils/projen_template.CDKUtilsTemplate.removeScript">removeScript</a></code> | Removes the npm script (always successful). |
| <code><a href="#@cdk-utils/projen_template.CDKUtilsTemplate.renderWorkflowSetup">renderWorkflowSetup</a></code> | Returns the set of workflow steps which should be executed to bootstrap a workflow. |
| <code><a href="#@cdk-utils/projen_template.CDKUtilsTemplate.setScript">setScript</a></code> | Replaces the contents of an npm package.json script. |

---

##### `toString` <a name="toString" id="@cdk-utils/projen_template.CDKUtilsTemplate.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdk-utils/projen_template.CDKUtilsTemplate.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdk-utils/projen_template.CDKUtilsTemplate.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addExcludeFromCleanup` <a name="addExcludeFromCleanup" id="@cdk-utils/projen_template.CDKUtilsTemplate.addExcludeFromCleanup"></a>

```typescript
public addExcludeFromCleanup(globs: ...string[]): void
```

Exclude the matching files from pre-synth cleanup.

Can be used when, for example, some
source files include the projen marker and we don't want them to be erased during synth.

###### `globs`<sup>Required</sup> <a name="globs" id="@cdk-utils/projen_template.CDKUtilsTemplate.addExcludeFromCleanup.parameter.globs"></a>

- *Type:* ...string[]

The glob patterns to match.

---

##### `addGitIgnore` <a name="addGitIgnore" id="@cdk-utils/projen_template.CDKUtilsTemplate.addGitIgnore"></a>

```typescript
public addGitIgnore(pattern: string): void
```

Adds a .gitignore pattern.

###### `pattern`<sup>Required</sup> <a name="pattern" id="@cdk-utils/projen_template.CDKUtilsTemplate.addGitIgnore.parameter.pattern"></a>

- *Type:* string

The glob pattern to ignore.

---

##### `addPackageIgnore` <a name="addPackageIgnore" id="@cdk-utils/projen_template.CDKUtilsTemplate.addPackageIgnore"></a>

```typescript
public addPackageIgnore(pattern: string): void
```

Adds patterns to be ignored by npm.

###### `pattern`<sup>Required</sup> <a name="pattern" id="@cdk-utils/projen_template.CDKUtilsTemplate.addPackageIgnore.parameter.pattern"></a>

- *Type:* string

The pattern to ignore.

---

##### `addTask` <a name="addTask" id="@cdk-utils/projen_template.CDKUtilsTemplate.addTask"></a>

```typescript
public addTask(name: string, props?: TaskOptions): Task
```

Adds a new task to this project.

This will fail if the project already has
a task with this name.

###### `name`<sup>Required</sup> <a name="name" id="@cdk-utils/projen_template.CDKUtilsTemplate.addTask.parameter.name"></a>

- *Type:* string

The task name to add.

---

###### `props`<sup>Optional</sup> <a name="props" id="@cdk-utils/projen_template.CDKUtilsTemplate.addTask.parameter.props"></a>

- *Type:* projen.TaskOptions

Task properties.

---

##### `annotateGenerated` <a name="annotateGenerated" id="@cdk-utils/projen_template.CDKUtilsTemplate.annotateGenerated"></a>

```typescript
public annotateGenerated(glob: string): void
```

Marks the provided file(s) as being generated.

This is achieved using the
github-linguist attributes. Generated files do not count against the
repository statistics and language breakdown.

> [https://github.com/github/linguist/blob/master/docs/overrides.md](https://github.com/github/linguist/blob/master/docs/overrides.md)

###### `glob`<sup>Required</sup> <a name="glob" id="@cdk-utils/projen_template.CDKUtilsTemplate.annotateGenerated.parameter.glob"></a>

- *Type:* string

the glob pattern to match (could be a file path).

---

##### `postSynthesize` <a name="postSynthesize" id="@cdk-utils/projen_template.CDKUtilsTemplate.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after all components are synthesized.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@cdk-utils/projen_template.CDKUtilsTemplate.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before all components are synthesized.

##### `removeTask` <a name="removeTask" id="@cdk-utils/projen_template.CDKUtilsTemplate.removeTask"></a>

```typescript
public removeTask(name: string): Task
```

Removes a task from a project.

###### `name`<sup>Required</sup> <a name="name" id="@cdk-utils/projen_template.CDKUtilsTemplate.removeTask.parameter.name"></a>

- *Type:* string

The name of the task to remove.

---

##### `runTaskCommand` <a name="runTaskCommand" id="@cdk-utils/projen_template.CDKUtilsTemplate.runTaskCommand"></a>

```typescript
public runTaskCommand(task: Task): string
```

Returns the shell command to execute in order to run a task.

This will
typically be `pnpm projen TASK`.

###### `task`<sup>Required</sup> <a name="task" id="@cdk-utils/projen_template.CDKUtilsTemplate.runTaskCommand.parameter.task"></a>

- *Type:* projen.Task

The task for which the command is required.

---

##### `synth` <a name="synth" id="@cdk-utils/projen_template.CDKUtilsTemplate.synth"></a>

```typescript
public synth(): void
```

Synthesize all project files into `outdir`.

1. Call "this.preSynthesize()"
2. Delete all generated files
3. Synthesize all subprojects
4. Synthesize all components of this project
5. Call "projectCreation()" for all components, only if the project is being created for the first time
6. Call "postSynthesize()" for all components of this project
7. Call "this.postSynthesize()"
8. Call "postProjectCreation()" for all components, only if the project is being created for the first time

##### `tryFindFile` <a name="tryFindFile" id="@cdk-utils/projen_template.CDKUtilsTemplate.tryFindFile"></a>

```typescript
public tryFindFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and all its subprojects.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@cdk-utils/projen_template.CDKUtilsTemplate.tryFindFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be resolved
from the root of _this_ project.

---

##### `tryFindObjectFile` <a name="tryFindObjectFile" id="@cdk-utils/projen_template.CDKUtilsTemplate.tryFindObjectFile"></a>

```typescript
public tryFindObjectFile(filePath: string): ObjectFile
```

Finds an object file (like JsonFile, YamlFile, etc.) by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@cdk-utils/projen_template.CDKUtilsTemplate.tryFindObjectFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryRemoveFile` <a name="tryRemoveFile" id="@cdk-utils/projen_template.CDKUtilsTemplate.tryRemoveFile"></a>

```typescript
public tryRemoveFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and removes it.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@cdk-utils/projen_template.CDKUtilsTemplate.tryRemoveFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be
resolved from the root of _this_ project.

---

##### `addBins` <a name="addBins" id="@cdk-utils/projen_template.CDKUtilsTemplate.addBins"></a>

```typescript
public addBins(bins: {[ key: string ]: string}): void
```

###### `bins`<sup>Required</sup> <a name="bins" id="@cdk-utils/projen_template.CDKUtilsTemplate.addBins.parameter.bins"></a>

- *Type:* {[ key: string ]: string}

---

##### `addBundledDeps` <a name="addBundledDeps" id="@cdk-utils/projen_template.CDKUtilsTemplate.addBundledDeps"></a>

```typescript
public addBundledDeps(deps: ...string[]): void
```

Defines bundled dependencies.

Bundled dependencies will be added as normal dependencies as well as to the
`bundledDependencies` section of your `package.json`.

###### `deps`<sup>Required</sup> <a name="deps" id="@cdk-utils/projen_template.CDKUtilsTemplate.addBundledDeps.parameter.deps"></a>

- *Type:* ...string[]

Names modules to install.

By default, the the dependency will
be installed in the next `pnpm projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `pnpm
add/update`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addDeps` <a name="addDeps" id="@cdk-utils/projen_template.CDKUtilsTemplate.addDeps"></a>

```typescript
public addDeps(deps: ...string[]): void
```

Defines normal dependencies.

###### `deps`<sup>Required</sup> <a name="deps" id="@cdk-utils/projen_template.CDKUtilsTemplate.addDeps.parameter.deps"></a>

- *Type:* ...string[]

Names modules to install.

By default, the the dependency will
be installed in the next `pnpm projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `pnpm
add/update`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addDevDeps` <a name="addDevDeps" id="@cdk-utils/projen_template.CDKUtilsTemplate.addDevDeps"></a>

```typescript
public addDevDeps(deps: ...string[]): void
```

Defines development/test dependencies.

###### `deps`<sup>Required</sup> <a name="deps" id="@cdk-utils/projen_template.CDKUtilsTemplate.addDevDeps.parameter.deps"></a>

- *Type:* ...string[]

Names modules to install.

By default, the the dependency will
be installed in the next `pnpm projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `pnpm
add/update`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addFields` <a name="addFields" id="@cdk-utils/projen_template.CDKUtilsTemplate.addFields"></a>

```typescript
public addFields(fields: {[ key: string ]: any}): void
```

Directly set fields in `package.json`.

###### `fields`<sup>Required</sup> <a name="fields" id="@cdk-utils/projen_template.CDKUtilsTemplate.addFields.parameter.fields"></a>

- *Type:* {[ key: string ]: any}

The fields to set.

---

##### `addKeywords` <a name="addKeywords" id="@cdk-utils/projen_template.CDKUtilsTemplate.addKeywords"></a>

```typescript
public addKeywords(keywords: ...string[]): void
```

Adds keywords to package.json (deduplicated).

###### `keywords`<sup>Required</sup> <a name="keywords" id="@cdk-utils/projen_template.CDKUtilsTemplate.addKeywords.parameter.keywords"></a>

- *Type:* ...string[]

The keywords to add.

---

##### `addPeerDeps` <a name="addPeerDeps" id="@cdk-utils/projen_template.CDKUtilsTemplate.addPeerDeps"></a>

```typescript
public addPeerDeps(deps: ...string[]): void
```

Defines peer dependencies.

When adding peer dependencies, a devDependency will also be added on the
pinned version of the declared peer. This will ensure that you are testing
your code against the minimum version required from your consumers.

###### `deps`<sup>Required</sup> <a name="deps" id="@cdk-utils/projen_template.CDKUtilsTemplate.addPeerDeps.parameter.deps"></a>

- *Type:* ...string[]

Names modules to install.

By default, the the dependency will
be installed in the next `pnpm projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `pnpm
add/update`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addScripts` <a name="addScripts" id="@cdk-utils/projen_template.CDKUtilsTemplate.addScripts"></a>

```typescript
public addScripts(scripts: {[ key: string ]: string}): void
```

Replaces the contents of multiple npm package.json scripts.

###### `scripts`<sup>Required</sup> <a name="scripts" id="@cdk-utils/projen_template.CDKUtilsTemplate.addScripts.parameter.scripts"></a>

- *Type:* {[ key: string ]: string}

The scripts to set.

---

##### `removeScript` <a name="removeScript" id="@cdk-utils/projen_template.CDKUtilsTemplate.removeScript"></a>

```typescript
public removeScript(name: string): void
```

Removes the npm script (always successful).

###### `name`<sup>Required</sup> <a name="name" id="@cdk-utils/projen_template.CDKUtilsTemplate.removeScript.parameter.name"></a>

- *Type:* string

The name of the script.

---

##### `renderWorkflowSetup` <a name="renderWorkflowSetup" id="@cdk-utils/projen_template.CDKUtilsTemplate.renderWorkflowSetup"></a>

```typescript
public renderWorkflowSetup(options?: RenderWorkflowSetupOptions): JobStep[]
```

Returns the set of workflow steps which should be executed to bootstrap a workflow.

###### `options`<sup>Optional</sup> <a name="options" id="@cdk-utils/projen_template.CDKUtilsTemplate.renderWorkflowSetup.parameter.options"></a>

- *Type:* projen.javascript.RenderWorkflowSetupOptions

Options.

---

##### `setScript` <a name="setScript" id="@cdk-utils/projen_template.CDKUtilsTemplate.setScript"></a>

```typescript
public setScript(name: string, command: string): void
```

Replaces the contents of an npm package.json script.

###### `name`<sup>Required</sup> <a name="name" id="@cdk-utils/projen_template.CDKUtilsTemplate.setScript.parameter.name"></a>

- *Type:* string

The script name.

---

###### `command`<sup>Required</sup> <a name="command" id="@cdk-utils/projen_template.CDKUtilsTemplate.setScript.parameter.command"></a>

- *Type:* string

The command to execute.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk-utils/projen_template.CDKUtilsTemplate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdk-utils/projen_template.CDKUtilsTemplate.isProject">isProject</a></code> | Test whether the given construct is a project. |
| <code><a href="#@cdk-utils/projen_template.CDKUtilsTemplate.of">of</a></code> | Find the closest ancestor project for given construct. |

---

##### `isConstruct` <a name="isConstruct" id="@cdk-utils/projen_template.CDKUtilsTemplate.isConstruct"></a>

```typescript
import { CDKUtilsTemplate } from '@cdk-utils/projen_template'

CDKUtilsTemplate.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdk-utils/projen_template.CDKUtilsTemplate.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isProject` <a name="isProject" id="@cdk-utils/projen_template.CDKUtilsTemplate.isProject"></a>

```typescript
import { CDKUtilsTemplate } from '@cdk-utils/projen_template'

CDKUtilsTemplate.isProject(x: any)
```

Test whether the given construct is a project.

###### `x`<sup>Required</sup> <a name="x" id="@cdk-utils/projen_template.CDKUtilsTemplate.isProject.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="@cdk-utils/projen_template.CDKUtilsTemplate.of"></a>

```typescript
import { CDKUtilsTemplate } from '@cdk-utils/projen_template'

CDKUtilsTemplate.of(construct: IConstruct)
```

Find the closest ancestor project for given construct.

When given a project, this it the project itself.

###### `construct`<sup>Required</sup> <a name="construct" id="@cdk-utils/projen_template.CDKUtilsTemplate.of.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk-utils/projen_template.CDKUtilsTemplate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdk-utils/projen_template.CDKUtilsTemplate.property.buildTask">buildTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@cdk-utils/projen_template.CDKUtilsTemplate.property.commitGenerated">commitGenerated</a></code> | <code>boolean</code> | Whether to commit the managed files by default. |
| <code><a href="#@cdk-utils/projen_template.CDKUtilsTemplate.property.compileTask">compileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@cdk-utils/projen_template.CDKUtilsTemplate.property.components">components</a></code> | <code>projen.Component[]</code> | Returns all the components within this project. |
| <code><a href="#@cdk-utils/projen_template.CDKUtilsTemplate.property.deps">deps</a></code> | <code>projen.Dependencies</code> | Project dependencies. |
| <code><a href="#@cdk-utils/projen_template.CDKUtilsTemplate.property.ejected">ejected</a></code> | <code>boolean</code> | Whether or not the project is being ejected. |
| <code><a href="#@cdk-utils/projen_template.CDKUtilsTemplate.property.files">files</a></code> | <code>projen.FileBase[]</code> | All files in this project. |
| <code><a href="#@cdk-utils/projen_template.CDKUtilsTemplate.property.gitattributes">gitattributes</a></code> | <code>projen.GitAttributesFile</code> | The .gitattributes file for this repository. |
| <code><a href="#@cdk-utils/projen_template.CDKUtilsTemplate.property.gitignore">gitignore</a></code> | <code>projen.IgnoreFile</code> | .gitignore. |
| <code><a href="#@cdk-utils/projen_template.CDKUtilsTemplate.property.logger">logger</a></code> | <code>projen.Logger</code> | Logging utilities. |
| <code><a href="#@cdk-utils/projen_template.CDKUtilsTemplate.property.name">name</a></code> | <code>string</code> | Project name. |
| <code><a href="#@cdk-utils/projen_template.CDKUtilsTemplate.property.outdir">outdir</a></code> | <code>string</code> | Absolute output directory of this project. |
| <code><a href="#@cdk-utils/projen_template.CDKUtilsTemplate.property.packageTask">packageTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@cdk-utils/projen_template.CDKUtilsTemplate.property.postCompileTask">postCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@cdk-utils/projen_template.CDKUtilsTemplate.property.preCompileTask">preCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@cdk-utils/projen_template.CDKUtilsTemplate.property.projectBuild">projectBuild</a></code> | <code>projen.ProjectBuild</code> | Manages the build process of the project. |
| <code><a href="#@cdk-utils/projen_template.CDKUtilsTemplate.property.projenCommand">projenCommand</a></code> | <code>string</code> | The command to use in order to run the projen CLI. |
| <code><a href="#@cdk-utils/projen_template.CDKUtilsTemplate.property.root">root</a></code> | <code>projen.Project</code> | The root project. |
| <code><a href="#@cdk-utils/projen_template.CDKUtilsTemplate.property.subprojects">subprojects</a></code> | <code>projen.Project[]</code> | Returns all the subprojects within this project. |
| <code><a href="#@cdk-utils/projen_template.CDKUtilsTemplate.property.tasks">tasks</a></code> | <code>projen.Tasks</code> | Project tasks. |
| <code><a href="#@cdk-utils/projen_template.CDKUtilsTemplate.property.testTask">testTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@cdk-utils/projen_template.CDKUtilsTemplate.property.defaultTask">defaultTask</a></code> | <code>projen.Task</code> | This is the "default" task, the one that executes "projen". |
| <code><a href="#@cdk-utils/projen_template.CDKUtilsTemplate.property.initProject">initProject</a></code> | <code>projen.InitProject</code> | The options used when this project is bootstrapped via `projen new`. |
| <code><a href="#@cdk-utils/projen_template.CDKUtilsTemplate.property.parent">parent</a></code> | <code>projen.Project</code> | A parent project. |
| <code><a href="#@cdk-utils/projen_template.CDKUtilsTemplate.property.autoApprove">autoApprove</a></code> | <code>projen.github.AutoApprove</code> | Auto approve set up for this project. |
| <code><a href="#@cdk-utils/projen_template.CDKUtilsTemplate.property.devContainer">devContainer</a></code> | <code>projen.vscode.DevContainer</code> | Access for .devcontainer.json (used for GitHub Codespaces). |
| <code><a href="#@cdk-utils/projen_template.CDKUtilsTemplate.property.github">github</a></code> | <code>projen.github.GitHub</code> | Access all github components. |
| <code><a href="#@cdk-utils/projen_template.CDKUtilsTemplate.property.gitpod">gitpod</a></code> | <code>projen.Gitpod</code> | Access for Gitpod. |
| <code><a href="#@cdk-utils/projen_template.CDKUtilsTemplate.property.vscode">vscode</a></code> | <code>projen.vscode.VsCode</code> | Access all VSCode components. |
| <code><a href="#@cdk-utils/projen_template.CDKUtilsTemplate.property.artifactsDirectory">artifactsDirectory</a></code> | <code>string</code> | The build output directory. |
| <code><a href="#@cdk-utils/projen_template.CDKUtilsTemplate.property.artifactsJavascriptDirectory">artifactsJavascriptDirectory</a></code> | <code>string</code> | The location of the npm tarball after build (`${artifactsDirectory}/js`). |
| <code><a href="#@cdk-utils/projen_template.CDKUtilsTemplate.property.bundler">bundler</a></code> | <code>projen.javascript.Bundler</code> | *No description.* |
| <code><a href="#@cdk-utils/projen_template.CDKUtilsTemplate.property.npmrc">npmrc</a></code> | <code>projen.javascript.NpmConfig</code> | The .npmrc file. |
| <code><a href="#@cdk-utils/projen_template.CDKUtilsTemplate.property.package">package</a></code> | <code>projen.javascript.NodePackage</code> | API for managing the node package. |
| <code><a href="#@cdk-utils/projen_template.CDKUtilsTemplate.property.runScriptCommand">runScriptCommand</a></code> | <code>string</code> | The command to use to run scripts (e.g. `yarn run` or `npm run` depends on the package manager). |
| <code><a href="#@cdk-utils/projen_template.CDKUtilsTemplate.property.autoMerge">autoMerge</a></code> | <code>projen.github.AutoMerge</code> | Component that sets up mergify for merging approved pull requests. |
| <code><a href="#@cdk-utils/projen_template.CDKUtilsTemplate.property.biome">biome</a></code> | <code>projen.javascript.Biome</code> | *No description.* |
| <code><a href="#@cdk-utils/projen_template.CDKUtilsTemplate.property.buildWorkflow">buildWorkflow</a></code> | <code>projen.build.BuildWorkflow</code> | The PR build GitHub workflow. |
| <code><a href="#@cdk-utils/projen_template.CDKUtilsTemplate.property.buildWorkflowJobId">buildWorkflowJobId</a></code> | <code>string</code> | The job ID of the build workflow. |
| <code><a href="#@cdk-utils/projen_template.CDKUtilsTemplate.property.jest">jest</a></code> | <code>projen.javascript.Jest</code> | The Jest configuration (if enabled). |
| <code><a href="#@cdk-utils/projen_template.CDKUtilsTemplate.property.maxNodeVersion">maxNodeVersion</a></code> | <code>string</code> | Maximum node version supported by this package. |
| <code><a href="#@cdk-utils/projen_template.CDKUtilsTemplate.property.minNodeVersion">minNodeVersion</a></code> | <code>string</code> | The minimum node version required by this package to function. |
| <code><a href="#@cdk-utils/projen_template.CDKUtilsTemplate.property.npmignore">npmignore</a></code> | <code>projen.IgnoreFile</code> | The .npmignore file. |
| <code><a href="#@cdk-utils/projen_template.CDKUtilsTemplate.property.prettier">prettier</a></code> | <code>projen.javascript.Prettier</code> | *No description.* |
| <code><a href="#@cdk-utils/projen_template.CDKUtilsTemplate.property.release">release</a></code> | <code>projen.release.Release</code> | Release management. |
| <code><a href="#@cdk-utils/projen_template.CDKUtilsTemplate.property.upgradeWorkflow">upgradeWorkflow</a></code> | <code>projen.javascript.UpgradeDependencies</code> | The upgrade workflow. |
| <code><a href="#@cdk-utils/projen_template.CDKUtilsTemplate.property.docsDirectory">docsDirectory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdk-utils/projen_template.CDKUtilsTemplate.property.libdir">libdir</a></code> | <code>string</code> | The directory in which compiled .js files reside. |
| <code><a href="#@cdk-utils/projen_template.CDKUtilsTemplate.property.runner">runner</a></code> | <code>projen.typescript.TypeScriptRunner</code> | The TypeScript runner used for executing TypeScript files. |
| <code><a href="#@cdk-utils/projen_template.CDKUtilsTemplate.property.srcdir">srcdir</a></code> | <code>string</code> | The directory in which the .ts sources reside. |
| <code><a href="#@cdk-utils/projen_template.CDKUtilsTemplate.property.testdir">testdir</a></code> | <code>string</code> | The directory in which tests reside. |
| <code><a href="#@cdk-utils/projen_template.CDKUtilsTemplate.property.tsconfigDev">tsconfigDev</a></code> | <code>projen.javascript.TypescriptConfig</code> | A typescript configuration file which covers all files (sources, tests, projen). |
| <code><a href="#@cdk-utils/projen_template.CDKUtilsTemplate.property.watchTask">watchTask</a></code> | <code>projen.Task</code> | The "watch" task. |
| <code><a href="#@cdk-utils/projen_template.CDKUtilsTemplate.property.docgen">docgen</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@cdk-utils/projen_template.CDKUtilsTemplate.property.eslint">eslint</a></code> | <code>projen.javascript.Eslint</code> | *No description.* |
| <code><a href="#@cdk-utils/projen_template.CDKUtilsTemplate.property.tsconfig">tsconfig</a></code> | <code>projen.javascript.TypescriptConfig</code> | *No description.* |
| <code><a href="#@cdk-utils/projen_template.CDKUtilsTemplate.property.tsconfigEslint">tsconfigEslint</a></code> | <code>projen.javascript.TypescriptConfig</code> | *No description.* |
| <code><a href="#@cdk-utils/projen_template.CDKUtilsTemplate.property.cdkDeps">cdkDeps</a></code> | <code>projen.awscdk.AwsCdkDeps</code> | *No description.* |
| <code><a href="#@cdk-utils/projen_template.CDKUtilsTemplate.property.cdkVersion">cdkVersion</a></code> | <code>string</code> | The target CDK version for this library. |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdk-utils/projen_template.CDKUtilsTemplate.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `buildTask`<sup>Required</sup> <a name="buildTask" id="@cdk-utils/projen_template.CDKUtilsTemplate.property.buildTask"></a>

```typescript
public readonly buildTask: Task;
```

- *Type:* projen.Task

---

##### `commitGenerated`<sup>Required</sup> <a name="commitGenerated" id="@cdk-utils/projen_template.CDKUtilsTemplate.property.commitGenerated"></a>

```typescript
public readonly commitGenerated: boolean;
```

- *Type:* boolean

Whether to commit the managed files by default.

---

##### `compileTask`<sup>Required</sup> <a name="compileTask" id="@cdk-utils/projen_template.CDKUtilsTemplate.property.compileTask"></a>

```typescript
public readonly compileTask: Task;
```

- *Type:* projen.Task

---

##### `components`<sup>Required</sup> <a name="components" id="@cdk-utils/projen_template.CDKUtilsTemplate.property.components"></a>

```typescript
public readonly components: Component[];
```

- *Type:* projen.Component[]

Returns all the components within this project.

---

##### `deps`<sup>Required</sup> <a name="deps" id="@cdk-utils/projen_template.CDKUtilsTemplate.property.deps"></a>

```typescript
public readonly deps: Dependencies;
```

- *Type:* projen.Dependencies

Project dependencies.

---

##### `ejected`<sup>Required</sup> <a name="ejected" id="@cdk-utils/projen_template.CDKUtilsTemplate.property.ejected"></a>

```typescript
public readonly ejected: boolean;
```

- *Type:* boolean

Whether or not the project is being ejected.

---

##### `files`<sup>Required</sup> <a name="files" id="@cdk-utils/projen_template.CDKUtilsTemplate.property.files"></a>

```typescript
public readonly files: FileBase[];
```

- *Type:* projen.FileBase[]

All files in this project.

---

##### `gitattributes`<sup>Required</sup> <a name="gitattributes" id="@cdk-utils/projen_template.CDKUtilsTemplate.property.gitattributes"></a>

```typescript
public readonly gitattributes: GitAttributesFile;
```

- *Type:* projen.GitAttributesFile

The .gitattributes file for this repository.

---

##### `gitignore`<sup>Required</sup> <a name="gitignore" id="@cdk-utils/projen_template.CDKUtilsTemplate.property.gitignore"></a>

```typescript
public readonly gitignore: IgnoreFile;
```

- *Type:* projen.IgnoreFile

.gitignore.

---

##### `logger`<sup>Required</sup> <a name="logger" id="@cdk-utils/projen_template.CDKUtilsTemplate.property.logger"></a>

```typescript
public readonly logger: Logger;
```

- *Type:* projen.Logger

Logging utilities.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdk-utils/projen_template.CDKUtilsTemplate.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Project name.

---

##### `outdir`<sup>Required</sup> <a name="outdir" id="@cdk-utils/projen_template.CDKUtilsTemplate.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string

Absolute output directory of this project.

---

##### `packageTask`<sup>Required</sup> <a name="packageTask" id="@cdk-utils/projen_template.CDKUtilsTemplate.property.packageTask"></a>

```typescript
public readonly packageTask: Task;
```

- *Type:* projen.Task

---

##### `postCompileTask`<sup>Required</sup> <a name="postCompileTask" id="@cdk-utils/projen_template.CDKUtilsTemplate.property.postCompileTask"></a>

```typescript
public readonly postCompileTask: Task;
```

- *Type:* projen.Task

---

##### `preCompileTask`<sup>Required</sup> <a name="preCompileTask" id="@cdk-utils/projen_template.CDKUtilsTemplate.property.preCompileTask"></a>

```typescript
public readonly preCompileTask: Task;
```

- *Type:* projen.Task

---

##### `projectBuild`<sup>Required</sup> <a name="projectBuild" id="@cdk-utils/projen_template.CDKUtilsTemplate.property.projectBuild"></a>

```typescript
public readonly projectBuild: ProjectBuild;
```

- *Type:* projen.ProjectBuild

Manages the build process of the project.

---

##### `projenCommand`<sup>Required</sup> <a name="projenCommand" id="@cdk-utils/projen_template.CDKUtilsTemplate.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* string

The command to use in order to run the projen CLI.

---

##### `root`<sup>Required</sup> <a name="root" id="@cdk-utils/projen_template.CDKUtilsTemplate.property.root"></a>

```typescript
public readonly root: Project;
```

- *Type:* projen.Project

The root project.

---

##### `subprojects`<sup>Required</sup> <a name="subprojects" id="@cdk-utils/projen_template.CDKUtilsTemplate.property.subprojects"></a>

```typescript
public readonly subprojects: Project[];
```

- *Type:* projen.Project[]

Returns all the subprojects within this project.

---

##### `tasks`<sup>Required</sup> <a name="tasks" id="@cdk-utils/projen_template.CDKUtilsTemplate.property.tasks"></a>

```typescript
public readonly tasks: Tasks;
```

- *Type:* projen.Tasks

Project tasks.

---

##### `testTask`<sup>Required</sup> <a name="testTask" id="@cdk-utils/projen_template.CDKUtilsTemplate.property.testTask"></a>

```typescript
public readonly testTask: Task;
```

- *Type:* projen.Task

---

##### `defaultTask`<sup>Optional</sup> <a name="defaultTask" id="@cdk-utils/projen_template.CDKUtilsTemplate.property.defaultTask"></a>

```typescript
public readonly defaultTask: Task;
```

- *Type:* projen.Task

This is the "default" task, the one that executes "projen".

Undefined if
the project is being ejected.

---

##### ~~`initProject`~~<sup>Optional</sup> <a name="initProject" id="@cdk-utils/projen_template.CDKUtilsTemplate.property.initProject"></a>

- *Deprecated:* use the `initProject` argument passed to `Component.projectCreation()` instead.

```typescript
public readonly initProject: InitProject;
```

- *Type:* projen.InitProject

The options used when this project is bootstrapped via `projen new`.

It
includes the original set of options passed to the CLI and also the JSII
FQN of the project type.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@cdk-utils/projen_template.CDKUtilsTemplate.property.parent"></a>

```typescript
public readonly parent: Project;
```

- *Type:* projen.Project

A parent project.

If undefined, this is the root project.

---

##### `autoApprove`<sup>Optional</sup> <a name="autoApprove" id="@cdk-utils/projen_template.CDKUtilsTemplate.property.autoApprove"></a>

```typescript
public readonly autoApprove: AutoApprove;
```

- *Type:* projen.github.AutoApprove

Auto approve set up for this project.

---

##### `devContainer`<sup>Optional</sup> <a name="devContainer" id="@cdk-utils/projen_template.CDKUtilsTemplate.property.devContainer"></a>

```typescript
public readonly devContainer: DevContainer;
```

- *Type:* projen.vscode.DevContainer

Access for .devcontainer.json (used for GitHub Codespaces).

This will be `undefined` if devContainer boolean is false

---

##### `github`<sup>Optional</sup> <a name="github" id="@cdk-utils/projen_template.CDKUtilsTemplate.property.github"></a>

```typescript
public readonly github: GitHub;
```

- *Type:* projen.github.GitHub

Access all github components.

This will be `undefined` for subprojects.

---

##### `gitpod`<sup>Optional</sup> <a name="gitpod" id="@cdk-utils/projen_template.CDKUtilsTemplate.property.gitpod"></a>

```typescript
public readonly gitpod: Gitpod;
```

- *Type:* projen.Gitpod

Access for Gitpod.

This will be `undefined` if gitpod boolean is false

---

##### `vscode`<sup>Optional</sup> <a name="vscode" id="@cdk-utils/projen_template.CDKUtilsTemplate.property.vscode"></a>

```typescript
public readonly vscode: VsCode;
```

- *Type:* projen.vscode.VsCode

Access all VSCode components.

This will be `undefined` for subprojects.

---

##### `artifactsDirectory`<sup>Required</sup> <a name="artifactsDirectory" id="@cdk-utils/projen_template.CDKUtilsTemplate.property.artifactsDirectory"></a>

```typescript
public readonly artifactsDirectory: string;
```

- *Type:* string

The build output directory.

An npm tarball will be created under the `js`
subdirectory. For example, if this is set to `dist` (the default), the npm
tarball will be placed under `dist/js/boom-boom-1.2.3.tg`.

---

##### `artifactsJavascriptDirectory`<sup>Required</sup> <a name="artifactsJavascriptDirectory" id="@cdk-utils/projen_template.CDKUtilsTemplate.property.artifactsJavascriptDirectory"></a>

```typescript
public readonly artifactsJavascriptDirectory: string;
```

- *Type:* string

The location of the npm tarball after build (`${artifactsDirectory}/js`).

---

##### `bundler`<sup>Required</sup> <a name="bundler" id="@cdk-utils/projen_template.CDKUtilsTemplate.property.bundler"></a>

```typescript
public readonly bundler: Bundler;
```

- *Type:* projen.javascript.Bundler

---

##### `npmrc`<sup>Required</sup> <a name="npmrc" id="@cdk-utils/projen_template.CDKUtilsTemplate.property.npmrc"></a>

```typescript
public readonly npmrc: NpmConfig;
```

- *Type:* projen.javascript.NpmConfig

The .npmrc file.

---

##### `package`<sup>Required</sup> <a name="package" id="@cdk-utils/projen_template.CDKUtilsTemplate.property.package"></a>

```typescript
public readonly package: NodePackage;
```

- *Type:* projen.javascript.NodePackage

API for managing the node package.

---

##### `runScriptCommand`<sup>Required</sup> <a name="runScriptCommand" id="@cdk-utils/projen_template.CDKUtilsTemplate.property.runScriptCommand"></a>

```typescript
public readonly runScriptCommand: string;
```

- *Type:* string

The command to use to run scripts (e.g. `yarn run` or `npm run` depends on the package manager).

---

##### `autoMerge`<sup>Optional</sup> <a name="autoMerge" id="@cdk-utils/projen_template.CDKUtilsTemplate.property.autoMerge"></a>

```typescript
public readonly autoMerge: AutoMerge;
```

- *Type:* projen.github.AutoMerge

Component that sets up mergify for merging approved pull requests.

---

##### `biome`<sup>Optional</sup> <a name="biome" id="@cdk-utils/projen_template.CDKUtilsTemplate.property.biome"></a>

```typescript
public readonly biome: Biome;
```

- *Type:* projen.javascript.Biome

---

##### `buildWorkflow`<sup>Optional</sup> <a name="buildWorkflow" id="@cdk-utils/projen_template.CDKUtilsTemplate.property.buildWorkflow"></a>

```typescript
public readonly buildWorkflow: BuildWorkflow;
```

- *Type:* projen.build.BuildWorkflow

The PR build GitHub workflow.

`undefined` if `buildWorkflow` is disabled.

---

##### `buildWorkflowJobId`<sup>Optional</sup> <a name="buildWorkflowJobId" id="@cdk-utils/projen_template.CDKUtilsTemplate.property.buildWorkflowJobId"></a>

```typescript
public readonly buildWorkflowJobId: string;
```

- *Type:* string

The job ID of the build workflow.

---

##### `jest`<sup>Optional</sup> <a name="jest" id="@cdk-utils/projen_template.CDKUtilsTemplate.property.jest"></a>

```typescript
public readonly jest: Jest;
```

- *Type:* projen.javascript.Jest

The Jest configuration (if enabled).

---

##### `maxNodeVersion`<sup>Optional</sup> <a name="maxNodeVersion" id="@cdk-utils/projen_template.CDKUtilsTemplate.property.maxNodeVersion"></a>

```typescript
public readonly maxNodeVersion: string;
```

- *Type:* string

Maximum node version supported by this package.

The value indicates the package is incompatible with newer versions.

---

##### `minNodeVersion`<sup>Optional</sup> <a name="minNodeVersion" id="@cdk-utils/projen_template.CDKUtilsTemplate.property.minNodeVersion"></a>

```typescript
public readonly minNodeVersion: string;
```

- *Type:* string

The minimum node version required by this package to function.

This value indicates the package is incompatible with older versions.

---

##### `npmignore`<sup>Optional</sup> <a name="npmignore" id="@cdk-utils/projen_template.CDKUtilsTemplate.property.npmignore"></a>

```typescript
public readonly npmignore: IgnoreFile;
```

- *Type:* projen.IgnoreFile

The .npmignore file.

---

##### `prettier`<sup>Optional</sup> <a name="prettier" id="@cdk-utils/projen_template.CDKUtilsTemplate.property.prettier"></a>

```typescript
public readonly prettier: Prettier;
```

- *Type:* projen.javascript.Prettier

---

##### `release`<sup>Optional</sup> <a name="release" id="@cdk-utils/projen_template.CDKUtilsTemplate.property.release"></a>

```typescript
public readonly release: Release;
```

- *Type:* projen.release.Release

Release management.

---

##### `upgradeWorkflow`<sup>Optional</sup> <a name="upgradeWorkflow" id="@cdk-utils/projen_template.CDKUtilsTemplate.property.upgradeWorkflow"></a>

```typescript
public readonly upgradeWorkflow: UpgradeDependencies;
```

- *Type:* projen.javascript.UpgradeDependencies

The upgrade workflow.

---

##### `docsDirectory`<sup>Required</sup> <a name="docsDirectory" id="@cdk-utils/projen_template.CDKUtilsTemplate.property.docsDirectory"></a>

```typescript
public readonly docsDirectory: string;
```

- *Type:* string

---

##### `libdir`<sup>Required</sup> <a name="libdir" id="@cdk-utils/projen_template.CDKUtilsTemplate.property.libdir"></a>

```typescript
public readonly libdir: string;
```

- *Type:* string

The directory in which compiled .js files reside.

---

##### `runner`<sup>Required</sup> <a name="runner" id="@cdk-utils/projen_template.CDKUtilsTemplate.property.runner"></a>

```typescript
public readonly runner: TypeScriptRunner;
```

- *Type:* projen.typescript.TypeScriptRunner

The TypeScript runner used for executing TypeScript files.

---

##### `srcdir`<sup>Required</sup> <a name="srcdir" id="@cdk-utils/projen_template.CDKUtilsTemplate.property.srcdir"></a>

```typescript
public readonly srcdir: string;
```

- *Type:* string

The directory in which the .ts sources reside.

---

##### `testdir`<sup>Required</sup> <a name="testdir" id="@cdk-utils/projen_template.CDKUtilsTemplate.property.testdir"></a>

```typescript
public readonly testdir: string;
```

- *Type:* string

The directory in which tests reside.

---

##### `tsconfigDev`<sup>Required</sup> <a name="tsconfigDev" id="@cdk-utils/projen_template.CDKUtilsTemplate.property.tsconfigDev"></a>

```typescript
public readonly tsconfigDev: TypescriptConfig;
```

- *Type:* projen.javascript.TypescriptConfig

A typescript configuration file which covers all files (sources, tests, projen).

---

##### `watchTask`<sup>Required</sup> <a name="watchTask" id="@cdk-utils/projen_template.CDKUtilsTemplate.property.watchTask"></a>

```typescript
public readonly watchTask: Task;
```

- *Type:* projen.Task

The "watch" task.

---

##### `docgen`<sup>Optional</sup> <a name="docgen" id="@cdk-utils/projen_template.CDKUtilsTemplate.property.docgen"></a>

```typescript
public readonly docgen: boolean;
```

- *Type:* boolean

---

##### `eslint`<sup>Optional</sup> <a name="eslint" id="@cdk-utils/projen_template.CDKUtilsTemplate.property.eslint"></a>

```typescript
public readonly eslint: Eslint;
```

- *Type:* projen.javascript.Eslint

---

##### `tsconfig`<sup>Optional</sup> <a name="tsconfig" id="@cdk-utils/projen_template.CDKUtilsTemplate.property.tsconfig"></a>

```typescript
public readonly tsconfig: TypescriptConfig;
```

- *Type:* projen.javascript.TypescriptConfig

---

##### `tsconfigEslint`<sup>Optional</sup> <a name="tsconfigEslint" id="@cdk-utils/projen_template.CDKUtilsTemplate.property.tsconfigEslint"></a>

```typescript
public readonly tsconfigEslint: TypescriptConfig;
```

- *Type:* projen.javascript.TypescriptConfig

---

##### `cdkDeps`<sup>Required</sup> <a name="cdkDeps" id="@cdk-utils/projen_template.CDKUtilsTemplate.property.cdkDeps"></a>

```typescript
public readonly cdkDeps: AwsCdkDeps;
```

- *Type:* projen.awscdk.AwsCdkDeps

---

##### `cdkVersion`<sup>Required</sup> <a name="cdkVersion" id="@cdk-utils/projen_template.CDKUtilsTemplate.property.cdkVersion"></a>

```typescript
public readonly cdkVersion: string;
```

- *Type:* string

The target CDK version for this library.

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk-utils/projen_template.CDKUtilsTemplate.property.DEFAULT_TASK">DEFAULT_TASK</a></code> | <code>string</code> | The name of the default task (the task executed when `projen` is run without arguments). |
| <code><a href="#@cdk-utils/projen_template.CDKUtilsTemplate.property.DEFAULT_TS_JEST_TRANFORM_PATTERN">DEFAULT_TS_JEST_TRANFORM_PATTERN</a></code> | <code>string</code> | *No description.* |

---

##### `DEFAULT_TASK`<sup>Required</sup> <a name="DEFAULT_TASK" id="@cdk-utils/projen_template.CDKUtilsTemplate.property.DEFAULT_TASK"></a>

```typescript
public readonly DEFAULT_TASK: string;
```

- *Type:* string

The name of the default task (the task executed when `projen` is run without arguments).

Normally
this task should synthesize the project files.

---

##### `DEFAULT_TS_JEST_TRANFORM_PATTERN`<sup>Required</sup> <a name="DEFAULT_TS_JEST_TRANFORM_PATTERN" id="@cdk-utils/projen_template.CDKUtilsTemplate.property.DEFAULT_TS_JEST_TRANFORM_PATTERN"></a>

```typescript
public readonly DEFAULT_TS_JEST_TRANFORM_PATTERN: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CDKUtilsTemplateOptions <a name="CDKUtilsTemplateOptions" id="@cdk-utils/projen_template.CDKUtilsTemplateOptions"></a>

Options for `CDKUtilsTemplate`.

Consumers provide only the values unique to their package.
All cdk-utils org defaults (Biome, npm, Node 24, compat, docgen, coverage, etc.)
are baked in and cannot be overridden.

#### Initializer <a name="Initializer" id="@cdk-utils/projen_template.CDKUtilsTemplateOptions.Initializer"></a>

```typescript
import { CDKUtilsTemplateOptions } from '@cdk-utils/projen_template'

const cDKUtilsTemplateOptions: CDKUtilsTemplateOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk-utils/projen_template.CDKUtilsTemplateOptions.property.name">name</a></code> | <code>string</code> | The scoped package name (e.g. `@cdk-utils/lambda`). |
| <code><a href="#@cdk-utils/projen_template.CDKUtilsTemplateOptions.property.repositoryUrl">repositoryUrl</a></code> | <code>string</code> | Git repository URL. |
| <code><a href="#@cdk-utils/projen_template.CDKUtilsTemplateOptions.property.bundledDeps">bundledDeps</a></code> | <code>string[]</code> | Additional bundled dependencies. |
| <code><a href="#@cdk-utils/projen_template.CDKUtilsTemplateOptions.property.cdkVersion">cdkVersion</a></code> | <code>string</code> | Minimum CDK version to support. |
| <code><a href="#@cdk-utils/projen_template.CDKUtilsTemplateOptions.property.description">description</a></code> | <code>string</code> | Package description. |
| <code><a href="#@cdk-utils/projen_template.CDKUtilsTemplateOptions.property.devDeps">devDeps</a></code> | <code>string[]</code> | Additional dev dependencies. |
| <code><a href="#@cdk-utils/projen_template.CDKUtilsTemplateOptions.property.githubOwner">githubOwner</a></code> | <code>string</code> | GitHub username of the repo admin (for mergify auto-approve rules). |
| <code><a href="#@cdk-utils/projen_template.CDKUtilsTemplateOptions.property.keywords">keywords</a></code> | <code>string[]</code> | Keywords for npm discovery. |
| <code><a href="#@cdk-utils/projen_template.CDKUtilsTemplateOptions.property.peerDeps">peerDeps</a></code> | <code>string[]</code> | Additional peer dependencies. |
| <code><a href="#@cdk-utils/projen_template.CDKUtilsTemplateOptions.property.publishToGo">publishToGo</a></code> | <code><a href="#@cdk-utils/projen_template.GoPublishConfig">GoPublishConfig</a></code> | Publish to Go module repository. |
| <code><a href="#@cdk-utils/projen_template.CDKUtilsTemplateOptions.property.publishToMaven">publishToMaven</a></code> | <code><a href="#@cdk-utils/projen_template.MavenPublishConfig">MavenPublishConfig</a></code> | Publish to Maven Central. |
| <code><a href="#@cdk-utils/projen_template.CDKUtilsTemplateOptions.property.publishToNuget">publishToNuget</a></code> | <code><a href="#@cdk-utils/projen_template.NugetPublishConfig">NugetPublishConfig</a></code> | Publish to NuGet. |
| <code><a href="#@cdk-utils/projen_template.CDKUtilsTemplateOptions.property.publishToPypi">publishToPypi</a></code> | <code><a href="#@cdk-utils/projen_template.PypiPublishConfig">PypiPublishConfig</a></code> | Publish to PyPI. |
| <code><a href="#@cdk-utils/projen_template.CDKUtilsTemplateOptions.property.semanticTitleTypes">semanticTitleTypes</a></code> | <code>string[]</code> | Semantic title types for PR linting. |
| <code><a href="#@cdk-utils/projen_template.CDKUtilsTemplateOptions.property.stability">stability</a></code> | <code>string</code> | Package stability level. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdk-utils/projen_template.CDKUtilsTemplateOptions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The scoped package name (e.g. `@cdk-utils/lambda`).

---

##### `repositoryUrl`<sup>Required</sup> <a name="repositoryUrl" id="@cdk-utils/projen_template.CDKUtilsTemplateOptions.property.repositoryUrl"></a>

```typescript
public readonly repositoryUrl: string;
```

- *Type:* string

Git repository URL.

---

##### `bundledDeps`<sup>Optional</sup> <a name="bundledDeps" id="@cdk-utils/projen_template.CDKUtilsTemplateOptions.property.bundledDeps"></a>

```typescript
public readonly bundledDeps: string[];
```

- *Type:* string[]
- *Default:* []

Additional bundled dependencies.

---

##### `cdkVersion`<sup>Optional</sup> <a name="cdkVersion" id="@cdk-utils/projen_template.CDKUtilsTemplateOptions.property.cdkVersion"></a>

```typescript
public readonly cdkVersion: string;
```

- *Type:* string
- *Default:* "2.160.0"

Minimum CDK version to support.

Set to the LOWEST version that has the APIs you need — not the latest.
Bumping this is a BREAKING CHANGE for consumers.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdk-utils/projen_template.CDKUtilsTemplateOptions.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Package description.

---

##### `devDeps`<sup>Optional</sup> <a name="devDeps" id="@cdk-utils/projen_template.CDKUtilsTemplateOptions.property.devDeps"></a>

```typescript
public readonly devDeps: string[];
```

- *Type:* string[]
- *Default:* []

Additional dev dependencies.

---

##### `githubOwner`<sup>Optional</sup> <a name="githubOwner" id="@cdk-utils/projen_template.CDKUtilsTemplateOptions.property.githubOwner"></a>

```typescript
public readonly githubOwner: string;
```

- *Type:* string
- *Default:* "Lorenzohidalgo"

GitHub username of the repo admin (for mergify auto-approve rules).

---

##### `keywords`<sup>Optional</sup> <a name="keywords" id="@cdk-utils/projen_template.CDKUtilsTemplateOptions.property.keywords"></a>

```typescript
public readonly keywords: string[];
```

- *Type:* string[]
- *Default:* ["aws", "cdk", "constructs"]

Keywords for npm discovery.

---

##### `peerDeps`<sup>Optional</sup> <a name="peerDeps" id="@cdk-utils/projen_template.CDKUtilsTemplateOptions.property.peerDeps"></a>

```typescript
public readonly peerDeps: string[];
```

- *Type:* string[]
- *Default:* []

Additional peer dependencies.

Use for alpha CDK modules (e.g. `@aws-cdk/aws-lambda-python-alpha`).

---

##### `publishToGo`<sup>Optional</sup> <a name="publishToGo" id="@cdk-utils/projen_template.CDKUtilsTemplateOptions.property.publishToGo"></a>

```typescript
public readonly publishToGo: GoPublishConfig;
```

- *Type:* <a href="#@cdk-utils/projen_template.GoPublishConfig">GoPublishConfig</a>
- *Default:* no Go publishing

Publish to Go module repository.

---

##### `publishToMaven`<sup>Optional</sup> <a name="publishToMaven" id="@cdk-utils/projen_template.CDKUtilsTemplateOptions.property.publishToMaven"></a>

```typescript
public readonly publishToMaven: MavenPublishConfig;
```

- *Type:* <a href="#@cdk-utils/projen_template.MavenPublishConfig">MavenPublishConfig</a>
- *Default:* no Maven publishing

Publish to Maven Central.

---

##### `publishToNuget`<sup>Optional</sup> <a name="publishToNuget" id="@cdk-utils/projen_template.CDKUtilsTemplateOptions.property.publishToNuget"></a>

```typescript
public readonly publishToNuget: NugetPublishConfig;
```

- *Type:* <a href="#@cdk-utils/projen_template.NugetPublishConfig">NugetPublishConfig</a>
- *Default:* no NuGet publishing

Publish to NuGet.

---

##### `publishToPypi`<sup>Optional</sup> <a name="publishToPypi" id="@cdk-utils/projen_template.CDKUtilsTemplateOptions.property.publishToPypi"></a>

```typescript
public readonly publishToPypi: PypiPublishConfig;
```

- *Type:* <a href="#@cdk-utils/projen_template.PypiPublishConfig">PypiPublishConfig</a>
- *Default:* no Python publishing

Publish to PyPI.

---

##### `semanticTitleTypes`<sup>Optional</sup> <a name="semanticTitleTypes" id="@cdk-utils/projen_template.CDKUtilsTemplateOptions.property.semanticTitleTypes"></a>

```typescript
public readonly semanticTitleTypes: string[];
```

- *Type:* string[]
- *Default:* ["feat", "fix", "docs", "chore", "ci"]

Semantic title types for PR linting.

---

##### `stability`<sup>Optional</sup> <a name="stability" id="@cdk-utils/projen_template.CDKUtilsTemplateOptions.property.stability"></a>

```typescript
public readonly stability: string;
```

- *Type:* string
- *Default:* "experimental"

Package stability level.

Change to `stable` once the API is frozen (1.0+).

---

### GoPublishConfig <a name="GoPublishConfig" id="@cdk-utils/projen_template.GoPublishConfig"></a>

Configuration for publishing to a Go module repository.

#### Initializer <a name="Initializer" id="@cdk-utils/projen_template.GoPublishConfig.Initializer"></a>

```typescript
import { GoPublishConfig } from '@cdk-utils/projen_template'

const goPublishConfig: GoPublishConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk-utils/projen_template.GoPublishConfig.property.moduleName">moduleName</a></code> | <code>string</code> | The Go module name (e.g. `github.com/cdk-utils/lambda-go`). |

---

##### `moduleName`<sup>Required</sup> <a name="moduleName" id="@cdk-utils/projen_template.GoPublishConfig.property.moduleName"></a>

```typescript
public readonly moduleName: string;
```

- *Type:* string

The Go module name (e.g. `github.com/cdk-utils/lambda-go`).

---

### MavenPublishConfig <a name="MavenPublishConfig" id="@cdk-utils/projen_template.MavenPublishConfig"></a>

Configuration for publishing to Maven Central.

#### Initializer <a name="Initializer" id="@cdk-utils/projen_template.MavenPublishConfig.Initializer"></a>

```typescript
import { MavenPublishConfig } from '@cdk-utils/projen_template'

const mavenPublishConfig: MavenPublishConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk-utils/projen_template.MavenPublishConfig.property.javaPackage">javaPackage</a></code> | <code>string</code> | Java package (e.g. `io.github.cdkutils.lambda`). |
| <code><a href="#@cdk-utils/projen_template.MavenPublishConfig.property.mavenArtifactId">mavenArtifactId</a></code> | <code>string</code> | Maven artifact ID (e.g. `lambda`). |
| <code><a href="#@cdk-utils/projen_template.MavenPublishConfig.property.mavenGroupId">mavenGroupId</a></code> | <code>string</code> | Maven group ID (e.g. `io.github.cdk-utils`). |

---

##### `javaPackage`<sup>Required</sup> <a name="javaPackage" id="@cdk-utils/projen_template.MavenPublishConfig.property.javaPackage"></a>

```typescript
public readonly javaPackage: string;
```

- *Type:* string

Java package (e.g. `io.github.cdkutils.lambda`).

---

##### `mavenArtifactId`<sup>Required</sup> <a name="mavenArtifactId" id="@cdk-utils/projen_template.MavenPublishConfig.property.mavenArtifactId"></a>

```typescript
public readonly mavenArtifactId: string;
```

- *Type:* string

Maven artifact ID (e.g. `lambda`).

---

##### `mavenGroupId`<sup>Required</sup> <a name="mavenGroupId" id="@cdk-utils/projen_template.MavenPublishConfig.property.mavenGroupId"></a>

```typescript
public readonly mavenGroupId: string;
```

- *Type:* string

Maven group ID (e.g. `io.github.cdk-utils`).

---

### NugetPublishConfig <a name="NugetPublishConfig" id="@cdk-utils/projen_template.NugetPublishConfig"></a>

Configuration for publishing to NuGet.

#### Initializer <a name="Initializer" id="@cdk-utils/projen_template.NugetPublishConfig.Initializer"></a>

```typescript
import { NugetPublishConfig } from '@cdk-utils/projen_template'

const nugetPublishConfig: NugetPublishConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk-utils/projen_template.NugetPublishConfig.property.dotNetNamespace">dotNetNamespace</a></code> | <code>string</code> | The .NET namespace (e.g. `CdkUtils.Lambda`). |
| <code><a href="#@cdk-utils/projen_template.NugetPublishConfig.property.packageId">packageId</a></code> | <code>string</code> | The NuGet package ID (e.g. `CdkUtils.Lambda`). |

---

##### `dotNetNamespace`<sup>Required</sup> <a name="dotNetNamespace" id="@cdk-utils/projen_template.NugetPublishConfig.property.dotNetNamespace"></a>

```typescript
public readonly dotNetNamespace: string;
```

- *Type:* string

The .NET namespace (e.g. `CdkUtils.Lambda`).

---

##### `packageId`<sup>Required</sup> <a name="packageId" id="@cdk-utils/projen_template.NugetPublishConfig.property.packageId"></a>

```typescript
public readonly packageId: string;
```

- *Type:* string

The NuGet package ID (e.g. `CdkUtils.Lambda`).

---

### PypiPublishConfig <a name="PypiPublishConfig" id="@cdk-utils/projen_template.PypiPublishConfig"></a>

Configuration for publishing to PyPI.

#### Initializer <a name="Initializer" id="@cdk-utils/projen_template.PypiPublishConfig.Initializer"></a>

```typescript
import { PypiPublishConfig } from '@cdk-utils/projen_template'

const pypiPublishConfig: PypiPublishConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk-utils/projen_template.PypiPublishConfig.property.distName">distName</a></code> | <code>string</code> | The Python distribution name (e.g. `cdk-utils.lambda`). |
| <code><a href="#@cdk-utils/projen_template.PypiPublishConfig.property.module">module</a></code> | <code>string</code> | The Python module name (e.g. `cdk_utils_lambda`). |

---

##### `distName`<sup>Required</sup> <a name="distName" id="@cdk-utils/projen_template.PypiPublishConfig.property.distName"></a>

```typescript
public readonly distName: string;
```

- *Type:* string

The Python distribution name (e.g. `cdk-utils.lambda`).

---

##### `module`<sup>Required</sup> <a name="module" id="@cdk-utils/projen_template.PypiPublishConfig.property.module"></a>

```typescript
public readonly module: string;
```

- *Type:* string

The Python module name (e.g. `cdk_utils_lambda`).

---



