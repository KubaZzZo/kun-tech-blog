import type { Element, Root } from 'hast';
import { visit } from 'unist-util-visit';
import { withBase } from '../base-path';

/** Keep root-relative Markdown links and media inside a repository deployment. */
export function rehypeBasePath({ base }: { base: string }) {
  return (tree: Root) => {
    visit(tree, 'element', (node: Element) => {
      for (const key of ['href', 'src', 'poster']) {
        const value = node.properties[key];
        if (typeof value === 'string') node.properties[key] = withBase(value, base);
      }
    });
  };
}
