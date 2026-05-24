/**
 * pnpmfile.cjs
 * 
 * This file is used by pnpm to apply patches and overrides to dependencies.
 * It replaces the deprecated "pnpm" field in package.json.
 * 
 * See: https://pnpm.io/pnpmfile
 */

function readPackage(pkg, context) {
  // Apply dependency overrides
  if (!pkg.pnpm) {
    pkg.pnpm = {};
  }

  // Override tailwindcss>nanoid to use version 3.3.7
  if (!pkg.pnpm.overrides) {
    pkg.pnpm.overrides = {};
  }
  pkg.pnpm.overrides['tailwindcss>nanoid'] = '3.3.7';

  return pkg;
}

module.exports = {
  hooks: {
    readPackage,
  },
};
