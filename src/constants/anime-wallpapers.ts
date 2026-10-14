import { withBase } from '@lib/base-path';
/** Locally hosted artwork; these IDs are also the allowed visitor preferences. */
export const animeWallpapers = [
  {
    id: 'one-piece',
    name: '海贼王',
    caption: '向着下一片海',
    image: withBase('/img/anime/one-piece.webp'),
    thumb: withBase('/img/anime/one-piece-thumb.webp'),
  },
  {
    id: 'naruto',
    name: '火影忍者',
    caption: '有热爱，就有自己的忍道',
    image: withBase('/img/anime/naruto.webp'),
    thumb: withBase('/img/anime/naruto-thumb.webp'),
  },
  {
    id: 'ultraman',
    name: '奥特曼',
    caption: '相信光，也相信每一步积累',
    image: withBase('/img/anime/ultraman.webp'),
    thumb: withBase('/img/anime/ultraman-thumb.webp'),
  },
  {
    id: 'bleach',
    name: '死神',
    caption: '在自己的世界里，继续向前',
    image: withBase('/img/anime/bleach.webp'),
    thumb: withBase('/img/anime/bleach-thumb.webp'),
  },
] as const;
