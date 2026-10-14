---
title: 小站搭建记录：动漫壁纸与透明卡片
date: '2026-10-13 18:03:00'
link: site-log
description: 这个小站采用了什么主题、哪些地方做了定制，以及以后该从哪里维护。
cover: /img/anime/ultraman-thumb.webp
categories: [站点手记]
tags: [Astro, Koharu, 博客]
colophon: [ai-lead]
---

## 设计起点

小站以余弦博客使用的 Koharu 主题为基础，保留原有的导航、文章列表、分类、归档和阅读目录。

在这个基础上加入四套动漫壁纸，以及覆盖在壁纸上的玻璃卡片。图片全部由本站提供，访问时不需要等待壁纸来源网站。

## 这次的定制

- 首页壁纸可以切换：海贼王、火影忍者、奥特曼、死神。
- 壁纸偏好保存在浏览器中，切换页面后继续沿用。
- 浅色与深色模式都有对应的卡片背景。
- 文章正文的底色比列表卡片更实，保证代码和公式的可读性。
- 保留全文搜索、目录、代码复制、分类、标签、归档和 RSS。
- 关闭示例统计、音乐与在线编辑配置，日常内容通过 Git 管理。

## 以后从哪里维护

| 文件或目录 | 内容 |
| --- | --- |
| `config/site.yaml` | 名称、简介、导航、分类、友链 |
| `src/content/blog/` | 文章 Markdown |
| `src/pages/about.md` | 关于页面 |
| `public/img/anime/` | 动漫壁纸与缩略图 |
| `src/constants/anime-wallpapers.ts` | 壁纸名称、路径与顺序 |
| `src/styles/theme/anime-glass.css` | 透明卡片和背景样式 |

文章的固定链接与源码都可以保留，未来迁移到其他静态托管服务时也不需要重新录入内容。

## 开源来源

感谢 [Koharu](https://github.com/cosZone/astro-koharu) 与 [余弦の博客](https://blog.cosine.ren/)。主题原始许可证与上游说明保留在源码中，本站定制样式独立于主题核心文件，便于后续维护。
