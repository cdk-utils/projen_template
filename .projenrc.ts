import { awscdk } from 'projen';
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Lorenzo Hidalgo Gadea',
  authorAddress: 'lorenzo@lhidalgo.dev',
  cdkVersion: '2.1.0',
  defaultReleaseBranch: 'main',
  jsiiVersion: '~5.9.0',
  name: 'projen_template',
  projenrcTs: true,
  repositoryUrl: 'https://github.com/cdk-utils/projen_template.git',

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();