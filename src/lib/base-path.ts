/** Resolve site-local URLs for both root hosting and repository Pages hosting. */
export function withBase(path: string, base = import.meta.env?.BASE_URL ?? '/'): string {
  const prefix = base.replace(/\/+$/, '');
  if (!prefix || !path.startsWith('/') || path.startsWith('//')) return path;
  if (path === prefix || path.startsWith(`${prefix}/`) || path.startsWith(`${prefix}?`) || path.startsWith(`${prefix}#`)) {
    return path;
  }
  return `${prefix}${path}`;
}

/** Route matching uses paths without the deployment prefix. */
export function stripBase(path: string, base = import.meta.env?.BASE_URL ?? '/'): string {
  const prefix = base.replace(/\/+$/, '');
  if (!prefix) return path;
  if (path === prefix) return '/';
  return path.startsWith(`${prefix}/`) ? path.slice(prefix.length) : path;
}
