'use strict';

const assert = require('assert');
const { formatGreeting } = require('./index');

assert.strictEqual(formatGreeting('GitHub Actions'), 'Hello, GitHub Actions!');
assert.strictEqual(formatGreeting('  Octocat  '), 'Hello, Octocat!');
assert.throws(() => formatGreeting('  '), TypeError);
assert.throws(() => formatGreeting(null), TypeError);

console.log('All tests passed.');
