# Sample npm package for GitHub Packages

A minimal CommonJS package with a test suite and a release-triggered GitHub Actions workflow.

## Before publishing

1. In `package.json` and `package-lock.json`, replace `your-github-username` in the package name with your lowercase GitHub username or organization. Keep the scope identical in both files.
2. Push the project to GitHub.
3. Create a GitHub Release. Creating the release starts the workflow, which runs `npm ci` and `npm test` before publishing the package to GitHub Packages.

The workflow grants `GITHUB_TOKEN` the `packages: write` permission required to publish. Ensure GitHub Actions is enabled for the repository.

## Run locally

```sh
npm ci
npm test
```

The sample function is exported from `index.js`:

```js
const { formatGreeting } = require('@your-github-username/sample-package');

console.log(formatGreeting('GitHub Actions'));
```
