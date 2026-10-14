import assert from 'node:assert/strict';
import { test } from 'node:test';
import { stripBase, withBase } from './base-path';

test('repository URLs are scoped exactly once, including home, queries and fragments', () => {
  for (const path of ['/', '/post/hello', '/rss.xml', '/img/anime/naruto.webp', '/?q=Java', '/#posts']) {
    const scoped = withBase(path, '/kun-tech-blog/');
    assert.equal(scoped, `/kun-tech-blog${path}`);
    assert.equal(withBase(scoped, '/kun-tech-blog/'), scoped);
    assert.equal(stripBase(scoped, '/kun-tech-blog/'), path);
  }
});

test('external and relative URLs stay intact and prefix matching respects segment boundaries', () => {
  for (const path of [
    'https://example.com/img/a.webp',
    '//cdn.example.com/a',
    '#title',
    'img/a.webp',
    'mailto:a@example.com',
  ]) {
    assert.equal(withBase(path, '/kun-tech-blog/'), path);
  }
  assert.equal(withBase('/kun-tech-blog-other/post', '/kun-tech-blog/'), '/kun-tech-blog/kun-tech-blog-other/post');
  assert.equal(stripBase('/kun-tech-blog-other/post', '/kun-tech-blog/'), '/kun-tech-blog-other/post');
  assert.equal(stripBase('/kun-tech-blog', '/kun-tech-blog/'), '/');
  assert.equal(withBase('/post/hello', '/'), '/post/hello');
});
