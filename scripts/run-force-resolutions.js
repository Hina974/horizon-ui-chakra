#!/usr/bin/env node
const { spawnSync } = require('child_process');

const npmNodeExecpath = process.env.npm_node_execpath || process.execPath;
const npmExecpath = process.env.npm_execpath;

if (!npmExecpath) {
  console.error('Error: npm_execpath is not set in the npm script environment.');
  process.exit(1);
}

const result = spawnSync(npmNodeExecpath, [npmExecpath, 'exec', '--package', 'npm-force-resolutions', 'npm-force-resolutions'], {
  stdio: 'inherit',
});

process.exit(result.status || 0);
