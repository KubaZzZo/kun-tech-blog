import { execFileSync } from 'node:child_process';
import { statSync } from 'node:fs';
import path from 'node:path';

// Package the corresponding editable source alongside the static deployment.
// Generated output, local dependencies, Site identity and runtime state stay out.
const archive = path.resolve('dist/blog-source.tar.gz');
execFileSync('tar', [
  '-czf',
  archive,
  '--exclude=.git',
  '--exclude=node_modules',
  '--exclude=dist',
  '--exclude=.astro',
  '--exclude=.sites-runtime',
  '--exclude=.openai',
  '--exclude=.cache',
  '--exclude=.env',
  '--exclude=.env.*',
  '--exclude=backups',
  '--exclude=outputs',
  '--exclude=.agents',
  '--exclude=.codex',
  '--exclude=./docs/assets',
  '--exclude=./docs/design',
  '--exclude=./public/fonts/GenJyuuGothic-P-Regular',
  '--exclude=./public/fonts/GenJyuuGothic-P-Bold',
  '.',
]);
console.log(`Editable source archive: ${(statSync(archive).size / 1024 / 1024).toFixed(1)} MB`);
